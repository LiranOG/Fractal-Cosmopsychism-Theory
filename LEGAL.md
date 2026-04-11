# LEGAL.md — Intellectual Property & Submodule Boundary Notice

**Project:** Fractal Cosmopsychism Theory (FCT)  
**Author / Copyright Holder:** Liran O.G.  
**Effective Date:** 2026-04-01  
**Version:** 1.0  

---

## 1. Purpose of This Document

This document serves as the formal legal notice and boundary specification for
the Fractal Cosmopsychism Theory repository. It supplements the `LICENSE` file
with a detailed analysis of:

1. The dual-licensing structure (MIT + CC BY-NC-ND 4.0)
2. The scope of copyright protection for theoretical works
3. Contributor IP assignment terms

This document is intended to be enforceable to the maximum extent permitted by
applicable copyright law.

---

## 2. Copyright Statement

All original content in this repository — including but not limited to source
code, mathematical formulas, theoretical frameworks, empirical protocols,
clinical trial designs, philosophical writings, and documentation — is the
exclusive intellectual property of **Liran O.G.**, unless explicitly attributed
to a third party.

```
Copyright (c) 2026 Liran O.G. All rights reserved.
```

The 21 SYN formulas, the UIBIC conjecture, the epistemic tier system, the
Master Equation (SYN-13 and SYN-13-ND), and the FCT philosophical framework
are original works of authorship protected by copyright in all jurisdictions
that are signatories to the Berne Convention (179+ countries), including the
United States (17 U.S.C. § 102), the European Union (Directive 2001/29/EC),
and Israel.

Mathematical notation as expressed in this repository (variable definitions,
ODE system formulations, formula derivations) constitutes a copyrightable
literary/scientific work. The underlying *ideas* themselves are not copyrightable;
the specific expression, selection, and arrangement of those ideas is.

---

## 3. External Engine Coupling Architecture

All external computational engines referenced by this repository are interacted with exclusively through arm's-length interface patterns: reading output files (HDF5, CSV, VTK) via standard I/O libraries, subprocess invocation passing parameters as command-line arguments, or network sockets where the engine acts as a compute service. No FCT source file statically links to, dynamically links to, or source-includes any external engine code. This architecture is maintained to preserve the integrity of the repository's MIT license and to avoid any copyleft propagation.

---

## 4. Copyright Protection of Mathematical & Theoretical Works

### 4.1 Are Equations Copyrightable?

Mathematical equations *as abstract ideas* are not copyrightable (Baker v.
Selden, 101 U.S. 99, 1879). However, the **specific textual expression**,
derivation narrative, variable definitions, and systematic arrangement of
equations in a scientific document is copyrightable as a literary work.

The FCT theoretical corpus — the SYN formula documents, the Master Equation
derivation, the axiom definitions, the tier classification system, and the
empirical protocol specifications — constitutes original literary and scientific
expression. Reproducing these documents verbatim, adapting them without
attribution, or using them as the structural basis of a competing theory
framework without permission constitutes copyright infringement.

### 4.2 Why CC BY-NC-ND 4.0 (Not CC BY-SA 4.0)

The theoretical documents are licensed under **CC BY-NC-ND 4.0** rather than
CC BY-SA 4.0 for the following strategically important reasons:

| Criterion | CC BY-NC-ND 4.0 (Chosen) | CC BY-SA 4.0 (Alternative) |
|---|---|---|
| **Commercial use** | Prohibited | Permitted |
| **Derivatives** | Prohibited without permission | Permitted if same license applied |
| **Viral effect** | None — restrictive, not propagating | SA clause propagates to derivatives |
| **Theory protection** | Prevents someone publishing a "fork" of FCT theory | Could allow competing frameworks to absorb FCT claims legally |
| **Academic citation** | Permitted (non-commercial, non-derived) | Permitted |
| **Best for pre-publication theory** | ✅ Yes — maintains exclusivity | ❌ No — dilutes authorial control |

**Key reasoning for ND (No Derivatives):** The FCT framework is pre-publication.
The mathematical formulas, epistemological tier system, and UIBIC conjecture are
the basis of planned journal submissions. If derivatives were permitted, a third
party could publish a modified version of the theory and establish prior art
or attribution competing with the original author. ND prevents this.

**Key reasoning for NC (Non-Commercial):** The clinical trial protocols and
empirical designs represent significant intellectual investment. NC prevents
commercial entities from directly monetizing the FCT framework without a
separate commercial license agreement with the author.

### 4.3 What Academic Users MAY Do

- Cite, quote (fair use / fair dealing), and reference FCT documents in their
  own academic work, provided attribution is given.
- Download and redistribute unmodified copies of this repository for research
  and educational purposes.
- Implement the SYN formulas in their own independent code (the *idea* is not
  copyrightable; a clean-room implementation is permitted).
- Critique, review, or peer-review the theory.

### 4.4 What Users MAY NOT Do

- Publish modified versions of FCT documents without written permission.
- Use FCT theoretical materials in commercial products or services.
- Remove or alter copyright notices from any FCT document.
- Use the FCT name, logo, or branding in a way that implies endorsement.
- Incorporate FCT protocol documents into commercial grant applications or
  clinical trial registrations without a commercial license.

---

## 5. NOTICE: Third-Party Dependencies Within FCT Source Code

The FCT original source code (MIT-licensed) uses the following third-party
open-source libraries. Their licenses are compatible with MIT and do not affect
the dual-licensing structure:

| Library | Version | License | Used In |
|---|---|---|---|
| React | ≥ 18 | MIT | JSX ODE simulators |
| Recharts | ≥ 2 | MIT | JSX dashboards |
| NumPy | ≥ 1.24 | BSD-3-Clause | Python pipelines |
| SciPy | ≥ 1.10 | BSD-3-Clause | Python ODE solvers |
| Streamlit | ≥ 1.28 | Apache-2.0 | Cosmic IB Dashboard |
| FOOOF | ≥ 1.0 | Apache-2.0 | EEG analysis |
| Astropy | ≥ 5.3 | BSD-3-Clause | Cosmic data pipeline |
| scikit-learn | ≥ 1.3 | BSD-3-Clause | ML components |

All listed licenses are permissive and do not impose copyleft or commercial
restrictions on the FCT MIT-licensed code.

---

## 6. No Warranty

THIS REPOSITORY IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED. THE THEORETICAL FRAMEWORKS, FORMULAS, AND EMPIRICAL PROTOCOLS
CONTAINED HEREIN ARE PRE-PUBLICATION RESEARCH MATERIALS. THEY HAVE NOT BEEN
PEER-REVIEWED OR VALIDATED IN PROSPECTIVE CLINICAL TRIALS. NOTHING IN THIS
REPOSITORY CONSTITUTES MEDICAL ADVICE, CLINICAL GUIDANCE, OR REGULATORY
COMPLIANCE DOCUMENTATION.

---

## 7. Contact & Commercial Licensing

For permissions beyond the scope of the CC BY-NC-ND 4.0 license (including
commercial use, derivative works, or institutional licensing), contact:

**Liran O.G.**  
GitHub: https://github.com/LiranOG  
Repository: https://github.com/LiranOG/Fractal-Cosmopsychism-Theory  

---

*This document was last updated: 2026-04-01. It supersedes any prior informal
license statements in README.md or other repository files.*
