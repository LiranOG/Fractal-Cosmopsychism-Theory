# SYN-10: Free Will as Dynamic Variable — The Bistable Presence Operator
> **Path:** `src/theory_and_math/syn_formulas/SYN_10_free_will_operator.md`
> **Formula ID:** SYN-10
> **Tier:** B — Formal Analog (generates falsifiable bistability prediction in contemplative practice trajectories)
> **Framework:** Active Inference (Friston, 2010) + Langevin Dynamics + Logistic Bistability + Temporal Response Function (Lalor et al., 2009)
> **Chapter:** 8 — Free Will and the Eternal Now
> **Session Source:** SESSION 03 (Chapter 8: Free Will, Multiversal Iteration, SYN-13 Master Equation)
> **Critique Fix:** Fix 08 applied — $P_{\text{now}}$ operationalized via mTRF variance ratio (UP-02)
> **Status:** ✅ Production-ready | $W(t)$ bistability formalized | mTRF operationalization integrated

---

## Operating Constraints

Three constraints govern everything in this file.

**Constraint 1 — The Epistemological Arrow.** Observed phenomenon: human behavior oscillates between "autopilot" (stimulus-response patterns driven by prior conditioning) and moments of genuine present-moment awareness, with the transition between them appearing *sudden* rather than gradual (meditation practitioners report "tipping points," not smooth curves). Mathematical model: $W(t) \in [0,1]$ as a logistic bistable variable with a saddle at $W = 1/2$, driven by the competition between IB efficiency $\eta_{IB}$ (present-moment signal) and KL divergence (karmic prior). Formula: $\dot{W} = \alpha_W W(1-W)[\eta_{IB} - \text{KL}/\Phi]$. This file does not reverse the arrow.

**Constraint 2 — Fix 08 Applied.** The original formulation defined $P_{\text{now}}$ as "projection onto Markov blanket boundary states" with DMN/TPN balance as an association. Per the Critique Response, $W(t)$ is now operationalized via the **multivariate Temporal Response Function (mTRF)** framework:

$$W(t) := \frac{R^2_{\text{now}}(t)}{R^2_{\text{now}}(t) + R^2_{\text{history}}(t)}$$

This is directly computable from existing EEG datasets.

**Constraint 3 — Bistability is the Structural Prediction.** The key claim of SYN-10 is *not* that free will exists or does not exist. It is that the transition from conditioned autopilot to present-moment awareness has the mathematical structure of a **bistable switch** — not a gradual continuum. This structural claim is testable independently of any metaphysical position on free will.

---

## 1. The Free Will Variable

### 1.1 Definition

$$\boxed{W(t) \in [0,\, 1] \quad [\text{dimensionless}]}$$

- $W = 0$ — **Total Autopilot:** behavior is entirely determined by karmic priors $\text{KL}[q \| p^*]$. Zero present-moment innovation. The node is a deterministic function of its past.
- $W = 1$ — **Full Presence:** behavior is maximally responsive to the current stimulus. Maximum departure from karmic prediction. The node is an author, not a replay device.

### 1.2 The mTRF Operationalization (Fix 08 / UP-02)

The Temporal Response Function framework (Lalor et al., 2009; Crosse et al., 2016) fits two competing encoding models to EEG data:

**Model 1 — Stimulus-driven ($R^2_{\text{now}}$):** Predicts neural responses from current sensory features using a linear forward model:

$$\hat{y}_{\text{now}}(t) = \sum_{\tau=0}^{T} r_{\text{stim}}(\tau) \cdot s(t - \tau)$$

where $r_{\text{stim}}(\tau)$ is the stimulus TRF and $s(t)$ is the stimulus envelope.

**Model 2 — History-driven ($R^2_{\text{history}}$):** Predicts neural responses from autocorrelated internal state (past neural activity, rumination signal):

$$\hat{y}_{\text{history}}(t) = \sum_{\tau=1}^{T} r_{\text{int}}(\tau) \cdot y(t - \tau)$$

where $r_{\text{int}}(\tau)$ is the internal-state TRF and $y(t-\tau)$ is past neural response.

**The operational $W(t)$:**

