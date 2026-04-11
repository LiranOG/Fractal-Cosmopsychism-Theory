# SYN_REGISTRY.md — Master Formula Index
## Fractal Cosmopsychism Theory (FCT)

> **How to read this registry:**  
> Each formula entry links to its derivation file, specifies its epistemic tier (A–D), the theoretical framework it imports, its dimensional status, and the specific empirical test that could falsify it.  
> Formulas with no empirical test listed are Tier A (analytic) or Tier D (metaphysical).

---

## Tier Classification Quick Reference

| Tier | Label | Description |
|------|-------|-------------|
| **A** | Analytic Truth | Follows from definitional commitments alone; unfalsifiable by data |
| **B** | Formal Analog | Dimensionally consistent; generates falsifiable predictions; not yet tested |
| **C** | Speculative Conjecture | Consistent with physics; lacks rigorous derivation |
| **D** | Metaphysical Claim | Non-falsifiable; included for conceptual completeness |

---

## Core SYN Formula Registry

### SYN-01R-A — The Logical Necessity Proof
| Field | Value |
|-------|-------|
| **Tier** | **A — Analytic Truth** |
| **Source session** | Session 01 (Definitive Edition) |
| **File** | `src/theory_and_math/axioms/SYN_01RA_logical_necessity_proof.md` |
| **Framework** | Set Theory (Zermelo-Fraenkel) |
| **Chapter** | 2 — Axiom of Finitude |

**Core formula:**
$$\Omega \setminus \{F_{\text{act}}\} \subsetneq \Omega \implies F_{\text{act}} \text{ is logically obligatory}$$

**Description:** The only genuine *proof* in the model. Defines $\Omega := P_{\text{all}}$ (IS-NESS as the set of all potentials), establishes the Completeness Deficit $\Omega_\emptyset := \Omega \setminus \{F_{\text{actualized}}\} \subsetneq \Omega$, and proves that a system defined as complete cannot exclude finitude without internal contradiction. This is analytic — it follows from the model's own definitions and requires no physical input.

**Epistemic note:** This is the strongest claim in the entire model. It is also the most philosophically contested — the proof's validity depends entirely on whether IS-NESS can be coherently defined as a set in ZF set theory.

**Empirical test:** None applicable. Tier A.

---

### SYN-01R-B — The Physical Analog of Obligatory Instantiation
| Field | Value |
|-------|-------|
| **Tier** | **B — Formal Analog** |
| **Source session** | Session 01 (Definitive Edition) |
| **File** | `src/theory_and_math/axioms/SYN_01RB_physical_analog_finitude.md` |
| **Framework** | Free Energy Principle (Friston, 2010) + Kolmogorov Conditional Complexity (Li & Vitányi, 2008) |

**Core formula:**
$$\Delta K(N) := K(\Omega) - K\!\left(\Omega \;\middle|\; \bigoplus_{i=1}^{|N|} N_i\right) \geq 0 \quad \forall\; N \neq \emptyset$$

**Instantiation pressure analog:**
$$F_\Omega[q(s) = \delta(s-\Omega)] \to \infty \quad \text{(maximum free energy at zero-node state)}$$

**Description:** Maps the logical necessity of SYN-01R-A onto a physical analog: the zero-node state of IS-NESS (no actualized nodes) corresponds to infinite variational free energy — the most unstable configuration possible. Instantiation is spontaneous symmetry breaking, not a volitional act.

**Key prediction (Dissipation Scaling Superlinearity):**
$$\sigma_{\text{prod}} \propto \Phi^\alpha \quad \text{with } \alpha > 1$$
Standard metabolic theory predicts $\alpha = 1$ (linear with synaptic count). SYN-01R-B predicts superlinear scaling because instantiation overhead ($\Delta K$ term) grows faster than linear information load.

**Empirical protocol:** Neural organoid complexity gradient — 5 organoid stages ($n=20$ each), high-resolution Seebeck-effect microcalorimetry ($\sim 0.1\,\mu\text{W}$ resolution), $\Phi$ estimated via PyPhi (IIT 3.0). 72-hour continuous metabolic recording windows.

