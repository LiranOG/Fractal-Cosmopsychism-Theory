#!/bin/bash
# =============================================================================
# init_repo.sh — Initialize the FCT Git Repository
# =============================================================================
# Usage: bash init_repo.sh
# 
# This script:
#   1. Runs the build script to restructure files
#   2. Initializes Git
#   3. Adds cosmic-ib-dashboard as a submodule
#   4. Creates the initial commit
# =============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
echo "============================================"
echo "FCT Repository Initialization"
echo "============================================"
echo "Repo directory: $REPO_DIR"
echo ""

# ── Step 1: Run the build script ──────────────────────────────────────
echo "[1/5] Running build_fct_repo.py..."
python "$SCRIPT_DIR/build_fct_repo.py" --execute --force
echo ""

# ── Step 2: Initialize Git ───────────────────────────────────────────
echo "[2/5] Initializing Git repository..."
cd "$REPO_DIR"
git init
echo ""

# ── Step 3: Create .gitignore ────────────────────────────────────────
echo "[3/5] Creating .gitignore..."
cat > .gitignore << 'EOF'
# Python
__pycache__/
*.pyc
*.pyo
*.egg-info/
.eggs/
dist/
build/
*.egg

# Virtual environments
.venv/
venv/
env/

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db
desktop.ini

# Data files (large)
*.fits
*.hdf5
*.h5

# Compiled C++
*.o
*.so
*.dylib
*.exe

# Jupyter
.ipynb_checkpoints/

# Streamlit
.streamlit/secrets.toml
EOF
echo ""

# ── Step 4: Add submodules ───────────────────────────────────────────
echo "[4/5] Adding Git submodules..."
git submodule add https://github.com/LiranOG/cosmic-ib-dashboard.git
echo ""

# ── Step 5: Initial commit ───────────────────────────────────────────
echo "[5/5] Creating initial commit..."
git add -A
git commit -m "feat: FCT Repository v1.0 — Complete Mathematical Architecture

- 21 SYN formulas (SYN-01RA through SYN-13-ND)
- 6 Upgrade protocols (UP-01 through UP-06)
- 5 Paper protocols targeting Nature Neuroscience, PNAS, Nature Medicine
- 2 Clinical trial designs
- 7 Research & validation reports
- 3 Interactive computational tools (JSX, Python, HTML)
- 1 HPC engine integration (cosmic-ib-dashboard)
- Complete epistemological architecture (Tier A-D classification)
- Cold Truth gap analysis with 16 documented vulnerabilities

Signed-off-by: FCT Repository Architect"
echo ""

echo "============================================"
echo "  Repository initialized successfully!"
echo "============================================"
echo ""
echo "Next steps:"
echo "  git remote add origin https://github.com/LiranOG/Fractal-Cosmopsychism-Theory.git"
echo "  git push -u origin main"
