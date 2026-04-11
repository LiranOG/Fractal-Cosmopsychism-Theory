# UP-05: Epistemic Taxonomy Mandate — Formal Tier Definitions and X-Proxy Declaration
> **Path:** `src/empirical_protocols/upgrades/UP_05_epistemic_taxonomy_mandate.md`
> **Upgrade ID:** UP-05
> **Priority:** 🔴 Critical — structural integrity of all publications
> **Cost:** $0
> **Timeline:** Immediate (one-time setup, permanent enforcement)
> **Source:** Complete Upgrade Protocol v3.0 (Upgrade 05) + Critique Response (all fixes)
> **Status:** ✅ Production-ready — mandatory for all future publications

---

## 1. The Taxonomic Imperative

The FCT contains claims spanning four epistemological tiers — from analytic truths to permanently unfalsifiable metaphysics. Conflating these tiers is the model's greatest reputational risk. A single paper that treats a Tier D claim as Tier B evidence will discredit the entire research program.

**UP-05 establishes the formal definitions, labeling rules, and enforcement mechanisms for the four-tier taxonomy.**

---

## 2. Formal Tier Definitions

### Tier A — Analytic / Axiomatic

| Property | Definition |
|----------|-----------|
| **Epistemic status** | True by logical necessity within the axiom system |
| **Empirical content** | Zero — these are definitions and derivations |
| **Falsifiability** | Cannot be falsified empirically; can only be rejected by rejecting the axioms |
| **Examples** | SYN-01R-A (logical necessity proof), non-recurrence theorem (SYN-11 proof, *qua* mathematics) |
| **Required declaration** | "This result is an analytic truth within the FCT axiom system. It does not constitute an empirical claim about the physical world." |

### Tier B — Testable Formal Analog

| Property | Definition |
|----------|-----------|
| **Epistemic status** | A mathematically established framework (IIT, IB, Landau theory, etc.) applied as an analog model for a metaphysical claim |
| **Empirical content** | Generates at least one pre-registerable differential prediction that no existing model makes |
| **Falsifiability** | Yes — the prediction can fail |
| **Examples** | SYN-02R ($\eta_{IB}$ ranking), SYN-08 (critical slowing down), SYN-10 ($W$ bistability), SYN-13 (Master Equation as analog model) |
| **Required declaration** | "The mathematical framework is Tier B; its application to [consciousness/karma/etc.] is a formal analog, not a derivation from first principles." |

### Tier C — Structural Corollary

| Property | Definition |
|----------|-----------|
| **Epistemic status** | A logical consequence of Tier B formulas that does not generate independent empirical predictions |
| **Empirical content** | Indirect — if the parent Tier B formula is validated, the corollary gains support; if it fails, the corollary falls |
| **Falsifiability** | Not independently falsifiable |
| **Examples** | SYN-07 autopoietic coherence (consequence of SYN-02R + SYN-05), stage attractor meta-stability (consequence of SYN-13) |
| **Required declaration** | "This result follows from [parent formula] and does not generate independent testable predictions." |

### Tier D — Metaphysical Speculation / Permanently Untestable

| Property | Definition |
|----------|-----------|
| **Epistemic status** | A metaphysical claim that cannot be tested by any conceivable experiment |
| **Empirical content** | Zero |
| **Falsifiability** | No |
| **Examples** | SYN-11 (multiversal iteration), SYN-12 (Fractal Divinity), IS-NESS self-enrichment, the identification of $p^*_{\text{pop}}$ with $p^*_{\text{IS-NESS}}$ |
| **Required declaration** | "This claim is permanently untestable and is retained for formal completeness of the metaphysical architecture. It generates no empirical predictions." |

---

## 3. The X-Proxy Declaration (Mandatory in All Publications)

### 3.1 The Rule

Every measured variable in an FCT study is a **proxy** for a theoretical construct. The mapping between proxy and construct is non-trivial and potentially incorrect. The X-Proxy declaration makes this explicit.

### 3.2 Template

The following must appear in the Methods section of every FCT publication:

