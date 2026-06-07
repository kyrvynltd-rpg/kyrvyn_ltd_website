# Kyrvyn Ltd — AI-Powered Website Improvement Implementation Plan

This document defines a phase-by-phase, IDE-executable implementation plan to refine the Kyrvyn Ltd website’s visual design, UX, accessibility, performance, and conversion funnel—while staying aligned with the current repository architecture and technology stack.

---

## 0) Project Goals

### Business Goals

- Position Kyrvyn Ltd as a premium provider of enterprise-grade web development and blockchain development solutions.
- Increase buyer confidence through clear services, proof, and case studies.
- Improve conversion performance through functional contact + newsletter capture flows.

### UX Goals

- Clarify information hierarchy: **Services → Proof (Projects) → Research → Contact**.
- Deliver consistent, high-quality UI across all routes.
- Ensure mobile-first responsiveness for common breakpoints.

### Quality Goals (Non-Negotiables)

- Cross-browser support: Chrome/Firefox/Safari/Edge (latest 2 versions).
- Lighthouse minimums (key pages): Performance ≥ 90, Accessibility ≥ 90, Best Practices ≥ 90.
- WCAG 2.1 AA compliance target (with documented checklist and fixes).

---

## 1) Repository Scope & Constraints (Current State Anchors)

### Primary Routes (App Router)

- Home: `src/app/page.tsx`
- About: `src/app/about/page.tsx`
- Projects: `src/app/projects/page.tsx` (currently placeholder/empty UI)
- Blog listing & post: `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx` (Sanity)
- Contact: `src/app/contact/page.tsx` (form UI only; no submission)
- Legal: `src/app/privacy/page.tsx`, `src/app/terms/page.tsx`, `src/app/privacy-policy/page.tsx`
- Sanity Studio: `src/app/admin/[[...index]]/page.tsx`

### Design System Inputs

- Tailwind config: `tailwind.config.ts`
- Global tokens: `src/app/globals.css` (CSS variables)
- UI primitive: `src/components/ui/GlassCard.tsx` (currently the main “component system”)

### Notable Technical Constraints

- No API routes exist (`src/app/api` absent) → conversion forms require implementation.
- 3D animated background (`src/components/3d/*`) can impact performance and accessibility if not adaptive.

---

## 2) AI-in-the-IDE Automation Requirements (Workflow)

This plan assumes use of AI features inside the IDE to automate repetitive analysis and code changes safely.

### Required AI Capabilities

- **Semantic code search**: locate features, styles, and repeated patterns quickly.
- **File reading/summarization**: explain current behavior before edits.
- **Diff-based edits**: propose changes as patch previews before applying.
- **Diagnostics review**: surface TypeScript/ESLint errors during implementation.

### Operating Rules (Execution Discipline)

- Never apply broad refactors without a staged diff preview and verification.
- Prefer incremental edits with checkpoints after each milestone.
- Do not introduce secrets (API keys, tokens) into source control. Use environment variables.

---

## 3) Dependency Management Specifications

### Package Manager and Locking

- Use `npm` consistently.
- Keep `package-lock.json` in sync with `package.json`.
- Avoid adding new dependencies unless they solve a specific, reviewed problem.

### Acceptable Dependency Changes (If Needed)

- Utility for class composition (only if necessary for variants): e.g., `clsx` or equivalent.
- Tailwind plugins only if required by existing utility usage (e.g., line clamping).

### Validation

- `npm install` completes without warnings that indicate broken peer dependencies.
- `npm run lint` passes.
- `npm run build` passes.

---

## 4) Phased Implementation (Milestone-Based)

### Phase A: High-Fidelity Design Prototype Development

**Outcome:** A final prototype + component spec that can be implemented directly.

#### Tasks

- [ ] Create a page-level IA map (Home, Services, Projects, Blog, Contact).
- [ ] Define design tokens (color, type scale, spacing, radii, shadows).
- [ ] Define UI components with states (default/hover/focus/disabled/loading/error).
- [ ] Prototype at breakpoints: 390, 768, 1024, 1440.

#### Validation Criteria

- [ ] Prototype includes mobile + desktop layouts for: Home, Projects, Contact.
- [ ] CTA hierarchy is explicit (primary vs secondary).
- [ ] Form states are defined (pending/success/error).

---

### Phase B: Stakeholder Review & Feedback Iteration

**Outcome:** Prototype freeze + implementation backlog.

#### Tasks

- [ ] Review copy positioning (enterprise web + blockchain services).
- [ ] Approve case study structure (fields + layout).
- [ ] Approve conversion funnel flow (contact + newsletter).

#### Validation Criteria