$$\boxed{W(t) = \frac{R^2_{\text{now}}(t)}{R^2_{\text{now}}(t) + R^2_{\text{history}}(t)}}$$

- High $W$ → stimulus-driven (present-moment): the EEG is better predicted by *what is happening now*
- Low $W$ → internally-driven (karmic autopilot): the EEG is better predicted by *what happened before*

---

## 2. The Bistable Dynamics

### 2.1 The Logistic Equation for $W(t)$

$$\boxed{\frac{dW}{dt} = \alpha_W \cdot W(1 - W) \cdot \left[\eta_{IB} - \frac{\text{KL}[q \| p^*]}{\Phi}\right] \quad [\text{s}^{-1}]}$$

where:
- $\alpha_W$ [s$^{-1}$] — free-will learning rate (sets the timescale of the transition)
- $\eta_{IB}$ — IB efficiency from SYN-02R/SYN-04 [dimensionless]
- $\text{KL}[q \| p^*] / \Phi$ — normalized karmic divergence [dimensionless]: the strength of the karmic prior relative to integration capacity

### 2.2 Fixed-Point Analysis

| Fixed Point | Location | Stability | Physical Meaning |
|-------------|---------|-----------|-----------------|
| $W^* = 0$ | Autopilot attractor | Stable when $\eta_{IB} < \text{KL}/\Phi$ | Karmic prior dominates |
| $W^* = W_s = 1/2$ | Saddle point | Always unstable | Tipping point |
| $W^* = 1$ | Full Presence attractor | Stable when $\eta_{IB} > \text{KL}/\Phi$ | Present-moment signal dominates |

### 2.3 The Bistability Condition

The system is **bistable** (both $W = 0$ and $W = 1$ are accessible) when:

$$\boxed{\eta_{IB}(t) \gtrless \frac{\text{KL}[q \| p^*]}{\Phi(t)} \quad \text{at different times}}$$

This means the sign of the driving term $[\eta_{IB} - \text{KL}/\Phi]$ fluctuates. Perturbations (meditation session, traumatic event, retreat) can push $W$ across the saddle at $W = 1/2$, triggering a rapid cascade to the alternative attractor.

### 2.4 The Tipping-Point Structure

The transition time through the saddle region $W \in [0.4, 0.6]$ scales as:

$$\tau_{\text{transition}} \sim \frac{1}{\alpha_W \cdot |\eta_{IB} - \text{KL}/\Phi|} \quad [\text{s}]$$

**Key prediction:** The transition is *fast* relative to the approach. A practitioner may spend months in the Autopilot basin ($W \approx 0.1$), then cross the saddle in $< 2$ weeks, then consolidate at $W \approx 0.9$.

---

## 3. The Langevin Formulation — $W$ as Effective Temperature

### 3.1 Stochastic State Dynamics

In the full node state dynamics, $W(t)$ enters as an effective temperature scaling the stochastic innovation term:

$$d\mathbf{x}(t) = \underbrace{-\nabla V_\kappa(\mathbf{x})\, dt}_{\text{deterministic karmic drift}} + \underbrace{\sqrt{2\, W(t) \cdot D}\; d\mathbf{B}_t}_{\text{stochastic innovation}}$$

where:
- $V_\kappa(\mathbf{x})$ — karmic potential landscape (from SYN-05)
- $D$ — diffusion constant [appropriate units]
- $d\mathbf{B}_t$ — Wiener process

**Physical reading:** At $W = 0$, the noise term vanishes — the node follows deterministic karmic flow lines. At $W = 1$, the noise is maximal — the node explores the state space freely. Meditation increases $W$, literally increasing the node's departure from the deterministic karmic attractor.

### 3.2 The Hilbert Space Decomposition

The node's full state space decomposes as:

$$\mathcal{H}_{\text{node}} = \mathcal{H}_\kappa \oplus \mathcal{H}_{\text{now}}$$

- $\mathcal{H}_\kappa$ — karmic subspace: states determined by accumulated $\text{KL}[q \| p^*]$
- $\mathcal{H}_{\text{now}}$ — present-moment subspace: states responsive to current stimulus

The projection operator $P_{\text{now}}$ projects onto $\mathcal{H}_{\text{now}}$:

