# dependencies

## Class: `ConstDependency`

### Extends

- {NullDependency}

### Constructors

#### `new ConstDependency(expression, range[, runtimeRequirements])`

* `expression` {string}
* `range` {number|Tuple<number, number>}
* `runtimeRequirements` {string[]}
* Returns: {ConstDependency}

### Properties

| Property | Modifier | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="category"></a> `category` | `public` | {string} | - | [`NullDependency`](#nulldependency).[`category`](#category) |
| <a id="disconnect"></a> `disconnect` | `public` | {any} | - | [`NullDependency`](#nulldependency).[`disconnect`](#disconnect) |
| <a id="expression"></a> `expression` | `public` | {string} | - | - |
| <a id="loc"></a> `loc` | `public` | {DependencyLocation} | - | [`NullDependency`](#nulldependency).[`loc`](#loc) |
| <a id="module"></a> `module` | `public` | {any} | - | [`NullDependency`](#nulldependency).[`module`](#module) |
| <a id="optional"></a> `optional?` | `public` | {boolean} | - | [`NullDependency`](#nulldependency).[`optional`](#optional) |
| <a id="range"></a> `range` | `public` | {number|Tuple<number, number>} | - | - |
| <a id="runtimerequirements"></a> `runtimeRequirements` | `public` | {Set<string>} | - | - |
| <a id="type"></a> `type` | `public` | {string} | - | [`NullDependency`](#nulldependency).[`type`](#type) |
| <a id="weak"></a> `weak` | `public` | {boolean} | - | [`NullDependency`](#nulldependency).[`weak`](#weak) |
| <a id="exports-object-referenced"></a> `EXPORTS_OBJECT_REFERENCED` | `static` | {string[][]} | [`NullDependency`](#nulldependency).[`EXPORTS_OBJECT_REFERENCED`](#exports-object-referenced) | - |
| <a id="no-exports-referenced"></a> `NO_EXPORTS_REFERENCED` | `static` | {string[][]} | [`NullDependency`](#nulldependency).[`NO_EXPORTS_REFERENCED`](#no-exports-referenced) | - |
| <a id="template"></a> `Template` | `static` | {ConstDependencyTemplate} | [`NullDependency`](#nulldependency).[`Template`](#template) | - |
| <a id="transitive"></a> `TRANSITIVE` | `static` | {TRANSITIVE} | [`NullDependency`](#nulldependency).[`TRANSITIVE`](#transitive) | - |

### Methods

#### `couldAffectReferencingModule()`

* Returns: {boolean|TRANSITIVE}

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|(moduleGraphConnection: ModuleGraphConnection, runtime: RuntimeSpec) => ConnectionState}

#### `getContext()`

* Returns: {string}

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Update the hash

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}

***

## Class: `HarmonyImportDependency`

### Extends

- {ModuleDependency}

### Constructors

#### `new HarmonyImportDependency(request, sourceOrder[, phase][, attributes])`

* `request` {string}
* `sourceOrder` {number}
* `phase` {0|1|2}
* `attributes` {ImportAttributes}
* Returns: {HarmonyImportDependency}

### Properties

| Property | Modifier | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="attributes"></a> `attributes?` | `public` | {ImportAttributes} | - | - |
| <a id="category"></a> `category` | `public` | {string} | - | [`ModuleDependency`](#moduledependency).[`category`](#category) |
| <a id="disconnect"></a> `disconnect` | `public` | {any} | - | [`ModuleDependency`](#moduledependency).[`disconnect`](#disconnect) |
| <a id="loc"></a> `loc` | `public` | {DependencyLocation} | - | [`ModuleDependency`](#moduledependency).[`loc`](#loc) |
| <a id="module"></a> `module` | `public` | {any} | - | [`ModuleDependency`](#moduledependency).[`module`](#module) |
| <a id="optional"></a> `optional?` | `public` | {boolean} | - | [`ModuleDependency`](#moduledependency).[`optional`](#optional) |
| <a id="phase"></a> `phase` | `public` | {ImportPhaseType} | - | - |
| <a id="range"></a> `range?` | `public` | {Tuple<number, number>} | - | [`ModuleDependency`](#moduledependency).[`range`](#range) |
| <a id="request"></a> `request` | `public` | {string} | - | [`ModuleDependency`](#moduledependency).[`request`](#request) |
| <a id="sourceorder"></a> `sourceOrder?` | `public` | {number} | - | [`ModuleDependency`](#moduledependency).[`sourceOrder`](#sourceorder) |
| <a id="type"></a> `type` | `public` | {string} | - | [`ModuleDependency`](#moduledependency).[`type`](#type) |
| <a id="userrequest"></a> `userRequest` | `public` | {string} | - | [`ModuleDependency`](#moduledependency).[`userRequest`](#userrequest) |
| <a id="weak"></a> `weak` | `public` | {boolean} | - | [`ModuleDependency`](#moduledependency).[`weak`](#weak) |
| <a id="exportpresencemodes"></a> `ExportPresenceModes` | `static` | {{ AUTO: ExportPresenceMode; ERROR: ExportPresenceMode; NONE: ExportPresenceMode; ... }} | - | - |
| `ExportPresenceModes.AUTO` | `public` | {ExportPresenceMode} | - | - |
| `ExportPresenceModes.ERROR` | `public` | {ExportPresenceMode} | - | - |
| `ExportPresenceModes.NONE` | `public` | {ExportPresenceMode} | - | - |
| `ExportPresenceModes.WARN` | `public` | {ExportPresenceMode} | - | - |
| `ExportPresenceModes.fromUserOption` | `public` | {ExportPresenceMode} | - | - |
| `ExportPresenceModes.resolveFromOptions` | `public` | {ExportPresenceMode} | - | - |
| <a id="exports-object-referenced"></a> `EXPORTS_OBJECT_REFERENCED` | `static` | {string[][]} | [`ModuleDependency`](#moduledependency).[`EXPORTS_OBJECT_REFERENCED`](#exports-object-referenced) | - |
| <a id="getnonoptionalpart"></a> `getNonOptionalPart` | `static` | {(members: string[], membersOptionals: boolean[]) => string[]} | - | - |
| <a id="no-exports-referenced"></a> `NO_EXPORTS_REFERENCED` | `static` | {string[][]} | [`ModuleDependency`](#moduledependency).[`NO_EXPORTS_REFERENCED`](#no-exports-referenced) | - |
| <a id="template"></a> `Template` | `static` | {HarmonyImportDependencyTemplate} | [`ModuleDependency`](#moduledependency).[`Template`](#template) | - |
| <a id="transitive"></a> `TRANSITIVE` | `static` | {TRANSITIVE} | [`ModuleDependency`](#moduledependency).[`TRANSITIVE`](#transitive) | - |

### Methods

#### `couldAffectReferencingModule()`

* Returns: {boolean|TRANSITIVE}

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|(moduleGraphConnection: ModuleGraphConnection, runtime: RuntimeSpec) => ConnectionState}

#### `getContext()`

* Returns: {string}

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getImportStatement(update, __namedParameters)`

* `update` {boolean}
* `__namedParameters` {DependencyTemplateContext}
* Returns: {Tuple<string, string>}

#### `getImportVar(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {string}

#### `getLinkingErrors(moduleGraph, ids, additionalMessage)`

* `moduleGraph` {ModuleGraph}
* `ids` {string[]}
* `additionalMessage` {string}
* Returns: {WebpackError[]}

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

#### `getModuleExports(__namedParameters)`

* `__namedParameters` {DependencyTemplateContext}
* Returns: {string}

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Update the hash

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}

***

## Class: `ModuleDependency`

### Extends

- {Dependency}

### Extended by

- {HarmonyImportDependency}

### Constructors

#### `new ModuleDependency(request[, sourceOrder])`

* `request` {string}
* `sourceOrder` {number}
* Returns: {ModuleDependency}

### Properties

| Property | Modifier | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="category"></a> `category` | `public` | {string} | - | [`Dependency`](../../globals.md#dependency).[`category`](../../globals.md#category) |
| <a id="disconnect"></a> `disconnect` | `public` | {any} | - | [`Dependency`](../../globals.md#dependency).[`disconnect`](../../globals.md#disconnect) |
| <a id="loc"></a> `loc` | `public` | {DependencyLocation} | - | [`Dependency`](../../globals.md#dependency).[`loc`](../../globals.md#loc) |
| <a id="module"></a> `module` | `public` | {any} | - | [`Dependency`](../../globals.md#dependency).[`module`](../../globals.md#module) |
| <a id="optional"></a> `optional?` | `public` | {boolean} | - | [`Dependency`](../../globals.md#dependency).[`optional`](../../globals.md#optional) |
| <a id="range"></a> `range?` | `public` | {Tuple<number, number>} | - | - |
| <a id="request"></a> `request` | `public` | {string} | - | - |
| <a id="sourceorder"></a> `sourceOrder?` | `public` | {number} | - | - |
| <a id="type"></a> `type` | `public` | {string} | - | [`Dependency`](../../globals.md#dependency).[`type`](../../globals.md#type) |
| <a id="userrequest"></a> `userRequest` | `public` | {string} | - | - |
| <a id="weak"></a> `weak` | `public` | {boolean} | - | [`Dependency`](../../globals.md#dependency).[`weak`](../../globals.md#weak) |
| <a id="exports-object-referenced"></a> `EXPORTS_OBJECT_REFERENCED` | `static` | {string[][]} | [`Dependency`](../../globals.md#dependency).[`EXPORTS_OBJECT_REFERENCED`](../../globals.md#exports-object-referenced) | - |
| <a id="no-exports-referenced"></a> `NO_EXPORTS_REFERENCED` | `static` | {string[][]} | [`Dependency`](../../globals.md#dependency).[`NO_EXPORTS_REFERENCED`](../../globals.md#no-exports-referenced) | - |
| <a id="template"></a> `Template` | `static` | {DependencyTemplate} | - | - |
| <a id="transitive"></a> `TRANSITIVE` | `static` | {TRANSITIVE} | [`Dependency`](../../globals.md#dependency).[`TRANSITIVE`](../../globals.md#transitive) | - |

### Methods

#### `couldAffectReferencingModule()`

* Returns: {boolean|TRANSITIVE}

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|(moduleGraphConnection: ModuleGraphConnection, runtime: RuntimeSpec) => ConnectionState}

#### `getContext()`

* Returns: {string}

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Update the hash

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}

***

## Class: `NullDependency`

### Extends

- {Dependency}

### Extended by

- {ConstDependency}

### Constructors

#### `new NullDependency()`

* Returns: {NullDependency}

### Properties

| Property | Modifier | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="category"></a> `category` | `public` | {string} | - | [`Dependency`](../../globals.md#dependency).[`category`](../../globals.md#category) |
| <a id="disconnect"></a> `disconnect` | `public` | {any} | - | [`Dependency`](../../globals.md#dependency).[`disconnect`](../../globals.md#disconnect) |
| <a id="loc"></a> `loc` | `public` | {DependencyLocation} | - | [`Dependency`](../../globals.md#dependency).[`loc`](../../globals.md#loc) |
| <a id="module"></a> `module` | `public` | {any} | - | [`Dependency`](../../globals.md#dependency).[`module`](../../globals.md#module) |
| <a id="optional"></a> `optional?` | `public` | {boolean} | - | [`Dependency`](../../globals.md#dependency).[`optional`](../../globals.md#optional) |
| <a id="type"></a> `type` | `public` | {string} | - | [`Dependency`](../../globals.md#dependency).[`type`](../../globals.md#type) |
| <a id="weak"></a> `weak` | `public` | {boolean} | - | [`Dependency`](../../globals.md#dependency).[`weak`](../../globals.md#weak) |
| <a id="exports-object-referenced"></a> `EXPORTS_OBJECT_REFERENCED` | `static` | {string[][]} | [`Dependency`](../../globals.md#dependency).[`EXPORTS_OBJECT_REFERENCED`](../../globals.md#exports-object-referenced) | - |
| <a id="no-exports-referenced"></a> `NO_EXPORTS_REFERENCED` | `static` | {string[][]} | [`Dependency`](../../globals.md#dependency).[`NO_EXPORTS_REFERENCED`](../../globals.md#no-exports-referenced) | - |
| <a id="template"></a> `Template` | `static` | {NullDependencyTemplate} | - | - |
| <a id="transitive"></a> `TRANSITIVE` | `static` | {TRANSITIVE} | [`Dependency`](../../globals.md#dependency).[`TRANSITIVE`](../../globals.md#transitive) | - |

### Methods

#### `couldAffectReferencingModule()`

* Returns: {boolean|TRANSITIVE}

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|(moduleGraphConnection: ModuleGraphConnection, runtime: RuntimeSpec) => ConnectionState}

#### `getContext()`

* Returns: {string}

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Update the hash

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}
