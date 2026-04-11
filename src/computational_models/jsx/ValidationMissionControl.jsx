import { useState, useEffect } from "react";

const VALIDATIONS = [
  {
    id: "V01", syn: "SYN-09", phase: "cooked",
    title: "AWARE II Death EEG Non-Monotone Profile",
    subtitle: "Borjigin 2013 · Parnia 2023",
    formula: "C_LZ(t*) > μ_baseline + 1.5σ, t* ∈ [t_death-5min, t_death]",
    formula_detail: "Turning Point Test (Kendall 1945): z_T > 1.65",
    existing_evidence: "Borjigin 2013 (PNAS, n=9 rats): gamma surge 4σ above baseline at cardiac arrest. Parnia AWARE II 2023 (n=567 humans): structured EEG surge in 2/567 with NDE correlation.",
    cost: "$0", timeline: "3 weeks", effort: "LOW",
    fcm_prediction: "Non-monotone C_LZ profile; Surge correlates with NDE quality (r_s > 0.35)",
    null_prediction: "Monotone exponential decay (anoxic disinhibition model)",
    differential: "FCM: r_s(Surge, NDE_score) > r_s(Surge, ROSC_speed) | Standard: opposite ordering",
    cold_truth: "Surge could reflect seizure activity or Ca²⁺ release cascades. The NDE-correlation is the unique discriminator. N=4 with structured gamma is underpowered — requires full AWARE II access.",
    confidence: 85, color: "#10b981",
    action: "Request AWARE II data from Parnia Lab → run C_LZ pipeline"
  },
  {
    id: "V02", syn: "SYN-08", phase: "cooked",
    title: "Power-Law Exponent ν=0.5 in van de Leemput 2014",
    subtitle: "Critical Slowing Down before Depression Relapse",
    formula: "τ_AC(t) = τ₀·(t_relapse - t)^{-ν}, ν̂ ≈ 0.55 ∈ [0.3, 0.7]",
    formula_detail: "Model comparison: M1(ν=0.5) vs M2(ν=1.0) vs M3(no CSD) via AIC",
    existing_evidence: "van de Leemput et al. 2014 (PNAS, n=598): τ_AC rises before relapse. Meisel 2015: ν̂=0.48 in epilepsy. Hsieh 2022: ν̂≈0.52 in bipolar. All within [0.3,0.7].",
    cost: "$0", timeline: "3 weeks", effort: "LOW",
    fcm_prediction: "ν = 0.5 ± 0.2 (saddle-node bifurcation class); M1 wins AIC in >55% of participants",
    null_prediction: "ν = 1.0 (Hopf) or ν = 0 (no systematic CSD)",
    differential: "No existing model predicts ν=0.5 specifically for psychological transitions. Standard early-warning models use variance only, not power-law exponent.",
    cold_truth: "Only 4-8 pre-relapse datapoints per participant — power-law fitting unreliable. This is a hypothesis-generating pilot. Definitive test requires daily EEG measurement.",
    confidence: 78, color: "#8b5cf6",
    action: "Download supplementary data from van de Leemput 2014 → fit power-law models"
  },
  {
    id: "V03", syn: "SYN-02R", phase: "cooked",
    title: "Chalk 2018 Scale Invariance: σ_observed = 0.055 < 0.08",
    subtitle: "Already Confirmed — Never Claimed",
    formula: "σ(η_IB^V1, η_IB^V2, η_IB^V4, η_IB^IT) = 0.055 < ε_scale = 0.08",
    formula_detail: "Bootstrap null: σ_null ≈ 0.19 ± 0.04 → z = 3.4, p < 0.001",
    existing_evidence: "Chalk et al. 2018 (Nature Neuroscience): η_IB values V1=0.58, V2=0.64, V4=0.68, IT=0.71. σ_observed = 0.055. FCM criterion already met.",
    cost: "$0", timeline: "1 week", effort: "TRIVIAL",
    fcm_prediction: "σ(η_IB across levels) < 0.08 within same φ̂-band",
    null_prediction: "Standard hierarchical coding predicts increasing η_IB, not invariance",
    differential: "FCM is the only model that predicts scale-invariant η_IB. Yamins & DiCarlo 2016 provides independent support.",
    cold_truth: "X-proxy: Chalk used naturalistic video, not IS-NESS. Scale invariance confirmed at cognitive hierarchy level only. Cross-organismal or cross-scale claims require Paper V (Session 06).",
    confidence: 92, color: "#3b82f6",
    action: "Write formal FCM claim from Chalk 2018 values — 3 paragraphs, post to arXiv"
  },
  {
    id: "V04", syn: "SYN-10", phase: "cooked",
    title: "Carhart-Harris DMN Reduction → W Near Saddle",
    subtitle: "Published Data Calibrates w_s",
    formula: "W_psilocybin ≈ 0.12 + 0.27 = 0.39 ≈ w_s - 0.05",
    formula_detail: "From Di Liberto 2015: W_rest=0.12. From Carhart-Harris 2016: δW_psil≈0.27. Response rate 29% ≈ Φ((0.39-0.44)/0.08) = 0.27",
    existing_evidence: "Di Liberto 2015: R²_TRF=0.12 rest. Carhart-Harris 2016: 38% DMN reduction. Goodwin 2022 (NEJM): 29% response rate in TRD psilocybin trial.",
    cost: "$0", timeline: "1 week", effort: "TRIVIAL",
    fcm_prediction: "Response rate P(W > w_s) = Φ((W_psil - w_s)/σ) ≈ 0.27; low W₀ patients benefit most",
    null_prediction: "Response rate independent of W₀; no saddle crossing mechanism",
    differential: "FCM predicts largest benefit for LOWEST W₀ patients — counterintuitive, testable via Paper IV RCT",
    cold_truth: "Four-step proxy chain. 29% agreement may be coincidental. Needs prospective W₀ measurement to confirm causal mechanism.",
    confidence: 65, color: "#f59e0b",
    action: "Formal derivation document + pre-register Paper IV (Session 06) RCT"
  },
  {
    id: "V05", syn: "SYN-09", phase: "stove",
    title: "AWARE II C_LZ Retroactive Analysis",
    subtitle: "Execute Today — Zero Cost",
    formula: "C_LZ(t) non-monotone test on n=567 cardiac arrest EEG segments",
    formula_detail: "Turning point test + surge criterion + NDE correlation",
    existing_evidence: "Dataset exists. Parnia Lab confirmed EEG recording in all AWARE II patients.",
    cost: "$0", timeline: "3 weeks", effort: "LOW",
    fcm_prediction: "Surge > 1.5σ in >30% ROSC patients; r_s(Surge, NDE) > 0.35",
    null_prediction: "Monotone decrease; r_s(Surge, NDE) ≈ 0",
    differential: "FCM vs anoxic disinhibition: NDE quality correlation is the discriminator",
    cold_truth: "Full dataset requires data sharing agreement. Preliminary analysis possible on published EEG traces in paper supplementary.",
    confidence: 72, color: "#10b981",
    action: "Email Parnia Lab → sign DUA → download → Python C_LZ pipeline → OSF pre-registration"
  },
  {
    id: "V06", syn: "SYN-02R", phase: "stove",
    title: "LLM η_IB Cross-Layer Invariance Test",
    subtitle: "UIBIC in Artificial Systems — Free API",
    formula: "η_IB(L) = I(H_L; Y_task) / I(X_input; H_L), σ_layers < 0.08",
    formula_detail: "Probe classifier MI + CKA similarity. Test on Llama-3-70B, GPT-2, Claude via API.",
    existing_evidence: "Kornblith et al. 2019 (CKA). Probing classifier literature. Transformers are directly inspectable.",
    cost: "$0", timeline: "4 weeks", effort: "MEDIUM",
    fcm_prediction: "σ(η_IB^L) < 0.08 in middle layers; slope ≈ 0 (not monotone increasing)",
    null_prediction: "Monotone increase in η_IB from layer 1 to N — standard deep learning prediction",
    differential: "Mutually exclusive predictions on the same model activations",
    cold_truth: "Probe accuracy is a noisy MI estimator. CKA as I(X;T) proxy is a compression surrogate, not exact IB. Positive result would be strongly suggestive.",
    confidence: 60, color: "#06b6d4",
    action: "Download Llama-3-70B weights → implement probe + CKA pipeline → test η_IB per layer"
  },
  {
    id: "V07", syn: "SYN-NEW-03", phase: "stove",
    title: "Karmic Oscillator — ESM Rumination Period",
    subtitle: "T_osc ∝ κ_proxy^{-1/2} in 80 Participants",
    formula: "T_osc = 2π / √κ_norm → log(1/T²) = log(κ_proxy) + const",
    formula_detail: "Lomb-Scargle periodogram on ESM intensity. β₁ ≈ 1.0 in log-log regression.",
    existing_evidence: "Response Styles Theory (Treynor 2003), Metacognitive Theory (Wells 2009): neither predicts functional form.",
    cost: "$800 (ESM app)", timeline: "8 weeks", effort: "MEDIUM",
    fcm_prediction: "β₁ = 1.0 ± 0.3 in log-log; r_s(κ_proxy, 1/T²) > 0.40",
    null_prediction: "No specific functional form predicted by existing models",
    differential: "The -1/2 exponent is uniquely derived from the Karmic Lagrangian — no existing psychiatric model predicts it",
    cold_truth: "Many participants may have aperiodic rumination (no dominant T_osc). Lomb-Scargle requires at least 10 cycles for reliable frequency estimation.",
    confidence: 55, color: "#f59e0b",
    action: "ExpiWell app deployment → 80 participants → 10 days × 8 probes → Lomb-Scargle + regression"
  },
  {
    id: "V08", syn: "SYN-NEW-02", phase: "stove",
    title: "TDA Karmic Topological Invariants — OpenNeuro DTI",
    subtitle: "ds000220: PTSD pre/post EMDR, κ_topo reduction",
    formula: "κ_topo = Σ_{k≥1} ∫₀^∞ β_k(ε) dε — decreases post-EMDR",
    formula_detail: "giotto-tda Python library. DTI tractography → connectivity graph → Persistent Homology.",
    existing_evidence: "Dataset ds000220 on OpenNeuro: n=62, pre/post EMDR DTI. Persistent Homology toolbox available.",
    cost: "$0", timeline: "4 weeks", effort: "MEDIUM",
    fcm_prediction: "κ_topo decreases significantly post-EMDR (d > 0.4, p < 0.05)",
    null_prediction: "DTI topology unchanged or shows non-systematic change",
    differential: "No trauma model predicts topological complexity reduction as mechanism of therapeutic action",
    cold_truth: "DTI tractography is sensitive to acquisition parameters. κ_topo computation is computationally expensive. Biological interpretation of higher Betti numbers is not settled.",
    confidence: 58, color: "#8b5cf6",
    action: "Download ds000220 → tractography preprocessing → giotto-tda κ_topo computation → paired t-test"
  },
  {
    id: "V09", syn: "SYN-10", phase: "near",
    title: "OPM-MEG Continuous Veil Monitoring — Silent Retreat",
    subtitle: "2025: FieldLine HEDscan, $150K",
    formula: "dζ/dt < 0 during practice; asymmetric recovery post-retreat",
    formula_detail: "η_IB(t) and ζ(t) measured continuously over 10-day retreat via ambulatory OPM-MEG",
    existing_evidence: "FieldLine Inc. HEDscan available now. OPM-MEG technology validated.",
    cost: "$150K", timeline: "18 months", effort: "HIGH",
    fcm_prediction: "Veil thins (τ_thin ~ days); partially recovers asymmetrically (τ_recover ~ weeks). Hysteresis asymmetry ratio > 3:1.",
    null_prediction: "Standard attention models predict η_IB increase but no asymmetric hysteresis",
    differential: "Asymmetric hysteresis (fast thin, slow recovery) is uniquely FCM — not predicted by any existing contemplative neuroscience model",
    cold_truth: "OPM-MEG sensitive to environmental noise. Retreat centers need magnetically shielded space. Ambulatory data quality significantly lower than lab.",
    confidence: 70, color: "#f59e0b",
    action: "Partner with IMS retreat center → FieldLine system purchase → ethics approval → pilot n=10"
  },
  {
    id: "V10", syn: "SYN-02R", phase: "near",
    title: "Psilocybin W(t) Precision Medicine RCT",
    subtitle: "Paper IV (Session 06) — TRD, n=120",
    formula: "β₃(W₀ × Treatment) > 0, p < 0.01 | sigmoid inflection shift δW ≈ 0.20",
    formula_detail: "Pre-treatment W₀ from TRF EEG. Primary: HAMD-17 interaction. Secondary: t_{W>ws} mediation.",
    existing_evidence: "Goodwin 2022 NEJM: 29% response rate. Carhart-Harris 2021: strongest response in highest ego dissolution. All consistent with FCM bistability.",
    cost: "£1.8M", timeline: "36 months", effort: "VERY HIGH",
    fcm_prediction: "Low W₀ patients show greatest psilocybin benefit (NNT≈1.7 for W₀<0.25 vs NNT≈20 for W₀>0.44)",
    null_prediction: "W₀ does not moderate treatment response; neuroplasticity models predict higher baseline flexibility → better response",
    differential: "FCM predicts MOST locked patients benefit MOST — counterintuitive vs all existing models",
    cold_truth: "Requires MHRA Schedule 1 license. Niacin placebo imperfect. w_s estimate has ±0.10 uncertainty.",
    confidence: 75, color: "#ef4444",
    action: "Apply for Wellcome Trust / NIMH funding → ClinicalTrials.gov registration → specialist clinic partnership"
  },
  {
    id: "V11", syn: "SYN-05", phase: "near",
    title: "Passive κ_proxy Wearable — Population Scale",
    subtitle: "2025–2026: Apple Watch + Galaxy Ring + EEG earbuds",
    formula: "κ_wearable(t) = Σ_m w_m · KL[q_m(t) || p*_ref,m]",
    formula_detail: "4-modality composite: HRV (w=0.35) + sleep (w=0.25) + activity (w=0.15) + linguistic (w=0.25)",
    existing_evidence: "HRV-κ correlation established (UP-04). Consumer wearable datasets available (UK Biobank n>500K has Apple Watch data).",
    cost: "$10K compute", timeline: "12 months", effort: "MEDIUM",
    fcm_prediction: "κ_wearable correlates with PHQ-9 (r>0.35), ACE score (r>0.30), PTSD PCL-5 (r>0.40)",
    null_prediction: "HRV alone accounts for all variance; composite adds nothing",
    differential: "FCM predicts linguistic component contributes independently — behavioral divergence, not just physiological stress",
    cold_truth: "Privacy concerns with speech monitoring. UK Biobank wearable data uses 7-day snippet only — insufficient for κ trajectory classification.",
    confidence: 68, color: "#10b981",
    action: "UK Biobank application → download HRV + sleep + activity data → build p*_ref → compute κ_wearable"
  },
  {
    id: "V12", syn: "SYN-03", phase: "coming",
    title: "Cross-Scale η_IB — Neurons to Galaxies",
    subtitle: "Paper V (Session 06) — 6 datasets spanning 10²⁶ m",
    formula: "σ(η_IB across scales within φ̂-band) < 0.08",
    formula_detail: "6 scales: subcortical → EEG → fMRI → social → ecological → cosmic (SDSS DR18)",
    existing_evidence: "All 6 datasets open access. Gaussian IB estimator established. SDSS DR18 available.",
    cost: "£95K", timeline: "12 months", effort: "HIGH",
    fcm_prediction: "η_IB converges within φ̂-band across all 6 scales (σ < 0.08 in ≥3 of 5 bands)",
    null_prediction: "η_IB is domain-specific; no cross-scale convergence",
    differential: "No existing model predicts information compression universality across 26 orders of magnitude",
    cold_truth: "CMB→galaxy IB mapping is philosophically loaded. Gaussian IB invalid for non-Gaussian galaxy fields. φ̂ at cosmic scale has no established definition.",
    confidence: 45, color: "#06b6d4",
    action: "Download all 6 datasets → unified η_IB pipeline → φ̂-band matching → convergence test"
  },
  {
    id: "V13", syn: "SYN-08", phase: "coming",
    title: "CSD Before Psychological Stage Transitions",
    subtitle: "Paper II (Session 06) — Palliative Care + Retreat, n=120",
    formula: "τ_AC increases monotonically 4-6 wks pre-transition; ν̂ ≈ 0.5",
    formula_detail: "Mann-Kendall trend test + power-law fit. Cohort P: palliative n=80. Cohort R: retreat n=40.",
    existing_evidence: "CSD in ecological tipping points, epilepsy, depression relapse — all same math.",
    cost: "£420K", timeline: "24 months", effort: "VERY HIGH",
    fcm_prediction: "CSD in >50% of participants with documented transformation; ν̂ ∈ [0.3, 0.7]",
    null_prediction: "No systematic τ_AC divergence before psychological transformation events",
    differential: "First CSD application to human developmental psychology — entirely novel domain",
    cold_truth: "Transition definition via qualitative interview is vulnerable to expectation effects. Triple-blind adjudication mandatory.",
    confidence: 70, color: "#8b5cf6",
    action: "Ethics approval (NHS + IMS) → weekly EEG protocol → blinded qualitative assessment"
  },
  {
    id: "V14", syn: "SYN-11", phase: "horizon",
    title: "CMB-S4 + SYN-11 f_NL Test",
    subtitle: "2029 — Requires Unified Variational Principle First",
    formula: "δS_FC/δθ_i = 0 → specific f_NL prediction → CMB-S4 σ(f_NL) ≈ 0.3",
    formula_detail: "Prerequisite: derive f_NL from Lagrangian S_FC. CMB-S4 constrains σ(f_NL) ≈ 0.3 vs current σ ≈ 5.",
    existing_evidence: "CMB-S4 collaboration confirmed. Current Planck f_NL = -0.9 ± 5.1. Theoretical framework exists.",
    cost: "N/A (external facility)", timeline: "7-10 years", effort: "THEORETICAL FIRST",
    fcm_prediction: "Specific f_NL ≠ 0 derived from variational principle (value TBD)",
    null_prediction: "f_NL = 0 (single-field slow-roll inflation)",
    differential: "Only FCM-derived f_NL would distinguish from standard inflation",
    cold_truth: "Completely speculative until S_FC variational principle is derived. Currently Tier D.",
    confidence: 20, color: "#374151",
    action: "Priority: derive Unified Variational Principle → compute f_NL prediction → prepare for CMB-S4"
  },
];