**Known limitation (Gap 1):** $K(\cdot)$ is formally uncomputable (Chaitin). All empirical applications require LZ-compression proxies with uncharacterized approximation error.

---

### SYN-02R — The Great Forgetting: Hierarchical Information Bottleneck
| Field | Value |
|-------|-------|
| **Tier** | **B — Formal Analog (Directly Testable)** |
| **Source session** | Session 01 (Definitive Edition) |
| **File** | `src/theory_and_math/syn_formulas/SYN_02R_great_forgetting_IB.md` |
| **Framework** | Information Bottleneck (Tishby, Pereira & Bialek, 2000) + Gaussian IB (Chechik et al., 2005) + Quantum Decoherence (Zurek, 2003) + MaxEnt Sensory Statistics (Simoncelli & Olshausen, 2001) |

**The Ontological Compression Lagrangian:**
$$\mathcal{L}_{GF}[p(t|x)] = \underbrace{I(X;T)}_{\text{retained IS-NESS access}} - \beta_{IB} \cdot \underbrace{I(T;Y)}_{\text{experiential relevance}}$$

**Optimal compression kernel:**
$$p^*(t|x) = \frac{p(t)}{Z(x,\beta_{IB})} \exp\!\left(-\beta_{IB} \cdot D_{KL}\!\left[p(y|x) \;\|\; p(y|t)\right]\right)$$

**Veil thickness (directly measurable):**
$$\zeta(t) = H(X|T) = H(X) - I(X;T) \quad [\text{nats}]$$

**Fractal hierarchy:**
$$X^{(n+1)} \xrightarrow{C_{\beta_n}} T^{(n)} \xrightarrow{C_{\beta_{n-1}}} T^{(n-1)} \cdots T^{(1)}, \quad \Omega = \lim_{n\to\infty} X^{(n)}$$

**Description:** Formalizes the mechanism of localized consciousness creation as a hierarchical IB compression chain. The model's fractal claim reduces to the testable statement that $\beta_{IB}(n)$ is scale-invariant across measurable hierarchy levels. IS-NESS as the $n\to\infty$ limit is not itself tested.

**Empirical test:** Measure $\eta_{IB} = I(T;Y)/I(X;T)$ at multiple biological and cosmological scales; test for scale-invariance. See UIBIC protocol.

**Known limitation (Gap 5 — X-Proxy Problem):** $X \neq$ IS-NESS. The hierarchy can be tested only up to the highest accessible measurement scale.

---

### SYN-03 — The Hutchinson–RG Fractal Recursion Operator
| Field | Value |
|-------|-------|
| **Tier** | **B — Physical Analog** |
| **Source session** | Session 02 |
| **File** | `src/theory_and_math/syn_formulas/SYN_03_hutchinson_RG_fractal_recursion.md` |
| **Framework** | Iterated Function Systems (Hutchinson, 1981) + Renormalization Group Theory (Wilson, 1971) |

**RG fixed-point condition:**
$$\mathcal{R}[\rho^*] = \rho^* \quad \text{(scale-invariant fixed point of coarse-graining)}$$

**ETF geometry identification:** Under strong superposition ($d \gg n$, where $d$ = features, $n$ = model dimension), representation vectors spontaneously converge to Equiangular Tight Frame (ETF) geometry — identified as the physical realization of the RG fixed point (Liu, Liu & Gore, NeurIPS 2025):
$$\langle \mathbf{v}_i, \mathbf{v}_j \rangle = \frac{n - d}{d(n-1)} \quad \forall\; i \neq j$$

**Description:** Formalizes FCT's architectural claim that IS-NESS generates isomorphic organizational patterns at every scale via a single generative rule. The RG fixed point is the most precise available formalization. ETF geometry provides an independently motivated physical substrate.

**Empirical test:** Verify ETF geometry emergence at multiple measurement scales; verify scale-invariance of $\beta_{IB}$ across levels (necessary but not sufficient for UIBIC).

