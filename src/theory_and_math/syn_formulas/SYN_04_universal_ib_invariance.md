# SYN-04: The Universal Information Bottleneck Invariance Conjecture (UIBIC)
> **Path:** `src/theory_and_math/syn_formulas/SYN_04_universal_ib_invariance.md`
> **Formula ID:** SYN-04
> **Tier:** B — Formal Analog (the model's central empirical conjecture; falsifiable; not yet tested)
> **Framework:** Information Bottleneck Theory (Tishby, Pereira & Bialek, 2000) + Renormalization Group (Wilson, 1971) + Power-Law Network Universality (Barabási & Albert, 1999) + ETF-Geometric Mechanism (Liu, Liu & Gore, NeurIPS 2025)
> **Chapter:** 4 — Fractal Architecture (extension from geometric to information-processing isomorphism)
> **Session Sources:**
> - SESSION 02 (Fractal Architecture, Karma, Developmental Stages, and Data Harvest)
> - UIBIC_Cosmological_Formalization_v3.md (cosmological variable definitions and testing protocols)
> - Universal Information Compression Efficiency — UPGRADED EDITION (ETF-Geometric Mechanism integration)
> **Status:** ✅ Production-ready | Central empirical conjecture of the entire FCT project

---

## Operating Constraints

Three constraints govern everything in this file.

**Constraint 1 — The Epistemological Arrow.** Observed phenomenon: scale-free network topology and self-similar information processing across spatial scales from sub-neuronal ($\sim 10^{-6}$ m) to galactic cluster ($\sim 10^{26}$ m). Mathematical model: IB compression efficiency as an RG-invariant observable. Formula: $\eta_{IB}(\ell) = \text{const}$ across scales. This file does not reverse the arrow.

**Constraint 2 — Separation of Physics from Metaphysics.** The mathematical content (Sections 1–7) is formal physics and information theory. The metaphysical bridge (Section 8) is labeled Tier D and explicitly segregated. No metaphysical claim appears in the mathematical sections.

**Constraint 3 — Falsifiability.** UIBIC is the most falsifiable claim in the entire FCT framework. The falsification criteria are stated explicitly (Section 10) with pre-registered statistical thresholds.

---

## 1. From SYN-03 to SYN-04: Geometric → Information-Processing Isomorphism

SYN-03 established *geometric* isomorphism across scales via the Hutchinson attractor and RG fixed point. SYN-04 formalizes the stronger claim: **isomorphism of information processing structure**, not merely geometry.

The upgrade: geometric self-similarity (shared $f(\alpha)$) is necessary but not sufficient. Two systems can share the same multifractal spectrum while processing information at different efficiencies. SYN-04 claims that the *information compression efficiency* $\eta_{IB}$ is the true scale-invariant observable — the informational fingerprint of the RG fixed point.

---

## 2. The UIBIC Conjecture — Core Formulation

### 2.1 The IB Efficiency Metric

At any hierarchical scale $\ell$, define the **Information Bottleneck efficiency**:

$$\boxed{\eta_{IB}(\ell) := \frac{I(T;Y)}{I(X;T)}\bigg|_{\text{scale } \ell} \quad [\text{dimensionless}]}$$

where:
- $X$ = source variable (the full information field at scale $\ell$)
- $T$ = compressed representation (the bottleneck)
- $Y$ = relevance variable (the target the system is optimizing to predict)
- $I(\cdot\;;\;\cdot)$ = mutual information [nats]

**Physical reading:** $\eta_{IB}$ measures how much experiential relevance is retained per unit of structural compression. It is the efficiency of the compression: a ratio of "what was preserved for prediction" to "what was discarded from the source."

### 2.2 The Conjecture

$$\boxed{\eta_{IB}(\ell_1) \approx \eta_{IB}(\ell_2) \quad \forall\; \ell_1, \ell_2 \in [10^{-6}\;\text{m},\; 10^{26}\;\text{m}]}$$

In plain language: the IB efficiency $\eta_{IB}$ is a **universal cross-scale invariant**. It takes approximately the same value at sub-neuronal, cortical, social, ecological, and cosmological scales, when measured within the same $\hat{\Phi}$-band.

### 2.3 The Refined Formulation (with $\hat{\Phi}$-Band Matching)

The original UIBIC stated scale invariance across all systems. The refined formulation recognizes that systems at different developmental stages (different $\Phi$-bands) should not be directly compared. The invariance holds **within bands**:

$$\sigma_{\hat{\Phi}\text{-band}}(\eta_{IB}) < 0.08 \quad \text{(within-band standard deviation)}$$

This is the pre-registered statistical criterion for UIBIC support.

### 2.4 Dimensional Audit — $\eta_{IB}$

| Term | Unit | Status |
|------|------|--------|
| $I(T;Y)$ | nats | ✅ |
| $I(X;T)$ | nats | ✅ |
| $\eta_{IB} = I(T;Y)/I(X;T)$ | nats/nats = dimensionless | ✅ |
| $\sigma_{\hat{\Phi}\text{-band}}$ | dimensionless | ✅ |

---

## 3. The Scale-Free Network Structure

### 3.1 Power-Law Degree Distribution

The information-processing network at each scale exhibits a scale-free degree distribution:

$$P(k) \sim k^{-\gamma} \quad \text{(degree distribution of the information network)}$$

where:

$$\gamma_{\text{FCT}} = 1 + \frac{\log N}{\log(N - 1)} \approx 2\text{–}3 \quad \text{(predicted by preferential attachment)}$$

This is the Barabási-Albert universality class — the same power-law exponent range observed in neural, social, and cosmic web networks.

### 3.2 The RG Invariance of $\eta_{IB}$

Under coarse-graining $\mathcal{R}_\lambda$, the IB efficiency transforms as:

$$\eta_{IB} \xrightarrow{\mathcal{R}_\lambda} \eta'_{IB} = \eta_{IB} + \delta\eta(\lambda)$$

Scale invariance is the condition:

$$\boxed{\delta\eta(\lambda) = 0 \quad \Longleftrightarrow \quad \eta_{IB} \text{ is a RG fixed-point observable}}$$

**Physical reading:** $\eta_{IB}$ is not merely *approximately* constant across scales — it is exactly the kind of quantity that *should* be constant if the system sits at an RG fixed point. This is the formal connection between SYN-03 (RG fixed point) and SYN-04 (IB efficiency invariance).

---

## 4. The ETF-Geometric Mechanism (Liu et al. 2025) — The Mechanistic Driver

### 4.1 Motivation

The original UIBIC was a *phenomenological* conjecture: $\eta_{IB}$ is observed to be constant across scales, without explaining *why*. The UPGRADED EDITION integrates the ETF-Geometric Mechanism (Liu, Liu & Gore, NeurIPS 2025) as the **mechanistic driver** that explains the invariance.

### 4.2 The ETF Emergence Result

In the strong superposition regime ($d \gg n$, where $d$ = number of representable features, $n$ = model dimension), representation vectors spontaneously converge to Equiangular Tight Frame (ETF) geometry:

$$\langle \mathbf{v}_i, \mathbf{v}_j \rangle = \frac{n - d}{d(n-1)} \quad \forall\; i \neq j$$

### 4.3 From ETF to $\eta_{IB}$ Invariance

In the strong superposition regime, the loss function — which is directly related to the compression quantity $I(X;T)$ — is dominated by geometric interference between representations:

$$\mathcal{L} \approx \frac{1}{2} \sum_{j \neq i} \left( \frac{W_i \cdot W_j}{|W_i|_2} \right)^2 e^{-|W_i|_2}$$

For an ETF, the mean squared cosine overlap is $1/m$. This yields the scaling law:

$$\boxed{\mathcal{L} \propto \frac{n}{m} \quad \text{(independent of the feature distribution's power-law exponent } \alpha \text{)}}$$

**Critical consequence:** Because the loss function at the ETF fixed point depends only on the ratio $n/m$ and not on the distribution of features, the IB efficiency $\eta_{IB}$ — which is a function of the compression geometry — is **automatically scale-invariant** in any system that achieves ETF geometry. This is the mechanistic explanation for why $\eta_{IB} \approx \text{const}$ across scales.

### 4.4 The ETF-Score (Operationalization)

For any system with representation matrix $H \in \mathbb{R}^{d \times N}$:

1. Normalize each column vector to unit norm
2. Compute the Gram matrix: $G = H^\top H$
3. Compute the ETF-score:

$$\boxed{\text{ETF-score}(\mathcal{T}) = 1 - \frac{\text{Var}\!\left(\{|G_{ij}|\}_{i \neq j}\right)}{\text{Var}_{\text{random}}\!\left(\{|G_{ij}|\}_{i \neq j}\right)}}$$

where $\text{Var}_{\text{random}}(G_{ij})$ is the expected variance for random vectors in $\mathbb{R}^d$, approximately $1/d$.

| ETF-score | Interpretation |
|-----------|---------------|
| $= 1$ | Perfect ETF geometry (all pairwise overlaps equal) |
| $= 0$ | Random geometry (variance matches random vectors) |

This measure is dimensionless and computable for any set of vectors — neural activations, node embeddings, galaxy field harmonics — making it directly applicable across all scales.

### 4.5 The Revised UIBIC Prediction (Mechanistically Grounded)

The original UIBIC predicted: $\sigma_{\hat{\Phi}\text{-band}}(\eta_{IB}) < 0.08$.

The revised, ETF-grounded UIBIC makes a **stronger, more specific** prediction:

1. Systems within the same $\hat{\Phi}$-band will have **both** similar $\eta_{IB}$ values **and** similar ETF-scores
2. The variation in $\eta_{IB}$ across scales will be **directly proportional** to the variation in ETF-scores
3. The within-band variance criterion ($< 0.08$) applies **specifically to systems with ETF-score $> 0.7$**

This separates the geometric mechanism from the phenomenological outcome.

### 4.6 Dimensional Audit — ETF Mechanism

| Term | Unit | Status |
|------|------|--------|
| $\mathcal{L}$ (loss function) | dimensionless | ✅ |
| $n/m$ (dimension/feature ratio) | dimensionless | ✅ |
| $\text{ETF-score}$ | dimensionless $\in [0,1]$ | ✅ |
| $G_{ij}$ (Gram matrix entry) | dimensionless (inner product of unit vectors) | ✅ |

---

## 5. Cosmological Testing Parameters

### 5.1 Variable Identification at Cosmological Scales

To apply the IB formalism $\eta_{IB} = I(T;Y)/I(X;T)$ to the cosmic web, the random variables must be explicitly identified with physical observables:

| IB Variable | Cosmological Observable | Physical Definition | Unit |
|-------------|------------------------|---------------------|------|
| $X$ (Source) | Primordial density fluctuations | CMB temperature anisotropy power spectrum $C_\ell^{TT}$ | dimensionless (variance); entropy $H(X)$ in nats |
| $T$ (Bottleneck) | Cosmic web skeleton topology | Persistent homology classes (Betti numbers $\beta_0, \beta_1, \beta_2$) of the matter distribution | nats (topological information) |
| $Y$ (Relevance / Target) | Late-time galaxy density field | Density contrast $\delta(\mathbf{x}) = (\rho(\mathbf{x}) - \bar{\rho})/\bar{\rho}$ | dimensionless |

### 5.2 The Scale-Dependent IB Lagrangian

The IB Lagrangian generalized to a scale-dependent functional (where $\ell = \log(R/R_0)$ is the logarithmic coarse-graining scale and $R$ is the spatial smoothing radius):

$$\mathcal{L}_{IB}(\ell) = I(X;T)\big|_\ell - \beta_{IB}(\ell) \cdot I(T;Y)\big|_\ell$$

### 5.3 The UIBIC Scale-Invariance Condition

UIBIC asserts that in the critical regime, the derivative of the efficiency with respect to the coarse-graining scale vanishes:

$$\boxed{\frac{\partial \eta_{IB}}{\partial \ell} = 0 \quad \text{(scale invariance in the critical regime)}}$$

This identity requires that the cosmic web is **not** a random mass assembly, but an **attractor of an RG flow** that maximizes $\eta_{IB}$ — exactly as a biological neural network calibrated for predictive coding optimizes $\eta_{IB}$ at its own scale.

### 5.4 Cosmological Differential Predictions

| Model | Prediction for $\eta_{IB}(\ell)$ as a function of smoothing scale $R$ |
|-------|-----------------------------------------------------------------------|
| **Standard $\Lambda$CDM** | Structure formation driven exclusively by gravitational collapse and dark energy. Information compression is a byproduct of mass clustering. $I(C_\ell^{TT};\; \delta(\mathbf{x}))$ drops monotonically and smoothly with increasing coarse-graining scale. |
| **UIBIC** | If $\eta_{IB}$ is plotted against $R$, it will **not** drop monotonically. Instead, it will exhibit a **plateau** (invariance regime) around the characteristic scale of cosmic voids ($R \sim 30\text{–}50$ Mpc), reflecting informational critical slowing down — evidence of a phase transition in the information representation. |

### 5.5 Dimensional Audit — Cosmological Parameters

| Term | Unit | Status |
|------|------|--------|
| $C_\ell^{TT}$ (CMB temperature power spectrum) | $\mu\text{K}^2$ (angular power spectrum units) | ✅ |
| $\delta(\mathbf{x})$ (density contrast) | dimensionless | ✅ |
| $\beta_0, \beta_1, \beta_2$ (Betti numbers) | dimensionless (topological invariants) | ✅ |
| $I(C_\ell^{TT};\; \delta(\mathbf{x}))$ | nats | ✅ |
| $\ell = \log(R/R_0)$ | dimensionless | ✅ |
| $R$ (smoothing radius) | Mpc | ✅ |

---

## 6. Quantitative Predictions from the ETF-Geometric Model

### 6.1 Predicted Values by Scale

| Scale | Predicted $\eta_{IB}$ | Predicted $\hat{\Phi}$-band | Predicted ETF-score |
|-------|----------------------|----------------------------|---------------------|
| $n=0$ (subcortical) | $0.58 \pm 0.07$ | $[0.4, 0.6)$ | $0.45 \pm 0.15$ |
| $n=1$ (EEG, waking) | $0.71 \pm 0.06$ | $[0.6, 0.8)$ | $0.82 \pm 0.08$ |
| $n=2$ (fMRI, resting) | $0.67 \pm 0.08$ | $[0.6, 0.8)$ | $0.75 \pm 0.10$ |
| $n=3$ (social networks) | $0.54 \pm 0.09$ | $[0.4, 0.6)$ | $0.55 \pm 0.12$ |
| $n=4$ (ecological) | $0.49 \pm 0.11$ | $[0.2, 0.4)\text{–}[0.4, 0.6)$ | $0.40 \pm 0.15$ |
| $n=5$ (cosmic web) | $0.42 \pm 0.14$ | $[0.2, 0.4)$ | $0.30 \pm 0.20$ |
| LLM (e.g., Llama-3, middle layers) | $0.65 \pm 0.05$ | $[0.6, 0.8)$ | $0.85 \pm 0.05$ |

### 6.2 Pre-Registered Statistical Predictions

| Prediction ID | Statement | Criterion |
|---------------|-----------|-----------|
| **Primary (Mechanistic)** | Spearman correlation between $\eta_{IB}$ and ETF-score across all scales | $r_s > 0.7$, $p < 0.001$ |
| **Secondary (UIBIC)** | Within-$\hat{\Phi}$-band standard deviation of $\eta_{IB}$ | $\sigma < 0.08$ |
| **Secondary (ETF)** | Within-$\hat{\Phi}$-band standard deviation of ETF-score | $\sigma < 0.1$ |
| **LLM-Specific** | ETF-score in middle-to-late layers of open-source LLMs | $> 0.7$; $\eta_{IB}$ variance across those layers $< 0.05$ |
| **Falsification** | Correlation between $\eta_{IB}$ and ETF-score is not significantly positive | $p > 0.05 \implies$ geometric mechanism not supported |
| **Falsification** | Within-band $\eta_{IB}$ variance exceeds threshold for *all* bands | $\sigma > 0.08\;\forall$ bands $\implies$ UIBIC falsified |

---

## 7. Data Sources for Empirical Testing

| Scale | Dataset | $n_{\text{samples}}$ | Access | ETF-Score Computation |
|-------|---------|---------------------|--------|----------------------|
| $n=0$ (subcortical) | Allen Brain Atlas + NHP electrophysiology (MICrONs) | $10^4$ neurons | Open | Spike-triggered average vectors |
| $n=1$ (EEG) | LEMON + BrainAGE Consortium | $n = 2{,}200$ | Open | PCA on EEG power features |
| $n=2$ (fMRI) | Human Connectome Project S1200 | $n = 1{,}206$ | Credentialed open | ROI time series vectors |
| $n=3$ (social) | SNAP social network datasets + PGG behavioral data | $N = 85{,}000$ | Open | Node embeddings (node2vec) |
| $n=4$ (ecological) | GBIF Global Pollinator Database + Web of Life | $N = 3{,}000$ networks | Open | Network adjacency eigenvectors |
| $n=5$ (cosmic) | SDSS DR18 + Planck 2018 | $V = 10^{10}\;\text{Mpc}^3$ | Open | Galaxy field harmonics |
| LLM | Llama-3-70B, GPT-2, Mistral-7B | 70B / 124M / 7B params | Open weights | Hidden states per layer |

---

## 8. The Metaphysical Bridge (Tier D — Explicitly Labeled)

> ⚠️ **This section is Tier D.** Nothing below is falsifiable. It is included for conceptual completeness and explicitly separated from the mathematical content per Execution Protocol §1.

SESSION 02 states:

> *"The same organizational logic operates at every scale — not by coincidence, not by independent optimization, but because every level is an expression of the same source material."*

SYN-04 translates "same organizational logic" into $\eta_{IB} \approx \text{const}$. The ETF mechanism translates "expression of the same source material" into "convergence to the same geometric fixed point under compression-driven optimization."

The metaphysical step — identifying the *reason* for cross-scale $\eta_{IB}$ invariance with IS-NESS as a universal substrate — is **not derivable** from the mathematics. A critic can accept the empirical invariance (if confirmed) while attributing it to convergent optimization under universal thermodynamic constraints, without any reference to cosmopsychism. The UIBIC would remain valid as a scaling law; its FCT *interpretation* would remain Tier D.

---

## 9. Complete Variable Ontology — SYN-04

| Symbol | Definition | Unit | Tier |
|--------|-----------|------|------|
| $\eta_{IB}(\ell)$ | IB efficiency at hierarchical scale $\ell$ | dimensionless $\in [0,1]$ | B |
| $I(X;T)$ | Mutual information between source and bottleneck | nats | B |
| $I(T;Y)$ | Mutual information between bottleneck and relevance | nats | B |
| $X$ | Source variable at scale $\ell$ | system-dependent | B |
| $T$ | Compressed representation (bottleneck) | system-dependent | B |
| $Y$ | Relevance / prediction target | system-dependent | B |
| $\gamma$ | Power-law exponent of network degree distribution | dimensionless | B |
| $\epsilon_{\text{scale}}$ | Allowed deviation from perfect scale invariance | dimensionless | B |
| $\delta\eta(\lambda)$ | Change in IB efficiency under coarse-graining by $\lambda$ | dimensionless | B |
| $\nu$ | Correlation length exponent (universality class) | dimensionless | B |
| $\xi$ | Correlation length — range of information coherence | meters (or lattice units) | B |
| $\Phi_c$ | Critical IIT value at stage transition | $\phi$-units | B |
| $C_\ell^{TT}$ | CMB temperature angular power spectrum | $\mu\text{K}^2$ | B |
| $\delta(\mathbf{x})$ | Galaxy density contrast | dimensionless | B |
| $\beta_0, \beta_1, \beta_2$ | Betti numbers (persistent homology) | dimensionless | B |
| $R$ | Spatial smoothing radius (coarse-graining scale) | Mpc | B |
| $\ell$ | Logarithmic coarse-graining scale $\log(R/R_0)$ | dimensionless | B |
| $\text{ETF-score}$ | Equiangular Tight Frame proximity measure | dimensionless $\in [0,1]$ | B |
| $G_{ij}$ | Gram matrix entry (inner product of unit-normed representation vectors) | dimensionless | B |
| $H \in \mathbb{R}^{d \times N}$ | Representation matrix | dimensionless (after normalization) | B |
| $\hat{\Phi}$ | Normalized integrated information (stage proxy) | dimensionless | B |
| $\mathcal{L}$ | Loss function in strong superposition regime | dimensionless | B |

---

## 10. Cold Truth — Five Non-Negotiable Concessions

These problems are stated without qualification. They are not softened.

**Problem 1 — The Gaussianity Fallacy.** The Gaussian IB estimator (Chechik et al., 2005) assumes multivariate Gaussian distributions at each scale. Neural data is approximately Gaussian for large populations; galaxy density fields are **explicitly non-Gaussian** due to nonlinear gravitational collapse. Non-Gaussian IB estimation (vine copula methods; Czado, 2019) is required for the cosmic scale and is significantly more computationally expensive. Any $\eta_{IB}$ estimate at cosmic scales that uses the Gaussian assumption is *systematically biased*.

**Problem 2 — The Cross-Scale Commensurability Problem.** Cross-scale comparison of $\eta_{IB}$ assumes that the *same quantity* is being estimated at each scale despite radically different physical substrates. A critic can argue that $I(C_\ell^{TT};\; \delta(\mathbf{x}))$ and $I(s_{\text{env}};\; \text{EEG})$ are formally identical mathematical quantities but physically incommensurable. This is the paper's central epistemological bet. It cannot be resolved — only stated clearly and proceeded with.

**Problem 3 — The ETF-Score Is a Proxy, Not a Proof.** The Liu et al. paper provides strong evidence for ETF geometry in LLMs, but it does not prove that gradient descent universally converges to an ETF for *all* systems. The application to biological and cosmological systems is an *extension* of the conjecture, not a derivation from it. The ETF-score at non-neural scales may fail — and if it does, the geometric mechanism is disproved while the phenomenological UIBIC may remain.

**Problem 4 — $\hat{\Phi}$ at Non-Neural Scales Has No Established Definition.** The connected 4-point correlation $\Phi_{\text{cosmic}}$ and the network IIT analogs used at ecological and social scales are all proxies with uncertain validity. Systematic underestimation of $\hat{\Phi}$ at non-neural scales would bias the $\hat{\Phi}$-band matching and inflate apparent convergence. This is an uncontrolled systematic error.

**Problem 5 — Confirmation Does Not Prove Cosmopsychism.** Even if $\eta_{IB} \approx \text{const}$ is empirically confirmed across all scales, this demonstrates that two systems solve dynamical optimization problems in statistically identical ways (universality class membership). The philosophical step identifying IB efficiency with "experiential existence" (Consciousness) remains permanently at Tier B (formal analogy) and **cannot** be promoted to Tier A. The UIBIC is a physics result; the cosmopsychist interpretation is metaphysics.

> **Overall verdict on SYN-04:** The UIBIC is the most important, most falsifiable, and most empirically tractable conjecture in the entire FCT framework. The integration of the ETF-Geometric Mechanism (Liu et al., 2025) transforms it from a phenomenological scaling law into a mechanistically grounded prediction. Its confirmation would be a significant result in complex systems science. Its *interpretation* as evidence for cosmopsychism requires an additional metaphysical step that no empirical result can validate.

---

## 11. Dimensional Audit — Full Section Verification

| Equation | LHS Unit | RHS Unit | Consistent | Notes |
|----------|---------|---------|-----------|-------|
| $\eta_{IB} = I(T;Y)/I(X;T)$ | dimensionless | nats/nats | ✅ | Ratio of mutual informations |
| $P(k) \sim k^{-\gamma}$ | probability | $[\text{count}]^{-\gamma}$ | ✅ | Power-law; proportionality absorbs units |
| $\delta\eta(\lambda) = 0$ | dimensionless | dimensionless | ✅ | Fixed-point condition |
| $\mathcal{L} \propto n/m$ | dimensionless | dimensionless | ✅ | Loss function scaling |
| $\text{ETF-score} = 1 - \text{Var}/\text{Var}_{\text{random}}$ | dimensionless | dimensionless | ✅ | Variance ratio |
| $\partial \eta_{IB}/\partial \ell = 0$ | dimensionless | dimensionless | ✅ | Scale invariance condition |
| $I(C_\ell^{TT};\;\delta(\mathbf{x}))$ | nats | nats | ✅ | Mutual information |

---

## Architectural Position in the FCT Framework

```
SYN-01R-A (Tier A)          SYN-01R-B (Tier B)
─────────────────           ──────────────────
Containment proof           Instantiation mechanism
        │                           │
        └───────────┬───────────────┘
                    ▼
              SYN-02R (Tier B)
     Hierarchical IB Compression
                    │
                    ▼
              SYN-03 (Tier B)
     Fractal Architecture (RG + ETF)
                    │
                    ▼
         ┌──── SYN-04 (Tier B) ────┐     ← YOU ARE HERE
         │     UIBIC Conjecture    │
         │  η_IB = const ± ε       │
         │  ETF-Geometric Mechanism │
         └─────────┬───────────────┘
                   │
          ┌────────┼────────┐
          ▼        ▼        ▼
       SYN-05   SYN-06   SYN-07
       Karmic   Smelting  Autopoietic
       Load     Operator  Coherence
          │        │        │
          └────────┼────────┘
                   ▼
              SYN-08 → SYN-13
     Stage transitions → Master Equation
```

SYN-04 is the bridge between the fractal architecture (SYN-03) and the node dynamics (SYN-05 through SYN-13). If UIBIC is falsified, the fractal architecture can survive as geometric self-similarity alone, but the claim of *information-processing* isomorphism — which is what the node dynamics depend on — would require substantial revision.

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Sources: SESSION 02; UIBIC_Cosmological_Formalization_v3.md; UIBIC — UPGRADED EDITION; Liu, Liu & Gore (NeurIPS 2025)*
*Cross-references: `SYN_03_fractal_isomorphism.md`, `SYN_REGISTRY.md`, `docs/glossary/variable_ontology.md`, `data/literature_sota/validation_reports/UIBIC_cross_scale_test_upgraded.md`*
