# README: `fct_phase_transition_viz.py` — Phase Transition Pipeline (SYN-10.1)
> **Path:** `src/computational_models/python/README_phase_transition_viz.md`
> **Language:** Python 3.10+ | **Dependencies:** `numpy`, `fooof`, `mTRF`, `statsmodels`
> **SYN Links:** SYN-10 (Free Will Operator), SYN-02R (Veil Thickness), SYN-08 (Critical Slowing Down)
> **Tier:** B — all outputs are empirical proxies

---

## 1. Purpose

This script computes three state-space time series from continuous EEG data in sliding windows, implementing the core measurement pipeline for the FCT empirical program:

| Output Variable | FCT Construct | Module | Computation |
|----------------|--------------|--------|-------------|
| `chi_trajectory` | $\zeta(t)$ — Veil density | A (FOOOF) | Aperiodic exponent from 1/f spectral decomposition |
| `W_trajectory` | $W(t)$ — Free will / Presence | B (mTRF + AR) | $R^2_{\text{now}}$ / ($R^2_{\text{now}}$ + $R^2_{\text{history}}$) |
| `CSD_indicator` | CSD early warning | C (Variance) | Rolling variance of $W(t)$ over 10-window horizon |

---

## 2. Architecture

```
EEG_data + Audio_stimulus
      │
      ▼
┌─────────────────────────────────┐
│  Sliding Window (5s, step 1s)  │
└─────────┬───────────┬──────────┘
          │           │
    ┌─────▼─────┐  ┌──▼──────────┐
    │ Module A  │  │  Module B   │
    │ FOOOF PSD │  │ mTRF + AR  │
    │ → χ(t)    │  │ → W(t)     │
    └───────────┘  └──────┬──────┘
                          │
                    ┌─────▼─────┐
                    │ Module C  │
                    │ Var(W(t)) │
                    │ → CSD     │
                    └───────────┘
```

---

## 3. Function Signature

```python
def calculate_karmic_bifurcation(
    EEG_data,           # np.ndarray[float64] — continuous raw EEG (μV)
    Audio_stimulus,     # np.ndarray[float64] — auditory envelope
    window_size=5.0,    # float — integration window (seconds)
    step_size=1.0       # float — sliding step (seconds)
) -> Tuple[np.ndarray, np.ndarray, np.ndarray]:
    # Returns: (chi_trajectory, W_trajectory, CSD_indicator)
```

---

## 4. Module Details

### Module A — Veil Density Proxy (FOOOF)

Uses the `fooof` library (now `specparam`) to decompose the power spectrum into periodic (oscillatory) and aperiodic (1/f) components. The aperiodic exponent `aperiodic_params_[1]` serves as the $\zeta$ proxy:

- **Higher exponent** → steeper 1/f slope → more structured / "veiled" processing
- **Lower exponent** → flatter spectrum → more disordered / "unveiled" state

**Frequency range:** 2–40 Hz. **Peak width limits:** 1–8 Hz (prevents overfitting to narrow artifacts).

### Module B — Presence vs. History Ratio

1. **AR(10) model** — Autoregressive model of order 10 predicts EEG from its own past (the "karmic history" proxy)
2. **mTRF model** — Temporal Response Function maps auditory stimulus envelope to EEG (the "present moment" proxy)
3. **$W(t) = R^2_{\text{now}}^2 / (R^2_{\text{now}}^2 + R^2_{\text{history}}^2)$** — Note: uses **squared** $R^2$ terms (quadratic weighting)

**Important:** The $W(t)$ formula in this script uses quadratic $R^2$ weighting ($R^{2,2}$ ratio), which differs from the linear ratio in UP-02. Both formulations are valid but produce different dynamic ranges. The UP-02 linear formulation is the canonical version for publications.

### Module C — Critical Slowing Down Indicator

Rolling variance of $W(t)$ over a 10-window history. CSD predicts variance increase approaching a bifurcation point (SYN-08). Only computed after 10+ windows of data.

---

## 5. Dependencies

```
pip install numpy fooof statsmodels
# mTRF: requires internal implementation or Python port of mTRF-Toolbox
```

**Note:** `fooof` is now `specparam` (as of 2024). Replace `import fooof` with `import specparam as fooof` for current versions.

The `mTRFtrain` and `mTRFpredict` functions reference the mTRF-Toolbox (originally MATLAB; Crosse et al., 2016). A Python implementation exists in `mtrf` or can be substituted with `mne.decoding.ReceptiveField`.

---

## 6. Usage Example

```python
import numpy as np
from fct_phase_transition_viz import calculate_karmic_bifurcation

# Generate synthetic data (replace with real EEG)
fs = 250  # Hz
duration = 300  # 5 minutes
eeg = np.random.randn(fs * duration) * 50  # μV
stim = np.random.randn(fs * duration)

chi, W, csd = calculate_karmic_bifurcation(eeg, stim, window_size=5.0, step_size=1.0)

# Look for bifurcation: chi drops below threshold AND W surges
bifurcation_idx = np.where((chi < np.mean(chi) - 2*np.std(chi)) & (W > 0.5))[0]
```

---

## 7. Dimensional Audit

| Variable | Units | Check |
|----------|-------|-------|
| `EEG_data` | μV | ✅ |
| `Audio_stimulus` | arbitrary (envelope) | ✅ |
| `chi_trajectory` | dimensionless (spectral exponent) | ✅ |
| `W_trajectory` | dimensionless ∈ [0,1] | ✅ |
| `CSD_indicator` | dimensionless (variance) | ✅ |

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source file: `fct_phase_transition_viz.py` (3.3 KB, 65 lines)*
