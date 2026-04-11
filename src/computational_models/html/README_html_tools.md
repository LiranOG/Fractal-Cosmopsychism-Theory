# HTML Computational Tools — Complete Reference Guide

> *Five standalone, zero-dependency HTML interfaces for the Fractal Cosmopsychism Theory computational and analytical program.*

Open any file directly in a browser — no server, no build step, no installation required.

---

## Quick Reference

| File | Size | Category | Interactive? |
|------|------|----------|-------------|
| [`AUE_Full_Physics_Analysis.html`](#1-aue_full_physics_analysishtml) | 67 KB | Astrophysics · Static Analysis | No (read-only) |
| [`PRISM_interactive.html`](#2-prism_interactivehtml) | 43 KB | Astrophysics · Live Calculator | ✅ Sliders |
| [`SYNAPSE_Framework.html`](#3-synapse_frameworkhtml) | 58 KB | Astrophysics · Reference Derivation | No (read-only) |
| [`complete_upgrade_priority_table.html`](#4-complete_upgrade_priority_tablehtml) | 15 KB | FCT Theory · Research Roadmap | No (read-only) |
| [`implementation_roadmap.html`](#5-implementation_roadmaphtml) | 9 KB | FCT Theory · Gantt Timeline | No (read-only) |

---

## 1. `AUE_Full_Physics_Analysis.html`

**Full name:** Astrophysical Ultimate Estimator — Full Physics Integration

**What it is:**
A rigorous, 9-section physics analysis document examining a specific extreme astrophysical scenario: **5 supermassive black holes (SMBHs, each 10⁸ M☉) + 2 ultra-massive stars simultaneously infalling from 1 parsec**. It calculates every major energy channel for this system using an analytical estimation framework called the ASE (Astrophysical Scale Estimator), then systematically upgrades the analysis with General Relativity corrections and discusses what would be required for a full numerical simulation.

**What it does (9 sections):**

| Section | Content |
|---------|---------|
| **A. Unified Formula** | Full analytical calculation: impact velocity (0.1c), accretion timescale (~6.4 hrs), super-Eddington rate (2.6×10⁶ × Eddington), GW energy (~8.93×10⁶³ erg), EM burst (1.54×10⁵⁵ erg), post-merger AGN jet power |
| **B. ASE Framework** | What the Astrophysical Scale Estimator is, what it is not. 9 explicit precision disclaimers, ranked hierarchy of 5 systematic weaknesses |
| **C. General Relativity** | GR corrections to infall velocity (Schwarzschild geodesic), merger timescale (Peters formula, PN expansion), GW power (quadrupole formula applied and shown to fail at close separations), Kerr metric spinning horizon radii |
| **D. Numerical Requirements** | What a full simulation would require: NR (BSSN/CCZ4) + GRMHD + AMR + radiation transport + neutrino transport. Shows that a uniform simulation grid would need 10²¹ cells (10¹⁰ TB of memory). Current-vs-required feasibility table |
| **E. Full Hydrodynamics** | GRMHD induction equation (covariant), MRI fastest-growing-mode wavelength, covariant radiative transfer equation, photon mean free path (3 cm at inner accretion flow), slim-disk saturation luminosity (~2×10⁴⁸ erg/s vs. 4.5 orders of magnitude below naive estimate) |
| **F–H** | Alternative MHD scenarios computable at different physics levels, ASE vs. full-physics comparison table, final unified summary |
| **I. Mandatory Footer** | Scientific integrity block with explicit uncertainty ranges |

**Why it's useful:**
- Provides the complete analytical energy budget for the FCT's "Stage Transition" extreme boundary scenario (SYN-08)
- Demonstrates exactly where analytical physics succeeds and where it requires a full numerical relativity simulation
- The slim-disk calculation in Section E directly supplies the EM coupling functional used by SYNAPSE
- Every equation is rendered via MathJax (LaTeX) with a live animated starfield background

**Technology:** MathJax 3 · DM Serif Display / Space Mono / Crimson Pro · Animated canvas starfield · Dark mode (near-black #06070d background)

---

## 2. `PRISM_interactive.html`

**Full name:** PRISM — Polyhedral Radial Infall Synthesis Module

**What it is:**
An interactive, closed-form analytical framework for computing the full observable spectrum of **N supermassive black holes falling radially inward from a regular N-gon configuration**. PRISM is the first tool in this suite that produces live numerical outputs via sliders — all 12 output quantities update in real time as you adjust the parameters.

**What it does:**

PRISM combines three independent theoretical advances into a unified calculation:

1. **Dihedral symmetry reduction** — the D_N symmetry of the initial polygon configuration makes tangential forces cancel exactly, reducing the N-body force law to a single closed-form effective two-body problem via the geometric shape factor:
   ```
   s_N = (1/4) × Σ csc(πk/N)   for k=1 to N-1
   ```

2. **Group-theoretic GW decomposition** — the quadrupole tensor for a regular N-gon belongs to the A₁ ⊕ E₂ representation of D_N; only the A₁ (breathing) mode contributes to leading-order GW emission, giving the central result:
   ```
   E_GW = (1/210) × (M_ring² × M_eff^(5/2)) / M_tot^(7/2) × c² × [1-(R_AH/R₀)^(7/2)]
   ```

3. **Effective Horizon Functional (EHF)** — a scalar F on initial-data space whose partial derivatives yield final BH mass, spin, and recoil velocity

**Interactive sliders (6 parameters → 12 live outputs):**

| Input Slider | Range |
|-------------|-------|
| N (number of SMBHs) | 2 – 12 |
| M_BH (SMBH mass) | 0.1 – 5 × 10⁸ M☉ |
| M_* (stellar mass) | 1,000 – 50,000 M☉ |
| R₀ (initial radius) | 0.1 – 10 pc |
| R_* (stellar radius) | 50 – 2,000 R☉ |
| χ̄ (mean SMBH spin) | 0 – 1 |

| Output | Value (N=5 default) |
|--------|-------------------|
| Geometric factor s_N | 1.376 |
| Effective mass M_eff | 1.376 × 10⁸ M☉ |
| GW energy E_GW | 8.4 × 10⁵⁹ erg |
| GW efficiency ε_GW | 0.094% of M_tot c² |
| Common horizon R_AH | 1.48 × 10⁹ km |
| Merge timescale | 4.9 × 10³ s ≈ 1.4 hr |
| Peak GW luminosity | 1.7 × 10⁵⁶ erg/s |
| Peak GW frequency | 3.2 × 10⁻⁴ Hz (LISA band) |
| EM burst energy | 1.8 × 10⁵⁵ erg (±1 dex) |
| Shock temperature | 5.0 × 10¹⁰ K ≈ 4 MeV |
| Final BH mass | 4.995 × 10⁸ M☉ |
| Spin lower bound | 0.054 (realistic: 0.2–0.7) |

Also includes a **live animated canvas diagram** (§2) showing the N-gon geometry, a validation table for limiting cases (N=2 recovery, R₀→∞, N=1), and a benchmark comparison table.

**Why it's useful:**
- The only analytical tool that gives a unified multi-observable prediction for arbitrary N ≥ 2 SMBH coalescence
- Provides the direct analytical competitor to SYNAPSE — both target the same scenario but with different mathematical frameworks
- The N=2 limit recovers exact NR binary-merger results (ε_GW = 0.094%, a_f = 0.686) — providing validation of the formula
- Real-time parameter exploration replaces a full NR parameter sweep

**Technology:** MathJax 3 · Canvas geometry rendering · EB Garamond / JetBrains Mono · Scroll-reveal animations · CSS starfield (animated dots) · Dark gold/navy palette

---

## 3. `SYNAPSE_Framework.html`

**Full name:** SYNAPSE — Symmetric N-body Astrophysical Phase-Space Estimator

**What it is:**
A comprehensive theoretical framework document presenting a **hierarchical renormalization-group (RG) cascade estimator** for multi-body SMBH coalescence. While PRISM uses infall-phase GW emission, SYNAPSE focuses on the **merger-phase cascade tree** — explicitly modeling each sequential binary merger in the N-body system with a running GW efficiency calibrated against numerical relativity.

**What it does (5 sections, A–E):**

SYNAPSE synthesizes 6 independent analytical components:

1. **Pentagon Geometry Sum S_N** — exact force decomposition for Z_N-symmetric configurations (same as PRISM's s_N but derived from first principles in §B.1 for the pentagon case)

2. **Merger Cascade Tree T_N** — for N=5, the explicit 3-step cascade:
   ```
   [BH₁ BH₂] [BH₃ BH₄] BH₅
        ↓           ↓
       C₁          C₂        BH₅     ← k=1 (two equal-mass mergers)
             ↘    ↙
             C₁₂             BH₅     ← k=2 (equal-mass spinning merger)
                   ↘        ↙
                    M_f              ← k=3 (asymmetric, q≈0.285)
   ```

3. **Running GW Efficiency ε_k** — NR-calibrated core formula:
   ```
   ε_k(η_k, χ_eff,k) = ε₀ × (4η_k) × f_spin(χ_eff,k)
   f_spin = 1 + 0.6 × χ_eff   (ε₀ = 0.0516, NR calibration)
   ```

4. **Spin Accumulation Recursion** — bilinear decomposition separating orbital (a_orb ∝ √η) and inherited (a_inh ∝ χ_eff × (1-2η)²) contributions at each step

5. **Slim-Disk Stellar Coupling Functional** — correctly accounts for photon trapping in the super-Eddington regime:
   ```
   L_EM = L_Edd(M_f) × [1 + ln(Ṁ/Ṁ_Edd)]
   ```
   This replaces the naive η×Ṁc² estimate which over-predicts by 4-5 orders of magnitude

6. **Cascade Recoil Estimator** — vectorial kick velocity from asymmetric final merger step

**Full numerical calculation shown for the Pentagon (N=5) benchmark:**

The document works through all 4 cascade steps explicitly with numbers, producing:
- M_f = 4.292 × 10⁸ M☉ (vs. ASE estimate of 4.9 × 10⁸)
- a_f = 0.857 (vs. ASE estimate of 0.7–0.99)
- E_GW = sum over all merger steps
- Free-fall time: 1412 yr (SYNAPSE) vs. 740 yr (naive central mass) — a factor of 1.907 correction

**RG Flow Interpretation:** The cascade T_N is framed as a renormalization group flow on binary-parameter space {M, q, a}, with running coupling β_M(k) = -ε_k(M_A + M_B) and fixed point at the single Kerr BH reached in K=N-1 steps.

**Why it's useful:**
- The most mathematically rigorous closed-form estimator in the toolkit — includes full step-by-step numerical validation
- Demonstrates quantitatively the key corrections over the ASE: +91% merger timescale, -1 dex in EM luminosity, corrected spin evolution
- Provides the intermediate level between PRISM's analytical estimate and a full numerical simulation
- The slim-disk correction alone changes the EM energy budget by ~4.5 orders of magnitude — critical for FCT's Stage Transition (SYN-08) energy bookkeeping

## 4. `complete_upgrade_priority_table.html`

---

## 5. `complete_upgrade_priority_table.html`

**Full name:** Fractal Cosmopsychism — Complete Upgrade Priority Table

**What it is:**
A comprehensive **decision matrix** ranking all 19 planned upgrades to the FCT model by their contribution to empirical validation. This is the operational planning document — each row tells a researcher exactly what to do, how much it costs, in what timeframe, which SYN formulas it unlocks, and what the empirical test is.

**What it contains:**

**19 upgrades across 3 time horizons:**

| Part | Timeframe | Upgrades | Theme |
|------|-----------|---------|-------|
| Part 1 | 1–3 years | #1–8 | Immediate critical: zero-cost theory fixes + first empirical PoCs |
| Part 2 | 3–7 years | #9–14 | Advanced: EEG/fMRI studies, RCT, Bayesian comparison |
| Part 3 | 10–30 years | #15–19 | Breakthrough: variational unification, AGI-scale, CMB |

**Key upgrades:**

| # | Upgrade | Status | Cost | SYN Formula |
|---|---------|--------|------|-------------|
| 1 | p* operationalization | **MANDATORY** | $0 | SYN-05, 06, 07, 10, 13 |
| 2 | W(t) EEG proof-of-concept (n=30) | **MANDATORY** | ~$2K | SYN-10 |
| 3 | OSF pre-registration (all studies) | **MANDATORY** | $0 | All empirical claims |
| 4 | β_ont, κ_c, W_thr calibration | **MANDATORY** | $0 | SYN-01R-B, 08, 10 |
| 5 | Tier D/B separation in all docs | **MANDATORY** | $0 | All publications |
| 10 | Full SYN-02R EEG/fMRI (n=60) | RECOMMENDED | ~$45K | SYN-02R (H1–H3) |
| 11 | Closed-loop W(t) neurofeedback RCT | OPTIONAL | ~$50K | SYN-10 causality |
| 15 | Unified variational principle | RECOMMENDED | $0 (theory) | All 13 formulas |
| 19 | Inter-stellar quantum correlations | **TIER D** | Space infrastructure | — |

**Status labels:** MANDATORY / RECOMMENDED / OPTIONAL / SPECULATIVE / TIER D

**Validation impact:** ★ to ★★★★★ rating for each upgrade

**Why it's useful:**
- The definitive priority ranking that prevents wasting research resources on exciting-but-premature ideas while neglecting critical prerequisites
- Operationalizes the FCT's "Cold Truth Clause" — every entry specifies a falsification criterion, not just a test
- Reveals that 5 upgrades are zero-cost and zero-data-collection (theory/docs fixes) — these should always be done first
- Tier D entries (#17, #19) make explicit what is permanently untestable under current technology

**Technology:** System sans-serif · Compact, functional table · Color-coded status badges (red MANDATORY, amber RECOMMENDED, green OPTIONAL, purple SPECULATIVE, grey TIER D) · Star ratings with CSS color coding

---

## 6. `implementation_roadmap.html`

**Full name:** Implementation Roadmap — Fractal Cosmopsychism Empirical Upgrade

**What it is:**
An **18-month Gantt chart** showing exactly when each empirical task executes, with month-by-month timeline bars, priority codes, costs, and expected outputs. This is the executable schedule companion to the upgrade priority table — translating the "what" into "when."

**What it contains:**

**5 phases over 18 months (~$48K total):**

| Phase | Months | Tasks | Cost |
|-------|--------|-------|------|
| Phase 1 — Infrastructure | 1–3 | p* population model, OSF pre-registration, LEMON replication | $0 |
| Phase 2 — First Signal | 4–9 | W(t) EEG PoC (n=30, ~$2K), parameter calibration, SDSS UIBIC | ~$2K |
| Phase 3 — Validation | 6–12 | ESM rumination PoC, TDA-DTI analysis (free), β-VAE training | ~$10.8K |
| Phase 4 — Publication | 12–18 | Full EEG/fMRI (n=60), RCT pilot, Bayesian comparison | ~$45K |
| Phase 5 — Scale | 18+ | Wearable mega-trial (n=2,000) | ~$440K |

Color-coded timeline bars by task type:
- 🟢 Green = Consciousness/EEG tasks
- 🔵 Blue = Open dataset replication
- 🟡 Amber = Theory/formalization
- 🟣 Purple = Pilot studies
- 🔴 Red-pink = Clinical trials

**Why it's useful:**
- Converts the FCT's 5-paper empirical program into a concrete 18-month schedule
- Shows which tasks run in parallel vs. which are sequential dependencies (e.g., OSF pre-registration must precede all data collection)
- The cost column makes grant application budget planning immediate
- Month-level granularity allows tracking actual vs. planned progress

**Technology:** System sans-serif · Color-filled table cells as Gantt bars · Priority labels (P1 ★★★ red, P2 amber, P3 blue) · Minimalist design for printability

---

## How to Run All Tools

### Browser (all platforms — recommended)

```bash
# Open any file directly — no server needed
start src/computational_models/html/AUE_Full_Physics_Analysis.html      # Windows
open  src/computational_models/html/PRISM_interactive.html               # macOS
xdg-open src/computational_models/html/SYNAPSE_Framework.html            # Linux
```

### Local HTTP Server (if MathJax CDN is unavailable)

```bash
# Python 3 (any platform)
cd src/computational_models/html
python -m http.server 8080
# Then open: http://localhost:8080/
```

### Running All Tools at Once

```bash
# Windows PowerShell — open all 6 in default browser
Get-ChildItem .\src\computational_models\html\*.html | ForEach-Object { Start-Process $_.FullName }

# macOS / Linux
for f in src/computational_models/html/*.html; do open "$f" 2>/dev/null || xdg-open "$f"; done
```

---

## Dependency Map

```
AUE_Full_Physics_Analysis.html
    │  Full analytical physics baseline for:
    ├──► PRISM_interactive.html    (uses ASE results as comparison benchmark)
    └──► SYNAPSE_Framework.html    (corrects ASE's slim-disk estimate)

complete_upgrade_priority_table.html
    │  Research strategy drives:
    └──► implementation_roadmap.html  (priority → schedule conversion)

All 5 tools connect to FCT empirical backbone: SYN-08 (Stage Transitions)
```

---

## External Dependencies

All tools load resources from CDNs — an internet connection is required for full rendering:

| Resource | Used by | Purpose |
|----------|---------|---------|
| `mathjax@3` (jsdelivr) | AUE, PRISM, SYNAPSE | LaTeX equation rendering |
| Google Fonts (DM Serif, Space Mono, Crimson Pro, EB Garamond, JetBrains Mono, Cormorant, Inter, Lora, Libre Baskerville, Overpass Mono) | All 3 styled tools | Typography |

The Priority Table and Roadmap use no external fonts or libraries — they render fully offline.

---

*Reference document — last updated 2026-03-30 · Covers all 5 HTML files in `src/computational_models/html/`*
