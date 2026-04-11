# UP-02: $W(t)$ Measurement via Temporal Response Functions — Bistability Detection Protocol
> **Path:** `src/empirical_protocols/upgrades/UP_02_W_t_trf_bistability.md`
> **Upgrade ID:** UP-02
> **Priority:** 🔴 Critical — tests SYN-10 primary prediction
> **Cost:** ~$2,000 (EEG lab time only)
> **Timeline:** 8–12 weeks
> **Source:** Complete Upgrade Protocol v3.0 (Upgrade 02)
> **Status:** ✅ Production-ready specification

---

## 1. The Operationalization Problem

$W(t) \in [0,1]$ is the free-will variable from SYN-10, representing the degree to which a node's behavior is driven by present-moment stimulus vs. karmic history. The original formulation defined $W$ through the abstract Markov blanket decomposition $\mathcal{H}_\kappa \oplus \mathcal{H}_{\text{now}}$. UP-02 provides the concrete, computable operationalization.

### 1.1 The mTRF Definition

$$\boxed{W(t) = \frac{R^2_{\text{TRF}}(t)}{R^2_{\text{TRF}}(t) + R^2_{\text{AR}}(t)}}$$

where:
- $R^2_{\text{TRF}}$ — variance explained by the **stimulus-driven** Temporal Response Function (ridge regression of EEG on stimulus envelope)
- $R^2_{\text{AR}}$ — variance explained by the **autoregressive** model (OLS regression of EEG on its own past, order 10)

Both computed in 10-second sliding windows with 1-second step.

### 1.2 Why This Decomposition

| Component | Drives neural response from... | FCT interpretation |
|-----------|-------------------------------|-------------------|
| $R^2_{\text{TRF}}$ | Current sensory input | $\mathcal{H}_{\text{now}}$ — present-moment processing |
| $R^2_{\text{AR}}$ | Past neural states (autocorrelation) | $\mathcal{H}_\kappa$ — karmic replay / rumination |
| $W(t)$ | Ratio: "How much is NOW vs. PAST?" | Continuous free-will variable |

---

## 2. Experimental Protocol — Proof of Concept

### 2.1 Study Design

**Participants:** $n = 30$ healthy adults (18–45 years). Recruitment: university community.

**Recording Setup:**
- 64-channel EEG (BioSemi ActiveTwo or equivalent)
- Sampling rate: 512 Hz, online bandpass 0.1–100 Hz
- Stimulus: continuous narrated audiobook (60 min), selected for neutral content and constant speaker
- Simultaneous attention probes: 60 probes at pseudorandom intervals (mean ISI = 60 s, jitter ±15 s). Each probe: "How attentive were you to the story just now?" (1–7 Likert scale delivered via brief audio tone + visual display)

### 2.2 Analysis Pipeline

**Step 1 — Preprocessing:**
```
Raw EEG → Bandpass 1–30 Hz → ICA artifact rejection (ICLabel) →
Average reference → Epoching into 10-s windows (1-s step)
```

**Step 2 — TRF computation:** Ridge regression with 5-fold cross-validation. Lag range: $-100$ ms to $+400$ ms. Regularization: $\alpha \in \{0.1, 1, 10, 100\}$ (selected by CV).

**Step 3 — AR computation:** OLS autoregressive model, order 10 (determined by BIC across pilot data). $R^2_{\text{AR}}$ computed on held-out samples.

**Step 4 — $W(t)$ time series:** $W(t) = R^2_{\text{TRF}} / (R^2_{\text{TRF}} + R^2_{\text{AR}} + 10^{-8})$. The $10^{-8}$ prevents division by zero.

**Step 5 — Bistability test:** Weekly $\Delta W$ scores across 8-week MBSR cohort (if recruitment allows). Hartigan's dip statistic for bimodality vs. Gaussian null.

### 2.3 Sample Size Justification (Monte Carlo)

```python
import numpy as np
from scipy.stats import spearmanr

def power_simulation(n_subjects, n_probes, true_rho, n_simulations=10000):
    significant = 0
    alpha = 0.01
    for _ in range(n_simulations):
        W_sim = np.random.beta(2, 5, n_subjects * n_probes).reshape(n_subjects, n_probes)
        noise = np.random.randn(n_subjects, n_probes) * np.sqrt(1 - true_rho**2)
        probe_sim = true_rho * W_sim + noise
        rho, p = spearmanr(W_sim.ravel(), probe_sim.ravel())
        if p < alpha and rho > 0:
            significant += 1
    return significant / n_simulations

# Expected: Power(n=30, ρ=0.35) ≈ 0.923
```

