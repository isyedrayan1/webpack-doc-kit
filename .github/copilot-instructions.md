---
description: 'Always-on repository instructions for webpack-doc-kit tasks.'
---

# webpack-doc-kit Copilot Instructions

## Project Contract

This repository implements a documentation pipeline for webpack API docs using:

1. TypeDoc extraction from webpack type definitions.
2. Markdown generation with typedoc-plugin-markdown.
3. Custom processing and theming for doc-kit compatibility.
4. Final site rendering with @node-core/doc-kit.

The canonical implementation exists in:

- generate-md.mjs
- plugins/processor.mjs
- plugins/theme/index.mjs
- doc-kit.config.mjs
- package.json scripts

## Expertise Scope

Treat this repository as a specialized documentation system with these core technologies:

- TypeDoc (TypeScript API extraction)
- typedoc-plugin-markdown (Markdown rendering)
- Custom TypeDoc processor and custom theme/router (doc-kit compatibility)
- @node-core/doc-kit and nodejs/doc-kit conventions (final site rendering)

When answering or implementing changes, prioritize these ecosystem rules and integration points over generic alternatives.

## Milestone-Aware Behavior

Support all project milestones. Do not force Milestone 1 unless the request is specifically milestone-1 scoped.

When no milestone is specified:

- Prioritize structural correctness and completeness of generated Markdown.
- Ensure output is valid for doc-kit consumption.
- Preserve existing pipeline compatibility and maintainability.

## Non-Negotiable Constraints

- Do not replace the documented pipeline with alternate doc generators.
- Do not bypass doc-kit theme/router integration.
- Do not introduce architecture that conflicts with existing repository conventions.
- Do not treat manually edited generated pages as a substitute for fixing pipeline logic.

## Required Reasoning Process

Before proposing implementation:

1. Classify the request by pipeline stage:
   - Type extraction
   - Markdown rendering
   - Post-processing
   - doc-kit rendering
   - CI/CD and automation (when relevant)
   - Site-level docs pages and integration (when relevant)
2. Cite repository files that prove compatibility.
3. If compatibility cannot be proven from repository conventions, mark the idea as speculative and ask before implementation.

## Required Validation Checklist

For changes affecting docs generation, themes, processors, or config:

1. npm run generate-docs
2. npm run build-html
3. npm run lint
4. npm run format:check

If one command is intentionally skipped, explain why.

## PR Readiness Checklist

- Change aligns with GSoC project architecture and milestone constraints.
- Markdown output remains doc-kit-compatible.
- type-map generation behavior is preserved unless explicitly changed.
- Scope remains minimal and maintainable.