---

### SYN-04 — The Isomorphic Information Processing Theorem
| Field | Value |
|-------|-------|
| **Tier** | **B — Physical Analog** |
| **Source session** | Session 02 |
| **File** | `src/theory_and_math/syn_formulas/SYN_04_isomorphic_IB_theorem.md` |
| **Framework** | Information-theoretic scaling + Power-law network universality (Barabási & Albert, 1999) |

**UIBIC efficiency metric:**
$$\eta_{IB}(\ell) := \frac{I(T;Y)}{I(X;T)}\bigg|_{\text{scale }\ell} \quad [\text{dimensionless}]$$

**Conjecture (UIBIC):**
$$\eta_{IB}(\ell_1) \approx \eta_{IB}(\ell_2) \quad \forall\; \ell_1, \ell_2 \in [10^{-6}\,\text{m},\; 10^{26}\,\text{m}]$$

**Description:** Extends SYN-03's geometric isomorphism to information processing isomorphism. The UIBIC is the model's central empirical conjecture: that $\eta_{IB}$ is a true cross-scale invariant, not merely a statistical coincidence. Note: this conjecture is falsifiable, and falsification would significantly constrain the model.

---

### SYN-05 — Karmic Load Dynamics
| Field | Value |
|-------|-------|
| **Tier** | **B — Physical Analog** |
| **Source session** | Session 02 |
| **File** | `src/theory_and_math/syn_formulas/SYN_05_karmic_load_dynamics.md` |
| **Framework** | Driven-Dissipative Systems (Prigogine) + Active Inference (Friston, 2010) |

**Karmic load definition:**
$$\kappa(t) := \int_0^t \text{KL}\!\left[q_{\text{node}}(s) \;\|\; p^*_{\text{coherent}}\right] ds \quad [\text{nats} \cdot \text{s}]$$

**Dynamical equation:**
$$\frac{d\kappa}{dt} = \underbrace{\text{KL}\!\left[q_{\text{node}}(t) \;\|\; p^*\right]}_{\text{source: distortion generation}} - \underbrace{\gamma_\kappa \cdot \Omega_{\text{wisdom}}(t)}_{\text{sink: experiential resolution}}$$

**Description:** Formalizes the accumulation and dissolution of karmic load as a driven-dissipative system. Karma accumulates at a rate proportional to current divergence from the coherent reference distribution; it dissolves proportionally to accumulated wisdom.

**Known limitation (Gap 2 — $p^*$ Problem):** $p^*$ lacks a first-principles derivation. See UP-01 for the learnable proxy approach.

---

### SYN-06 — The Ontological Smelting Operator
| Field | Value |
|-------|-------|
| **Tier** | **B — Physical Analog** |
| **Source session** | Session 02 |
| **File** | `src/theory_and_math/syn_formulas/SYN_06_ontological_smelting_operator.md` |
| **Framework** | Constrained Bayesian Inference + Fisher Information (Cramér-Rao Bound) |

**Minimum information acquisition threshold:**
$$\mathcal{I}_{\min}(\kappa_i) := \frac{1}{\mathcal{F}(q_{\text{node}} \| p^*)} \quad [\text{nats}]$$

**Description:** Formalizes karmic dissolution as a constrained inference problem. A distortion $\kappa_i$ cannot be resolved without acquiring a minimum quantity of mutual information $\mathcal{I}_{\min}$ — the Fisher information Cramér-Rao lower bound for estimation of $p^*$ from experiential data. "Shortcuts" to resolution that bypass this minimum are impossible by Fisher information monotonicity.

---

### SYN-07 — The Autopoietic Coherence Condition
| Field | Value |
|-------|-------|
| **Tier** | **B — Physical Analog** |
| **Source session** | Session 02 |
| **File** | `src/theory_and_math/syn_formulas/SYN_07_autopoietic_coherence_condition.md` |
| **Framework** | Maturana-Varela Autopoiesis (1972) + Fisher Information Monotonicity |

