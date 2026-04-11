#!/usr/bin/env python3
"""
=============================================================================
build_fct_repo.py — FCT Repository Structure Builder
=============================================================================
Creates the canonical Fractal-Cosmopsychism-Theory directory tree and moves
all generated files into their target locations.

Usage:
    python build_fct_repo.py                    # Dry run (shows plan)
    python build_fct_repo.py --execute          # Actually moves files
    python build_fct_repo.py --execute --force  # Overwrites existing targets

Author: FCT Repository Architect
Date:   2026-03-29
=============================================================================
"""

import os
import sys
import shutil
import argparse
from pathlib import Path

# =============================================================================
# CONFIGURATION
# =============================================================================

# Root of the repository — auto-detected from this script's location
# (script lives in scripts/, so repo root is one level up)
REPO_ROOT = Path(__file__).resolve().parent.parent

# Root of the workspace where source files may live (parent of repo)
WORKSPACE_ROOT = REPO_ROOT.parent

# The final target root (same location, just restructured)
TARGET_ROOT = REPO_ROOT

# =============================================================================
# DIRECTORY STRUCTURE — every directory that must exist
# =============================================================================

DIRECTORIES = [
    "docs/original_philosophical_core",
    "docs/glossary",
    "docs/whitepapers",
    "docs/overviews",
    "docs/epistemological_notes",
    "docs/research_and_validation/reviews",
    "docs/research_and_validation/validation_reports",
    "docs/research_and_validation/key_papers",
    "docs/accessibility",
    "docs/archive",
    "src/theory_and_math/axioms",
    "src/theory_and_math/syn_formulas",
    "src/theory_and_math/master_equation",
    "src/theory_and_math/upgrades",
    "src/empirical_design/protocols",
    "src/empirical_design/clinical_trials",
    "src/empirical_design/codex_he",
    "src/empirical_design/poc_designs",
    "src/computational_models/integrations",
    "src/computational_models/python",
    "src/computational_models/jsx",
    "src/computational_models/html",
    "data",
    "tests",
]

# =============================================================================
# FILE MAPPING: (source_path_relative_to_WORKSPACE_ROOT, target_path_relative_to_TARGET_ROOT)
# Source can be in WORKSPACE_ROOT (parent) or REPO_ROOT (within repo)
# =============================================================================

