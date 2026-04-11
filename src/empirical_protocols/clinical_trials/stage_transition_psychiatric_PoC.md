# Clinical Trial: Stage Transition Psychiatric PoC — CSD-Guided Intervention Timing
> **Path:** `src/empirical_protocols/clinical_trials/stage_transition_psychiatric_PoC.md`
> **Parent Protocol:** Paper Protocol 02 (CSD Stage Transition)
> **Formula:** SYN-08 (Critical Slowing Down)
> **Tier:** B — requires Paper II completion first
> **Source:** Session 06, Paper II clinical extension

---

## 1. Purpose

This sub-protocol extends Paper Protocol 02's observational CSD detection into a **clinical proof-of-concept** for CSD-guided therapeutic intervention timing. The hypothesis: if critical slowing down (CSD) precedes psychological stage transitions, then intensifying psychotherapeutic intervention during the CSD window should increase transition probability and improve clinical outcomes.

---

## 2. Rationale

### 2.1 The CSD Window Hypothesis

From SYN-08, the autocorrelation time $\tau_{\text{AC}}$ diverges as the system approaches the stage transition bifurcation. During this CSD window:

1. The psychological system is maximally **susceptible** to perturbation
2. Small therapeutic inputs have disproportionately large effects (critical amplification)
3. Premature or late intervention misses the window, wasting therapeutic resources

### 2.2 Clinical Translation

$$\boxed{\text{CSD detected} \Rightarrow \text{Intensify therapy within 2 weeks}}$$

---

## 3. Study Design

### 3.1 Two-Arm Adaptive RCT

| Arm | Allocation | Intervention |
|-----|-----------|-------------|
| **CSD-Guided** | $n = 40$ | Standard therapy + **intensive module** triggered by CSD detection ($\tau_{\text{AC}} > 2\sigma$ above individual baseline for 2 consecutive weeks) |
| **Fixed-Schedule** | $n = 40$ | Standard therapy + intensive module triggered at pre-set week 8 (regardless of CSD status) |

**Intensive module:** 3 additional 90-minute sessions per week (vs. standard 1/week) for 3 consecutive weeks, using Cognitive Processing Therapy (CPT; Resick et al., 2017).

### 3.2 Participants

$n = 80$: Complex PTSD or chronic treatment-resistant depression. Weekly 64-channel EEG for 16 weeks.

### 3.3 CSD Detection Algorithm (Real-Time)

```python
def detect_csd(psi_history, window=3, baseline_weeks=4):
    """
    Real-time CSD detection for treatment timing.
    Returns True if autocorrelation divergence detected.
    """
    if len(psi_history) < baseline_weeks + window:
        return False
    
    baseline = psi_history[:baseline_weeks]
    recent = psi_history[-window:]
    
    # AR(1) autocorrelation
    tau_baseline = estimate_ar1_tau(baseline)
    tau_recent = estimate_ar1_tau(recent)
    
    # Threshold: 2σ above individual baseline mean
    threshold = np.mean(tau_baseline) + 2 * np.std(tau_baseline)
    
    # Require 2 consecutive weeks above threshold
    consecutive_above = sum(1 for t in tau_recent[-2:] if t > threshold)
    return consecutive_above >= 2
```

### 3.4 Primary Outcome

**Transition probability** at 16 weeks: proportion of participants achieving documented stage transition (Lindahl et al., 2017 criteria, blinded raters).

**Pre-registered prediction:** CSD-guided arm shows higher transition rate (expected: 45% vs. 25%, $\chi^2$, $p < 0.05$, NNT $\approx 5$).

### 3.5 Secondary Outcomes

| Outcome | Measure | Prediction |
|---------|---------|-----------|
| Clinical improvement | HAMD-17 / PCL-5 change at 16 weeks | CSD-guided $d > 0.40$ advantage |
| Therapeutic efficiency | Total intensive sessions used | CSD-guided uses **fewer** sessions (targeted vs. fixed) |
| CSD accuracy | Sensitivity/specificity of CSD detection for transitions | Sensitivity $> 0.70$, specificity $> 0.60$ |

---

## 4. Ethical Considerations

### 4.1 Withholding Intensive Treatment

The fixed-schedule arm does receive the intensive module — just at a pre-set time rather than CSD-guided time. No participant is denied treatment. The ethical question is whether timing matters, not whether treatment is withheld.

### 4.2 False CSD Alerts

If the CSD algorithm triggers falsely (no actual transition approaching), the intensive module is delivered unnecessarily but is not harmful. The cost is wasted therapeutic resources, not patient harm.

---

## 5. Cold Truth / Implementation Limits

**Problem 1 — CSD detection requires weeks of data.** The algorithm cannot detect CSD until at least $4 + 3 = 7$ weeks of EEG data are collected. Transitions occurring in the first 7 weeks are missed.

**Problem 2 — The "transition" definition is the weakest link.** Inter-rater reliability for qualitative transition assessment ($\kappa_{\text{Cohen}} > 0.75$ required) is achievable for experienced raters but not guaranteed.

**Problem 3 — Sample size ($n = 80$) may be insufficient.** Power $= 0.72$ for the primary outcome at $\alpha = 0.05$ with expected effect size. A larger trial ($n = 120$) would increase power to $0.85$.

**Problem 4 — The intensive module (CPT) is not specific to CSD theory.** Any effective psychotherapy intensified at the right moment would show the same pattern. CSD-guided timing, not CSD-specific therapy, is the novel claim.

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Cross-references: `paper_protocol_02_CSD_stage_transition.md`, `SYN_08_critical_slowing_down.md`*
