# Trae IDE — Production-Grade Workspace Setup (Enterprise)

This repository includes a version-controlled Trae workspace configuration that standardizes formatting, linting, debugging, security checks, and repeatable workflows across teams.

## Quick Start (Windows)

1. Install prerequisites:
   - Git for Windows
   - Node.js LTS + npm
   - (Recommended) gitleaks
   - (Optional) GitHub CLI (`gh`) for PR/CI integration tasks
2. Run setup script:

```powershell
cd "c:\Users\Gabriele\Documents\Gabriele\Kyrvyn Ltd\website\Kyrvyn_Ltd"
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\setup-trae.ps1
```

3. In Trae IDE, open the workspace and install recommended extensions if not auto-installed.

## 1) Core IDE Configuration & Optimization

### Workspace performance settings (large codebase readiness)

Workspace config is defined in `.vscode/settings.json`:

- Aggressive watcher/index exclusions for `node_modules`, `.next`, `dist`, `coverage`, etc.
- TypeScript server memory increased for large projects.
- Minimap disabled to reduce render workload.

**Limitations:** IDE memory allocation limits and OS process priority are not fully controllable via workspace settings. For maximum performance on Windows:

- Enable SSD/NVMe for workspace
- Disable real-time AV scanning on `node_modules` and build output directories (per corporate policy)
- Ensure WSL/containers are configured with adequate RAM/CPU if used

### Formatting + lint integration (multi-language baseline)

- JS/TS/JSON/MD/YAML: Prettier as default formatter + ESLint fix actions on explicit save actions.
- Python: Ruff as formatter (requires extension).
- Go/Rust/Java/C#: controlled by their language servers/extensions.

## 2) Extension Ecosystem Curation

Recommended extensions are pinned in `.vscode/extensions.json` (install via IDE prompt or setup script).
Categories covered:

- AI-assisted dev: use Trae built-ins + optional PR tooling
- Static analysis: ESLint, Ruff, language servers
- Dependency/security: npm audit task + gitleaks hook
- Containers/K8s: Docker + Kubernetes tools
- Cloud/IaC: Terraform + YAML + GitHub Actions integration

Supply-chain risk mitigation approach:

- Prefer major publisher extensions (Microsoft/RedHat/HashiCorp/Astral)
- Keep extension list minimal and reviewed
- Re-audit extension list quarterly

## 3) Development Workflow Automation

### One-click workflows (Tasks)

Defined in `.vscode/tasks.json`:

- `deps: npm install`
- `quality: lint`
- `quality: build`
- `security: npm audit (high)`
- optional `security: gitleaks (if installed)`
- optional `ci: gh workflow run (manual)` (requires GitHub CLI)

### Pre-commit and pre-push enforcement

Installed via `git config core.hooksPath .githooks`:

- `.githooks/pre-commit`
  - blocks committing `.env` and private keys
  - runs gitleaks if installed
  - runs `npm run lint` when JS/TS-related files are staged
- `.githooks/pre-push`
  - runs `npm run build`

## 4) Debugging & Profiling Enhancements

`.vscode/launch.json` provides:

- `Next.js: Dev (inspect)` and `Node: Attach (9229)`

For profiling:

- Use built-in runtime profilers (Node/Chrome) and capture CPU profiles for slow pages.
- For React performance: use React DevTools Profiler.

## 5) Security & Compliance Implementation

### Secrets & encryption

Workspace-level settings cannot enforce full disk encryption; use platform controls:

- Windows: BitLocker for disk encryption
- Store secrets in enterprise secret managers (Vault/AWS Secrets Manager/Azure Key Vault)
- Use environment variables locally; never commit `.env`

### Automated secret detection

- gitleaks is the recommended local gate (pre-commit hook).
- For enterprise: add server-side scanning in CI as well.

### Audit logging & RBAC

IDE-level “audit logging of all actions” and “RBAC for shared workspaces” typically require:

- Enterprise identity + device management
- Remote dev platform (Codespaces/Dev Containers in managed hosts) or VDI
- Git hosting audit logs and protected branches

## 6) Collaboration & Remote Development

Recommended approaches:

- Dev Containers (standardized environments)
- Remote SSH for controlled build servers
- PR reviews: GitHub PR extension for inline reviews and CI status

## 7) Testing & Validation Requirements (IDE setup)

- Validate hooks: attempt a commit with a staged TS file; confirm lint runs.
- Validate tasks: run `deps: npm install`, `quality: lint`, `quality: build`.
- Validate debugging: start `Next.js: Dev (inspect)` and attach.

## 8) Maintenance Procedures

- Monthly: review extensions list + remove unused items.
- Quarterly: security audit of extension list and hook tooling.
- After major tool updates: run lint/build and validate debugger still works.
