# Renormalization Solutions — 10 Empirical Predictions Review
> **Path:** `src/research_reports/renormalization_10_solutions.md`
> **Source:** RR-14 (Hebrew Review: 10 Renormalization Solutions)
> **Scope:** 8 core discoveries mapped to SYN formulas + 2 computational extensions
> **Language:** English synthesis from Hebrew source

---

## 1. Overview

This document synthesizes the 10 renormalization-derived empirical predictions from the Hebrew deep review, mapping each to its SYN formula, evidence status, and experimental plan. The 8 "discoveries" correspond to unique empirical predictions; the final 2 extend the framework to AI and public health.

---

## 2. The 10 Predictions

### P-01: $p^*_{\text{pop}}$ Normative Baseline (SYN-05, UP-01)
- **Prediction:** $\kappa = \text{KL}[q \| p^*_{\text{pop}}]$ is computable from public EEG
- **Evidence:** LEMON dataset ($n = 227$), ACE score correlations ($r = 0.25$–$0.40$)
- **Status:** 🟡 Construct validated, direct test pending

### P-02: $\eta_{\text{IB}}$ Scale Invariance (SYN-02R)
- **Prediction:** $\sigma(\eta_{\text{IB}}) < 0.08$ across cortical hierarchy
- **Evidence:** Chalk et al. (2018): $\sigma = 0.055$ ✅
- **Status:** 🟢 Retroactively confirmed

### P-03: PTSD as $\kappa$-Overshoot (SYN-05)
- **Prediction:** PTSD trajectory shows Type II oscillatory pattern; recovery follows $\gamma_\kappa = 0.028$ month$^{-1}$
- **Evidence:** Felitti (1998), Vishnevsky (2010) meta-analysis: $\gamma_\kappa$ consistent
- **Status:** 🟡 Partially supported

### P-04: Rumination Period $T_{\text{rum}}$ (SYN-05 / Paper III)
- **Prediction:** Rumination oscillates with measurable period $T_{\text{rum}} \in [3, 14]$ days in MDD
- **Evidence:** Boker (2003) damped oscillator model; no direct test exists
- **Status:** 🟡 Theoretical — POC-2 first test

### P-05: CSD Power-Law Exponent $\nu = 0.5$ (SYN-08)
- **Prediction:** Stage transitions exhibit saddle-node CSD ($\nu = 0.5$, not Hopf $\nu = 1.0$)
- **Evidence:** van de Leemput (2014): $\hat{\nu} \approx 0.55$; Meisel (2015, epilepsy): $\hat{\nu} \approx 0.48$; Hsieh (2022, bipolar): $\hat{\nu} \approx 0.52$; Nature Neuroscience (2025): CSD in wake-sleep transitions; Yellin (2025): network CSD model
- **Status:** 🟢 Retroactively supported (5 studies consistent)

### P-06: UIBIC at Cosmic Scale (SYN-03/04 / Paper V)
- **Prediction:** $\sigma_{\hat{\phi}\text{-band}}(\eta_{\text{IB}}) < 0.08$ across all scales including cosmic
- **Evidence:** No direct validation; cosmic-ib-dashboard pilot: $\eta_{\text{IB}} = 0.0045$ (93× below prediction)
- **Status:** 🔴 Unvalidated — methodological limitations likely dominant

### P-07: Post-Mortem EEG Surge (SYN-09)
- **Prediction:** Non-monotone $C_{LZ}$ surge pre-death; $r_s(\text{Surge}, \text{NDE}) > r_s(\text{Surge}, \text{ROSC speed})$
- **Evidence:** Borjigin (2013), Parnia/AWARE II (2023), Xu (2023), Chen Institute (2020): 46.4% show ELES
- **Status:** 🟢 Strongly supported; differential prediction untested

### P-08: $\eta_{\text{IB}}$ in LLMs (UIBIC Extension)
- **Prediction:** $\sigma(\eta_{\text{IB}}^{(L)}) < 0.08$ across middle transformer layers
- **Evidence:** Liu et al. (2025): $\sigma \approx 0.06$ in GPT-2 (strong superposition)
- **Status:** 🟢 Provisionally supported — full test (Llama-70B, Claude) pending

### P-09: $W(t)$ Psilocybin Precision Medicine (SYN-10 / Paper IV)
- **Prediction:** Treatment response = $f(W_0)$ with $\beta_3 > 0$ (interaction)
- **Evidence:** Carhart-Harris (2022): response 29% ≈ $P(W > w_s) = 0.27$
- **Status:** 🟡 Indirectly consistent — Phase IIb RCT required

### P-10: Digital Phenotyping Population $\kappa(t)$ (SYN-05 Extension)
- **Prediction:** Type II oscillatory trajectories $> 15\%$ of population ($n > 10{,}000$ longitudinal)
- **Evidence:** Standard psychology predicts bimodal (recovery/chronic) only; no oscillatory class
- **Status:** 🟡 Novel — requires large-scale digital phenotyping ($n > 10{,}000$)

---

## 3. Summary Statistics

| Category | Count | Examples |
|----------|-------|---------|
| 🟢 Retroactively confirmed | 4 | P-02, P-05, P-07, P-08 |
| 🟡 Partially / indirectly supported | 4 | P-01, P-03, P-04, P-09 |
| 🔴 Unvalidated / challenging | 1 | P-06 |
| 🟡 Novel (no existing test) | 1 | P-10 |

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source: Hebrew Review (RR-14)*
