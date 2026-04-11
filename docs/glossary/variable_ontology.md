# Variable Ontology
> **Path:** `docs/glossary/variable_ontology.md`
> **Source:** `Preliminary: Dimensional Analysis & The Units Ontology.docx`
> **Epistemic Status:** This document defines the dimensional contract governing all SYN formulas. Variables without strict dimensional grounding produce pseudoscience. Every symbol appearing in SYN-01 through SYN-13 must trace back to an entry in this table.

---

## Iron Rule

The correct derivation order is:

```
Observed Phenomenon → Mathematical Proxy → Dimensionally Consistent Formula
```

**Not the reverse.** Deriving a formula and then searching for a phenomenon to fit it produces formally elegant pseudoscience. This ontology enforces the forward direction.

---

## 1. Primary State Variables — The Six-Dimensional Node Vector

These six variables constitute the state vector $\mathbf{X}$ of the SYN-13 master equation:
$$\mathbf{X} = (\kappa,\; \Phi,\; \zeta,\; \Omega_{\text{wisdom}},\; W,\; \beta_{IB})^\top$$

| Symbol | Metaphysical Concept | Physical / Informational Proxy | Strict Unit | Tier |
|--------|----------------------|-------------------------------|-------------|------|
| $\kappa$ | Karmic Load | Accumulated Kullback-Leibler divergence from coherence: $\sum_t \text{KL}[q_t \| p^*]$ | nats | B |
| $\Phi$ | Node Developmental Stage / Awareness | Integrated Information (IIT) — irreducible causal structure of a system | $\phi$-units (dimensionless) | B |
| $\zeta$ | Veil Thickness / Screen Density | Conditional entropy $H(X|T)$ — the inaccessible IS-NESS bits at the current compression level | nats | B |
| $\Omega_{\text{wisdom}}$ | Wisdom Accumulation | Extracted invariant patterns from karmic history; mutual information preserved across stage transitions | nats | B |
| $W$ | Free Will Variable | Present-moment information fraction (TRF decomposition) — the portion of current neural response not predictable from past stimulus history | $[0, 1]$ (dimensionless) | B |
| $\beta_{IB}$ | IB Trade-off Parameter / Compression Rigidity | Slope of the Information Bottleneck curve at the current developmental stage: $(\partial I(T;Y) / \partial I(X;T))_{\text{IB curve}}$ | $\text{nats}^{-1}$ | B |

---

## 2. Foundational Information-Theoretic Variables

| Symbol | Metaphysical Concept | Physical / Informational Proxy | Strict Unit | Tier |
|--------|----------------------|-------------------------------|-------------|------|
| $H(X)$ | IS-NESS Total Potential | Shannon entropy of the source state space | nats | A |
| $I(X;T)$ | Retained IS-NESS Access | Mutual information between source $X$ and compressed representation $T$ | nats | A |
| $I(T;Y)$ | Experiential Relevance | Mutual information between compressed representation $T$ and task-relevant variable $Y$ | nats | A |
| $\eta_{IB}$ | Compression Efficiency (UIBIC Ratio) | $\eta_{IB} := I(T;Y) / I(X;T)$ — experiential relevance retained per nat of structural compression | dimensionless | B |
| $\Delta_K^{(\mathcal{N})}$ | Completeness Deficit | Kolmogorov complexity reduction upon instantiation: $K(\Omega) - K(\Omega \mid \bigoplus_i \mathcal{N}_i)$ | nats | B |

