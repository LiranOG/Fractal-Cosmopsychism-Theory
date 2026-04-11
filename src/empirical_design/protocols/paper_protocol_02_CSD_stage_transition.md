# Paper Protocol 02: Critical Slowing Down Before Developmental Stage Transitions
> **Path:** `src/empirical_protocols/paper_protocols/paper_protocol_02_CSD_stage_transition.md`
> **Formula:** SYN-08 (Critical Slowing Down / Stage Transition Operator)
> **Target Journal:** PNAS (IF ~12.4)
> **Tier:** B — Formal Analog, Directly Testable
> **Budget:** £420K | **Timeline:** 24 months | **$n$:** 120 (Cohort P: 80 palliative, Cohort R: 40 retreat)
> **Source:** Session 06, Paper II
> **Status:** ✅ Pre-registration ready

---

## 1. Abstract

Phase transitions in consciousness development — moments of irreversible psychological transformation — are reported across contemplative, clinical, and end-of-life settings. We derive a quantitative prediction from the SYN-08 Landau free energy formalization: **critical slowing down (CSD)** should precede stage transitions by 4–6 weeks, with a characteristic divergence of the neural autocorrelation time $\tau_{\text{AC}} \propto (\Psi_c - \Psi)^{-1/2}$. This is a quantitative, falsifiable prediction that no existing psychological development model makes.

---

## 2. Theoretical Framework

### 2.1 Landau Free Energy of Stage Transition

$$\mathcal{F}_{\text{stage}}[\Psi] = a_0(\kappa - \kappa_c(n)) \cdot \Psi^2 + b \cdot \Psi^4 - h \cdot \Psi$$

At $\kappa = \kappa_c(n)$, the quadratic coefficient changes sign — the **bifurcation point**. Near bifurcation:

$$\frac{d\Psi}{d\tau} \approx -a_0(\kappa_c(n) - \kappa) \cdot \Psi + \xi(\tau)$$

The autocorrelation time diverges:

$$\tau_{\text{AC}} = \frac{1}{a_0(\kappa_c(n) - \kappa)} \xrightarrow{\kappa \to \kappa_c^-} +\infty$$

In physical time:

$$\boxed{\tau_{\text{AC}}(t) \approx \frac{\tau_0}{\sqrt{\Psi_c(n) - \Psi(t)}} \quad [\text{days}]}$$

### 2.2 Composite Proxy $\hat{\Psi}(t)$

$$\hat{\Psi}(t) = \hat{\phi}(t) \cdot e^{-\hat{\kappa}(t)/\kappa_s}$$

- $\hat{\phi}(t)$: Perturbational Complexity Index (PCI; Casali et al., 2013) or LZ complexity proxy
- $\hat{\kappa}(t)$: KL divergence proxy from UP-01

---

## 3. Methods

### 3.1 Two-Cohort Longitudinal Design

| Cohort | $n$ | Setting | Duration | EEG Frequency | Transition Criterion |
|--------|-----|---------|----------|---------------|---------------------|
| **P (Palliative)** | 80 | Advanced cancer, terminal cardiac/neuro | 12 months | Weekly | Lindahl et al. (2017) criteria, 2 blinded raters |
| **R (Retreat)** | 40 | 21-day silent meditation retreat | 21 days | Daily | Bonny & Savary (1990) criteria, 2 blinded teachers |

### 3.2 EEG Protocol

- **Palliative:** 64-channel portable EEG (Emotiv EPOC FLEX), 256 Hz, 5-min eyes-closed rest
- **Retreat:** BrainProducts actiChamp+, 64-channel, 256 Hz, 10-min morning session

### 3.3 Statistical Analysis Plan (Pre-registered)

**Primary Analysis — CSD Detection:**

For each participant with documented transition at $t_{\text{trans}}$:

1. Compute $\hat{\Psi}(t)$ time series
2. Estimate $\tau_{\text{AC}}(t)$ via AR(1) maximum-likelihood in rolling 3-week windows
3. Mann-Kendall trend test for monotonic increase over $[-6, 0]$ weeks pre-transition ($p < 0.05$ per participant)
4. Aggregate: proportion with CSD $> 50\%$ (vs. null = 20% from permutation bootstrap)

**Pre-registered prediction:** $\hat{\tau}_{\text{AC}}$ increases monotonically in $> 50\%$ of participants with transitions, peaking $\leq 2$ weeks pre-transition ($p < 0.01$, Fisher's exact test).

**Secondary — Power Law Exponent:**

$$\tau_{\text{AC}}(t) = \tau_0 \cdot (\Psi_c - \hat{\Psi}(t))^{-\nu}$$

Model prediction: $\hat{\nu} \approx 0.5 \pm 0.2$ (saddle-node bifurcation class), tested via AIC against $\nu = 1.0$ (Hopf) and $\nu = 0$ (no CSD).

**Tertiary — Post-Transition Reset:** $\hat{\tau}_{\text{AC}}$ drops to $\leq 80\%$ of peak within 2 weeks in $> 60\%$ of participants.

### 3.4 Power Analysis

Expected $d = 0.55$ for $\tau_{\text{AC}}$ change. For $n = 40$ participants with documented transitions (50–60% of Cohort P + 80% of Cohort R): power $= 0.82$ at $\alpha = 0.01$.

---

## 4. Predicted Results (from SYN-13-ND Simulation)

- $\tau_{\text{AC}}$: 3.2 days ($t = -8$ weeks) → 12.4 days ($t = -1$ week) — **3.9-fold increase**
- $\text{Var}(\hat{\Psi})$ ratio: 2.8 ($t = -8$ vs. $t = -1$ week, $p < 0.001$)
- Post-transition: $\tau_{\text{AC}}$ drops to 2.1 days within 10 days

---

## 5. Cold Truth / Implementation Limits

**Problem 1 — Transition definition is the critical vulnerability.** Qualitative interview criteria introduce inter-rater variability ($\kappa_{\text{Cohen}} > 0.75$ required). Triple-blind adjudication mandatory.

**Problem 2 — CSD can be spurious** (Boettiger et al., 2012). False positives from trend nonstationarity and seasonality require pre-registered detrending + surrogate data testing.

**Problem 3 — Palliative cohort confounds.** Declining health, changing medication, reduced sleep quality, and cognitive fatigue affect $\hat{\Psi}(t)$ independently. Matched healthy longitudinal controls ($n = 40$) required.

**Problem 4 — $\nu = 0.5$ cannot distinguish FCT from other saddle-node mechanisms** unrelated to consciousness development.

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source: Session 06, Paper II*
*Cross-references: `SYN_08_critical_slowing_down.md`, `UP_04_parameter_calibration_bounds.md`*
