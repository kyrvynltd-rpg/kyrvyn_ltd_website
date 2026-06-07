# Branch Protection (GitHub Settings)

Apply these rules to `main` (and `production` if you use it):

- Require a pull request before merging
- Require approvals: 1+
- Require review from Code Owners
- Dismiss stale approvals when new commits are pushed
- Require status checks to pass before merging:
  - quality / build-test
  - codeql / Analyze (when available)
- Require conversation resolution before merging
- Require linear history (optional)
- Do not allow force pushes
- Do not allow deletions
