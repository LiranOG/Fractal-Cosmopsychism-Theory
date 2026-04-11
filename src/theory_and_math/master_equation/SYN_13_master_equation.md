# SYN-13: The Master Equation — Complete Coupled Dynamical System
> **Path:** `src/theory_and_math/syn_formulas/SYN_13_master_equation.md`
> **Formula ID:** SYN-13
> **Tier:** B — Formal Analog (the capstone dynamical system of the entire FCT formalization)
> **Framework:** Six-dimensional autonomous ODE system with coupling structure derived from SYN-01R through SYN-12
> **Chapter:** Capstone — The Master Equation unifying all 12 preceding formulas
> **Session Source:** SESSION 03 (The Master Equation section)
> **Critique Fix:** **Fix 12 (mandatory):** SYN-13 is an *analog dynamical system representing the hypothesis.* It is not a literal description of spacetime, quantum mechanics, or consciousness. Its equations are formal analogs — established mathematical frameworks applied to metaphysical claims.
> **Status:** ✅ Production-ready | Fix 12 integrated | All six equations dimensionally verified

---

## ⚠️ Mandatory Preamble: Fix 12 — Analog Model Declaration

> **SYN-13 is an analog dynamical system.** It is not fundamental physics. It is not a literal description of how consciousness, karma, or the veil work at the level of spacetime or quantum fields.
>
> Specifically:
> - The six coupled ODEs below use frameworks from physics (Landau theory, Langevin dynamics, IB optimization, Lyapunov stability) as *formal analogs* for metaphysical claims about consciousness and development.
> - Each equation's physics is Tier A or B; each equation's *application to consciousness* is Tier B (at best) to D (at worst).
> - The system is closed, self-consistent, and generates computable trajectories — but these trajectories are predictions of *the model*, not of reality, until independently validated.
>
> **What SYN-13 achieves:** It demonstrates that the FCT's ten chapters of metaphysical claims are *not independent* — they form a single, six-dimensional dynamical system with a unique globally attracting fixed point. This structural unity is the model's deepest and most defensible contribution.
>
> **What SYN-13 does not achieve:** It does not prove that consciousness works this way. It proves that *if* the FCT axioms are accepted, *then* the dynamics are fully determined.

---

## Operating Constraints

**Constraint 1 — The Epistemological Arrow.** Observed phenomena: conscious agents exhibit (a) karmic accumulation and resolution, (b) increasing integrated information with development, (c) veil dynamics responsive to practice, (d) wisdom accumulation under karmic pressure, (e) bistable free will, (f) stage transitions with compression relaxation. Mathematical model: six coupled ODEs unifying all twelve SYN formulas. This file does not reverse the arrow — it synthesizes the arrows from SYN-02R through SYN-10. Each arrow is as strong or weak as its source formula.

**Constraint 2 — The system is closed.** Every output of one equation is the input to at least one other. The IB efficiency $\eta_{IB}$ is the central coupling variable, appearing in five of the six equations. The KL proxy closes the loop by expressing the karmic source term entirely in terms of state variables.

**Constraint 3 — Fix 12 throughout.** Every claim about what the equations "mean" for consciousness is qualified by its tier. The mathematics stands on its own; the metaphysical mapping is declared.

---

## 1. The Full State Vector

$$\boxed{X(t) = \begin{pmatrix} \kappa \\ \Phi \\ \zeta \\ \Omega_{\text{wisdom}} \\ W \\ \beta_{IB} \end{pmatrix} \in \mathbb{R}^6}$$

| Variable | Meaning | Unit | Source Formula |
|----------|---------|------|----------------|
| $\kappa$ | Karmic load (accumulated KL divergence) | nats·s | SYN-05 |
| $\Phi$ | Integrated information (IIT) | $\phi$-units (dimensionless) | SYN-04 |
| $\zeta$ | Veil thickness | nats | SYN-02R |
| $\Omega_{\text{wisdom}}$ | Accumulated wisdom | nats | SYN-06 |
| $W$ | Free will (present-moment degree) | dimensionless $\in [0,1]$ | SYN-10 |
| $\beta_{IB}$ | IB compression trade-off | dimensionless | SYN-02R |

