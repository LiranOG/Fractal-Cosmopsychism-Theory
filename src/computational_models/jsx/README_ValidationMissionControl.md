# README: `ValidationMissionControl.jsx` — Cross-Scale Validation Tracker
> **Path:** `src/computational_models/jsx/README_ValidationMissionControl.md`
> **Language:** React 18+ / JavaScript | **Dependencies:** `recharts`, `react`
> **SYN Links:** SYN-04 (UIBIC), SYN-02R, SYN-08, SYN-10
> **Size:** 31.3 KB, originally `.jsx.txt`

---

## 1. Purpose

Mission-control-style dashboard tracking the **real-time validation status** of all FCT empirical predictions across multiple scales and datasets. Provides:

- **Prediction registry** — every pre-registered prediction with its current status (pending/confirmed/falsified)
- **Cross-scale validation matrix** — $\eta_{\text{IB}}$ measurements across neural, social, ecological, and cosmic scales
- **Convergent validity dashboard** — UP-01 construct validity correlations
- **Live status indicators** — green/yellow/red for each prediction based on available evidence
- **Gap tracker** — which measurements are missing and what they would cost

---

## 2. Tracked Predictions

| ID | Prediction | Formula | Status Indicator |
|----|-----------|---------|-----------------|
| P1 | $\eta_{\text{IB}}$ monotonic ranking across consciousness states | SYN-02R | Pending (Paper I required) |
| P2 | $\eta_{\text{IB}}$ scale invariance within states | SYN-02R | Pending (Paper I required) |
| P3 | CSD precedes stage transitions by 4–6 weeks | SYN-08 | Pending (Paper II required) |
| P4 | $W(t)$ bistability with saddle at $w_s \approx 0.44$ | SYN-10 | Pending (UP-02 PoC required) |
| P5 | $T_{\text{rum}}$ oscillation detectable in MDD | SYN-05 | Pending (Paper III required) |
| P6 | Psilocybin $\times W_0$ interaction ($\beta_3 > 0$) | SYN-10 | Pending (Paper IV required) |
| P7 | $\sigma_{\hat{\phi}\text{-band}}(\eta_{\text{IB}}) < 0.08$ across scales | SYN-04 | Partial (cosmic-ib-dashboard) |
| P8 | $\kappa_{\text{proxy}}$ convergent validity ($r > 0.35$ with ACE) | UP-01 | Pending (LEMON analysis) |

---

## 3. Design Philosophy

The dashboard is designed as an **honest progress tracker** — it does not hide falsifications or ambiguous results. If a prediction fails, it turns red with an explanation of what went wrong and what needs revision.

This aligns with UP-05 (Epistemic Taxonomy Mandate): the validation infrastructure must be as rigorous as the theoretical infrastructure.

---

## 4. Deployment

```bash
npm install recharts
# Copy ValidationMissionControl.jsx → src/ValidationDashboard.jsx
# Import and render: <ValidationDashboard />
```

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source file: `ValidationMissionControl.jsx` (31.3 KB, originally `.jsx.txt`)*
