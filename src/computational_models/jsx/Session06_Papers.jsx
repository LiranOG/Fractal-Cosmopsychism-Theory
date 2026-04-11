import { useState } from "react";

const PAPERS = [
  {
    id: "P1",
    number: "Paper I",
    title: "Hierarchical IB Efficiency as a Scale-Invariant Signature of Conscious Processing",
    journal: "Nature Neuroscience",
    if_: "28.8",
    formula: "SYN-02R",
    tier: "B",
    n: 60,
    duration: "3 sessions × 4 states",
    color: "#3b82f6",
    tag: "FOUNDATIONAL",
    tagColor: "#1d4ed8",
    predictions: [
      { label: "P1: η_IB monotone ranking", detail: "FA-Med > EO-Rest > PROP > NREM", unique: "Not predicted by GWT (binary), IIT (Φ only), FEP (precision only)" },
      { label: "P2: Cross-scale invariance", detail: "|η_IB(sensory) - η_IB(neural)| < 0.05", unique: "No existing model predicts η_IB scale invariance" },
      { label: "P3: Veil thinning", detail: "r_s(ζ, practice hours) < -0.35, p < 0.01", unique: "Specific Hill-function form not predicted by criticality" },
    ],
    differentiator: "First graded, multi-scale consciousness measure with formal IB derivation",
    cold_truth: "X-proxy (MaxEnt ≠ IS-NESS) is declared but unresolvable. All η_IB values conditional on source quality.",
    enables: ["P2", "P3", "P5"],
    budget: "£280K",
    timeline: "18 months",
  },
  {
    id: "P2",
    number: "Paper II",
    title: "Critical Slowing Down Before Psychological Stage Transitions: Palliative Care & Silent Retreat",
    journal: "PNAS",
    if_: "12.4",
    formula: "SYN-08",
    tier: "B",
    n: 120,
    duration: "12 months (palliative) / 21 days (retreat)",
    color: "#8b5cf6",
    tag: "CLINICAL BREAKTHROUGH",
    tagColor: "#6d28d9",
    predictions: [
      { label: "CSD signature", detail: "τ_AC increases monotonically 4–6 wks pre-transition in >50% of participants", unique: "No existing model predicts CSD before psychological transformation" },
      { label: "Power law exponent", detail: "ν̂ ≈ 0.5 ± 0.2 (saddle-node, not Hopf)", unique: "Distinguishes saddle-node from Hopf — unique to SYN-08" },
      { label: "Post-transition reset", detail: "τ_AC drops ≤80% of peak within 2 weeks", unique: "Direction + timing prediction — falsifiable" },
    ],
    differentiator: "First CSD application to human developmental psychology — bridge between physics of tipping points and clinical transformation",
    cold_truth: "Transition definition via qualitative interview is vulnerable to expectation effects. Triple-blind adjudication mandatory.",
    enables: ["P3", "P4"],
    budget: "£420K",
    timeline: "24 months",
  },
  {
    id: "P3",
    number: "Paper III",
    title: "The Karmic Oscillator: Rumination Cycle Period as a Measure of Unresolved Psychological Tension",
    journal: "Translational Psychiatry",
    if_: "7.5",
    formula: "SYN-NEW-03",
    tier: "B",
    n: 120,
    duration: "42 days ESM + intervention RCT",
    color: "#10b981",
    tag: "CLINICAL TRANSLATIONAL",
    tagColor: "#065f46",
    predictions: [
      { label: "Power-law oscillation", detail: "T_osc ∝ κ_proxy^{-1/2}, β₁ ≈ 1.0 in log-log regression", unique: "Specific −1/2 exponent not predicted by Response Styles or Metacognitive Theory" },
      { label: "Lagged prediction", detail: "Previous week κ predicts T_osc: γ₁ < 0, p < 0.005", unique: "Causal temporal ordering — not a cross-sectional correlation" },
      { label: "Therapeutic resolution", detail: "CBT/EMDR: Δκ < −0.5 nats AND ΔT_osc > +2 hours", unique: "Dual prediction (frequency AND quality) from single mechanism" },
    ],
    differentiator: "First derivation of rumination dynamics from a Lagrangian principle — transforms psychiatry variable from content to dynamical system",
    cold_truth: "Harmonic oscillator assumes quadratic potential — real behavioral space is non-convex. Anharmonic sensitivity analysis pre-registered.",
    enables: ["P4"],
    budget: "£180K",
    timeline: "18 months",
  },
  {
    id: "P4",
    number: "Paper IV ★",
    title: "Psilocybin as a Pharmacological Probe of Free-Will Bistability: W(t) Predicts TRD Response — Double-Blind RCT",
    journal: "Nature Medicine",
    if_: "82.9",
    formula: "SYN-10 + UP-02",
    tier: "B",
    n: 120,
    duration: "14 weeks (screening to 12-wk follow-up)",
    color: "#ef4444",
    tag: "PRECISION MEDICINE",
    tagColor: "#991b1b",
    predictions: [
      { label: "Moderation interaction", detail: "β₃(W₀ × Treatment) > 0, p < 0.01 — low W₀ predicts greatest psilocybin benefit", unique: "Counterintuitive: MOST locked patients benefit most — opposite of neuroplasticity models" },
      { label: "Sigmoid inflection shift", detail: "Psilocybin shifts response sigmoid left by δW ≈ 0.20", unique: "Quantitative phase transition model — not a linear dose-response" },
      { label: "Mechanistic mediation", detail: "t_{W>w_s} mediates ≥30% of treatment×W₀ interaction", unique: "Mechanistic (not just predictive) — requires within-session EEG W(t)" },
    ],
    differentiator: "First mechanistic predictor of psilocybin response from pre-treatment EEG — precision medicine framework for psychedelic psychiatry",
    cold_truth: "Niacin placebo is imperfect; partial unblinding likely. w_s estimate has ±0.10 uncertainty. Schedule 1 logistics require specialist infrastructure.",
    enables: [],
    budget: "£1.8M",
    timeline: "36 months",
  },
  {
    id: "P5",
    number: "Paper V ★",
    title: "Universal IB Efficiency: Cross-Scale η_IB Invariance from Cortical Microcircuits to Cosmic Web Filaments",
    journal: "Physical Review Letters",
    if_: "9.1",
    formula: "SYN-03 + SYN-04",
    tier: "B",
    n: "6 datasets",
    duration: "Retrospective analysis (all open data)",
    color: "#f59e0b",
    tag: "PARADIGM SHIFT",
    tagColor: "#92400e",
    predictions: [
      { label: "Cross-scale η_IB convergence", detail: "σ(η_IB) < 0.08 within φ̂-bands across ≥3 of 5 bands", unique: "No existing model predicts information compression universality across 26 orders of magnitude" },
      { label: "Multifractal spectrum sharing", detail: "σ(Δα) < 0.10 within φ̂-band vs 0.25 across random systems", unique: "Geometric + information-theoretic universality simultaneously" },
      { label: "Cosmic IB efficiency", detail: "η_IB(CMB→galaxy→clusters) ≈ 0.42 ± 0.14 consistent with Stage II–III band", unique: "First application of IB to cosmological structure formation" },
    ],
    differentiator: "If confirmed: first empirical evidence for universal information compression constant spanning biological, social, and physical scales",
    cold_truth: "CMB→galaxy IB mapping is philosophically loaded. Gaussian IB invalid for non-Gaussian galaxy density fields. φ̂ at cosmic scale has no established operational definition.",
    enables: [],
    budget: "£95K",
    timeline: "12 months",
  },
];

