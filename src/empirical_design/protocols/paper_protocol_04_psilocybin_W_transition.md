# Paper Protocol 04: Psilocybin as a $W(t)$ Phase Transition Probe — Precision Psychedelic Medicine
> **Path:** `src/empirical_protocols/paper_protocols/paper_protocol_04_psilocybin_W_transition.md`
> **Formula:** SYN-10 (Free Will / Eternal Now Operator)
> **Target Journal:** Nature Medicine (IF ~82.9)
> **Tier:** B — Formal Analog, Directly Testable
> **Budget:** £1.8M | **Timeline:** 36 months | **$n$:** 120 (TRD patients)
> **Source:** Session 06, Paper IV
> **Status:** ✅ Pre-registration ready (ClinicalTrials.gov + OSF)

---

## 1. Abstract

Psilocybin has emerged as a promising treatment for treatment-resistant depression (TRD), yet why some patients achieve full remission while others show minimal benefit remains unexplained. We introduce the **free-will bistability hypothesis**: patients trapped in the "Autopilot" attractor basin ($W < w_s \approx 0.44$) have neural responses dominated by history rather than present-moment information. Psilocybin, by transiently suppressing DMN autoregressive activity, pharmacologically shifts $W(t)$ above the saddle point $w_s$, enabling a controlled transition to the "Full Presence" basin.

**The precision medicine prediction:** Treatment response is proportional to $\max(0,\, w_s - W_0) \cdot \delta W_{\text{psilocybin}}$ — the further below the saddle the patient starts, the greater the therapeutic benefit. This is a **counterintuitive prediction** absent from all existing models, which generally predict better outcomes for less severe patients.

---

## 2. Theoretical Framework

### 2.1 Psilocybin as a $W(t)$ Modulator

From the SYN-10 dynamics:

$$\frac{dW}{dt} = \alpha_W W(1-W)\left[I(T;Y)(t) - \text{KL}[q_{\text{node}} \| p^*]\right]$$

Psilocybin via 5-HT$_{2A}$ agonism affects both terms:

| Mechanism | Pharmacological Effect | $W(t)$ Impact |
|-----------|----------------------|---------------|
| Layer V pyramidal 5-HT$_{2A}$ activation | ↑ thalamocortical transmission | $I(T;Y)_{\text{psil}} > I(T;Y)_{\text{base}}$ |
| DMN midline hub suppression | ↓ self-referential default processing | $\text{KL}_{\text{psil}} < \text{KL}_{\text{base}}$ |
| **Net effect** | | $W$ shifts toward Full Presence attractor |

### 2.2 The Bistability-Crossing Condition

$$\boxed{W_0 + \delta W_{\text{psilocybin}} > w_s}$$

where $\delta W_{\text{psilocybin}} \approx 0.20 \pm 0.08$ (estimated from ~40% DMN connectivity reduction mapped via TRF decomposition).

### 2.3 The Bistability Window Prediction (Novel)

Response follows a **sigmoid** function with inflection at $w_s$:

$$P(\text{Response} | W_0) = \frac{1}{1 + e^{-\gamma(W_0 + \delta W_{\text{arm}} - w_s)}}$$

- **Placebo arm:** $\delta W_{\text{arm}} = 0$ → response near-zero for $W_0 < w_s$
- **Psilocybin arm:** $\delta W_{\text{arm}} \approx 0.20$ → sigmoid shifts left, enabling response for $W_0 \in [w_s - 0.20,\, w_s]$

---

## 3. Methods

### 3.1 Trial Design

**Phase IIb double-blind RCT.** 2-arm parallel: psilocybin 25 mg vs. active placebo (niacin 250 mg, physiological flushing for blinding). Specialist clinic with 2 trained facilitators/session.

**Registration:** ClinicalTrials.gov + OSF pre-registration.

### 3.2 Participants ($N = 120$)

| Criterion | Requirement |
|-----------|------------|
| TRD definition | $\geq 2$ failed adequate antidepressant trials (ATHF) |
| Severity | HAMD-17 $\geq 18$ at screening + baseline |
| Exclusion | Current psychosis, Bipolar I, active suicidality |
| Washout | $\geq 2$ weeks antidepressant pause (supervised) |
| **Stratification** | By baseline $W_0$: Stratum 1 ($W_0 < 0.35$), Stratum 2 ($0.35 \leq W_0 < w_s$), Stratum 3 ($W_0 \geq w_s$) |

