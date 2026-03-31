---
description: 'Use when editing TypeDoc pipeline, typedoc-plugin-markdown theme/router, processor plugin, doc-kit configuration, or generated Markdown pages in this repository.'
applyTo: 'generate-md.mjs,plugins/**/*.mjs,doc-kit.config.mjs,pages/**/*.md'
---

# File-Scoped Rules For Docs Pipeline

## Quality Goals

For work in this repository, optimize for:

- Correctness of generated API content.
- Structural validity for @node-core/doc-kit consumption.
- Minimal, targeted changes.
- Alignment with the issue's declared tech stack and architecture.

## Stage-Specific Rules

### TypeDoc Extraction Stage

- Keep TypeDoc as the source extraction tool for webpack type definitions.
- Preserve repository assumptions around entry points and output location unless explicitly requested.

### Markdown Rendering Stage

- Keep typedoc-plugin-markdown in the pipeline.
- Keep custom theme/router integration compatible with doc-kit consumption.

### Post-Processing Stage

- Preserve namespace merge behavior unless fixing a documented bug.
- Preserve reflection cleanup behavior unless fixing a documented bug.
- Preserve type-map generation contract unless explicitly requested.

### doc-kit Rendering Stage

- Preserve metadata and type map linkage needed by doc-kit.
- Preserve repository and routing assumptions used by current doc-kit output.

### Multi-Milestone Support

- Milestone 1: focus on theme/output correctness and structural validity.
- Milestone 2+: allow customization work when explicitly requested, but keep compatibility with TypeDoc and doc-kit contracts.
- Milestone 3+: allow CI/CD and automation changes when explicitly requested, without bypassing generation stages.

## Out-Of-Scope By Default

- Framework migration.
- Introducing unrelated tooling.
- Hand-editing generated API pages to mask pipeline issues.

## Implementation Checklist

Before finalizing changes:

1. Confirm stage impact and compatibility with existing files.
2. Verify no unnecessary pipeline drift.
3. Run repository validation commands when applicable.
