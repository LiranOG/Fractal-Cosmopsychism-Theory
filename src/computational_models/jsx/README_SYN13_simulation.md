# README: `SYN13_simulation.jsx` — Master Equation Interactive Simulator
> **Path:** `src/computational_models/jsx/README_SYN13_simulation.md`
> **Language:** React 18+ / JavaScript | **Dependencies:** `recharts`, `react`
> **SYN Links:** SYN-13 (Master Equation), SYN-13-ND (Dimensionless System), SYN-10 (Bifurcation)
> **Tier:** B — Formal Analog Simulator
> **Size:** 26.3 KB, 415 lines

---

## 1. Purpose

A fully interactive browser-based simulator for the SYN-13 Master Equation — the 6D coupled ODE system governing the complete FCT dynamical model. Provides:

1. **Phase portraits** in $(k, \phi)$ space across all 6 developmental stages
2. **Time series** for all 6 state variables ($k$, $\phi$, $z$, $\omega$, $w$, $\beta$)
3. **Bifurcation diagrams** showing the saddle-node bifurcation in $W$ as a function of $\alpha$
4. **$\varepsilon$-Sensitivity analysis** showing equilibrium karmic load divergence at low wisdom

---

## 2. The 6D Dynamical System

The simulator integrates the dimensionless system from SYN-13-ND:

$$\frac{dk}{d\tau} = a\frac{z}{\phi} + \varepsilon_{\text{species}} - \frac{\omega \cdot k}{k_{\text{res}}}$$

$$\frac{d\phi}{d\tau} = m_\phi \cdot \eta(\phi, z) \cdot W - s_\phi \cdot \phi$$

$$\frac{dz}{d\tau} = g \cdot z - m_z \cdot \eta(\phi, z)$$

$$\frac{d\omega}{d\tau} = m_\omega \cdot \eta(\phi, z) \cdot W \cdot \Theta(k - k^*)$$

$$\frac{dW}{d\tau} = \alpha \cdot W(1-W)\left[\eta(\phi, z) - \frac{c \cdot z}{\phi}\right]$$

$$\frac{d\beta}{d\tau} = -m_\beta \cdot \omega \cdot \Theta\left(\Psi - \Psi_c^{(n)}\right)$$

where $\eta(\phi, z) = \eta_0(1 - e^{-\phi/\phi_c})e^{-z/z_c}$ and $\Psi = \phi \cdot e^{-k/k_s}$.

---

## 3. Integration Method

**4th-order Runge-Kutta (RK4)** with fixed step size:

| Parameter | Value |
|-----------|-------|
| Time step $dt$ | 0.002 (dimensionless lifetimes) |
| Total steps | 5,000 |
| Trajectory duration | $\tau = 10$ lifetimes |
| Data output | Every 5th step (1,000 display points) |
| Clamping | $\phi, z, \omega \geq 0$; $W \in [0,1]$; $\beta \geq 0$ |

---

## 4. Stage Initial Conditions

| Stage | $k_0$ | $\phi_0$ | $z_0$ | $\omega_0$ | $W_0$ | $\beta_0$ | Color |
|-------|-------|---------|-------|-----------|-------|---------|-------|
| I — Static | 0.020 | 0.001 | 0.950 | 0.010 | 0.010 | 2.00 | Grey |
| II — Reactive | 0.080 | 0.020 | 0.870 | 0.050 | 0.040 | 1.80 | Green |
| III — Instinctual | 0.420 | 0.148 | 0.630 | 0.150 | 0.120 | 1.50 | Blue |
| IV — Average | 1.520 | 0.611 | 0.340 | 0.400 | 0.250 | 1.00 | Amber |
| IV+ — Awakened | 0.810 | 0.803 | 0.210 | 1.200 | 0.650 | 0.50 | Red |
| V — Approach | 0.050 | 0.950 | 0.060 | 4.000 | 0.920 | 0.10 | Purple |

---

## 5. Default Parameters (from UP-04 Calibrated Values)

