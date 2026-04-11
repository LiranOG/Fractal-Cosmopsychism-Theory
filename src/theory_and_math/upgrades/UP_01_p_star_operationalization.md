# UP-01: Operational Definition of $p^*$ — Data-Driven Reference Distribution
> **Path:** `src/empirical_protocols/upgrades/UP_01_p_star_operationalization.md`
> **Upgrade ID:** UP-01
> **Priority:** 🔴 Critical — unlocks SYN-05, 06, 07, 10, 13
> **Cost:** $0 (uses public datasets)
> **Timeline:** 6–8 weeks
> **Source:** Complete Upgrade Protocol v3.0 (Upgrade 01)
> **Status:** ✅ Production-ready specification

---

## 1. The Problem

Every karma formula in the FCT contains $\text{KL}[q_{\text{node}}(t) \| p^*]$. In its original formulation, $p^*_{\text{IS-NESS}}$ is a **Tier D variable** — permanently inaccessible. This renders every downstream formula numerically undefined: you cannot compute a KL divergence without both distributions. The entire dynamical system SYN-13 is an open system not because of a theoretical choice but because of a **measurement gap**.

### 1.1 Three Criteria for the Fix

The operationalization must simultaneously satisfy:

1. **Empirical estimability:** $p^*_{\text{ref}}$ must be computable from existing data
2. **Interpretive coherence:** It must be defensible as a "coherent baseline" both statistically and philosophically
3. **Construct validity:** $\text{KL}[q \| p^*_{\text{ref}}]$ must correlate with established clinical measures of psychological dysregulation

---

## 2. Three-Tier Reference Architecture

Rather than a single $p^*$, UP-01 establishes a three-tier architecture:

$$\boxed{p^{*(k)}_{\text{ref}} \quad k \in \{1, 2, 3\} \quad \text{decreasing accessibility, increasing theoretical fidelity}}$$

### 2.1 Tier 1 — Population Resting-State Reference (Most Accessible)

$$\boxed{p^*_{\text{pop}} := \mathcal{N}\!\left(\boldsymbol{\mu}_{\text{EEG-rest}},\; \boldsymbol{\Sigma}_{\text{EEG-rest}}\right)}$$

**Estimated from:** Resting-state EEG power spectral density (PSD) features across a large healthy normative sample.

**Dataset:** MPI LEMON ($n = 227$, ages 20–77, 64-channel EEG, OpenNeuro `ds000221`).

**Feature vector:** 5-band PSD (δ, θ, α, β, γ) × 64 channels = 320-dimensional, reduced to top 50 principal components via PCA with Ledoit-Wolf shrinkage covariance estimation.

**Python implementation:**

```python
import numpy as np
from sklearn.decomposition import PCA
from sklearn.covariance import LedoitWolf

def build_p_star_pop(eeg_dataset_path, n_components=50):
    """
    Construct p*_pop from resting-state EEG features
    using Ledoit-Wolf covariance for high-dimensional stability.
    """
    X = load_eeg_features(eeg_dataset_path)  # (n_subjects, n_features)
    pca = PCA(n_components=n_components, whiten=True)
    X_pca = pca.fit_transform(X)             # (n_subjects, 50)
    lw = LedoitWolf().fit(X_pca)
    mu = np.mean(X_pca, axis=0)              # (50,)
    Sigma = lw.covariance_                   # (50, 50)
    return mu, Sigma, pca

def compute_kappa_proxy(q_individual, mu_star, Sigma_star):
    """
    KL[q_node || p*_pop] — closed-form Gaussian KL divergence.
    """
    d = len(mu_star)
    delta_mu = q_individual['mu'] - mu_star
    Sigma_i = q_individual['Sigma']
    Sigma_star_inv = np.linalg.inv(Sigma_star)
    kl = 0.5 * (
        np.trace(Sigma_star_inv @ Sigma_i) +
        delta_mu.T @ Sigma_star_inv @ delta_mu -
        d +
        np.log(np.linalg.det(Sigma_star) / np.linalg.det(Sigma_i))
    )
    return max(0, kl)  # nats
```

### 2.2 Tier 2 — Variational Autoencoder Latent Prior (Medium Term)

Train a $\beta$-VAE on the LEMON dataset. The latent prior $p(\mathbf{z}) = \mathcal{N}(\mathbf{0}, \mathbf{I})$ serves as $p^*_{\text{VAE}}$:

$$\text{KL}[q_\phi(\mathbf{z} | \mathbf{x}_i) \| p(\mathbf{z})] = \frac{1}{2}\sum_{j=1}^d \left(\mu_{i,j}^2 + \sigma_{i,j}^2 - \ln\sigma_{i,j}^2 - 1\right)$$

This is computed automatically during VAE inference — no separate KL computation required. The ELBO loss gives $\kappa_{\text{VAE}}$ for free.

**Training corpus:** Temple University Hospital EEG Corpus (TUH, $n > 10{,}000$ recordings). "Normal" subset ($\approx 1{,}500$ recordings) for the healthy latent manifold.