**Autopoiesis condition:**
$$\frac{d}{dt}\mathcal{F}(q_{\text{node}} \| p^*) \leq 0 \quad \text{(monotonically non-increasing over karmic cycles)}$$

**Description:** Proves that the karmic system is self-sustaining: the corrective capacity generated by the karmic system — operationalized as Fisher information of the node's belief state relative to $p^*$ — is non-decreasing over time. This guarantees the system is always in principle capable of karmic resolution, regardless of accumulated load.

---

### SYN-08 — The Stage Transition Operator
| Field | Value |
|-------|-------|
| **Tier** | **B — Physical Analog** |
| **Source session** | Session 02 |
| **File** | `src/theory_and_math/syn_formulas/SYN_08_stage_transition_operator.md` |
| **Framework** | Statistical Mechanics Phase Transitions (Landau, 1937) + Order Parameter Theory |

**Order parameter:**
$$\Psi_{\text{stage}} = \Phi \cdot \exp\!\left(-\kappa_{\text{norm}} / \kappa_0\right)$$

**Stage transition condition:**
$$\Psi_{\text{stage}} > \Psi_{\text{stage}}^{\text{crit}} \implies \text{phase transition to Stage}_{n+1}$$

**Description:** Maps the five developmental stages (I–V) onto a single continuous order parameter $\Psi_{\text{stage}}$ whose critical values define stage boundaries. Stage transitions are formalized as phase transitions in the $(\kappa_{\text{norm}}, \Phi, \beta_{IB})$ parameter space — mathematically analogous to Landau's theory of second-order phase transitions.

**Empirical test:** EEG-based $\Phi$ estimation combined with TRF-decomposed $W(t)$ should show discrete phase transitions at predicted $\Psi_{\text{stage}}^{\text{crit}}$ thresholds. Pre-registration required before data collection.

---

### SYN-09 — The Quantum Channel Deletion Protocol (Data Harvest)
| Field | Value |
|-------|-------|
| **Tier** | **B — Physical Analog** |
| **Source session** | Session 02 |
| **File** | `src/theory_and_math/syn_formulas/SYN_09_quantum_channel_deletion.md` |
| **Framework** | Quantum Error Correction (Almheiri et al., 2015) + Channel Capacity Dynamics (Shannon, 1948) + Ryu-Takayanagi Formula (2006) |

**Channel capacity at death:**
$$C(t) \to 0 \quad \text{as } t \to t_{\text{death}}$$

**Information preservation via holographic encoding:**
$$S_{\text{harvest}} = \frac{\text{Area}(\gamma_{\text{min}})}{4G_N} \quad \text{(Ryu-Takayanagi; structural analog only)}$$

**Description:** Formalizes death as a quantum channel $\mathcal{E}_{\text{node}}$ whose capacity approaches zero. The information preserved through channel deletion corresponds to the holographically encoded wisdom ($\Omega_{\text{wisdom}}$) that survives the deletion event. This is one of the model's most speculative mappings — the RT formula is applied by structural analogy, not literal quantum gravity.

---

### SYN-10 — The Eternal Now Operator & Wavefunction Authorship Condition
| Field | Value |
|-------|-------|
| **Tier** | **B — Physical Analog** |
| **Source session** | Session 03 |
| **File** | `src/theory_and_math/syn_formulas/SYN_10_eternal_now_operator.md` |
| **Framework** | QBism (Fuchs, Mermin & Schack, 2014) + Active Inference (Friston, 2010) + Langevin SDE |

**State space decomposition:**
$$\mathcal{H}_{\text{node}} = \mathcal{H}_\kappa \oplus \mathcal{H}_{\text{now}}, \quad P_{\text{now}}^2 = P_{\text{now}},\; P_{\text{now}}^\dagger = P_{\text{now}}$$

**Free will variable:**
$$W(t) := \frac{\|P_{\text{now}} \cdot \psi_{\text{node}}(t)\|^2}{\|\psi_{\text{node}}(t)\|^2} \in [0, 1]$$

