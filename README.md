<p align="center">
  <strong>FRACTAL COSMOPSYCHISM THEORY</strong>
  <br/>
  <em>A Formal Mathematical Framework for Consciousness Across Scales</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Formulas-21_SYN-4B0082?style=for-the-badge" alt="21 SYN Formulas"/>
  <img src="https://img.shields.io/badge/Papers-5_Protocols-00796B?style=for-the-badge" alt="5 Paper Protocols"/>
  <img src="https://img.shields.io/badge/Status-Pre--Registration-E65100?style=for-the-badge" alt="Pre-Registration"/>
</p>

<p align="center">
  <!-- Software License -->
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/Code%20License-MIT-0277BD?style=for-the-badge&logo=opensourceinitiative&logoColor=white" alt="MIT License — Source Code"/>
  </a>
  <!-- Academic Works License -->
  <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
    <img src="https://img.shields.io/badge/Docs%20License-CC%20BY--NC--ND%204.0-EF5350?style=for-the-badge&logo=creativecommons&logoColor=white" alt="CC BY-NC-ND 4.0 — Academic Works"/>
  </a>
  <!-- Submodule Warning -->
  <a href="LEGAL.md">
  </a>
</p>

---

## Table of Contents

1. [Abstract](#abstract)
2. [The Architecture at a Glance](#the-architecture-at-a-glance)
3. [The Epistemic Tier System](#the-epistemic-tier-system)
4. [Repository Map](#repository-map)
5. [The Philosophical Origins](#the-philosophical-origins)
6. [The Master Equation (SYN-13)](#the-master-equation-syn-13)
7. [The Empirical Engine](#the-empirical-engine)
   - [COSMIC-IB-DASHBOARD — SDSS Empirical Pipeline](#cosmic-ib-dashboard--sdss-empirical-pipeline)
8. [Retroactive Validations](#retroactive-validations)
9. [Getting Started](#getting-started)
   - [Quick Start — SYN-13 Interactive Simulator](#quick-start--syn-13-interactive-simulator)
   - [Component URLs](#component-urls)
10. [Citation](#citation)
11. [License](#license)
    - [License Matrix](#-license-matrix)
    - [Attribution Requirement](#-attribution-requirement-cc-by-nc-nd-40)

> 📖 **Full installation guide (all platforms):** → **[INSTALLATION_GUIDE.md](INSTALLATION_GUIDE.md)**

---

## Abstract

This repository contains the **complete formal specification** of Fractal Cosmopsychism Theory (FCT) — a mathematical framework that models consciousness as a universal information-processing phenomenon governed by the **Information Bottleneck (IB)** principle.

The theory derives a **6-dimensional coupled ODE system** (the Master Equation) from three axioms and produces **10 empirically falsifiable predictions** spanning neuroscience, computational psychiatry, psychedelic pharmacology, and observational cosmology. The central conjecture — the **Universal Information Bottleneck Invariance Conjecture (UIBIC)** — predicts that IB compression efficiency $\eta_{\text{IB}}$ is approximately constant across **30 orders of magnitude** in physical scale, from cortical microcircuits to the cosmic web.

> **Epistemological status:** This is a formal analog framework at **Tier B** (testable structural correspondence). The metaphysical foundations (Tier D) are clearly separated and labeled. No Tier A (directly confirmed) results exist yet. Four of ten predictions have retroactive support in the existing literature; none have been prospectively pre-registered.

---

## The Architecture at a Glance

```
                         ┌──────────────────────────┐
                         │   IS-NESS  (Axiom A1)    │  Tier D
                         │   Φ(𝕀) = Φ_max           │  (Metaphysical)
                         └───────────┬──────────────┘
                                     │ Self-Localization (A2)
                         ┌───────────▼──────────────┐
                         │  Fractal Node Hierarchy   │  Tier C–D
                         │  {n_i} ≅ {n_{i+1}} mod R │  (SYN-03)
                         └───────────┬──────────────┘
                                     │ Information Bottleneck (A3)
              ┌──────────────────────┼──────────────────────┐
              │                      │                      │
   ┌──────────▼─────────┐ ┌─────────▼──────────┐ ┌────────▼─────────┐
   │  η_IB Hierarchy    │ │  Node Dynamics      │ │  Master Equation │
   │  (SYN-02R, 04)     │ │  (SYN-05–09)        │ │  (SYN-13, 13-ND) │
   │  Tier B             │ │  κ, Φ, ζ, ω, W     │ │  6D ODE System   │
   └─────────┬──────────┘ └──────────┬──────────┘ └─────────┬────────┘
             │                       │                       │
             └───────────────────────┼───────────────────────┘
                                     │
                         ┌───────────▼──────────────┐
                         │   EMPIRICAL PROGRAM       │  Tier B
                         │   5 Papers, £2.77M        │  (Testable)
                         │   420 Participants         │
                         └──────────────────────────┘
```

---

## The Epistemic Tier System

The FCT enforces a rigorous classification of every claim to prevent epistemological overreach:

| Tier | Meaning | Formulas | Can It Be Falsified? |
|------|---------|----------|---------------------|
| **A** | Directly measured, prospectively confirmed | *None yet* | Already confirmed |
| **B** | Formal analog, directly testable | SYN-02R through SYN-10, SYN-13/13-ND, all UPs | Yes — via pre-registered experiments |
| **C** | Structural correspondence, indirectly testable | SYN-03 (cosmic extension) | Partially — via cross-scale comparison |
| **D** | Metaphysical, permanently untestable | SYN-01RA/RB, SYN-11, SYN-12 | **No** — declared and quarantined |

Every document in this repository includes a **"Cold Truth"** section that explicitly states what the model *cannot* explain or predict.

---

## Repository Map

```
Fractal-Cosmopsychism-Theory/
│
├── README.md                          ← You are here
├── INSTALLATION_GUIDE.md              ← ★ Full A-Z setup guide (all platforms)
├── CHANGELOG.md                       ← Complete 60-file build history
├── CONTRIBUTING.md                    ← Epistemological standards for contributors
│
├── docs/
│   ├── original_philosophical_core/   ← ★ The raw philosophical origins (pre-math)
│   ├── glossary/                      ← Variable definitions & epistemic mapping
│   ├── whitepapers/                   ← FCT Whitepaper v1.0
│   ├── overviews/                     ← Executive summary (grant-ready)
│   ├── epistemological_notes/         ← Cold Truth gap analysis
│   ├── research_and_validation/       ← 8 discoveries, UIBIC tests, validation reports
│   └── archive/                       ← Superseded documents (declared)
│
├── src/
│   ├── theory_and_math/
│   │   ├── SYN_REGISTRY.md            ← Master formula index (21 entries)
│   │   ├── axioms/                    ← SYN-01RA (Necessity), SYN-01RB (Instantiation)
│   │   ├── syn_formulas/              ← SYN-02R through SYN-12 (11 formulas)
│   │   ├── master_equation/           ← SYN-13 + SYN-13-ND (dimensionless)
│   │   └── upgrades/                  ← UP-01 through UP-06
│   │
│   ├── empirical_design/
│   │   ├── protocols/                 ← 5 Paper protocols + EEG protocol
│   │   ├── clinical_trials/           ← Psilocybin RCT + CSD psychiatric PoC
│   │   └── codex_he/                  ← Hebrew translated codices (PDF)
│   │
│   └── computational_models/
│       ├── integrations/              ← cosmic-ib ↔ FCT bridge
│       ├── python/                    ← Phase transition EEG pipeline (FOOOF/mTRF)
│       ├── jsx/                       ← Interactive simulators (6D ODE, dashboards)
│       ├── html/                      ← Gantt roadmap + upgrade priority matrix
│       └── cosmic-ib-dashboard/       ← [Git Submodule] https://github.com/LiranOG/cosmic-ib-dashboard
│
└── scripts/
    ├── build_fct_repo.py              ← Repository structure builder
    ├── copy_philosophical_origins.py  ← Philosophical core file copier
    └── init_repo.sh                   ← Git initialization script
```

---

## The Philosophical Origins

> *Before there were equations, there was wonder — and before wonder, there was the courage to ask the questions that most people spend their entire lives avoiding.*

### Why This Theory Exists

The Fractal Cosmopsychism Theory did not emerge from a laboratory. It did not begin with a 6-dimensional ODE system, nor with a grant proposal, nor with a literature review. It began in the most ancient and most terrifying place a human mind can go: **the space where every belief you hold about reality is placed on trial, and you accept the possibility that none of them will survive.**

The FCT was born from the deliberate act of asking the hardest, most destabilizing questions that a person can ask — the questions that challenge faith in the universe, in God, in the nature of existence itself, in everything that lies beyond the reach of our instruments and comprehension. *What is consciousness? How does it arise? Why does it arise? What exists beyond the observable universe? What are we incapable of perceiving, and how much of reality is hidden from us by the very architecture of our own perception?*

These are not questions that current science can answer. They are not questions that any technology on the horizon can answer. And that is precisely what makes them essential.

### The Limits of Human Knowledge

We live in an era of extraordinary scientific achievement, and it would be dishonest to deny the staggering depth of what humanity has uncovered. On Earth — within the boundaries of our planet, within the reach of our instruments and experiments — we have arguably attained a 70–80% understanding of the systems that govern our immediate physical world. We have mapped genomes, split atoms, modeled climate systems, decoded neural circuits. In domains where we can perform controlled experiments and make direct measurements, our mastery is genuinely phenomenal.

But the moment we extend our gaze beyond Earth — not merely to the observable universe, but to the totality of everything that exists, including what lies beyond the reach of any telescope or particle accelerator, beyond the cosmic microwave background, beyond the horizon of light itself — our knowledge becomes humbling. It is doubtful that humanity has crossed even the 20% threshold in understanding the universe as a whole. We are not merely ignorant of the answers; in most cases, we do not yet know how to formulate the right questions.

And at the center of this ignorance sits the deepest mystery of all: **consciousness**. We can map every synapse in a brain, trace every neurotransmitter cascade, build artificial networks that mimic pattern recognition — and yet we cannot explain *why* any of it produces the subjective experience of being alive. The so-called "hard problem" of consciousness is not a gap in our knowledge; it is a chasm that separates what we can measure from what we actually *are*.

### The Tyranny and the Gift of Perception

Most people do not fully grasp how profoundly their five senses shape — and constrain — every aspect of their experienced reality. This is, of course, self-evident in principle: our senses exist to mediate between us and the world. But the true depth of this dependence is staggering, and almost no one pauses to contemplate it.

Consider: the slightest variation in how the human eye processes wavelengths of light, or in how the auditory cortex decodes a musical phrase, would produce an *entirely different subjective universe*. The same symphony, the same sunset, the same embrace — all would register as fundamentally alien experiences. Our senses do not passively record reality; they *construct* it, actively filtering an incomprehensibly vast ocean of information down to the narrow stream that we call "experience."

This is not merely a philosophical curiosity. It is a direct parallel to the fine-tuning problem in physics. If any single fundamental constant — the gravitational constant, the fine-structure constant, the mass ratio of protons to electrons — were altered by even 0.0001, the universe as we know it would cease to exist. There would be no atoms, no stars, no chemistry, no life. Reality itself is balanced on an unimaginably precise knife-edge, and so is consciousness. The FCT takes this parallel seriously: **if both physical law and subjective experience are exquisitely sensitive to infinitesimal variations, then perhaps they are expressions of the same underlying information-compression architecture.**

### The Comfort Zone and the Fear of Self-Dissolution

This theory was born from the recognition that the single greatest barrier to understanding reality is not technological — it is psychological. It is the comfort zone.

Human beings are profoundly reluctant to question their foundational beliefs. This reluctance is not weakness; it is a survival mechanism. Our beliefs about who we are, what the universe is, what gives life meaning — these form the psychological bedrock upon which identity is built. To question them is to risk the most terrifying experience a conscious being can face: **the dissolution of the self.** Not physical death, but something that feels, in many ways, worse — the loss of the person you believe yourself to be, the collapse of your conceptual anchor, the free-fall into a reality that has no guardrails.

This is why people remain within their comfort zones in every domain of life — not just intellectually, but physically, emotionally, spiritually. The same mechanism that prevents a person from changing their diet or starting a difficult training regimen is the same mechanism that prevents them from questioning their deepest metaphysical assumptions. It is all one system: **the conservation of identity at the expense of growth.** And it is this mechanism that explains why many people genuinely believe that human beings cannot fundamentally change — because within the confines of the comfort zone, they are correct. Radical transformation requires radical questioning, and radical questioning requires the willingness to let everything you think you know burn to the ground.

### Religion as the Mountain — and the Invitation to Fly

In the framework that gave rise to the FCT, religion is understood not as error, but as **architecture** — a magnificent, necessary, and ultimately transitional structure. Imagine the IS-NESS — the totality of consciousness, the universe in its absolute fullness — as an infinite ocean of light. It simply *is*. It has no time, no structure, no narrative. In its perfection, it is also utterly featureless. And so, in order to *experience itself*, it shatters — crystallizing into billions of fragments that form vast mountains rising from the void.

These mountains are the world's religions. Most of humanity lives in the valleys below, in darkness, having forgotten that they themselves are made of the ocean's water. Terrified of the chaos beyond the valley walls, they begin to climb the mountains along pre-marked trails — the commandments, the rituals, the laws, the liturgies. They grip the handrails with white knuckles. The structure gives them order, purpose, a sense of justice and protection. And there is nothing wrong with this. The trails are real. The mountains are real. The handrails save lives.

Then there are the mystics — the Kabbalists, the Sufis, the contemplatives — who climb all the way to the summit. From the peak, the air is thin and the view is extraordinary: they can see that all the mountains connect to the same geological substrate, that all religions point toward the same ineffable source. But here begins their tragedy: **they fall in love with the rock.** Instead of understanding that the mountain was always meant to be a *launch pad* — a temporary structure designed to give them enough altitude to leap into the infinite — they build bunkers on the summit and cling to the stone with their fingernails. They are convinced that this is the apex of existence. From their vantage point, anyone who leaves the mountain and abandons religion is falling into the abyss. They cannot comprehend that the air itself holds you — *because you are the air.*

**This is exactly where the FCT enters.** The theory does not propose a new trail up the mountain. It does not say "come to my mountain instead." It says: *the mountain is a hologram — a platform, not a destination.* The FCT attempts to build a personal launch tower — integrating physics, neuroscience, information theory, and the deep structure of brain systems we already understand — and connecting them to the metaphysical, to create a foundation strong enough for anyone to launch from it directly into the infinite.

### The Mission: Bridging the Physical and the Metaphysical

It must be stated with absolute clarity: **the FCT was not created to disprove, replace, or undermine empirical science.** The discoveries of physics, neuroscience, cosmology, and mathematics are among the greatest achievements of the human species, and this theory treats them with the utmost respect. Every formula in the SYN registry is built *on top of* established science, not against it.

What the FCT *does* attempt is something that mainstream science deliberately avoids and that religion claims exclusive authority over: **building a rigorous bridge between the physical and the metaphysical, between measurement and meaning, between the neural systems we can map in a laboratory and the vast cosmic architecture that no instrument can reach.**

The universe, as this theory models it, is a system of systems of systems — complexity nested within complexity nested within complexity, at every scale from the subatomic to the supergalactic. Every system is an inseparable component of the system above it, and every system contains within it systems of still greater intricacy. Everything influences everything. Every action, every thought, every quantum fluctuation propagates through the web of interdependence. The degree of influence varies, but the *fact* of influence is universal. This is not poetic language; it is the core structural claim of the FCT, formalized in the Master Equation.

Are some of the theory's predictions ambitious — perhaps even overreaching? Almost certainly. But the fundamental conviction behind the model is this: the universe is composed of a complexity so profound that humanity will *never* understand it in its totality — not with any amount of computing power, not with any number of minds, not with any conceivable instrument. What *is* possible, however, is to understand enough individual systems deeply enough, across enough domains, and to think far enough outside the conventional boundaries of each discipline, that the pieces begin to connect into a coherent picture — a picture that does not require 100% knowledge of everything, but does require the willingness to question 100% of what you think you know.

### The Real Purpose

The ultimate goal of the FCT is not the theory itself. The mathematical framework, the SYN formulas, the Master Equation — these are tools, not destinations.

**The real purpose is to encourage human beings to leave their comfort zones.** To explore the domains that fascinate them most deeply but frighten them most intensely. To ask the questions that destabilize their entire worldview. To practice radical skepticism — not as nihilism, but as the highest form of intellectual self-care. Skepticism is not the enemy of faith; it is the conscience of consciousness. It is the internal audit that prevents stagnation. The moment you stop questioning your own beliefs, you sever the path to extraordinary growth. You can still grow — but only within the narrow dimensions that the comfort zone permits. The dramatic, 180-degree transformations that most people believe are impossible become impossible precisely *because* those people refuse to question the assumptions that make such change feel impossible in the first place.

**Doubt everything. Including this model. Including your own certainty. Especially your own certainty.** That is not a threat to identity — it is the only doorway to becoming something greater than who you currently believe yourself to be.

---

> The **original philosophical documents** — the raw whitepaper, early PDFs, Hebrew conceptual sketches, and unstructured idea collections — are preserved in their untouched form in [`docs/original_philosophical_core/`](docs/original_philosophical_core/). These files predate the entire SYN formalization and contain the pure metaphysical vision that seeded every formula, every protocol, and every prediction in this repository.
>
> → **[Read the Foundational Archive](docs/original_philosophical_core/README_PHILOSOPHY.md)**

---

## The Master Equation (SYN-13)

The complete FCT dynamics are captured in a 6-dimensional coupled ODE system:

$$\frac{d\kappa}{d\tau} = a\frac{\zeta}{\Phi} + \varepsilon_{\text{species}} - \frac{\omega \cdot \kappa}{\kappa_{\text{res}}}$$

$$\frac{d\Phi}{d\tau} = m_\Phi \cdot \eta(\Phi, \zeta) \cdot W - s_\Phi \cdot \Phi$$

$$\frac{d\zeta}{d\tau} = g \cdot \zeta - m_\zeta \cdot \eta(\Phi, \zeta)$$

$$\frac{d\omega}{d\tau} = m_\omega \cdot \eta(\Phi, \zeta) \cdot W \cdot \Theta(\kappa - \kappa^*)$$

$$\frac{dW}{d\tau} = \alpha \cdot W(1-W)\left[\eta(\Phi, \zeta) - c \cdot \frac{\zeta}{\Phi}\right]$$

$$\frac{d\beta}{d\tau} = -m_\beta \cdot \omega \cdot \Theta\left(\Psi - \Psi_c^{(n)}\right)$$

where $\eta(\Phi, \zeta) = \eta_0(1 - e^{-\Phi/\Phi_c})e^{-\zeta/\zeta_c}$ is the IB efficiency function.

An interactive RK4 simulator is available at [`src/computational_models/jsx/SYN13_simulation.jsx`](src/computational_models/jsx/SYN13_simulation.jsx).

---

## The Empirical Engine

### COSMIC-IB-DASHBOARD — SDSS Empirical Pipeline

A **Python/Streamlit** analysis pipeline processing SDSS DR18 spectroscopic data to compute cosmic-scale IB efficiency $\eta_{\text{IB}}$. Tests the UIBIC at cosmological scales using galaxy density fields, cluster abundances, and Fisher Information matrices.

**Current result:** $\eta_{\text{IB}} = 0.0045$ — **93× below the prediction of 0.42** — the honest baseline for Paper V.

→ See [`src/computational_models/integrations/INTEGRATION_cosmic_ib_dashboard.md`](src/computational_models/integrations/INTEGRATION_cosmic_ib_dashboard.md)

---

## Retroactive Validations

Four predictions have existing support in the literature:

| Prediction | Source Data | Finding | FCT Criterion | Status |
|-----------|-----------|---------|---------------|--------|
| $\sigma(\eta_{\text{IB}}) < 0.08$ | Chalk et al. (2018) | $\sigma = 0.055$ | $< 0.08$ | ✅ **Met** |
| CSD exponent $\nu \approx 0.5$ | van de Leemput (2014) | $\hat{\nu} \approx 0.55$ | $\in [0.3, 0.7]$ | ✅ **Consistent** |
| Post-mortem complexity surge | Borjigin (2013), Xu (2023) | Gamma surge confirmed | Non-monotone $C_{LZ}$ | ✅ **Multi-study** |
| IB–RG equivalence | Kline (2025, UChicago) | Formal proof | Mathematical identity | ✅ **Proven** |

---

## Getting Started

> 📖 **Full A-Z setup guide:** See **[INSTALLATION_GUIDE.md](INSTALLATION_GUIDE.md)**
>
> Covers **Windows** (PowerShell · WSL · Node.js) · **Linux** (Ubuntu · Fedora · Arch) · **macOS** (Homebrew · venv · Node.js)
> 
> Includes detailed troubleshooting, platform-specific Q&A, and component deep dives.

### Quick Start — SYN-13 Interactive Simulator

> ⚠️ **Vite 8.x behaviour:** After scaffolding, Vite automatically installs dependencies **and launches the dev server**. This is expected — the steps below account for it.

**Windows PowerShell**
```powershell
# 1. Clone the repository
git clone --depth=1 https://github.com/LiranOG/Fractal-Cosmopsychism-Theory.git
cd Fractal-Cosmopsychism-Theory

# 2. Scaffold the React app.
#    Vite will scaffold, install, and START the dev server automatically.
#    Wait until you see "VITE ready in ... ms", then press CTRL+C to stop it.
#    (If prompted "Terminate batch job?" type Y and press Enter)
npx -y create-vite@latest fct-sim --template react

# 3. Copy the FCT simulator — run from the repo root, NOT from inside fct-sim!
Copy-Item "src\computational_models\jsx\SYN13_simulation.jsx" -Destination "fct-sim\src\App.jsx" -Force

# 4. Enter the app folder, install recharts, and launch
cd fct-sim
npm install recharts
npm run dev
# → Open http://localhost:5173 in your browser
```

**Linux / macOS / WSL**
```bash
# 1. Clone
git clone --depth=1 https://github.com/LiranOG/Fractal-Cosmopsychism-Theory.git
cd Fractal-Cosmopsychism-Theory

# 2. Scaffold (Vite auto-starts the server — press CTRL+C when you see "VITE ready")
npx -y create-vite@latest fct-sim --template react

# 3. Copy the FCT simulator (from repo root!)
cp src/computational_models/jsx/SYN13_simulation.jsx fct-sim/src/App.jsx

# 4. Launch
cd fct-sim
npm install recharts
npm run dev
# → Open http://localhost:5173
```

### Component URLs

| Component | URL | Started by |
|-----------|-----|----------|
| SYN-13 ODE Simulator | http://localhost:5173 | `npm run dev` in `fct-sim/` |
| Validation Dashboard | http://localhost:5174 | `npm run dev` in `fct-validation/` |
| Cosmic IB Dashboard | http://localhost:8501 | `streamlit run app.py` |
| HTML Roadmap / Matrix | Open directly in browser | Double-click `.html` files |

---

## Citation

If you use the FCT framework in academic work, please cite:

```bibtex
@misc{fct2026,
  title   = {Fractal Cosmopsychism Theory: A Formal Mathematical Framework
             for Consciousness Across Scales},
  author  = {Liran O.G.},
  year    = {2026},
  url     = {https://github.com/LiranOG/Fractal-Cosmopsychism-Theory},
  note    = {Repository version 1.0. Pre-registration pending.}
}
```

---

## License

This repository operates under a **Dual-License Architecture** that precisely matches the nature of each asset it contains. Read carefully before using or adapting any material.

### ⚖️ License Matrix

| Asset Type | Examples | License | You CAN | You CANNOT |
|---|---|---|---|---|
| **Source Code** | `.py`, `.jsx`, `.js`, `.sh`, `.html` files authored by Liran O.G. | [![MIT](https://img.shields.io/badge/MIT-0277BD?style=flat-square)](LICENSE) | Use, copy, modify, distribute, sublicense, sell | — |
| **Academic & Theoretical Works** | SYN formulas, axioms, protocols, whitepapers, glossary, philosophical docs (`.md`, `.pdf`) | [![CC BY-NC-ND 4.0](https://img.shields.io/badge/CC%20BY--NC--ND%204.0-EF5350?style=flat-square)](https://creativecommons.org/licenses/by-nc-nd/4.0/) | Share unmodified copies with attribution, cite in academic work | Use commercially, publish derivatives, remove attribution |

### 📋 Attribution Requirement (CC BY-NC-ND 4.0)

When citing or sharing FCT theoretical materials, use:

```
Liran O.G., "Fractal Cosmopsychism Theory: A Formal Mathematical Framework
for Consciousness Across Scales" (2026). https://github.com/LiranOG/Fractal-Cosmopsychism-Theory
```

→ Full license terms, copyright statement, and submodule boundary rules: **[LICENSE](LICENSE)** · **[LEGAL.md](LEGAL.md)**

---

<p align="center">
  <em>Built with epistemological discipline. Every claim classified. Every limit declared.</em>
</p>
