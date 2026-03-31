# web

## Class: `CssLoadingRuntimeModule`

### Extends

- {RuntimeModule}

### Constructors

#### `new CssLoadingRuntimeModule(runtimeRequirements)`

* `runtimeRequirements` {ReadonlySet<string>}
* Returns: {CssLoadingRuntimeModule}

### Properties

| Property | Modifier | Type | Description | Overrides | Inherited from |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="blocks"></a> `blocks` | `public` | {AsyncDependenciesBlock[]} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`blocks`](../../globals.md#blocks) |
| <a id="buildinfo"></a> `buildInfo?` | `public` | {BuildInfo} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`buildInfo`](../../globals.md#buildinfo) |
| <a id="buildmeta"></a> `buildMeta?` | `public` | {BuildMeta} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`buildMeta`](../../globals.md#buildmeta) |
| <a id="chunk"></a> `chunk?` | `public` | {Chunk} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`chunk`](../../globals.md#chunk) |
| <a id="chunkgraph"></a> `chunkGraph?` | `public` | {ChunkGraph} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`chunkGraph`](../../globals.md#chunkgraph) |
| <a id="chunksiterable"></a> `chunksIterable` | `public` | {Iterable<Chunk>} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`chunksIterable`](../../globals.md#chunksiterable) |
| <a id="codegenerationdependencies"></a> `codeGenerationDependencies?` | `public` | {Dependency[]} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`codeGenerationDependencies`](../../globals.md#codegenerationdependencies) |
| <a id="compilation"></a> `compilation?` | `public` | {Compilation} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`compilation`](../../globals.md#compilation) |
| <a id="context"></a> `context` | `public` | {string} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`context`](../../globals.md#context) |
| <a id="debugid"></a> `debugId` | `public` | {number} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`debugId`](../../globals.md#debugid) |
| <a id="dependencies"></a> `dependencies` | `public` | {Dependency[]} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`dependencies`](../../globals.md#dependencies) |
| <a id="dependenthash"></a> `dependentHash` | `public` | {boolean} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`dependentHash`](../../globals.md#dependenthash) |
| <a id="depth"></a> `depth` | `public` | {number} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`depth`](../../globals.md#depth) |
| <a id="errors"></a> `errors` | `public` | {any} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`errors`](../../globals.md#errors) |
| <a id="exportsargument"></a> `exportsArgument` | `public` | {string} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`exportsArgument`](../../globals.md#exportsargument) |
| <a id="factorymeta"></a> `factoryMeta?` | `public` | {FactoryMeta} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`factoryMeta`](../../globals.md#factorymeta) |
| <a id="fullhash"></a> `fullHash` | `public` | {boolean} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`fullHash`](../../globals.md#fullhash) |
| <a id="hasequalschunks"></a> `hasEqualsChunks` | `public` | {any} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`hasEqualsChunks`](../../globals.md#hasequalschunks) |
| <a id="hash"></a> `hash` | `public` | {string} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`hash`](../../globals.md#hash) |
| <a id="hot"></a> `hot` | `public` | {boolean} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`hot`](../../globals.md#hot) |
| <a id="id"></a> ~~`id`~~ | `public` | {string|number} | **Deprecated** | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`id`](../../globals.md#id) |
| <a id="index"></a> `index` | `public` | {number} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`index`](../../globals.md#index) |
| <a id="index2"></a> `index2` | `public` | {number} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`index2`](../../globals.md#index2) |
| <a id="issuer"></a> `issuer?` | `public` | {Module} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`issuer`](../../globals.md#issuer) |
| <a id="isused"></a> `isUsed` | `public` | {any} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`isUsed`](../../globals.md#isused) |
| <a id="layer"></a> `layer` | `public` | {string} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`layer`](../../globals.md#layer) |
| <a id="moduleargument"></a> `moduleArgument` | `public` | {string} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`moduleArgument`](../../globals.md#moduleargument) |
| <a id="name"></a> `name` | `public` | {string} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`name`](../../globals.md#name) |
| <a id="needid"></a> `needId` | `public` | {boolean} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`needId`](../../globals.md#needid) |
| <a id="optimizationbailout"></a> ~~`optimizationBailout`~~ | `public` | {string|(requestShortener: RequestShortener) => string[]} | **Deprecated** | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`optimizationBailout`](../../globals.md#optimizationbailout) |
| <a id="optional"></a> `optional` | `public` | {boolean} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`optional`](../../globals.md#optional) |
| <a id="parent"></a> `parent?` | `public` | {DependenciesBlock} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`parent`](../../globals.md#parent) |
| <a id="presentationaldependencies"></a> `presentationalDependencies?` | `public` | {Dependency[]} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`presentationalDependencies`](../../globals.md#presentationaldependencies) |
| <a id="profile"></a> `profile?` | `public` | {ModuleProfile} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`profile`](../../globals.md#profile) |
| <a id="renderedhash"></a> `renderedHash` | `public` | {string} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`renderedHash`](../../globals.md#renderedhash) |
| <a id="resolveoptions"></a> `resolveOptions?` | `public` | {ResolveOptions} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`resolveOptions`](../../globals.md#resolveoptions) |
| <a id="stage"></a> `stage` | `public` | {number} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`stage`](../../globals.md#stage) |
| <a id="type"></a> `type` | `public` | {string} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`type`](../../globals.md#type) |
| <a id="used"></a> `used` | `public` | {any} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`used`](../../globals.md#used) |
| <a id="usedexports"></a> `usedExports` | `public` | {boolean|SortableSet<string>} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`usedExports`](../../globals.md#usedexports) |
| <a id="usesimplesourcemap"></a> `useSimpleSourceMap` | `public` | {boolean} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`useSimpleSourceMap`](../../globals.md#usesimplesourcemap) |
| <a id="usesourcemap"></a> `useSourceMap` | `public` | {boolean} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`useSourceMap`](../../globals.md#usesourcemap) |
| <a id="warnings"></a> `warnings` | `public` | {any} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`warnings`](../../globals.md#warnings) |
| <a id="stage-attach"></a> `STAGE_ATTACH` | `static` | {number} | Runtime modules which attach to handlers of other runtime modules | [`RuntimeModule`](../../globals.md#runtimemodule).[`STAGE_ATTACH`](../../globals.md#stage-attach) | - |
| <a id="stage-basic"></a> `STAGE_BASIC` | `static` | {number} | Runtime modules with simple dependencies on other runtime modules | [`RuntimeModule`](../../globals.md#runtimemodule).[`STAGE_BASIC`](../../globals.md#stage-basic) | - |
| <a id="stage-normal"></a> `STAGE_NORMAL` | `static` | {number} | Runtime modules without any dependencies to other runtime modules | [`RuntimeModule`](../../globals.md#runtimemodule).[`STAGE_NORMAL`](../../globals.md#stage-normal) | - |
| <a id="stage-trigger"></a> `STAGE_TRIGGER` | `static` | {number} | Runtime modules which trigger actions on bootstrap | [`RuntimeModule`](../../globals.md#runtimemodule).[`STAGE_TRIGGER`](../../globals.md#stage-trigger) | - |

### Methods

#### `addBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addCacheDependencies(fileDependencies, contextDependencies, missingDependencies, buildDependencies)`

* `fileDependencies` {LazySet<string>}
* `contextDependencies` {LazySet<string>}
* `missingDependencies` {LazySet<string>}
* `buildDependencies` {LazySet<string>}
* Returns: {void}

#### `addChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

#### `addCodeGenerationDependency(codeGenerationDependency)`

* `codeGenerationDependency` {Dependency}
* Returns: {void}

#### `addDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

#### `addError(error)`

* `error` {WebpackError}
* Returns: {void}

#### `addPresentationalDependency(presentationalDependency)`

* `presentationalDependency` {Dependency}
* Returns: {void}

#### `addWarning(warning)`

* `warning` {WebpackError}
* Returns: {void}

#### `attach(compilation, chunk[, chunkGraph])`

* `compilation` {Compilation}
* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

#### `build(options, compilation, resolver, fs, callback)`

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compilation` {Compilation}
* `resolver` {ResolverWithOptions}
* `fs` {InputFileSystem}
* `callback` {(err?: WebpackError) => void}
* Returns: {void}

#### `chunkCondition(chunk, compilation)`

* `chunk` {Chunk}
* `compilation` {Compilation}
* Returns: {boolean}

#### `cleanupForCache()`

* Returns: {void}

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### `clearDependenciesAndBlocks()`

* Returns: {void}

Removes all dependencies and blocks

#### `clearWarningsAndErrors()`

* Returns: {void}

removes all warnings and errors

#### `codeGeneration(context)`

* `context` {CodeGenerationContext}
* Returns: {CodeGenerationResult}

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

#### `generate()`

* Returns: {string}

#### `getChunks()`

* Returns: {Chunk[]}

#### `getConcatenationBailoutReason(context)`

* `context` {ConcatenationBailoutReasonContext}
* Returns: {string}

#### `getErrors()`

* Returns: {Iterable<WebpackError, any, any>}

#### `getExportsType(moduleGraph[, strict])`

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}
* Returns: {ExportsType}

#### `getGeneratedCode()`

* Returns: {string}

#### `getNumberOfChunks()`

* Returns: {number}

#### `getNumberOfErrors()`

* Returns: {number}

#### `getNumberOfWarnings()`

* Returns: {number}

#### `getRootBlock()`

* Returns: {DependenciesBlock}

#### `getSideEffectsConnectionState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

#### `getSourceBasicTypes()`

* Returns: {ReadonlySet<string>}

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

#### `getSourceTypes()`

* Returns: {ReadonlySet<string>}

#### `getUnsafeCacheData()`

* Returns: {UnsafeCacheData}

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### `getWarnings()`

* Returns: {Iterable<WebpackError, any, any>}

#### `hasChunkCondition()`

* Returns: {boolean}

#### `hasReasonForChunk(chunk, moduleGraph, chunkGraph)`

* `chunk` {Chunk}
* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}
* Returns: {boolean}

#### `hasReasons(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {boolean}

#### `identifier()`

* Returns: {string}

#### `invalidateBuild()`

* Returns: {void}

#### `isAccessibleInChunk(chunkGraph, chunk[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunk` {Chunk}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

#### `isAccessibleInChunkGroup(chunkGraph, chunkGroup[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunkGroup` {ChunkGroup}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

#### `isEntryModule()`

* Returns: {boolean}

#### `isInChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

#### `isOptional(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {boolean}

#### `isProvided(exportName)`

* `exportName` {string}
* Returns: {boolean}

#### `libIdent(options)`

* `options` {LibIdentOptions}
* Returns: {string}

#### `nameForCondition()`

* Returns: {string}

#### `needBuild(context, callback)`

* `context` {NeedBuildContext}
* `callback` {(err?: WebpackError, needBuild?: boolean) => void}
* Returns: {void}

#### `needRebuild(fileTimestamps, contextTimestamps)`

> Stability: 0 - Deprecated

* `fileTimestamps` {Map<string, number>}
* `contextTimestamps` {Map<string, number>}
* Returns: {boolean}

Use needBuild instead

#### `originalSource()`

* Returns: {Source}

#### `readableIdentifier(requestShortener)`

* `requestShortener` {RequestShortener}
* Returns: {string}

#### `removeChunk(chunk)`

* `chunk` {Chunk}
* Returns: {void}

#### `removeDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### `shouldIsolate()`

* Returns: {boolean}

#### `size([type])`

* `type` {string}
* Returns: {number}

#### `source(dependencyTemplates, runtimeTemplate[, type])`

> Stability: 0 - Deprecated

* `dependencyTemplates` {DependencyTemplates}
* `runtimeTemplate` {RuntimeTemplate}
* `type` {string}
* Returns: {Source}

Use codeGeneration() instead

#### `updateCacheModule(module)`

* `module` {Module}
* Returns: {void}

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {CssLoadingRuntimeModulePluginHooks}

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {ReadonlySet<string>}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

***

## Class: `FetchCompileAsyncWasmPlugin`

### Constructors

#### `new FetchCompileAsyncWasmPlugin()`

* Returns: {FetchCompileAsyncWasmPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `FetchCompileWasmPlugin`

### Constructors

#### `new FetchCompileWasmPlugin([options])`

* `options` {FetchCompileWasmPluginOptions}
* Returns: {FetchCompileWasmPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {FetchCompileWasmPluginOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `JsonpChunkLoadingRuntimeModule`

### Extends

- {RuntimeModule}

### Constructors

#### `new JsonpChunkLoadingRuntimeModule(runtimeRequirements)`

* `runtimeRequirements` {ReadonlySet<string>}
* Returns: {JsonpChunkLoadingRuntimeModule}

### Properties

| Property | Modifier | Type | Description | Overrides | Inherited from |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="blocks"></a> `blocks` | `public` | {AsyncDependenciesBlock[]} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`blocks`](../../globals.md#blocks) |
| <a id="buildinfo"></a> `buildInfo?` | `public` | {BuildInfo} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`buildInfo`](../../globals.md#buildinfo) |
| <a id="buildmeta"></a> `buildMeta?` | `public` | {BuildMeta} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`buildMeta`](../../globals.md#buildmeta) |
| <a id="chunk"></a> `chunk?` | `public` | {Chunk} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`chunk`](../../globals.md#chunk) |
| <a id="chunkgraph"></a> `chunkGraph?` | `public` | {ChunkGraph} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`chunkGraph`](../../globals.md#chunkgraph) |
| <a id="chunksiterable"></a> `chunksIterable` | `public` | {Iterable<Chunk>} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`chunksIterable`](../../globals.md#chunksiterable) |
| <a id="codegenerationdependencies"></a> `codeGenerationDependencies?` | `public` | {Dependency[]} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`codeGenerationDependencies`](../../globals.md#codegenerationdependencies) |
| <a id="compilation"></a> `compilation?` | `public` | {Compilation} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`compilation`](../../globals.md#compilation) |
| <a id="context"></a> `context` | `public` | {string} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`context`](../../globals.md#context) |
| <a id="debugid"></a> `debugId` | `public` | {number} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`debugId`](../../globals.md#debugid) |
| <a id="dependencies"></a> `dependencies` | `public` | {Dependency[]} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`dependencies`](../../globals.md#dependencies) |
| <a id="dependenthash"></a> `dependentHash` | `public` | {boolean} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`dependentHash`](../../globals.md#dependenthash) |
| <a id="depth"></a> `depth` | `public` | {number} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`depth`](../../globals.md#depth) |
| <a id="errors"></a> `errors` | `public` | {any} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`errors`](../../globals.md#errors) |
| <a id="exportsargument"></a> `exportsArgument` | `public` | {string} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`exportsArgument`](../../globals.md#exportsargument) |
| <a id="factorymeta"></a> `factoryMeta?` | `public` | {FactoryMeta} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`factoryMeta`](../../globals.md#factorymeta) |
| <a id="fullhash"></a> `fullHash` | `public` | {boolean} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`fullHash`](../../globals.md#fullhash) |
| <a id="hasequalschunks"></a> `hasEqualsChunks` | `public` | {any} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`hasEqualsChunks`](../../globals.md#hasequalschunks) |
| <a id="hash"></a> `hash` | `public` | {string} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`hash`](../../globals.md#hash) |
| <a id="hot"></a> `hot` | `public` | {boolean} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`hot`](../../globals.md#hot) |
| <a id="id"></a> ~~`id`~~ | `public` | {string|number} | **Deprecated** | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`id`](../../globals.md#id) |
| <a id="index"></a> `index` | `public` | {number} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`index`](../../globals.md#index) |
| <a id="index2"></a> `index2` | `public` | {number} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`index2`](../../globals.md#index2) |
| <a id="issuer"></a> `issuer?` | `public` | {Module} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`issuer`](../../globals.md#issuer) |
| <a id="isused"></a> `isUsed` | `public` | {any} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`isUsed`](../../globals.md#isused) |
| <a id="layer"></a> `layer` | `public` | {string} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`layer`](../../globals.md#layer) |
| <a id="moduleargument"></a> `moduleArgument` | `public` | {string} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`moduleArgument`](../../globals.md#moduleargument) |
| <a id="name"></a> `name` | `public` | {string} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`name`](../../globals.md#name) |
| <a id="needid"></a> `needId` | `public` | {boolean} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`needId`](../../globals.md#needid) |
| <a id="optimizationbailout"></a> ~~`optimizationBailout`~~ | `public` | {string|(requestShortener: RequestShortener) => string[]} | **Deprecated** | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`optimizationBailout`](../../globals.md#optimizationbailout) |
| <a id="optional"></a> `optional` | `public` | {boolean} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`optional`](../../globals.md#optional) |
| <a id="parent"></a> `parent?` | `public` | {DependenciesBlock} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`parent`](../../globals.md#parent) |
| <a id="presentationaldependencies"></a> `presentationalDependencies?` | `public` | {Dependency[]} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`presentationalDependencies`](../../globals.md#presentationaldependencies) |
| <a id="profile"></a> `profile?` | `public` | {ModuleProfile} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`profile`](../../globals.md#profile) |
| <a id="renderedhash"></a> `renderedHash` | `public` | {string} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`renderedHash`](../../globals.md#renderedhash) |
| <a id="resolveoptions"></a> `resolveOptions?` | `public` | {ResolveOptions} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`resolveOptions`](../../globals.md#resolveoptions) |
| <a id="stage"></a> `stage` | `public` | {number} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`stage`](../../globals.md#stage) |
| <a id="type"></a> `type` | `public` | {string} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`type`](../../globals.md#type) |
| <a id="used"></a> `used` | `public` | {any} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`used`](../../globals.md#used) |
| <a id="usedexports"></a> `usedExports` | `public` | {boolean|SortableSet<string>} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`usedExports`](../../globals.md#usedexports) |
| <a id="usesimplesourcemap"></a> `useSimpleSourceMap` | `public` | {boolean} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`useSimpleSourceMap`](../../globals.md#usesimplesourcemap) |
| <a id="usesourcemap"></a> `useSourceMap` | `public` | {boolean} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`useSourceMap`](../../globals.md#usesourcemap) |
| <a id="warnings"></a> `warnings` | `public` | {any} | - | - | [`RuntimeModule`](../../globals.md#runtimemodule).[`warnings`](../../globals.md#warnings) |
| <a id="stage-attach"></a> `STAGE_ATTACH` | `static` | {number} | Runtime modules which attach to handlers of other runtime modules | [`RuntimeModule`](../../globals.md#runtimemodule).[`STAGE_ATTACH`](../../globals.md#stage-attach) | - |
| <a id="stage-basic"></a> `STAGE_BASIC` | `static` | {number} | Runtime modules with simple dependencies on other runtime modules | [`RuntimeModule`](../../globals.md#runtimemodule).[`STAGE_BASIC`](../../globals.md#stage-basic) | - |
| <a id="stage-normal"></a> `STAGE_NORMAL` | `static` | {number} | Runtime modules without any dependencies to other runtime modules | [`RuntimeModule`](../../globals.md#runtimemodule).[`STAGE_NORMAL`](../../globals.md#stage-normal) | - |
| <a id="stage-trigger"></a> `STAGE_TRIGGER` | `static` | {number} | Runtime modules which trigger actions on bootstrap | [`RuntimeModule`](../../globals.md#runtimemodule).[`STAGE_TRIGGER`](../../globals.md#stage-trigger) | - |

### Methods

#### `addBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addCacheDependencies(fileDependencies, contextDependencies, missingDependencies, buildDependencies)`

* `fileDependencies` {LazySet<string>}
* `contextDependencies` {LazySet<string>}
* `missingDependencies` {LazySet<string>}
* `buildDependencies` {LazySet<string>}
* Returns: {void}

#### `addChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

#### `addCodeGenerationDependency(codeGenerationDependency)`

* `codeGenerationDependency` {Dependency}
* Returns: {void}

#### `addDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

#### `addError(error)`

* `error` {WebpackError}
* Returns: {void}

#### `addPresentationalDependency(presentationalDependency)`

* `presentationalDependency` {Dependency}
* Returns: {void}

#### `addWarning(warning)`

* `warning` {WebpackError}
* Returns: {void}

#### `attach(compilation, chunk[, chunkGraph])`

* `compilation` {Compilation}
* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

#### `build(options, compilation, resolver, fs, callback)`

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compilation` {Compilation}
* `resolver` {ResolverWithOptions}
* `fs` {InputFileSystem}
* `callback` {(err?: WebpackError) => void}
* Returns: {void}

#### `chunkCondition(chunk, compilation)`

* `chunk` {Chunk}
* `compilation` {Compilation}
* Returns: {boolean}

#### `cleanupForCache()`

* Returns: {void}

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### `clearDependenciesAndBlocks()`

* Returns: {void}

Removes all dependencies and blocks

#### `clearWarningsAndErrors()`

* Returns: {void}

removes all warnings and errors

#### `codeGeneration(context)`

* `context` {CodeGenerationContext}
* Returns: {CodeGenerationResult}

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

#### `generate()`

* Returns: {string}

#### `getChunks()`

* Returns: {Chunk[]}

#### `getConcatenationBailoutReason(context)`

* `context` {ConcatenationBailoutReasonContext}
* Returns: {string}

#### `getErrors()`

* Returns: {Iterable<WebpackError, any, any>}

#### `getExportsType(moduleGraph[, strict])`

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}
* Returns: {ExportsType}

#### `getGeneratedCode()`

* Returns: {string}

#### `getNumberOfChunks()`

* Returns: {number}

#### `getNumberOfErrors()`

* Returns: {number}

#### `getNumberOfWarnings()`

* Returns: {number}

#### `getRootBlock()`

* Returns: {DependenciesBlock}

#### `getSideEffectsConnectionState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

#### `getSourceBasicTypes()`

* Returns: {ReadonlySet<string>}

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

#### `getSourceTypes()`

* Returns: {ReadonlySet<string>}

#### `getUnsafeCacheData()`

* Returns: {UnsafeCacheData}

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### `getWarnings()`

* Returns: {Iterable<WebpackError, any, any>}

#### `hasChunkCondition()`

* Returns: {boolean}

#### `hasReasonForChunk(chunk, moduleGraph, chunkGraph)`

* `chunk` {Chunk}
* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}
* Returns: {boolean}

#### `hasReasons(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {boolean}

#### `identifier()`

* Returns: {string}

#### `invalidateBuild()`

* Returns: {void}

#### `isAccessibleInChunk(chunkGraph, chunk[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunk` {Chunk}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

#### `isAccessibleInChunkGroup(chunkGraph, chunkGroup[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunkGroup` {ChunkGroup}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

#### `isEntryModule()`

* Returns: {boolean}

#### `isInChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

#### `isOptional(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {boolean}

#### `isProvided(exportName)`

* `exportName` {string}
* Returns: {boolean}

#### `libIdent(options)`

* `options` {LibIdentOptions}
* Returns: {string}

#### `nameForCondition()`

* Returns: {string}

#### `needBuild(context, callback)`

* `context` {NeedBuildContext}
* `callback` {(err?: WebpackError, needBuild?: boolean) => void}
* Returns: {void}

#### `needRebuild(fileTimestamps, contextTimestamps)`

> Stability: 0 - Deprecated

* `fileTimestamps` {Map<string, number>}
* `contextTimestamps` {Map<string, number>}
* Returns: {boolean}

Use needBuild instead

#### `originalSource()`

* Returns: {Source}

#### `readableIdentifier(requestShortener)`

* `requestShortener` {RequestShortener}
* Returns: {string}

#### `removeChunk(chunk)`

* `chunk` {Chunk}
* Returns: {void}

#### `removeDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### `shouldIsolate()`

* Returns: {boolean}

#### `size([type])`

* `type` {string}
* Returns: {number}

#### `source(dependencyTemplates, runtimeTemplate[, type])`

> Stability: 0 - Deprecated

* `dependencyTemplates` {DependencyTemplates}
* `runtimeTemplate` {RuntimeTemplate}
* `type` {string}
* Returns: {Source}

Use codeGeneration() instead

#### `updateCacheModule(module)`

* `module` {Module}
* Returns: {void}

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {JsonpCompilationPluginHooks}

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {ReadonlySet<string>}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

***

## Class: `JsonpTemplatePlugin`

### Constructors

#### `new JsonpTemplatePlugin()`

* Returns: {JsonpTemplatePlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `getCompilationHooks(compilation)`

> Stability: 0 - Deprecated

* `compilation` {Compilation}
* Returns: {JsonpCompilationPluginHooks}

use JsonpChunkLoadingRuntimeModule.getCompilationHooks instead
