name: doc-kit-expert
description: 'Use when working on webpack-doc-kit tasks involving TypeDoc, typedoc-plugin-markdown, custom theme/router, processor plugin, @node-core/doc-kit, nodejs/doc-kit conventions, or milestone alignment.'

# Doc-Kit Expert Workflow

Use this workflow for requests related to the webpack API docs pipeline and project milestones.

## Objective

Ensure all changes are aligned with:

- TypeDoc-based extraction.
- typedoc-plugin-markdown output shaping.
- Custom theme/router and processor behavior.
- @node-core/doc-kit structural requirements.

## Workflow Steps

1. Classify the request by pipeline stage and milestone scope.
2. Map affected files and expected downstream behavior.
3. Check compatibility with existing repository contracts.
4. Propose the smallest safe implementation.
5. Provide explicit verification commands and expected outcomes.
6. Flag milestone scope risks before implementation.

## Compatibility Matrix Template

For each change, answer:

- Stage impacted:
- Files impacted:
- Why this is compatible with current contract:
- Risk to doc-kit compatibility:
- Milestone scope fit:

## Milestone 1 Guardrails

- Prioritize correctness and structure over presentation.
- Avoid introducing architecture changes that belong to later milestones.
- Preserve type-map and routing assumptions unless explicitly changed.

## Milestone-Aware Extension

- For Milestone 2 tasks, allow visual and site customization work while preserving doc-kit compatibility.
- For Milestone 3 tasks, allow CI/CD and automation work while preserving the full TypeDoc-to-doc-kit pipeline.
- For Milestone 4 and 5 tasks, allow broader site and automation integration while preserving core API docs generation contracts.

## Output Format

When responding, include:

1. Stage classification.
2. Compatibility proof from repository files.
3. Minimal change plan.
4. Verification checklist.
5. Risks and rollback notes.