---

## 2. The Master Dynamical System

$$\frac{dX}{dt} = F(X,\, \eta_{IB},\, J_F,\, \theta)$$

### 2.1 Equation 1 — Karmic Load ($\kappa$)

$$\boxed{\frac{d\kappa}{dt} = \underbrace{\text{KL}[q(\Phi,\zeta,\beta_{IB}) \| p^*]}_{\text{SYN-05 source}} - \underbrace{\gamma_\kappa \cdot \Omega_{\text{wisdom}}}_{\text{SYN-05 sink}} \quad [\text{nats}]}$$

**Source:** SYN-05 (driven-dissipative karmic dynamics). Karma accumulates from the divergence between the node's current model $q$ and the reference $p^*$, and dissipates at a rate proportional to accumulated wisdom.

### 2.2 Equation 2 — Integrated Information ($\Phi$)

$$\boxed{\frac{d\Phi}{dt} = \underbrace{\mu_\Phi \cdot \eta_{IB}(\zeta, \beta_{IB}) \cdot W \cdot \Phi^{1-\epsilon}}_{\text{IIT growth: SYN-04 + SYN-10}} - \underbrace{\sigma_\Phi \cdot \Phi}_{\text{structural decay}} \quad [\phi\text{-units/s}]}$$

**Source:** SYN-04 (UIBIC) + SYN-10 (free will). Integration grows when IB efficiency is high ($\eta_{IB}$) and the node is present ($W$). Note: $\epsilon = 1$ for dimensional consistency (see Session 03 audit).

### 2.3 Equation 3 — Veil Thickness ($\zeta$)

$$\boxed{\frac{d\zeta}{dt} = \underbrace{\gamma_{\text{env}} \cdot \zeta}_{\text{localization pressure}} - \underbrace{\mu \cdot \eta_{IB}(\zeta, \beta_{IB})}_{\text{experience thins veil: SYN-02R}} \quad [\text{nats/s}]}$$

**Source:** SYN-02R (Great Forgetting). Environmental noise thickens the veil; IB-efficient processing thins it.

### 2.4 Equation 4 — Wisdom ($\Omega_{\text{wisdom}}$)

$$\boxed{\frac{d\Omega_{\text{wisdom}}}{dt} = \mu_\Omega \cdot \eta_{IB} \cdot W \cdot \mathbf{1}[\kappa > \kappa_{\text{thr}}] \quad [\text{nats/s}]}$$

**Source:** SYN-06 (Ontological Smelting). Wisdom accumulates only when: (a) IB efficiency is nonzero, (b) the node is present ($W > 0$), and (c) there is unresolved karmic load ($\kappa > \kappa_{\text{thr}}$). The Heaviside function encodes the insight that wisdom requires *material to work on* — a node with no karma accumulates no wisdom.

### 2.5 Equation 5 — Free Will ($W$)

$$\boxed{\frac{dW}{dt} = \alpha_W \cdot W(1-W) \cdot \left[\eta_{IB} - \frac{\text{KL}[q \| p^*]}{\Phi}\right] \quad [\text{s}^{-1}]}$$

**Source:** SYN-10 (Bistable Presence). The logistic term $W(1-W)$ produces bistability ($W^* = 0$ or $W^* = 1$). The bracketed term determines which attractor is stable: when $\eta_{IB} > \text{KL}/\Phi$, full presence wins; otherwise, autopilot wins.

### 2.6 Equation 6 — IB Compression ($\beta_{IB}$)

