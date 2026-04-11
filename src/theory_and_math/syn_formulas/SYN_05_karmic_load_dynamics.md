# SYN-05: Karmic Load Dynamics — Driven-Dissipative Accumulation and Resolution
> **Path:** `src/theory_and_math/syn_formulas/SYN_05_karmic_load_dynamics.md`
> **Formula ID:** SYN-05
> **Tier:** B — Formal Analog (generates falsifiable predictions via UP-01 operationalization; not yet tested)
> **Framework:** Driven-Dissipative Systems (Prigogine, 1977) + KL Divergence Dynamics + Energy-Based Models (LeCun, 2006) + Variational Autoencoders (Kingma & Welling, 2013)
> **Chapter:** 5 — Karma as Autopoietic Feedback
> **Session Sources:**
> - SESSION 02 (Fractal Architecture, Karma, Developmental Stages, and Data Harvest) — core SYN-05 derivation
> - SESSION 04 (Priority Upgrades) — UP-01: mandatory operationalization of $p^*$
> - CRITIQUE RESPONSE — Fix 04: demotion of $p^*$ from IS-NESS to population equilibrium
> **Status:** ✅ Production-ready | UP-01 integrated | Fix 04 applied | $p^*$ operationalized as $p_{\text{ref}}$

---

## Operating Constraints

Three constraints govern everything in this file.

**Constraint 1 — The Epistemological Arrow.** Observed phenomenon: biological systems exhibit persistent behavioral patterns (habits, trauma, addiction) that resist simple correction and dissolve only through accumulated experiential processing. Mathematical model: cumulative KL divergence from a reference distribution, modeled as a driven-dissipative dynamical system. Formula: $d\kappa/dt = \text{KL}[q_{\text{node}} \| p_{\text{ref}}] - \gamma_\kappa \cdot \Omega_{\text{wisdom}}$. This file does not reverse the arrow.

**Constraint 2 — Mandatory UP-01 Integration.** The original SYN-05 used $p^*_{\text{coherent}}$ (IS-NESS-aligned generative model) as the reference distribution. This is Tier D and unmeasurable. Per the Critique Response (Fix 04) and Session 04 (UP-01), $p^*$ is **replaced** by $p_{\text{ref}}$ — a learnable reference distribution estimated via Energy-Based Models from large-scale resting-state neural data. This demotion is mandatory: without it, every KL term in SYN-05 through SYN-13 is unfalsifiable.

**Constraint 3 — Karma as Structural Deficit.** Karma is formalized as a *structural completeness deficit* — a measure of information-theoretic divergence, not a moral judgment. The model makes no claim about "deserving" or "punishment." Karma accumulates because the node's generative model $q_{\text{node}}$ diverges from the reference; it dissolves because experiential processing reduces this divergence. The mechanism is identical to Bayesian belief updating under persistent model misspecification.

---

## 1. The Karmic Load — Definition

### 1.1 Cumulative KL Divergence

**Karmic load** $\kappa(t)$ is defined as the time-integrated divergence of the node's generative model from the reference distribution:

$$\boxed{\kappa(t) := \int_0^t \text{KL}\!\left[q_{\text{node}}(s) \;\|\; p_{\text{ref}}\right] ds \quad [\text{nats} \cdot \text{s}]}$$

**Physical reading:** $\kappa$ measures the total accumulated "informational mismatch" between the node's current belief state and the reference. It is a path integral — it depends not only on the current divergence but on the *entire history* of divergence. A node that was severely misaligned for a long time has high $\kappa$ even if it is currently near $p_{\text{ref}}$.

### 1.2 Why Not Just Instantaneous KL?

The distinction between $\kappa(t)$ (cumulative) and $\text{KL}[q_{\text{node}}(t) \| p_{\text{ref}}]$ (instantaneous) is critical:

- **Instantaneous KL** measures *current* distance from the reference. It can drop to zero immediately upon alignment.
- **Cumulative $\kappa$** measures the *total historical burden*. It requires sustained alignment over time to dissipate.

This distinction maps onto the clinical observation that correcting a distortion (e.g., through insight) is not the same as resolving it (which requires sustained behavioral change integrated over time).

