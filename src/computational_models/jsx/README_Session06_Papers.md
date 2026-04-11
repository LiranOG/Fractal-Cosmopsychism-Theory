# README: `Session06_Papers.jsx` — Five-Paper Protocol Dashboard
> **Path:** `src/computational_models/jsx/README_Session06_Papers.md`
> **Language:** React 18+ / JavaScript | **Dependencies:** `recharts`, `react`
> **SYN Links:** All 5 Paper Protocols (Paper I–V)
> **Size:** 26.9 KB, originally `.jsx.txt`

---

## 1. Purpose

Interactive React dashboard presenting the five-paper progressive proof structure defined in Session 06. Provides a visual overview of the coordinated FCT research program with:

- **Paper dependency architecture** — which papers enable which
- **Budget, timeline, and sample size** breakdowns per paper
- **Target journal and impact factor** tracking
- **Formula-to-paper mapping** (which SYN formulas each paper tests)
- **Cumulative program statistics** (total participants, total budget, timeline visualization)

---

## 2. The Five-Paper Architecture

```
Paper I (IB Consciousness) ──────► Papers II, III, V
                                         │
Paper II (CSD Stage Transitions) ──► Papers III, IV
                                         │
Paper III (Karmic Oscillator) ────► Paper IV
                                         │
Paper IV ★ (Psilocybin W(t)) ────► All applied papers
                                         │
Paper V ★ (Cross-scale UIBIC) ───► Cosmological program
```

**Critical path:** I → II → III → IV (sequential dependency). Paper V can run in parallel.

---

## 3. Program Summary (from Dashboard)

| Paper | Journal | IF | Formula | $n$ | Budget | Timeline |
|-------|---------|-----|---------|-----|--------|----------|
| I | Nature Neuroscience | 28.8 | SYN-02R | 60 | £280K | 18 mo |
| II | PNAS | 12.4 | SYN-08 | 120 | £420K | 24 mo |
| III | Translational Psychiatry | 7.5 | SYN-NEW-03 | 120 | £180K | 18 mo |
| IV ★ | Nature Medicine | 82.9 | SYN-10 | 120 | £1.8M | 36 mo |
| V ★ | PRL / Nature Physics | 9.1–25.3 | SYN-03/04 | 6 datasets | £95K | 12 mo |

**Total:** £2.77M · 420 human participants · 6 independent datasets · 30 orders of magnitude in physical scale

---

## 4. Deployment

Same as SYN13_simulation — drop into any React project as a component:

```bash
npm install recharts
# Copy Session06_Papers.jsx → src/PapersDashboard.jsx
# Import and render: <PapersDashboard />
```

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source file: `Session06_Papers.jsx` (26.9 KB, originally `.jsx.txt`)*
