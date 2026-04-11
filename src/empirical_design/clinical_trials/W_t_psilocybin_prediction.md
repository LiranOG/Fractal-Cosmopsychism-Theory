# Clinical Trial: $W(t)$ Psilocybin Prediction — Biomarker Validation Sub-Protocol
> **Path:** `src/empirical_protocols/clinical_trials/W_t_psilocybin_prediction.md`
> **Parent Protocol:** Paper Protocol 04 (Psilocybin Phase IIb)
> **Formula:** SYN-10 (Free Will Operator)
> **Tier:** B — requires Paper I and Paper III completion first
> **Source:** Session 06, Paper IV + W(t) psilocybin analysis (RR-13)

---

## 1. Purpose

This document specifies the **biomarker validation sub-protocol** within Paper Protocol 04. Before $W(t)$ can serve as a stratification biomarker in the Phase IIb trial, it must pass a 3-stage qualification pipeline following FDA biomarker qualification guidance (BEST, 2016).

---

## 2. Biomarker Qualification Pipeline

### Stage 1: Analytical Validity (Pre-Trial, 6 months)

**Objective:** Demonstrate that TRF-based $W(t)$ is reliable and reproducible.

| Test | Method | Criterion |
|------|--------|----------|
| Test-retest reliability | ICC(3,1) across 2 sessions, 1 week apart, $n = 20$ | ICC $> 0.70$ |
| Internal consistency | Split-half correlation (odd vs. even windows) | $r > 0.80$ |
| Sensitivity to state change | $W$ during focused attention vs. mind-wandering (within-subject) | Cohen's $d > 0.50$ |
| Pipeline robustness | $W$ computed with 3 different preprocessing pipelines | Concordance $r > 0.90$ |

### Stage 2: Clinical Validity (During Paper III, 12 months)

**Objective:** Demonstrate that baseline $W_0$ predicts clinically relevant outcomes.

| Test | Sample | Criterion |
|------|--------|----------|
| $W_0$ correlates with HAMD-17 severity | $n = 120$ (Paper III MDD cohort) | $r > 0.25$, $p < 0.01$ |
| $W_0$ predicts naturalistic CBT response | $n = 40$ (Paper III CBT sub-cohort) | AUC $> 0.65$ |
| $W_0$ differentiates MDD from controls | $n = 80$ (40 MDD + 40 HC) | Cohen's $d > 0.60$ |

### Stage 3: Clinical Utility (Phase IIb Trial)

**Objective:** Demonstrate that stratification by $W_0$ improves treatment allocation.

$$\boxed{\hat{\beta}_3 > 0 \quad (p < 0.01)}$$

The treatment-by-$W_0$ interaction must be significant at $\alpha = 0.01$, meaning $W_0$-based stratification **changes the optimal treatment decision** for at least one patient stratum.

---

## 3. The Precision Medicine Decision Rule

If $\beta_3$ is validated, the following clinical decision rule emerges:

```
IF W_0 < w_s - δ_safety:
    → RECOMMEND psilocybin (expected NNT < 3)
ELIF W_0 ∈ [w_s - δ_safety, w_s]:
    → RECOMMEND psilocybin with close monitoring (expected NNT ≈ 5)
ELIF W_0 ≥ w_s:
    → NO additional benefit from psilocybin (consider alternative)
```

where $\delta_{\text{safety}} = 0.05$ is a conservative buffer zone.

---

## 4. Safety Monitoring

### 4.1 Adverse Event Tracking

| Category | Monitored Variables | Stopping Rule |
|----------|-------------------|--------------|
| Psychiatric | Suicidality (C-SSRS), psychotic symptoms (BPRS) | Any BPRS $> 36$ or C-SSRS $\geq 4$ |
| Cardiac | HR, BP, QTc interval | QTc $> 500$ ms |
| Neurological | Seizure, severe headache | Any seizure event |
| Psychological | Challenging experience questionnaire (CEQ) | Mean CEQ $> 3.5$ across $> 5$ participants |

### 4.2 Data Safety Monitoring Board (DSMB)

Independent DSMB reviews after $n = 30$, $n = 60$, $n = 90$. Pre-specified futility stopping: if $\hat{\beta}_3 < 0.05$ and 90% CI upper bound $< 0.15$ at interim, stop for futility.

---

## 5. Cold Truth / Implementation Limits

**Problem 1 — The $\delta W_{\text{psilocybin}} \approx 0.20$ has never been measured.** This is the most critical unvalidated assumption in the entire protocol.

**Problem 2 — EEG during acute psilocybin is heavily contaminated** by eye movements, muscle artifacts, and head motion. Artifact rejection rates may exceed 50%.

**Problem 3 — The decision rule assumes $w_s$ is constant across patients.** Individual variation in the saddle point (due to $\kappa$, $\Phi$, or physiological differences) would degrade predictive accuracy.

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Cross-references: `paper_protocol_04_psilocybin_W_transition.md`, `UP_02_W_t_trf_bistability.md`*