FILE_MAP = [
    # =========================================================================
    # ROOT FILES
    # =========================================================================
    ("FCT repo/CHANGELOG.md",                                          "CHANGELOG.md"),

    # =========================================================================
    # docs/glossary/
    # =========================================================================
    ("variable_ontology.md",                                            "docs/glossary/variable_ontology.md"),
    ("epistemological_mapping.md",                                      "docs/glossary/epistemological_mapping.md"),

    # =========================================================================
    # docs/whitepapers/
    # =========================================================================
    ("FCT repo/docs/FCT_whitepaper_v1.md",                             "docs/whitepapers/FCT_whitepaper_v1.md"),

    # =========================================================================
    # docs/overviews/
    # =========================================================================
    ("FCT repo/docs/FCT_executive_summary.md",                         "docs/overviews/FCT_executive_summary.md"),

    # =========================================================================
    # docs/epistemological_notes/
    # =========================================================================
    ("FCT repo/src/empirical_protocols/cold_truth_gap_analysis.md",    "docs/epistemological_notes/cold_truth_gap_analysis.md"),

    # =========================================================================
    # docs/research_and_validation/reviews/
    # =========================================================================
    ("FCT repo/src/research_reports/8_scientific_discoveries.md",       "docs/research_and_validation/reviews/8_scientific_discoveries.md"),
    ("FCT repo/src/research_reports/renormalization_10_solutions.md",   "docs/research_and_validation/reviews/renormalization_10_solutions.md"),
    ("FCT repo/src/research_reports/github_search_discoveries_237.md", "docs/research_and_validation/reviews/github_search_discoveries_237.md"),

    # =========================================================================
    # docs/research_and_validation/validation_reports/
    # =========================================================================
    ("FCT repo/src/research_reports/cosmic_IB_comprehensive_summary.md",    "docs/research_and_validation/validation_reports/cosmic_IB_comprehensive_summary.md"),
    ("FCT repo/src/research_reports/session07_validation_intelligence.md",  "docs/research_and_validation/validation_reports/session07_validation_intelligence.md"),
    ("FCT repo/src/research_reports/UIBIC_cross_scale_test_upgraded.md",    "docs/research_and_validation/validation_reports/UIBIC_cross_scale_test_upgraded.md"),
    ("FCT repo/src/research_reports/UIBIC_cosmological_formalization_v3.md","docs/research_and_validation/validation_reports/UIBIC_cosmological_formalization_v3.md"),

    # =========================================================================
    # src/theory_and_math/ — SYN_REGISTRY at root level
    # =========================================================================
    ("ARTIFACT_C_SYN_REGISTRY.md",                                     "src/theory_and_math/SYN_REGISTRY.md"),

    # =========================================================================
    # src/theory_and_math/axioms/
    # =========================================================================
    ("SYN_01RA_logical_necessity_proof.md",                            "src/theory_and_math/axioms/SYN_01RA_logical_necessity_proof.md"),
    ("SYN_01RB_obligatory_instantiation.md",                           "src/theory_and_math/axioms/SYN_01RB_obligatory_instantiation.md"),

    # =========================================================================
    # src/theory_and_math/syn_formulas/
    # =========================================================================
    ("SYN_02R_hierarchical_ib_compression.md",                         "src/theory_and_math/syn_formulas/SYN_02R_hierarchical_ib_compression.md"),
    ("SYN_03_fractal_isomorphism.md",                                  "src/theory_and_math/syn_formulas/SYN_03_fractal_isomorphism.md"),
    ("SYN_04_universal_ib_invariance.md",                              "src/theory_and_math/syn_formulas/SYN_04_universal_ib_invariance.md"),
    ("SYN_05_karmic_load_dynamics.md",                                 "src/theory_and_math/syn_formulas/SYN_05_karmic_load_dynamics.md"),
    ("SYN_06_ontological_smelting.md",                                 "src/theory_and_math/syn_formulas/SYN_06_ontological_smelting.md"),
    ("SYN_07_autopoietic_coherence.md",                                "src/theory_and_math/syn_formulas/SYN_07_autopoietic_coherence.md"),
    ("SYN_08_critical_slowing_down.md",                                "src/theory_and_math/syn_formulas/SYN_08_critical_slowing_down.md"),
    ("SYN_09_data_harvest_protocol.md",                                "src/theory_and_math/syn_formulas/SYN_09_data_harvest_protocol.md"),
    ("SYN_10_free_will_operator.md",                                   "src/theory_and_math/syn_formulas/SYN_10_free_will_operator.md"),
    ("SYN_11_multiversal_iteration.md",                                "src/theory_and_math/syn_formulas/SYN_11_multiversal_iteration.md"),
    ("SYN_12_fractal_divinity_attractor.md",                           "src/theory_and_math/syn_formulas/SYN_12_fractal_divinity_attractor.md"),

    # =========================================================================
    # src/theory_and_math/master_equation/
    # =========================================================================
    ("SYN_13_master_equation.md",                                      "src/theory_and_math/master_equation/SYN_13_master_equation.md"),
    ("SYN_13_ND_dimensionless_integration.md",                         "src/theory_and_math/master_equation/SYN_13_ND_dimensionless_integration.md"),

    # =========================================================================
    # src/theory_and_math/upgrades/
    # =========================================================================
    ("FCT repo/src/empirical_protocols/upgrades/UP_01_p_star_operationalization.md",     "src/theory_and_math/upgrades/UP_01_p_star_operationalization.md"),
    ("FCT repo/src/empirical_protocols/upgrades/UP_02_W_t_trf_bistability.md",           "src/theory_and_math/upgrades/UP_02_W_t_trf_bistability.md"),
    ("FCT repo/src/empirical_protocols/upgrades/UP_03_pre_registration_architecture.md", "src/theory_and_math/upgrades/UP_03_pre_registration_architecture.md"),
    ("FCT repo/src/empirical_protocols/upgrades/UP_04_parameter_calibration_bounds.md",  "src/theory_and_math/upgrades/UP_04_parameter_calibration_bounds.md"),
    ("FCT repo/src/empirical_protocols/upgrades/UP_05_epistemic_taxonomy_mandate.md",    "src/theory_and_math/upgrades/UP_05_epistemic_taxonomy_mandate.md"),
    ("FCT repo/src/empirical_protocols/upgrades/UP_06_public_database_replication.md",   "src/theory_and_math/upgrades/UP_06_public_database_replication.md"),

    # =========================================================================
    # src/theory_and_math/ — top-level theory files
    # =========================================================================
    ("FCT repo/src/research_reports/UIBIC_cosmological_formalization_v3.md", "src/theory_and_math/UIBIC_cosmological_formalization_v3.md"),

    # =========================================================================
    # src/empirical_design/protocols/ (paper protocols)
    # =========================================================================
    ("FCT repo/src/empirical_protocols/paper_protocols/paper_protocol_01_IB_consciousness.md",        "src/empirical_design/protocols/paper_protocol_01_IB_consciousness.md"),
    ("FCT repo/src/empirical_protocols/paper_protocols/paper_protocol_02_CSD_stage_transition.md",    "src/empirical_design/protocols/paper_protocol_02_CSD_stage_transition.md"),
    ("FCT repo/src/empirical_protocols/paper_protocols/paper_protocol_03_karmic_oscillator.md",       "src/empirical_design/protocols/paper_protocol_03_karmic_oscillator.md"),
    ("FCT repo/src/empirical_protocols/paper_protocols/paper_protocol_04_psilocybin_W_transition.md", "src/empirical_design/protocols/paper_protocol_04_psilocybin_W_transition.md"),
    ("FCT repo/src/empirical_protocols/paper_protocols/paper_protocol_05_cross_scale_UIBIC.md",       "src/empirical_design/protocols/paper_protocol_05_cross_scale_UIBIC.md"),
    ("FCT repo/src/empirical_protocols/protocols/SYN_08_stage_transition_EEG.md",                     "src/empirical_design/protocols/SYN_08_stage_transition_EEG.md"),

    # =========================================================================
    # src/empirical_design/clinical_trials/
    # =========================================================================
    ("FCT repo/src/empirical_protocols/clinical_trials/W_t_psilocybin_prediction.md",             "src/empirical_design/clinical_trials/W_t_psilocybin_prediction.md"),
    ("FCT repo/src/empirical_protocols/clinical_trials/stage_transition_psychiatric_PoC.md",       "src/empirical_design/clinical_trials/stage_transition_psychiatric_PoC.md"),

    # =========================================================================
    # src/empirical_design/codex_he/
    # =========================================================================
    ("FCT repo/src/empirical_design/codex_he/codex_advanced.pdf",          "src/empirical_design/codex_he/codex_advanced.pdf"),
    ("FCT repo/src/empirical_design/codex_he/codex_ultimate_v2.pdf",       "src/empirical_design/codex_he/codex_ultimate_v2.pdf"),

    # =========================================================================
    # src/computational_models/integrations/
    # =========================================================================
    ("INTEGRATION_cosmic_ib_dashboard.md",                             "src/computational_models/integrations/INTEGRATION_cosmic_ib_dashboard.md"),

    # =========================================================================
    # src/computational_models/python/
    # =========================================================================
    ("FCT repo/src/computational_models/python/fct_phase_transition_viz.py",           "src/computational_models/python/fct_phase_transition_viz.py"),
    ("FCT repo/src/computational_models/python/README_phase_transition_viz.md",        "src/computational_models/python/README_phase_transition_viz.md"),

    # =========================================================================
    # src/computational_models/jsx/
    # =========================================================================
    ("FCT repo/src/computational_models/jsx/SYN13_simulation.jsx",                     "src/computational_models/jsx/SYN13_simulation.jsx"),
    ("FCT repo/src/computational_models/jsx/Session06_Papers.jsx",                     "src/computational_models/jsx/Session06_Papers.jsx"),
    ("FCT repo/src/computational_models/jsx/ValidationMissionControl.jsx",             "src/computational_models/jsx/ValidationMissionControl.jsx"),
    ("FCT repo/src/computational_models/jsx/README_SYN13_simulation.md",               "src/computational_models/jsx/README_SYN13_simulation.md"),
    ("FCT repo/src/computational_models/jsx/README_Session06_Papers.md",               "src/computational_models/jsx/README_Session06_Papers.md"),
    ("FCT repo/src/computational_models/jsx/README_ValidationMissionControl.md",       "src/computational_models/jsx/README_ValidationMissionControl.md"),

    # =========================================================================
    # src/computational_models/html/
    # =========================================================================
    ("FCT repo/src/computational_models/html/implementation_roadmap.html",             "src/computational_models/html/implementation_roadmap.html"),
    ("FCT repo/src/computational_models/html/complete_upgrade_priority_table.html",    "src/computational_models/html/complete_upgrade_priority_table.html"),
    ("FCT repo/src/computational_models/html/README_html_tools.md",                    "src/computational_models/html/README_html_tools.md"),
]