---

## 2. The Driven-Dissipative Equation

### 2.1 Core Dynamics

$$\boxed{\frac{d\kappa}{dt} = \underbrace{\text{KL}\!\left[q_{\text{node}}(t) \;\|\; p_{\text{ref}}\right]}_{\text{source: distortion generation}} - \underbrace{\gamma_\kappa \cdot \Omega_{\text{wisdom}}(t)}_{\text{sink: experiential resolution}} \quad [\text{nats} \cdot \text{s}^{-1}]}$$

**Reading:** Karmic load increases at a rate proportional to the node's current divergence from the reference distribution, and decreases at a rate proportional to accumulated wisdom $\Omega_{\text{wisdom}}$. The parameter $\gamma_\kappa$ is the *karmic resolution rate constant* — the efficiency with which accumulated wisdom dissolves karmic load.

### 2.2 Wisdom Accumulation (The Sink Dynamics)

$$\frac{d\Omega_{\text{wisdom}}}{dt} = \mu_\Omega \cdot I(T;Y) \cdot \mathbf{1}\!\left[\text{KL}[q_{\text{node}} \| p_{\text{ref}}] > \kappa_{\text{thr}}\right] \quad [\text{nats} \cdot \text{s}^{-1}]$$

The indicator function $\mathbf{1}[\cdot]$ captures a key insight: **wisdom accumulates only when the karmic signal is active** — only under distortion pressure does corrective learning occur. Below the threshold $\kappa_{\text{thr}}$, there is no distortion to learn from, and $\Omega_{\text{wisdom}}$ is static.

### 2.3 Dimensional Audit — Core Equations

| Term | Unit | Status |
|------|------|--------|
| $\text{KL}[q \| p_{\text{ref}}]$ | nats | ✅ |
| $\gamma_\kappa$ | s$^{-1}$ | ✅ |
| $\Omega_{\text{wisdom}}$ | nats | ✅ |
| $\gamma_\kappa \cdot \Omega_{\text{wisdom}}$ | s$^{-1}$ × nats = nats·s$^{-1}$ | ✅ |
| $d\kappa/dt$ | nats·s / s = nats·s$^{-1}$ | ⚠️ See §2.4 |
| $\mu_\Omega$ | dimensionless | ✅ |
| $I(T;Y)$ | nats·s$^{-1}$ (rate of mutual information acquisition) | ✅ |
| $\kappa_{\text{thr}}$ | nats | ✅ |

### 2.4 Dimensional Consistency Note

$\kappa$ has units $[\text{nats} \cdot \text{s}]$ (it is a time-integrated divergence). Therefore $d\kappa/dt$ has units $[\text{nats}]$. But $\text{KL}[q \| p_{\text{ref}}]$ also has units $[\text{nats}]$. And $\gamma_\kappa \cdot \Omega_{\text{wisdom}}$ has units $[\text{s}^{-1} \times \text{nats}] = [\text{nats} \cdot \text{s}^{-1}]$. This apparent mismatch requires clarification:

The correct reading is: $d\kappa/dt$ has units $[\text{nats}]$ (instantaneous divergence $\times$ implicit $dt/dt = 1$), and the dissipation term must be $[\text{nats}]$ as well. Therefore $\gamma_\kappa$ is dimensionless and $\Omega_{\text{wisdom}}$ carries units $[\text{nats}]$, making $\gamma_\kappa \cdot \Omega_{\text{wisdom}}$ $[\text{nats}]$. Consistency check: ✅.

---

## 3. Fixed-Point Analysis and Phase Portrait

### 3.1 Equilibrium Condition

Setting $d\kappa/dt = 0$:

$$\kappa^* = 0 \quad \Longleftrightarrow \quad \text{KL}[q_{\text{node}} \| p_{\text{ref}}] = \gamma_\kappa \cdot \Omega_{\text{wisdom}}$$

### 3.2 Lyapunov Stability Analysis

Define the Lyapunov function $V(\kappa) = \kappa^2$:

$$\dot{V} = 2\kappa\dot{\kappa} = 2\kappa\!\left(\text{KL}[q \| p_{\text{ref}}] - \gamma_\kappa \Omega_{\text{wisdom}}\right)$$