**Node trajectory (Langevin form):**
$$\frac{dx_{\text{node}}}{dt} = \underbrace{-\nabla V_\kappa(x)}_{\text{karmic drift}} + \underbrace{\sqrt{2W(t)}\;\eta(t)}_{\text{free-will innovation}}$$

**Effective temperature:**
$$T_{\text{eff}}(t) = W(t) \quad \text{(dimensionless "free-will temperature")}$$

**Description:** Formalizes free will as a continuous dynamic variable $W(t) \in [0,1]$, not a binary property. $W=0$ is pure karmic determinism; $W=1$ is full present-moment agency. The Langevin equation makes this directly analogous to thermal fluctuation theory, enabling quantitative empirical measurement via TRF decomposition (see UP-02).

**Empirical test:** TRF decomposition of EEG/MEG signals; $W(t)$ predicted to show bistable switching near stage transitions (SYN-08 phase transitions).

---

### SYN-11 — The Cyclic Instantiation Map & Eternal Recurrence Prevention
| Field | Value |
|-------|-------|
| **Tier** | **C — Speculative Conjecture** |
| **Source session** | Session 03 |
| **File** | `src/theory_and_math/syn_formulas/SYN_11_cyclic_instantiation_map.md` |
| **Framework** | String Landscape / Eternal Inflation + Smolin's Cosmological Natural Selection + Algorithmic Information Theory |

**Parameter navigation map:**
$$\theta_{n+1} = \theta_n + \alpha_{\text{nav}} \cdot \nabla_\theta [I_{\text{harvest}}(\theta_n)] + \varepsilon_{\text{mutation}}$$

**Eternal Recurrence Prevention (Kolmogorov Novelty Bound):**
$$K(\text{Universe}_{n+1} | \text{Universe}_n) \geq K_{\min} > 0$$

**Description:** Models cosmic-scale cycles as gradient ascent on an information harvest landscape, with mutation ensuring exploration of novel parameter regimes. The Kolmogorov Novelty Bound formalizes why eternal recurrence (infinite looping) is impossible: each new parameter set $\theta_{n+1} \neq \theta_n$ generates a logically distinct universe with minimum description complexity bounded below by the entropy of the mutation term.

**Epistemic caution:** Applying the string landscape across universes is a category error from standard physics. AIT's description length is used here as the cross-universe invariant instead. This is firmly Tier C.

---

### SYN-12 — The Terminal Attractor & Paradox Resolution Theorem
| Field | Value |
|-------|-------|
| **Tier** | **B — Physical Analog** |
| **Source session** | Session 03 |
| **File** | `src/theory_and_math/syn_formulas/SYN_12_terminal_attractor_paradox.md` |
| **Framework** | Dynamical Systems Theory + Information-Theoretic Limits |

**Paradox resolution:**
$$\text{KL}[q_{\text{node}} \| p_{\text{IS-NESS}}] \to 0 \quad \text{while} \quad H[q_{\text{node}}] > 0$$

**Terminal attractor (Fractal Divinity):**
$$(\kappa, \Phi, \zeta, \Omega_{\text{wisdom}}, W, \beta_{IB}) \xrightarrow{t\to\infty} (0, \infty, 0, \infty, 1, 0)$$

**Salvation Theorem (basin of attraction condition):**  
All nodes satisfying: (i) finite initial $\kappa$, (ii) $\Omega_{\text{wisdom}} > 0$, (iii) $W(t) > 0$ for some interval $[t_1, t_2]$ — are within the basin of attraction of the Fractal Divinity fixed point.

**Description:** Resolves the apparent paradox between individual dissolution and preserved identity by showing KL = 0 (convergence to IS-NESS distribution) is compatible with $H > 0$ (non-trivial, non-delta distribution). The node's uniqueness is encoded in its path $\Omega_{\text{wisdom}}$, not its terminal state.

