# Security Policy

## Our Commitment

The Fractal Cosmopsychism Theory (FCT) repository contains scientific research code, interactive simulators, and documentation that serve an open-science mission. We take the security of this project seriously — both to protect the integrity of the research and to protect anyone who runs our code on their systems.

We follow responsible disclosure practices aligned with [GitHub's coordinated disclosure model](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing/about-coordinated-disclosure-of-security-vulnerabilities).

---

## Supported Versions

| Component | Version | Supported | Notes |
|-----------|---------|-----------|-------|
| **Repository (main branch)** | latest | ✅ | Always patched |
| **FCT Simulator** (`fct-sim/`) | Vite 8.x + React 19.x | ✅ | Client-side only — no server, no auth |
| **Python EEG Pipeline** | Python 3.10–3.12 | ✅ | Offline analysis scripts |
| **Cosmic IB Dashboard** | Streamlit latest | ✅ | Local-only — no public deployment |
| **Documentation** (`docs/`, `*.md`) | — | ❌ | Content-only — no executable code |

> **End-of-life policy:** We do not maintain legacy branches. Only the `main` branch receives security patches.

---

## Scope

### In Scope

The following are considered valid security concerns:

- **Dependency vulnerabilities** — Known CVEs in `npm` or `pip` dependencies used by the simulator or Python pipeline
- **Code injection** — Any path in the codebase that could allow arbitrary code execution when processing user-supplied input
- **Path traversal** — File access outside intended directories in `build_fct_repo.py` or any script that handles file paths
- **CI/CD pipeline security** — Vulnerabilities in GitHub Actions workflows (`.github/workflows/`) including action pinning, secret exposure, or injection via PR titles/branch names
- **Supply chain risks** — Compromised or typosquatted dependencies in `package.json` or Python imports
- **Sensitive data exposure** — Accidental inclusion of API keys, tokens, credentials, or personally identifiable information in any committed file

### Out of Scope

The following are **not** considered security vulnerabilities:

- Theoretical or scientific disagreements with the FCT framework
- Cosmetic issues in documentation or markdown rendering
- Performance issues that do not have a security impact
- Vulnerabilities in third-party services (GitHub, npm registry, PyPI) — report these to the respective platforms

---

## Reporting a Vulnerability

### How to Report

**Do NOT open a public GitHub Issue for security vulnerabilities.**

Instead, use one of the following private channels:

1. **GitHub Private Vulnerability Reporting (preferred)**
   - Navigate to the [Security tab](https://github.com/LiranOG/Fractal-Cosmopsychism-Theory/security) of this repository
   - Click **"Report a vulnerability"**
   - Fill in the advisory details following the template below

2. **Email**
   - Send a detailed report to: **[security contact to be added by repository owner]**
   - Use the subject line: `[FCT-SECURITY] Brief description of the issue`
   - If possible, encrypt your email using our PGP key (available upon request)

### What to Include

Please provide as much of the following as possible:

| Field | Description |
|-------|-------------|
| **Summary** | One-sentence description of the vulnerability |
| **Affected component** | Which file(s), script(s), or workflow(s) are affected |
| **Severity estimate** | Critical / High / Medium / Low (your best judgment) |
| **Steps to reproduce** | Step-by-step instructions to trigger the vulnerability |
| **Proof of concept** | Code snippet, screenshot, or log output demonstrating the issue |
| **Impact assessment** | What an attacker could achieve by exploiting this vulnerability |
| **Suggested fix** | If you have a proposed remediation, include it |
| **Environment** | OS, Node.js version, Python version, browser version (if relevant) |

### What to Expect

| Timeline | Action |
|----------|--------|
| **Within 48 hours** | We will acknowledge receipt of your report |
| **Within 7 days** | We will provide an initial assessment and severity classification |
| **Within 30 days** | We will release a fix for confirmed vulnerabilities, or provide a detailed timeline if more time is needed |
| **Upon fix release** | We will publicly credit you (unless you prefer to remain anonymous) |

We will keep you informed throughout the process. If we have not responded within the stated timeframes, please follow up.

---

## Security Measures in Place

### Automated Scanning

- **CodeQL** — Static analysis runs on every push to `main` and weekly, covering JavaScript/TypeScript and Python ([workflow](.github/workflows/codeql.yml))
- **Dependabot** — Automated dependency updates and vulnerability alerts are enabled for both npm and pip ecosystems
- **GitHub Secret Scanning** — Active on this repository to detect accidentally committed credentials

### Development Practices

- **No secrets in code** — All sensitive values are managed through GitHub Secrets and environment variables; none are hardcoded
- **Minimal permissions** — CI/CD workflows request only the permissions they need (`security-events: write`, `contents: read`)
- **Pinned actions** — All GitHub Actions use version-pinned references (`@v4`, `@v5`) to prevent supply chain attacks
- **No remote data ingestion** — The simulator and Python pipeline operate on local data only; no user-submitted data is fetched from external sources at runtime
- **Client-side only** — The FCT Simulator (`fct-sim/`) runs entirely in the browser with no backend server, no authentication, and no data persistence

### Dependency Management

- Dependencies are kept to the minimum required set
- `npm audit` and `pip audit` are run periodically
- Major version upgrades are reviewed manually before adoption

---

## Disclosure Policy

We follow a **coordinated disclosure** model:

1. **Reporter** submits a private vulnerability report
2. **Maintainer** acknowledges, triages, and develops a fix
3. **Fix** is merged to `main` with a security advisory
4. **Public disclosure** occurs after the fix is released, with credit to the reporter
5. **CVE assignment** is requested through GitHub for vulnerabilities that warrant it

We will never take legal action against security researchers who:
- Act in good faith
- Do not access or modify other users' data
- Do not disrupt the availability of the project
- Report vulnerabilities through the channels described above
- Allow reasonable time for remediation before public disclosure

---

## Security Contacts

| Role | Contact |
|------|---------|
| **Repository Owner** | [@LiranOG](https://github.com/LiranOG) |
| **Private Reporting** | [GitHub Security Advisories](https://github.com/LiranOG/Fractal-Cosmopsychism-Theory/security/advisories) |

---

## Recognition

We gratefully acknowledge security researchers who help keep this project safe. Contributors who report valid vulnerabilities will be listed here (with their permission):

<!-- 
| Date | Researcher | Vulnerability | Severity |
|------|-----------|---------------|----------|
| —    | —         | —             | —        |
-->

*No vulnerabilities have been reported yet.*

---

> *The security of the code that carries the theory is as important as the integrity of the theory itself. Both deserve rigorous, transparent, and honest treatment.*
