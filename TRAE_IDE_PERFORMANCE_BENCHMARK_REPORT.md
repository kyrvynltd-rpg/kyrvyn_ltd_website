# Trae IDE Performance Benchmark Report (Template)

## Objective

Demonstrate that the IDE setup remains responsive and stable when working in large workspaces (100k+ files) and when executing build/lint/test tasks.

## Test Environment

- OS:
- CPU:
- RAM:
- Disk:
- GPU:
- Trae IDE version:
- Extension set checksum (exported list + versions):
- Repository size (# files):

## Benchmarks

### A) Startup & Indexing

- Cold start (seconds):
- Warm start (seconds):
- Time to usable editor state:
- Indexing completion time:

### B) Editor Responsiveness

Target: < 100ms interactive response for common actions.

- Open file (median / p95):
- Search (median / p95):
- Go to definition (median / p95):
- Rename symbol (median / p95):

### C) Task Execution (Repository-specific)

- `npm run lint` duration:
- `npm run build` duration:
- Peak RAM during build:
- Peak CPU during build:

### D) Stability

- Crashes observed:
- Extension host restarts:
- Memory leak symptoms:

## Evidence Artifacts

- Screenshots of IDE performance panels (if available)
- Logs (if policy allows)
- Lighthouse summaries for key pages (if applicable)

## Findings

- What improved:
- What regressed:
- Recommendations:

## Sign-off

- Date:
- Reviewer:
- Next review date:
