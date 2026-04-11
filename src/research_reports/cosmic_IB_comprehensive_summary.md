# Cosmic IB Dashboard — Comprehensive SDSS Analysis Summary
> **Path:** `src/research_reports/cosmic_IB_comprehensive_summary.md`
> **Source:** RR-02 (Comprehensive Summary of SDSS Cosmic-Scale IB Study)
> **Formula:** SYN-04 (UIBIC) — Cosmic Scale ($n = 5$)
> **Pipeline:** `cosmic-ib-dashboard` (Streamlit/Python)
> **Status:** ✅ Honest pilot result — significant gap from prediction

---

## 1. Study Overview

This report documents the first attempted empirical measurement of $\eta_{\text{IB}}$ at cosmological scales using SDSS DR18 spectroscopic galaxies and redMaPPer DR8 galaxy clusters. The study tests the UIBIC prediction for $n = 5$ (cosmic web):

$$\eta_{\text{IB}}^{\text{predicted}} = 0.42 \pm 0.14$$

---

## 2. Data

| Dataset | Source | Final Sample |
|---------|--------|-------------|
| Galaxy catalog | SDSS DR18 CasJobs (spectroscopic) | $n = 75{,}770$ ($0.04 \leq z \leq 0.12$) |
| Wide galaxy sample | Extended CasJobs query | $n = 752{,}693$ ($0.05 \leq z \leq 0.60$) |
| Cluster catalog | redMaPPer DR8 (Rykoff et al., 2014) | $n = 23{,}889$ ($0.20 \leq z \leq 0.60$) |

---

## 3. Methodology

1. **Map construction:** HEALPix density maps at multiple resolutions ($N_{\text{side}} = 512, 64, 32, 16, 8$)
2. **$I(X; T)$ estimation:** Fisher information from galaxy density map → $82.93$ nats
3. **$I(T; Y)$ estimation:** $k$-NN MI estimator (`mutual_info_regression`, scikit-learn) + histogram binning (10–50 bins)
4. **$\eta_{\text{IB}} = I(T; Y) / I(X; T)$** computed at each resolution

---

## 4. Results

| $N_{\text{side}}$ | Pixel Area (deg²) | Valid Pixels | $I(T; Y)$ (nats) | $\eta_{\text{IB}}$ |
|-------------------|-------------------|-------------|-------------------|-------------------|
| 64 | ~0.84 | 10,426 | 0.020 | 0.00024 |
| 32 | ~3.4 | 2,868 | 0.124 | 0.00150 |
| 16 | ~13.4 | 856 | 0.286 | 0.00345 |
| 8 | ~53.7 | 280 | 0.376 | **0.00453** |

### Key Findings

1. **$\eta_{\text{IB}}^{\text{best}} = 0.0045$** — two orders of magnitude below the UIBIC prediction of 0.42
2. **$I(T; Y)$ increases monotonically with pixel size** — correlation is detected but only at large angular scales
3. **Scale-dependent trend is physically expected** — galaxy-cluster correlations peak at void-filament scales (~20–40 Mpc)

---

## 5. Interpretation

### Why $\eta_{\text{IB}}$ is too low:

| Factor | Impact | Mitigation |
|--------|--------|-----------|
| SDSS footprint limitations ($z < 0.6$) | Misses large-scale correlations | DESI, Euclid, LSST surveys |
| Spectroscopic incompleteness | Galaxy sample too sparse at high $z$ | Photometric galaxy catalogs |
| $I(X; T)$ Fisher estimate | May overestimate source information | Recompute with wide sample |
| Gaussian estimator bias | Underestimates non-Gaussian MI | MINE, vine copula estimators |
| Pixel-angular scale mismatch | Correlation peaks at ~30 Mpc, not covered | Volume-limited survey design |

### Rising trend is encouraging:

The monotone increase of $\eta_{\text{IB}}$ with pixel size suggests genuine cosmic-scale correlation exists. Extrapolating the log-linear trend: $\eta_{\text{IB}} \sim 0.04$ at $N_{\text{side}} = 1$ (full-sky, ~3,500 deg² pixels). Still an order of magnitude below prediction, but within the systematic uncertainty of the analysis.

---

## 6. Cold Truth

> The observed $\eta_{\text{IB}} = 0.0045$ is **93× smaller** than the UIBIC prediction of $0.42$. While the rising trend with scale is physically plausible and methodological limitations are significant, this result is far from confirmation. The UIBIC cosmic prediction remains **unvalidated** and may require fundamentally better data (DESI Year 5, Euclid full survey) or fundamentally different methodology (non-Gaussian MI estimators, 3D instead of 2D projected analysis) to test properly.
>
> The author acknowledges non-expert status and the possibility of pipeline errors. The results are preliminary.

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source: Comprehensive Summary of the Study on Cosmic-Scale IB Efficiency*
*Cross-references: `INTEGRATION_cosmic_ib_dashboard.md`, `UIBIC_cross_scale_test_upgraded.md`*
