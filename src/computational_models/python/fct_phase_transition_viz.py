# ==============================================================================
# FRACTAL COSMOPSYCHISM: PHASE TRANSITION PIPELINE (SYN-10.1)
# ==============================================================================
#
# This pipeline implements the conceptual framework for detecting FCT
# "Stage Transitions" in continuous EEG data. It computes three state-space
# trajectories:
#
#   1. Veil Density (ζ) proxy   — via FOOOF aperiodic exponent
#   2. Presence / Free Will (W) — via mTRF / AR variance ratio
#   3. CSD Indicator            — rolling variance of W(t)
#
# REQUIREMENTS:
#   pip install numpy scipy scikit-learn statsmodels fooof
#   pip install mtrf          # mTRFpy — Python port of mTRF-Toolbox
#
# NOTE: This pipeline requires real EEG data and an auditory stimulus
# envelope to produce output. Without data, it defines the analysis
# framework and exits cleanly.
# ==============================================================================

import numpy as np
from scipy.signal import welch
from statsmodels.tsa.ar_model import AutoReg

# ── FOOOF import (required) ──────────────────────────────────────────────────
try:
    import fooof
except ImportError:
    raise ImportError(
        "FOOOF is required for the Veil Density computation.\n"
        "Install it with: pip install fooof"
    )

# ── mTRFpy import (optional — falls back to AR-only mode) ───────────────────
_HAS_MTRF = False
try:
    from mtrf.model import TRF
    _HAS_MTRF = True
except ImportError:
    import warnings
    warnings.warn(
        "mTRFpy not installed. W(t) will be computed using AR-only mode "
        "(no stimulus-driven TRF component). For full functionality:\n"
        "  pip install mtrf",
        stacklevel=2,
    )


def compute_psd(epoch, fs=250, nperseg=256):
    """Compute Power Spectral Density using Welch's method."""
    freqs, psd = welch(epoch, fs=fs, nperseg=min(nperseg, len(epoch)))
    return freqs, psd


def compute_variance_explained(actual, predicted):
    """Compute R² (variance explained) between actual and predicted signals."""
    n = min(len(actual), len(predicted))
    ss_res = np.sum((actual[:n] - predicted[:n]) ** 2)
    ss_tot = np.sum((actual[:n] - np.mean(actual[:n])) ** 2)
    return 1.0 - (ss_res / (ss_tot + 1e-12))


def calculate_karmic_bifurcation(
    EEG_data, Audio_stimulus, window_size=5.0, step_size=1.0, fs=250
):
    """
    Compute the three FCT state-space trajectories from continuous EEG.

    Parameters
    ----------
    EEG_data : np.ndarray
        Continuous raw time-series [μV].
    Audio_stimulus : np.ndarray
        Continuous auditory envelope (same length and fs as EEG_data).
    window_size : float
        Integration window for state-variables (seconds). Default: 5.0.
    step_size : float
        Sliding window increment (seconds). Default: 1.0.
    fs : int
        Sampling frequency in Hz. Default: 250.

    Returns
    -------
    chi_trajectory : np.ndarray
        Veil Density proxy (FOOOF aperiodic exponent) per window.
    W_trajectory : np.ndarray
        Presence / Free Will metric per window.
    CSD_indicator : np.ndarray
        Critical Slowing Down early warning (rolling variance of W).
    """
    win_samples = int(window_size * fs)
    step_samples = int(step_size * fs)
    num_windows = (len(EEG_data) - win_samples) // step_samples

    # Initialize state-space vectors
    chi_trajectory = np.zeros(num_windows)      # Veil Density
    W_trajectory   = np.zeros(num_windows)      # Presence / Free Will
    CSD_indicator  = np.zeros(num_windows)      # Critical Slowing Down

    for i in range(num_windows):
        # Extract current temporal epoch
        start = i * step_samples
        X_epoch = EEG_data[start : start + win_samples]
        S_epoch = Audio_stimulus[start : start + win_samples]

        # ------------------------------------------------------------------
        # MODULE A: VEIL DENSITY PROXY (FOOOF)
        # ------------------------------------------------------------------
        freqs, psd = compute_psd(X_epoch, fs=fs)
        fm = fooof.FOOOF(peak_width_limits=[1, 8])
        fm.fit(freqs, psd, freq_range=[2, 40])

        # Extract the aperiodic exponent (1/f drop-off)
        chi_trajectory[i] = fm.aperiodic_params_[1]

        # ------------------------------------------------------------------
        # MODULE B: PRESENCE VS HISTORY RATIO (mTRF & AR)
        # ------------------------------------------------------------------
        # 1. Fit Autoregressive model (Karma/History proxy)
        ar_model = AutoReg(X_epoch, lags=10).fit()
        X_pred_history = ar_model.predict()
        R2_history = compute_variance_explained(X_epoch, X_pred_history)

        # 2. Fit Temporal Response Function (Present sensory grounding)
        if _HAS_MTRF:
            trf = TRF(direction=1)
            trf.train(
                stimulus=S_epoch.reshape(-1, 1),
                response=X_epoch.reshape(-1, 1),
                fs=fs,
                tmin=0,
                tmax=0.4,
            )
            X_pred_now = trf.predict(
                stimulus=S_epoch.reshape(-1, 1)
            ).flatten()
            R2_now = compute_variance_explained(X_epoch, X_pred_now)
        else:
            # Fallback: use a second AR model on the stimulus-locked
            # correlation as a rough R²_now proxy
            correlation = np.correlate(X_epoch, S_epoch, mode="same")
            R2_now = float(np.corrcoef(X_epoch, correlation)[0, 1] ** 2)

        # 3. Calculate W(t) — The Bistable Presence Metric
        W_trajectory[i] = (R2_now ** 2) / ((R2_now ** 2) + (R2_history ** 2) + 1e-12)

        # ------------------------------------------------------------------
        # MODULE C: CRITICAL SLOWING DOWN (Early Warning Signal)
        # ------------------------------------------------------------------
        if i > 10:
            CSD_indicator[i] = np.var(W_trajectory[i - 10 : i])

    return chi_trajectory, W_trajectory, CSD_indicator


# ==============================================================================
# ENTRY POINT
# ==============================================================================
if __name__ == "__main__":
    print("=" * 70)
    print("FCT Phase Transition Pipeline (SYN-10.1)")
    print("=" * 70)
    print()
    print("This pipeline requires real EEG data and an auditory stimulus")
    print("envelope to compute state-space trajectories.")
    print()
    print("Components loaded successfully:")
    print(f"  ✓ FOOOF           — Veil Density (ζ) proxy")
    print(f"  {'✓' if _HAS_MTRF else '⚠'} mTRFpy          — {'Loaded' if _HAS_MTRF else 'Not installed (AR-only fallback active)'}")
    print(f"  ✓ statsmodels     — Autoregressive model")
    print(f"  ✓ scipy           — Welch PSD")
    print()
    print("Usage:")
    print("  from fct_phase_transition_viz import calculate_karmic_bifurcation")
    print("  chi, W, CSD = calculate_karmic_bifurcation(eeg_data, audio_stim)")
    print()
    print("The bifurcation point is where ζ drops below critical threshold")
    print("and W(t) surges — indicating a Stage Transition (SYN-08).")
    print("=" * 70)