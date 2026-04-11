# Paper Protocol 05: Universal $\eta_{\text{IB}}$ — From Neurons to Galaxies
> **Path:** `src/empirical_protocols/paper_protocols/paper_protocol_05_cross_scale_UIBIC.md`
> **Formula:** SYN-03/04 (Fractal Isomorphism / UIBIC)
> **Target Journal:** Physical Review Letters / Nature Physics (IF ~9.1–25.3)
> **Tier:** B — Formal Analog, Directly Testable
> **Budget:** £95K | **Timeline:** 12 months | **Datasets:** 6 (spanning 30 orders of magnitude)
> **Source:** Session 06, Paper V
> **Status:** ✅ Pre-registration ready

---

## 1. Abstract

The Universal Information Bottleneck Invariance Conjecture (UIBIC, SYN-04) predicts that systems at comparable levels of integrated information exhibit approximately equal IB efficiency $\eta_{\text{IB}}$, regardless of physical substrate. We test this radical prediction across six scales — subcortical neural circuits, EEG, fMRI, social networks, ecological networks, and the cosmic web — using a unified Gaussian IB estimator and IIT proxies appropriate to each scale. Pre-registered acceptance criterion: within-$\hat{\phi}$-band standard deviation $\sigma(\eta_{\text{IB}}) < 0.08$ at $\geq 3$ of 5 integration bands.

---

## 2. Theoretical Framework

### 2.1 The UIBIC Statement

$$\boxed{\eta_{\text{IB}}(n) \approx f(\hat{\Phi}(n)) \quad \text{for all systems at all scales}}$$

where $f$ is a universal function mapping integrated information $\hat{\Phi}$ to IB efficiency.

### 2.2 Scale-Appropriate IIT Proxies

| Scale | System | $\hat{\Phi}$ Proxy | Justification |
|-------|--------|-------------------|---------------|
| $n=0$ (subcortical) | Neural microcircuits | Stochastic Interaction (Barrett & Seth, 2011) | Direct IIT approximation |
| $n=1$ (EEG) | Whole-brain EEG | PCI (Casali et al., 2013) | Validated consciousness proxy |
| $n=2$ (fMRI) | Resting-state fMRI | Network integration index (Tononi, 2008) | fMRI-compatible |
| $n=3$ (social) | Social networks | Connected 4-point correlation | Network analog of $\Phi$ |
| $n=4$ (ecological) | Pollinator networks | Network nestedness index | Ecological integration |
| $n=5$ (cosmic) | Galaxy clusters | $\xi^{(c)}_{1234}$ (connected 4-point function) | LSS integration |

### 2.3 The Cosmic IB Mapping

$$\Phi_{\text{cosmic}} \approx I(\delta_A; \delta_B) - \max_{\text{partition}} \sum_k I(\delta_{A_k}; \delta_{B_k})$$

This reduces to the connected 4-point correlation function of the galaxy density field.

---

## 3. Methods

### 3.1 Data Sources

| Scale | Dataset | $n_{\text{samples}}$ | Access |
|-------|---------|---------------------|--------|
| $n=0$ | Allen Brain Atlas + MICrONs | $10^4$ neurons | Open |
| $n=1$ | LEMON + BrainAGE Consortium | $n = 2{,}200$ | Open |
| $n=2$ | Human Connectome Project S1200 | $n = 1{,}206$ | Credentialed |
| $n=3$ | SNAP social + PGG behavioral | $N = 85{,}000$ | Open |
| $n=4$ | GBIF Pollinator + Web of Life | $3{,}000$ networks | Open |
| $n=5$ | SDSS DR18 + Planck 2018 | $V = 10^{10}$ Mpc$^3$ | Open |

### 3.2 Unified IB Estimation

**Gaussian IB estimator** (Chechik et al., 2005) applied identically at all scales:

| Scale | $X$ (Source) | $T$ (Representation) | $Y$ (Relevance) |
|-------|-------------|---------------------|-----------------|
| Neural ($n=0,1,2$) | Sensory input features | Neural activity PCs | Behavioral outcome |
| Social ($n=3$) | Neighborhood entropy | Behavioral choice vector | Group payoff |
| Ecological ($n=4$) | Plant interaction matrix | Pollinator adjacency | Seed set fraction |
| Cosmic ($n=5$) | CMB $C_\ell$ spectrum | Galaxy $C_\ell^{gg}$ | Cluster abundance $\mathcal{N}(M,z)$ |