### 3.3 EEG Protocol and $W(t)$ Computation

| Timepoint | Protocol | Duration |
|-----------|----------|----------|
| $t = -1$ week | Resting-state EEG + audiobook TRF | 60 min |
| $t = 0$ (dosing) | Continuous EEG monitoring | 6 hours |
| $t = +24$ hr, $+1$w, $+4$w, $+12$w | EEG + HAMD-17 + QIDS-SR-16 + MADRS | 60 min each |

**$W_0$ computation:**

$$W_0 = \frac{R^2_{\text{TRF, eyes-open rest}}}{R^2_{\text{TRF, eyes-open rest}} + R^2_{\text{AR, eyes-open rest}}}$$

**Acute session $W(t)$:** 15-min rolling windows. Primary EEG outcome: $W_{\text{peak}}$ and $t_{W > w_s}$ (total time above saddle).

### 3.4 Primary Outcomes

**Clinical primary:** HAMD-17 response ($\geq 50\%$ reduction) at 4 weeks.

**Mechanistic primary — Pre-registered interaction:**

$$\Delta\text{HAMD}_{i,t} = \beta_0 + \beta_1 \text{Trt}_i + \beta_2 W_{0,i} + \underbrace{\beta_3 (W_{0,i} \times \text{Trt}_i)}_{\text{PRE-REGISTERED}} + u_i + \varepsilon_{it}$$

$$\boxed{\hat{\beta}_3 > 0 \quad (p < 0.01)}$$

**Meaning:** Psilocybin's advantage over placebo is **largest for low-$W_0$ patients**.

**Mechanistic secondary — Mediation:**

$$\hat{\beta}_3^{\text{mediated}} / \hat{\beta}_3^{\text{total}} > 0.30$$

$t_{W > w_s}$ mediates the treatment-by-$W_0$ interaction (bootstrapped, 5,000 iterations, Preacher & Hayes, 2008).

### 3.5 Power Analysis

Interaction effect: $f^2_{\text{interaction}} = 0.07$ (estimated from Carhart-Harris et al., 2021 subgroup analysis). For $n = 60$ per arm: power $= 0.82$ at $\alpha = 0.01$ (G*Power mixed model).

---

## 4. Predicted Results

| Stratum | $W_0$ Range | Placebo Response | Psilocybin Response | Difference |
|---------|------------|-----------------|--------------------|-----------| 
| 1 (locked) | $< 0.35$ | ~5% | ~45% | +40 pp |
| 2 (near-saddle) | $0.35$–$0.44$ | ~10% | ~65% | +55 pp |
| 3 (above saddle) | $\geq 0.44$ | ~25% | ~30% | +5 pp (NS) |

**The signature:** Maximal psilocybin benefit in Stratum 2, minimal in Stratum 3.

---

## 5. Cold Truth / Implementation Limits

**Problem 1 — £1.8M budget.** This is a Phase IIb clinical trial requiring: regulatory approval (MHRA/FDA), GMP-grade psilocybin synthesis, dedicated clinical facility, anesthesiology standby, and 36-month timeline. Funding requires preliminary data from Papers I–III.

**Problem 2 — The $\delta W_{\text{psilocybin}} \approx 0.20$ estimate is extrapolated.** No study has measured TRF-based $W(t)$ during psilocybin administration. The estimate derives from DMN connectivity reductions mapped via an untested proxy chain.

**Problem 3 — Active placebo imperfect.** Niacin flushing does not replicate the full phenomenology of psilocybin (visual disturbances, emotional intensification). Functional unblinding likely for experienced participants.

**Problem 4 — Antidepressant washout is ethically fraught.** 2-week medication pause in severe TRD carries risk. Safety monitoring board with predefined stopping rules is mandatory.

**Problem 5 — If $\beta_3 = 0$ (no interaction), two interpretations exist:** (a) the bistability model is wrong, or (b) $W(t)$ as measured by TRF does not capture the relevant bistability. These are not distinguishable from this study alone.

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source: Session 06, Paper IV*
*Cross-references: `SYN_10_free_will_operator.md`, `UP_02_W_t_trf_bistability.md`*