- [ ] Signed-off prototype + content requirements.
- [ ] Backlog created with clear “Definition of Done” per item.

---

### Phase C: Production Code Implementation & Integration

**Outcome:** Feature-complete site in staging.

#### Sprint 1: Design System Foundation + Navigation/Structure

- [ ] Implement UI primitives/variants:
  - [ ] Card variants (hero/standard/legal)
  - [ ] Buttons (primary/secondary/ghost)
  - [ ] Badges/tags
  - [ ] Form input styles with focus rings
- [ ] Normalize containers and spacing across routes (consistent max width + padding).
- [ ] Improve navigation accessibility (mobile menu semantics + focus behavior).

**Validation Criteria**

- [ ] Visual parity vs prototype on Home and Contact.
- [ ] Keyboard navigation works for header and mobile menu.
- [ ] No TypeScript/ESLint regressions.

#### Sprint 2: Projects → Premium Case Studies

- [ ] Replace placeholder Projects layout with real content structures.
- [ ] Implement case study cards with:
  - problem → solution → measurable result → tech stack
- [ ] Add a case study detail view (route or expandable pattern).

**Validation Criteria**

- [ ] Projects page contains at least 3 complete case studies (or structured placeholders with clear TODO fields).
- [ ] Consistent typography and CTA placement across projects.

#### Sprint 3: Conversion Funnel (Contact + Newsletter)

- [ ] Implement a real contact submission method (choose one):
  - [ ] Option A: Next.js route handler + email delivery provider (recommended for control)
  - [ ] Option B: External form provider integration (fastest)
- [ ] Add anti-spam measures:
  - [ ] Honeypot field
  - [ ] Rate limiting strategy (if server-side)
- [ ] Add success/error UI states and confirmation messaging.
- [ ] Implement newsletter subscription submission (provider or API).

**Validation Criteria**

- [ ] Form submissions succeed end-to-end and show confirmation UI.
- [ ] Failed submissions show accessible error messaging.
- [ ] No console errors on submit, no secrets exposed in logs.

#### Sprint 4: Blog UX + CMS Hardening

- [ ] Improve blog listing performance and readability:
  - [ ] Avoid rendering full PortableText in list views; prefer excerpts.
  - [ ] Add `excerpt/summary` field to CMS schema if required.
- [ ] Ensure typography is consistent and readable across light/dark modes.

**Validation Criteria**

- [ ] Blog list cards render quickly and remain visually stable.
- [ ] CMS schema changes compile and Studio works.

---

### Phase D: Cross-Functional Pre-Launch Testing

**Outcome:** Release candidate meets quality gates.

#### QA Protocols

- **Cross-browser (latest 2):** Chrome, Firefox, Safari, Edge
- **Breakpoints:** 360/390/430, 768, 1024, 1280, 1440
- **Accessibility:** keyboard-only, focus visibility, heading structure, form labels/errors, reduced motion
- **Performance:** Lighthouse score thresholds on key pages
- **Links:** no broken internal links; external links open safely (`rel="noreferrer"`)

#### Tasks

- [ ] Run Lighthouse on Home, Projects, Contact.
- [ ] Validate 3D background performance:
  - [ ] Degrade or disable on mobile/low-power conditions
  - [ ] Respect `prefers-reduced-motion`
- [ ] Regression test page transitions and theme toggle.

#### Validation Criteria

- [ ] Lighthouse ≥ 90 (Perf/Acc/Best Practices) for Home, Projects, Contact.
- [ ] WCAG 2.1 AA checklist completed with documented evidence.
- [ ] Cross-browser matrix signed off.

---

### Phase E: Post-Launch Monitoring & Iterative Refinement

**Outcome:** Stabilized launch and measurable improvements.

#### Monitoring & Maintenance Procedures

- [ ] Monitor conversion events (contact submits, newsletter signups).
- [ ] Monitor page performance (TTFB, LCP, CLS) and error rates.
- [ ] Weekly review of behavior analytics and drop-off points.
- [ ] Backlog refinements based on observed engagement.

#### Validation Criteria

- [ ] No elevated error rates post-launch.
- [ ] Performance remains within Lighthouse targets on representative devices.

---

## 5) Task Assignment Model (AI-Executable “Owners”)

Use these role tags in the IDE task board (or issues):

- **[AI-Assist]** analysis + drafting diffs + generating component scaffolds
- **[Dev]** code review, apply diffs, run builds/tests
- **[Design]** prototypes/tokens, UI review
- **[QA]** browser + accessibility verification
- **[Content]** services/case studies copy and assets

Example task format:

