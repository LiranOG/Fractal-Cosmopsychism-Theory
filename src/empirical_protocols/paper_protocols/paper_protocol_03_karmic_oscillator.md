# Paper Protocol 03: The Karmic Oscillator — Rumination Cycle Period as Unresolved Tension
> **Path:** `src/empirical_protocols/paper_protocols/paper_protocol_03_karmic_oscillator.md`
> **Formula:** SYN-05 / SYN-NEW-03 (Karmic Load Dynamics)
> **Target Journal:** Translational Psychiatry (IF ~7.5)
> **Tier:** B — Formal Analog, Directly Testable
> **Budget:** £180K | **Timeline:** 18 months | **$n$:** 120
> **Source:** Session 06, Paper III
> **Status:** ✅ Pre-registration ready

---

## 1. Abstract

Rumination — repetitive, self-referential negative thought — is the single strongest cognitive predictor of depression onset and maintenance. Current models (Response Styles Theory; Nolen-Hoeksema, 1991) describe rumination as a stable trait but do not predict its temporal dynamics. We derive a quantitative prediction from the SYN-05 karmic load dynamics: rumination is an oscillatory process with a characteristic period $T_{\text{rum}}$ that depends on the individual's karmic load $\kappa$ and resolution rate $\gamma_\kappa$:

$$T_{\text{rum}} = \frac{2\pi}{\sqrt{\gamma_\kappa \cdot \beta_{\text{ont}} - \left(\frac{\gamma_\kappa}{2}\right)^2}}$$

This predicts that rumination has a measurable, person-specific periodicity detectable via ecological momentary assessment (EMA), and that therapeutic intervention should lengthen this period (reduce oscillation frequency) before reducing amplitude.

---

## 2. Theoretical Framework

### 2.1 The $\kappa$ Oscillator

From the SYN-05 Karmic Load ODE linearized near equilibrium:

$$\frac{d^2\kappa}{dt^2} + \gamma_\kappa \frac{d\kappa}{dt} + \beta_{\text{ont}} \cdot \kappa = S_{\text{ext}}(t)$$

This is a **damped harmonic oscillator** with natural frequency $\omega_0 = \sqrt{\beta_{\text{ont}}}$ and damping ratio $\zeta_d = \gamma_\kappa / (2\omega_0)$.

**Underdamped regime** ($\zeta_d < 1$): oscillatory rumination with period:

$$\boxed{T_{\text{rum}} = \frac{2\pi}{\omega_0\sqrt{1 - \zeta_d^2}} \quad [\text{days}]}$$

**Overdamped regime** ($\zeta_d > 1$): monotonic decay — rumination resolves without oscillation.

### 2.2 Clinical Translation

| FCT Variable | Clinical Proxy | Measurement |
|-------------|---------------|-------------|
| $\kappa(t)$ | Rumination intensity | RRS-10 momentary score (EMA, 6×/day) |
| $\gamma_\kappa$ | Natural recovery rate | Exponential decay fit to $\kappa(t)$ post-trigger |
| $\beta_{\text{ont}}$ | Smelting rate (therapeutic processing) | Slope of $d\kappa/dt$ during cognitive reappraisal |
| $T_{\text{rum}}$ | Rumination cycle period | FFT/wavelet of $\kappa(t)$ time series |

---

## 3. Methods

### 3.1 Study Design

$n = 120$: 40 MDD (current episode, HAMD-17 $\geq 18$), 40 remitted MDD (no current episode, history of $\geq 2$ episodes), 40 healthy controls.

**EMA Protocol:** Smartphone-based 6× daily prompts for 8 weeks (336 samples/participant). Momentary rumination assessed via 3-item RRS-10 brief scale + 2 custom FCT items ("How much are you replaying past events right now?" + "How much are you responding to what's happening right now?").

### 3.2 EEG Subsample

$n = 60$ (20 per group) undergo weekly 64-channel EEG (30-min resting state) to compute $\hat{\kappa}_{\text{proxy}}$ (KL divergence from UP-01) and $W(t)$ (TRF from UP-02).

### 3.3 Pre-Registered Analysis Plan

**Primary Analysis — Oscillation Detection:**

1. Compute power spectral density of individual $\kappa(t)$ time series (Lomb-Scargle periodogram for irregularly sampled EMA)
2. Identify dominant period $T_{\text{rum}}$ if spectral peak exceeds 95th percentile of red-noise null
3. Test: proportion with detectable oscillation $> 50\%$ in MDD group (vs. $< 20\%$ in controls)

**Pre-registered prediction:** MDD patients show oscillatory rumination ($T_{\text{rum}} \in [3, 14]$ days) significantly more than controls ($\chi^2$, $p < 0.01$).

**Secondary — $T_{\text{rum}}$ Correlates:**
- $T_{\text{rum}}$ correlates with HAMD-17 severity ($r > 0.30$, shorter period = more severe)
- $T_{\text{rum}}$ correlates inversely with $\hat{\kappa}_{\text{proxy}}$ ($r < -0.25$)

**Tertiary — Treatment Response Prediction (Naturalistic CBT Sub-Cohort):**
For $n = 20$ MDD patients entering CBT: $T_{\text{rum}}$ should **increase** (lengthen) before HAMD-17 improves — the oscillation slows before rumination extinguishes.

---

## 4. Differential Predictions

| Model | Predicts oscillatory rumination? | Predicts period-first improvement? |
|-------|--------------------------------|-----------------------------------|
| Response Styles Theory | No (trait, not dynamic) | No |
| Cognitive Control Theory | No oscillation prediction | No |
| **FCT/SYN-05** | **Yes, with person-specific $T_{\text{rum}}$** | **Yes** |

---

## 5. Cold Truth / Implementation Limits

**Problem 1 — EMA compliance degrades over 8 weeks.** Expected completion rate: ~65% of prompts. Missing data modeled via multiple imputation, but power drops with non-response.

**Problem 2 — 6×/day sampling may not capture true rumination periodicity.** Nyquist theorem requires sampling at $> 2/T_{\text{rum}}$; for $T_{\text{rum}} = 3$ days, 6×/day is adequate. For shorter periods ($< 1$ day), the protocol undersamples.

**Problem 3 — The "karmic oscillator" framing is inflammatory in clinical psychology.** All publications must use "rumination cycle dynamics" language; "karma" appears only in the Supplementary Theory section with explicit Tier D labeling.

**Problem 4 — Periodicity could reflect circadian or weekly rhythms.** Pre-registered detrending for diurnal and weekly patterns is mandatory before oscillation claims.

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source: Session 06, Paper III*
*Cross-references: `SYN_05_karmic_load_dynamics.md`, `UP_04_parameter_calibration_bounds.md`*