# =============================================================================
# EXECUTION ENGINE
# =============================================================================

def create_directories(target_root: Path, dry_run: bool = True):
    """Create all target directories."""
    print("\n" + "=" * 70)
    print("PHASE 1: CREATING DIRECTORY STRUCTURE")
    print("=" * 70)
    created = 0
    for d in DIRECTORIES:
        full_path = target_root / d
        if not full_path.exists():
            if dry_run:
                print(f"  [DRY] mkdir -p {d}")
            else:
                full_path.mkdir(parents=True, exist_ok=True)
                print(f"  [OK]  mkdir -p {d}")
            created += 1
        else:
            print(f"  [SKP] exists:  {d}")
    print(f"\n  Directories: {created} new, {len(DIRECTORIES) - created} existing")
    return created


def move_files(workspace_root: Path, target_root: Path, dry_run: bool = True, force: bool = False):
    """Move files from source to target locations."""
    print("\n" + "=" * 70)
    print("PHASE 2: MOVING FILES TO TARGET LOCATIONS")
    print("=" * 70)
    
    moved = 0
    skipped = 0
    missing = 0
    errors = []
    
    for src_rel, dst_rel in FILE_MAP:
        src_path = (workspace_root / src_rel).resolve()
        dst_path = (target_root / dst_rel).resolve()
        
        # 1. בדיקה אם המקור והיעד הם אותו קובץ בדיוק
        if src_path.exists() and dst_path.exists() and src_path == dst_path:
            print(f"  [IN-PLACE] {dst_rel}")
            skipped += 1
            continue

        # 2. בדיקה אם המקור קיים
        if not src_path.exists():
            if dst_path.exists():
                print(f"  [ALREADY-THERE] {dst_rel}")
                skipped += 1
            else:
                print(f"  [MISSING]  {src_rel}")
                errors.append(f"Source missing: {src_rel}")
                missing += 1
            continue
        
        # 3. בדיקה אם היעד קיים ואין דגל force
        if dst_path.exists() and not force:
            print(f"  [EXISTS]   {dst_rel} (use --force to overwrite)")
            skipped += 1
            continue
        
        # 4. ביצוע ההעתקה
        if dry_run:
            print(f"  [DRY] {src_rel} -> {dst_rel}")
            moved += 1
        else:
            try:
                dst_path.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(str(src_path), str(dst_path))
                print(f"  [OK]  {src_rel} -> {dst_rel}")
                moved += 1
            except PermissionError:
                print(f"  [LOCKED]   Could not access {src_rel}. Is it open in Word?")
                errors.append(f"Permission denied (locked): {src_rel}")
            except Exception as e:
                print(f"  [ERROR]    Failed to move {src_rel}: {e}")
                errors.append(f"Error moving {src_rel}: {e}")
    
    print(f"\n  Files: {moved} {'to move' if dry_run else 'moved'}, {skipped} skipped, {missing} missing source")
    return moved, skipped, missing, errors