**Normalization:** All $I(T;Y)$ and $I(X;T)$ normalized by $H(T)$ and $H(X)$ for dimensionless comparability.

### 3.3 The $\hat{\phi}$-Band Matching Test

Group systems into $\hat{\phi}$-bands: $[0.0, 0.2)$, $[0.2, 0.4)$, $[0.4, 0.6)$, $[0.6, 0.8)$, $[0.8, 1.0]$.

**Primary test:** Within each band, compute $\sigma_{\hat{\phi}\text{-band}}(\eta_{\text{IB}})$.

**Pre-registered acceptance:**

$$\boxed{\sigma_{\hat{\phi}\text{-band}} < 0.08 \quad \text{for } \geq 3 \text{ of 5 bands}}$$

**Null comparison:** Between-band $\sigma \approx 0.20 \pm 0.05$ (random complex systems). Levene's test: within-band $\sigma$ significantly lower than between-band ($p < 0.005$).

### 3.4 Multifractal Spectrum Cross-Check

Simultaneously compute $f(\alpha)$ spectrum at each scale. Secondary prediction: within-band $\sigma(\Delta\alpha) < 0.10$ (vs. ~$0.25$ across random systems).

---

## 4. Predicted Results

| Scale | Predicted $\eta_{\text{IB}}$ | Predicted $\hat{\phi}$-band |
|-------|----------------------------|---------------------------|
| $n=0$ (subcortical) | $0.58 \pm 0.07$ | $[0.4, 0.6)$ |
| $n=1$ (EEG, waking) | $0.71 \pm 0.06$ | $[0.6, 0.8)$ |
| $n=2$ (fMRI, resting) | $0.67 \pm 0.08$ | $[0.6, 0.8)$ |
| $n=3$ (social) | $0.54 \pm 0.09$ | $[0.4, 0.6)$ |
| $n=4$ (ecological) | $0.49 \pm 0.11$ | $[0.2, 0.4)$–$[0.4, 0.6)$ |
| $n=5$ (cosmic web) | $0.42 \pm 0.14$ | $[0.2, 0.4)$ |

**If confirmed:** $\eta_{\text{IB}}$ is a universal constant of information processing — comparable to Shannon's channel capacity theorem but operating across all complex systems.

**If falsified:** The fractal architecture claim of SYN-03/04 fails at the cross-scale level. The model must restrict to biological scales only.

**Most likely outcome:** Confirmation at neural–social scales ($n = 1$–4) with deviation at cosmic ($n = 5$), requiring the IS-NESS → cosmic mapping to be reclassified from Tier B to Tier C/D.

---

## 5. Cold Truth / Implementation Limits

**Problem 1 — Cosmic scale mapping is philosophically vulnerable.** Treating CMB as $X$ and galaxy density as $T$ assumes specific "source" and "representation" relationships at cosmological scales. This is technically defensible but epistemically loaded.

**Problem 2 — $\hat{\Phi}$ at ecological and social scales has no established definition.** The network IIT analogs are all proxy-of-proxy measures with unknown validity. Systematic $\hat{\Phi}$ underestimation at non-neural scales would bias $\hat{\phi}$-band matching.

**Problem 3 — Gaussian IB fails for non-Gaussian data.** Galaxy density fields are explicitly non-Gaussian (gravitational clustering skewness). Vine copula IB methods (Czado, 2019) required at cosmic scale — significantly more compute-intensive.

**Problem 4 — The central epistemological bet.** A critic could argue that $I(C_\ell^{TT}; \delta(\mathbf{x}))$ and $I(s_{\text{env}}; \text{EEG})$ are formally identical but physically incommensurable. The paper cannot resolve this — it can only state it clearly.

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source: Session 06, Paper V*
*Cross-references: `SYN_03_fractal_isomorphism.md`, `SYN_04_universal_ib_invariance.md`, `INTEGRATION_cosmic_ib_dashboard.md`*