const DEPENDENCY = {
  P1: { provides: "η_IB framework + veil measurement", needed_by: ["P2", "P3", "P5"] },
  P2: { provides: "Stage transitions are real phase transitions", needed_by: ["P3", "P4"] },
  P3: { provides: "Karmic dynamics are behaviorally observable", needed_by: ["P4"] },
  P4: { provides: "W(t) has causal pharmacological leverage", needed_by: [] },
  P5: { provides: "Cross-scale universality of η_IB", needed_by: [] },
};

function StatBadge({ label, value, color }) {
  return (
    <div style={{ background: "#1f2937", borderRadius: 4, padding: "3px 8px", display: "inline-flex", flexDirection: "column", alignItems: "center", minWidth: 60 }}>
      <span style={{ fontSize: 9, color: "#6b7280", letterSpacing: 0.5 }}>{label}</span>
      <span style={{ fontSize: 12, fontWeight: 700, color: color || "#e2e8f0" }}>{value}</span>
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState("P1");
  const [view, setView] = useState("overview");
  const paper = PAPERS.find(p => p.id === selected);

  const totalBudget = "£2.77M";
  const totalParticipants = "420 + 6 datasets";

  return (
    <div style={{ background: "#0f1117", minHeight: "100vh", color: "#e2e8f0", fontFamily: "system-ui, sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ background: "#1e1b4b", borderBottom: "1px solid #312e81", padding: "10px 20px" }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#c4b5fd" }}>
          THE FORMAL SYNTHESIZER — SESSION 06
        </div>
        <div style={{ fontSize: 10, color: "#6d6a9b", marginTop: 2 }}>
          Five Journal-Submission Papers · Fractal Cosmopsychism Empirical Program · Total Budget: {totalBudget}
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          {[
            { label: "TOTAL BUDGET", value: totalBudget, color: "#f59e0b" },
            { label: "PARTICIPANTS", value: totalParticipants, color: "#10b981" },
            { label: "PAPERS", value: "5", color: "#8b5cf6" },
            { label: "TARGET IF RANGE", value: "7.5 – 82.9", color: "#ef4444" },
          ].map(s => <StatBadge key={s.label} {...s} />)}
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        {/* Left: Paper list */}
        <div style={{ width: 200, background: "#111827", borderRight: "1px solid #1f2937", padding: 10, overflowY: "auto", flexShrink: 0 }}>
          <div style={{ fontSize: 9, color: "#4b5563", fontWeight: 700, letterSpacing: 1, marginBottom: 8, textTransform: "uppercase" }}>Papers</div>
          {PAPERS.map(p => (
            <div key={p.id} onClick={() => setSelected(p.id)}
              style={{ padding: "8px 10px", borderRadius: 6, marginBottom: 4, cursor: "pointer", background: selected === p.id ? `${p.color}18` : "transparent", border: `1px solid ${selected === p.id ? p.color : "#1f2937"}` }}>
              <div style={{ fontSize: 9, color: p.color, fontWeight: 700, marginBottom: 2 }}>{p.number}</div>
              <div style={{ fontSize: 9, color: selected === p.id ? "#e2e8f0" : "#6b7280", lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.title}</div>
              <div style={{ marginTop: 4, fontSize: 8, color: "#4b5563" }}>{p.journal}</div>
              <div style={{ marginTop: 3, display: "flex", gap: 4, alignItems: "center" }}>
                <span style={{ fontSize: 8, background: `${p.tagColor}44`, color: p.color, padding: "1px 5px", borderRadius: 3, fontWeight: 700 }}>{p.tag}</span>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 12, padding: 8, background: "#0f172a", borderRadius: 6, border: "1px solid #1f2937" }}>
            <div style={{ fontSize: 9, color: "#6b7280", fontWeight: 700, marginBottom: 6 }}>DEPENDENCY CHAIN</div>
            {Object.entries(DEPENDENCY).map(([pid, dep]) => (
              <div key={pid} style={{ marginBottom: 4 }}>
                <span style={{ fontSize: 8, color: PAPERS.find(p => p.id === pid)?.color, fontWeight: 700 }}>{pid}</span>
                {dep.needed_by.length > 0 && (
                  <span style={{ fontSize: 8, color: "#4b5563" }}> → {dep.needed_by.join(", ")}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, overflowY: "auto" }}>
          {/* Tab bar */}
          <div style={{ display: "flex", borderBottom: "1px solid #1f2937", background: "#111827", flexShrink: 0 }}>
            {["overview", "predictions", "methods", "cold_truth"].map(t => (
              <button key={t} onClick={() => setView(t)}
                style={{ padding: "7px 14px", fontSize: 10, fontWeight: 600, border: "none", background: "transparent", color: view === t ? paper.color : "#6b7280", borderBottom: view === t ? `2px solid ${paper.color}` : "2px solid transparent", cursor: "pointer", textTransform: "capitalize" }}>
                {t.replace("_", " ")}
              </button>
            ))}
          </div>

          <div style={{ padding: 20, flex: 1 }}>
            {/* OVERVIEW */}
            {view === "overview" && (
              <div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                  <div>
                    <div style={{ fontSize: 9, color: paper.color, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{paper.number} · {paper.formula} · Tier {paper.tier}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9", lineHeight: 1.4, marginBottom: 8 }}>{paper.title}</div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ background: `${paper.tagColor}33`, color: paper.color, padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>{paper.tag}</span>
                      <span style={{ background: "#1f2937", color: "#9ca3af", padding: "2px 8px", borderRadius: 4, fontSize: 10 }}>IF: {paper.if_}</span>
                      <span style={{ background: "#1f2937", color: "#9ca3af", padding: "2px 8px", borderRadius: 4, fontSize: 10 }}>n = {paper.n}</span>
                      <span style={{ background: "#1f2937", color: "#9ca3af", padding: "2px 8px", borderRadius: 4, fontSize: 10 }}>Budget: {paper.budget}</span>
                      <span style={{ background: "#1f2937", color: "#9ca3af", padding: "2px 8px", borderRadius: 4, fontSize: 10 }}>Timeline: {paper.timeline}</span>
                    </div>
                  </div>
                </div>

                <div style={{ background: "#111827", border: `1px solid ${paper.color}33`, borderRadius: 8, padding: 14, marginBottom: 12 }}>
                  <div style={{ fontSize: 10, color: paper.color, fontWeight: 700, marginBottom: 6 }}>UNIQUE CONTRIBUTION</div>
                  <div style={{ fontSize: 12, color: "#e2e8f0", lineHeight: 1.6 }}>{paper.differentiator}</div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
                  <div style={{ background: "#111827", border: "1px solid #1f2937", borderRadius: 6, padding: 12 }}>
                    <div style={{ fontSize: 10, color: "#6b7280", fontWeight: 700, marginBottom: 6 }}>TARGET JOURNAL</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#f1f5f9" }}>{paper.journal}</div>
                    <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>Impact Factor: {paper.if_}</div>
                  </div>
                  <div style={{ background: "#111827", border: "1px solid #1f2937", borderRadius: 6, padding: 12 }}>
                    <div style={{ fontSize: 10, color: "#6b7280", fontWeight: 700, marginBottom: 6 }}>ENABLES</div>
                    {DEPENDENCY[selected]?.needed_by.length > 0 ? (
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {DEPENDENCY[selected].needed_by.map(pid => {
                          const dep = PAPERS.find(p => p.id === pid);
                          return <span key={pid} style={{ background: `${dep.color}22`, color: dep.color, padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>{pid}: {dep.number}</span>;
                        })}
                      </div>
                    ) : <span style={{ fontSize: 11, color: "#4b5563" }}>Terminal paper — no dependencies</span>}
                  </div>
                </div>

                <div style={{ background: "#0f172a", border: "1px solid #1f2937", borderRadius: 6, padding: 12 }}>
                  <div style={{ fontSize: 10, color: "#6b7280", fontWeight: 700, marginBottom: 4 }}>PROVIDES TO RESEARCH PROGRAM</div>
                  <div style={{ fontSize: 12, color: "#9ca3af" }}>{DEPENDENCY[selected]?.provides}</div>
                </div>
              </div>
            )}

            {/* PREDICTIONS */}
            {view === "predictions" && (
              <div>
                <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 14 }}>Pre-registered predictions with differential specification (what no existing model predicts)</div>
                {paper.predictions.map((pred, i) => (
                  <div key={i} style={{ background: "#111827", border: `1px solid ${paper.color}44`, borderRadius: 8, padding: 14, marginBottom: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <span style={{ background: paper.color, color: "#000", borderRadius: 3, width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9" }}>{pred.label}</span>
                    </div>
                    <div style={{ background: "#0f172a", borderRadius: 4, padding: "6px 10px", marginBottom: 6, fontFamily: "monospace", fontSize: 11, color: "#93c5fd" }}>{pred.detail}</div>
                    <div style={{ fontSize: 11, color: "#6b7280" }}>
                      <span style={{ color: "#f59e0b", fontWeight: 600 }}>Unique: </span>{pred.unique}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* METHODS */}
            {view === "methods" && (
              <div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
                  {[
                    { label: "Sample", value: `n = ${paper.n}`, color: "#10b981" },
                    { label: "Duration", value: paper.duration, color: "#3b82f6" },
                    { label: "Budget", value: paper.budget, color: "#f59e0b" },
                    { label: "Formula", value: paper.formula, color: paper.color },
                    { label: "Tier", value: `Tier ${paper.tier}`, color: "#8b5cf6" },
                    { label: "Pre-registration", value: "OSF + CT.gov", color: "#ef4444" },
                  ].map(s => (
                    <div key={s.label} style={{ background: "#111827", border: "1px solid #1f2937", borderRadius: 6, padding: 10, textAlign: "center" }}>
                      <div style={{ fontSize: 9, color: "#4b5563", marginBottom: 2 }}>{s.label}</div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: s.color }}>{s.value}</div>
                    </div>
                  ))}
                </div>

                {paper.id === "P1" && (
                  <div style={{ background: "#111827", borderRadius: 8, border: "1px solid #1f2937", padding: 14, fontSize: 11, color: "#9ca3af", lineHeight: 1.8 }}>
                    <div style={{ color: "#3b82f6", fontWeight: 700, marginBottom: 8 }}>STUDY ARCHITECTURE</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>3 cohorts:</strong> Meditators (n=20, >1,000h), Propofol (n=20), Controls (n=20)</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>4 states:</strong> FA-Med · EO-Rest · Propofol-0.5µg · NREM sleep</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Modalities:</strong> 256-ch EEG + 3T fMRI concurrent</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>η_IB estimator:</strong> Gaussian IB (Chechik 2005) + KSG mutual info (Kraskov 2004)</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Primary stats:</strong> Repeated-measures ANOVA + Bonferroni-Holm correction</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Power:</strong> d=0.65, n=20/cohort → 84% at α=0.01</div>
                  </div>
                )}
                {paper.id === "P2" && (
                  <div style={{ background: "#111827", borderRadius: 8, border: "1px solid #1f2937", padding: 14, fontSize: 11, color: "#9ca3af", lineHeight: 1.8 }}>
                    <div style={{ color: "#8b5cf6", fontWeight: 700, marginBottom: 8 }}>STUDY ARCHITECTURE</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Cohort P:</strong> n=80 palliative care, weekly EEG, 12-month longitudinal</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Cohort R:</strong> n=40 silent retreat, daily EEG, 21-day intensive</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Key measure:</strong> τ_AC via AR(1) in rolling 3-week windows</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Transition definition:</strong> Lindahl et al. (2017) criteria, two blinded raters</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>CSD test:</strong> Mann-Kendall trend + power-law fit ν̂ ≈ 0.5</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Power:</strong> d=0.55, n=40 transitions → 82% at α=0.01</div>
                  </div>
                )}
                {paper.id === "P3" && (
                  <div style={{ background: "#111827", borderRadius: 8, border: "1px solid #1f2937", padding: 14, fontSize: 11, color: "#9ca3af", lineHeight: 1.8 }}>
                    <div style={{ color: "#10b981", fontWeight: 700, marginBottom: 8 }}>STUDY ARCHITECTURE</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>3 groups:</strong> MDD (n=40), PTSD (n=40), Healthy controls (n=40)</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>ESM protocol:</strong> 42 days × 8 probes/day (m-Path app)</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>T_osc estimation:</strong> Lomb-Scargle periodogram on rumination intensity time series</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>κ_proxy:</strong> KL[q_behavior || p_ref*] weekly from ESM behavioral categories</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Primary test:</strong> β₁ ≈ 1.0 in log(1/T²) ~ log(κ) regression</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>RCT sub-study:</strong> CBT vs EMDR vs waitlist, 1:1:1 randomization</div>
                  </div>
                )}
                {paper.id === "P4" && (
                  <div style={{ background: "#111827", borderRadius: 8, border: "1px solid #1f2937", padding: 14, fontSize: 11, color: "#9ca3af", lineHeight: 1.8 }}>
                    <div style={{ color: "#ef4444", fontWeight: 700, marginBottom: 8 }}>STUDY ARCHITECTURE</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Design:</strong> Phase IIb double-blind RCT, psilocybin 25mg vs niacin 250mg</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Population:</strong> n=120 TRD (≥2 failed antidepressant trials, HAMD-17 ≥18)</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Stratification:</strong> W₀ tertile × sex (2×3 factorial)</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Pre-treatment W₀:</strong> TRF EEG decomposition, 60-min recording</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Primary endpoint:</strong> β₃(W₀×Trt) in HAMD-17 change model, p&lt;0.01</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Follow-up:</strong> +24h, +1wk, +4wk, +12wk (HAMD-17 + EEG)</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Ethics:</strong> ClinicalTrials.gov + MHRA Sched-1 license required</div>
                  </div>
                )}
                {paper.id === "P5" && (
                  <div style={{ background: "#111827", borderRadius: 8, border: "1px solid #1f2937", padding: 14, fontSize: 11, color: "#9ca3af", lineHeight: 1.8 }}>
                    <div style={{ color: "#f59e0b", fontWeight: 700, marginBottom: 8 }}>STUDY ARCHITECTURE</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>6 scales:</strong> Subcortical (MICrONs) → EEG (LEMON) → fMRI (HCP) → Social (SNAP) → Ecology (GBIF) → Cosmic (SDSS DR18)</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Spatial range:</strong> 10⁻⁴ m to 10²⁶ m (30 orders of magnitude)</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>η_IB estimator:</strong> Gaussian IB (all scales); vine copula for non-Gaussian (cosmic)</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>φ̂ matching:</strong> Scale-appropriate IIT proxy; φ̂-band comparison</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>Primary test:</strong> σ(η_IB) &lt; 0.08 within φ̂-band vs σ_null ≈ 0.20</div>
                    <div>• <strong style={{ color: "#e2e8f0" }}>All data:</strong> Fully open-access, reproducibility package pre-deposited</div>
                  </div>
                )}
              </div>
            )}

            {/* COLD TRUTH */}
            {view === "cold_truth" && (
              <div>
                <div style={{ background: "#1c1009", border: "1px solid #92400e", borderRadius: 8, padding: 14, marginBottom: 14 }}>
                  <div style={{ fontSize: 11, color: "#f59e0b", fontWeight: 700, marginBottom: 6 }}>⚠ MANDATORY COLD TRUTH — TIER B LIMITATIONS</div>
                  <div style={{ fontSize: 12, color: "#fbbf24", lineHeight: 1.7 }}>{paper.cold_truth}</div>
                </div>

                <div style={{ background: "#111827", border: "1px solid #374151", borderRadius: 8, padding: 14 }}>
                  <div style={{ fontSize: 11, color: "#6b7280", fontWeight: 700, marginBottom: 8 }}>TIER CLASSIFICATION REMINDER</div>
                  <div style={{ fontSize: 11, color: "#9ca3af", lineHeight: 1.8 }}>
                    <div><span style={{ color: "#10b981", fontWeight: 700 }}>What this paper CAN claim:</span> Tier B analog generates testable corollary. Positive result is consistent with the model.</div>
                    <div><span style={{ color: "#ef4444", fontWeight: 700 }}>What this paper CANNOT claim:</span> Proof of IS-NESS, proof of karmic reincarnation, proof of consciousness as fundamental substrate.</div>
                    <div><span style={{ color: "#f59e0b", fontWeight: 700 }}>The X-proxy declaration (all papers):</span> All measurements are of observable proxies. The gap between proxy and IS-NESS (ε_species) is permanently undetermined and must be declared in every abstract.</div>
                    <div style={{ marginTop: 8, color: "#6b7280" }}>Formula: SYN-{paper.formula} · Tier {paper.tier} · Pre-registration required</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