```javascript
const PARAMS_DEFAULT = {
  a: 0.15,       // Karmic source rate
  m_phi: 2.5,    // IIT growth coefficient
  s_phi: 0.8,    // IIT structural decay
  g: 1.5,        // Localization (veil regrowth) rate
  m_z: 1.2,      // Veil thinning rate
  m_omega: 1.8,  // Wisdom accumulation coefficient
  alpha: 3.0,    // Free-will learning rate
  c: 0.8,        // KL/IIT coupling coefficient
  eta0: 0.9,     // Maximum IB efficiency
  phi_c: 0.015,  // IIT half-saturation constant
  z_c: 1.0,      // Veil attenuation scale
  k_star: 0.1,   // Wisdom activation threshold
  k_s: 3.0,      // Karmic scale for Ψ
  k_res: 2.0,    // Resolution scale
  m_b: 0.3,      // IB compression relaxation rate
  eps_species: 0.0 // Species approximation gap
};
```

---

## 6. Interactive Features

### 6.1 Parameter Sliders (Left Panel)

15 adjustable parameters organized into 4 groups:
- **Karmic Dynamics:** $a$, $k_{\text{res}}$, $\varepsilon_{\text{species}}$
- **IIT / Veil:** $m_\phi$, $s_\phi$, $g$, $m_z$
- **Free Will:** $\alpha$, $c$
- **$\eta$ Function:** $\eta_0$, $\phi_c$, $z_c$

All trajectory recomputation is **reactive** — changes take effect immediately.

### 6.2 Four Analysis Tabs

| Tab | Content | Key Insight |
|-----|---------|-------------|
| Phase Portrait $(k, \phi)$ | All 6 stages as scatter/line trajectories | Stages converge toward Fractal Divinity attractor $(k \to 0, \phi \to 1)$ |
| Time Series | Primary ($k, \phi, W$) and secondary ($z, \omega$) plots | Stage-specific dynamics: Stages I–III show $W \to 0$ (autopilot); Stage IV+ shows $W$ bistability |
| Bifurcation | $\eta$ vs. $c \cdot z / \phi$ threshold as function of $\alpha$ | Identifies the critical $\alpha$ where bistability first emerges |
| $\varepsilon$-Sensitivity | Equilibrium $k^*$ vs. $\varepsilon_{\text{species}}$ per stage | Stage I sensitivity $\partial k^*/\partial\varepsilon \approx 200$; Stage V $\approx 0.5$ |

### 6.3 Stage Toggle

Click any stage in the sidebar to toggle its trajectory on/off. Enables focused comparison of specific stage pairs.

---

## 7. Key Emergent Behaviors Visible in Simulation

| Behavior | How to See It | Parameter Controls |
|----------|----------------|-------------------|
| $W$ bistability at Stage IV | Time series tab: select "IV — Average" → observe $W$ hovering near 0.25 | Increase $\alpha > 5$ to see bifurcation |
| Karmic resolution | Time series: $k$ decays exponentially for Stage IV+ | Increase $m_\omega$ to speed up |
| Veil thinning | Time series: $z$ drops for high-$\phi$ stages | Increase $m_z$ |
| Catastrophic $\varepsilon$ sensitivity | $\varepsilon$-Sensitivity tab: Stage I line diverges | Increase $\varepsilon_{\text{species}}$ slider |
| Fractal Divinity attractor | Phase portrait: all trajectories curve toward $(0, 1)$ | Reduce $s_\phi$ to strengthen attractor |

---

## 8. Deployment

**Standalone (via Sandpack/CodeSandbox):**
```bash
npx create-react-app fct-sim && cd fct-sim
npm install recharts
# Copy SYN13_simulation.jsx → src/App.jsx
npm start
```

**Embedded in Vite project:**
```bash
npm create vite@latest fct-sim -- --template react
cd fct-sim && npm install recharts
# Copy SYN13_simulation.jsx → src/App.jsx
npm run dev
```

---

## 9. Cold Truth

This simulator shows the **mathematical behavior** of the SYN-13 system, not empirically validated dynamics. All trajectories are conditional on the parameter calibrations from UP-04, which have 1–2 orders of magnitude uncertainty. The simulator is a theoretical exploration tool, not a predictive instrument.

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source file: `SYN13_simulation.jsx` (26.3 KB, 415 lines, originally `.jsx.txt`)*
