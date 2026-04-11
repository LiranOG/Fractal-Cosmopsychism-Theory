# EEG Protocol for SYN-08: Stage Transition Detection via Critical Slowing Down
> **Path:** `src/empirical_protocols/protocols/SYN_08_stage_transition_EEG.md`
> **Formula:** SYN-08 (Critical Slowing Down / Stage Transition Operator)
> **Purpose:** Laboratory-ready EEG acquisition and real-time CSD analysis specification
> **Source:** Session 02 + Session 06 (Paper II)
> **Status:** ✅ Production-ready specification

---

## 1. Scope

This document specifies the EEG hardware, acquisition, preprocessing, and analysis pipeline required to detect critical slowing down (CSD) preceding developmental stage transitions. It serves as the technical annex to Paper Protocol 02 and the CSD Psychiatric PoC clinical trial.

---

## 2. Hardware Specification

### 2.1 Portable Configuration (Palliative Cohort)

| Component | Specification |
|-----------|--------------|
| System | Emotiv EPOC FLEX (portable, wireless) |
| Channels | 32 configurable positions (10-20 subset) |
| Sampling rate | 256 Hz |
| Resolution | 14-bit, 0.51 μV LSB |
| Impedance | $< 20$ kΩ (saline-based electrodes) |
| Recording duration | 5 min eyes-closed resting state |
| Data format | EDF+ |

### 2.2 Research Configuration (Retreat Cohort)

| Component | Specification |
|-----------|--------------|
| System | BrainProducts actiChamp Plus |
| Channels | 64 (10-10 system) + 2 EOG + 1 ECG |
| Sampling rate | 500 Hz |
| Resolution | 24-bit |
| Impedance | $< 10$ kΩ (active electrodes) |
| Recording duration | 10 min eyes-closed morning session |
| Reference | Average reference (online: FCz; offline: average) |

---

## 3. Preprocessing Pipeline

```
Step 1: Import raw data → MNE-Python (v1.5+)
Step 2: Bandpass filter 1–45 Hz (FIR, zero-phase, order 1650)
Step 3: Notch filter 50 Hz (or 60 Hz) ± 2 Hz
Step 4: ICA decomposition (FastICA, 20 components)
Step 5: ICLabel automatic classification → reject eye, muscle, cardiac
Step 6: Interpolate bad channels (spherical spline, max 10% channels)
Step 7: Re-reference to average
Step 8: Epoch into 30-s non-overlapping windows
Step 9: Reject epochs with peak-to-peak > 150 μV on any channel
```

**Quality gate:** Sessions with $> 30\%$ rejected epochs are excluded from analysis.

---

## 4. Proxy Computation

### 4.1 $\hat{\Phi}(t)$ — IIT Proxy

**LZ complexity (Lempel-Ziv-76, normalized):**

```python
def compute_phi_proxy(eeg_epoch, sfreq):
    """
    LZ complexity as IIT proxy (Casali et al., 2013).
    Input: eeg_epoch (n_channels, n_samples)
    Output: phi_hat (scalar)
    """
    # Binarize at median per channel
    binary = (eeg_epoch > np.median(eeg_epoch, axis=1, keepdims=True)).astype(int)
    
    # Concatenate channels for joint complexity
    binary_string = ''.join(str(b) for ch in binary for b in ch)
    
    lz = lempel_ziv_complexity(binary_string)
    
    # Normalize by random binary string expectation
    n = len(binary_string)
    lz_norm = lz / (n / np.log2(n + 1))
    
    return lz_norm
```

### 4.2 $\hat{\kappa}(t)$ — Karmic Load Proxy

KL divergence from UP-01 population reference:

$$\hat{\kappa}(t) = \text{KL}[q_{\text{epoch}}(t) \| p^*_{\text{pop}}]$$

Computed via closed-form Gaussian KL on 50-dimensional PCA feature space.

### 4.3 Composite Order Parameter $\hat{\Psi}(t)$

$$\boxed{\hat{\Psi}(t) = \hat{\Phi}(t) \cdot e^{-\hat{\kappa}(t) / \kappa_s}}$$

where $\kappa_s = 3.0$ nats (from UP-04 calibration).

---

## 5. CSD Detection Algorithm

### 5.1 Autocorrelation Time Estimation

For each rolling window of 3 weeks (minimum 3 data points per window):

$$\hat{\Psi}(t) = \rho \cdot \hat{\Psi}(t-1) + \varepsilon(t)$$

Estimate $\rho$ via maximum-likelihood AR(1). The autocorrelation time:

$$\tau_{\text{AC}} = \frac{-\Delta t}{\ln |\hat{\rho}|} \quad [\text{days}]$$

### 5.2 Real-Time CSD Trigger

```python
def csd_trigger(tau_history, baseline_weeks=4):
    """
    Returns True if CSD detected (for treatment timing).
    Requires 2 consecutive weeks with tau_AC > 2σ above baseline.
    """
    baseline = tau_history[:baseline_weeks]
    mu_base = np.mean(baseline)
    sigma_base = np.std(baseline)
    threshold = mu_base + 2 * sigma_base
    
    if len(tau_history) < baseline_weeks + 2:
        return False
    
    return (tau_history[-1] > threshold and tau_history[-2] > threshold)
```

### 5.3 Validation Metrics

| Metric | Definition | Required Value |
|--------|-----------|---------------|
| Sensitivity | P(CSD detected | transition occurs) | $> 0.70$ |
| Specificity | P(no CSD | no transition) | $> 0.60$ |
| Lead time | Median weeks between CSD detection and transition | $4 \pm 2$ weeks |
| False positive rate | CSD triggers without subsequent transition within 8 weeks | $< 30\%$ |

---

## 6. Data Management

| Item | Specification |
|------|--------------|
| Storage | BIDS-formatted EEG (BIDS v1.8+) |
| Anonymization | Subject IDs replaced with random codes before analysis |
| Sharing | OpenNeuro deposit within 6 months of publication |
| Code | All analysis scripts on GitHub with pre-data commit timestamp |
| Version control | All preprocessing parameter changes tracked via git |

---

## 7. Cold Truth / Implementation Limits

**Problem 1 — Portable EEG (Emotiv) has lower signal quality than research-grade systems.** Channel count (32 vs. 64), resolution (14-bit vs. 24-bit), and impedance control are all reduced. LZ complexity estimates may be noisier.

**Problem 2 — AR(1) estimation requires stationary time series.** Neural $\hat{\Psi}(t)$ over weeks is non-stationary by nature (circadian, seasonal, health-status trends). Pre-registered detrending mandatory.

**Problem 3 — The 3-week rolling window requires 3+ data points.** With weekly EEG, this is exactly 3 points — the minimum for AR(1) estimation, producing high variance in $\hat{\rho}$. Consider semi-weekly EEG for retreat cohort.

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source: Session 02 + Session 06*
*Cross-references: `SYN_08_critical_slowing_down.md`, `paper_protocol_02_CSD_stage_transition.md`, `UP_01_p_star_operationalization.md`*
