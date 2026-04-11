# FCT Computational Engines — Complete Integration Guide

> **Path:** `src/computational_models/README_ENGINES.md`  
> **Copyright:** © 2026 Liran O.G. — CC BY-NC-ND 4.0 (see [LICENSE](../../LICENSE))  
> **Audience:** Computational physicists, data scientists, ML researchers  
> **Updated:** 2026-04-01

---

## Why a Consciousness Theory Needs a Cosmological Pipeline and a Galaxy Dataset

The Fractal Cosmopsychism Theory is not a philosophical essay — it is a **quantitative dynamical system** that makes predictions across **30 orders of magnitude** in physical scale, from cortical microcircuits to the cosmic web.

Testing it requires two external instruments:

| Instrument | Role | FCT Scale |
|---|---|---|
| **cosmic-ib-dashboard** | Measure η_IB from real galaxy data | Cosmic scale (n = 5) |
| **SDSS_Data** | Provide the raw observational data for the dashboard | Data reproducibility layer |

These two repositories are **independent projects** — they are not embedded inside FCT. FCT references them by URL and reads their outputs. This document explains what each one is, why it exists, how it connects to FCT's formalism, and how to use it.

---

## The Three-Engine Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                  FRACTAL COSMOPSYCHISM THEORY                        │
│                                                                      │
│  SYN-04 (UIBIC): η_IB ≈ 0.42 at ALL physical scales                │
│  SYN-08: Stage Transition Operator (threshold-driven phase jump)     │
│  SYN-13: 6D Master Equation  (κ, Φ, ζ, ω, W, β)                    │
└────────────────────────────┬──────────────────────┬─────────────────┘
                             │                      │
                             ▼                      ▼
              ┌────────────────────┐     ┌─────────────────┐
              │ cosmic-ib-dashboard│     │   SDSS_Data     │
              │                    │     │                 │
              │ Python / Streamlit  │     │ 105 files       │
              │ MIT                │◄────│ 27 MB zipped    │
              │                    │     │ MIT + SDSS      │
              │ Measures η_IB from │     │ policy          │
              │ real galaxy data   │     │                 │
              │ Result: 0.0045     │     │ Source of all   │
              │ (93× gap vs 0.42)  │     │ galaxy catalogs │
              │                    │     │ used by the     │
              │ Tests: SYN-04      │     │ dashboard       │
              │ UIBIC conjecture   │     │                 │
              └────────────────────┘     └─────────────────┘

Both are EXTERNAL — referenced by URL only — never embedded in FCT.
```

---

## Engine 1: cosmic-ib-dashboard — Empirical η_IB Pipeline

**Repository:** https://github.com/LiranOG/cosmic-ib-dashboard  
**License:** MIT  
**Language:** Python 3.10+ / Streamlit  
**Version:** v1.0.0 (operational, 21 unit tests passing, Dockerized)  
**FCT Tier:** Tier B — directly tests SYN-04 (UIBIC) prediction  
**FCT Role:** Paper V precursor — first empirical measurement of η_IB at cosmic scale  

### 2.1 What It Is

A Python/Streamlit data pipeline that processes SDSS DR18 galaxy data to compute the **Information Bottleneck efficiency η_IB** at cosmological scales. This is the FCT's first direct empirical experiment.

### 2.2 The Central Question It Answers

FCT's UIBIC conjecture (SYN-04) predicts:

$$\eta_{IB}(n) \approx 0.42 \pm 0.14 \quad \forall\; n \in \{1, 2, 3, 4, 5\}$$

where n = scale level (1 = subcortical, 5 = cosmic web). The dashboard measures **n = 5** directly from real observational data:

$$\eta_{IB} = \frac{I(T;\;Y)}{I(X;\;T)}$$

where:
- $X$ = primordial CMB power spectrum fluctuations (information source)
- $T$ = galaxy density field from SDSS (the bottleneck / compressor)
- $Y$ = galaxy cluster abundance from SDSS (the relevant target variable)

### 2.3 Pipeline Architecture

```
SDSS_Data repository (pre-computed files)
    │ ↓ download_data.sh
    ▼
cosmic-ib-dashboard/data/
    ├── density_nside16.fits  (HEALPix galaxy density map — the bottleneck T)
    ├── fisher_results.npz    (Fisher information I(X ; T) = 82.93 nats)
    └── [103 more files...]
    │
    ▼ app.py
Stage 1: Ingest SDSS DR18 galaxy positions (RA, Dec, z)
    ▼
Stage 2: Build HEALPix density field (Nside = 16, ~3.7° per pixel)
    ▼
