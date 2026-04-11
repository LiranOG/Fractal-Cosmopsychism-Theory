# FCT — Complete Installation & Setup Guide

> **Version:** 2.0 | **Last updated:** 2026-04-01
>
> This is the **single source of truth** for installing and running every component of the Fractal Cosmopsychism Theory repository. All instructions have been tested and verified.

---

## Table of Contents

1. [What You Need (System Requirements)](#1-what-you-need-system-requirements)
2. [Quick Start — Fastest Path (Any OS)](#2-quick-start--fastest-path-any-os)
3. [Windows — Three Installation Methods](#3-windows--three-installation-methods)
   - [3A. Windows PowerShell (Native)](#3a-windows-powershell-native)
   - [3B. Windows WSL (Linux Subsystem)](#3b-windows-wsl-linux-subsystem)
   - [3C. Windows Node.js Only (JSX Simulator)](#3c-windows-nodejs-only-jsx-simulator)
4. [Linux — Three Installation Methods](#4-linux--three-installation-methods)
   - [4A. Linux Native (Ubuntu/Debian)](#4a-linux-native-ubuntudebian)
   - [4B. Linux Native (Fedora/RHEL/CentOS)](#4b-linux-native-fedorarhel)
   - [4C. Linux Native (Arch/Manjaro)](#4c-linux-native-archmanjaro)
5. [macOS — Three Installation Methods](#5-macos--three-installation-methods)
   - [5A. macOS Homebrew (Native)](#5a-macos-homebrew-native)
   - [5B. macOS Python venv (Isolated)](#5b-macos-python-venv-isolated)
   - [5C. macOS Node.js Only (JSX Simulator)](#5c-macos-nodejs-only-jsx-simulator)
6. [Component Deep Dives](#6-component-deep-dives)
   - [6A. SYN-13 Interactive Simulator (React/Vite)](#6a-syn-13-interactive-simulator-reactvite)
   - [6B. Validation Mission Control Dashboard](#6b-validation-mission-control-dashboard)
   - [6C. Cosmic IB Dashboard (Streamlit/SDSS)](#6c-cosmic-ib-dashboard-streamlitsdss)
   - [6D. EEG Phase Transition Pipeline (Python)](#6d-eeg-phase-transition-pipeline-python)
   - [6E. HTML Interactive Tools (Zero Install)](#6e-html-interactive-tools-zero-install)
7. [Port Reference & URLs](#7-port-reference--urls)
8. [Troubleshooting & FAQ](#8-troubleshooting--faq)

---

## 1. What You Need (System Requirements)

Not every component requires every tool. Use this matrix to determine **exactly** what you need:

| Component | What It Does | Python | Node.js | C++ | Difficulty |
|-----------|-------------|--------|---------|-----|------------|
| 📄 Read Theory | Browse SYN formulas, protocols, whitepaper | — | — | — | None |
| ⚛️ SYN-13 Simulator | Interactive 6D ODE explorer (browser) | — | ✅ 18+ | — | Easy |
| 📊 Validation Dashboard | 14-target validation tracker (browser) | — | ✅ 18+ | — | Easy |
| 🌐 Cosmic IB Dashboard | SDSS Streamlit analysis pipeline | ✅ 3.10+ | — | — | Medium |
| 🧠 EEG Pipeline | Phase transition visualization | ✅ 3.10+ | — | — | Medium |
| 📈 HTML Tools | Gantt roadmap, priority matrix | — | — | — | None |

### Minimum Versions

| Tool | Minimum Version | How to Check | Download |
|------|----------------|-------------|----------|
| Git  | 2.30+ | `git --version` | [git-scm.com](https://git-scm.com/downloads) |
| Python | 3.10+ | `python --version` or `python3 --version` | [python.org](https://www.python.org/downloads/) |
| Node.js | 18+ (LTS 20 recommended) | `node --version` | [nodejs.org](https://nodejs.org/en/download) |
| npm | 9+ (comes with Node.js) | `npm --version` | Bundled with Node.js |

---

## 2. Quick Start — Fastest Path (Any OS)

> ⚠️ **Vite 8.x behaviour:** After scaffolding, Vite automatically installs dependencies and **starts the dev server**. This is expected. Wait until you see `VITE ready in ... ms`, then press **CTRL+C** to stop it, copy the FCT simulator file, then re-launch with `npm run dev`.

```powershell
# 1. Clone the repository
git clone --depth=1 https://github.com/LiranOG/Fractal-Cosmopsychism-Theory.git
cd Fractal-Cosmopsychism-Theory

# 2. Scaffold the React app — Vite will build AND start the server automatically.
#    Wait for "VITE ready in ... ms" then press CTRL+C to stop it.
#    (If prompted "Terminate batch job?" type Y and press Enter)
npx -y create-vite@latest fct-sim --template react

# 3. ⚠️ Copy the FCT simulator — you MUST be in the repo root here!
#    Windows PowerShell:
Copy-Item "src\computational_models\jsx\SYN13_simulation.jsx" -Destination "fct-sim\src\App.jsx" -Force
#    Linux / macOS / WSL:
#    cp src/computational_models/jsx/SYN13_simulation.jsx fct-sim/src/App.jsx

# 4. Enter the app folder and re-launch (recharts already installed in step 2)
cd fct-sim
npm install recharts
npm run dev
# → Open http://localhost:5173
```

---

## 3. Windows — Three Installation Methods

### 3A. Windows PowerShell (Native)

> **Best for:** Most Windows users. No extra setup beyond Python and Node.js.
> **Shell:** PowerShell 5.1+ (pre-installed) or PowerShell 7+ (recommended).

#### Step 1 — Verify Prerequisites

Open **PowerShell** (search "PowerShell" in Start menu) and check:

```powershell
python --version       # Need 3.10+  → If missing: https://www.python.org/downloads/
node --version         # Need 18+    → If missing: https://nodejs.org/en/download
git --version          # Need 2.30+  → If missing: https://git-scm.com/downloads
```

> 💡 **Python not recognized?** During Python installation, make sure you check **"Add Python to PATH"**. If you already installed without it, reinstall and check the box, or manually add `C:\Users\<YourName>\AppData\Local\Programs\Python\Python3XX\` to your system PATH.

#### Step 2 — Allow Script Execution (One-Time)

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
# When prompted, type: A (Yes to All)
```

> **What this does:** PowerShell blocks scripts by default for security. `RemoteSigned` allows local scripts to run while still requiring downloaded scripts to be signed. This is safe and recommended by Microsoft.

#### Step 3 — Clone the Repository

```powershell
# Choose where to put the project (example: Desktop)
cd $HOME\Desktop

# Clone with submodules (cosmic-ib-dashboard)
git clone --recursive https://github.com/LiranOG/Fractal-Cosmopsychism-Theory.git
cd Fractal-Cosmopsychism-Theory
```

> ⚠️ **"Cannot find path" error?** Make sure you `cd` to a directory that **exists** first. The clone command creates the folder — don't try to `cd` into it before cloning.

> 💡 **If you already cloned without `--recursive`:**
> ```powershell
> git submodule update --init --recursive
> ```

#### Step 4 — Upgrade pip & Install Python Dependencies

```powershell
python -m pip install --upgrade pip
pip install numpy scipy scikit-learn statsmodels fooof streamlit healpy astropy
```

> **Expected output:** `Successfully installed numpy-X.X scipy-X.X ...`
>
> **If `pip` is not recognized:** Use `python -m pip install ...` instead of `pip install ...`

#### Step 5 — Run the SYN-13 Interactive Simulator

```powershell
# ── YOU MUST BE IN THE REPO ROOT FOR THIS ──
# Verify: run 'dir src\computational_models\jsx\' to confirm SYN13_simulation.jsx is there

# 1. Scaffold the Vite React app
#    Vite 8.x will scaffold, install, AND start the dev server automatically.
#    Wait until you see "VITE ready in ... ms", then press CTRL+C to stop it.
#    (If prompted "Terminate batch job?" type Y then Enter)
npx -y create-vite@latest fct-sim --template react

# 2. Copy the FCT simulator (you MUST be in the repo root, not inside fct-sim!)
Copy-Item "src\computational_models\jsx\SYN13_simulation.jsx" -Destination "fct-sim\src\App.jsx" -Force

# 3. Enter the app folder and re-launch (npm install already ran in step 1)
cd fct-sim
npm install recharts
npm run dev
# → Open http://localhost:5173 in your browser
```

> ⚠️ **"Target directory is not empty" error?** This means `fct-sim/` already exists from a previous attempt. Delete it first:
> ```powershell
> Remove-Item -Recurse -Force fct-sim
> ```
> Then re-run from step 1.

> ⚠️ **Blank page (shows "Hello Vite")?** You forgot to copy `SYN13_simulation.jsx` to `App.jsx`. Return to the repo root and run the `Copy-Item` command (step 2 above).

#### Step 6 — Run the Cosmic IB Dashboard (Streamlit)

```powershell
# Return to the repo root first
cd ..

# The dashboard is a submodule — if cloned with --recursive, it's already here:
cd src\computational_models\cosmic-ib-dashboard

# If the directory is empty (submodule not initialized):
# cd back to repo root and run: git submodule update --init --recursive

# Install dashboard-specific requirements
pip install -r requirements.txt

# Launch
streamlit run app.py
# → Opens at http://localhost:8501

# Return to repo root when done
cd ..\..\..
```

#### Step 7 — Run the EEG Phase Transition Pipeline

```powershell
# From repo root
python src\computational_models\python\fct_phase_transition_viz.py
```

> **Note:** This script is a conceptual demonstration pipeline. It requires EEG data to produce output. Without data, it defines the analysis functions and exits cleanly.

#### Step 8 — Open HTML Interactive Tools

```powershell
# These work in any browser with zero dependencies — just double-click or:
Start-Process src\computational_models\html\implementation_roadmap.html
Start-Process src\computational_models\html\complete_upgrade_priority_table.html
```

---

### 3B. Windows WSL (Linux Subsystem)

> **Best for:** Advanced users who want full Linux compatibility with `make` and `gcc`.

#### Step 1 — Install WSL (One-Time)

Open **PowerShell as Administrator** (right-click → Run as Administrator):

```powershell
wsl --install
```

Restart your PC. After restart, Ubuntu will auto-launch to complete setup. Create a username and password when prompted.

> **What is WSL?** Windows Subsystem for Linux lets you run a real Linux kernel inside Windows. You get a full Ubuntu terminal with `apt`, `bash`, `gcc`, and everything else — no dual-boot needed.

#### Step 2 — Install Dependencies Inside WSL

Open the **Ubuntu** terminal (search "Ubuntu" in Start menu):

```bash
# Update package lists
sudo apt update && sudo apt upgrade -y

# Python
sudo apt install -y python3 python3-pip python3-venv

# Node.js via nvm (recommended — gives you version control)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20

# Git
sudo apt install -y git

# C++ build tools
sudo apt install -y cmake build-essential libhdf5-dev libopenmpi-dev

# Python packages
pip3 install numpy scipy scikit-learn statsmodels fooof streamlit healpy astropy
```

#### Step 3 — Clone the Repository

```bash
# Option A: Clone to your Windows files (accessible from both WSL and Windows)
cd /mnt/c/Users/$USER/Desktop
git clone --recursive https://github.com/LiranOG/Fractal-Cosmopsychism-Theory.git
cd Fractal-Cosmopsychism-Theory

# Option B: Clone to WSL home directory (faster I/O, Linux-only access)
cd ~
git clone --recursive https://github.com/LiranOG/Fractal-Cosmopsychism-Theory.git
cd Fractal-Cosmopsychism-Theory
```

> 💡 **Performance tip:** If you plan to do C++ builds, clone to `~` (Option B). Cross-filesystem I/O between WSL and Windows (`/mnt/c/...`) is significantly slower.

#### Step 4 — Run the SYN-13 Simulator

```bash
# From repo root
# 1. Scaffold — Vite will auto-start the server. Press CTRL+C when you see "VITE ready".
npx -y create-vite@latest fct-sim --template react

# 2. Copy the simulator (from repo root!)
cp src/computational_models/jsx/SYN13_simulation.jsx fct-sim/src/App.jsx

# 3. Re-launch
cd fct-sim
npm install recharts
npm run dev
# → http://localhost:5173 (accessible from your Windows browser)
```

#### Step 5 — Run the Cosmic IB Dashboard

```bash
# From repo root
cd src/computational_models/cosmic-ib-dashboard
pip3 install -r requirements.txt
streamlit run app.py
# → http://localhost:8501
```

#### Step 6 — Open HTML Tools in Windows Browser from WSL

```bash
explorer.exe "$(wslpath -w src/computational_models/html/implementation_roadmap.html)"
```

---

### 3C. Windows Node.js Only (JSX Simulator)

> **Best for:** Researchers who **only** want the Interactive SYN-13 Simulator — no Python, no C++.

#### Step 1 — Install Node.js

Download from [nodejs.org](https://nodejs.org/en/download) — choose **LTS (v20+)**.

Verify in PowerShell:

```powershell
node --version   # Should show v20.x or higher
npm --version    # Should show 10.x or higher
```

#### Step 2 — Clone (Shallow — No Submodules)

```powershell
# Minimal clone
git clone --depth=1 https://github.com/LiranOG/Fractal-Cosmopsychism-Theory.git
cd Fractal-Cosmopsychism-Theory
```

#### Step 3 — Set Up & Launch the SYN-13 Simulator

```powershell
# Allow scripts (one-time)
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

# 1. Scaffold the Vite app
#    Vite 8.x auto-starts the server. Wait for "VITE ready", then press CTRL+C.
npx -y create-vite@latest fct-sim --template react

# 2. Copy the simulator (from repo root!)
Copy-Item "src\computational_models\jsx\SYN13_simulation.jsx" -Destination "fct-sim\src\App.jsx" -Force

# 3. Enter folder and re-launch
cd fct-sim
npm install recharts
npm run dev
# → http://localhost:5173
```

#### Step 4 — Set Up & Launch the Validation Mission Control

```powershell
# Return to repo root
cd ..

# 1. Scaffold second Vite app (press CTRL+C when server starts)
npx -y create-vite@latest fct-validation --template react

# 2. Copy the dashboard
Copy-Item "src\computational_models\jsx\ValidationMissionControl.jsx" -Destination "fct-validation\src\App.jsx" -Force

# 3. Enter folder and re-launch
cd fct-validation
npm run dev
# → http://localhost:5174 (auto-increments since 5173 is taken)
```

#### Step 5 — HTML Tools (Zero Dependencies)

Simply double-click these files in File Explorer:

```
src\computational_models\html\implementation_roadmap.html
src\computational_models\html\complete_upgrade_priority_table.html
src\computational_models\html\AUE_Full_Physics_Analysis.html
src\computational_models\html\PRISM_interactive.html
src\computational_models\html\SYNAPSE_Framework.html
```

They work in any modern browser with zero dependencies.

---

## 4. Linux — Three Installation Methods

### 4A. Linux Native (Ubuntu/Debian)

```bash
# ── Step 1: Prerequisites ──
sudo apt update && sudo apt upgrade -y
sudo apt install -y python3 python3-pip python3-venv git curl

# Node.js via nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20

# ── Step 2: Clone ──
git clone --recursive https://github.com/LiranOG/Fractal-Cosmopsychism-Theory.git
cd Fractal-Cosmopsychism-Theory

# ── Step 3: Python setup (virtual environment recommended) ──
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install numpy scipy scikit-learn statsmodels fooof streamlit healpy astropy

# ── Step 4: SYN-13 Simulator ──
# Vite auto-starts — press CTRL+C when you see "VITE ready"
npx -y create-vite@latest fct-sim --template react
cp src/computational_models/jsx/SYN13_simulation.jsx fct-sim/src/App.jsx
cd fct-sim && npm install recharts && npm run dev &
cd ..
# → http://localhost:5173

# ── Step 5: Cosmic IB Dashboard ──
cd src/computational_models/cosmic-ib-dashboard
pip install -r requirements.txt
streamlit run app.py &
cd ../../..
# → http://localhost:8501

# ── Step 6: EEG Pipeline ──
python3 src/computational_models/python/fct_phase_transition_viz.py

# ── Step 7: HTML Tools ──
xdg-open src/computational_models/html/implementation_roadmap.html

# ── Step 8: HTML Tools ──
xdg-open src/computational_models/html/implementation_roadmap.html
```

### 4B. Linux Native (Fedora/RHEL)

```bash
# ── Step 1: Prerequisites ──
sudo dnf update -y
sudo dnf install -y python3 python3-pip git curl cmake gcc-c++ make

# Node.js via nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20

# ── Step 2: Clone ──
git clone --recursive https://github.com/LiranOG/Fractal-Cosmopsychism-Theory.git
cd Fractal-Cosmopsychism-Theory

# ── Step 3: Python setup ──
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install numpy scipy scikit-learn statsmodels fooof streamlit healpy astropy

# ── Step 4–8: Same as Ubuntu (see 4A Steps 4–8 above) ──
```

> **Fedora-specific note:** If `healpy` fails to install, you may need:
> ```bash
> sudo dnf install -y cfitsio-devel
> ```

### 4C. Linux Native (Arch/Manjaro)

```bash
# ── Step 1: Prerequisites ──
sudo pacman -Syu
sudo pacman -S --noconfirm python python-pip git curl cmake base-devel nodejs npm

# ── Step 2: Clone ──
git clone --recursive https://github.com/LiranOG/Fractal-Cosmopsychism-Theory.git
cd Fractal-Cosmopsychism-Theory

# ── Step 3: Python setup ──
python -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install numpy scipy scikit-learn statsmodels fooof streamlit healpy astropy

# ── Step 4–8: Same as Ubuntu (see 4A Steps 4–8 above) ──
```

> **Arch-specific note:** If `fooof` or `healpy` fails, install the AUR helpers:
> ```bash
> yay -S python-healpy  # via AUR
> ```

---

## 5. macOS — Three Installation Methods

### 5A. macOS Homebrew (Native)

> **Best for:** Most macOS users. Works on both Apple Silicon (M1/M2/M3/M4) and Intel Macs.

```bash
# ── Step 1: Install Homebrew (if not present) ──
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install tools
brew install python@3.11 git cmake node

# Optional: for HPC builds
brew install cmake

# ── Step 2: Clone ──
git clone --recursive https://github.com/LiranOG/Fractal-Cosmopsychism-Theory.git
cd Fractal-Cosmopsychism-Theory

# ── Step 3: Python setup (virtual environment) ──
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install numpy scipy scikit-learn statsmodels fooof streamlit healpy astropy

# ── Step 4: SYN-13 Simulator ──
npx -y create-vite@latest fct-sim --template react
cp src/computational_models/jsx/SYN13_simulation.jsx fct-sim/src/App.jsx
cd fct-sim && npm install && npm install recharts && npm run dev &
cd ..
# → http://localhost:5173

# ── Step 5: Cosmic IB Dashboard ──
cd src/computational_models/cosmic-ib-dashboard
pip install -r requirements.txt
streamlit run app.py
# → http://localhost:8501

# ── Step 6: HTML Tools ──
open src/computational_models/html/implementation_roadmap.html
open src/computational_models/html/complete_upgrade_priority_table.html
```

### 5B. macOS Python venv (Isolated)

> **Best for:** Users who want strict Python environment isolation (e.g., data scientists with many projects).

```bash
# ── Step 1: Prerequisites ──
brew install python@3.11 git node

# ── Step 2: Clone ──
git clone --recursive https://github.com/LiranOG/Fractal-Cosmopsychism-Theory.git
cd Fractal-Cosmopsychism-Theory

# ── Step 3: Create isolated environment ──
python3 -m venv .venv
source .venv/bin/activate

# Verify isolation
which python   # Should show: .../Fractal-Cosmopsychism-Theory/.venv/bin/python
which pip      # Should show: .../Fractal-Cosmopsychism-Theory/.venv/bin/pip

pip install --upgrade pip
pip install numpy scipy scikit-learn statsmodels fooof streamlit healpy astropy

# ── Step 4: Run components (same as 5A Steps 4–6) ──

# ── IMPORTANT: Deactivate when done ──
deactivate
```

> 💡 **Why venv?** Virtual environments prevent FCT's Python packages from conflicting with your system Python or other projects. Always activate the venv (`source .venv/bin/activate`) before running FCT Python components.

### 5C. macOS Node.js Only (JSX Simulator)

> **Best for:** Researchers who only want the interactive simulators.

```bash
# Install Node.js
brew install node   # or download from nodejs.org

# Clone (shallow — no submodules)
git clone --depth=1 https://github.com/LiranOG/Fractal-Cosmopsychism-Theory.git
cd Fractal-Cosmopsychism-Theory

# SYN-13 Simulator — Vite auto-starts, press CTRL+C when you see "VITE ready"
npx -y create-vite@latest fct-sim --template react
cp src/computational_models/jsx/SYN13_simulation.jsx fct-sim/src/App.jsx
cd fct-sim && npm install recharts && npm run dev
# → http://localhost:5173
```

---

## 6. Component Deep Dives

### 6A. SYN-13 Interactive Simulator (React/Vite)

**What it is:** An interactive browser-based dashboard for the FCT Master Equation (SYN-13) — a 6-dimensional coupled ODE system solved in real-time via RK4 integration. You can adjust all 16 parameters and observe how consciousness state-variables (κ, Φ, ζ, ω, W, β) evolve across developmental stages.

**Requirements:** Node.js 18+

**Setup (from repo root):**

```bash
# 1. Scaffold the React app
#    Vite 8.x auto-starts the server. Wait for "VITE ready", then press CTRL+C.
npx -y create-vite@latest fct-sim --template react

# 2. ⚠️ Copy FCT simulator (from repo root — NOT from inside fct-sim!)
#    Linux/macOS/WSL:
cp src/computational_models/jsx/SYN13_simulation.jsx fct-sim/src/App.jsx
#    Windows PowerShell:
#    Copy-Item "src\computational_models\jsx\SYN13_simulation.jsx" -Destination "fct-sim\src\App.jsx" -Force

# 3. Enter app folder, install recharts, and re-launch
cd fct-sim
npm install recharts
npm run dev
```

**What you should see:** A dark-themed dashboard at `http://localhost:5173` with:
- **Left panel:** 16 parameter sliders organized by category (Karmic Dynamics, IIT/Veil, Free Will, η Function)
- **Tabs:** Phase Portrait (k,φ), Time Series, Bifurcation, ε-Sensitivity
- **6 developmental stage trajectories:** Stage I (Static) through Stage V (Approach)

**Common issues:**
| Problem | Cause | Fix |
|---------|-------|-----|
| Blank page / "Hello Vite" | `App.jsx` not replaced | Run the `cp`/`Copy-Item` command from repo root |
| `Cannot find module 'recharts'` | recharts not installed | `npm install recharts` inside `fct-sim/` |
| Port 5173 already in use | Previous dev server running | Kill it: `npx kill-port 5173`, or Vite auto-picks 5174 |
| "Target directory not empty" | `fct-sim/` already exists | Delete it: `rm -rf fct-sim` (Linux) or `Remove-Item -Recurse -Force fct-sim` (Windows) |

### 6B. Validation Mission Control Dashboard

**What it is:** A comprehensive tracker for all 14 empirical validation targets, organized by readiness phase (Already Cooked → On the Horizon). Shows confidence levels, formulas, existing evidence, and next actions.

**Requirements:** Node.js 18+

**Setup (from repo root):**

```bash
# 1. Scaffold (Vite auto-starts — press CTRL+C when you see "VITE ready")
npx -y create-vite@latest fct-validation --template react

# 2. Copy the dashboard (from repo root!)
# Linux/macOS/WSL:
cp src/computational_models/jsx/ValidationMissionControl.jsx fct-validation/src/App.jsx
# Windows PowerShell:
# Copy-Item "src\computational_models\jsx\ValidationMissionControl.jsx" -Destination "fct-validation\src\App.jsx" -Force

# 3. Re-launch
cd fct-validation
npm run dev
# → http://localhost:5174 (or next available port)
```

> **Note:** The Validation Dashboard does NOT require `recharts` — it uses no chart library, only pure React components.

### 6C. Cosmic IB Dashboard (Streamlit/SDSS)

**What it is:** A Python/Streamlit pipeline that processes SDSS DR18 spectroscopic data to compute cosmic-scale IB efficiency η_IB. Tests the Universal IB Invariance Conjecture (UIBIC) at cosmological scales.

**Requirements:** Python 3.10+, Streamlit

**Setup:**

The cosmic-ib-dashboard is included as a **Git submodule** at `src/computational_models/cosmic-ib-dashboard/`.

```bash
# If you cloned with --recursive, it's already populated:
cd src/computational_models/cosmic-ib-dashboard

# If the directory is empty, initialize the submodule:
cd ../../..  # back to repo root
git submodule update --init --recursive
cd src/computational_models/cosmic-ib-dashboard

# Install requirements
pip install -r requirements.txt

# Launch
streamlit run app.py
# → http://localhost:8501
```

### 6D. EEG Phase Transition Pipeline (Python)

**What it is:** A conceptual analysis pipeline implementing SYN-10.1: computing Veil Density (ζ) from EEG power spectra via FOOOF, Presence/Free Will ratio (W) from mTRF temporal response functions, and Critical Slowing Down (CSD) early warning signals.

**Requirements:** Python 3.10+, FOOOF, scipy, statsmodels

> ⚠️ **Important:** This pipeline is a **demonstrative framework**. It requires real EEG data (continuous raw time-series) and an auditory stimulus envelope to produce output. Without input data, it defines the analysis functions and exits without error.

```bash
# From repo root
python src/computational_models/python/fct_phase_transition_viz.py
```

### 6E. HTML Interactive Tools (Zero Install)

**What they are:** Self-contained HTML/CSS/JS tools that run directly in your browser. No installation, no server, no dependencies.

| File | Description |
|------|-------------|
| `implementation_roadmap.html` | 18-month Gantt-style project roadmap |
| `complete_upgrade_priority_table.html` | SYN upgrade priority matrix |
| `AUE_Full_Physics_Analysis.html` | Complete physics analysis dashboard |
| `PRISM_interactive.html` | PRISM framework interactive explorer |
| `SYNAPSE_Framework.html` | SYNAPSE architecture visualization |

**How to open:**
- **Windows:** Double-click the file, or `Start-Process <path>` in PowerShell
- **Linux:** `xdg-open <path>`
- **macOS:** `open <path>`

---

## 7. Port Reference & URLs

| Service | Default URL | Started By | Notes |
|---------|------------|-----------|-------|
| SYN-13 ODE Simulator | http://localhost:5173 | `npm run dev` in `fct-sim/` | Auto-increments if port busy |
| Validation Dashboard | http://localhost:5174 | `npm run dev` in `fct-validation/` | Requires separate Vite app |
| Cosmic IB Dashboard | http://localhost:8501 | `streamlit run app.py` | In `src/computational_models/cosmic-ib-dashboard/` |
| HTML Tools | File system | Double-click / `open` / `xdg-open` | No server needed |

---

## 8. Troubleshooting & FAQ

### Installation Errors

<details>
<summary><b>❌ <code>git clone --recursive</code> — "fatal: repository not found" or "Permission denied"</b></summary>

**Cause:** The repository URL is incorrect, or you don't have access.

**Fix:**
1. Verify the URL: `https://github.com/LiranOG/Fractal-Cosmopsychism-Theory.git`
2. Make sure the repo is public (or you have access if private).
3. If behind a corporate proxy: `git config --global http.proxy http://proxy:port`
</details>

<details>
<summary><b>❌ <code>cd Fractal-Cosmopsychism-Theory</code> — "Cannot find path"</b></summary>

**Cause:** You're in the wrong directory. The clone creates the folder where you run it.

**Fix:**
```powershell
# See where you are
pwd

# Navigate to where you put the project. Example:
cd $HOME\Desktop\Fractal-Cosmopsychism-Theory
```
</details>

<details>
<summary><b>❌ <code>submodule empty</code> — cosmic-ib-dashboard directory is empty</b></summary>

**Cause:** You cloned without `--recursive`.

**Fix:**
```bash
git submodule update --init --recursive
```
</details>

<details>
<summary><b>❌ <code>npx: command not found</code></b></summary>

**Cause:** Node.js is not installed or not in PATH.

**Fix:**
1. Install Node.js from [nodejs.org](https://nodejs.org/en/download).
2. Close and reopen your terminal.
3. Verify: `node --version` should show v18+.
</details>

<details>
<summary><b>❌ <code>npx cannot be loaded because running scripts is disabled on this system</code></b></summary>

**Cause:** PowerShell execution policy blocks scripts.

**Fix:**
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
# Type A (Yes to All)
```
</details>

<details>
<summary><b>❌ <code>npx create-vite</code> — "Target directory is not empty"</b></summary>

**Cause:** The `fct-sim/` directory already exists from a previous attempt.

**Fix:** Delete it and re-run:
```bash
# Linux/macOS/WSL:
rm -rf fct-sim

# Windows PowerShell:
Remove-Item -Recurse -Force fct-sim
```
</details>

<details>
<summary><b>❌ <code>copy</code>/<code>cp</code> — "Cannot find path" for SYN13_simulation.jsx</b></summary>

**Cause:** You are NOT in the repository root directory. The source path `src/computational_models/jsx/...` is **relative to the repo root**.

**Fix:**
```bash
# Navigate back to the repo root
cd /path/to/Fractal-Cosmopsychism-Theory

# Verify the file exists:
ls src/computational_models/jsx/SYN13_simulation.jsx          # Linux/macOS
dir src\computational_models\jsx\SYN13_simulation.jsx          # Windows

# Then run the copy
cp src/computational_models/jsx/SYN13_simulation.jsx fct-sim/src/App.jsx
```

> 🚨 **This is the #1 most common error.** The terminal log shows the user ran `copy src\computational_models\...` from inside `fct-sim\`, so the shell looked for `fct-sim\src\computational_models\...` which doesn't exist.
</details>

<details>
<summary><b>❌ Vite dev server shows blank page or "Hello Vite + React"</b></summary>

**Cause:** The `App.jsx` file was not replaced with the FCT simulator.

**Fix:**
1. Stop the dev server (Ctrl+C).
2. Navigate to the **repo root** (NOT inside `fct-sim/`).
3. Run the copy command:
   ```bash
   cp src/computational_models/jsx/SYN13_simulation.jsx fct-sim/src/App.jsx
   ```
4. Restart: `cd fct-sim && npm run dev`
</details>

### Python Errors

<details>
<summary><b>❌ <code>'python' is not recognized</code> (Windows)</b></summary>

**Cause:** Python is not in your system PATH.

**Fix (choose one):**
1. **Reinstall Python** — make sure to check **"Add Python to PATH"** during installation.
2. **Use the Microsoft Store version:** `python3` (Windows 10+).
3. **Use the full path:** `C:\Users\<You>\AppData\Local\Programs\Python\Python311\python.exe`
4. **Try `py` instead of `python`** — Windows has a `py` launcher that auto-detects Python versions.
</details>

<details>
<summary><b>❌ <code>ModuleNotFoundError: No module named 'numpy'</code></b></summary>

**Cause:** Python dependencies not installed.

**Fix:**
```bash
pip install numpy scipy scikit-learn statsmodels fooof streamlit healpy astropy
```

If using a virtual environment, make sure it's activated first:
```bash
source .venv/bin/activate   # Linux/macOS
.venv\Scripts\Activate.ps1  # Windows PowerShell
```
</details>

<details>
<summary><b>❌ <code>pip install healpy</code> fails on Windows</b></summary>

**Cause:** `healpy` has C dependencies that are difficult to compile on native Windows.

**Fix (choose one):**
1. **Use WSL** (recommended) — `healpy` installs cleanly on Linux.
2. **Use conda:** `conda install -c conda-forge healpy`
3. **Skip healpy** — it's only needed for the Cosmic IB Dashboard, not for the SYN-13 simulator.
</details>

<details>
<summary><b>❌ <code>streamlit: command not found</code></b></summary>

**Cause:** Streamlit not installed or not in PATH.

**Fix:**
```bash
pip install streamlit

# If still not found, use the module form:
python -m streamlit run app.py
```
</details>

### General Questions

<details>
<summary><b>❓ Do I need ALL these tools to understand the theory?</b></summary>

**No.** The theoretical framework is entirely contained in markdown files. You can read everything with just a text editor or on GitHub. The computational tools are optional — they provide interactive exploration and empirical analysis capabilities.

**To just read the theory:** Open `docs/whitepapers/FCT_whitepaper_v1.md` and `src/theory_and_math/SYN_REGISTRY.md`.
</details>

<details>
<summary><b>❓ What's the difference between the SYN-13 Simulator and the Validation Dashboard?</b></summary>

- **SYN-13 Simulator** = Interactive ODE solver. You tweak 16 math parameters and watch how consciousness state-variables evolve. It's a *mathematical playground*.
- **Validation Dashboard** = Research mission tracker. It lists 14 empirical predictions, their confidence levels, existing evidence, and next actions. It's a *project management tool*.

Both are React apps, but they serve completely different purposes.
</details>

<details>
<summary><b>❓ Why do I need to copy App.jsx manually? Can't the repo just include a ready-to-run app?</b></summary>

The Vite/React project structure includes build tooling (`node_modules/`, config files) that would bloat the repository by 100MB+. By scaffolding fresh with `npx create-vite`, you get a clean, up-to-date React setup, and the FCT simulator is just a single file that drops in as `App.jsx`.
</details>

<details>
<summary><b>❓ Can I use <code>yarn</code> or <code>pnpm</code> instead of <code>npm</code>?</b></summary>

**Yes.** All three package managers work identically for this project:

```bash
# yarn
yarn add recharts
yarn dev

# pnpm
pnpm add recharts
pnpm dev
```
</details>

---

*Last updated: 2026-04-01 | Tested on: Windows 11 (PowerShell 7.4), Ubuntu 22.04, macOS Sonoma 14*

