# UIBIC Cosmological Formalization v3.0
> **Path:** `src/research_reports/UIBIC_cosmological_formalization_v3.md`
> **Source:** RR-04 (UIBIC Cosmological Formalization v3.0)
> **Formula:** SYN-04 (UIBIC) applied to cosmic scales
> **Tier:** B–C (formalization is Tier B; cosmic application is Tier C until tested)

---

## 1. The Cosmological IB Lagrangian

The IB functional generalized to scale-dependent coarse-graining:

$$\mathcal{L}_{\text{IB}}[T; k] = I(X; T|k) - \beta_{\text{IB}}(k) \cdot I(T; Y|k)$$

where $k$ is the spatial coarse-graining scale (wavenumber) and $\beta_{\text{IB}}(k)$ is the scale-dependent compression-relevance trade-off parameter.

### 1.1 UIBIC as Scale Invariance

$$\frac{d\eta_{\text{IB}}}{d\ln k}\bigg|_{\text{critical}} = 0$$

At the critical regime, the IB efficiency becomes independent of scale — the cosmic web and neural networks solve the same optimization problem at their respective critical points.

---

## 2. Variable Ontology for Cosmic Application

### 2.1 Source $X$: Primordial Density Fluctuations

Physically: $\delta(\mathbf{x}, z_{\text{init}})$ — the initial over-density field seeded during inflation.

Observable: CMB angular power spectrum $C_\ell^{TT}$.

$$H(X) = \frac{1}{2} \sum_\ell (2\ell + 1) \ln\left(\frac{C_\ell}{C_\ell^{\text{noise}}}\right) \quad [\text{nats}]$$

### 2.2 Target $Y$: Late-Time Observables

Multiple choices, each with different information content:
- Halo mass function $n(M, z)$ — mass-dominated information
- Galaxy velocity field $\mathbf{v}(\mathbf{x})$ — dynamical information
- Cluster abundance $\mathcal{N}(M > M_{\text{th}}, z)$ — counting statistics

### 2.3 Bottleneck $T$: Cosmic Web Topology

The compressed representation — the cosmic web skeleton characterized by:
- **Persistent homology:** Betti numbers $\beta_0$ (clusters), $\beta_1$ (filament loops), $\beta_2$ (void shells)
- **Persistence diagrams:** birth-death pairs of topological features across density thresholds
- **Euler characteristic:** $\chi = \beta_0 - \beta_1 + \beta_2$

$$I(T; Y) = \int p(t, y) \ln\frac{p(t, y)}{p(t)p(y)} \, dt \, dy \quad [\text{nats}]$$

---

## 3. The Non-Gaussianity Challenge

### 3.1 Where Gaussian IB Works

CMB anisotropies are Gaussian to high accuracy (Planck 2018: $f_{NL}^{\text{local}} = -0.9 \pm 5.1$). The Gaussian IB estimator (Chechik et al., 2005) is valid for $X$.

### 3.2 Where It Fails

Late-time LSS is profoundly non-Gaussian due to gravitational collapse:
- Skewness $S_3 = \langle\delta^3\rangle / \langle\delta^2\rangle^2 \sim \mathcal{O}(1)$ at $k > 0.1 \, h/\text{Mpc}$
- Higher-order correlations contain $> 50\%$ of cosmological information at non-linear scales

### 3.3 Required Estimators

| Method | Applicability | Compute Cost |
|--------|--------------|-------------|
| Gaussian IB (Chechik) | CMB ($X$) only | ↓ Low |
| $k$-NN MI estimator (Kraskov) | Moderate non-Gaussianity | ↑↑ Medium |
| MINE (neural MI estimation) | Full non-Gaussianity | ↑↑↑ High |
| Vine copula IB (Czado) | Full non-Gaussianity | ↑↑↑↑ Very High |

---

## 4. The Connected 4-Point Correlation as $\hat{\Phi}_{\text{cosmic}}$

$$\Phi_{\text{cosmic}} \approx I(\delta_A; \delta_B) - \max_{\text{partition}} \sum_k I(\delta_{A_k}; \delta_{B_k})$$

This reduces to the connected 4-point correlation function:

$$\xi^{(c)}_{1234} = \langle\delta_1\delta_2\delta_3\delta_4\rangle - \langle\delta_1\delta_2\rangle\langle\delta_3\delta_4\rangle - \text{perms}$$

Measurable from galaxy surveys (SDSS, DESI, Euclid). Non-zero $\xi^{(c)}$ indicates genuine information integration beyond pairwise correlations — the cosmic analog of IIT's $\Phi$.

---

## 5. Cold Truth

**The epistemological ceiling:** Even if $\eta_{\text{IB}}^{\text{cosmic}} \approx \eta_{\text{IB}}^{\text{neural}}$, this proves shared optimization structure, not shared consciousness. The philosophical step from "information processing efficiency" to "experiential qualia" remains in Tier D. The formalization is rigorous; the interpretation is metaphysical.

---

*Document version: 3.0 | Last updated: 2026-03-29*
*Source: UIBIC_Cosmological_Formalization_v3.md.docx*
*Cross-references: `SYN_04_universal_ib_invariance.md`, `UIBIC_cross_scale_test_upgraded.md`*