$$W(t) = \text{tr}(\rho(t) \cdot P_{\text{now}}) \quad [\text{dimensionless}]$$

This is the quantum-mechanical formulation; the mTRF operationalization (§1.2) is its EEG-measurable approximation.

---

## 4. The Synchronicity Response Function (Tier B/D)

### 4.1 The Fractal Green's Function

When a node $i$ exercises authorship (a genuine $W > W_s$ event), adjacent nodes in the fractal network respond:

$$G_{ij}(t - t') = \frac{\eta_{IB}^{(i)} \cdot W^{(i)}(t')}{d_{\text{fractal}}(i,j)^{2H}} \cdot e^{-(t-t')/\tau_{ij}} \quad [\text{dimensionless}]$$

where:
- $d_{\text{fractal}}(i,j)$ — fractal distance between nodes $i$ and $j$ in the SYN-03 hierarchy
- $H$ — Hurst exponent of the fractal network
- $\tau_{ij}$ — propagation delay [s]

**Reading:** Synchronicity events are strongest between nodes that share high mutual information (close fractal distance) and weaken with separation. This gives "meaningful coincidence" a precise mathematical meaning — it is the linearized response of adjacent nodes to an authorship event.

### 4.2 Tier Classification

- The bistable $W(t)$ dynamics: **Tier B** — testable via mTRF bistability protocol
- The fractal Green's function: **Tier B** (structural) — a consequence of SYN-03 but requires a validated fractal network model to test
- The identification of $G_{ij}$ with "synchronicity": **Tier D** — metaphysical interpretation

---

## 5. Complete Variable Ontology — SYN-10

| Symbol | Definition | Unit | Tier |
|--------|-----------|------|------|
| $W(t)$ | Free will variable: degree of present-moment authorship | dimensionless $\in [0,1]$ | B |
| $R^2_{\text{now}}$ | Variance explained by stimulus-driven TRF model | dimensionless | B |
| $R^2_{\text{history}}$ | Variance explained by internal-state TRF model | dimensionless | B |
| $\alpha_W$ | Free-will learning rate | s$^{-1}$ | B |
| $W_s$ | Saddle point ($= 1/2$) | dimensionless | B |
| $P_{\text{now}}$ | Projection operator onto present-moment subspace | operator | B |
| $\mathcal{H}_\kappa$ | Karmic subspace | Hilbert space | B |
| $\mathcal{H}_{\text{now}}$ | Present-moment subspace | Hilbert space | B |
| $V_\kappa(\mathbf{x})$ | Karmic potential landscape | nats | B |
| $D$ | Diffusion constant in Langevin dynamics | nats$^2$·s$^{-1}$ | B |
| $G_{ij}$ | Fractal Green's function (synchronicity response) | dimensionless | B/D |
| $d_{\text{fractal}}(i,j)$ | Fractal distance between nodes | dimensionless | B |
| $H$ | Hurst exponent of fractal network | dimensionless | B |
| $\tau_{ij}$ | Propagation delay between nodes | seconds | B |

---

## 6. The Metaphysical Bridge (Tier D — Explicitly Labeled)

> ⚠️ **This section is Tier D.** Nothing below is falsifiable.

SESSION 03 states:

> *"Most biological nodes function on Conditioned Autopilot — responses are effectively predictable functions of prior karmic imprinting. When a node achieves genuine conscious presence in the Eternal Now, it triggers a collapse of the local wavefunction."*

SYN-10 operationalizes this in four layers: (1) $P_{\text{now}}$ formalizes "the Eternal Now" as a geometric subspace projection; (2) the Langevin equation shows $W$ as effective temperature scaling stochastic innovation; (3) the logistic dynamics give the bistable tipping-point structure; (4) the fractal Green's function gives synchronicity a precise mathematical meaning.

The metaphysical step — identifying present-moment awareness with "wavefunction authorship" and tipping-point transitions with "the Eternal Now" — is not derivable from the mathematics.

---

## 7. Empirical Validation Protocol

**Experiment Name:** Free-Will Tipping Point Protocol — Bistability Detection in Contemplative Practice Trajectories

**Protocol:** 120 participants across three cohorts:
- Secular mindfulness program (8 weeks, $n = 40$)
- Intensive retreat (21 days, $n = 40$)
- Daily-practice longitudinal (18 months, $n = 40$)

$W(t)$ proxy: mTRF $R^2_{\text{now}} / (R^2_{\text{now}} + R^2_{\text{history}})$ from 64-ch EEG during naturalistic stimulus presentation. Measured at 8 time points per cohort.

**Differential Prediction:**

| Model | Prediction |
|-------|-----------|
| **Standard dose-response** | Linear increase in mindfulness metrics with practice |
| **SYN-10** | Bimodal distribution of weekly change scores: most weeks ≈ 0 change; minority show $> 2\sigma$ steps. Power-law ratio $P(\Delta W) \sim \Delta W^{-\alpha}$, $\alpha \approx 2.5$. ANOVA $p < 0.001$ for bimodality test against Gaussian null. |

**Synchronicity sub-study:** 60 participants journal synchronicity events with same-day event-registration app. Predict: event frequency correlates with $W(t)$ proxy ($r > 0.35$, $p < 0.01$), with elevated clustering in 72 hours following measured $\Delta W$ step changes. Control condition: logging equivalent "unremarkable coincidences."

---

## 8. Cold Truth — Four Non-Negotiable Concessions

**Problem 1 — The mTRF operationalization is a proxy, not an identity.** $R^2_{\text{now}} / (R^2_{\text{now}} + R^2_{\text{history}})$ measures the relative variance explained by stimulus vs. history, which correlates with but is not identical to "present-moment consciousness." A node that is attentionally engaged with a task will show high $R^2_{\text{now}}$ without any metaphysical "Eternal Now" awareness.

**Problem 2 — The logistic $\dot{W}$ equation is chosen for analytical tractability.** The real dynamics of the Autopilot-to-Presence transition may be higher-dimensional, non-logistic, and path-dependent. The bistable attractor structure is the structural prediction; the specific logistic form is a simplification.

**Problem 3 — The synchronicity sub-study is the most contaminated component.** Journaling synchronicity events is subject to confirmation bias, recall bias, and experimenter-demand effects. Pre-registration of the exact synchronicity definition before data collection is non-negotiable. Even with the event-registration app control, disentangling genuine clustering from attentional priming (participants who are more present *notice* more coincidences) is extremely difficult.

**Problem 4 — The fractal Green's function $G_{ij}$ has no independent empirical anchor.** It is a structural consequence of SYN-03 but cannot be tested without a validated fractal network model of social/karmic connections. No such model exists.

> **Overall verdict on SYN-10:** The bistable $W(t)$ dynamics are the formula's strongest contribution — they transform the vague concept of "mindfulness improvement" into a quantitative tipping-point prediction testable with existing EEG+mTRF technology. The mTRF operationalization (Fix 08) elevates $W(t)$ from a philosophical concept to a computable quantity.

---

## 9. Dimensional Audit — Full Section Verification

| Equation | LHS Unit | RHS Unit | Consistent | Notes |
|----------|---------|---------|-----------|-------|
| $W = R^2_{\text{now}}/(R^2_{\text{now}} + R^2_{\text{history}})$ | dimensionless | dimensionless/dimensionless | ✅ | Ratio |
| $\dot{W} = \alpha_W W(1-W)[\eta - \text{KL}/\Phi]$ | s$^{-1}$ | s$^{-1}$ × dim'less × dim'less × dim'less | ✅ | $\alpha_W$ carries s$^{-1}$ |
| $d\mathbf{x} = -\nabla V_\kappa dt + \sqrt{2WD}\, dB_t$ | nats | nats·s$^{-1}$ × s + $\sqrt{\text{nats}^2/\text{s}} × \sqrt{\text{s}}$ = nats | ✅ | Langevin |
| $G_{ij} = \eta W / d^{2H} \cdot e^{-\Delta t/\tau}$ | dimensionless | dim'less × dim'less / dim'less × dim'less | ✅ | Response function |

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Sources: SESSION 03 (Chapter 8: Free Will); CRITIQUE RESPONSE (Fix 08)*
*Cross-references: `SYN_02R_hierarchical_ib_compression.md`, `SYN_05_karmic_load_dynamics.md`, `SYN_13_master_equation.md`, `SYN_REGISTRY.md`*