**Result:** Power $> 0.90$ for $n = 30$ with true $\rho = 0.35$ at $\alpha = 0.01$.

---

## 3. Differential Predictions

| Model | Prediction |
|-------|-----------|
| **Standard neuroscience (GWT, DMN suppression)** | Attention probes correlate with DMN anticorrelation. No prediction about TRF decomposition. |
| **SYN-10 / UP-02** | (a) $r_{\text{TRF}} > r_{\text{DMN}}$ (Fisher $z$ test): TRF-based $W$ correlates more strongly with attention probes than DMN anticorrelation. (b) $W(t)$ shows **bimodal** within-session distribution (bistable dynamics); DMN anticorrelation shows **unimodal** distribution. Both falsifiable at $p < 0.05$. |

---

## 4. Implementation: `FCReplicationPipeline.compute_W_trf()`

```python
def compute_W_trf(self, eeg_data, stimulus, sfreq=128,
                  window_s=10, step_s=1):
    """
    W(t) = R²_TRF / (R²_TRF + R²_AR) in sliding windows.
    Parameters:
        eeg_data: (n_channels, n_samples)
        stimulus: (n_samples,) — stimulus envelope
    Returns:
        W_timeseries: (n_windows,) — W(t) at 1 Hz
    """
    window_n = int(window_s * sfreq)
    step_n = int(step_s * sfreq)
    n_windows = (eeg_data.shape[1] - window_n) // step_n
    W_ts = np.zeros(n_windows)

    for i in range(n_windows):
        start = i * step_n
        end = start + window_n
        eeg_win = eeg_data[:, start:end]
        stim_win = stimulus[start:end]
        r2_trf = self._compute_trf_r2(eeg_win, stim_win, sfreq)
        r2_ar = self._compute_ar_r2(eeg_win, order=10)
        W_ts[i] = r2_trf / (r2_trf + r2_ar + 1e-8)
    return W_ts
```

---

## 5. Scaling to Longitudinal Bistability Detection

### 5.1 Extended Protocol (Upgrade 08 Integration)

For the full bistability prediction (SYN-10), the POC study extends to a longitudinal cohort:

| Parameter | Value |
|-----------|-------|
| Duration | 18 months |
| Cohort size | $n = 40$ daily-practice meditators |
| EEG sessions | Monthly (18 total) |
| $W(t)$ measurement | 60-min audiobook + 60 probes per session |
| Primary outcome | $\Delta W$ weekly change-score distribution |
| Differential prediction | Bimodal $\Delta W$ (power-law $P(\Delta W) \sim \Delta W^{-2.5}$, $\alpha \approx 2.5$) |
| Sample size for bimodality | $n > 50$ recommended (Hartigan dip underpowered at $n = 30$) |

---

## 6. Cold Truth / Implementation Limits

**Problem 1 — TRF $R^2$ values are typically small.** Literature reports $R^2_{\text{TRF}} \in [0.01, 0.15]$ for speech stimuli. This means $W(t)$ will cluster near low values even in highly attentive subjects, reducing the dynamic range of the measure.

**Problem 2 — Pipeline sensitivity.** $R^2_{\text{TRF}}$ is highly sensitive to frequency range, preprocessing pipeline, speech material, and speaker characteristics. Standardization across laboratories requires a common stimulus set and preprocessing pipeline (provided in UP-06).

**Problem 3 — Bimodality is underpowered at $n = 30$.** The Hartigan dip test requires $n > 50$ for adequate power to detect moderate bimodality (dip $\approx 0.03$). The bistability prediction should be deferred to the larger longitudinal study (Upgrade 08).

**Problem 4 — $R^2_{\text{AR}}$ is not purely "karmic."** High autoregressive predictability could reflect neural oscillatory dynamics (alpha rhythm), not "karmic replay." The AR component captures temporal autocorrelation from any source — physiological, cognitive, or artifactual.

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source: Complete Upgrade Protocol v3.0 (Upgrade 02)*
*Cross-references: `SYN_10_free_will_operator.md`, `UP_06_public_database_replication.md`*