- [ ] (Week 6) [Dev][AI-Assist] Implement CaseStudyCard component and Projects grid layout; validate responsive behavior at 390/768/1024/1440.

---

## 6) Quality Assurance Checkpoints (Per Phase)

### Required Checkpoints

- **Every PR / change batch**
  - [ ] TypeScript passes
  - [ ] Lint passes
  - [ ] Build passes
  - [ ] No broken links introduced
- **End of each Sprint**
  - [ ] Visual review vs prototype
  - [ ] Accessibility smoke test (keyboard + focus)
  - [ ] Performance spot-check (Home page Lighthouse)

---

## 7) Success Metrics (Measurable + Actionable)

### Baseline Requirement (Pre-Implementation)

- Capture baseline metrics before Week 4 code changes:
  - Avg time on Services/Projects pages
  - Contact form conversion rate
  - Scroll depth on Home
  - Lighthouse scores for Home/Projects/Contact

### Target Metrics

- [ ] +20% user engagement on service-related pages (avg time on page).
- [ ] +15% increase in contact form conversion rate.
- [ ] WCAG 2.1 AA compliance achieved and recorded.
- [ ] Lighthouse minimums achieved:
  - Performance ≥ 90
  - Accessibility ≥ 90
  - Best Practices ≥ 90

---

## 8) Risk Register + Mitigation Strategies

### R1: 3D Background Lowers Performance Scores

- Mitigation:
  - [ ] Adaptive mode: reduce effects on mobile
  - [ ] Respect `prefers-reduced-motion`
  - [ ] Provide fallback background
- Validation:
  - [ ] Lighthouse performance stays ≥ 90 on key pages.

### R2: Contact/Newsletter Funnels Don’t Convert

- Mitigation:
  - [ ] Clear CTA hierarchy + friction reduction
  - [ ] Fast, reliable submission path + confirmation UI
  - [ ] Spam mitigation without high user friction
- Validation:
  - [ ] Conversion rate improves vs baseline.

### R3: Accessibility Non-Compliance Late in Cycle

- Mitigation:
  - [ ] Make accessibility part of Definition of Done from Week 4
  - [ ] Weekly keyboard-only checks
- Validation:
  - [ ] WCAG 2.1 AA checklist complete by Week 10.

### R4: Uncontrolled Dependency Growth / Conflicts

- Mitigation:
  - [ ] Minimize new dependencies; document rationale
  - [ ] Keep lockfile consistent
- Validation:
  - [ ] Clean install/build in fresh environment.

---

## 9) Phase Completion Checklist (Sequential Execution)

### Phase 1 Complete When

- [ ] Prototype + tokens + component spec approved.
- [ ] Page IA and CTA map approved.

### Phase 2 Complete When

- [ ] Prototype freeze and backlog created with DoD.

### Phase 3 Complete When

- [ ] Projects contains real case study content.
- [ ] Contact + newsletter are functional.
- [ ] Accessibility and performance improvements implemented.

### Phase 4 Complete When

- [ ] Cross-browser sign-off.
- [ ] Lighthouse targets met.
- [ ] WCAG 2.1 AA checklist passed.

### Phase 5 Complete When

- [ ] Monitoring is active.
- [ ] First optimization iteration shipped based on real data.

---

## 10) Execution Notes (IDE-Based AI Automation)

### How to Execute Each Step Sequentially

- Use AI to:
  - Identify where changes belong (search for route/component ownership).
  - Draft minimal diffs for each task.
  - Keep changes small and verifiable.
- Always validate after each milestone:
  - run lint/build
  - check pages visually (mobile + desktop)
  - run Lighthouse on at least Home

---

End of plan.

---

## 11) User Inputs Required (To Fully Complete Success Criteria)

### Delivery & Infrastructure

- Contact delivery destination: set `CONTACT_WEBHOOK_URL` (Slack/Teams webhook, CRM ingestion endpoint, or internal API).
- Newsletter delivery destination: set `NEWSLETTER_WEBHOOK_URL`.
- Hosting target and environment model: Vercel vs self-hosted (affects logging, rate limiting, and monitoring options).

### Analytics (Required to measure +20% / +15% targets)

- Choose analytics provider:
  - Plausible: set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
  - Google Analytics: set `NEXT_PUBLIC_GA_ID`
- Provide baseline timeframe and confirm which pages are “service pages” for engagement tracking.

### Content

- Real case study content (at least 3): title, industry, services, stack, measurable outcomes, and permission level for disclosure.
- Primary CTA wording and contact expectations (response SLA, preferred contact channels).

### Compliance

- Confirm jurisdictional scope for legal pages and required contact method for DSAR requests (email vs form-only).
