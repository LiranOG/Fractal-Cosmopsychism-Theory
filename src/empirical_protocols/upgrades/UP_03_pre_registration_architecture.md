# UP-03: Pre-Registration Architecture — 7-Component Protocol for All FCT Experiments
> **Path:** `src/empirical_protocols/upgrades/UP_03_pre_registration_architecture.md`
> **Upgrade ID:** UP-03
> **Priority:** 🔴 Critical — career-defining credibility
> **Cost:** $0
> **Timeline:** 1–2 weeks per study
> **Source:** Complete Upgrade Protocol v3.0 (Upgrade 03)
> **Status:** ✅ Production-ready templates included

---

## 1. The Non-Negotiable Principle

Pre-registration is not optional. It is not a "best practice." It is a **survival requirement** for a research program that will face extraordinary skepticism due to its metaphysical origins.

Any result published from the FCT research program without pre-registration will be dismissed as post-hoc fitting — regardless of its statistical significance, effect size, or theoretical elegance. This is not a theoretical risk; it is a certainty.

---

## 2. The 7-Component Architecture

Pre-registration is not a single document — it is an architecture of interlocking components that must be produced in the correct sequence:

```
┌─────────────────────────────────────────────────────────┐
│  COMPONENT 1: OSF Pre-Registration (public, timestamped) │
│  COMPONENT 2: Registered Report (Stage 1 journal sub.)   │
│  COMPONENT 3: Analysis Script (GitHub, pre-data commit)  │
│  COMPONENT 4: Power Analysis Code (reproducible)         │
│  COMPONENT 5: Exclusion Criteria (pre-specified)          │
│  COMPONENT 6: Falsification Criterion (pre-specified)     │
│  COMPONENT 7: X-Proxy Declaration (mandatory in all pubs) │
└─────────────────────────────────────────────────────────┘
         ▼ ALL COMPLETED BEFORE FIRST PARTICIPANT ▼
```

---

## 3. Component-by-Component Specification

### 3.1 Component 1: OSF Pre-Registration

**Platform:** Open Science Framework (osf.io) — public, timestamped, DOI-assigned.

**Required sections (verbatim template for SYN-02R primary experiment):**

#### Section 1 — Hypotheses (exact, pre-specified):

```
H1 [PRIMARY]: η_IB will rank monotonically across four consciousness states.
  Direction: η_IB(meditation) > η_IB(rest) > η_IB(sedation) > η_IB(NREM).
  Test: repeated-measures ANOVA + linear trend contrast (Helmert coding,
        contrast weights [3, 1, -1, -3]).
  Criterion: F_trend > F_crit(α=0.01, df=1,59), effect size η²_p > 0.10.

H2 [SECONDARY]: η_IB^(sensory) and η_IB^(neural) will not differ significantly.
  Test: one-sample t-test of [η_IB^(sens) - η_IB^(neur)] against 0.
  Criterion: |t| < t_crit(α=0.05, df=59), 90% CI includes 0.

H3 [TERTIARY]: ζ_eq (LZ complexity) will correlate negatively with
  self-reported mindfulness practice hours.
  Test: one-tailed Spearman ρ < 0, α=0.05.
  Criterion: ρ < -0.30, p < 0.05.

H_NULL [Pre-specified falsification criterion]:
  If η_IB does NOT rank in the predicted direction (H1 reversed or
  non-significant at α=0.10), the primary prediction of SYN-02R is
  disconfirmed. The IB efficiency framework requires respecification.
```

#### Section 2 — Analysis Plan (verbatim):

```
Primary analysis:
  Software: R 4.3+ with ez, BayesFactor, lme4 packages.
  Preprocessing: epoched to 1-s windows, artifact-free epochs only.
  β_IB computation: Gaussian IB estimator, PCA to 20 components before IB.
  η_IB = ΔI(T;Y)/ΔI(X;T) at empirical operating point (slope of IB curve).

Exclusion criteria (applied before unblinding):
  - >20% artifacted EEG epochs
  - fMRI motion > 2mm in any run
  - BIS index outside 60-80 range during propofol condition
  - Failure to maintain fixation (>30% gaze deviation in eye-tracking)

Corrections:
  H1: no correction (primary hypothesis, pre-planned contrast)
  H2, H3: Bonferroni correction for 2 secondary tests (α_corrected = 0.025)
  All other comparisons: exploratory, clearly labeled as such

Missing data: multiple imputation (mice package), 5 imputations,
  reported with and without imputation.

Stopping rule: Interim analysis at n=30 of 60 planned.
  Stop for futility: d < 0.20 AND 95% CI upper bound < 0.35 for H1.
  Do NOT stop for efficacy (prevents α inflation).
```

#### Section 3 — Sample Size Justification (reproducible):

```r
library(pwr)
# H1: within-subjects ANOVA, 4 conditions, η²_p = 0.10
pwr.anova.test(k=4, f=sqrt(0.10/(1-0.10)), sig.level=0.01, power=0.90)
# Output: n = 52 per group → 52 participants total (within-subject)
# Add 15% for dropout: n_planned = 60
```

