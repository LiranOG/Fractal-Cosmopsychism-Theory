"""
copy_philosophical_origins.py
─────────────────────────────
Copies the original philosophical documents from the FCT Project workspace
into docs/original_philosophical_core/ within the repository.

Safety:
  - COPIES, does NOT move — originals remain untouched
  - Dry-run by default — add --execute to actually copy
  - Reports every file found / missing

Usage:
  python copy_philosophical_origins.py                # dry-run (preview only)
  python copy_philosophical_origins.py --execute      # actually copy files
"""

import os
import sys
import shutil
from pathlib import Path

# Fix Windows console encoding for Hebrew filenames
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

# ─────────────────────────────────────────────
# CONFIGURATION
# ─────────────────────────────────────────────

# Source: the original FCT Project folder on OneDrive
SOURCE_BASE = Path(os.path.expanduser(
    r"~\OneDrive\שולחן העבודה\Fractal Cosmopsychism Theory (FCT) Project"
))

# Target: inside the repository
REPO_ROOT = Path(__file__).resolve().parent.parent
TARGET_DIR = REPO_ROOT / "docs" / "original_philosophical_core"

# Document manifest: (source_subfolder, filename)
DOCUMENTS = [
    # ── Early Drafts ──
    ("Early docs", "Fractal Cosmopsychism Module.pdf"),
    ("Early docs", "Fractal Cosmopsychism model 3.pdf"),
    ("Early docs", "IDEAS.docx"),
    ("Early docs", "רעיונות להוסיף למודל.docx"),
    ("Early docs", "מפת השדות המתמטיים — לסינתזה אמיתית.docx"),

    # ── Foundational Overviews ──
    ("Overview & Anchors", "The Fractal Cosmopsychism Model_ A Whitepaper.docx"),
    ("Overview & Anchors", "The Fractal Cosmopsychism Model_ Core Structure and Principles.docx"),
    ("Overview & Anchors", "Summery Fractal Cosmopsychism Model.docx"),
    ("Overview & Anchors", "Fractal_Cosmopsychism_Simplified_Hebrew.docx"),
]


def main():
    execute = "--execute" in sys.argv
    mode = "EXECUTE" if execute else "DRY-RUN"

    print(f"=" * 64)
    print(f"  FCT Philosophical Origins — Copy Script [{mode}]")
    print(f"=" * 64)
    print(f"  Source: {SOURCE_BASE}")
    print(f"  Target: {TARGET_DIR}")
    print()

    if not SOURCE_BASE.exists():
        print(f"  [ERROR] Source folder not found: {SOURCE_BASE}")
        print(f"          Make sure OneDrive is synced and the FCT Project folder exists.")
        sys.exit(1)

    # Create target directory
    if execute:
        TARGET_DIR.mkdir(parents=True, exist_ok=True)

    found = 0
    missing = 0
    copied = 0

    for subfolder, filename in DOCUMENTS:
        src = SOURCE_BASE / subfolder / filename
        dst = TARGET_DIR / filename

        if src.exists():
            found += 1
            size_kb = src.stat().st_size / 1024
            status = "FOUND"

            if execute:
                if dst.exists():
                    print(f"  [SKIP]  {filename} (already exists in target)")
                else:
                    shutil.copy2(str(src), str(dst))
                    copied += 1
                    status = "COPIED"

            print(f"  [{status:6s}] {filename:<60s} ({size_kb:7.1f} KB)")
        else:
            missing += 1
            print(f"  [MISS]  {filename:<60s} (not found at {src})")

    print()
    print(f"  Summary: {found} found, {missing} missing, {copied} copied")

    if not execute and found > 0:
        print()
        print(f"  This was a DRY RUN. To actually copy files, run:")
        print(f"    python copy_philosophical_origins.py --execute")

    print(f"{'=' * 64}")


if __name__ == "__main__":
    main()
