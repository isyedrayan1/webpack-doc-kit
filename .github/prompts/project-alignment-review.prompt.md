---
mode: ask
description: 'Run a project-alignment review for proposed or completed changes in webpack-doc-kit using the issue tech stack and milestone context.'
---

Review this work strictly against webpack-doc-kit architecture, declared tech stack, and applicable milestone constraints.

Required architecture:

TypeDoc -> typedoc-plugin-markdown -> custom processor/theme/router -> @node-core/doc-kit

Provide the following sections:

1. Stage Classification

- Which stage(s) are affected and why.

2. Contract Alignment

- Which repository files prove this approach is compatible.
- Any assumptions that are not proven.

3. Milestone Scope Check

- Which milestone(s) this belongs to and why.
- In scope / out of scope determination.
- Any scope creep risks.

4. doc-kit Compatibility Risk

- Potential breaking points for generated structure, links, routing, or type map.

5. Validation Plan

- Exact commands to run.
- Expected pass/fail criteria.

6. PR Readiness Verdict

- PASS or FAIL.
- Minimal corrective actions if FAIL.