Stage 3: Compute Fisher Information I(X ; T) = 82.93 nats
    ▼
Stage 4: Estimate Mutual Information I(T ; Y) via Gaussian IB
    ▼
Stage 5: η_IB = I(T ; Y) / I(X ; T) = 0.0045
    ▼
Streamlit dashboard → interactive comparison to SYN-04 prediction
```

### 2.4 The 93× Gap: Measurement vs. Prediction

| Quantity | Value |
|---|---|
| SYN-04 prediction | $\eta_{IB} = 0.42 \pm 0.14$ |
| v1.0 measured value | $\eta_{IB} = 0.0045$ |
| Gap | **~93×** below prediction |
| Best-fit Nside | 8 (53.7 deg² pixels) |
| Fisher Information $I(X;T)$ | 82.93 nats |

Scale-dependence of the measurement (η_IB increases with pixel scale — the correlation exists):

| Nside | Pixel Area | η_IB |
|---|---|---|
| 64 | 0.84 deg² | 0.00024 |
| 32 | 3.4 deg² | 0.00150 |
| 16 | 13.4 deg² | 0.00345 |
| **8** | **53.7 deg²** | **0.00453** |

### 2.5 Why There Is a Gap (Known Methodological Limitations)

The gap is almost certainly **not** evidence that the UIBIC is wrong at cosmic scale. Known major limitations of v1.0:

1. **Gaussian bias** — The late-time galaxy density field is non-Gaussian (nonlinear gravitational collapse). The Gaussian IB estimator systematically underestimates $I(T;Y)$ — potentially by 10–100×.
2. **Coarse resolution** — HEALPix Nside = 16 misses the filamentary structure (cosmic web filaments, sheets, voids) that carries the actual compression information.
3. **2D projection** — Angular analysis misses radial clustering information along the line of sight.
4. **SDSS footprint** — SDSS covers ~25% of the sky and is magnitude-limited, not volume-limited.

### 2.6 Upgrade Path to Paper V

| Version | Key Upgrade | Gap Addressed |
|---|---|---|
| **v1.0** (current) | Gaussian IB, Nside = 16, single scale | Proof of concept |
| **v2.0** (planned) | Multi-scale smoothing R = 5–100 Mpc, plateau test | UIBIC scale-invariance prediction |
| **v3.0 / Paper V** | Non-Gaussian MI (MINE/vine copula), 6 scales (subcortical → cosmic), persistent homology | Full UIBIC test |

### 2.7 How to Use the Dashboard

```bash
git clone https://github.com/LiranOG/cosmic-ib-dashboard.git
cd cosmic-ib-dashboard

pip install -r requirements.txt

# Download pre-computed data from SDSS_Data releases
bash scripts/download_data.sh    # Linux/macOS
# or: scripts/download_data.bat  # Windows

# Launch the dashboard
streamlit run app.py
# → http://localhost:8501
```

### 2.8 Cold Truth

> The value η_IB = 0.0045 **must not appear in any publication as a measurement of the cosmic-scale IB efficiency.** It is a proof-of-concept calculation demonstrating that the pipeline works and that the gap is measurable. Closing the gap — or proving it cannot be closed — is the scientific objective of Paper V.

---

## Engine 3: SDSS_Data — Observational Data Reproducibility Package

**Repository:** https://github.com/LiranOG/SDSS_Data  
**License:** MIT (derived products) + SDSS public data policy (raw data)  
**Contents:** 105 pre-computed result files (27 MB compressed → 136 MB extracted)  
**FCT Role:** Raw data source and reproducibility package for cosmic-ib-dashboard  

### 3.1 What It Is

`SDSS_Data` is a GitHub Releases data repository storing all pre-computed data products required to run `cosmic-ib-dashboard`. It is the **data foundation** of the entire cosmic-scale empirical program.

The raw SDSS DR18 spectroscopic catalog is ~1 TB in total. `SDSS_Data` provides the pre-processed, reproducibility-ready subset: galaxy positions, density maps, Fisher matrices, and all derived quantities — so any researcher can reproduce η_IB = 0.0045 without downloading or re-processing the full survey.

### 3.2 Contents

| File / Group | Description | Size |
|---|---|---|
| `density_nside16.fits` | HEALPix galaxy density map (bottleneck T) | ~8 MB |
| `density_map.png` | Visual rendition of the density field | ~500 KB |
| `fisher_results.npz` | Fisher information matrix I(X ; T) = 82.93 nats | ~2 MB |
| ETF-score files | Ensemble Transfer Function score computations (SYN-04 § 4.4) | ~4 MB |
| Hyper-IB results | Hyperparameter sweep over IB trade-off β | ~3 MB |
| Classification 3D data | 3D visualisation data for interactive dashboard | ~10 MB |
| Remaining 99 files | Intermediate computation outputs, diagnostic plots | ~27 MB total |

### 3.3 How It Connects

The data flow is:

```
Raw SDSS DR18 catalog (~1 TB)
    │ (processed once by LiranOG using SDSS CasJobs SQL)
    ▼