For $\dot{V} < 0$ (stable convergence to $\kappa^* = 0$): requires $\gamma_\kappa \cdot \Omega_{\text{wisdom}} > \text{KL}[q \| p_{\text{ref}}]$ eventually. This places a **necessary condition** on karmic resolution: the system converges to $\kappa = 0$ *only if* $\Omega_{\text{wisdom}}$ grows without bound — which requires, within the model, infinite incarnation cycles. **Finite-lifetime convergence is not guaranteed.**

### 3.3 Phase Portrait — Three Trajectory Types

| Type | Condition | Behavior |
|------|-----------|----------|
| **Type I** (rapid resolution) | $\gamma_\kappa \Omega_0 > \text{KL}[q \| p_{\text{ref}}]_{\max}$ | $\kappa(t) \to 0$ monotonically |
| **Type II** (oscillatory) | $\gamma_\kappa \sim \text{KL}[q \| p_{\text{ref}}]$ | $\kappa(t)$ oscillates around $\kappa^*$ |
| **Type III** (karmic accumulation) | $\Omega_{\text{wisdom}}$ grows too slowly | $\kappa(t) \to \infty$ (pathological) |

Type III corresponds to a node trapped in a cycle of distortion accumulation without sufficient corrective experience — the formal analog of chronic, unprocessed trauma.

---

## 4. Operationalization of $p^*$ — The UP-01 Integration (Mandatory)

### 4.1 The Problem

The original SYN-05 uses $p^*_{\text{coherent}}$ — the IS-NESS-aligned generative model — as the reference distribution. This is **Tier D** and **unmeasurable**:

- $p^*$ has no first-principles derivation
- $p^*$ is not observable in any experiment
- Every KL term containing $p^*$ is unfalsifiable

Without operationalization, SYN-05 through SYN-13 are structural frameworks only — no empirical predictions can be generated.

### 4.2 The Fix: Learnable Reference Distribution $p_{\text{ref}}$

Per UP-01 (Session 04) and Fix 04 (Critique Response), $p^*$ is replaced by $p_{\text{ref}}$ — a reference distribution trained on large-scale resting-state neural data using a two-stage generative model:

**Stage 1 — Latent Embedding via Variational Autoencoder (VAE):**

Map raw neural recordings $\mathbf{x}(t) \in \mathbb{R}^{d_{\text{raw}}}$ to a low-dimensional latent space $\mathbf{z}(t) \in \mathbb{R}^{d_z}$ via a learned encoder $\phi$:

$$\mathbf{z}(t) = \phi(\mathbf{x}(t)), \quad \mathbf{z} \in \mathbb{R}^{d_z}, \; d_z = 32$$

VAE training loss:

$$\mathcal{L}_{\text{VAE}} = \mathbb{E}_{q_\phi}\!\left[\log p_\theta(\mathbf{x} | \mathbf{z})\right] - \beta_{\text{VAE}} \cdot \text{KL}\!\left[q_\phi(\mathbf{z} | \mathbf{x}) \;\|\; p(\mathbf{z})\right]$$

with $\beta_{\text{VAE}} = 4$ (disentangled $\beta$-VAE; Higgins et al., 2017).

**Stage 2 — Energy-Based Model (EBM) on Latent Codes:**

The reference distribution $p_{\text{ref}}$ is defined as a Boltzmann distribution over the latent space:

$$\boxed{p_{\text{ref}}(\mathbf{z}) = \frac{\exp\!\left(-E_\psi(\mathbf{z})\right)}{Z_\psi}, \quad Z_\psi = \int \exp\!\left(-E_\psi(\mathbf{z})\right) d\mathbf{z}}$$

where $E_\psi : \mathbb{R}^{d_z} \to \mathbb{R}$ is the energy function parameterized by $\psi$ (5-layer residual network with spectral normalization).

### 4.3 The Operational Karmic Load

The node's neural state distribution is estimated as a kernel density in latent space:

$$q_{\text{node}}(\mathbf{z}; t) \approx \frac{1}{T_w} \sum_{\tau=t-T_w}^{t} \mathcal{K}_h\!\left(\mathbf{z} - \phi(\mathbf{x}(\tau))\right)$$

The operational KL divergence:

$$\text{KL}\!\left[q_{\text{node}}(t) \;\|\; p_{\text{ref}}\right] = \underbrace{H\!\left[q_{\text{node}}(t),\; p_{\text{ref}}\right]}_{\text{cross-entropy}} - \underbrace{H\!\left[q_{\text{node}}(t)\right]}_{\text{node entropy}} \quad [\text{nats}]$$

Both terms are estimable from data using $k$-nearest-neighbor entropy estimators (Kozachenko & Leonenko, 1987).

The operational karmic load proxy:

$$\boxed{\kappa_{\text{proxy}}(t) = \int_0^t \text{KL}\!\left[q_{\text{node}}(s) \;\|\; p_{\text{ref}}\right] ds \quad [\text{nats} \cdot \text{s}]}$$

### 4.4 Wasserstein Stability Constraint

The reference distribution must be stable across measurement occasions:

$$\mathcal{W}_2\!\left(p_{\text{ref}}^{(\text{session 1})},\; p_{\text{ref}}^{(\text{session 2})}\right) \leq 0.15\sigma_z \quad [\text{normalized latent units}]$$

### 4.5 Approximation Error Bound

The substitution error decomposes as:

$$\text{KL}\!\left[p_{\text{ref}} \;\|\; p^*\right] \leq \underbrace{\text{KL}\!\left[p_{\text{ref}} \;\|\; p_{\text{pop}}\right]}_{\text{model fit error (measurable)}} + \underbrace{\text{KL}\!\left[p_{\text{pop}} \;\|\; p^*\right]}_{\varepsilon_{\text{species}} \;\text{(declared unknown, Tier D)}}$$

**Declared systematic error:** All $\kappa_{\text{proxy}}$ measurements carry an unquantified upward bias of $\varepsilon_{\text{species}}$ nats. **Comparisons between individuals and across time are valid; absolute values of $\kappa$ are not interpretable** without resolving $\varepsilon_{\text{species}}$.

### 4.6 Training Protocol for $p_{\text{ref}}$

| Component | Specification |
|-----------|---------------|
| **Dataset** | LEMON ($n = 228$) + HCP resting-state fMRI ($n = 1{,}200$) + TUH EEG ($n \approx 2{,}000$). Total: $N \approx 3{,}428$ |
| **EEG preprocessing** | ICA artifact removal, 1–40 Hz bandpass, average reference, 2-second epochs |
| **fMRI preprocessing** | Motion correction, FWHM 6 mm smoothing, nuisance regression (WM, CSF, 24 motion params), 0.01–0.1 Hz bandpass |
| **VAE architecture** | Encoder: $d_{\text{raw}} \to 512 \to 128 \to 64 \to 2 \times d_z$; Decoder: symmetric. Adam, $\beta = 4$, batch 256, 200 epochs |
| **EBM architecture** | 5-layer residual network on $\mathbb{R}^{d_z}$. Contrastive Divergence-10, Langevin MCMC (50 steps, $\eta = 0.01$), spectral normalization |
| **Validation** | Reconstruction loss $< 0.05$ (normalized MSE); test-retest $\mathcal{W}_2 < 0.15\sigma_z$; cross-dataset $\text{KL} < 0.5$ nats |

---

## 5. Complete Variable Ontology — SYN-05