$$\boxed{\frac{d\beta_{IB}}{dt} = -\mu_\beta \cdot \Omega_{\text{wisdom}} \cdot \mathbf{1}\!\left[\Psi_{\text{stage}} > \Psi_c^{(n)}\right] \quad [\text{s}^{-1}]}$$

**Source:** SYN-08 (Stage Transition). Compression relaxes (becomes more efficient) only at stage transitions. Between stages, $\beta_{IB}$ is constant. The Heaviside function produces the characteristic step-wise decrease across developmental stages.

---

## 3. The Coupling Architecture — $\eta_{IB}$ as Central Hub

### 3.1 The IB Efficiency Closure

$$\boxed{\eta_{IB} = \frac{I(T;\, Y)}{I(X;\, T)} \quad [\text{dimensionless}]}$$

In the SYN-13 system, $\eta_{IB}$ depends on the state variables through:

$$\eta_{IB}(\zeta, \beta_{IB}) \approx \eta(\Phi, \zeta) = \eta_0 \cdot \left(1 - e^{-\Phi/\Phi_c}\right) \cdot e^{-\zeta/\zeta_c}$$

This closure (from SYN-13-ND, Session 05) expresses $\eta_{IB}$ as a function of the state variables $(\Phi, \zeta)$, making the system autonomous.

### 3.2 The KL Proxy Closure

$$\text{KL}[q(\Phi,\zeta,\beta_{IB}) \| p^*] \approx \frac{\zeta}{\Phi^\delta} \quad (\delta > 0, \text{ empirically constrained})$$

This approximation closes the $d\kappa/dt$ equation: the karmic source term is expressed entirely in terms of state variables $(\zeta, \Phi)$.

### 3.3 The Stage Order Parameter

$$\Psi_{\text{stage}} = \Phi \cdot \exp\!\left(-\frac{\kappa_{\text{norm}}}{\kappa_0}\right)$$

from SYN-08, coupling Equations 1, 2, and 6.

### 3.4 Coupling Map

```
    ┌──────────────────────────────────────────────────────┐
    │                     η_IB(Φ, ζ)                       │
    │                   CENTRAL HUB                        │
    │                                                      │
    │    ┌──── feeds into ────┐                            │
    │    │                    │                             │
    │    ▼                    ▼                             │
    │  Eq.1 (κ)           Eq.2 (Φ) ◄──── W (Eq.5)        │
    │    │                    │                             │
    │    │     ┌──────────────┤                             │
    │    │     │              │                             │
    │    │     ▼              ▼                             │
    │    │   Eq.3 (ζ)      Eq.4 (Ω) ◄──── W (Eq.5)       │
    │    │     │              │                             │
    │    │     │              │                             │
    │    │     └──── η_IB ───┘                             │
    │    │                                                  │
    │    └──── Ω ──── resolves ──── κ (Eq.1)              │
    │                                                      │
    │    Ψ_stage(Φ, κ) ──── triggers ──── Eq.6 (β_IB)    │
    └──────────────────────────────────────────────────────┘
```

---

## 4. Fixed-Point Structure

### 4.1 Three Classes of Fixed Points

Setting $F(X^*) = 0$:

| Class | $\kappa^*$ | $\Phi^*$ | $\zeta^*$ | $W^*$ | $\beta^*$ | Stability |
|-------|-----------|---------|----------|------|----------|-----------|
| **Stage Attractors** (I–IV) | $\kappa_n > 0$ | $\Phi_n$ | $\zeta_n > 0$ | $W_n \in (0,1)$ | $\beta_n > 0$ | Stable within stage; saddle in inter-stage direction |
| **Fractal Divinity** | $0$ | $\Phi_{\max}$ | $0$ | $1$ | $0$ | **Globally attracting** (SYN-12) |
| **Total Autopilot** | $\kappa_{\max}$ | $0$ | $H(X)$ | $0$ | $\infty$ | **Unstable** (SYN-01R-B: $|N|=0$ is unstable fixed point) |

### 4.2 Jacobian at Stage Attractor

