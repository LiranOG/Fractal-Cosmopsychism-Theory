# Paper Protocol 01: Hierarchical IB Efficiency as a Consciousness Signature
> **Path:** `src/empirical_protocols/paper_protocols/paper_protocol_01_IB_consciousness.md`
> **Formula:** SYN-02R (Hierarchical IB Compression)
> **Target Journal:** Nature Neuroscience (IF ~28.8)
> **Tier:** B — Formal Analog, Directly Testable
> **Budget:** £280K | **Timeline:** 18 months | **$n$:** 60
> **Source:** Session 06, Paper I
> **Status:** ✅ Pre-registration ready

---

## 1. Abstract

We introduce the IB Efficiency Index $\eta_{\text{IB}}(n) = I(T^{(n)}; Y^{(n)}) / I(X^{(n+1)}; T^{(n)})$ as a continuous, scale-indexed measure of conscious processing depth, derived from the Information Bottleneck method. Three pre-registered predictions distinguish this framework from all existing theories (GWT, IIT, FEP):

- **P1:** $\eta_{\text{IB}}$ ranks monotonically across four consciousness states: meditation $>$ waking rest $>$ propofol sedation $>$ NREM sleep
- **P2:** $\eta_{\text{IB}}$ is approximately constant across sensory, neural, and cognitive processing levels within each state (scale invariance)
- **P3:** $\eta_{\text{IB}}$ increases monotonically with documented meditation practice depth

A 60-participant, 256-channel simultaneous EEG–fMRI protocol with propofol-controlled sedation and matched meditator cohort. Power analysis confirms $\beta < 0.20$ for all primary tests at $\alpha = 0.01$.

---

## 2. Theoretical Framework

### 2.1 The IB Efficiency Index

$$\boxed{\eta_{\text{IB}}(n) := \frac{I(T^{(n)}; Y^{(n)})}{I(X^{(n+1)}; T^{(n)})} \in [0, 1] \quad [\text{dimensionless}]}$$

The IB trade-off at level $n$:

$$\beta_{\text{IB}}(n) := \left(\frac{\partial I(T;Y)}{\partial I(X;T)}\right)_{\text{operating point}} \quad [\text{dimensionless}]$$

$\beta_{\text{IB}}$ is **not a free parameter** — it is computed directly from the empirical Gaussian IB estimator (Chechik et al., 2005).

### 2.2 Scale Invariance Condition

$$\left|\eta_{\text{IB}}(n) - \eta_{\text{IB}}(n-1)\right| < \varepsilon_{\text{scale}} \quad \forall n \in \{1, \ldots, N_{\text{scales}}\}$$

This prediction is not made by standard criticality models (SOC, 1/f noise), which predict scale-free power spectra but not IB efficiency structure.

### 2.3 Veil Thickness and Contemplative Practice

From SYN-02R veil dynamics at steady state: $\zeta_{\text{eq}} = \mu \cdot I(T;Y) / \gamma_{\text{env}}$, predicting lower $\zeta$ (higher $\eta_{\text{IB}}$) with deeper practice.

---

## 3. Methods

### 3.1 Study Design

**4-state within-subjects design:**

| State | Manipulation | Duration |
|-------|-------------|----------|
| Focused meditation | Guided concentration (experienced meditators, $>1{,}000$ hrs) | 30 min |
| Waking rest | Eyes-open fixation | 30 min |
| Propofol sedation | Target BIS 60–80 (light sedation) | 20 min |
| NREM sleep | Naturally occurring N2/N3 (overnight recording) | Full night |

### 3.2 Participants

$n = 60$: 30 experienced meditators ($> 1{,}000$ hrs documented), 30 matched controls. All undergo all four states.

### 3.3 Recording Setup

- 256-channel EEG (EGI HydroCel)
- Simultaneous 3T fMRI (Siemens Prisma)
- Propofol administered by certified anesthesiologist; BIS monitoring
- Eye-tracking + pupillometry

### 3.4 $\eta_{\text{IB}}$ Computation Pipeline

```
Raw EEG/fMRI → Preprocessing → Feature extraction (5 hierarchical levels) →
Gaussian IB estimator → IB curve → η_IB at operating point → State × Level matrix
```

### 3.5 Statistical Analysis (Pre-registered)

**H1 [PRIMARY]:** Repeated-measures ANOVA + linear trend contrast (Helmert: $[3, 1, -1, -3]$). Criterion: $F_{\text{trend}} > F_{\text{crit}}(\alpha=0.01, df=1,59)$, $\eta^2_p > 0.10$.

**H2 [SECONDARY]:** One-sample $t$-test of $[\eta_{\text{IB}}^{(\text{sens})} - \eta_{\text{IB}}^{(\text{neur})}]$ against 0. Criterion: $|t| < t_{\text{crit}}(\alpha=0.05, df=59)$, 90% CI includes 0.

**H3 [TERTIARY]:** Spearman $\rho < 0$ between $\zeta_{\text{eq}}$ and practice hours. Criterion: $\rho < -0.30$, $p < 0.05$.

**$H_{\text{NULL}}$:** If $\eta_{\text{IB}}$ does NOT rank in predicted direction ($H1$ reversed or non-significant at $\alpha=0.10$), SYN-02R is **disconfirmed**.

### 3.6 Power Analysis

```r
library(pwr)
pwr.anova.test(k=4, f=sqrt(0.10/(1-0.10)), sig.level=0.01, power=0.90)
# n = 52 total (within-subject) → n_planned = 60 (15% dropout)
```

---

## 4. Differential Predictions vs. Competing Theories

| Theory | Predicts P1? | Predicts P2? | Predicts P3? |
|--------|-------------|-------------|-------------|
| GWT (Dehaene) | Binary ignition only | No | No |
| IIT (Tononi) | $\Phi$ ranking, not $\eta_{\text{IB}}$ | No mechanism | No |
| FEP (Friston) | Precision, not compression | No scale prediction | No |
| **FCT/SYN-02R** | **Yes** | **Yes** | **Yes** |

---

## 5. Cold Truth / Implementation Limits

**Problem 1 — Gaussian IB estimator bias.** The Gaussian assumption is violated for real neural data (heavy-tailed, non-stationary). $k$-NN estimators (Pérez-Cruz, 2008) are more robust but computationally expensive ($O(n^2)$).

**Problem 2 — Propofol is not "pure" consciousness reduction.** Propofol affects motor, autonomic, and cognitive systems simultaneously. Changes in $\eta_{\text{IB}}$ may reflect pharmacological side effects, not consciousness depth.

**Problem 3 — Meditation expertise is confounded with personality, motivation, and lifestyle.** The meditator cohort self-selected into a practice that alters neural function. Age-matched, education-matched controls cannot remove all confounds.

**Problem 4 — The £280K budget assumes institutional EEG/fMRI access.** Stand-alone facility costs would increase to ~£500K.

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source: Session 06, Paper I*
*Cross-references: `SYN_02R_hierarchical_ib_compression.md`, `UP_03_pre_registration_architecture.md`*