**Differential prediction:** VAE-based $\kappa$ should be more sensitive to subtle neural shifts than Gaussian KL (e.g., during early meditation retreat: $\Delta\kappa_{\text{VAE}} > \Delta\kappa_{\text{Gaussian}}$, paired $t$-test, $p < 0.05$).

### 2.3 Tier 3 — Normative Behavioral Reference (Highest Ecological Validity)

$$p^*_{\text{WVS}} = \mathcal{N}(\boldsymbol{\mu}_{\text{WVS}},\, \boldsymbol{\Sigma}_{\text{WVS}})$$

Estimated from World Values Survey Wave 7 ($n > 80{,}000$, 60+ countries). Operates in behavioral space. Useful for population-level SYN-05 dynamics but not for real-time neural measurement.

---

## 3. Construct Validity Protocol

The KL proxy must demonstrate convergent validity with five established clinical scales **before** any downstream test:

| Criterion Measure | Expected $r$ | Direction | Justification |
|-------------------|-------------|-----------|---------------|
| ACE (Adverse Childhood Experiences) | $r > 0.35$ | + | Trauma increases divergence from norm |
| DERS (Difficulties in Emotion Regulation) | $r > 0.40$ | + | Dysregulation = deviation from baseline |
| PTCI (Post-Traumatic Cognitions Inventory) | $r > 0.30$ | + | Maladaptive beliefs = model misalignment |
| PHQ-9 (Depression severity) | $r > 0.25$ | + | Depressive deviation from normative affect |
| LZ complexity (EEG) | $r < -0.30$ | − | Higher KL = lower neural complexity (SYN-02R) |

**Protocol:** Pre-register all five predictions on OSF with exact one-tailed thresholds before computing any correlation. If $\text{KL}[q_i \| p^*_{\text{pop}}]$ correlates in the predicted direction with **all five** measures, construct validity is established.

---

## 4. Wasserstein Stability Constraint

The $p^*_{\text{pop}}$ distribution must be stable across demographic subgroups:

$$\boxed{W_2(p^*_{\text{pop, male}},\, p^*_{\text{pop, female}}) < \epsilon_{\text{demo}}}$$

where $W_2$ is the 2-Wasserstein distance and $\epsilon_{\text{demo}}$ is set at the 95th percentile of within-group bootstrap resampling variance. If violated, demographic-stratified references must be used.

---

## 5. The Philosophical Demotion Statement (Mandatory)

> *The following statement must appear verbatim in every paper using $p^*_{\text{pop}}$:*
>
> "The reference distribution $p^*_{\text{pop}}$ used in this analysis is an empirical operationalization of the theoretical construct designated 'coherent baseline' in the Fractal Cosmopsychism model. This operationalization is **not derived** from the theoretical construct and constitutes a methodological approximation. Its validity is established by the convergent validity analyses reported in Table 1. The philosophical claim that $p^*_{\text{pop}} \approx p^*_{\text{IS-NESS}}$ is a Tier D assertion not subject to direct empirical test. All statistical claims in this paper are conditional on the validity of $p^*_{\text{pop}}$ as a proxy."

---

## 6. Dimensional Audit

| Term | Units | Check |
|------|-------|-------|
| $\text{KL}[q \| p^*_{\text{pop}}]$ | nats (dimensionless ratio under log) | ✅ |
| $\kappa(t) = \int_0^t \text{KL}[\cdot]\, ds$ | nats·s | ✅ |
| $d\kappa/dt$ | nats/s | ✅ |
| PSD features (log-normalized) | dimensionless | ✅ |
| PCA loadings | dimensionless | ✅ |

---

## 7. Cold Truth / Implementation Limits

**Problem 1 — The Gaussian approximation is a strong assumption.** Real EEG distributions are non-Gaussian (heavy-tailed, multimodal). The Gaussian KL formula is exact only for Gaussian distributions. For non-Gaussian cases, kernel density estimation or $k$-NN KL estimators (Pérez-Cruz, 2008) increase computational cost by 2–3 orders of magnitude.

**Problem 2 — $p^*_{\text{pop}}$ is age-, sex-, and culture-dependent.** The LEMON sample (ages 20–77, German cohort) may not represent a universal "coherent baseline." Cross-cultural validation on the HCP and MAHNOB datasets is necessary but may reveal systematic demographic biases.

**Problem 3 — The species gap $\varepsilon_{\text{species}}$ is permanent.** By definition, $p^*_{\text{pop}} \neq p^*_{\text{IS-NESS}}$. The gap $\varepsilon_{\text{species}} = \mathbb{E}[\log p^* - \log p_{\text{ref}}]$ can be bounded but never eliminated. The sensitivity analysis (SYN-13-ND, §9) shows that Stages I–III predictions are catastrophically sensitive to this gap.

**Problem 4 — The VAE Tier 2 introduces model-dependence.** The learned manifold depends on architecture choices (encoder depth, $\beta$ value, latent dimension). Different architectures will produce different $\kappa_{\text{VAE}}$ values. Hyperparameter sensitivity analysis is mandatory before claiming any VAE-based result.

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source: Complete Upgrade Protocol v3.0 (Upgrade 01)*
*Cross-references: `SYN_05_karmic_load_dynamics.md`, `SYN_13_master_equation.md`, `UP_06_public_database_replication.md`*