SDSS_Data repository (GitHub Releases)
    │ ← frozen, versioned, reproducible
    ▼ scripts/download_data.sh
cosmic-ib-dashboard/data/  (local, on user's machine)
    │
    ▼ app.py
η_IB = 0.0045 (reproduced identically on any machine)
```

### 3.4 How to Access

```bash
# Data is downloaded automatically by the dashboard's download script:
cd cosmic-ib-dashboard
bash scripts/download_data.sh

# To inspect the release contents directly, visit:
# https://github.com/LiranOG/SDSS_Data/releases
```

### 3.5 SDSS Data Policy

The Sloan Digital Sky Survey data is public and available under the **SDSS data policy** (https://www.sdss.org/collaboration/citing-sdss/). Derived data products in `SDSS_Data` are licensed MIT. Any publication using these products must cite the appropriate SDSS data release paper (DR18: Almeida et al. 2023, ApJS, 267, 44).

---

## Legal Relationships Summary

| Repository | License | FCT Interface | GPL Risk |
|---|---|---|---|
| **cosmic-ib-dashboard** | MIT | Clone and run independently, read output | None — MIT compatible with everything |
| **SDSS_Data** | MIT + SDSS policy | Data download via GitHub Releases | None |

---

## Integration Diagram: The Complete Data Flow

```
         cosmic-ib-dashboard
    (Observational Cosmology)
              │
    Measures η_IB from SDSS DR18
    X=CMB, T=galaxies, Y=clusters
    Fisher Info I(X;T) = 82.93 nats
              │
              └──────────┐
                         │
              ┌──────────▼──────────┐
              │     SDSS_Data        │
              │ 105 pre-computed     │
              │ galaxy data files    │
              └──────────┬───────────┘
                         │
            ┌────────────▼────────────┐
            │   FCT MASTER EQUATION   │
            │   (SYN-13, SYN-13-ND)  │
            │   6D ODE: κ,Φ,ζ,ω,W,β  │
            └────────────┬────────────┘
                         │
            ┌────────────▼────────────┐
            │  EMPIRICAL PROGRAM       │
            │  Paper V: η_IB at n=5   │
            │  Open problem: 93× gap  │
            └─────────────────────────┘
```

---

## Quick Reference

| What you want to do | Where to go |
|---|---|
| Understand the full theory | [`README.md`](../../README.md) |
| Understand the legal structure | [`LEGAL.md`](../../LEGAL.md) and [`EXTERNAL_ENGINES.md`](../../EXTERNAL_ENGINES.md) |
| Deep technical dive — cosmic-ib | [`integrations/INTEGRATION_cosmic_ib_dashboard.md`](integrations/INTEGRATION_cosmic_ib_dashboard.md) |
| Run the ODE simulator (JSX) | [`jsx/SYN13_simulation.jsx`](jsx/SYN13_simulation.jsx) — see main README for setup |
| Run the cosmic dashboard | Clone https://github.com/LiranOG/cosmic-ib-dashboard |
| Get the galaxy data | https://github.com/LiranOG/SDSS_Data/releases |

---

## Cold Truth: What No Engine Has Proven

Only the cosmic-ib-dashboard has been run against real observational data, and it has not validated FCT.

- **cosmic-ib-dashboard** shows that cosmic-scale IB efficiency is 93× lower than predicted. This is most likely a methodological limitation, not a fundamental failure — but it has not been ruled out as fundamental. **Tier B — open.**
- **SDSS_Data** is a data archive. It is neutral with respect to theory validation.

These engines are tools for investigation, not proof. Every claim in this repository carries a declared epistemic tier.

---

*Document version: 2.0.0 | Last updated: 2026-04-01*  
*Supersedes: README_ENGINES.md v1.0.0 (2026-03-29)*  
*Cross-references: [EXTERNAL_ENGINES.md](../../EXTERNAL_ENGINES.md) · [LEGAL.md](../../LEGAL.md) · [SYN_REGISTRY.md](../theory_and_math/SYN_REGISTRY.md)*