| Symbol | Definition | Unit | Tier |
|--------|-----------|------|------|
| $\kappa(t)$ | Karmic load: cumulative divergence from reference baseline | nats·s | B |
| $q_{\text{node}}(t)$ | Node's generative model / neural state distribution at time $t$ | probability measure | B |
| $p^*_{\text{coherent}}$ | Coherent baseline: IS-NESS-aligned generative model | probability measure | D |
| $p_{\text{ref}}$ | Learnable reference distribution (EBM-trained, replaces $p^*$) | probability measure | B |
| $E_\psi(\mathbf{z})$ | Energy function parameterized by $\psi$ | dimensionless (nats) | B |
| $Z_\psi$ | Partition function | dimensionless | B |
| $\text{KL}[q \| p_{\text{ref}}]$ | Instantaneous divergence from reference | nats | B |
| $\gamma_\kappa$ | Karmic resolution rate constant | dimensionless | B |
| $\Omega_{\text{wisdom}}$ | Accumulated experiential integration: $\int I(T;Y)\, dt$ | nats | B |
| $\mu_\Omega$ | Wisdom accumulation efficiency | dimensionless | B |
| $\kappa_{\text{thr}}$ | Minimum distortion to trigger active learning | nats | B |
| $\kappa^*$ | Karmic fixed point | nats·s | B |
| $\kappa_{\text{proxy}}(t)$ | Operational karmic load (UP-01) | nats·s | B |
| $\varepsilon_{\text{species}}$ | Species-level approximation gap $\text{KL}[p_{\text{pop}} \| p^*]$ | nats (undetermined) | D |
| $\mathcal{W}_2$ | Wasserstein-2 distance (test-retest stability) | $\sigma_z$ units | B |
| $\mathbf{z}(t)$ | Latent neural state embedding $\phi(\mathbf{x}(t))$ | dimensionless $\in \mathbb{R}^{d_z}$ | B |

---

## 6. The Metaphysical Bridge (Tier D — Explicitly Labeled)

> ⚠️ **This section is Tier D.** Nothing below is falsifiable. It is included for conceptual completeness and explicitly separated from the mathematical content per Execution Protocol §1.

SESSION 02 states:

> *"Karma is not punishment. It is the structural completeness deficit — the gap between what the node currently instantiates and what it could instantiate. The karmic load is the Kolmogorov complexity of this gap: the minimum description length of everything the node has not yet resolved."*

SYN-05 formalizes this as $\kappa = \int \text{KL}[q \| p_{\text{ref}}]\, ds$ — a cumulative information-theoretic divergence, not a moral quantity. The "structural completeness deficit" maps directly onto the Kolmogorov complexity interpretation: $\text{KL}[q \| p_{\text{ref}}]$ measures the additional description length required to encode the node's current state relative to the reference. A node at $p_{\text{ref}}$ requires zero additional bits; a maximally divergent node requires maximal additional description.

The metaphysical step — identifying $p_{\text{ref}}$ with IS-NESS coherence rather than mere population-level neural equilibrium — is **not derivable** from the mathematics. The UP-01 operationalization explicitly demotes this identification to a declared hypothesis: "we hypothesize that population equilibrium approximates IS-NESS coherence at the scale of a species." The $\varepsilon_{\text{species}}$ gap quantifies the cost of this demotion.

---

## 7. Empirical Validation Protocol

**Experiment Name:** Longitudinal Karmic Load Trajectory Classification

**Core Logic:** If SYN-05 is correct, longitudinal $\kappa_{\text{proxy}}$ trajectories (estimated via UP-01) should decompose into the three attractor types (Type I/II/III) predicted by the phase portrait — a prediction absent from any Gaussian-baseline model.

**Data Sources:** LEMON + HCP resting-state (UP-01 training set) + longitudinal psychiatric cohorts (validation)

**Differential Prediction:**

| Model | Prediction |
|-------|-----------|
| **Standard psychiatric nosology** | Individual divergence from population mean ($\text{KL}[q \| \mathcal{N}(\boldsymbol{\mu}_{\text{pop}}, \boldsymbol{\Sigma}_{\text{pop}})]$) identifies statistical outliers; no trajectory-type structure expected |
| **SYN-05** | $\kappa_{\text{proxy}}$ trajectories decompose into 3 attractor types: monotonic resolution (Type I), oscillatory (Type II), accumulation (Type III). Stage III individuals show systematically higher $\kappa_{\text{proxy}}$ than Stage IV by $\Delta\kappa > 2.0$ nats ($p < 0.01$) |

**Falsification:** If $\kappa_{\text{proxy}}$ trajectories show no attractor structure (e.g., Gaussian random walk), the driven-dissipative model is not supported.

---

## 8. Cold Truth — Four Non-Negotiable Concessions

