# Repository Standards

## Code Quality

- Formatting: Prettier (enforced in CI and pre-commit)
- Linting: ESLint (Next.js + TypeScript)
- Type safety: `tsc --noEmit`
- Pre-commit: lint-staged + secret scanning + blocked file patterns

## Testing

- Unit tests: Vitest + Testing Library with coverage thresholds
- E2E tests: Playwright smoke tests
- Performance: Lighthouse CI

## Security

- Secrets scanning: gitleaks (CI + local hook when installed)
- Dependency scanning: Dependabot (daily) and CI audit reporting
- Static analysis: CodeQL (scheduled + PR)

## Scripts

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test:unit:coverage
npm run test:e2e
npm run build
```

## Ownership / Reviews

- Code owners: [.github/CODEOWNERS](../.github/CODEOWNERS)
- PR template: [.github/pull_request_template.md](../.github/pull_request_template.md)
