# INTEGRATION: Cosmic IB Dashboard — Empirical PoC for SYN-04 (UIBIC)
> **Path:** `src/simulations_and_code/INTEGRATION_cosmic_ib_dashboard.md`
> **Repository:** [`cosmic-ib-dashboard`](https://github.com/LiranOG/cosmic-ib-dashboard)
> **Language:** Python 3.10+ / Streamlit
> **License:** MIT
> **Version:** v1.0.0 (8 commits, stable)
> **Tier Classification:** B — Empirical Computation (directly tests SYN-04 predictions)
> **FCT Role:** Paper V precursor — first empirical measurement of $\eta_{IB}$ at cosmological scales ($n = 5$)
> **Status:** ✅ Operational | 21 unit tests passing | Dockerized | CI/CD via GitHub Actions

---

## 1. Architectural Position in the FCT Framework

```
SYN-03 (Fractal Architecture)
    │
    ▼
SYN-04 (UIBIC Conjecture)
    │   Prediction: η_IB(n=5, cosmic) ≈ 0.42 ± 0.14
    │
    ├──→ UIBIC Upgraded Edition (theoretical protocol)
    │
    └──→ ┌─────────────────────────────────┐
         │  cosmic-ib-dashboard             │  ← YOU ARE HERE
         │  EMPIRICAL v1.0 PoC             │
         │  Measured: η_IB ≈ 0.0045        │
         │  Gap: ~93× below prediction     │
         └─────────────────────────────────┘
                    │
                    ▼
         Paper V: "Universal η_IB from
         neurons to galaxies" (future)
```

This dashboard is the **first operational attempt** to measure $\eta_{IB}$ at the cosmic scale using real observational data. It is the empirical stepping stone between the theoretical prediction (SYN-04) and the full Paper V protocol.

---

## 2. The Pipeline — Data Flow Architecture

### 2.1 Core Question

> *"How efficiently does the large-scale galaxy density field $T$ compress primordial information $X$ (the CMB power spectrum) into galaxy cluster abundance $Y$?"*

### 2.2 IB Variable Mapping (Cosmological Scale)

| IB Variable | Observable | Dashboard Implementation | Unit |
|-------------|-----------|-------------------------|------|
| $X$ (Source) | CMB primordial power spectrum | $C_\ell^{TT}$ from Planck 2018 | $\mu\text{K}^2$ |
| $T$ (Bottleneck) | Galaxy density field | HEALPix density map from SDSS DR18 spectroscopic catalog, $N_{\text{side}} = 16$ | galaxies/sr |
| $Y$ (Relevance) | Galaxy cluster abundance | Halo mass function / cluster counts from SDSS photometric catalog | counts/volume |

### 2.3 Pipeline Stages

```
┌────────────────────┐
│ Stage 1: SDSS Data │  SDSS DR18 spectroscopic catalog
│   Ingestion        │  → SQL query → galaxy positions
│                    │  → (RA, Dec, z) triples
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Stage 2: Density   │  HEALPix pixelization (Nside = 16)
│   Field Estimation │  → density_nside16.fits
│                    │  → Galaxy count per pixel → density map
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Stage 3: Fisher    │  Fisher Information computation
│   Information      │  → fisher_results.npz
│                    │  → I(X ; T) estimated via
│                    │    Fisher information matrix
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Stage 4: Mutual    │  I(T ; Y) estimation via
│   Information      │  correlation-based Gaussian
│   Estimation       │  IB approximation
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Stage 5: η_IB      │  η_IB = I(T ; Y) / I(X ; T)
│   Computation &    │  → Streamlit interactive dashboard
│   Visualization    │  → Comparison to SYN-04 predictions
└────────────────────┘
```

### 2.4 The Core Computation

$$\eta_{IB} = \frac{I(T;\; Y)}{I(X;\; T)} \approx 0.0045$$

against the SYN-04 prediction:

$$\eta_{IB}^{\text{SYN-04}}(n = 5) = 0.42 \pm 0.14$$

**Measured gap:** $\sim 93\times$ below prediction.

---

## 3. Repository Structure

```
cosmic-ib-dashboard/
├── app.py                    # Main Streamlit dashboard (~600 lines)
├── requirements.txt          # Pinned Python dependencies
├── Dockerfile                # Multi-stage Docker build
├── .github/workflows/ci.yml  # GitHub Actions CI (test + lint)
├── .streamlit/config.toml    # Dark theme configuration
│
├── data/
│   └── README.md             # Complete data file inventory (105 files)
│
├── scripts/
│   ├── download_data.sh      # Data download from GitHub Releases
│   ├── download_data.bat     # Windows equivalent
│   └── extract_data.sh       # Extraction helper
│
├── notebooks/
│   └── exploration.ipynb     # Interactive data exploration
│
└── tests/
    └── test_data_loading.py  # 21 unit tests (all mock-based)
```

**Data:** 105 pre-computed result files (27 MB compressed → 136 MB extracted), including:
- `density_map.png` — HEALPix visualization
- `density_nside16.fits` — density field in FITS format
- `fisher_results.npz` — Fisher information computation results
- ETF-score computations, hyper-IB results, classification outputs

**Test Categories:**
- `TestFisherLoading` — Fisher information data integrity
- `TestEtaIBLoading` — $\eta_{IB}$ computation pipeline
- `TestHyperIBLoading` — Hyperparameter variation
- `TestETFLoading` — ETF-score computation (SYN-04 § 4.4)
- `TestClassification3D` — 3D classification visualization
- `TestMissingFilesGraceful` — Graceful degradation under missing data
- `TestComputedQuantities` — Derived quantity consistency checks

---

## 4. Cross-Reference to SYN-04 Formal Predictions

| SYN-04 Prediction | Dashboard Measurement | Status |
|-------------------|----------------------|--------|
| $\eta_{IB}(n=5) = 0.42 \pm 0.14$ | $\eta_{IB} \approx 0.0045$ | ❌ $93\times$ gap |
| ETF-score$(n=5) = 0.30 \pm 0.20$ | Computed but not yet matched to SYN-04 threshold | 🟡 Pending |
| $\hat{\Phi}$-band$(n=5) \in [0.2, 0.4)$ | Not operationalized in v1.0 | 🔴 Future |
| Plateau in $\eta_{IB}(\ell)$ at void scales ($R \sim 30$–$50$ Mpc) | Not tested in v1.0 (single smoothing scale) | 🔴 Future |

---

## 5. Integration into the FCT Repository

### 5.1 Git Submodule Strategy

The `cosmic-ib-dashboard` repository is maintained as an **independent GitHub repository** and integrated into the FCT monorepo via Git submodule:

```bash
git submodule add https://github.com/LiranOG/cosmic-ib-dashboard.git \
    src/simulations_and_code/cosmic-ib-dashboard
```

This preserves the dashboard's independent CI/CD pipeline, Docker deployment, and issue tracking while making it reachable from the FCT repository tree.

### 5.2 Directory Position

```
Fractal-Cosmopsychism-Theory/
└── src/
    └── simulations_and_code/
        ├── INTEGRATION_cosmic_ib_dashboard.md    ← THIS FILE
        ├── cosmic-ib-dashboard/                  ← Git submodule
        └── ...
```

---

## 6. The v1.0 → Paper V Upgrade Path

| Version | Scope | Gap Addressed |
|---------|-------|--------------|
| **v1.0** (current) | SDSS DR18, single-scale $\eta_{IB}$, Gaussian IB | Proof of concept — "can we compute $\eta_{IB}$ at all?" |
| **v2.0** (planned) | Multi-scale coarse-graining ($R = 5$–$100$ Mpc), void-scale plateau test | Tests the UIBIC scale-invariance prediction directly |
| **v3.0** (Paper V) | 6 scales (subcortical to cosmic), non-Gaussian IB (vine copulas), ETF-score cross-correlation | Full UIBIC test with mechanistic ETF-Geometric basis |

### v2.0 Priority Upgrades

1. **Multi-scale smoothing:** Apply Gaussian smoothing at $R \in \{5, 10, 20, 30, 50, 75, 100\}$ Mpc and compute $\eta_{IB}(R)$ at each scale
2. **Plateau detection:** Test for $\partial \eta_{IB}/\partial \ell = 0$ (SYN-04 § 5.3)
3. **Non-Gaussian MI estimation:** Replace Gaussian IB with MINE (Mutual Information Neural Estimation) or vine copula methods to handle gravitational non-Gaussianity
4. **Persistent homology:** Compute Betti numbers $(\beta_0, \beta_1, \beta_2)$ as the bottleneck $T$ instead of raw density field
5. **Volume correction:** Current SDSS spectroscopic footprint covers $\sim 1/4$ of the sky; correction for selection function bias

---

## 7. Cold Truth — Four Non-Negotiable Concessions

These problems are stated without qualification. They are not softened.

**Problem 1 — The 93× gap is not merely a statistical fluctuation; it likely reflects fundamental methodology limitations.** The v1.0 pipeline uses a coarse HEALPix density map ($N_{\text{side}} = 16$, corresponding to $\sim 3.7°$ per pixel) as the bottleneck $T$. This resolution is drastically insufficient to capture the fine-grained topological structure (filaments, sheets, voids) that the UIBIC predicts should be the true information-carrying representation. The measured $\eta_{IB} \approx 0.0045$ likely reflects the information retained by this *particular, very crude* pixelization — not the inherent information compression efficiency of the cosmic web itself. A high-resolution persistent homology approach may recover substantially higher $\eta_{IB}$.

**Problem 2 — This is a v1.0 prototype built by a non-specialist in cosmological statistics.** The Gaussian IB estimator applied to the galaxy density field imports a known systematic bias: the late-time density field is **explicitly non-Gaussian** due to nonlinear gravitational collapse (see SYN-04 Cold Truth § Problem 1). The Gaussian assumption likely underestimates the mutual information $I(T;\; Y)$, artificially depressing $\eta_{IB}$. A rigorous measurement requires non-Gaussian MI estimation (vine copula; Czado, 2019) or neural MI estimation (MINE; Belghazi et al., 2018), which are not implemented in v1.0.

**Problem 3 — Selection function bias.** The SDSS spectroscopic catalog is *not* a volume-limited sample. Galaxy selection depends on apparent magnitude, fiber collisions, and spectral type. The density field derived from this catalog is convolved with the survey selection function. Without explicit correction, the measured $\eta_{IB}$ reflects the information content of the *survey* as much as the information content of the *cosmic web*.

**Problem 4 — The dashboard is a methodological stepping stone, not a scientific result.** The value $\eta_{IB} \approx 0.0045$ should not appear in any publication as a "measurement of the cosmic-scale IB efficiency." It is a proof-of-concept calculation demonstrating that the pipeline *works* — that SDSS data can be ingested, density fields constructed, and $\eta_{IB}$ computed end-to-end. The gap between 0.0045 and the SYN-04 prediction of 0.42 is an open problem that the v2.0/v3.0 upgrades must address. Closing this gap — or conclusively demonstrating that it cannot be closed — is the scientific objective of Paper V.

> **Overall verdict:** The `cosmic-ib-dashboard` is the first empirical engagement with SYN-04. It proves the pipeline is functional and identifies the exact limitations that v2.0 and Paper V must resolve. The 93× gap is an *invitation to improve methodology*, not evidence for or against the UIBIC conjecture at this stage.

---

## 8. Dimensional Audit — Pipeline Consistency

| Computation | Input Units | Output Units | Consistent | Notes |
|-------------|------------|-------------|-----------|-------|
| Galaxy density field $\rho(\hat{n})$ | galaxies/sr (HEALPix pixel counts) | — | ✅ | Discrete count → density |
| $I(X;\; T)$ via Fisher information | nats | nats | ✅ | Fisher matrix → MI bound |
| $I(T;\; Y)$ via correlation | nats | nats | ✅ | Gaussian MI estimate |
| $\eta_{IB} = I(T;Y)/I(X;T)$ | nats / nats | dimensionless | ✅ | Ratio of MIs |

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Repository: [github.com/LiranOG/cosmic-ib-dashboard](https://github.com/LiranOG/cosmic-ib-dashboard)*
*Cross-references: `SYN_04_universal_ib_invariance.md`, `SYN_REGISTRY.md`*