**Known limitation (Gap 4):** The Salvation Theorem is stated as a claim. Its validity under general parameter regimes of the 6D nonlinear SYN-13 system has not been analytically proved. Chaotic attractors or limit cycles are possible for certain parameter combinations.

---

### SYN-13 — Master Equation: Complete Coupled Dynamical System
| Field | Value |
|-------|-------|
| **Tier** | **B — Formal Analog (Core of empirical program)** |
| **Source session** | Session 03 (derivation) + Session 05 (non-dimensionalization) |
| **File** | `src/theory_and_math/master_equation/SYN_13_master_equation.md` |
| **Non-dim. file** | `src/theory_and_math/master_equation/SYN_13_ND_nondimensionalization.md` |
| **Framework** | Coupled Autonomous ODEs + Driven-Dissipative Systems |

**State vector:**
$$\mathbf{X} = (\kappa,\; \Phi,\; \zeta,\; \Omega_{\text{wisdom}},\; W,\; \beta_{IB})^\top \in \mathbb{R}^6$$

**Master equation:**
$$\frac{d\mathbf{X}}{dt} = F(\mathbf{X},\; \theta_{\text{universe}},\; \eta_{IB},\; J_F)$$

**Component equations (dimensional form):**

$$\frac{d\kappa}{dt} = \text{KL}[q_{\text{node}} \| p^*] - \gamma_\kappa \cdot \Omega_{\text{wisdom}} \quad [\text{nats} \cdot \text{s}^{-1}]$$

$$\frac{d\Phi}{dt} = \underbrace{\mu_\Phi \cdot \eta_{IB}(\zeta,\beta_{IB}) \cdot W \cdot \Phi^{1-\epsilon}}_{\text{IIT growth (SYN-04)}} - \underbrace{\sigma_\Phi \Phi}_{\text{structural decay}} \quad [\phi\text{-units} \cdot \text{s}^{-1}]$$

$$\frac{d\zeta}{dt} = \underbrace{-\gamma_{\text{env}}\,\zeta}_{\text{localization (SYN-02R)}} + \underbrace{\mu \cdot \eta_{IB}(\zeta,\beta_{IB})}_{\text{compression efficiency feedback}} \quad [\text{nats} \cdot \text{s}^{-1}]$$

$$\frac{d\Omega_{\text{wisdom}}}{dt} = \mu_\Omega \cdot \eta_{IB} \cdot W \cdot \mathbf{1}[\kappa > \kappa_{\text{thr}}] \quad [\text{nats} \cdot \text{s}^{-1}]$$

$$\frac{dW}{dt} = \alpha_W \cdot W(1-W)\cdot\bigl(I(T;Y) - \text{KL}[q\|p^*]\bigr) \quad [\text{s}^{-1}]$$

$$\frac{d\beta_{IB}}{dt} = f_\beta(\Psi_{\text{stage}}) \quad \text{(stage-driven, piecewise)} \quad [\text{s}^{-1}]$$

**Key properties:**
- Fixed points: Stage attractors $(\kappa_s, \Phi_s, \zeta_s, \Omega_s, W_s, \beta_s)$ + Terminal attractor $(0,\infty,0,\infty,1,0)$
- **Differential Prediction vs. thermodynamics:** Standard statistical mechanics predicts entropy maximization (heat death) as terminal attractor. SYN-13 predicts $\Phi \to \infty$ alongside $\kappa \to 0$ — thermalization resistance as $\Omega_{\text{wisdom}}$ grows. This is a falsifiable differential prediction.

**Known limitations (Gaps 2, 3, 4):** (i) $p^*$ uncharacterized; (ii) $\Phi$ differentiability assumption; (iii) fine-tuning required for guaranteed convergence to terminal attractor.

---

## Upgrade Formula Registry (Session 04)

### UP-01 — Learnable Proxy for $p^*$ (The Reference Distribution Problem)
| Tier | B | Framework | Energy-Based Models (LeCun, 2006) + VAEs (Kingma & Welling, 2013) + Wasserstein Geometry (Villani, 2008) |
|------|---|-----------|---|