def print_final_tree(target_root: Path):
    """Print the final directory tree."""
    print("\n" + "=" * 70)
    print("PHASE 3: FINAL DIRECTORY TREE")
    print("=" * 70)
    
    for root, dirs, files in os.walk(str(target_root)):
        # Skip cosmic-ib-dashboard internals
        rel = os.path.relpath(root, str(target_root))
        depth = rel.count(os.sep)
        if any(skip in rel for skip in ['cosmic-ib-dashboard', '__pycache__', '.git', '.streamlit']):
            continue
        indent = "│   " * depth
        basename = os.path.basename(root)
        if rel == '.':
            print(f"Fractal-Cosmopsychism-Theory/")
        else:
            print(f"{indent}├── {basename}/")
        
        # Print files
        sub_indent = "│   " * (depth + 1)
        for f in sorted(files):
            if f.startswith('.'):
                continue
            size_kb = os.path.getsize(os.path.join(root, f)) / 1024
            print(f"{sub_indent}├── {f} ({size_kb:.1f} KB)")


def main():
    parser = argparse.ArgumentParser(description="FCT Repository Structure Builder")
    parser.add_argument("--execute", action="store_true", help="Actually move files (default: dry run)")
    parser.add_argument("--force", action="store_true", help="Overwrite existing target files")
    parser.add_argument("--tree", action="store_true", help="Print final tree only")
    args = parser.parse_args()
    
    dry_run = not args.execute
    
    print("=" * 70)
    print("FCT REPOSITORY STRUCTURE BUILDER")
    print("=" * 70)
    print(f"  Workspace:  {WORKSPACE_ROOT}")
    print(f"  Repo root:  {TARGET_ROOT}")
    print(f"  Mode:       {'DRY RUN (use --execute to apply)' if dry_run else 'EXECUTING'}")
    print(f"  Force:      {'Yes' if args.force else 'No'}")
    
    if args.tree:
        print_final_tree(TARGET_ROOT)
        return
    
    # Phase 1: Create directories
    create_directories(TARGET_ROOT, dry_run)
    
    # Phase 2: Move files
    moved, skipped, missing, errors = move_files(WORKSPACE_ROOT, TARGET_ROOT, dry_run, args.force)
    
    # Phase 3: Summary
    print("\n" + "=" * 70)
    print("SUMMARY")
    print("=" * 70)
    print(f"  Directories created:  {len(DIRECTORIES)}")
    print(f"  Files mapped:         {len(FILE_MAP)}")
    print(f"  Files {'to move' if dry_run else 'moved'}:       {moved}")
    print(f"  Files skipped:        {skipped}")
    print(f"  Files missing:        {missing}")
    
    if dry_run:
        print("\n  [!]  This was a DRY RUN. No files were modified.")
        print("  Run with --execute to apply changes.")
    else:
        print("\n  [OK] Repository restructured successfully!")
    
    if errors:
        print(f"\n  [!]  {len(errors)} source files not found. These may need to be generated.")
    
    return 0 if missing == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
