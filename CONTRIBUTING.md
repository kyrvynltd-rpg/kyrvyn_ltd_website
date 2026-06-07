# Contributing

## Development Workflow

- Create a feature branch from `main`.
- Open a pull request (no direct pushes to `main`).
- Ensure CI passes before requesting review.

## Local Setup

```bash
npm ci
npm run dev
```

## Quality Gates

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test:unit:coverage
npm run test:e2e
npm run build
```

## Pull Requests

- At least one code-owner approval is required.
- Keep PRs small and focused.
- Include tests for user-facing changes and for any new logic.

## Security

- Never commit secrets (`.env`, private keys, access tokens).
- Treat all user input as untrusted; validate and sanitize.
