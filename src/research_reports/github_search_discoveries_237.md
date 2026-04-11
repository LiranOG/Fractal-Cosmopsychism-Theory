# GitHub Search Discoveries — Computational Resources Audit (237 Results)
> **Path:** `src/research_reports/github_search_discoveries_237.md`
> **Source:** RR-10/RR-11 (GitHub Searches: 237 Discoveries + 14,568 Resources)
> **Scope:** Open-source tools, datasets, and implementations relevant to FCT empirical program
> **Status:** ✅ Curated resource registry

---

## 1. Purpose

Systematic audit of GitHub repositories providing tools, datasets, and implementations directly relevant to the FCT empirical pipeline. Filtered from 237 search results and cross-referenced with the 5 paper protocols.

---

## 2. Tier 1 — Directly Usable Tools (Immediate Integration)

### 2.1 Information Bottleneck & Mutual Information

| Repository | Stars | Relevance | Papers |
|------------|-------|-----------|--------|
| `dit/dit` | ~400 | Discrete information theory (MI, KL, entropy) | Paper I, V |
| `gregversteeg/NPEET` | ~350 | Non-parametric MI estimation ($k$-NN) | Paper I, V |
| `google-deepmind/ib-compression` | ~200 | IB compression reference implementation | Paper I |
| `mzhmzh/mine-pytorch` | ~150 | MINE: Neural MI estimation | Paper V |

### 2.2 EEG Analysis & Complexity

| Repository | Stars | Relevance | Papers |
|------------|-------|-----------|--------|
| `mne-tools/mne-python` | ~2.5K | Full EEG/MEG/fNIRS analysis pipeline | All |
| `raphaelvallat/antropy` | ~400 | Entropy & complexity (LZ, spectral, permutation) | Paper I, II, III |
| `autoreject/autoreject` | ~200 | Automated artifact rejection for EEG | All EEG papers |
| `icLabel/ICLabel-python` | ~100 | Automated ICA component classification | All EEG papers |

### 2.3 Temporal Response Functions (TRF)

| Repository | Stars | Relevance | Papers |
|------------|-------|-----------|--------|
| `powerfulbean/mTRFpy` | ~50 | Python port of mTRF-Toolbox | Paper I, IV |
| `mne-tools/mne-python` (TRF module) | — | `mne.decoding.ReceptiveField` | Paper I, IV |

### 2.4 IIT / Consciousness Metrics

| Repository | Stars | Relevance | Papers |
|------------|-------|-----------|--------|
| `BIAPT/eeg-101-analysis` | ~100 | PCI (Perturbational Complexity Index) | Paper I |
| `matteogiusepperaffa/phi_estimation` | ~30 | $\Phi$ estimation for small networks | Paper V |

### 2.5 Cosmological Analysis

| Repository | Stars | Relevance | Papers |
|------------|-------|-----------|--------|
| `healpy/healpy` | ~400 | HEALPix sphere analysis | Paper V |
| `giotto-ai/giotto-tda` | ~800 | Topological Data Analysis (persistent homology) | Paper V |
| `scikit-tda/ripser` | ~500 | Fast persistent homology computation | Paper V |

---

## 3. Tier 2 — Methodological Resources (Reference/Validation)

### 3.1 Critical Slowing Down

| Repository | Stars | Relevance | Papers |
|------------|-------|-----------|--------|
| `earlywarningtoolbox/ewt` | ~100 | Early warning signals for critical transitions | Paper II |
| `spatial-efd` | ~50 | Spatial early warning signals | Paper II |

### 3.2 Ecological Momentary Assessment

| Repository | Stars | Relevance | Papers |
|------------|-------|-----------|--------|
| `ess-ebp/EMA-tools` | ~30 | EMA data processing pipelines | Paper III |
| `Lomb-Scargle` (astropy) | — | Unevenly-sampled periodogram | Paper III |

### 3.3 LLM Analysis

| Repository | Stars | Relevance | Papers |
|------------|-------|-----------|--------|
| `EleutherAI/lm-evaluation-harness` | ~5K | LLM evaluation infrastructure | POC-D |
| `TransformerLens` (Neel Nanda) | ~1.5K | Transformer interpretability | POC-D |

---

## 4. Tier 3 — Datasets (Public, Open Access)

| Dataset | Source | Size | Papers |
|---------|--------|------|--------|
| LEMON | MPI CBS Leipzig | 227 subjects, EEG + MRI | Paper I, UP-01, UP-06 |
| Christoff Mind-Wandering | OpenNeuro | 30 subjects, EEG + fMRI | UP-06 |
| Sleep-EDF | PhysioNet | 153 nights, PSG | UP-06 |
| MAHNOB-HCI | Imperial College | 27 subjects, EEG + physio | UP-06 |
| HCP S1200 | WashU | 1,206 subjects, fMRI + MEG | Paper I, V |
| SDSS DR18 | SDSS | 750K+ galaxies | Paper V |
| van de Leemput 2014 | PNAS Supplementary | 535 participants, daily mood | POC-C |
| AWARE II | Parnia Lab (request) | 567 cardiac arrest patients | POC-A |

---

## 5. Integration with `requirements.txt`

```
# Core FCT Pipeline Dependencies (pip install)
mne>=1.5.0
antropy>=0.1.4
scikit-learn>=1.3.0
scipy>=1.11.0
numpy>=1.24.0
fooof>=1.1.0        # or specparam>=1.0.0
statsmodels>=0.14.0
healpy>=1.16.0
giotto-tda>=0.6.0
dit>=1.5
```

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source: GitHub search (237 discoveries + 14,568 resources)*
