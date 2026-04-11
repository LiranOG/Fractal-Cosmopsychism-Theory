# UP-06: Public Database Replication — Zero-Cost Cross-Laboratory Validation
> **Path:** `src/empirical_protocols/upgrades/UP_06_public_database_replication.md`
> **Upgrade ID:** UP-06
> **Priority:** 🟡 High — establishes credibility before clinical trials
> **Cost:** $0 (all datasets publicly available)
> **Timeline:** 2–4 weeks per dataset
> **Source:** Complete Upgrade Protocol v3.0 (Upgrade 06)
> **Status:** ✅ Production-ready — 4 datasets inventoried with accession numbers

---

## 1. The Replication Imperative

Before requesting funding for clinical trials ($50K–$440K), the FCT must demonstrate that its proxy measures ($\eta_{IB}$, $W(t)$, $\zeta$, $\kappa_{\text{proxy}}$) are computable and behave as predicted on **public datasets** that any laboratory can download and reanalyze.

**The standard:** A reviewer who downloads the LEMON dataset and runs the FCT pipeline should obtain the same distributions and rankings as reported in the initial publication. No proprietary data, no hidden preprocessing steps, no unspecified parameters.

---

## 2. Dataset Inventory

### 2.1 Dataset 1: MPI LEMON (Primary Calibration)

| Property | Value |
|----------|-------|
| **Accession** | OpenNeuro `ds000221` |
| **$n$** | 227 (ages 20–77) |
| **Modality** | 64-channel EEG, 16 min resting state, preprocessed |
| **Role** | Primary calibration dataset for $p^*_{\text{pop}}$ |
| **Compute** | $p^*_{\text{pop}}$ (Gaussian reference), $\zeta$ at rest (LZ complexity baseline), $W(t)$ during closed-eye rest |
| **Validation** | $W(t)$ at rest should be unimodal, centered near $W \approx 0.12$ (TRF literature estimate), with SD $\approx 0.05$ |

### 2.2 Dataset 2: Christoff Lab Mind-Wandering MEG

| Property | Value |
|----------|-------|
| **Accession** | OpenNeuro `ds002833` |
| **$n$** | 20 |
| **Modality** | Simultaneous MEG + pupillometry + SART mind-wandering probes |
| **Role** | Convergent validity for $W(t)$ |
| **Compute** | $W_{\text{TRF}}$, $W_{\text{pupil}}$, $W_{\text{SART}}$ |
| **Validation** | Three-way convergent validity: $r(W_{\text{TRF}}, W_{\text{pupil}}) > 0.3$, $r(W_{\text{TRF}}, W_{\text{SART}}) > 0.3$, $r(W_{\text{pupil}}, W_{\text{SART}}) > 0.3$. If all three confirmed: convergent validity established with zero new data collection. |

### 2.3 Dataset 3: Sleep-EDF Database

| Property | Value |
|----------|-------|
| **Accession** | PhysioNet `sleep-edfx` |
| **$n$** | 197 |
| **Modality** | Polysomnography (2-channel EEG), full overnight recordings |
| **Role** | Lowest-cost validation of SYN-02R prediction P1 |
| **Compute** | $\zeta$ (LZ complexity), $W$ (simplified 2-channel TRF) across sleep stages |
| **Validation** | $\zeta$ should rank: wake $>$ REM $>$ NREM (consistent with Casali et al., 2013). $W \to 0$ during NREM (minimal stimulus-driven processing). |

### 2.4 Dataset 4: MAHNOB-HCI Emotion Database

| Property | Value |
|----------|-------|
| **Accession** | MAHNOB-HCI (available on request) |
| **$n$** | 27 |
| **Modality** | 32-channel EEG during emotional video watching |
| **Role** | $\kappa_{\text{proxy}}$ validation against emotional states |
| **Compute** | $\kappa_{\text{proxy}} = \text{KL}[q_{\text{individual}} \| p^*_{\text{pop}}]$ using LEMON-derived $p^*_{\text{pop}}$ |
| **Validation** | $r(\kappa, |\text{arousal}|) > 0.25$ (higher KL during emotionally extreme states) |

### 2.5 Dataset 5: Human Connectome Project (HCP)

| Property | Value |
|----------|-------|
| **Accession** | ConnectomeDB (1200 Subjects Release) |
| **$n$** | 1,200 |
| **Modality** | MEG + fMRI + behavioral battery |
| **Role** | Cross-scale IB invariance test (SYN-04 UIBIC) |
| **Compute** | $\eta_{IB}$ at sensory, cortical, and cognitive scales |
| **Validation** | $\eta_{IB}^{(\text{sensory})} \approx \eta_{IB}^{(\text{cortical})} \approx \eta_{IB}^{(\text{cognitive})}$ ($< 10\%$ relative deviation) |

### 2.6 Dataset 6: SDSS DR18 (Cosmic Scale)

| Property | Value |
|----------|-------|
| **Accession** | SDSS SkyServer (public SQL access) |
| **$n$** | $\sim 10^6$ galaxies |
| **Modality** | Spectroscopic redshifts, photometric properties |
| **Role** | Cosmological IB efficiency test (see `cosmic-ib-dashboard` integration) |
| **Compute** | $\eta_{IB}$ from galaxy density → cluster hierarchy |
| **Validation** | ETF-score as formalized in INTEGRATION_cosmic_ib_dashboard.md |