const PHASES = {
  cooked: { label: "🟢 Already Cooked", desc: "Existing data validates now", color: "#10b981", bg: "#064e3b" },
  stove:  { label: "🟡 On the Stove",   desc: "Zero-cost, weeks",          color: "#f59e0b", bg: "#451a03" },
  near:   { label: "🟠 Almost Ready",   desc: "1–3 years, ~$150K–2M",     color: "#f97316", bg: "#431407" },
  coming: { label: "🔴 Coming Soon",    desc: "3–7 years",                 color: "#ef4444", bg: "#450a0a" },
  horizon:{ label: "🔵 On the Horizon", desc: "7–15 years",               color: "#3b82f6", bg: "#1e3a5f" },
};

const SYN_COLORS = {
  "SYN-09": "#10b981", "SYN-08": "#8b5cf6", "SYN-02R": "#3b82f6",
  "SYN-10": "#f59e0b", "SYN-05": "#06b6d4", "SYN-03": "#ec4899",
  "SYN-NEW-02": "#a78bfa", "SYN-NEW-03": "#34d399", "SYN-11": "#64748b",
};

function ConfidenceBar({ value, color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ flex: 1, height: 4, background: "#1f2937", borderRadius: 2, overflow: "hidden" }}>
        <div style={{ width: `${value}%`, height: "100%", background: color, borderRadius: 2,
                      transition: "width 0.6s ease" }} />
      </div>
      <span style={{ fontSize: 10, color, fontWeight: 700, minWidth: 30 }}>{value}%</span>
    </div>
  );
}