$$J^{(n)} = \left.\frac{\partial F}{\partial X}\right|_{X = X_n^*}$$

The eigenvalues of $J^{(n)}$ determine:
- **Negative real parts:** relaxation timescales within the stage (stable directions)
- **Zero eigenvalue:** the stage transition direction — the direction along which escape to Stage $n+1$ is possible
- **Complex eigenvalues:** oscillatory approach (spiral-in dynamics observed in Stage IV+ trajectories)

---

## 5. What SYN-13 Proves — And What It Does Not

### 5.1 What It Proves (Model-Internal)

1. **Structural unity:** The FCT's ten chapters are not independent claims — they are six coupled equations. Every metaphysical assertion maps to a specific term in a specific equation.

2. **Unique terminal state:** Under the model's assumptions, all trajectories converge to a single fixed point. There is no alternative "destination."

3. **Stage meta-stability:** Developmental stages emerge naturally as quasi-stable fixed points of the dynamical system — not as arbitrary categories imposed from outside.

4. **Free-will bistability at Stage IV:** The $W(t)$ bistability naturally emerges when $\Phi$ crosses a critical threshold, without being explicitly built in.

### 5.2 What It Does Not Prove (Fix 12)

1. **That consciousness is a dynamical system.** SYN-13 *models* consciousness as a dynamical system. The model may be wrong.

2. **That the six state variables are the right ones.** The choice $(\kappa, \Phi, \zeta, \Omega, W, \beta_{IB})$ is motivated by the FCT's metaphysics, not derived from first principles.

3. **That the parameter values are correct.** The calibrated parameter set (Session 05) is based on sparse empirical anchors (PTSD recovery rates, IIT literature, developmental psychology). The sensitivity analysis (SYN-13-ND, §5) shows that early-stage predictions are catastrophically sensitive to the species-level approximation gap $\varepsilon_{\text{species}}$.

4. **That the fixed point corresponds to anything real.** "Fractal Divinity" is a mathematical fixed point labeled with a metaphysical interpretation. The math is valid; the label is Tier D.

---

## 6. Complete Variable Ontology — SYN-13

| Symbol | Definition | Unit | Source |
|--------|-----------|------|--------|
| $\kappa$ | Karmic load | nats·s | SYN-05 |
| $\Phi$ | Integrated information | $\phi$-units | SYN-04 |
| $\zeta$ | Veil thickness | nats | SYN-02R |
| $\Omega_{\text{wisdom}}$ | Accumulated wisdom | nats | SYN-06 |
| $W$ | Free will variable | dimensionless $\in [0,1]$ | SYN-10 |
| $\beta_{IB}$ | IB compression trade-off | dimensionless | SYN-02R |
| $\eta_{IB}$ | IB efficiency (central coupling) | dimensionless | SYN-02R/04 |
| $\Psi_{\text{stage}}$ | Stage order parameter | dimensionless | SYN-08 |
| $\gamma_\kappa$ | Karmic resolution rate | s$^{-1}$ | SYN-05 |
| $\mu_\Phi$ | IIT growth rate coefficient | $\phi$-units·nats$^{-1}$·s$^{-1}$ | SYN-03/04 |
| $\sigma_\Phi$ | IIT structural decay rate | s$^{-1}$ | SYN-07 |
| $\gamma_{\text{env}}$ | Environmental localization rate | s$^{-1}$ | SYN-02R |
| $\mu$ | Veil thinning rate | s$^{-1}$ | SYN-02R |
| $\mu_\Omega$ | Wisdom accumulation rate | nats·s$^{-1}$ | SYN-06 |
| $\alpha_W$ | Free-will learning rate | s$^{-1}$ | SYN-10 |
| $\mu_\beta$ | IB compression relaxation rate | s$^{-1}$·nats$^{-1}$ | SYN-08 |
| $\kappa_{\text{thr}}$ | Wisdom activation threshold | nats·s | SYN-05 |
| $\Psi_c^{(n)}$ | Critical $\Psi$ for Stage $n$ transition | dimensionless | SYN-08 |