These problems are stated without qualification. They are not softened.

**Problem 1 — The proxy $p_{\text{ref}}$ is species-level equilibrium, not IS-NESS.** The substitution $p^* \to p_{\text{ref}}$ is a philosophical demotion disguised as a methodological upgrade. $p_{\text{ref}}$ is the statistical average of observed human neural activity at rest. Assuming it approximates IS-NESS coherence is an epistemological leap of unknown magnitude. The gap $\varepsilon_{\text{species}} = \text{KL}[p_{\text{pop}} \| p^*]$ is permanently undetermined — it could be 0.01 nats or $10^6$ nats. All downstream $\kappa$ values inherit this systematic uncertainty.

**Problem 2 — EBM training instability.** Energy-Based Models are notoriously difficult to train: mode collapse, slow MCMC mixing, and sensitivity to hyperparameters are endemic. The partition function $Z_\psi$ is intractable for $d_z = 32$. The operational $\text{KL}[q_{\text{node}} \| p_{\text{ref}}]$ may have substantial numerical error (estimated $\pm 0.3$ nats). This error propagates into $\kappa_{\text{proxy}}$ and all downstream predictions.

**Problem 3 — Resting-state is not a unique reference state.** Resting-state neural activity varies with time of day, sleep quality, medication, caffeine, and prior cognitive load. A $p_{\text{ref}}$ trained on morning-session resting-state will systematically misestimate $\kappa_{\text{proxy}}$ for afternoon recordings. The reference is a function of the training dataset, not a universal property of the nervous system.

**Problem 4 — The $p^*$ gap remains the model's central unresolved problem.** UP-01 does not solve the $p^*$ problem — it *circumvents* it by replacing an unmeasurable quantity with a measurable proxy. The theoretical structure of SYN-05 through SYN-13 still formally requires $p^*$. If $p_{\text{ref}} \neq p^*$ (as is almost certainly the case), then $\kappa_{\text{proxy}} \neq \kappa_{\text{true}}$, and the model's predictions are systematically biased by an unknown offset. This is the most honest statement of the limitation: the model works *up to an unknown additive constant* in karmic load.

> **Overall verdict on SYN-05:** A mathematically coherent driven-dissipative system that generates testable trajectory predictions via UP-01. The operationalization of $p^*$ as $p_{\text{ref}}$ rescues the formula from unfalsifiability at the cost of demoting the reference from "cosmic coherence" to "species-level neural equilibrium." This trade-off is mandatory: without it, SYN-05 is philosophy, not science. With it, SYN-05 is science with a declared philosophical assumption ($\varepsilon_{\text{species}}$) at its core.

---

## 9. Dimensional Audit — Full Section Verification

| Equation | LHS Unit | RHS Unit | Consistent | Notes |
|----------|---------|---------|-----------|-------|
| $\kappa(t) = \int_0^t \text{KL}[q \| p_{\text{ref}}]\, ds$ | nats·s | nats × s | ✅ | Time-integrated divergence |
| $d\kappa/dt = \text{KL} - \gamma_\kappa \Omega_{\text{wisdom}}$ | nats | nats − (dimensionless × nats) | ✅ | Rate equation |
| $d\Omega_{\text{wisdom}}/dt = \mu_\Omega \cdot I(T;Y) \cdot \mathbf{1}[\cdot]$ | nats·s$^{-1}$ | dimensionless × nats·s$^{-1}$ | ✅ | Conditional accumulation |
| $p_{\text{ref}} = \exp(-E_\psi)/Z_\psi$ | probability | dimensionless / dimensionless | ✅ | Boltzmann distribution |
| $\dot{V} = 2\kappa(\text{KL} - \gamma_\kappa\Omega)$ | (nats·s)$^2$·s$^{-1}$ | (nats·s)(nats) | ✅ | Lyapunov derivative |

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Sources: SESSION 02; SESSION 04 (UP-01); CRITIQUE RESPONSE (Fix 04)*
*Cross-references: `SYN_06_ontological_smelting.md`, `SYN_07_autopoietic_coherence.md`, `SYN_REGISTRY.md`, `docs/glossary/variable_ontology.md`*