> ⚠️ **Gap 1 — Kolmogorov Uncomputability:** $\Delta_K$ depends on $K(\cdot)$, which is formally uncomputable (Chaitin's incompleteness theorem). All empirical applications must substitute a computable proxy (Lempel-Ziv compression, Borel normality approximations). The gap between any LZ-based lower bound and the true MDL may be **unbounded**.

---

## 3. Operator and Lagrangian Variables

| Symbol | Metaphysical Concept | Physical / Informational Proxy | Strict Unit | Tier |
|--------|----------------------|-------------------------------|-------------|------|
| $\mathcal{L}_{GF}^{(n)}$ | Great Forgetting Lagrangian | IB objective at hierarchical level $n$: $I(X^{(n+1)}; T^{(n)}) - \beta_{IB}^{(n)} \cdot I(T^{(n)}; Y^{(n)})$ | nats | B |
| $\mathcal{L}_{\text{inst}}$ | Instantiation Lagrangian | Free energy minimization objective for node generation: $\text{KL}[q(\mathcal{N}) \| p_\Omega(\mathcal{N})] - \log Z(\mathcal{N})$ | nats | B |
| $P_{\text{inst}}(\mathcal{N})$ | Probability of Instantiation | $1 - \exp(-\beta_{\text{ont}} \cdot \Delta_K^{(\mathcal{N})})$ | $[0, 1]$ (dimensionless) | B |
| $\mathcal{F}_{\text{actualized}}$ | Actualized Finitude | The set of instantiated finite conditions within $\Omega$ | set (dimensionless) | A |

---

## 4. Thermodynamic and Cost Variables

| Symbol | Metaphysical Concept | Physical / Informational Proxy | Strict Unit | Tier |
|--------|----------------------|-------------------------------|-------------|------|
| $E_{\text{inst}}$ | Cost of Instantiation | Landauer energy per bit erased: $E_{\text{inst}} = k_B T \ln 2$ | Joules/bit | B |
| $\beta_{\text{ont}}$ | Ontological Pressure / Inverse Temperature | Inverse information temperature scaling the instantiation forcing function | $\text{nats}^{-1}$ | B |
| $\rho_{\text{dissip}}$ | Entropy Production Rate | Metabolic heat dissipation rate per nat of Kolmogorov complexity instantiated | nats/s | B |

> ⚠️ **Calibration Note:** $\beta_{\text{ont}}$ cannot be derived a priori from the IS-NESS. It is a free parameter that must be calibrated empirically from known phase transitions (e.g., abiogenesis thresholds, organoid differentiation events).

---

## 5. Hierarchical / Fractal Variables

| Symbol | Metaphysical Concept | Physical / Informational Proxy | Strict Unit | Tier |
|--------|----------------------|-------------------------------|-------------|------|
| $X^{(n)}$ | IS-NESS Hierarchy Level $n$ | Measurable source state space at hierarchical level $n$ (e.g., MaxEnt sensory environment) | nats | B |
| $T^{(n)}$ | Node Compressed Representation | Localized node's internal compressed representation at level $n$ | nats | B |
| $Y^{(n)}$ | Experiential Relevance at Level $n$ | Minimal sufficient statistic required for the node to navigate its environment | nats | B |
| $\beta_{IB}^{(n)}$ | Level-$n$ Compression Trade-off | Slope of the IB curve at hierarchical level $n$ | $\text{nats}^{-1}$ | B |
| $\zeta^{(n)}$ | Veil Thickness at Level $n$ | $H(X^{(n+1)}) - I(X^{(n+1)}; T^{(n)})$ | nats | B |

---

## 6. Set-Theoretic (Tier A) Variables

| Symbol | Definition | Strict Unit | Tier |
|--------|-----------|-------------|------|
| $\Omega$ | The IS-NESS: the set of all potentials, $P_{\text{all}}$ | set (dimensionless) | D |
| $\mathcal{N}$ | The set of instantiated finite nodes | set (dimensionless) | B |
| $\Omega_{\text{no-finitude}}$ | $\Omega \setminus \{\mathcal{F}_{\text{actualized}}\}$ — the IS-NESS without actualized finitude | set (dimensionless) | A |

**Tier A Containment Proof (SYN-01R-A):**
$$\Omega_{\text{no-finitude}} := \Omega \setminus \{\mathcal{F}_{\text{actualized}}\} \subsetneq \Omega \quad \therefore \quad \Omega_{\text{no-finitude}} \not\equiv \Omega$$

This is an analytic truth requiring no empirical test. The physical analog (Tier B) operationalizes the consequence.

---

## 7. Master Equation Parameters

| Symbol | Description | Strict Unit | Tier |
|--------|-------------|-------------|------|
| $\theta_{\text{universe}}$ | Global parameter set of the SYN-13 dynamical system | domain-specific | B |
| $J_F$ | Jacobian of the 6D dynamical system $F$ | dimensionless (matrix) | B |
| $p^*$ | Coherent reference distribution (fully developed node) | probability measure | B |
| $p_{\text{ref}}$ | Learnable proxy for $p^*$ (UP-01 proposal) | probability measure | B |
| $W_2(p_{\text{ref}}, p^*)$ | Wasserstein-2 distance between reference proxy and true $p^*$ | nats | B |

> ⚠️ **Gap 2 — The $p^*$ Problem:** No first-principles derivation of $p^*$ currently exists. The approximation error $W_2(p_{\text{ref}}, p^*)$ is uncharacterized. All karmic dynamics (SYN-05 through SYN-13) carry this free parameter at their core.

---

## 8. Tier Classification Reference

| Tier | Label | Criterion |
|------|-------|-----------|
| **A** | Analytic Truth | True by definition or formal logic alone; no empirical test required |
| **B** | Formal Analog | Mathematically rigorous structural isomorphism; empirically testable but not yet tested |
| **C** | Speculative Conjecture | Consistent with known physics but lacking formal derivation |
| **D** | Metaphysical Claim | Non-falsifiable; included for conceptual completeness only |

---

*Document version: 0.1.0 | Last updated: 2026-03-29 | Source: `Preliminary: Dimensional Analysis & The Units Ontology.docx`*
