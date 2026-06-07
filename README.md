# Kyrvyn Ltd

Enterprise-grade website for Kyrvyn Ltd (web platform delivery + blockchain integration capabilities).

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Sanity CMS (Studio under `/admin` for non-static deployments)
- Playwright (E2E), Lighthouse CI (performance), Vitest (unit tests)

## Local development

```bash
npm ci
npm run dev
```

## Quality gates

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test:unit:coverage
npm run test:e2e
npm run build
```

## GitHub Pages (static)

This repo is configured for a Next.js static export so it can be deployed to GitHub Pages via GitHub Actions.

- Workflow: [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)
- Output directory: `out/`

### Required GitHub settings

- Repo Settings → Pages → Build and deployment → Source: GitHub Actions

### Optional configuration

- Set a repository variable `NEXT_PUBLIC_CONTACT_EMAIL` for the static `mailto:` fallback used on Contact + Newsletter forms.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) and branch protection guidance in [docs/BRANCH_PROTECTION.md](docs/BRANCH_PROTECTION.md).

## Security

See [SECURITY.md](SECURITY.md).