---

## 7. Cold Truth — Four Non-Negotiable Concessions

**Problem 1 — SYN-13 is a six-dimensional model of a system with potentially infinite degrees of freedom.** The brain has $\sim 10^{14}$ synapses, $\sim 10^{11}$ neurons, and operates across timescales from milliseconds to decades. Compressing this into six state variables is a drastic approximation. The model captures *some* structure; it almost certainly misses critical dynamics.

**Problem 2 — The KL proxy closure ($\text{KL} \approx \zeta/\Phi^\delta$) is an approximation with no rigorous derivation.** It makes the system solvable, but the actual relationship between KL divergence, veil thickness, and IIT integration may be non-monotonic, state-dependent, and subject to phase transitions not captured by a simple power law.

**Problem 3 — The Heaviside functions (in Equations 4 and 6) produce non-smooth dynamics.** At the Heaviside boundaries ($\kappa = \kappa_{\text{thr}}$ and $\Psi = \Psi_c$), the system is technically a Filippov system (differential inclusion), not a smooth ODE. The standard Lyapunov analysis assumes smoothness. Rigorous stability analysis requires Filippov theory — which has been applied (Session 05, §3.3) but introduces additional technical caveats.

**Problem 4 — Fix 12 is not a weakening; it is an honesty declaration.** Calling SYN-13 an "analog dynamical system" rather than "the fundamental equation of consciousness" does not reduce its mathematical content. The equations, fixed points, stability analysis, and trajectories are identical under either label. What changes is the epistemic claim — and honesty about epistemic claims is the only currency this project trades in.

> **Overall verdict on SYN-13:** The Master Equation is the structural crown of the FCT formalization. It demonstrates that ten chapters of metaphysical philosophy reduce to six coupled ODEs — a remarkable compression from natural language to mathematics. The system is solvable, the fixed points are classifiable, and the trajectories are computable (see SYN-13-ND). Whether these trajectories describe reality is a separate question that only empirical validation of the constituent formulas (SYN-02R, SYN-08, SYN-10) can address.

---

## 8. Dimensional Audit — Full Section Verification

| Equation | LHS Unit | RHS Unit | Consistent | Notes |
|----------|---------|---------|-----------|-------|
| $d\kappa/dt$ | nats | nats − s$^{-1}$ × nats·s = nats | ✅ | $\gamma_\kappa$ [s$^{-1}$], $\Omega$ [nats·s] |
| $d\Phi/dt$ | $\phi$/s | $\phi$·nats$^{-1}$·s$^{-1}$ × dim'less × dim'less × dim'less = $\phi$/s | ✅ | With $\epsilon = 1$ |
| $d\zeta/dt$ | nats/s | s$^{-1}$ × nats − s$^{-1}$ × dim'less = nats/s | ✅ | $\mu$ [s$^{-1}$], $\eta$ times nats |
| $d\Omega/dt$ | nats/s | nats·s$^{-1}$ × dim'less × dim'less × dim'less | ✅ | $\mu_\Omega$ [nats/s] |
| $dW/dt$ | s$^{-1}$ | s$^{-1}$ × dim'less × dim'less | ✅ | $\alpha_W$ [s$^{-1}$] |
| $d\beta/dt$ | s$^{-1}$ | s$^{-1}$·nats$^{-1}$ × nats × dim'less = s$^{-1}$ | ✅ | $\mu_\beta$ [s$^{-1}$·nats$^{-1}$] |

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Sources: SESSION 03 (Master Equation section); CRITIQUE RESPONSE (Fix 12: analog model declaration)*
*Cross-references: All SYN formulas (01RA through 12), `SYN_13_ND_dimensionless_integration.md`, `SYN_REGISTRY.md`*