---

## 3. Automated Replication Pipeline

### 3.1 Architecture

```python
"""
replication_pipeline.py — Automated FCT proxy computation
across multiple public EEG datasets.
"""

import numpy as np
import mne
from scipy.signal import welch
from sklearn.decomposition import PCA
from sklearn.linear_model import Ridge

class FCReplicationPipeline:

    def __init__(self, p_star_params):
        self.mu_star = p_star_params['mu']
        self.Sigma_star = p_star_params['Sigma']
        self.pca = p_star_params['pca']

    def compute_W_trf(self, eeg_data, stimulus, sfreq=128,
                      window_s=10, step_s=1):
        """W(t) = R²_TRF / (R²_TRF + R²_AR) in sliding windows."""
        # [Full implementation in UP-02]
        ...

    def compute_zeta(self, eeg_data, sfreq=128, window_s=30):
        """ζ = LZ complexity proxy (Casali et al., 2013)."""
        eeg_binary = (eeg_data > np.median(eeg_data, axis=1,
                      keepdims=True)).astype(int)
        lz_values = []
        for ch in range(eeg_data.shape[0]):
            binary_string = ''.join(map(str, eeg_binary[ch]))
            lz = self._lz_complexity(binary_string)
            lz_values.append(lz)
        return np.mean(lz_values)

    def compute_kappa_proxy(self, eeg_features):
        """κ_proxy = KL[q_individual || p*_pop]."""
        # [Full implementation in UP-01]
        ...
```

### 3.2 Usage

```python
# Calibration phase (run once)
mu, Sigma, pca = build_p_star_pop('path/to/LEMON')
p_star = {'mu': mu, 'Sigma': Sigma, 'pca': pca}

# Replication phase (run on each dataset)
pipeline = FCReplicationPipeline(p_star)
results = {}
for dataset in ['LEMON', 'christoff', 'sleep_edf', 'MAHNOB']:
    eeg, stim, sfreq = load_dataset(dataset)
    results[dataset] = {
        'W': pipeline.compute_W_trf(eeg, stim, sfreq),
        'zeta': pipeline.compute_zeta(eeg, sfreq),
        'kappa': pipeline.compute_kappa_proxy(extract_features(eeg, sfreq))
    }
```

---

## 4. Pre-Registration for Replication Studies

Each replication analysis must be pre-registered on OSF **before downloading the dataset** (if not previously accessed). The pre-registration specifies:

1. Exact dataset accession number
2. Preprocessing pipeline (verbatim from UP-06 §3)
3. Predicted distribution parameters ($W$ mean, $\zeta$ ranking, $\kappa$ correlations)
4. Falsification criterion (e.g., "If $\zeta$ does not rank wake $>$ REM $>$ NREM at $p < 0.05$, the SYN-02R prediction P1 is disconfirmed for this modality.")

---

## 5. Success Criteria — What Constitutes "Replication"

| Criterion | Threshold | Status |
|-----------|----------|--------|
| $W(t)$ computable on all 4 EEG datasets | Yes/No | Required |
| $W(t)$ correlates with attention probes in Christoff data | $r > 0.25$ | Required |
| $\zeta$ ranks correctly across sleep stages | $p < 0.05$ | Required |
| $\kappa_{\text{proxy}}$ correlates with arousal in MAHNOB | $r > 0.20$ | Recommended |
| $\eta_{IB}$ cross-scale invariance in HCP | $< 15\%$ deviation | Recommended |
| All results reproducible from public code + public data | Yes/No | **Mandatory** |

**If all "Required" criteria are met:** Proceed to clinical trial funding applications.
**If any "Required" criterion fails:** Diagnose the failure, revise the proxy definition, and re-run before proceeding.

---

## 6. Cold Truth / Implementation Limits

**Problem 1 — The LEMON dataset is the weakest link.** If $p^*_{\text{pop}}$ derived from LEMON does not generalize to other populations (HCP, MAHNOB), the entire $\kappa_{\text{proxy}}$ framework collapses. Age, sex, and cultural distribution in LEMON (German, 20–77) may not represent a universal baseline.

**Problem 2 — 2-channel EEG (Sleep-EDF) severely limits $W(t)$ computation.** The TRF decomposition requires sufficient spatial coverage to distinguish stimulus-driven from autoregressive components. With only 2 channels, $R^2_{\text{TRF}}$ may be dominated by noise rather than signal.

**Problem 3 — "Replication" on the same preprocessing pipeline is not independent replication.** True replication requires a different laboratory running a different pipeline and obtaining consistent results. Computational replication (same code, same data, same result) is necessary but not sufficient.

**Problem 4 — SDSS cosmic-scale validation operates at a totally different scale.** Demonstrating IB efficiency at the galaxy-cluster scale does not validate the neural-scale predictions, and vice versa. Cross-scale invariance (SYN-04 UIBIC) is the bridging conjecture, and it remains Tier B until independently validated at both scales.

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source: Complete Upgrade Protocol v3.0 (Upgrade 06)*
*Cross-references: `UP_01_p_star_operationalization.md`, `UP_02_W_t_trf_bistability.md`, `INTEGRATION_cosmic_ib_dashboard.md`*