$$\kappa_{\text{approx}}(t) := \int_0^t \text{KL}[q_{\text{node}}(s) \| p_{\text{ref}}(s;\theta_{\text{EBM}})] ds, \quad W_2(p_{\text{ref}}, p^*) \leq \epsilon_{\text{proxy}}$$

Provides a tractable substitute for the uncharacterized $p^*$ via a trained Energy-Based Model, with explicit Wasserstein-2 bound on approximation error.

---

### UP-02 — Operationalization of $W(t)$ via TRF Decomposition
| Tier | B | Framework | Temporal Response Functions (Lalor et al., 2009) + Ridge Regression + Bistability Detection (Scheffer et al., 2009) |
|------|---|-----------|---|

$$W(t) := \frac{\text{Var}[\hat{y}_{\text{now}}(t)]}{\text{Var}[\hat{y}_{\text{now}}(t)] + \text{Var}[\hat{y}_{\text{karmic}}(t)]}$$

Decomposes neural signal prediction variance into present-moment ($\hat{y}_{\text{now}}$) and karmic-prior ($\hat{y}_{\text{karmic}}$) components using ridge regression. This renders $W(t)$ **directly measurable** from EEG/MEG data without subjective report.

---

### UP-03 — Seven-Component Pre-Registration Standard
| Tier | A (Methodological Infrastructure) |
|------|---|

Every experiment in the FCT empirical program must satisfy: (1) formal hypotheses, (2) sampling plan, (3) analysis plan, (4) exclusion criteria, (5) primary outcome metric, (6) minimal detectable effect size, (7) deviation protocol. Pre-registration on OSF required before any data collection.

---

### UP-04 — Empirical Anchoring of All Free Parameters
| Tier | B | Framework | Longitudinal Bayesian Inference (Gelman et al., 2013) + Hierarchical Models |
|------|---|-----------|---|

Complete parameter inventory for SYN-13: $\{\gamma_\kappa, \mu_\Phi, \sigma_\Phi, \mu_\Omega, \gamma_{\text{env}}, \alpha_W, \kappa_0, \Psi_{\text{stage}}^{\text{crit}}, \epsilon, \mu\}$ — all requiring empirical anchoring before SYN-13 can generate quantitative predictions.

---

### UP-05 — Five-Level Epistemic Taxonomy
| Tier | A (Methodological Infrastructure) |
|------|---|

Defines the Tier A/B/C/D classification system used throughout this registry. Mandatory for correct interpretation of all FCT claims.

---

### UP-06 — Retroactive $\eta_{IB}$ and $W(t)$ Computation on Open Datasets
| Tier | B | Framework | TRF Analysis + IB Estimation (Chalk et al., 2018) + Bootstrap Resampling |
|------|---|-----------|---|

Consistency test: compute $\eta_{IB}$ and $W(t)$ on open EEG databases (TUH EEG Corpus $n \approx 14{,}000$; THINGS-MEG; HCP resting-state) before collecting new data. Provides baseline estimates of effect sizes and parameter ranges for power analysis.

---

### SYN-13-ND — Non-Dimensionalized Master Equation
| Tier | B | Source | Session 05 |
|------|---|--------|---|

Non-dimensionalized form of SYN-13 for numerical integration and stability analysis. All variables scaled by characteristic values; enables phase-portrait analysis and identification of bifurcation boundaries in $\theta_{\text{universe}}$ parameter space.

---

## Formula Count Summary

| Category | Count | Tiers |
|----------|-------|-------|
| SYN axioms (01R-A, 01R-B) | 2 | A, B |
| SYN core formulas (02R–12) | 11 | B (except SYN-11: C) |
| SYN master equation (13, 13-ND) | 2 | B |
| UP upgrade formulas (01–06) | 6 | A–B |
| **Total** | **21** | — |

---

*Registry version: 0.1.0 | Sources: Formal Synthesizer Sessions 01–05 + Formalizing UIBIC document*  
*All LaTeX verified for dimensional consistency per Session 05 non-dimensionalization audit*