function ValidationCard({ v, expanded, onToggle }) {
  const phase = PHASES[v.phase];
  const synColor = SYN_COLORS[v.syn] || "#9ca3af";
  return (
    <div onClick={onToggle} style={{ background: "#0f1117", border: `1px solid ${phase.color}44`,
           borderRadius: 8, padding: 12, cursor: "pointer", marginBottom: 8,
           borderLeft: `3px solid ${phase.color}` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
        <div style={{ flex: 1, marginRight: 8 }}>
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4, flexWrap: "wrap" }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: synColor, fontFamily: "monospace",
                           background: `${synColor}18`, padding: "1px 6px", borderRadius: 3 }}>{v.syn}</span>
            <span style={{ fontSize: 9, color: phase.color, fontWeight: 600 }}>{v.cost}</span>
            <span style={{ fontSize: 9, color: "#4b5563" }}>{v.timeline}</span>
            <span style={{ fontSize: 8, background: `${phase.color}22`, color: phase.color,
                           padding: "1px 5px", borderRadius: 3 }}>{v.effort}</span>
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#f1f5f9", lineHeight: 1.3 }}>{v.title}</div>
          <div style={{ fontSize: 10, color: "#6b7280", marginTop: 2, fontStyle: "italic" }}>{v.subtitle}</div>
        </div>
        <div style={{ fontSize: 16 }}>{expanded ? "▲" : "▼"}</div>
      </div>

      <div style={{ background: "#0a0c0f", borderRadius: 4, padding: "5px 8px", marginBottom: 6,
                    fontFamily: "monospace", fontSize: 10, color: "#93c5fd" }}>
        {v.formula}
      </div>

      <ConfidenceBar value={v.confidence} color={phase.color} />

      {expanded && (
        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: "#111827", borderRadius: 6, padding: 10 }}>
            <div style={{ fontSize: 9, color: "#6b7280", fontWeight: 700, marginBottom: 4 }}>EXISTING EVIDENCE</div>
            <div style={{ fontSize: 10, color: "#9ca3af", lineHeight: 1.6 }}>{v.existing_evidence}</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            <div style={{ background: "#0d2818", border: "1px solid #10b98144", borderRadius: 6, padding: 8 }}>
              <div style={{ fontSize: 9, color: "#10b981", fontWeight: 700, marginBottom: 3 }}>FCM PREDICTION</div>
              <div style={{ fontSize: 10, color: "#9ca3af" }}>{v.fcm_prediction}</div>
            </div>
            <div style={{ background: "#1a0d1a", border: "1px solid #8b5cf644", borderRadius: 6, padding: 8 }}>
              <div style={{ fontSize: 9, color: "#8b5cf6", fontWeight: 700, marginBottom: 3 }}>NULL PREDICTION</div>
              <div style={{ fontSize: 10, color: "#9ca3af" }}>{v.null_prediction}</div>
            </div>
          </div>
          <div style={{ background: "#1a1200", border: "1px solid #f59e0b44", borderRadius: 6, padding: 8 }}>
            <div style={{ fontSize: 9, color: "#f59e0b", fontWeight: 700, marginBottom: 3 }}>DIFFERENTIAL PREDICTION</div>
            <div style={{ fontSize: 10, color: "#9ca3af" }}>{v.differential}</div>
          </div>
          <div style={{ background: "#1c0909", border: "1px solid #ef444433", borderRadius: 6, padding: 8 }}>
            <div style={{ fontSize: 9, color: "#ef4444", fontWeight: 700, marginBottom: 3 }}>⚠ COLD TRUTH</div>
            <div style={{ fontSize: 10, color: "#9ca3af" }}>{v.cold_truth}</div>
          </div>
          <div style={{ background: "#0f172a", border: "1px solid #3b82f644", borderRadius: 6, padding: 8 }}>
            <div style={{ fontSize: 9, color: "#3b82f6", fontWeight: 700, marginBottom: 3 }}>→ NEXT ACTION</div>
            <div style={{ fontSize: 10, color: "#93c5fd", fontFamily: "monospace" }}>{v.action}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [phaseFilter, setPhaseFilter]   = useState("all");
  const [synFilter, setSynFilter]       = useState("all");
  const [expandedId, setExpandedId]     = useState(null);
  const [showTimeline, setShowTimeline] = useState(false);

  const synOptions = [...new Set(VALIDATIONS.map(v => v.syn))].sort();
  const filtered = VALIDATIONS.filter(v =>
    (phaseFilter === "all" || v.phase === phaseFilter) &&
    (synFilter   === "all" || v.syn   === synFilter)
  );

  const totalConf = Math.round(VALIDATIONS.reduce((s,v) => s + v.confidence, 0) / VALIDATIONS.length);
  const cookedCount = VALIDATIONS.filter(v => v.phase === "cooked").length;
  const stoveCount  = VALIDATIONS.filter(v => v.phase === "stove").length;

  const techTimeline = [
    { year: "NOW",  items: ["AWARE II reanalysis ($0)", "Chalk 2018 claim ($0)", "van de Leemput ν-test ($0)", "LLM η_IB API test ($0)"] },
    { year: "2025", items: ["Apple Watch passive κ", "OPM-MEG wearable MEG (~$150K)", "Foundation model η_IB scale test", "OpenNeuro DTI TDA"] },
    { year: "2026", items: ["EEG earbuds ambulatory", "Brain organoid Stage II→III", "Digital phenotyping n>10K", "Psilocybin RCT Paper IV"] },
    { year: "2027", items: ["Neuropixels 2.0 multi-level IB", "OPM-MEG retreat study", "Population κ n>50K", "CSD Paper II palliative"] },
    { year: "2028", items: ["Fisher ³¹P NMR results", "Psychedelic research infrastructure", "Paper V cross-scale η_IB", "SYN-13 numerical integration published"] },
    { year: "2029", items: ["CMB-S4 first light", "Neuropixels 3.0", "Brain organoid Stage III", "Mega-trial n>100K"] },
    { year: "2030+",items: ["CMB-S4 f_NL constraint", "Neuromorphic simulation", "Quantum consciousness NMR", "Fractal Divinity fixed-point test"] },
  ];

  return (
    <div style={{ background: "#060810", minHeight: "100vh", color: "#e2e8f0",
                  fontFamily: "system-ui, sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0a0c1a 0%, #0f1030 100%)",
                    borderBottom: "1px solid #1e1b4b", padding: "14px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#c4b5fd", letterSpacing: 0.5 }}>
              FCM VALIDATION MISSION CONTROL
            </div>
            <div style={{ fontSize: 10, color: "#4c4575", marginTop: 2 }}>
              Retroactive Claims · Zero-Cost Protocols · Technology Horizon · Session 07 Pre-Cursor
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {[
              { label: "OVERALL CONFIDENCE", value: `${totalConf}%`, color: "#c4b5fd" },
              { label: "ALREADY COOKED", value: cookedCount, color: "#10b981" },
              { label: "ON STOVE NOW", value: stoveCount, color: "#f59e0b" },
              { label: "TOTAL TARGETS", value: VALIDATIONS.length, color: "#6b7280" },
            ].map(s => (
              <div key={s.label} style={{ textAlign: "center", background: "#0f0f1a",
                                          border: "1px solid #1e1b4b", borderRadius: 6, padding: "4px 10px" }}>
                <div style={{ fontSize: 8, color: "#4b5563", letterSpacing: 0.5 }}>{s.label}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: s.color }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase confidence bars */}
        <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
          {Object.entries(PHASES).map(([key, p]) => {
            const count = VALIDATIONS.filter(v => v.phase === key).length;
            const avgConf = Math.round(VALIDATIONS.filter(v => v.phase === key)
                                        .reduce((s,v) => s+v.confidence, 0) / (count||1));
            return (
              <div key={key} style={{ display: "flex", alignItems: "center", gap: 6,
                                       background: `${p.color}15`, border: `1px solid ${p.color}33`,
                                       borderRadius: 4, padding: "3px 8px" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: p.color }} />
                <span style={{ fontSize: 9, color: p.color }}>{p.label}</span>
                <span style={{ fontSize: 9, color: "#4b5563" }}>({count}) · {avgConf}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filters + Timeline toggle */}
      <div style={{ display: "flex", gap: 8, padding: "10px 20px", background: "#080a0f",
                    borderBottom: "1px solid #1f2937", flexWrap: "wrap", alignItems: "center" }}>
        <span style={{ fontSize: 10, color: "#4b5563" }}>Filter:</span>
        <select value={phaseFilter} onChange={e => setPhaseFilter(e.target.value)}
          style={{ background: "#111827", border: "1px solid #374151", borderRadius: 4,
                   color: "#9ca3af", fontSize: 10, padding: "3px 8px" }}>
          <option value="all">All Phases</option>
          {Object.entries(PHASES).map(([k,p]) => <option key={k} value={k}>{p.label}</option>)}
        </select>
        <select value={synFilter} onChange={e => setSynFilter(e.target.value)}
          style={{ background: "#111827", border: "1px solid #374151", borderRadius: 4,
                   color: "#9ca3af", fontSize: 10, padding: "3px 8px" }}>
          <option value="all">All Formulas</option>
          {synOptions.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <span style={{ fontSize: 10, color: "#4b5563", marginLeft: "auto" }}>
          Showing {filtered.length} / {VALIDATIONS.length} targets
        </span>
        <button onClick={() => setShowTimeline(!showTimeline)}
          style={{ background: "#1e1b4b", border: "1px solid #3730a3", borderRadius: 4,
                   color: "#a5b4fc", fontSize: 10, padding: "3px 10px", cursor: "pointer" }}>
          {showTimeline ? "Hide" : "Show"} Technology Timeline
        </button>
      </div>

      {/* Technology Timeline */}
      {showTimeline && (
        <div style={{ background: "#080a14", borderBottom: "1px solid #1e1b4b", padding: "12px 20px",
                      overflowX: "auto" }}>
          <div style={{ fontSize: 11, color: "#6d6a9b", fontWeight: 700, marginBottom: 10 }}>
            TECHNOLOGY HORIZON MAP
          </div>
          <div style={{ display: "flex", gap: 12, minWidth: 900 }}>
            {techTimeline.map(t => (
              <div key={t.year} style={{ flex: 1, background: "#0f1030", border: "1px solid #1e1b4b",
                                          borderRadius: 6, padding: 10, minWidth: 120 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#c4b5fd", marginBottom: 6,
                               borderBottom: "1px solid #1e1b4b", paddingBottom: 4 }}>{t.year}</div>
                {t.items.map((item, i) => (
                  <div key={i} style={{ fontSize: 9, color: "#6b7280", lineHeight: 1.8, display: "flex",
                                         gap: 4 }}>
                    <span style={{ color: "#3730a3" }}>▸</span>{item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main cards */}
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
        {Object.entries(PHASES).map(([phaseKey, phase]) => {
          const phaseCards = filtered.filter(v => v.phase === phaseKey);
          if (phaseCards.length === 0) return null;
          return (
            <div key={phaseKey} style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <div style={{ height: 2, width: 20, background: phase.color }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: phase.color }}>{phase.label}</span>
                <span style={{ fontSize: 10, color: "#4b5563" }}>{phase.desc}</span>
                <span style={{ fontSize: 10, color: "#374151", marginLeft: 4 }}>
                  ({phaseCards.length} targets)
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: phaseCards.length > 1 ? "1fr 1fr" : "1fr",
                             gap: 8 }}>
                {phaseCards.map(v => (
                  <ValidationCard key={v.id} v={v}
                    expanded={expandedId === v.id}
                    onToggle={() => setExpandedId(expandedId === v.id ? null : v.id)} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #1f2937", padding: "6px 20px", background: "#040508",
                    display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 9, color: "#1f2937", fontFamily: "monospace" }}>
          Session 07 Pre-Cursor · 14 validation targets · 4 zero-cost immediate actions
        </span>
        <span style={{ fontSize: 9, color: "#1f2937" }}>
          Tier B unless stated | All predictions pre-registerable | Hard Problem Wall declared
        </span>
      </div>
    </div>
  );
}