### 3.2 Component 2: Registered Report (Stage 1)

**Target journals:** Cortex, eLife, PLOS ONE, NeuroImage (all accept Registered Reports).

**Stage 1 submission includes:** Introduction, Methods, and pre-specified analysis plan. **In-principle acceptance** is granted before data exist — guaranteeing publication regardless of result direction. This is the most powerful anti-publication-bias mechanism available.

### 3.3 Component 3: Analysis Script (GitHub)

All analysis code committed to a public GitHub repository **before the first participant is run**. Script includes placeholders for data loading but is otherwise complete.

**Why this matters:** Post-hoc analysis changes are visible via `git diff`. Any modification after data collection is timestamped and auditable.

### 3.4 Component 4: Power Analysis Code

Monte Carlo power simulations (see UP-02, §2.3) committed as part of Component 3. Must output exact power values for the planned sample size, effect size, and $\alpha$ level.

### 3.5 Component 5: Exclusion Criteria

All exclusion criteria specified **before unblinding**. No participant can be excluded for a reason not listed in the pre-registration. Reasons are physiological/technical only (artifact rejection, motion, equipment failure), never based on results.

### 3.6 Component 6: Falsification Criterion

**Every pre-registration must include an explicit $H_{\text{NULL}}$:**

> "If [primary outcome] does NOT [reach threshold], the prediction of [SYN formula] is **disconfirmed**. The [specific theoretical component] requires respecification."

This is not hedging — it is intellectual honesty. A model that cannot be falsified is not a model.

### 3.7 Component 7: X-Proxy Declaration (Mandatory)

**Every publication must include the following statement in the Methods section:**

> "The variables measured in this study ($\eta_{IB}$, $W(t)$, $\zeta$, $\kappa_{\text{proxy}}$) are empirical proxies for theoretical constructs defined in the FCT framework. They are **not** direct measurements of the theoretical quantities. The mapping between proxy and construct is established by the convergent validity analyses reported in [reference to UP-01] and may be revised as measurement technology improves."

---

## 4. Pre-Registration Template for POC Studies (AsPredicted)

For smaller studies (POC-1, POC-2, POC-3), use the AsPredicted format (aspredicted.org):

```
Study title: "W(t) bistability: A proof-of-concept test of
              bistable free-will dynamics via EEG temporal response functions"

1. Main hypotheses:
   (a) W(t) correlates positively with attention probe ratings (ρ > 0.35)
   (b) Weekly ΔW distribution shows bimodality (Hartigan D > 0.05, p < 0.05)

2. Dependent variable(s):
   W(t) = R²_TRF / (R²_TRF + R²_AR), computed in 10-s sliding windows

3. Conditions/Manipulations:
   Within-subject: focused attention vs. mind-wandering (counterbalanced)

4. Analyses:
   H1a: Spearman ρ(W, attention probe), one-tailed, α=0.01
   H1b: Hartigan dip test for bimodality on ΔW, α=0.05

5. Outliers/Exclusions (pre-specified):
   Exclude if |W| > 3 SD from individual mean, or >20% artifact epochs

6. Sample size: n=30 (power=0.92 for ρ=0.35, α=0.01, Monte Carlo)

7. Any other studies? No.
```

---

## 5. Grant Application Framing (Tier D Sterilization)

For NSF/NIH/ERC submissions, remove all Tier D language. Example framing:

> **Aim 1:** Develop and validate the IB efficiency metric $\eta_{IB}$ as a novel measure of consciousness depth across states, using pre-registered EEG/fMRI protocols.
>
> **Aim 2:** Test the hypothesis that $\eta_{IB}$ shows scale invariance across sensory-to-cognitive processing hierarchies.
>
> **Aim 3:** Characterize the bistable dynamics of present-moment attention ($W(t)$) using TRF-based neural decomposition, testing the prediction of bimodal change-score distributions.

**No mention** of IS-NESS, karma, veil, or fractal cosmopsychism anywhere in the grant application.

---

## 6. Cold Truth / Implementation Limits

**Problem 1 — Pre-registration does not prevent all bias.** Researchers can pre-register and then deviate from the plan (known as "pre-registration theater"). The Registered Report format (Component 2) mitigates this but requires journal acceptance, which is not guaranteed.

**Problem 2 — The falsification criteria are conservative by necessity.** Setting $\alpha = 0.01$ and requiring $\eta^2_p > 0.10$ means genuinely real but small effects will be missed. This is deliberate — the FCT research program benefits more from one strong positive result than ten ambiguous ones.

**Problem 3 — The X-Proxy declaration is philosophically honest but rhetorically costly.** Explicitly stating that every measured variable is a proxy will invite critics to dismiss results as "not really measuring what you claim." This cost is worth paying: the alternative (silent proxy substitution) will eventually be discovered and will destroy credibility permanently.

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source: Complete Upgrade Protocol v3.0 (Upgrade 03)*
*Cross-references: All empirical protocol files*