> **Proxy Mapping Table**
>
> | Theoretical Variable | Proxy Measure | Mapping Basis | Proxy Tier |
> |---------------------|--------------|---------------|-----------|
> | $\eta_{IB}$ (IB efficiency) | EEG IB slope at operating point | SYN-02R, UP-01 | B |
> | $W(t)$ (free will) | $R^2_{\text{TRF}} / (R^2_{\text{TRF}} + R^2_{\text{AR}})$ | SYN-10, UP-02 | B |
> | $\zeta$ (veil thickness) | Lempel-Ziv complexity | SYN-02R | B |
> | $\kappa$ (karmic load) | $\text{KL}[q \| p^*_{\text{pop}}]$ | SYN-05, UP-01 | B |
> | $p^*$ (IS-NESS baseline) | $p^*_{\text{pop}}$ (LEMON Gaussian) | UP-01 | **D** (mapping) |
>
> "All measured variables are empirical proxies for theoretical constructs. The proxy–construct mapping is established by convergent validity analyses (UP-01, Table 1) and may be revised as measurement technology improves. Results are conditional on proxy validity."

### 3.3 Enforcement

- **Journal submissions:** The X-Proxy Table is a required element. Reviewers should be informed that the table is part of the model's pre-registered transparency protocol.
- **Conference presentations:** A simplified version (3 columns: Variable, Proxy, Tier) must appear on at least one slide.
- **Internal lab meetings:** Any new result must first be presented with explicit proxy qualification before being discussed in theoretical terms.

---

## 4. The Tier Contamination Rules

### 4.1 Upward Contamination (Forbidden)

> **Rule:** A Tier D interpretation may never be presented as support for a Tier B prediction. The tiers are firewalled.

**Example of violation:** "The $\eta_{IB}$ ranking result (Tier B) supports the claim that IS-NESS processes reality through hierarchical IB compression (Tier D)."

**Correct framing:** "The $\eta_{IB}$ ranking result (Tier B) is consistent with the IB efficiency framework as a model of consciousness depth. Its relationship to the Tier D IS-NESS construct is not addressed by this experiment."

### 4.2 Downward Propagation (Allowed with Qualification)

> **Rule:** A validated Tier B formula increases the plausibility (but not the proof) of its Tier D interpretation. This must be stated explicitly.

**Template:** "Validation of [Tier B prediction] increases the plausibility of the broader FCT framework but does not constitute evidence for its Tier D metaphysical commitments."

### 4.3 Tier Labeling in Paper Abstracts

Every abstract must state the tier of the primary finding:

- ✅ "We test a **Tier B prediction** of the FCT: that $\eta_{IB}$ ranks monotonically across consciousness states."
- ❌ "We demonstrate that IB efficiency reflects the depth of IS-NESS processing across consciousness states."

---

## 5. Publication Checklist

Before submitting any FCT-related manuscript, verify:

- [ ] Every claim is labeled with its tier (A/B/C/D)
- [ ] X-Proxy Table is present in Methods
- [ ] Philosophical demotion statement (UP-01, §5) is included
- [ ] No upward tier contamination in Discussion
- [ ] Falsification criterion is pre-registered
- [ ] Abstract states the tier of the primary finding
- [ ] Cold Truth section (or equivalent "Limitations") addresses proxy validity
- [ ] All analysis code is committed to GitHub with pre-data timestamp

---

## 6. Cold Truth / Implementation Limits

**Problem 1 — The taxonomy is a self-imposed constraint that competitors will not adopt.** Other consciousness theories (IIT, GNW, HOT) do not use tier labeling. This means FCT papers will appear more cautious and less "exciting" than competitors, potentially reducing citation impact.

**Problem 2 — The Tier B/C boundary is sometimes ambiguous.** Does a formula that generates a prediction *only when combined* with another formula count as Tier B or C? The rule of thumb: if the prediction can be falsified independently of any other formula, it is Tier B. If it requires a prior formula to be true, it is Tier C.

**Problem 3 — Reviewers may not understand the taxonomy.** A supplementary "Guide to the FCT Epistemic Taxonomy" should be included with every first-round submission, explaining the tier system in language accessible to non-FCT specialists.

---

*Document version: 0.1.0 | Last updated: 2026-03-29*
*Source: Complete Upgrade Protocol v3.0 (Upgrade 05) + Critique Response*
*Cross-references: All SYN formulas, `UP_03_pre_registration_architecture.md`*
