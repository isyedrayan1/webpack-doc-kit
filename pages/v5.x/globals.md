# webpack

## Namespaces

- [cache](webpack/namespaces/cache.md)
- [cli](webpack/namespaces/cli.md)
- [config](webpack/namespaces/config.md)
- [container](webpack/namespaces/container.md)
- [css](webpack/namespaces/css.md)
- [debug](webpack/namespaces/debug.md)
- [dependencies](webpack/namespaces/dependencies.md)
- [electron](webpack/namespaces/electron.md)
- [esm](webpack/namespaces/esm.md)
- [experiments](webpack/namespaces/experiments/index.md)
- [ids](webpack/namespaces/ids.md)
- [javascript](webpack/namespaces/javascript.md)
- [library](webpack/namespaces/library.md)
- [ModuleFilenameHelpers](webpack/namespaces/ModuleFilenameHelpers.md)
- [node](webpack/namespaces/node.md)
- [OptimizationStages](webpack/namespaces/OptimizationStages.md)
- [optimize](webpack/namespaces/optimize/index.md)
- [prefetch](webpack/namespaces/prefetch.md)
- [runtime](webpack/namespaces/runtime.md)
- [RuntimeGlobals](webpack/namespaces/RuntimeGlobals.md)
- [sharing](webpack/namespaces/sharing.md)
- [sources](webpack/namespaces/sources.md)
- [util](webpack/namespaces/util/index.md)
- [wasm](webpack/namespaces/wasm.md)
- [web](webpack/namespaces/web.md)
- [webworker](webpack/namespaces/webworker.md)

## Class: `AsyncDependenciesBlock`

### Extends

- {DependenciesBlock}

### Constructors

#### `new AsyncDependenciesBlock(groupOptions[, loc][, request])`

* `groupOptions` {string|GroupOptionsAsyncDependenciesBlock}
* `loc` {SyntheticDependencyLocation|RealDependencyLocation}
* `request` {string}
* Returns: {AsyncDependenciesBlock}

### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="blocks"></a> `blocks` | {AsyncDependenciesBlock[]} | `DependenciesBlock.blocks` |
| <a id="chunkname"></a> `chunkName?` | {string} | - |
| <a id="circular"></a> `circular` | {boolean} | - |
| <a id="dependencies"></a> `dependencies` | {Dependency[]} | `DependenciesBlock.dependencies` |
| <a id="groupoptions"></a> `groupOptions` | {GroupOptionsAsyncDependenciesBlock} | - |
| <a id="loc"></a> `loc?` | {SyntheticDependencyLocation|RealDependencyLocation} | - |
| <a id="module"></a> `module` | {any} | - |
| <a id="parent"></a> `parent?` | {DependenciesBlock} | `DependenciesBlock.parent` |
| <a id="request"></a> `request?` | {string} | - |

### Methods

#### `addBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

#### `clearDependenciesAndBlocks()`

* Returns: {void}

Removes all dependencies and blocks

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

#### `getRootBlock()`

* Returns: {DependenciesBlock}

#### `removeDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

***

## Class: `AutomaticPrefetchPlugin`

### Constructors

#### `new AutomaticPrefetchPlugin()`

* Returns: {AutomaticPrefetchPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `BannerPlugin`

### Constructors

#### `new BannerPlugin(options)`

* `options` {BannerPluginArgument}
* Returns: {BannerPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="banner"></a> `banner` | {(data: { chunk: Chunk; filename: string; hash: string }) => string} |
| <a id="options"></a> `options` | {BannerPluginOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `Cache`

### Constructors

#### `new Cache()`

* Returns: {CacheClass}

### Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="hooks"></a> `hooks` | `public` | {{ beginIdle: SyncHook<Tuple<unknown>>; endIdle: AsyncParallelHook<Tuple<unknown>>; get: AsyncSeriesBailHook<Tuple<string, Etag, GotHandler<any>[]>, any>; ... }} |
| `hooks.beginIdle` | `public` | {SyncHook<Tuple<unknown>>} |
| `hooks.endIdle` | `public` | {AsyncParallelHook<Tuple<unknown>>} |
| `hooks.get` | `public` | {AsyncSeriesBailHook<Tuple<string, Etag, GotHandler<any>[]>, any>} |
| `hooks.shutdown` | `public` | {AsyncParallelHook<Tuple<unknown>>} |
| `hooks.store` | `public` | {AsyncParallelHook<Tuple<string, Etag, any>>} |
| `hooks.storeBuildDependencies` | `public` | {AsyncParallelHook<Tuple<Iterable<string, any, any>>>} |
| <a id="stage-default"></a> `STAGE_DEFAULT` | `static` | {number} |
| <a id="stage-disk"></a> `STAGE_DISK` | `static` | {number} |
| <a id="stage-memory"></a> `STAGE_MEMORY` | `static` | {number} |
| <a id="stage-network"></a> `STAGE_NETWORK` | `static` | {number} |

### Methods

#### `beginIdle()`

* Returns: {void}

#### `endIdle(callback)`

* `callback` {CallbackCacheCache<void>}
* Returns: {void}

#### `get(identifier, etag, callback)`

* `T`
* `identifier` {string}
* `etag` {Etag}
* `callback` {CallbackCacheCache<T>}
* Returns: {void}

#### `shutdown(callback)`

* `callback` {CallbackCacheCache<void>}
* Returns: {void}

#### `store(identifier, etag, data, callback)`

* `T`
* `identifier` {string}
* `etag` {Etag}
* `data` {T}
* `callback` {CallbackCacheCache<void>}
* Returns: {void}

#### `storeBuildDependencies(dependencies, callback)`

* `dependencies` {Iterable<string>}
* `callback` {CallbackCacheCache<void>}
* Returns: {void}

After this method has succeeded the cache can only be restored when build dependencies are

***

## Class: `Chunk`

### Extended by

- {HotUpdateChunk}

### Constructors

#### `new Chunk([name][, backCompat])`

* `name` {string}
* `backCompat` {boolean}
* Returns: {Chunk}

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="auxiliaryfiles"></a> `auxiliaryFiles` | {Set<string>} | - |
| <a id="chunkreason"></a> `chunkReason?` | {string} | - |
| <a id="contenthash"></a> `contentHash` | {Record<string, string>} | - |
| <a id="cssfilenametemplate"></a> `cssFilenameTemplate?` | {string|(pathData: PathData, assetInfo?: AssetInfo) => string} | - |
| <a id="debugid"></a> `debugId` | {number} | - |
| <a id="entrymodule"></a> ~~`entryModule`~~ | {Module} | **Deprecated** |
| <a id="extraasync"></a> `extraAsync` | {boolean} | - |
| <a id="filenametemplate"></a> `filenameTemplate?` | {string|(pathData: PathData, assetInfo?: AssetInfo) => string} | - |
| <a id="files"></a> `files` | {Set<string>} | - |
| <a id="groupsiterable"></a> `groupsIterable` | {SortableSet<ChunkGroup>} | - |
| <a id="hash"></a> `hash?` | {string} | - |
| <a id="id"></a> `id` | {string|number} | - |
| <a id="idnamehints"></a> `idNameHints` | {SortableSet<string>} | - |
| <a id="ids"></a> `ids` | {ChunkId[]} | - |
| <a id="modulesiterable"></a> `modulesIterable` | {Iterable<Module>} | - |
| <a id="name"></a> `name?` | {string} | - |
| <a id="preventintegration"></a> `preventIntegration` | {boolean} | - |
| <a id="rendered"></a> `rendered` | {boolean} | - |
| <a id="renderedhash"></a> `renderedHash?` | {string} | - |
| <a id="runtime"></a> `runtime` | {RuntimeSpec} | - |

### Methods

#### `addGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {void}

#### `addModule(module)`

* `module` {Module}
* Returns: {boolean}

#### `canBeInitial()`

* Returns: {boolean}

#### `canBeIntegrated(otherChunk)`

* `otherChunk` {Chunk}
* Returns: {boolean}

#### `compareTo(otherChunk)`

* `otherChunk` {Chunk}
* Returns: {-1|0|1}

#### `containsModule(module)`

* `module` {Module}
* Returns: {boolean}

#### `disconnectFromGroups()`

* Returns: {void}

#### `getAllAsyncChunks()`

* Returns: {Set<Chunk>}

#### `getAllInitialChunks()`

* Returns: {Set<Chunk>}

#### `getAllReferencedAsyncEntrypoints()`

* Returns: {Set<Entrypoint>}

#### `getAllReferencedChunks()`

* Returns: {Set<Chunk>}

#### `getChildIdsByOrders(chunkGraph[, filterFn])`

* `chunkGraph` {ChunkGraph}
* `filterFn` {(c: Chunk, chunkGraph: ChunkGraph) => boolean}
* Returns: {Record<string, ChunkId[]>}

#### `getChildIdsByOrdersMap(chunkGraph[, includeDirectChildren][, filterFn])`

* `chunkGraph` {ChunkGraph}
* `includeDirectChildren` {boolean}
* `filterFn` {(c: Chunk, chunkGraph: ChunkGraph) => boolean}
* Returns: {ChunkChildIdsByOrdersMapByData}

#### `getChildrenOfTypeInOrder(chunkGraph, type)`

* `chunkGraph` {ChunkGraph}
* `type` {string}
* Returns: {ChunkChildOfTypeInOrder[]}

#### `getChunkMaps(realHash)`

> Stability: 0 - Deprecated

* `realHash` {boolean}
* Returns: {ChunkMaps}

#### `getChunkModuleMaps(filterFn)`

* `filterFn` {(m: Module) => boolean}
* Returns: {ChunkModuleMaps}

#### `getEntryOptions()`

* Returns: {EntryOptions}

#### `getModules()`

* Returns: {Module[]}

#### `getNumberOfGroups()`

* Returns: {number}

#### `getNumberOfModules()`

* Returns: {number}

#### `hasAsyncChunks()`

* Returns: {boolean}

#### `hasChildByOrder(chunkGraph, type[, includeDirectChildren][, filterFn])`

* `chunkGraph` {ChunkGraph}
* `type` {string}
* `includeDirectChildren` {boolean}
* `filterFn` {(c: Chunk, chunkGraph: ChunkGraph) => boolean}
* Returns: {boolean}

#### `hasEntryModule()`

* Returns: {boolean}

#### `hasModuleInGraph(filterFn[, filterChunkFn])`

* `filterFn` {(m: Module) => boolean}
* `filterChunkFn` {(c: Chunk, chunkGraph: ChunkGraph) => boolean}
* Returns: {boolean}

#### `hasRuntime()`

* Returns: {boolean}

#### `integrate(otherChunk)`

* `otherChunk` {Chunk}
* Returns: {boolean}

#### `integratedSize(otherChunk, options)`

* `otherChunk` {Chunk}
* `options` {ChunkSizeOptions}
* Returns: {number}

#### `isEmpty()`

* Returns: {boolean}

#### `isInGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {boolean}

#### `isOnlyInitial()`

* Returns: {boolean}

#### `modulesSize()`

* Returns: {number}

#### `moveModule(module, otherChunk)`

* `module` {Module}
* `otherChunk` {Chunk}
* Returns: {void}

#### `remove()`

* Returns: {void}

#### `removeGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {void}

#### `removeModule(module)`

* `module` {Module}
* Returns: {void}

#### `size([options])`

* `options` {ChunkSizeOptions}
* Returns: {number}

#### `split(newChunk)`

* `newChunk` {Chunk}
* Returns: {void}

#### `updateHash(hash, chunkGraph)`

* `hash` {Hash}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

***

## Class: `ChunkGraph`

### Constructors

#### `new ChunkGraph(moduleGraph[, hashFunction])`

* `moduleGraph` {ModuleGraph}
* `hashFunction` {HashFunction}
* Returns: {ChunkGraph}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="modulegraph"></a> `moduleGraph` | {ModuleGraph} |

### Methods

#### `addChunkRuntimeRequirements(chunk, items)`

* `chunk` {Chunk}
* `items` {Set<string>}
* Returns: {void}

#### `addDependentHashModuleToChunk(chunk, module)`

* `chunk` {Chunk}
* `module` {RuntimeModule}
* Returns: {void}

#### `addFullHashModuleToChunk(chunk, module)`

* `chunk` {Chunk}
* `module` {RuntimeModule}
* Returns: {void}

#### `addModuleRuntimeRequirements(module, runtime, items[, transferOwnership])`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `items` {Set<string>}
* `transferOwnership` {boolean}
* Returns: {void}

#### `addTreeRuntimeRequirements(chunk, items)`

* `chunk` {Chunk}
* `items` {Iterable<string>}
* Returns: {void}

#### `attachDependentHashModules(chunk, modules)`

* `chunk` {Chunk}
* `modules` {Iterable<RuntimeModule>}
* Returns: {void}

#### `attachFullHashModules(chunk, modules)`

* `chunk` {Chunk}
* `modules` {Iterable<RuntimeModule>}
* Returns: {void}

#### `attachModules(chunk, modules)`

* `chunk` {Chunk}
* `modules` {Iterable<Module>}
* Returns: {void}

#### `attachRuntimeModules(chunk, modules)`

* `chunk` {Chunk}
* `modules` {Iterable<RuntimeModule>}
* Returns: {void}

#### `canChunksBeIntegrated(chunkA, chunkB)`

* `chunkA` {Chunk}
* `chunkB` {Chunk}
* Returns: {boolean}

#### `compareChunks(chunkA, chunkB)`

* `chunkA` {Chunk}
* `chunkB` {Chunk}
* Returns: {-1|0|1}

#### `connectBlockAndChunkGroup(depBlock, chunkGroup)`

* `depBlock` {AsyncDependenciesBlock}
* `chunkGroup` {ChunkGroup}
* Returns: {void}

#### `connectChunkAndEntryModule(chunk, module, entrypoint)`

* `chunk` {Chunk}
* `module` {Module}
* `entrypoint` {Entrypoint}
* Returns: {void}

#### `connectChunkAndModule(chunk, module)`

* `chunk` {Chunk}
* `module` {Module}
* Returns: {void}

#### `connectChunkAndRuntimeModule(chunk, module)`

* `chunk` {Chunk}
* `module` {RuntimeModule}
* Returns: {void}

#### `disconnectChunk(chunk)`

* `chunk` {Chunk}
* Returns: {void}

#### `disconnectChunkAndEntryModule(chunk, module)`

* `chunk` {Chunk}
* `module` {Module}
* Returns: {void}

#### `disconnectChunkAndModule(chunk, module)`

* `chunk` {Chunk}
* `module` {Module}
* Returns: {void}

#### `disconnectChunkAndRuntimeModule(chunk, module)`

* `chunk` {Chunk}
* `module` {RuntimeModule}
* Returns: {void}

#### `disconnectChunkGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {void}

#### `disconnectEntries(chunk)`

* `chunk` {Chunk}
* Returns: {void}

#### `disconnectEntryModule(module)`

* `module` {Module}
* Returns: {void}

#### `getBlockChunkGroup(depBlock)`

* `depBlock` {AsyncDependenciesBlock}
* Returns: {ChunkGroup}

#### `getChunkConditionMap(chunk, filterFn)`

* `chunk` {Chunk}
* `filterFn` {(c: Chunk, chunkGraph: ChunkGraph) => boolean}
* Returns: {ChunkConditionMap}

#### `getChunkDependentHashModulesIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable<RuntimeModule, any, any>}

#### `getChunkEntryDependentChunksIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable<Chunk>}

#### `getChunkEntryModulesIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable<Module>}

#### `getChunkEntryModulesWithChunkGroupIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable<Tuple<Module, Entrypoint>>}

#### `getChunkFullHashModulesIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable<RuntimeModule, any, any>}

#### `getChunkFullHashModulesSet(chunk)`

* `chunk` {Chunk}
* Returns: {ReadonlySet<RuntimeModule>}

#### `getChunkModuleIdMap(chunk, filterFn[, includeAllChunks])`

* `chunk` {Chunk}
* `filterFn` {(m: Module) => boolean}
* `includeAllChunks` {boolean}
* Returns: {ChunkModuleIdMapEs5Alias_2}

#### `getChunkModuleRenderedHashMap(chunk, filterFn[, hashLength][, includeAllChunks])`

* `chunk` {Chunk}
* `filterFn` {(m: Module) => boolean}
* `hashLength` {number}
* `includeAllChunks` {boolean}
* Returns: {ChunkModuleHashMap}

#### `getChunkModules(chunk)`

* `chunk` {Chunk}
* Returns: {Module[]}

#### `getChunkModulesIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable<Module>}

#### `getChunkModulesIterableBySourceType(chunk, sourceType)`

* `chunk` {Chunk}
* `sourceType` {string}
* Returns: {Iterable<Module, any, any>}

#### `getChunkModuleSourceTypes(chunk, module)`

* `chunk` {Chunk}
* `module` {Module}
* Returns: {ReadonlySet<string>}

#### `getChunkModulesSize(chunk)`

* `chunk` {Chunk}
* Returns: {number}

#### `getChunkModulesSizes(chunk)`

* `chunk` {Chunk}
* Returns: {Record<string, number>}

#### `getChunkRootModules(chunk)`

* `chunk` {Chunk}
* Returns: {Module[]}

#### `getChunkRuntimeModulesInOrder(chunk)`

* `chunk` {Chunk}
* Returns: {RuntimeModule[]}

#### `getChunkRuntimeModulesIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable<RuntimeModule>}

#### `getChunkRuntimeRequirements(chunk)`

* `chunk` {Chunk}
* Returns: {ReadonlySet<string>}

#### `getChunkSize(chunk[, options])`

* `chunk` {Chunk}
* `options` {ChunkSizeOptions}
* Returns: {number}

#### `getIntegratedChunksSize(chunkA, chunkB[, options])`

* `chunkA` {Chunk}
* `chunkB` {Chunk}
* `options` {ChunkSizeOptions}
* Returns: {number}

#### `getModuleChunks(module)`

* `module` {Module}
* Returns: {Chunk[]}

#### `getModuleChunksIterable(module)`

* `module` {Module}
* Returns: {Iterable<Chunk>}

#### `getModuleGraphHash(module, runtime[, withConnections])`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `withConnections` {boolean}
* Returns: {string}

#### `getModuleGraphHashBigInt(module, runtime[, withConnections])`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `withConnections` {boolean}
* Returns: {bigint}

#### `getModuleHash(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {string}

#### `getModuleId(module)`

* `module` {Module}
* Returns: {string|number}

#### `getModuleRuntimeRequirements(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {ReadonlySet<string>}

#### `getModuleRuntimes(module)`

* `module` {Module}
* Returns: {RuntimeSpecSet}

#### `getModuleSourceTypes(module)`

* `module` {Module}
* Returns: {ReadonlySet<string>}

#### `getNumberOfChunkFullHashModules(chunk)`

* `chunk` {Chunk}
* Returns: {number}

#### `getNumberOfChunkModules(chunk)`

* `chunk` {Chunk}
* Returns: {number}

#### `getNumberOfEntryModules(chunk)`

* `chunk` {Chunk}
* Returns: {number}

#### `getNumberOfModuleChunks(module)`

* `module` {Module}
* Returns: {number}

#### `getNumberOfRuntimeModules(chunk)`

* `chunk` {Chunk}
* Returns: {number}

#### `getOrderedChunkModules(chunk, comparator)`

* `chunk` {Chunk}
* `comparator` {(a: Module, b: Module) => -1|0|1}
* Returns: {Module[]}

#### `getOrderedChunkModulesIterable(chunk, comparator)`

* `chunk` {Chunk}
* `comparator` {(a: Module, b: Module) => -1|0|1}
* Returns: {Iterable<Module>}

#### `getOrderedChunkModulesIterableBySourceType(chunk, sourceType, comparator)`

* `chunk` {Chunk}
* `sourceType` {string}
* `comparator` {(a: Module, b: Module) => -1|0|1}
* Returns: {Iterable<Module, any, any>}

#### `getOrderedModuleChunksIterable(module, sortFn)`

* `module` {Module}
* `sortFn` {(a: Chunk, b: Chunk) => -1|0|1}
* Returns: {Iterable<Chunk>}

#### `getRenderedModuleHash(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {string}

#### `getRuntimeChunkDependentChunksIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable<Chunk>}

#### `getRuntimeId(runtime)`

* `runtime` {string}
* Returns: {RuntimeId}

#### `getTreeRuntimeRequirements(chunk)`

* `chunk` {Chunk}
* Returns: {ReadonlySet<string>}

#### `hasChunkEntryDependentChunks(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

#### `hasModuleHashes(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {boolean}

#### `hasModuleInGraph(chunk, filterFn[, filterChunkFn])`

* `chunk` {Chunk}
* `filterFn` {(m: Module) => boolean}
* `filterChunkFn` {(c: Chunk, chunkGraph: ChunkGraph) => boolean}
* Returns: {boolean}

#### `integrateChunks(chunkA, chunkB)`

* `chunkA` {Chunk}
* `chunkB` {Chunk}
* Returns: {void}

#### `isEntryModule(module)`

* `module` {Module}
* Returns: {boolean}

#### `isEntryModuleInChunk(module, chunk)`

* `module` {Module}
* `chunk` {Chunk}
* Returns: {boolean}

#### `isModuleInChunk(module, chunk)`

* `module` {Module}
* `chunk` {Chunk}
* Returns: {boolean}

#### `isModuleInChunkGroup(module, chunkGroup)`

* `module` {Module}
* `chunkGroup` {ChunkGroup}
* Returns: {boolean}

#### `replaceModule(oldModule, newModule)`

* `oldModule` {Module}
* `newModule` {Module}
* Returns: {void}

#### `setChunkModuleSourceTypes(chunk, module, sourceTypes)`

* `chunk` {Chunk}
* `module` {Module}
* `sourceTypes` {ReadonlySet<string>}
* Returns: {void}

#### `setModuleHashes(module, runtime, hash, renderedHash)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `hash` {string}
* `renderedHash` {string}
* Returns: {void}

#### `setModuleId(module, id)`

* `module` {Module}
* `id` {ModuleId}
* Returns: {void}

#### `setRuntimeId(runtime, id)`

* `runtime` {string}
* `id` {RuntimeId}
* Returns: {void}

#### `upgradeDependentToFullHashModules(chunk)`

* `chunk` {Chunk}
* Returns: {void}

#### Static method: `clearChunkGraphForChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {void}

#### Static method: `clearChunkGraphForModule(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {void}

#### Static method: `getChunkGraphForChunk(chunk, deprecateMessage, deprecationCode)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* `deprecateMessage` {string}
* `deprecationCode` {string}
* Returns: {ChunkGraph}

#### Static method: `getChunkGraphForModule(module, deprecateMessage, deprecationCode)`

> Stability: 0 - Deprecated

* `module` {Module}
* `deprecateMessage` {string}
* `deprecationCode` {string}
* Returns: {ChunkGraph}

#### Static method: `setChunkGraphForChunk(chunk, chunkGraph)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

#### Static method: `setChunkGraphForModule(module, chunkGraph)`

> Stability: 0 - Deprecated

* `module` {Module}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

***

## Class: `ChunkGroup`

### Extended by

- {Entrypoint}

### Constructors

#### `new ChunkGroup()`

* Returns: {ChunkGroup}

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="asyncentrypointsiterable"></a> `asyncEntrypointsIterable` | {SortableSet<ChunkGroup>} | - |
| <a id="blocksiterable"></a> `blocksIterable` | {Iterable<AsyncDependenciesBlock>} | - |
| <a id="childreniterable"></a> `childrenIterable` | {SortableSet<ChunkGroup>} | - |
| <a id="chunks"></a> `chunks` | {Chunk[]} | - |
| <a id="debugid"></a> `debugId` | {string} | get a uniqueId for ChunkGroup, made up of its member Chunk debugId's |
| <a id="getmoduleindex"></a> `getModuleIndex` | {(module: Module) => number} | - |
| <a id="getmoduleindex2"></a> `getModuleIndex2` | {(module: Module) => number} | - |
| <a id="groupdebugid"></a> `groupDebugId` | {number} | - |
| <a id="id"></a> `id` | {string} | get a unique id for ChunkGroup, made up of its member Chunk id's |
| <a id="index"></a> `index?` | {number} | - |
| <a id="name"></a> `name?` | {string} | returns the name of current ChunkGroup sets a new name for current ChunkGroup |
| <a id="options"></a> `options` | {ChunkGroupOptions} | - |
| <a id="origins"></a> `origins` | {OriginRecord[]} | - |
| <a id="parentsiterable"></a> `parentsIterable` | {SortableSet<ChunkGroup>} | - |

### Methods

#### `addAsyncEntrypoint(entrypoint)`

* `entrypoint` {Entrypoint}
* Returns: {boolean}

#### `addBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {boolean}

#### `addChild(group)`

* `group` {ChunkGroup}
* Returns: {boolean}

#### `addOptions(options)`

* `options` {ChunkGroupOptions}
* Returns: {void}

when a new chunk is added to a chunkGroup, addingOptions will occur.

#### `addOrigin(module, loc, request)`

* `module` {Module}
* `loc` {DependencyLocation}
* `request` {string}
* Returns: {void}

#### `addParent(parentChunk)`

* `parentChunk` {ChunkGroup}
* Returns: {boolean}

#### `checkConstraints()`

* Returns: {void}

#### `compareTo(chunkGraph, otherGroup)`

* `chunkGraph` {ChunkGraph}
* `otherGroup` {ChunkGroup}
* Returns: {-1|0|1}

Sorting predicate which allows current ChunkGroup to be compared against another.
Sorting values are based off of number of chunks in ChunkGroup.

#### `getBlocks()`

* Returns: {AsyncDependenciesBlock[]}

#### `getChildren()`

* Returns: {ChunkGroup[]}

#### `getChildrenByOrders(moduleGraph, chunkGraph)`

* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}
* Returns: {Record<string, ChunkGroup[]>}

#### `getFiles()`

* Returns: {string[]}

#### `getModulePostOrderIndex(module)`

* `module` {Module}
* Returns: {number}

Gets the bottom-up index of a module in this ChunkGroup

#### `getModulePreOrderIndex(module)`

* `module` {Module}
* Returns: {number}

Gets the top-down index of a module in this ChunkGroup

#### `getNumberOfBlocks()`

* Returns: {number}

#### `getNumberOfChildren()`

* Returns: {number}

#### `getNumberOfParents()`

* Returns: {number}

#### `getParents()`

* Returns: {ChunkGroup[]}

#### `hasBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {boolean}

#### `hasParent(parent)`

* `parent` {ChunkGroup}
* Returns: {boolean}

#### `insertChunk(chunk, before)`

* `chunk` {Chunk}
* `before` {Chunk}
* Returns: {boolean}

inserts a chunk before another existing chunk in group

#### `isInitial()`

* Returns: {boolean}

#### `pushChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

add a chunk into ChunkGroup. Is pushed on or prepended

#### `remove()`

* Returns: {void}

#### `removeChild(group)`

* `group` {ChunkGroup}
* Returns: {boolean}

#### `removeChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

#### `removeParent(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {boolean}

#### `replaceChunk(oldChunk, newChunk)`

* `oldChunk` {Chunk}
* `newChunk` {Chunk}
* Returns: {boolean}

#### `setModulePostOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

Sets the bottom-up index of a module in this ChunkGroup

#### `setModulePreOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

Sets the top-down index of a module in this ChunkGroup

#### `sortItems()`

* Returns: {void}

#### `unshiftChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

Performs an unshift of a specific chunk

***

## Class: `CleanPlugin`

### Constructors

#### `new CleanPlugin([options])`

* `options` {CleanOptions}
* Returns: {CleanPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {CleanOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {CleanPluginCompilationHooks}

***

## Class: `CodeGenerationResults`

### Constructors

#### `new CodeGenerationResults()`

* Returns: {CodeGenerationResults}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="map"></a> `map` | {Map<Module, RuntimeSpecMap<CodeGenerationResult, CodeGenerationResult>>} |

### Methods

#### `add(module, runtime, result)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `result` {CodeGenerationResult}
* Returns: {void}

#### `get(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {CodeGenerationResult}

#### `getData(module, runtime, key)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `key` {string}
* Returns: {any}

#### `getHash(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {string}

#### `getRuntimeRequirements(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {ReadonlySet<string>}

#### `getSource(module, runtime, sourceType)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `sourceType` {string}
* Returns: {Source}

#### `has(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {boolean}

***

## Class: `Compilation`

### Constructors

#### `new Compilation(compiler, params)`

* `compiler` {Compiler}
* `params` {CompilationParams}
* Returns: {Compilation}

Creates an instance of Compilation.

### Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="additionalchunkassets"></a> `additionalChunkAssets` | `public` | {string[]} | - |
| <a id="addmodulequeue"></a> `addModuleQueue` | `public` | {AsyncQueue<Module, string, Module>} | - |
| <a id="assets"></a> `assets` | `public` | {CompilationAssets} | - |
| <a id="assetsinfo"></a> `assetsInfo` | `public` | {Map<string, AssetInfo>} | - |
| <a id="asyncentrypoints"></a> `asyncEntrypoints` | `public` | {Entrypoint[]} | - |
| <a id="bail"></a> `bail` | `public` | {boolean} | - |
| <a id="builddependencies"></a> `buildDependencies` | `public` | {LazySet<string>} | - |
| <a id="buildqueue"></a> `buildQueue` | `public` | {AsyncQueue<Module, Module, Module>} | - |
| <a id="buildtimeexecutedmodules"></a> `buildTimeExecutedModules` | `public` | {WeakSet<Module>} | - |
| <a id="builtmodules"></a> `builtModules` | `public` | {WeakSet<Module>} | - |
| <a id="children"></a> `children` | `public` | {Compilation[]} | - |
| <a id="childrencounters"></a> `childrenCounters` | `public` | {Record<string, number>} | - |
| <a id="chunkgraph"></a> `chunkGraph` | `public` | {ChunkGraph} | - |
| <a id="chunkgroups"></a> `chunkGroups` | `public` | {ChunkGroup[]} | - |
| <a id="chunks"></a> `chunks` | `public` | {Set<Chunk>} | - |
| <a id="chunktemplate"></a> `chunkTemplate` | `public` | {ChunkTemplate} | - |
| <a id="codegeneratedmodules"></a> `codeGeneratedModules` | `public` | {WeakSet<Module>} | - |
| <a id="codegenerationresults"></a> `codeGenerationResults?` | `public` | {CodeGenerationResults} | - |
| <a id="comparedforemitassets"></a> `comparedForEmitAssets` | `public` | {Set<string>} | - |
| <a id="compilationdependencies"></a> ~~`compilationDependencies`~~ | `public` | {{ add: (item: string) => LazySet<string> }} | **Deprecated** |
| `compilationDependencies.add` | `public` | {(item: string) => LazySet<string>} | - |
| <a id="compiler"></a> `compiler` | `public` | {Compiler} | - |
| <a id="compilerpath"></a> `compilerPath` | `public` | {string} | - |
| <a id="contextdependencies"></a> `contextDependencies` | `public` | {LazySet<string>} | - |
| <a id="creatingmoduleduringbuild"></a> `creatingModuleDuringBuild` | `public` | {WeakMap<Module, Set<Module>>} | Modules in value are building during the build of Module in key. Means value blocking key from finishing. Needed to detect build cycles. |
| <a id="dependencyfactories"></a> `dependencyFactories` | `public` | {Map<DependencyConstructor, ModuleFactory>} | - |
| <a id="dependencytemplates"></a> `dependencyTemplates` | `public` | {DependencyTemplates} | - |
| <a id="emittedassets"></a> `emittedAssets` | `public` | {Set<string>} | - |
| <a id="endtime"></a> `endTime?` | `public` | {number} | - |
| <a id="entries"></a> `entries` | `public` | {Map<string, EntryData>} | - |
| <a id="entrypoints"></a> `entrypoints` | `public` | {Map<string, Entrypoint>} | - |
| <a id="errors"></a> `errors` | `public` | {Error[]} | - |
| <a id="factorizequeue"></a> `factorizeQueue` | `public` | {AsyncQueue<FactorizeModuleOptions, string, Module|ModuleFactoryResult>} | - |
| <a id="filedependencies"></a> `fileDependencies` | `public` | {LazySet<string>} | - |
| <a id="filesysteminfo"></a> `fileSystemInfo` | `public` | {FileSystemInfo} | - |
| <a id="fullhash"></a> `fullHash?` | `public` | {string} | - |
| <a id="globalentry"></a> `globalEntry` | `public` | {EntryData} | - |
| <a id="hash"></a> `hash?` | `public` | {string} | - |
| <a id="hooks"></a> `hooks` | `public` | {Readonly<{ addEntry: SyncHook<Tuple<Dependency, EntryOptions>>; additionalAssets: FakeHook<Pick<AsyncSeriesHook<Tuple<unknown>>, "name"|"tap"|"tapAsync"|"tapPromise">>; additionalChunkAssets: FakeHook<Pick<AsyncSeriesHook<Tuple<Set<Chunk>>>, "name"|"tap"|"tapAsync"|"tapPromise">>; ... }>} | - |
| <a id="inputfilesystem"></a> `inputFileSystem` | `public` | {InputFileSystem} | - |
| <a id="logger"></a> `logger` | `public` | {WebpackLogger} | - |
| <a id="logging"></a> `logging` | `public` | {Map<string, LogEntry[]>} | - |
| <a id="maintemplate"></a> `mainTemplate` | `public` | {MainTemplate} | - |
| <a id="missingdependencies"></a> `missingDependencies` | `public` | {LazySet<string>} | - |
| <a id="modulegraph"></a> `moduleGraph` | `public` | {ModuleGraph} | - |
| <a id="modulememcaches"></a> `moduleMemCaches?` | `public` | {Map<Module, WeakTupleMap<any[], any>>} | - |
| <a id="modulememcaches2"></a> `moduleMemCaches2?` | `public` | {Map<Module, WeakTupleMap<any[], any>>} | - |
| <a id="modules"></a> `modules` | `public` | {Set<Module>} | - |
| <a id="moduletemplates"></a> `moduleTemplates` | `public` | {ModuleTemplates} | - |
| <a id="name"></a> `name?` | `public` | {string} | - |
| <a id="namedchunkgroups"></a> `namedChunkGroups` | `public` | {Map<string, ChunkGroup>} | - |
| <a id="namedchunks"></a> `namedChunks` | `public` | {Map<string, Chunk>} | - |
| <a id="needadditionalpass"></a> `needAdditionalPass` | `public` | {boolean} | - |
| <a id="options"></a> `options` | `public` | {WebpackOptionsNormalizedWithDefaults} | - |
| <a id="outputoptions"></a> `outputOptions` | `public` | {OutputNormalizedWithDefaults} | - |
| <a id="params"></a> `params` | `public` | {CompilationParams} | - |
| <a id="processdependenciesqueue"></a> `processDependenciesQueue` | `public` | {AsyncQueue<Module, Module, Module>} | - |
| <a id="profile"></a> `profile` | `public` | {boolean} | - |
| <a id="rebuildqueue"></a> `rebuildQueue` | `public` | {AsyncQueue<Module, Module, Module>} | - |
| <a id="records"></a> `records` | `public` | {Records} | - |
| <a id="requestshortener"></a> `requestShortener` | `public` | {RequestShortener} | - |
| <a id="resolverfactory"></a> `resolverFactory` | `public` | {ResolverFactory} | - |
| <a id="runtimetemplate"></a> `runtimeTemplate` | `public` | {RuntimeTemplate} | - |
| <a id="starttime"></a> `startTime?` | `public` | {number} | - |
| <a id="usedchunkids"></a> `usedChunkIds` | `public` | {Set<number>} | - |
| <a id="usedmoduleids"></a> `usedModuleIds` | `public` | {Set<number>} | - |
| <a id="valuecacheversions"></a> `valueCacheVersions` | `public` | {Map<string, ValueCacheVersion>} | - |
| <a id="warnings"></a> `warnings` | `public` | {Error[]} | - |
| <a id="process-assets-stage-additional"></a> `PROCESS_ASSETS_STAGE_ADDITIONAL` | `static` | {number} | Add additional assets to the compilation. |
| <a id="process-assets-stage-additions"></a> `PROCESS_ASSETS_STAGE_ADDITIONS` | `static` | {number} | Add additional sections to existing assets, like a banner or initialization code. |
| <a id="process-assets-stage-analyse"></a> `PROCESS_ASSETS_STAGE_ANALYSE` | `static` | {number} | Analyse existing assets. |
| <a id="process-assets-stage-derived"></a> `PROCESS_ASSETS_STAGE_DERIVED` | `static` | {number} | Derive new assets from existing assets. Existing assets should not be treated as complete. |
| <a id="process-assets-stage-dev-tooling"></a> `PROCESS_ASSETS_STAGE_DEV_TOOLING` | `static` | {number} | Add development tooling to assets, e. g. by extracting a SourceMap. |
| <a id="process-assets-stage-optimize"></a> `PROCESS_ASSETS_STAGE_OPTIMIZE` | `static` | {number} | Optimize existing assets in a general way. |
| <a id="process-assets-stage-optimize-compatibility"></a> `PROCESS_ASSETS_STAGE_OPTIMIZE_COMPATIBILITY` | `static` | {number} | Optimize the compatibility of existing assets, e. g. add polyfills or vendor-prefixes. |
| <a id="process-assets-stage-optimize-count"></a> `PROCESS_ASSETS_STAGE_OPTIMIZE_COUNT` | `static` | {number} | Optimize the count of existing assets, e. g. by merging them. Only assets of the same type should be merged. For assets of different types see PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE. |
| <a id="process-assets-stage-optimize-hash"></a> `PROCESS_ASSETS_STAGE_OPTIMIZE_HASH` | `static` | {number} | Optimize the hashes of the assets, e. g. by generating real hashes of the asset content. |
| <a id="process-assets-stage-optimize-inline"></a> `PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE` | `static` | {number} | Optimize the count of existing assets, e. g. by inlining assets of into other assets. Only assets of different types should be inlined. For assets of the same type see PROCESS_ASSETS_STAGE_OPTIMIZE_COUNT. |
| <a id="process-assets-stage-optimize-size"></a> `PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE` | `static` | {number} | Optimize the size of existing assets, e. g. by minimizing or omitting whitespace. |
| <a id="process-assets-stage-optimize-transfer"></a> `PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER` | `static` | {number} | Optimize the transfer of existing assets, e. g. by preparing a compressed (gzip) file as separate asset. |
| <a id="process-assets-stage-pre-process"></a> `PROCESS_ASSETS_STAGE_PRE_PROCESS` | `static` | {number} | Basic preprocessing of assets. |
| <a id="process-assets-stage-report"></a> `PROCESS_ASSETS_STAGE_REPORT` | `static` | {number} | Creating assets for reporting purposes. |
| <a id="process-assets-stage-summarize"></a> `PROCESS_ASSETS_STAGE_SUMMARIZE` | `static` | {number} | Summarize the list of existing assets e. g. creating an assets manifest of Service Workers. |

### Methods

#### `addAsyncEntrypoint(options, module, loc, request)`

* `options` {EntryOptions}
* `module` {Module}
* `loc` {DependencyLocation}
* `request` {string}
* Returns: {Entrypoint}

#### `addChunk([name])`

* `name` {string}
* Returns: {Chunk}

This method first looks to see if a name is provided for a new chunk,
and first looks to see if any named chunks already exist and reuse that chunk instead.

#### `addChunkInGroup(groupOptions[, module][, loc][, request])`

* `groupOptions` {string|ChunkGroupOptions}
* `module` {Module}
* `loc` {SyntheticDependencyLocation|RealDependencyLocation}
* `request` {string}
* Returns: {ChunkGroup}

If `module` is passed, `loc` and `request` must also be passed.

#### `addEntry(context, entry, optionsOrName, callback)`

* `context` {string}
* `entry` {Dependency}
* `optionsOrName` {string|EntryOptions}
* `callback` {(err?: WebpackError, result?: Module) => void}
* Returns: {void}

#### `addInclude(context, dependency, options, callback)`

* `context` {string}
* `dependency` {Dependency}
* `options` {EntryOptions}
* `callback` {(err?: WebpackError, result?: Module) => void}
* Returns: {void}

#### `addModule(module, callback)`

* `module` {Module}
* `callback` {(err?: WebpackError, result?: Module) => void}
* Returns: {void}

#### `addModuleChain(context, dependency, callback)`

* `context` {string}
* `dependency` {Dependency}
* `callback` {(err?: WebpackError, result?: Module) => void}
* Returns: {void}

#### `addModuleTree(__namedParameters, callback)`

* `__namedParameters` {{ context: string; contextInfo: Partial<ModuleFactoryCreateDataContextInfo>; dependency: Dependency }}
* `callback` {(err?: WebpackError, result?: Module) => void}
* Returns: {void}

#### `addRuntimeModule(chunk, module[, chunkGraph])`

* `chunk` {Chunk}
* `module` {RuntimeModule}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

#### `assignDepth(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {void}

#### `assignDepths(modules)`

* `modules` {Set<Module>}
* Returns: {void}

#### `assignRuntimeIds()`

* Returns: {void}

#### `buildModule(module, callback)`

* `module` {Module}
* `callback` {(err?: WebpackError, result?: Module) => void}
* Returns: {void}

Schedules a build of the module object

#### `checkConstraints()`

* Returns: {void}

#### `clearAssets()`

* Returns: {void}

#### `codeGeneration(callback)`

* `callback` {(err?: WebpackError) => void}
* Returns: {void}

#### `createChildCompiler(name[, outputOptions][, plugins])`

* `name` {string}
* `outputOptions` {Partial<OutputNormalized>}
* `plugins` {false|""|0|(this: Compiler, compiler: Compiler) => void|WebpackPluginInstance[]}
* Returns: {Compiler}

This function allows you to run another instance of webpack inside of webpack however as
a child with different settings and configurations (if desired) applied. It copies all hooks, plugins
from parent (or top level compiler) and creates a child Compilation

#### `createChunkAssets(callback)`

* `callback` {(err?: WebpackError) => void}
* Returns: {void}

#### `createHash()`

* Returns: {CodeGenerationJob[]}

#### `createModuleAssets()`

* Returns: {void}

#### `createModuleHashes()`

* Returns: {void}

#### `createStatsFactory(options)`

* `options` {NormalizedStatsOptions}
* Returns: {StatsFactory}

#### `createStatsOptions([optionsOrPreset][, context])`

* `optionsOrPreset` {string|boolean|StatsOptions}
* `context` {CreateStatsOptionsContext}
* Returns: {NormalizedStatsOptions}

#### `createStatsPrinter(options)`

* `options` {NormalizedStatsOptions}
* Returns: {StatsPrinter}

#### `deleteAsset(file)`

* `file` {string}
* Returns: {void}

#### `emitAsset(file, source[, assetInfo])`

* `file` {string}
* `source` {Source}
* `assetInfo` {AssetInfo}
* Returns: {void}

#### `executeModule(module, options, callback)`

* `module` {Module}
* `options` {ExecuteModuleOptions}
* `callback` {(err?: WebpackError, result?: ExecuteModuleResult) => void}
* Returns: {void}

#### `factorizeModule(options, callback)`

##### Call Signature

* `options` {FactorizeModuleOptions&{ factoryResult: false }}
* `callback` {(err?: WebpackError, result?: Module) => void}
* Returns: {void}

##### Call Signature

* `options` {FactorizeModuleOptions&{ factoryResult: true }}
* `callback` {(err?: WebpackError, result?: ModuleFactoryResult) => void}
* Returns: {void}

#### `findModule(identifier)`

* `identifier` {string}
* Returns: {Module}

Attempts to search for a module by its identifier

#### `finish(callback)`

* `callback` {(err?: WebpackError) => void}
* Returns: {void}

#### `getAsset(name)`

* `name` {string}
* Returns: {Readonly<Asset>}

#### `getAssetPath(filename, data)`

* `filename` {TemplatePath}
* `data` {PathData}
* Returns: {string}

#### `getAssetPathWithInfo(filename, data)`

* `filename` {TemplatePath}
* `data` {PathData}
* Returns: {InterpolatedPathAndAssetInfo}

#### `getAssets()`

* Returns: {Readonly<Asset>[]}

#### `getCache(name)`

* `name` {string}
* Returns: {CacheFacade}

#### `getDependencyReferencedExports(dependency, runtime)`

* `dependency` {Dependency}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

#### `getErrors()`

* Returns: {Error[]}

#### `getLogger(name)`

* `name` {string|() => string}
* Returns: {WebpackLogger}

#### `getModule(module)`

* `module` {Module}
* Returns: {Module}

Fetches a module from a compilation by its identifier

#### `getPath(filename[, data])`

* `filename` {TemplatePath}
* `data` {PathData}
* Returns: {string}

#### `getPathWithInfo(filename[, data])`

* `filename` {TemplatePath}
* `data` {PathData}
* Returns: {InterpolatedPathAndAssetInfo}

#### `getRenderManifest(options)`

* `options` {RenderManifestOptions}
* Returns: {RenderManifestEntry[]}

#### `getStats()`

* Returns: {Stats}

#### `getWarnings()`

* Returns: {Error[]}

#### `handleModuleCreation(__namedParameters, callback)`

* `__namedParameters` {HandleModuleCreationOptions}
* `callback` {(err?: WebpackError, result?: Module) => void}
* Returns: {void}

#### `patchChunksAfterReasonRemoval(module, chunk)`

* `module` {Module}
* `chunk` {Chunk}
* Returns: {void}

#### `processModuleDependencies(module, callback)`

* `module` {Module}
* `callback` {(err?: WebpackError, result?: Module) => void}
* Returns: {void}

#### `processModuleDependenciesNonRecursive(module)`

* `module` {Module}
* Returns: {void}

#### `processRuntimeRequirements([__namedParameters])`

* `__namedParameters` {{ chunkGraph: ChunkGraph; chunkGraphEntries: Iterable<Chunk>; chunks: Iterable<Chunk>; ... }}
* Returns: {void}

#### `rebuildModule(module, callback)`

* `module` {Module}
* `callback` {(err?: WebpackError, result?: Module) => void}
* Returns: {void}

#### `removeChunkFromDependencies(block, chunk)`

* `block` {DependenciesBlock}
* `chunk` {Chunk}
* Returns: {void}

#### `removeReasonsOfDependencyBlock(module, block)`

* `module` {Module}
* `block` {DependenciesBlockLike}
* Returns: {void}

#### `renameAsset(file, newFile)`

* `file` {string}
* `newFile` {string}
* Returns: {void}

#### `reportDependencyErrorsAndWarnings(module, blocks)`

* `module` {Module}
* `blocks` {DependenciesBlock[]}
* Returns: {boolean}

#### `seal(callback)`

* `callback` {(err?: WebpackError) => void}
* Returns: {void}

#### `sortItemsWithChunkIds()`

* Returns: {void}

#### `summarizeDependencies()`

* Returns: {void}

#### `unseal()`

* Returns: {void}

#### `updateAsset(file, newSourceOrFunction[, assetInfoUpdateOrFunction])`

* `file` {string}
* `newSourceOrFunction` {Source|(source: Source) => Source}
* `assetInfoUpdateOrFunction` {AssetInfo|(assetInfo?: AssetInfo) => AssetInfo}
* Returns: {void}

***

## Class: `Compiler`

### Constructors

#### `new Compiler(context[, options])`

* `context` {string}
* `options` {WebpackOptionsNormalized}
* Returns: {Compiler}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="cache"></a> `cache` | {CacheClass} |
| <a id="compilerpath"></a> `compilerPath` | {string} |
| <a id="context"></a> `context` | {string} |
| <a id="contexttimestamps"></a> `contextTimestamps?` | {Map<string, "ignore"|EntryTypesIndex|OnlySafeTimeEntry|ExistenceOnlyTimeEntryTypesIndex>} |
| <a id="filetimestamps"></a> `fileTimestamps?` | {Map<string, "ignore"|EntryTypesIndex|OnlySafeTimeEntry|ExistenceOnlyTimeEntryTypesIndex>} |
| <a id="fsstarttime"></a> `fsStartTime?` | {number} |
| <a id="hooks"></a> `hooks` | {Readonly<{ additionalPass: AsyncSeriesHook<Tuple<unknown>>; afterCompile: AsyncSeriesHook<Tuple<Compilation>>; afterDone: SyncHook<Tuple<Stats>>; ... }>} |
| <a id="idle"></a> `idle` | {boolean} |
| <a id="immutablepaths"></a> `immutablePaths` | {Set<string|RegExp>} |
| <a id="infrastructurelogger"></a> `infrastructureLogger?` | {(value: string, type: LogTypeEnum, args?: any[]) => void} |
| <a id="inputfilesystem"></a> `inputFileSystem` | {InputFileSystem} |
| <a id="intermediatefilesystem"></a> `intermediateFileSystem` | {IntermediateFileSystem} |
| <a id="managedpaths"></a> `managedPaths` | {Set<string|RegExp>} |
| <a id="modifiedfiles"></a> `modifiedFiles?` | {ReadonlySet<string>} |
| <a id="modulememcaches"></a> `moduleMemCaches?` | {Map<Module, ModuleMemCachesItem>} |
| <a id="name"></a> `name?` | {string} |
| <a id="options"></a> `options` | {WebpackOptionsNormalized} |
| <a id="outputfilesystem"></a> `outputFileSystem` | {OutputFileSystem} |
| <a id="outputpath"></a> `outputPath` | {string} |
| <a id="parentcompilation"></a> `parentCompilation?` | {Compilation} |
| <a id="platform"></a> `platform` | {Readonly<PlatformTargetProperties>} |
| <a id="records"></a> `records` | {Records} |
| <a id="recordsinputpath"></a> `recordsInputPath` | {string} |
| <a id="recordsoutputpath"></a> `recordsOutputPath` | {string} |
| <a id="removedfiles"></a> `removedFiles?` | {ReadonlySet<string>} |
| <a id="requestshortener"></a> `requestShortener` | {RequestShortener} |
| <a id="resolverfactory"></a> `resolverFactory` | {ResolverFactory} |
| <a id="root"></a> `root` | {Compiler} |
| <a id="running"></a> `running` | {boolean} |
| <a id="unmanagedpaths"></a> `unmanagedPaths` | {Set<string|RegExp>} |
| <a id="watchfilesystem"></a> `watchFileSystem` | {WatchFileSystem} |
| <a id="watching"></a> `watching?` | {Watching} |
| <a id="watchmode"></a> `watchMode` | {boolean} |
| <a id="webpack"></a> `webpack` | {exports} |

### Methods

#### `close(callback)`

* `callback` {(err: Error, result?: void) => void}
* Returns: {void}

#### `compile(callback)`

* `callback` {CallbackWebpackFunction_2<Compilation, void>}
* Returns: {void}

#### `createChildCompiler(compilation, compilerName, compilerIndex[, outputOptions][, plugins])`

* `compilation` {Compilation}
* `compilerName` {string}
* `compilerIndex` {number}
* `outputOptions` {Partial<OutputNormalized>}
* `plugins` {false|""|0|WebpackPluginInstance|(this: Compiler, compiler: Compiler) => void[]}
* Returns: {Compiler}

#### `createCompilation(params)`

* `params` {CompilationParams}
* Returns: {Compilation}

#### `createContextModuleFactory()`

* Returns: {ContextModuleFactory}

#### `createNormalModuleFactory()`

* Returns: {NormalModuleFactory}

#### `emitAssets(compilation, callback)`

* `compilation` {Compilation}
* `callback` {(err: Error, result?: void) => void}
* Returns: {void}

#### `emitRecords(callback)`

* `callback` {(err: Error, result?: void) => void}
* Returns: {void}

#### `getCache(name)`

* `name` {string}
* Returns: {CacheFacade}

#### `getInfrastructureLogger(name)`

* `name` {string|() => string}
* Returns: {WebpackLogger}

#### `isChild()`

* Returns: {boolean}

#### `newCompilation(params)`

* `params` {CompilationParams}
* Returns: {Compilation}

#### `newCompilationParams()`

* Returns: {{ contextModuleFactory: ContextModuleFactory; normalModuleFactory: NormalModuleFactory }}

#### `purgeInputFileSystem()`

* Returns: {void}

#### `readRecords(callback)`

* `callback` {(err: Error, result?: void) => void}
* Returns: {void}

#### `run(callback)`

* `callback` {CallbackWebpackFunction_2<Stats, void>}
* Returns: {void}

#### `runAsChild(callback)`

* `callback` {(err: Error, entries?: Chunk[], compilation?: Compilation) => void}
* Returns: {void}

#### `validate(schema, value[, options][, check])`

* `T` *extends* {object|object[]} = {object}
* `schema` {JSONSchema4&ExtendedSchema|JSONSchema6&ExtendedSchema|JSONSchema7&ExtendedSchema|() => Schema}
* `value` {T}
* `options` {ValidationErrorConfiguration}
* `check` {(value: T) => boolean}
* Returns: {void}

Schema validation function with optional pre-compiled check

#### `watch(watchOptions, handler)`

* `watchOptions` {WatchOptions}
* `handler` {CallbackWebpackFunction_2<Stats, void>}
* Returns: {Watching}

***

## Class: `ConcatenationScope`

### Constructors

#### `new ConcatenationScope(modulesMap, currentModule, usedNames)`

* `modulesMap` {ModuleInfo[]|Map<Module, ModuleInfo>}
* `currentModule` {ConcatenatedModuleInfo}
* `usedNames` {Set<string>}
* Returns: {ConcatenationScope}

### Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="usednames"></a> `usedNames` | `public` | {Set<string>} |
| <a id="default-export"></a> `DEFAULT_EXPORT` | `static` | {string} |
| <a id="namespace-object-export"></a> `NAMESPACE_OBJECT_EXPORT` | `static` | {string} |

### Methods

#### `createModuleReference(module, __namedParameters)`

* `module` {Module}
* `__namedParameters` {Partial<ModuleReferenceOptions>}
* Returns: {string}

#### `getRawExport(exportName)`

* `exportName` {string}
* Returns: {string}

#### `isModuleInScope(module)`

* `module` {Module}
* Returns: {boolean}

#### `registerExport(exportName, symbol)`

* `exportName` {string}
* `symbol` {string}
* Returns: {void}

#### `registerNamespaceExport(symbol)`

* `symbol` {string}
* Returns: {void}

#### `registerRawExport(exportName, expression)`

* `exportName` {string}
* `expression` {string}
* Returns: {void}

#### `setRawExportMap(exportName, expression)`

* `exportName` {string}
* `expression` {string}
* Returns: {void}

#### Static method: `isModuleReference(name)`

* `name` {string}
* Returns: {boolean}

#### Static method: `matchModuleReference(name)`

* `name` {string}
* Returns: {ModuleReferenceOptions&{ index: number }}

***

## Class: `ContextExclusionPlugin`

### Constructors

#### `new ContextExclusionPlugin(negativeMatcher)`

* `negativeMatcher` {RegExp}
* Returns: {ContextExclusionPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="negativematcher"></a> `negativeMatcher` | {RegExp} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `ContextReplacementPlugin`

### Constructors

#### `new ContextReplacementPlugin(resourceRegExp[, newContentResource][, newContentRecursive][, newContentRegExp])`

* `resourceRegExp` {RegExp}
* `newContentResource` {string|boolean|RegExp|(context: BeforeContextResolveData|AfterContextResolveData) => void}
* `newContentRecursive` {boolean|RegExp|NewContentCreateContextMap}
* `newContentRegExp` {RegExp}
* Returns: {ContextReplacementPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="newcontentcallback"></a> `newContentCallback?` | {(context: BeforeContextResolveData|AfterContextResolveData) => void} |
| <a id="newcontentcreatecontextmap"></a> `newContentCreateContextMap?` | {(fs: InputFileSystem, callback: (err: Error, newContentRecursive: NewContentCreateContextMap) => void) => void} |
| <a id="newcontentrecursive"></a> `newContentRecursive?` | {boolean} |
| <a id="newcontentregexp"></a> `newContentRegExp?` | {RegExp} |
| <a id="newcontentresource"></a> `newContentResource?` | {string} |
| <a id="resourceregexp"></a> `resourceRegExp` | {RegExp} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `DefinePlugin`

### Constructors

#### `new DefinePlugin(definitions)`

* `definitions` {Definitions}
* Returns: {DefinePlugin}

Create a new define plugin

### Properties

| Property | Type |
| ------ | ------ |
| <a id="definitions"></a> `definitions` | {Definitions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {DefinePluginHooks}

#### Static method: `runtimeValue(fn[, options])`

* `fn` {(value: { key: string; module: NormalModule; version: ValueCacheVersion }) => CodeValuePrimitive}
* `options` {true|string[]|RuntimeValueOptions}
* Returns: {RuntimeValue}

***

## Class: `DelegatedPlugin`

### Constructors

#### `new DelegatedPlugin(options)`

* `options` {Options}
* Returns: {DelegatedPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {Options} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `Dependency`

### Extended by

- {ModuleDependency}
- {NullDependency}

### Constructors

#### `new Dependency()`

* Returns: {Dependency}

### Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="category"></a> `category` | `public` | {string} |
| <a id="disconnect"></a> `disconnect` | `public` | {any} |
| <a id="loc"></a> `loc` | `public` | {DependencyLocation} |
| <a id="module"></a> `module` | `public` | {any} |
| <a id="optional"></a> `optional?` | `public` | {boolean} |
| <a id="type"></a> `type` | `public` | {string} |
| <a id="weak"></a> `weak` | `public` | {boolean} |
| <a id="exports-object-referenced"></a> `EXPORTS_OBJECT_REFERENCED` | `static` | {string[][]} |
| <a id="no-exports-referenced"></a> `NO_EXPORTS_REFERENCED` | `static` | {string[][]} |
| <a id="transitive"></a> `TRANSITIVE` | `static` | {TRANSITIVE} |

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

## Class: `DllPlugin`

### Constructors

#### `new DllPlugin(options)`

* `options` {DllPluginOptions}
* Returns: {DllPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {DllPluginOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `DllReferencePlugin`

### Constructors

#### `new DllReferencePlugin(options)`

* `options` {DllReferencePluginOptions}
* Returns: {DllReferencePlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {DllReferencePluginOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `DotenvPlugin`

### Constructors

#### `new DotenvPlugin([options])`

* `options` {DotenvPluginOptions}
* Returns: {DotenvPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {DotenvPluginOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

***

## Class: `DynamicEntryPlugin`

### Constructors

#### `new DynamicEntryPlugin(context, entry)`

* `context` {string}
* `entry` {() => Promise<EntryStaticNormalized>}
* Returns: {DynamicEntryPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="context"></a> `context` | {string} |
| <a id="entry"></a> `entry` | {() => Promise<EntryStaticNormalized>} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `EntryOptionPlugin`

### Constructors

#### `new EntryOptionPlugin()`

* Returns: {EntryOptionPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

#### Static method: `applyEntryOption(compiler, context, entry)`

* `compiler` {Compiler}
* `context` {string}
* `entry` {EntryNormalized}
* Returns: {void}

#### Static method: `entryDescriptionToOptions(compiler, name, desc)`

* `compiler` {Compiler}
* `name` {string}
* `desc` {EntryDescriptionNormalized}
* Returns: {EntryOptions}

***

## Class: `EntryPlugin`

### Constructors

#### `new EntryPlugin(context, entry[, options])`

* `context` {string}
* `entry` {string}
* `options` {string|EntryOptions}
* Returns: {EntryPlugin}

An entry plugin which will handle creation of the EntryDependency

### Properties

| Property | Type |
| ------ | ------ |
| <a id="context"></a> `context` | {string} |
| <a id="entry"></a> `entry` | {string} |
| <a id="options"></a> `options` | {string|EntryOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `createDependency(entry, options)`

* `entry` {string}
* `options` {string|EntryOptions}
* Returns: {EntryDependency}

***

## Class: `Entrypoint`

### Extends

- {ChunkGroup}

### Constructors

#### `new Entrypoint()`

* Returns: {Entrypoint}

### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="asyncentrypointsiterable"></a> `asyncEntrypointsIterable` | {SortableSet<ChunkGroup>} | - | [`ChunkGroup`](#abstract-chunkgroup).[`asyncEntrypointsIterable`](#asyncentrypointsiterable) |
| <a id="blocksiterable"></a> `blocksIterable` | {Iterable<AsyncDependenciesBlock>} | - | [`ChunkGroup`](#abstract-chunkgroup).[`blocksIterable`](#blocksiterable) |
| <a id="childreniterable"></a> `childrenIterable` | {SortableSet<ChunkGroup>} | - | [`ChunkGroup`](#abstract-chunkgroup).[`childrenIterable`](#childreniterable) |
| <a id="chunks"></a> `chunks` | {Chunk[]} | - | [`ChunkGroup`](#abstract-chunkgroup).[`chunks`](#chunks) |
| <a id="debugid"></a> `debugId` | {string} | get a uniqueId for ChunkGroup, made up of its member Chunk debugId's | [`ChunkGroup`](#abstract-chunkgroup).[`debugId`](#debugid) |
| <a id="getmoduleindex"></a> `getModuleIndex` | {(module: Module) => number} | - | [`ChunkGroup`](#abstract-chunkgroup).[`getModuleIndex`](#getmoduleindex) |
| <a id="getmoduleindex2"></a> `getModuleIndex2` | {(module: Module) => number} | - | [`ChunkGroup`](#abstract-chunkgroup).[`getModuleIndex2`](#getmoduleindex2) |
| <a id="groupdebugid"></a> `groupDebugId` | {number} | - | [`ChunkGroup`](#abstract-chunkgroup).[`groupDebugId`](#groupdebugid) |
| <a id="id"></a> `id` | {string} | get a unique id for ChunkGroup, made up of its member Chunk id's | [`ChunkGroup`](#abstract-chunkgroup).[`id`](#id) |
| <a id="index"></a> `index?` | {number} | - | [`ChunkGroup`](#abstract-chunkgroup).[`index`](#index) |
| <a id="name"></a> `name?` | {string} | returns the name of current ChunkGroup sets a new name for current ChunkGroup | [`ChunkGroup`](#abstract-chunkgroup).[`name`](#name) |
| <a id="options"></a> `options` | {ChunkGroupOptions} | - | [`ChunkGroup`](#abstract-chunkgroup).[`options`](#options) |
| <a id="origins"></a> `origins` | {OriginRecord[]} | - | [`ChunkGroup`](#abstract-chunkgroup).[`origins`](#origins) |
| <a id="parentsiterable"></a> `parentsIterable` | {SortableSet<ChunkGroup>} | - | [`ChunkGroup`](#abstract-chunkgroup).[`parentsIterable`](#parentsiterable) |

### Methods

#### `addAsyncEntrypoint(entrypoint)`

* `entrypoint` {Entrypoint}
* Returns: {boolean}

#### `addBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {boolean}

#### `addChild(group)`

* `group` {ChunkGroup}
* Returns: {boolean}

#### `addDependOn(entrypoint)`

* `entrypoint` {Entrypoint}
* Returns: {void}

#### `addOptions(options)`

* `options` {ChunkGroupOptions}
* Returns: {void}

when a new chunk is added to a chunkGroup, addingOptions will occur.

#### `addOrigin(module, loc, request)`

* `module` {Module}
* `loc` {DependencyLocation}
* `request` {string}
* Returns: {void}

#### `addParent(parentChunk)`

* `parentChunk` {ChunkGroup}
* Returns: {boolean}

#### `checkConstraints()`

* Returns: {void}

#### `compareTo(chunkGraph, otherGroup)`

* `chunkGraph` {ChunkGraph}
* `otherGroup` {ChunkGroup}
* Returns: {-1|0|1}

Sorting predicate which allows current ChunkGroup to be compared against another.
Sorting values are based off of number of chunks in ChunkGroup.

#### `dependOn(entrypoint)`

* `entrypoint` {Entrypoint}
* Returns: {boolean}

#### `getBlocks()`

* Returns: {AsyncDependenciesBlock[]}

#### `getChildren()`

* Returns: {ChunkGroup[]}

#### `getChildrenByOrders(moduleGraph, chunkGraph)`

* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}
* Returns: {Record<string, ChunkGroup[]>}

#### `getEntrypointChunk()`

* Returns: {Chunk}

Returns the chunk which contains the entrypoint modules
(or at least the execution of them)

#### `getFiles()`

* Returns: {string[]}

#### `getModulePostOrderIndex(module)`

* `module` {Module}
* Returns: {number}

Gets the bottom-up index of a module in this ChunkGroup

#### `getModulePreOrderIndex(module)`

* `module` {Module}
* Returns: {number}

Gets the top-down index of a module in this ChunkGroup

#### `getNumberOfBlocks()`

* Returns: {number}

#### `getNumberOfChildren()`

* Returns: {number}

#### `getNumberOfParents()`

* Returns: {number}

#### `getParents()`

* Returns: {ChunkGroup[]}

#### `getRuntimeChunk()`

* Returns: {Chunk}

Fetches the chunk reference containing the webpack bootstrap code

#### `hasBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {boolean}

#### `hasParent(parent)`

* `parent` {ChunkGroup}
* Returns: {boolean}

#### `insertChunk(chunk, before)`

* `chunk` {Chunk}
* `before` {Chunk}
* Returns: {boolean}

inserts a chunk before another existing chunk in group

#### `isInitial()`

* Returns: {boolean}

#### `pushChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

add a chunk into ChunkGroup. Is pushed on or prepended

#### `remove()`

* Returns: {void}

#### `removeChild(group)`

* `group` {ChunkGroup}
* Returns: {boolean}

#### `removeChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

#### `removeParent(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {boolean}

#### `replaceChunk(oldChunk, newChunk)`

* `oldChunk` {Chunk}
* `newChunk` {Chunk}
* Returns: {boolean}

#### `setEntrypointChunk(chunk)`

* `chunk` {Chunk}
* Returns: {void}

Sets the chunk with the entrypoint modules for an entrypoint.

#### `setModulePostOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

Sets the bottom-up index of a module in this ChunkGroup

#### `setModulePreOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

Sets the top-down index of a module in this ChunkGroup

#### `setRuntimeChunk(chunk)`

* `chunk` {Chunk}
* Returns: {void}

Sets the runtimeChunk for an entrypoint.

#### `sortItems()`

* Returns: {void}

#### `unshiftChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

Performs an unshift of a specific chunk

***

## Class: `EnvironmentPlugin`

### Constructors

#### `new EnvironmentPlugin(keys)`

* `keys` {string|string[]|Record<string, any>[]}
* Returns: {EnvironmentPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="defaultvalues"></a> `defaultValues` | {Record<string, any>} |
| <a id="keys"></a> `keys` | {string[]} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `EvalDevToolModulePlugin`

### Constructors

#### `new EvalDevToolModulePlugin([options])`

* `options` {EvalDevToolModulePluginOptions}
* Returns: {EvalDevToolModulePlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="modulefilenametemplate"></a> `moduleFilenameTemplate` | {DevtoolModuleFilenameTemplate} |
| <a id="namespace"></a> `namespace` | {string} |
| <a id="sourceurlcomment"></a> `sourceUrlComment` | {string} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `EvalSourceMapDevToolPlugin`

### Constructors

#### `new EvalSourceMapDevToolPlugin([inputOptions])`

* `inputOptions` {string|SourceMapDevToolPluginOptions}
* Returns: {EvalSourceMapDevToolPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="modulefilenametemplate"></a> `moduleFilenameTemplate` | {DevtoolModuleFilenameTemplate} |
| <a id="namespace"></a> `namespace` | {string} |
| <a id="options"></a> `options` | {SourceMapDevToolPluginOptions} |
| <a id="sourcemapcomment"></a> `sourceMapComment` | {string} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `ExternalModule`

### Extends

- {Module}

### Constructors

#### `new ExternalModule(request, type, userRequest[, dependencyMeta])`

* `request` {ExternalModuleRequest}
* `type` {ExternalsType}
* `userRequest` {string}
* `dependencyMeta` {ImportDependencyMeta|CssImportDependencyMeta|AssetDependencyMeta}
* Returns: {ExternalModule}

### Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="blocks"></a> `blocks` | `public` | {AsyncDependenciesBlock[]} | - | [`Module`](#module).[`blocks`](#blocks) |
| <a id="buildinfo"></a> `buildInfo?` | `public` | {BuildInfo} | - | [`Module`](#module).[`buildInfo`](#buildinfo) |
| <a id="buildmeta"></a> `buildMeta?` | `public` | {BuildMeta} | - | [`Module`](#module).[`buildMeta`](#buildmeta) |
| <a id="chunksiterable"></a> `chunksIterable` | `public` | {Iterable<Chunk>} | - | [`Module`](#module).[`chunksIterable`](#chunksiterable) |
| <a id="codegenerationdependencies"></a> `codeGenerationDependencies?` | `public` | {Dependency[]} | - | [`Module`](#module).[`codeGenerationDependencies`](#codegenerationdependencies) |
| <a id="context"></a> `context` | `public` | {string} | - | [`Module`](#module).[`context`](#context) |
| <a id="debugid"></a> `debugId` | `public` | {number} | - | [`Module`](#module).[`debugId`](#debugid) |
| <a id="dependencies"></a> `dependencies` | `public` | {Dependency[]} | - | [`Module`](#module).[`dependencies`](#dependencies) |
| <a id="dependencymeta"></a> `dependencyMeta?` | `public` | {ImportDependencyMeta|CssImportDependencyMeta|AssetDependencyMeta} | - | - |
| <a id="depth"></a> `depth` | `public` | {number} | - | [`Module`](#module).[`depth`](#depth) |
| <a id="errors"></a> `errors` | `public` | {any} | - | [`Module`](#module).[`errors`](#errors) |
| <a id="exportsargument"></a> `exportsArgument` | `public` | {string} | - | [`Module`](#module).[`exportsArgument`](#exportsargument) |
| <a id="externaltype"></a> `externalType` | `public` | {ExternalsType} | - | - |
| <a id="factorymeta"></a> `factoryMeta?` | `public` | {FactoryMeta} | - | [`Module`](#module).[`factoryMeta`](#factorymeta) |
| <a id="hasequalschunks"></a> `hasEqualsChunks` | `public` | {any} | - | [`Module`](#module).[`hasEqualsChunks`](#hasequalschunks) |
| <a id="hash"></a> `hash` | `public` | {string} | - | [`Module`](#module).[`hash`](#hash) |
| <a id="hot"></a> `hot` | `public` | {boolean} | - | [`Module`](#module).[`hot`](#hot) |
| <a id="id"></a> ~~`id`~~ | `public` | {string|number} | **Deprecated** | [`Module`](#module).[`id`](#id) |
| <a id="index"></a> `index` | `public` | {number} | - | [`Module`](#module).[`index`](#index) |
| <a id="index2"></a> `index2` | `public` | {number} | - | [`Module`](#module).[`index2`](#index2) |
| <a id="issuer"></a> `issuer?` | `public` | {Module} | - | [`Module`](#module).[`issuer`](#issuer) |
| <a id="isused"></a> `isUsed` | `public` | {any} | - | [`Module`](#module).[`isUsed`](#isused) |
| <a id="layer"></a> `layer` | `public` | {string} | - | [`Module`](#module).[`layer`](#layer) |
| <a id="moduleargument"></a> `moduleArgument` | `public` | {string} | - | [`Module`](#module).[`moduleArgument`](#moduleargument) |
| <a id="needid"></a> `needId` | `public` | {boolean} | - | [`Module`](#module).[`needId`](#needid) |
| <a id="optimizationbailout"></a> ~~`optimizationBailout`~~ | `public` | {string|(requestShortener: RequestShortener) => string[]} | **Deprecated** | [`Module`](#module).[`optimizationBailout`](#optimizationbailout) |
| <a id="optional"></a> `optional` | `public` | {boolean} | - | [`Module`](#module).[`optional`](#optional) |
| <a id="parent"></a> `parent?` | `public` | {DependenciesBlock} | - | [`Module`](#module).[`parent`](#parent) |
| <a id="presentationaldependencies"></a> `presentationalDependencies?` | `public` | {Dependency[]} | - | [`Module`](#module).[`presentationalDependencies`](#presentationaldependencies) |
| <a id="profile"></a> `profile?` | `public` | {ModuleProfile} | - | [`Module`](#module).[`profile`](#profile) |
| <a id="renderedhash"></a> `renderedHash` | `public` | {string} | - | [`Module`](#module).[`renderedHash`](#renderedhash) |
| <a id="request"></a> `request` | `public` | {ExternalModuleRequest} | - | - |
| <a id="resolveoptions"></a> `resolveOptions?` | `public` | {ResolveOptions} | - | [`Module`](#module).[`resolveOptions`](#resolveoptions) |
| <a id="type"></a> `type` | `public` | {string} | - | [`Module`](#module).[`type`](#type) |
| <a id="used"></a> `used` | `public` | {any} | - | [`Module`](#module).[`used`](#used) |
| <a id="usedexports"></a> `usedExports` | `public` | {boolean|SortableSet<string>} | - | [`Module`](#module).[`usedExports`](#usedexports) |
| <a id="userrequest"></a> `userRequest` | `public` | {string} | - | - |
| <a id="usesimplesourcemap"></a> `useSimpleSourceMap` | `public` | {boolean} | - | [`Module`](#module).[`useSimpleSourceMap`](#usesimplesourcemap) |
| <a id="usesourcemap"></a> `useSourceMap` | `public` | {boolean} | - | [`Module`](#module).[`useSourceMap`](#usesourcemap) |
| <a id="warnings"></a> `warnings` | `public` | {any} | - | [`Module`](#module).[`warnings`](#warnings) |
| <a id="getexternalmodulenodecommonjsinitfragment"></a> `getExternalModuleNodeCommonjsInitFragment` | `static` | {(runtimeTemplate: RuntimeTemplate) => InitFragment<ChunkRenderContextJavascriptModulesPlugin>} | - | - |
| <a id="moduleexternalinitfragment"></a> `ModuleExternalInitFragment` | `static` | {ModuleExternalInitFragment} | - | - |

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

#### `restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory)`

* `unsafeCacheData` {UnsafeCacheData}
* `normalModuleFactory` {NormalModuleFactory}
* Returns: {void}

restore unsafe cache data

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

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
* Returns: {ExternalModuleHooks}

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {ReadonlySet<string>}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

***

## Class: `ExternalsPlugin`

### Constructors

#### `new ExternalsPlugin(type, externals)`

* `type` {"asset"|"module"|"css-import"|"css-url"|"global"|"import"|"commonjs"|"jsonp"|"promise"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"|(dependency: Dependency) => ExternalsType}
* `externals` {Externals}
* Returns: {ExternalsPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="externals"></a> `externals` | {Externals} |
| <a id="type"></a> `type` | {"asset"|"module"|"css-import"|"css-url"|"global"|"import"|"commonjs"|"jsonp"|"promise"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"|(dependency: Dependency) => ExternalsType} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `Generator`

### Constructors

#### `new Generator()`

* Returns: {Generator}

### Methods

#### `generate(module, __namedParameters)`

* `module` {NormalModule}
* `__namedParameters` {GenerateContext}
* Returns: {Source}

#### `getConcatenationBailoutReason(module, context)`

* `module` {NormalModule}
* `context` {ConcatenationBailoutReasonContext}
* Returns: {string}

#### `getSize(module[, type])`

* `module` {NormalModule}
* `type` {string}
* Returns: {number}

#### `getTypes(module)`

* `module` {NormalModule}
* Returns: {ReadonlySet<string>}

#### `updateHash(hash, __namedParameters)`

* `hash` {Hash}
* `__namedParameters` {UpdateHashContextGenerator}
* Returns: {void}

#### Static method: `byType(map)`

* `map` {{ [index: string]: Generator }}
* Returns: {ByTypeGenerator}

***

## Class: `HotModuleReplacementPlugin`

### Constructors

#### `new HotModuleReplacementPlugin()`

* Returns: {HotModuleReplacementPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `getParserHooks(parser)`

* `parser` {JavascriptParser}
* Returns: {HMRJavascriptParserHooks}

***

## Class: `HotUpdateChunk`

### Extends

- {Chunk}

### Constructors

#### `new HotUpdateChunk()`

* Returns: {HotUpdateChunk}

### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="auxiliaryfiles"></a> `auxiliaryFiles` | {Set<string>} | - | [`Chunk`](#chunk).[`auxiliaryFiles`](#auxiliaryfiles) |
| <a id="chunkreason"></a> `chunkReason?` | {string} | - | [`Chunk`](#chunk).[`chunkReason`](#chunkreason) |
| <a id="contenthash"></a> `contentHash` | {Record<string, string>} | - | [`Chunk`](#chunk).[`contentHash`](#contenthash) |
| <a id="cssfilenametemplate"></a> `cssFilenameTemplate?` | {string|(pathData: PathData, assetInfo?: AssetInfo) => string} | - | [`Chunk`](#chunk).[`cssFilenameTemplate`](#cssfilenametemplate) |
| <a id="debugid"></a> `debugId` | {number} | - | [`Chunk`](#chunk).[`debugId`](#debugid) |
| <a id="entrymodule"></a> ~~`entryModule`~~ | {Module} | **Deprecated** | [`Chunk`](#chunk).[`entryModule`](#entrymodule) |
| <a id="extraasync"></a> `extraAsync` | {boolean} | - | [`Chunk`](#chunk).[`extraAsync`](#extraasync) |
| <a id="filenametemplate"></a> `filenameTemplate?` | {string|(pathData: PathData, assetInfo?: AssetInfo) => string} | - | [`Chunk`](#chunk).[`filenameTemplate`](#filenametemplate) |
| <a id="files"></a> `files` | {Set<string>} | - | [`Chunk`](#chunk).[`files`](#files) |
| <a id="groupsiterable"></a> `groupsIterable` | {SortableSet<ChunkGroup>} | - | [`Chunk`](#chunk).[`groupsIterable`](#groupsiterable) |
| <a id="hash"></a> `hash?` | {string} | - | [`Chunk`](#chunk).[`hash`](#hash) |
| <a id="id"></a> `id` | {string|number} | - | [`Chunk`](#chunk).[`id`](#id) |
| <a id="idnamehints"></a> `idNameHints` | {SortableSet<string>} | - | [`Chunk`](#chunk).[`idNameHints`](#idnamehints) |
| <a id="ids"></a> `ids` | {ChunkId[]} | - | [`Chunk`](#chunk).[`ids`](#ids) |
| <a id="modulesiterable"></a> `modulesIterable` | {Iterable<Module>} | - | [`Chunk`](#chunk).[`modulesIterable`](#modulesiterable) |
| <a id="name"></a> `name?` | {string} | - | [`Chunk`](#chunk).[`name`](#name) |
| <a id="preventintegration"></a> `preventIntegration` | {boolean} | - | [`Chunk`](#chunk).[`preventIntegration`](#preventintegration) |
| <a id="rendered"></a> `rendered` | {boolean} | - | [`Chunk`](#chunk).[`rendered`](#rendered) |
| <a id="renderedhash"></a> `renderedHash?` | {string} | - | [`Chunk`](#chunk).[`renderedHash`](#renderedhash) |
| <a id="runtime"></a> `runtime` | {RuntimeSpec} | - | [`Chunk`](#chunk).[`runtime`](#runtime) |

### Methods

#### `addGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {void}

#### `addModule(module)`

* `module` {Module}
* Returns: {boolean}

#### `canBeInitial()`

* Returns: {boolean}

#### `canBeIntegrated(otherChunk)`

* `otherChunk` {Chunk}
* Returns: {boolean}

#### `compareTo(otherChunk)`

* `otherChunk` {Chunk}
* Returns: {-1|0|1}

#### `containsModule(module)`

* `module` {Module}
* Returns: {boolean}

#### `disconnectFromGroups()`

* Returns: {void}

#### `getAllAsyncChunks()`

* Returns: {Set<Chunk>}

#### `getAllInitialChunks()`

* Returns: {Set<Chunk>}

#### `getAllReferencedAsyncEntrypoints()`

* Returns: {Set<Entrypoint>}

#### `getAllReferencedChunks()`

* Returns: {Set<Chunk>}

#### `getChildIdsByOrders(chunkGraph[, filterFn])`

* `chunkGraph` {ChunkGraph}
* `filterFn` {(c: Chunk, chunkGraph: ChunkGraph) => boolean}
* Returns: {Record<string, ChunkId[]>}

#### `getChildIdsByOrdersMap(chunkGraph[, includeDirectChildren][, filterFn])`

* `chunkGraph` {ChunkGraph}
* `includeDirectChildren` {boolean}
* `filterFn` {(c: Chunk, chunkGraph: ChunkGraph) => boolean}
* Returns: {ChunkChildIdsByOrdersMapByData}

#### `getChildrenOfTypeInOrder(chunkGraph, type)`

* `chunkGraph` {ChunkGraph}
* `type` {string}
* Returns: {ChunkChildOfTypeInOrder[]}

#### `getChunkMaps(realHash)`

> Stability: 0 - Deprecated

* `realHash` {boolean}
* Returns: {ChunkMaps}

#### `getChunkModuleMaps(filterFn)`

* `filterFn` {(m: Module) => boolean}
* Returns: {ChunkModuleMaps}

#### `getEntryOptions()`

* Returns: {EntryOptions}

#### `getModules()`

* Returns: {Module[]}

#### `getNumberOfGroups()`

* Returns: {number}

#### `getNumberOfModules()`

* Returns: {number}

#### `hasAsyncChunks()`

* Returns: {boolean}

#### `hasChildByOrder(chunkGraph, type[, includeDirectChildren][, filterFn])`

* `chunkGraph` {ChunkGraph}
* `type` {string}
* `includeDirectChildren` {boolean}
* `filterFn` {(c: Chunk, chunkGraph: ChunkGraph) => boolean}
* Returns: {boolean}

#### `hasEntryModule()`

* Returns: {boolean}

#### `hasModuleInGraph(filterFn[, filterChunkFn])`

* `filterFn` {(m: Module) => boolean}
* `filterChunkFn` {(c: Chunk, chunkGraph: ChunkGraph) => boolean}
* Returns: {boolean}

#### `hasRuntime()`

* Returns: {boolean}

#### `integrate(otherChunk)`

* `otherChunk` {Chunk}
* Returns: {boolean}

#### `integratedSize(otherChunk, options)`

* `otherChunk` {Chunk}
* `options` {ChunkSizeOptions}
* Returns: {number}

#### `isEmpty()`

* Returns: {boolean}

#### `isInGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {boolean}

#### `isOnlyInitial()`

* Returns: {boolean}

#### `modulesSize()`

* Returns: {number}

#### `moveModule(module, otherChunk)`

* `module` {Module}
* `otherChunk` {Chunk}
* Returns: {void}

#### `remove()`

* Returns: {void}

#### `removeGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {void}

#### `removeModule(module)`

* `module` {Module}
* Returns: {void}

#### `size([options])`

* `options` {ChunkSizeOptions}
* Returns: {number}

#### `split(newChunk)`

* `newChunk` {Chunk}
* Returns: {void}

#### `updateHash(hash, chunkGraph)`

* `hash` {Hash}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

***

## Class: `IgnorePlugin`

### Constructors

#### `new IgnorePlugin(options)`

* `options` {IgnorePluginOptions}
* Returns: {IgnorePlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {IgnorePluginOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### `checkIgnore(resolveData)`

* `resolveData` {BeforeContextResolveData|ResolveData}
* Returns: {false}

Note that if "contextRegExp" is given, both the "resourceRegExp" and "contextRegExp" have to match.

***

## Class: `InitFragment`

### Type Parameters

* `GenerateContext`

### Constructors

#### `new InitFragment(content, stage, position[, key][, endContent])`

* `GenerateContext`
* `content` {string|Source}
* `stage` {number}
* `position` {number}
* `key` {string}
* `endContent` {string|Source}
* Returns: {InitFragment<GenerateContext>}

### Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="content"></a> `content?` | `public` | {string|Source} |
| <a id="endcontent"></a> `endContent?` | `public` | {string|Source} |
| <a id="key"></a> `key?` | `public` | {string} |
| <a id="position"></a> `position` | `public` | {number} |
| <a id="stage"></a> `stage` | `public` | {number} |
| <a id="stage-async-boundary"></a> `STAGE_ASYNC_BOUNDARY` | `static` | {number} |
| <a id="stage-async-dependencies"></a> `STAGE_ASYNC_DEPENDENCIES` | `static` | {number} |
| <a id="stage-async-harmony-imports"></a> `STAGE_ASYNC_HARMONY_IMPORTS` | `static` | {number} |
| <a id="stage-constants"></a> `STAGE_CONSTANTS` | `static` | {number} |
| <a id="stage-harmony-exports"></a> `STAGE_HARMONY_EXPORTS` | `static` | {number} |
| <a id="stage-harmony-imports"></a> `STAGE_HARMONY_IMPORTS` | `static` | {number} |
| <a id="stage-provides"></a> `STAGE_PROVIDES` | `static` | {number} |

### Methods

#### `deserialize(context)`

* `context` {ObjectDeserializerContext}
* Returns: {void}

#### `getContent(context)`

* `context` {GenerateContext}
* Returns: {string|Source}

#### `getEndContent(context)`

* `context` {GenerateContext}
* Returns: {string|Source}

#### `serialize(context)`

* `context` {ObjectSerializerContext}
* Returns: {void}

#### Static method: `addToSource(source, initFragments, context)`

* `Context`
* `source` {Source}
* `initFragments` {MaybeMergeableInitFragment<Context>[]}
* `context` {Context}
* Returns: {Source}

***

## Class: `JavascriptModulesPlugin`

### Constructors

#### `new JavascriptModulesPlugin([options])`

* `options` {object}
* Returns: {JavascriptModulesPlugin}

### Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="options"></a> `options` | `public` | {object} |
| <a id="chunkhasjs"></a> `chunkHasJs` | `static` | {(chunk: Chunk, chunkGraph: ChunkGraph) => boolean} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### `renderBootstrap(renderContext, hooks)`

* `renderContext` {RenderBootstrapContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* Returns: {Bootstrap}

#### `renderChunk(renderContext, hooks)`

* `renderContext` {RenderContextJavascriptModulesPlugin}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* Returns: {Source}

#### `renderMain(renderContext, hooks, compilation)`

* `renderContext` {MainRenderContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* `compilation` {Compilation}
* Returns: {Source}

#### `renderModule(module, renderContext, hooks)`

* `module` {Module}
* `renderContext` {ModuleRenderContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* Returns: {Source}

#### `renderRequire(renderContext, hooks)`

* `renderContext` {RenderBootstrapContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* Returns: {string}

#### `updateHashWithBootstrap(hash, renderContext, hooks)`

* `hash` {Hash}
* `renderContext` {RenderBootstrapContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* Returns: {void}

#### Static method: `getChunkFilenameTemplate(chunk, outputOptions)`

* `chunk` {Chunk}
* `outputOptions` {OutputNormalizedWithDefaults}
* Returns: {TemplatePath}

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {CompilationHooksJavascriptModulesPlugin}

***

## Class: `LibManifestPlugin`

### Constructors

#### `new LibManifestPlugin(options)`

* `options` {LibManifestPluginOptions}
* Returns: {LibManifestPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {LibManifestPluginOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `LibraryTemplatePlugin`

### Constructors

#### `new LibraryTemplatePlugin(name, target, umdNamedDefine, auxiliaryComment, exportProperty)`

* `name` {LibraryName}
* `target` {string}
* `umdNamedDefine` {boolean}
* `auxiliaryComment` {AuxiliaryComment}
* `exportProperty` {LibraryExport}
* Returns: {LibraryTemplatePlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="library"></a> `library` | {{ auxiliaryComment: AuxiliaryComment; export: LibraryExport; name: LibraryName; ... }} |
| `library.auxiliaryComment` | {AuxiliaryComment} |
| `library.export` | {LibraryExport} |
| `library.name` | {LibraryName} |
| `library.type` | {string} |
| `library.umdNamedDefine` | {boolean} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `LoaderOptionsPlugin`

### Constructors

#### `new LoaderOptionsPlugin([options])`

* `options` {LoaderOptionsPluginOptions&MatchObject}
* Returns: {LoaderOptionsPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {LoaderOptionsPluginOptions&MatchObject} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `LoaderTargetPlugin`

### Constructors

#### `new LoaderTargetPlugin(target)`

* `target` {string}
* Returns: {LoaderTargetPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="target"></a> `target` | {string} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `ManifestPlugin`

### Constructors

#### `new ManifestPlugin([options])`

* `options` {ManifestPluginOptions}
* Returns: {ManifestPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {ManifestPluginOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `Module`

### Extends

- {DependenciesBlock}

### Extended by

- {ExternalModule}
- {NormalModule}
- {RuntimeModule}

### Constructors

#### `new Module(type[, context][, layer])`

* `type` {string}
* `context` {string}
* `layer` {string}
* Returns: {Module}

### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="blocks"></a> `blocks` | {AsyncDependenciesBlock[]} | - | `DependenciesBlock.blocks` |
| <a id="buildinfo"></a> `buildInfo?` | {BuildInfo} | - | - |
| <a id="buildmeta"></a> `buildMeta?` | {BuildMeta} | - | - |
| <a id="chunksiterable"></a> `chunksIterable` | {Iterable<Chunk>} | - | - |
| <a id="codegenerationdependencies"></a> `codeGenerationDependencies?` | {Dependency[]} | - | - |
| <a id="context"></a> `context` | {string} | - | - |
| <a id="debugid"></a> `debugId` | {number} | - | - |
| <a id="dependencies"></a> `dependencies` | {Dependency[]} | - | `DependenciesBlock.dependencies` |
| <a id="depth"></a> `depth` | {number} | - | - |
| <a id="errors"></a> `errors` | {any} | - | - |
| <a id="exportsargument"></a> `exportsArgument` | {string} | - | - |
| <a id="factorymeta"></a> `factoryMeta?` | {FactoryMeta} | - | - |
| <a id="hasequalschunks"></a> `hasEqualsChunks` | {any} | - | - |
| <a id="hash"></a> `hash` | {string} | - | - |
| <a id="hot"></a> `hot` | {boolean} | - | - |
| <a id="id"></a> ~~`id`~~ | {string|number} | **Deprecated** | - |
| <a id="index"></a> `index` | {number} | - | - |
| <a id="index2"></a> `index2` | {number} | - | - |
| <a id="issuer"></a> `issuer?` | {Module} | - | - |
| <a id="isused"></a> `isUsed` | {any} | - | - |
| <a id="layer"></a> `layer` | {string} | - | - |
| <a id="moduleargument"></a> `moduleArgument` | {string} | - | - |
| <a id="needid"></a> `needId` | {boolean} | - | - |
| <a id="optimizationbailout"></a> ~~`optimizationBailout`~~ | {string|(requestShortener: RequestShortener) => string[]} | **Deprecated** | - |
| <a id="optional"></a> `optional` | {boolean} | - | - |
| <a id="parent"></a> `parent?` | {DependenciesBlock} | - | `DependenciesBlock.parent` |
| <a id="presentationaldependencies"></a> `presentationalDependencies?` | {Dependency[]} | - | - |
| <a id="profile"></a> `profile?` | {ModuleProfile} | - | - |
| <a id="renderedhash"></a> `renderedHash` | {string} | - | - |
| <a id="resolveoptions"></a> `resolveOptions?` | {ResolveOptions} | - | - |
| <a id="type"></a> `type` | {string} | - | - |
| <a id="used"></a> `used` | {any} | - | - |
| <a id="usedexports"></a> `usedExports` | {boolean|SortableSet<string>} | - | - |
| <a id="usesimplesourcemap"></a> `useSimpleSourceMap` | {boolean} | - | - |
| <a id="usesourcemap"></a> `useSourceMap` | {boolean} | - | - |
| <a id="warnings"></a> `warnings` | {any} | - | - |

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

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {ReadonlySet<string>}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

***

## Class: `ModuleFactory`

### Constructors

#### `new ModuleFactory()`

* Returns: {ModuleFactory}

### Methods

#### `create(data, callback)`

* `data` {ModuleFactoryCreateData}
* `callback` {(err?: Error, result?: ModuleFactoryResult) => void}
* Returns: {void}

***

## Class: `ModuleGraph`

### Constructors

#### `new ModuleGraph()`

* Returns: {ModuleGraph}

### Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="modulegraphconnection"></a> `ModuleGraphConnection` | `static` | {ModuleGraphConnection} |

### Methods

#### `addExplanation(dependency, explanation)`

* `dependency` {Dependency}
* `explanation` {string}
* Returns: {void}

#### `addExtraReason(module, explanation)`

* `module` {Module}
* `explanation` {string}
* Returns: {void}

#### `cached(fn, args)`

* `T` *extends* {any[]}
* `R`
* `fn` {(moduleGraph: ModuleGraph, args: T) => R}
* `args` {T}
* Returns: {R}

#### `cloneModuleAttributes(sourceModule, targetModule)`

* `sourceModule` {Module}
* `targetModule` {Module}
* Returns: {void}

#### `copyOutgoingModuleConnections(oldModule, newModule, filterConnection)`

* `oldModule` {Module}
* `newModule` {Module}
* `filterConnection` {(moduleGraphConnection: ModuleGraphConnection) => boolean}
* Returns: {void}

#### `dependencyCacheProvide(dependency, args)`

* `D` *extends* {Dependency}
* `ARGS` *extends* {any[]}
* `R`
* `dependency` {D}
* `args` {Tuple<ARGS, unknown>}
* Returns: {R}

#### `finishUpdateParent()`

* Returns: {void}

#### `freeze([cacheStage])`

* `cacheStage` {string}
* Returns: {void}

#### `getConnection(dependency)`

* `dependency` {Dependency}
* Returns: {ModuleGraphConnection}

#### `getDepth(module)`

* `module` {Module}
* Returns: {number}

#### `getExportInfo(module, exportName)`

* `module` {Module}
* `exportName` {string}
* Returns: {ExportInfo}

#### `getExportsInfo(module)`

* `module` {Module}
* Returns: {ExportsInfo}

#### `getIncomingConnections(module)`

* `module` {Module}
* Returns: {Iterable<ModuleGraphConnection>}

#### `getIncomingConnectionsByOriginModule(module)`

* `module` {Module}
* Returns: {ReadonlyMap<Module, ModuleGraphConnection[]>}

#### `getIssuer(module)`

* `module` {Module}
* Returns: {Module}

#### `getMeta(thing)`

* `thing` {object}
* Returns: {Meta}

#### `getMetaIfExisting(thing)`

* `thing` {object}
* Returns: {Meta}

#### `getModule(dependency)`

* `dependency` {Dependency}
* Returns: {Module}

#### `getOptimizationBailout(module)`

* `module` {Module}
* Returns: {string|(requestShortener: RequestShortener) => string[]}

#### `getOrigin(dependency)`

* `dependency` {Dependency}
* Returns: {Module}

#### `getOutgoingConnections(module)`

* `module` {Module}
* Returns: {Iterable<ModuleGraphConnection>}

#### `getOutgoingConnectionsByModule(module)`

* `module` {Module}
* Returns: {ReadonlyMap<Module, ModuleGraphConnection[]>}

#### `getParentBlock(dependency)`

* `dependency` {Dependency}
* Returns: {DependenciesBlock}

#### `getParentBlockIndex(dependency)`

* `dependency` {Dependency}
* Returns: {number}

#### `getParentModule(dependency)`

* `dependency` {Dependency}
* Returns: {Module}

#### `getPostOrderIndex(module)`

* `module` {Module}
* Returns: {number}

#### `getPreOrderIndex(module)`

* `module` {Module}
* Returns: {number}

#### `getProfile(module)`

* `module` {Module}
* Returns: {ModuleProfile}

#### `getProvidedExports(module)`

* `module` {Module}
* Returns: {true|string[]}

#### `getReadOnlyExportInfo(module, exportName)`

* `module` {Module}
* `exportName` {string}
* Returns: {ExportInfo}

#### `getResolvedModule(dependency)`

* `dependency` {Dependency}
* Returns: {Module}

#### `getResolvedOrigin(dependency)`

* `dependency` {Dependency}
* Returns: {Module}

#### `getUsedExports(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {boolean|SortableSet<string>}

#### `isAsync(module)`

* `module` {Module}
* Returns: {boolean}

#### `isDeferred(module)`

* `module` {Module}
* Returns: {boolean}

#### `isExportProvided(module, exportName)`

* `module` {Module}
* `exportName` {string|string[]}
* Returns: {boolean}

#### `moveModuleConnections(oldModule, newModule, filterConnection)`

* `oldModule` {Module}
* `newModule` {Module}
* `filterConnection` {(moduleGraphConnection: ModuleGraphConnection) => boolean}
* Returns: {void}

#### `removeAllModuleAttributes()`

* Returns: {void}

#### `removeConnection(dependency)`

* `dependency` {Dependency}
* Returns: {void}

#### `removeModuleAttributes(module)`

* `module` {Module}
* Returns: {void}

#### `setAsync(module)`

* `module` {Module}
* Returns: {void}

#### `setDepth(module, depth)`

* `module` {Module}
* `depth` {number}
* Returns: {void}

#### `setDepthIfLower(module, depth)`

* `module` {Module}
* `depth` {number}
* Returns: {boolean}

#### `setIssuer(module, issuer)`

* `module` {Module}
* `issuer` {Module}
* Returns: {void}

#### `setIssuerIfUnset(module, issuer)`

* `module` {Module}
* `issuer` {Module}
* Returns: {void}

#### `setModuleMemCaches(moduleMemCaches)`

* `moduleMemCaches` {Map<Module, WeakTupleMap<any[], any>>}
* Returns: {void}

#### `setParentDependenciesBlockIndex(dependency, index)`

* `dependency` {Dependency}
* `index` {number}
* Returns: {void}

#### `setParents(dependency, block, module[, indexInBlock])`

* `dependency` {Dependency}
* `block` {DependenciesBlock}
* `module` {Module}
* `indexInBlock` {number}
* Returns: {void}

#### `setPostOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

#### `setPostOrderIndexIfUnset(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {boolean}

#### `setPreOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

#### `setPreOrderIndexIfUnset(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {boolean}

#### `setProfile(module[, profile])`

* `module` {Module}
* `profile` {ModuleProfile}
* Returns: {void}

#### `setResolvedModule(originModule, dependency, module)`

* `originModule` {Module}
* `dependency` {Dependency}
* `module` {Module}
* Returns: {void}

#### `unfreeze()`

* Returns: {void}

#### `updateModule(dependency, module)`

* `dependency` {Dependency}
* `module` {Module}
* Returns: {void}

#### `updateParent(dependency[, connection][, parentModule])`

* `dependency` {Dependency}
* `connection` {ModuleGraphConnection}
* `parentModule` {Module}
* Returns: {void}

#### Static method: `clearModuleGraphForModule(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {void}

#### Static method: `getModuleGraphForModule(module, deprecateMessage, deprecationCode)`

> Stability: 0 - Deprecated

* `module` {Module}
* `deprecateMessage` {string}
* `deprecationCode` {string}
* Returns: {ModuleGraph}

#### Static method: `setModuleGraphForModule(module, moduleGraph)`

> Stability: 0 - Deprecated

* `module` {Module}
* `moduleGraph` {ModuleGraph}
* Returns: {void}

***

## Class: `ModuleGraphConnection`

### Constructors

#### `new ModuleGraphConnection(originModule, dependency, module[, explanation][, weak][, condition])`

* `originModule` {Module}
* `dependency` {Dependency}
* `module` {Module}
* `explanation` {string}
* `weak` {boolean}
* `condition` {false|(moduleGraphConnection: ModuleGraphConnection, runtime: RuntimeSpec) => ConnectionState}
* Returns: {ModuleGraphConnection}

### Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="condition"></a> `condition?` | `public` | {false|(moduleGraphConnection: ModuleGraphConnection, runtime: RuntimeSpec) => ConnectionState} |
| <a id="conditional"></a> `conditional` | `public` | {boolean} |
| <a id="dependency"></a> `dependency` | `public` | {Dependency} |
| <a id="explanation"></a> `explanation` | `public` | {string} |
| <a id="explanations"></a> `explanations?` | `public` | {Set<string>} |
| <a id="module"></a> `module` | `public` | {Module} |
| <a id="originmodule"></a> `originModule` | `public` | {Module} |
| <a id="resolvedmodule"></a> `resolvedModule` | `public` | {Module} |
| <a id="resolvedoriginmodule"></a> `resolvedOriginModule` | `public` | {Module} |
| <a id="weak"></a> `weak?` | `public` | {boolean} |
| <a id="addconnectionstates"></a> `addConnectionStates` | `static` | {(a: ConnectionState, b: ConnectionState) => ConnectionState} |
| <a id="circular-connection"></a> `CIRCULAR_CONNECTION` | `static` | {CIRCULAR_CONNECTION} |
| <a id="transitive-only"></a> `TRANSITIVE_ONLY` | `static` | {TRANSITIVE_ONLY} |

### Methods

#### `addCondition(condition)`

* `condition` {(moduleGraphConnection: ModuleGraphConnection, runtime: RuntimeSpec) => ConnectionState}
* Returns: {void}

#### `addExplanation(explanation)`

* `explanation` {string}
* Returns: {void}

#### `clone()`

* Returns: {ModuleGraphConnection}

#### `getActiveState(runtime)`

* `runtime` {RuntimeSpec}
* Returns: {ConnectionState}

#### `isActive(runtime)`

* `runtime` {RuntimeSpec}
* Returns: {boolean}

#### `isTargetActive(runtime)`

* `runtime` {RuntimeSpec}
* Returns: {boolean}

#### `setActive(value)`

* `value` {boolean}
* Returns: {void}

***

## Class: `MultiCompiler`

### Constructors

#### `new MultiCompiler(compilers, options)`

* `compilers` {Compiler[]|Record<string, Compiler>}
* `options` {MultiCompilerOptions}
* Returns: {MultiCompiler}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="compilers"></a> `compilers` | {Compiler[]} |
| <a id="dependencies"></a> `dependencies` | {WeakMap<Compiler, string[]>} |
| <a id="hooks"></a> `hooks` | {Readonly<{ done: SyncHook<Tuple<MultiStats>>; infrastructureLog: MultiHook<SyncBailHook<Tuple<string, string, undefined|any[]>, true|void>>; invalid: MultiHook<SyncHook<Tuple<null|string, number>>>; ... }>} |
| <a id="inputfilesystem"></a> `inputFileSystem` | {InputFileSystem} |
| <a id="intermediatefilesystem"></a> `intermediateFileSystem` | {IntermediateFileSystem} |
| <a id="options"></a> `options` | {WebpackOptionsNormalized[]&MultiCompilerOptions} |
| <a id="outputfilesystem"></a> `outputFileSystem` | {OutputFileSystem} |
| <a id="outputpath"></a> `outputPath` | {string} |
| <a id="running"></a> `running` | {boolean} |
| <a id="watchfilesystem"></a> `watchFileSystem` | {WatchFileSystem} |

### Methods

#### `close(callback)`

* `callback` {(err: Error, result?: void) => void}
* Returns: {void}

#### `getInfrastructureLogger(name)`

* `name` {string|() => string}
* Returns: {WebpackLogger}

#### `purgeInputFileSystem()`

* Returns: {void}

#### `run(callback)`

* `callback` {CallbackWebpackFunction_2<MultiStats, void>}
* Returns: {void}

#### `runWithDependencies(compilers, fn, callback)`

> Stability: 0 - Deprecated

* `compilers` {Compiler[]}
* `fn` {(compiler: Compiler, callback: CallbackWebpackFunction_2<MultiStats, void>) => void}
* `callback` {CallbackWebpackFunction_2<Stats[], void>}
* Returns: {void}

This method should have been private

#### `setDependencies(compiler, dependencies)`

* `compiler` {Compiler}
* `dependencies` {string[]}
* Returns: {void}

#### `validateDependencies(callback)`

* `callback` {CallbackWebpackFunction_2<MultiStats, void>}
* Returns: {boolean}

#### `watch(watchOptions, handler)`

* `watchOptions` {WatchOptions|WatchOptions[]}
* `handler` {CallbackWebpackFunction_2<MultiStats, void>}
* Returns: {MultiWatching}

***

## Class: `MultiStats`

### Constructors

#### `new MultiStats()`

* Returns: {MultiStats}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="hash"></a> `hash` | {string} |
| <a id="stats"></a> `stats` | {Stats[]} |

### Methods

#### `hasErrors()`

* Returns: {boolean}

#### `hasWarnings()`

* Returns: {boolean}

#### `toJson([options])`

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}
* Returns: {StatsCompilation}

#### `toString([options])`

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}
* Returns: {string}

***

## Class: `NoEmitOnErrorsPlugin`

### Constructors

#### `new NoEmitOnErrorsPlugin()`

* Returns: {NoEmitOnErrorsPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `NormalModule`

### Extends

- {Module}

### Constructors

#### `new NormalModule(__namedParameters)`

* `__namedParameters` {NormalModuleCreateData}
* Returns: {NormalModule}

### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="binary"></a> `binary` | {boolean} | - | - |
| <a id="blocks"></a> `blocks` | {AsyncDependenciesBlock[]} | - | [`Module`](#module).[`blocks`](#blocks) |
| <a id="buildinfo"></a> `buildInfo?` | {BuildInfo} | - | [`Module`](#module).[`buildInfo`](#buildinfo) |
| <a id="buildmeta"></a> `buildMeta?` | {BuildMeta} | - | [`Module`](#module).[`buildMeta`](#buildmeta) |
| <a id="chunksiterable"></a> `chunksIterable` | {Iterable<Chunk>} | - | [`Module`](#module).[`chunksIterable`](#chunksiterable) |
| <a id="codegenerationdependencies"></a> `codeGenerationDependencies?` | {Dependency[]} | - | [`Module`](#module).[`codeGenerationDependencies`](#codegenerationdependencies) |
| <a id="context"></a> `context` | {string} | - | [`Module`](#module).[`context`](#context) |
| <a id="debugid"></a> `debugId` | {number} | - | [`Module`](#module).[`debugId`](#debugid) |
| <a id="dependencies"></a> `dependencies` | {Dependency[]} | - | [`Module`](#module).[`dependencies`](#dependencies) |
| <a id="depth"></a> `depth` | {number} | - | [`Module`](#module).[`depth`](#depth) |
| <a id="error"></a> `error` | {WebpackError} | - | - |
| <a id="errors"></a> `errors` | {any} | - | [`Module`](#module).[`errors`](#errors) |
| <a id="exportsargument"></a> `exportsArgument` | {string} | - | [`Module`](#module).[`exportsArgument`](#exportsargument) |
| <a id="extractsourcemap"></a> `extractSourceMap` | {boolean} | - | - |
| <a id="factorymeta"></a> `factoryMeta?` | {FactoryMeta} | - | [`Module`](#module).[`factoryMeta`](#factorymeta) |
| <a id="generator"></a> `generator?` | {Generator} | - | - |
| <a id="generatoroptions"></a> `generatorOptions?` | {GeneratorOptions} | - | - |
| <a id="hasequalschunks"></a> `hasEqualsChunks` | {any} | - | [`Module`](#module).[`hasEqualsChunks`](#hasequalschunks) |
| <a id="hash"></a> `hash` | {string} | - | [`Module`](#module).[`hash`](#hash) |
| <a id="hot"></a> `hot` | {boolean} | - | [`Module`](#module).[`hot`](#hot) |
| <a id="id"></a> ~~`id`~~ | {string|number} | **Deprecated** | [`Module`](#module).[`id`](#id) |
| <a id="index"></a> `index` | {number} | - | [`Module`](#module).[`index`](#index) |
| <a id="index2"></a> `index2` | {number} | - | [`Module`](#module).[`index2`](#index2) |
| <a id="issuer"></a> `issuer?` | {Module} | - | [`Module`](#module).[`issuer`](#issuer) |
| <a id="isused"></a> `isUsed` | {any} | - | [`Module`](#module).[`isUsed`](#isused) |
| <a id="layer"></a> `layer` | {string} | - | [`Module`](#module).[`layer`](#layer) |
| <a id="loaders"></a> `loaders` | {LoaderItem[]} | - | - |
| <a id="matchresource"></a> `matchResource?` | {string} | - | - |
| <a id="moduleargument"></a> `moduleArgument` | {string} | - | [`Module`](#module).[`moduleArgument`](#moduleargument) |
| <a id="needid"></a> `needId` | {boolean} | - | [`Module`](#module).[`needId`](#needid) |
| <a id="optimizationbailout"></a> ~~`optimizationBailout`~~ | {string|(requestShortener: RequestShortener) => string[]} | **Deprecated** | [`Module`](#module).[`optimizationBailout`](#optimizationbailout) |
| <a id="optional"></a> `optional` | {boolean} | - | [`Module`](#module).[`optional`](#optional) |
| <a id="parent"></a> `parent?` | {DependenciesBlock} | - | [`Module`](#module).[`parent`](#parent) |
| <a id="parser"></a> `parser?` | {ParserClass} | - | - |
| <a id="parseroptions"></a> `parserOptions?` | {ParserOptions} | - | - |
| <a id="presentationaldependencies"></a> `presentationalDependencies?` | {Dependency[]} | - | [`Module`](#module).[`presentationalDependencies`](#presentationaldependencies) |
| <a id="profile"></a> `profile?` | {ModuleProfile} | - | [`Module`](#module).[`profile`](#profile) |
| <a id="rawrequest"></a> `rawRequest` | {string} | - | - |
| <a id="renderedhash"></a> `renderedHash` | {string} | - | [`Module`](#module).[`renderedHash`](#renderedhash) |
| <a id="request"></a> `request` | {string} | - | - |
| <a id="resolveoptions"></a> `resolveOptions?` | {ResolveOptions} | - | [`Module`](#module).[`resolveOptions`](#resolveoptions) |
| <a id="resource"></a> `resource` | {string} | - | - |
| <a id="resourceresolvedata"></a> `resourceResolveData?` | {ResourceSchemeData&Partial<ResolveRequest>} | - | - |
| <a id="type"></a> `type` | {string} | - | [`Module`](#module).[`type`](#type) |
| <a id="used"></a> `used` | {any} | - | [`Module`](#module).[`used`](#used) |
| <a id="usedexports"></a> `usedExports` | {boolean|SortableSet<string>} | - | [`Module`](#module).[`usedExports`](#usedexports) |
| <a id="userrequest"></a> `userRequest` | {string} | - | - |
| <a id="usesimplesourcemap"></a> `useSimpleSourceMap` | {boolean} | - | [`Module`](#module).[`useSimpleSourceMap`](#usesimplesourcemap) |
| <a id="usesourcemap"></a> `useSourceMap` | {boolean} | - | [`Module`](#module).[`useSourceMap`](#usesourcemap) |
| <a id="warnings"></a> `warnings` | {any} | - | [`Module`](#module).[`warnings`](#warnings) |

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

#### `applyNoParseRule(rule, content)`

* `rule` {string|RegExp|(content: string) => boolean}
* `content` {string}
* Returns: {boolean}

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

#### `createSource(context, content[, sourceMap][, associatedObjectForCache])`

* `context` {string}
* `content` {string|Buffer<ArrayBufferLike>}
* `sourceMap` {string|RawSourceMap}
* `associatedObjectForCache` {object}
* Returns: {Source}

#### `createSourceForAsset(context, name, content[, sourceMap][, associatedObjectForCache])`

* `context` {string}
* `name` {string}
* `content` {string|Buffer<ArrayBufferLike>}
* `sourceMap` {string|RawSourceMap}
* `associatedObjectForCache` {object}
* Returns: {Source}

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

#### `getChunks()`

* Returns: {Chunk[]}

#### `getConcatenationBailoutReason(context)`

* `context` {ConcatenationBailoutReasonContext}
* Returns: {string}

#### `getCurrentLoader(loaderContext[, index])`

* `loaderContext` {AnyLoaderContext}
* `index` {number}
* Returns: {LoaderItem}

#### `getErrors()`

* Returns: {Iterable<WebpackError, any, any>}

#### `getExportsType(moduleGraph[, strict])`

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}
* Returns: {ExportsType}

#### `getNumberOfChunks()`

* Returns: {number}

#### `getNumberOfErrors()`

* Returns: {number}

#### `getNumberOfWarnings()`

* Returns: {number}

#### `getResource()`

* Returns: {string}

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

#### `markModuleAsErrored(error)`

* `error` {WebpackError}
* Returns: {void}

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

#### `restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory)`

* `unsafeCacheData` {UnsafeCacheData}
* `normalModuleFactory` {NormalModuleFactory}
* Returns: {void}

restore unsafe cache data

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### `shouldPreventParsing(noParseRule, request)`

* `noParseRule` {string|RegExp|(content: string) => boolean|string|RegExp|(content: string) => boolean[]}
* `request` {string}
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

#### Static method: `deserialize(context)`

* `context` {ObjectDeserializerContext}
* Returns: {NormalModule}

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {NormalModuleCompilationHooks}

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {ReadonlySet<string>}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

***

## Class: `NormalModuleReplacementPlugin`

### Constructors

#### `new NormalModuleReplacementPlugin(resourceRegExp, newResource)`

* `resourceRegExp` {RegExp}
* `newResource` {string|(resolveData: ResolveData) => void}
* Returns: {NormalModuleReplacementPlugin}

Create an instance of the plugin

### Properties

| Property | Type |
| ------ | ------ |
| <a id="newresource"></a> `newResource` | {string|(resolveData: ResolveData) => void} |
| <a id="resourceregexp"></a> `resourceRegExp` | {RegExp} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `Parser`

### Extended by

- {JavascriptParser}

### Constructors

#### `new Parser()`

* Returns: {ParserClass}

### Methods

#### `parse(source, state)`

* `source` {string|Buffer<ArrayBufferLike>|PreparsedAst}
* `state` {ParserState}
* Returns: {ParserState}

***

## Class: `PlatformPlugin`

### Constructors

#### `new PlatformPlugin(platform)`

* `platform` {Partial<PlatformTargetProperties>}
* Returns: {PlatformPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="platform"></a> `platform` | {Partial<PlatformTargetProperties>} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `PrefetchPlugin`

### Constructors

#### `new PrefetchPlugin(context[, request])`

* `context` {string}
* `request` {string}
* Returns: {PrefetchPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="context"></a> `context` | {string} |
| <a id="request"></a> `request` | {string} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `ProgressPlugin`

### Constructors

#### `new ProgressPlugin([options])`

* `options` {ProgressPluginArgument}
* Returns: {ProgressPlugin}

### Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="dependenciescount"></a> `dependenciesCount` | `public` | {number} |
| <a id="handler"></a> `handler?` | `public` | {(percentage: number, msg: string, args: string[]) => void} |
| <a id="modulescount"></a> `modulesCount` | `public` | {number} |
| <a id="options"></a> `options` | `public` | {ProgressPluginOptions} |
| <a id="percentby"></a> `percentBy` | `public` | {"entries"|"modules"|"dependencies"} |
| <a id="profile"></a> `profile` | `public` | {boolean} |
| <a id="showactivemodules"></a> `showActiveModules` | `public` | {boolean} |
| <a id="showdependencies"></a> `showDependencies` | `public` | {boolean} |
| <a id="showentries"></a> `showEntries` | `public` | {boolean} |
| <a id="showmodules"></a> `showModules` | `public` | {boolean} |
| <a id="createdefaulthandler"></a> `createDefaultHandler` | `static` | {(profile: boolean, logger: WebpackLogger) => (percentage: number, msg: string, args: string[]) => void} |
| <a id="defaultoptions"></a> `defaultOptions` | `static` | {Required<Omit<ProgressPluginOptions, "handler">>} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler|MultiCompiler}
* Returns: {void}

#### Static method: `getReporter(compiler)`

* `compiler` {Compiler}
* Returns: {(p: number, args: string[]) => void}

***

## Class: `ProvidePlugin`

### Constructors

#### `new ProvidePlugin(definitions)`

* `definitions` {Record<string, string|string[]>}
* Returns: {ProvidePlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="definitions"></a> `definitions` | {Record<string, string|string[]>} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `Resolver`

### Constructors

#### `new Resolver()`

* Returns: {Resolver}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="filesystem"></a> `fileSystem` | {FileSystem} |
| <a id="hooks"></a> `hooks` | {KnownHooks} |
| <a id="options"></a> `options` | {ResolveOptionsResolverFactoryObject1} |

### Methods

#### `doResolve(hook, request, message, resolveContext, callback)`

* `hook` {AsyncSeriesBailHook<Tuple<ResolveRequest, ResolveContext>, ResolveRequest>}
* `request` {ResolveRequest}
* `message` {string}
* `resolveContext` {ResolveContext}
* `callback` {(err?: Error, result?: ResolveRequest) => void}
* Returns: {void}

#### `ensureHook(name)`

* `name` {string|AsyncSeriesBailHook<Tuple<ResolveRequest, ResolveContext>, ResolveRequest, UnsetAdditionalOptions>}
* Returns: {AsyncSeriesBailHook<Tuple<ResolveRequest, ResolveContext>, ResolveRequest>}

#### `getHook(name)`

* `name` {string|AsyncSeriesBailHook<Tuple<ResolveRequest, ResolveContext>, ResolveRequest, UnsetAdditionalOptions>}
* Returns: {AsyncSeriesBailHook<Tuple<ResolveRequest, ResolveContext>, ResolveRequest>}

#### `isDirectory(path)`

* `path` {string}
* Returns: {boolean}

#### `isModule(path)`

* `path` {string}
* Returns: {boolean}

#### `isPrivate(path)`

* `path` {string}
* Returns: {boolean}

#### `join(path, request)`

* `path` {string}
* `request` {string}
* Returns: {string}

#### `normalize(path)`

* `path` {string}
* Returns: {string}

#### `parse(identifier)`

* `identifier` {string}
* Returns: {ParsedIdentifier}

#### `resolve(context, path, request, resolveContext, callback)`

* `context` {ContextTypes}
* `path` {string}
* `request` {string}
* `resolveContext` {ResolveContext}
* `callback` {(err: ErrorWithDetail, res?: string|false, req?: ResolveRequest) => void}
* Returns: {void}

#### `resolveSync(context, path, request)`

* `context` {ContextTypes}
* `path` {string}
* `request` {string}
* Returns: {string|false}

***

## Class: `RuntimeModule`

### Extends

- {Module}

### Extended by

- {GetChunkFilenameRuntimeModule}
- {JsonpChunkLoadingRuntimeModule}
- {CssLoadingRuntimeModule}
- {ModuleChunkLoadingRuntimeModule}

### Constructors

#### `new RuntimeModule(name[, stage])`

* `name` {string}
* `stage` {number}
* Returns: {RuntimeModule}

### Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="blocks"></a> `blocks` | `public` | {AsyncDependenciesBlock[]} | - | [`Module`](#module).[`blocks`](#blocks) |
| <a id="buildinfo"></a> `buildInfo?` | `public` | {BuildInfo} | - | [`Module`](#module).[`buildInfo`](#buildinfo) |
| <a id="buildmeta"></a> `buildMeta?` | `public` | {BuildMeta} | - | [`Module`](#module).[`buildMeta`](#buildmeta) |
| <a id="chunk"></a> `chunk?` | `public` | {Chunk} | - | - |
| <a id="chunkgraph"></a> `chunkGraph?` | `public` | {ChunkGraph} | - | - |
| <a id="chunksiterable"></a> `chunksIterable` | `public` | {Iterable<Chunk>} | - | [`Module`](#module).[`chunksIterable`](#chunksiterable) |
| <a id="codegenerationdependencies"></a> `codeGenerationDependencies?` | `public` | {Dependency[]} | - | [`Module`](#module).[`codeGenerationDependencies`](#codegenerationdependencies) |
| <a id="compilation"></a> `compilation?` | `public` | {Compilation} | - | - |
| <a id="context"></a> `context` | `public` | {string} | - | [`Module`](#module).[`context`](#context) |
| <a id="debugid"></a> `debugId` | `public` | {number} | - | [`Module`](#module).[`debugId`](#debugid) |
| <a id="dependencies"></a> `dependencies` | `public` | {Dependency[]} | - | [`Module`](#module).[`dependencies`](#dependencies) |
| <a id="dependenthash"></a> `dependentHash` | `public` | {boolean} | - | - |
| <a id="depth"></a> `depth` | `public` | {number} | - | [`Module`](#module).[`depth`](#depth) |
| <a id="errors"></a> `errors` | `public` | {any} | - | [`Module`](#module).[`errors`](#errors) |
| <a id="exportsargument"></a> `exportsArgument` | `public` | {string} | - | [`Module`](#module).[`exportsArgument`](#exportsargument) |
| <a id="factorymeta"></a> `factoryMeta?` | `public` | {FactoryMeta} | - | [`Module`](#module).[`factoryMeta`](#factorymeta) |
| <a id="fullhash"></a> `fullHash` | `public` | {boolean} | - | - |
| <a id="hasequalschunks"></a> `hasEqualsChunks` | `public` | {any} | - | [`Module`](#module).[`hasEqualsChunks`](#hasequalschunks) |
| <a id="hash"></a> `hash` | `public` | {string} | - | [`Module`](#module).[`hash`](#hash) |
| <a id="hot"></a> `hot` | `public` | {boolean} | - | [`Module`](#module).[`hot`](#hot) |
| <a id="id"></a> ~~`id`~~ | `public` | {string|number} | **Deprecated** | [`Module`](#module).[`id`](#id) |
| <a id="index"></a> `index` | `public` | {number} | - | [`Module`](#module).[`index`](#index) |
| <a id="index2"></a> `index2` | `public` | {number} | - | [`Module`](#module).[`index2`](#index2) |
| <a id="issuer"></a> `issuer?` | `public` | {Module} | - | [`Module`](#module).[`issuer`](#issuer) |
| <a id="isused"></a> `isUsed` | `public` | {any} | - | [`Module`](#module).[`isUsed`](#isused) |
| <a id="layer"></a> `layer` | `public` | {string} | - | [`Module`](#module).[`layer`](#layer) |
| <a id="moduleargument"></a> `moduleArgument` | `public` | {string} | - | [`Module`](#module).[`moduleArgument`](#moduleargument) |
| <a id="name"></a> `name` | `public` | {string} | - | - |
| <a id="needid"></a> `needId` | `public` | {boolean} | - | [`Module`](#module).[`needId`](#needid) |
| <a id="optimizationbailout"></a> ~~`optimizationBailout`~~ | `public` | {string|(requestShortener: RequestShortener) => string[]} | **Deprecated** | [`Module`](#module).[`optimizationBailout`](#optimizationbailout) |
| <a id="optional"></a> `optional` | `public` | {boolean} | - | [`Module`](#module).[`optional`](#optional) |
| <a id="parent"></a> `parent?` | `public` | {DependenciesBlock} | - | [`Module`](#module).[`parent`](#parent) |
| <a id="presentationaldependencies"></a> `presentationalDependencies?` | `public` | {Dependency[]} | - | [`Module`](#module).[`presentationalDependencies`](#presentationaldependencies) |
| <a id="profile"></a> `profile?` | `public` | {ModuleProfile} | - | [`Module`](#module).[`profile`](#profile) |
| <a id="renderedhash"></a> `renderedHash` | `public` | {string} | - | [`Module`](#module).[`renderedHash`](#renderedhash) |
| <a id="resolveoptions"></a> `resolveOptions?` | `public` | {ResolveOptions} | - | [`Module`](#module).[`resolveOptions`](#resolveoptions) |
| <a id="stage"></a> `stage` | `public` | {number} | - | - |
| <a id="type"></a> `type` | `public` | {string} | - | [`Module`](#module).[`type`](#type) |
| <a id="used"></a> `used` | `public` | {any} | - | [`Module`](#module).[`used`](#used) |
| <a id="usedexports"></a> `usedExports` | `public` | {boolean|SortableSet<string>} | - | [`Module`](#module).[`usedExports`](#usedexports) |
| <a id="usesimplesourcemap"></a> `useSimpleSourceMap` | `public` | {boolean} | - | [`Module`](#module).[`useSimpleSourceMap`](#usesimplesourcemap) |
| <a id="usesourcemap"></a> `useSourceMap` | `public` | {boolean} | - | [`Module`](#module).[`useSourceMap`](#usesourcemap) |
| <a id="warnings"></a> `warnings` | `public` | {any} | - | [`Module`](#module).[`warnings`](#warnings) |
| <a id="stage-attach"></a> `STAGE_ATTACH` | `static` | {number} | Runtime modules which attach to handlers of other runtime modules | - |
| <a id="stage-basic"></a> `STAGE_BASIC` | `static` | {number} | Runtime modules with simple dependencies on other runtime modules | - |
| <a id="stage-normal"></a> `STAGE_NORMAL` | `static` | {number} | Runtime modules without any dependencies to other runtime modules | - |
| <a id="stage-trigger"></a> `STAGE_TRIGGER` | `static` | {number} | Runtime modules which trigger actions on bootstrap | - |

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

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {ReadonlySet<string>}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

***

## Class: `SourceMapDevToolPlugin`

### Constructors

#### `new SourceMapDevToolPlugin([options])`

* `options` {SourceMapDevToolPluginOptions}
* Returns: {SourceMapDevToolPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="fallbackmodulefilenametemplate"></a> `fallbackModuleFilenameTemplate` | {DevtoolFallbackModuleFilenameTemplate} |
| <a id="modulefilenametemplate"></a> `moduleFilenameTemplate` | {DevtoolModuleFilenameTemplate} |
| <a id="namespace"></a> `namespace` | {string} |
| <a id="options"></a> `options` | {SourceMapDevToolPluginOptions} |
| <a id="sourcemapfilename"></a> `sourceMapFilename?` | {string|false} |
| <a id="sourcemappingurlcomment"></a> `sourceMappingURLComment` | {string|false|(pathData: PathData, assetInfo?: AssetInfo) => string} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `Stats`

### Constructors

#### `new Stats(compilation)`

* `compilation` {Compilation}
* Returns: {Stats}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="compilation"></a> `compilation` | {Compilation} |
| <a id="endtime"></a> `endTime` | {number} |
| <a id="hash"></a> `hash` | {string} |
| <a id="starttime"></a> `startTime` | {number} |

### Methods

#### `hasErrors()`

* Returns: {boolean}

#### `hasWarnings()`

* Returns: {boolean}

#### `toJson([options])`

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}
* Returns: {StatsCompilation}

#### `toString([options])`

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}
* Returns: {string}

***

## Class: `Template`

### Constructors

#### `new Template()`

* Returns: {Template}

### Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="number-of-identifier-continuation-chars"></a> `NUMBER_OF_IDENTIFIER_CONTINUATION_CHARS` | `static` | {number} |
| <a id="number-of-identifier-start-chars"></a> `NUMBER_OF_IDENTIFIER_START_CHARS` | `static` | {number} |

### Methods

#### Static method: `asString(str)`

* `str` {string|string[]}
* Returns: {string}

#### Static method: `getFunctionContent(fn)`

* `fn` {Stringable}
* Returns: {string}

#### Static method: `getModulesArrayBounds(modules)`

* `modules` {WithId[]}
* Returns: {false|Tuple<number, number>}

#### Static method: `indent(s)`

* `s` {string|string[]}
* Returns: {string}

#### Static method: `numberToIdentifier(n)`

* `n` {number}
* Returns: {string}

#### Static method: `numberToIdentifierContinuation(n)`

* `n` {number}
* Returns: {string}

#### Static method: `prefix(s, prefix)`

* `s` {string|string[]}
* `prefix` {string}
* Returns: {string}

#### Static method: `renderChunkModules(renderContext, modules, renderModule[, prefix])`

* `renderContext` {ChunkRenderContextJavascriptModulesPlugin}
* `modules` {Module[]}
* `renderModule` {(module: Module, renderInArray?: boolean) => Source}
* `prefix` {string}
* Returns: {Source}

#### Static method: `renderChunkRuntimeModules(runtimeModules, renderContext)`

* `runtimeModules` {RuntimeModule[]}
* `renderContext` {RenderContextJavascriptModulesPlugin}
* Returns: {Source}

#### Static method: `renderRuntimeModules(runtimeModules, renderContext)`

* `runtimeModules` {RuntimeModule[]}
* `renderContext` {RenderContextJavascriptModulesPlugin&{ codeGenerationResults: CodeGenerationResults }}
* Returns: {Source}

#### Static method: `toComment(str)`

* `str` {string}
* Returns: {string}

#### Static method: `toIdentifier(str)`

* `str` {string}
* Returns: {string}

#### Static method: `toNormalComment(str)`

* `str` {string}
* Returns: {string}

#### Static method: `toPath(str)`

* `str` {string}
* Returns: {string}

***

## Class: `WatchIgnorePlugin`

### Constructors

#### `new WatchIgnorePlugin(options)`

* `options` {WatchIgnorePluginOptions}
* Returns: {WatchIgnorePlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {WatchIgnorePluginOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `Watching`

### Constructors

#### `new Watching()`

* Returns: {Watching}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="blocked"></a> `blocked` | {boolean} |
| <a id="callbacks"></a> `callbacks` | {(err: Error, result?: void) => void[]} |
| <a id="closed"></a> `closed` | {boolean} |
| <a id="compiler"></a> `compiler` | {Compiler} |
| <a id="handler"></a> `handler` | {CallbackWebpackFunction_2<Stats, void>} |
| <a id="invalid"></a> `invalid` | {boolean} |
| <a id="lastwatcherstarttime"></a> `lastWatcherStartTime?` | {number} |
| <a id="pausedwatcher"></a> `pausedWatcher?` | {Watcher} |
| <a id="running"></a> `running` | {boolean} |
| <a id="starttime"></a> `startTime` | {number} |
| <a id="suspended"></a> `suspended` | {boolean} |
| <a id="watcher"></a> `watcher?` | {Watcher} |
| <a id="watchoptions"></a> `watchOptions` | {WatchOptions} |

### Methods

#### `close(callback)`

* `callback` {(err: Error, result?: void) => void}
* Returns: {void}

#### `invalidate([callback])`

* `callback` {(err: Error, result?: void) => void}
* Returns: {void}

#### `resume()`

* Returns: {void}

#### `suspend()`

* Returns: {void}

#### `watch(files, dirs, missing)`

* `files` {Iterable<string>}
* `dirs` {Iterable<string>}
* `missing` {Iterable<string>}
* Returns: {void}

***

## Class: `WebpackError`

### Extends

- {Error}

### Indexable

> \[`index`: {number}\]: {() => string}

### Constructors

#### `new WebpackError([message][, options])`

* `message` {string}
* `options` {{ cause: unknown }}
* Returns: {WebpackError}

Creates an instance of WebpackError.

### Properties

| Property | Modifier | Type | Description | Overrides | Inherited from |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="chunk"></a> `chunk?` | `public` | {Chunk} | - | - | - |
| <a id="details"></a> `details?` | `public` | {string} | - | - | - |
| <a id="file"></a> `file?` | `public` | {string} | - | - | - |
| <a id="hidestack"></a> `hideStack?` | `public` | {boolean} | - | - | - |
| <a id="loc"></a> `loc?` | `public` | {SyntheticDependencyLocation|RealDependencyLocation} | - | - | - |
| <a id="message"></a> `message` | `public` | {string} | - | - | `Error.message` |
| <a id="module"></a> `module?` | `public` | {Module} | - | - | - |
| <a id="name"></a> `name` | `public` | {string} | - | - | `Error.name` |
| <a id="stack"></a> `stack?` | `public` | {string} | - | - | `Error.stack` |
| <a id="stacktracelimit"></a> `stackTraceLimit` | `static` | {number} | The `Error.stackTraceLimit` property specifies the number of stack frames collected by a stack trace (whether generated by `new Error().stack` or `Error.captureStackTrace(obj)`). The default value is `10` but may be set to any valid JavaScript number. Changes will affect any stack trace captured _after_ the value has been changed. If set to a non-number value, or set to a negative number, stack traces will not capture any frames. | `Error.stackTraceLimit` | - |

### Methods

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### Static method: `captureStackTrace(targetObject[, constructorOpt])`

* `targetObject` {object}
* `constructorOpt` {Function}
* Returns: {void}

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.
```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```
The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.
The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.
The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:
```js
function a() {
  b();
}
function b() {
  c();
}
function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;
  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}
a();
```

#### Static method: `prepareStackTrace(err, stackTraces)`

* `err` {Error}
* `stackTraces` {CallSite[]}
* Returns: {any}

***

## Class: `WebpackOptionsApply`

### Extends

- {OptionsApply}

### Constructors

#### `new WebpackOptionsApply()`

* Returns: {WebpackOptionsApply}

### Methods

#### `process(options, compiler[, interception])`

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compiler` {Compiler}
* `interception` {WebpackOptionsInterception}
* Returns: {WebpackOptionsNormalizedWithDefaults}

***

## Class: `WebpackOptionsDefaulter`

### Constructors

#### `new WebpackOptionsDefaulter()`

* Returns: {WebpackOptionsDefaulter}

### Methods

#### `process(options)`

* `options` {Configuration}
* Returns: {WebpackOptionsNormalized}

***

## Class: `WebpackOptionsValidationError`

### Extends

- {Error}

### Constructors

#### `new WebpackOptionsValidationError(errors, schema[, configuration])`

* `errors` {SchemaUtilErrorObject[]} array of error objects
* `schema` {Schema} schema
* `configuration` {ValidationErrorConfiguration} configuration
* Returns: {ValidationError}

### Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="basedatapath"></a> `baseDataPath` | `public` | {string} | - | - |
| <a id="errors"></a> `errors` | `public` | {SchemaUtilErrorObject[]} | - | - |
| <a id="headername"></a> `headerName` | `public` | {string} | - | - |
| <a id="message"></a> `message` | `public` | {string} | - | `Error.message` |
| <a id="name"></a> `name` | `public` | {string} | - | `Error.name` |
| <a id="postformatter"></a> `postFormatter` | `public` | {PostFormatter} | - | - |
| <a id="schema"></a> `schema` | `public` | {Schema} | - | - |
| <a id="stack"></a> `stack?` | `public` | {string} | - | `Error.stack` |
| <a id="stacktracelimit"></a> `stackTraceLimit` | `static` | {number} | The `Error.stackTraceLimit` property specifies the number of stack frames collected by a stack trace (whether generated by `new Error().stack` or `Error.captureStackTrace(obj)`). The default value is `10` but may be set to any valid JavaScript number. Changes will affect any stack trace captured _after_ the value has been changed. If set to a non-number value, or set to a negative number, stack traces will not capture any frames. | `Error.stackTraceLimit` |

### Methods

#### `formatSchema(schema[, logic][, prevSchemas])`

* `schema` {Schema} schema
* `logic` {boolean} logic
* `prevSchemas` {object[]} prev schemas
* Returns: {string} formatted schema

#### `formatValidationError(error)`

* `error` {SchemaUtilErrorObject} error object
* Returns: {string} formatted error object

#### `formatValidationErrors(errors)`

* `errors` {SchemaUtilErrorObject[]} errors
* Returns: {string} formatted errors

#### `getSchemaPart(path)`

* `path` {string} path
* Returns: {Schema} schema

#### `getSchemaPartDescription([schemaPart])`

* `schemaPart` {Schema} schema part
* Returns: {string} schema part description

#### `getSchemaPartText([schemaPart][, additionalPath][, needDot][, logic])`

* `schemaPart` {Schema} schema part
* `additionalPath` {boolean|string[]} additional path
* `needDot` {boolean} true when need dot
* `logic` {boolean} logic
* Returns: {string} schema part text

#### Static method: `captureStackTrace(targetObject[, constructorOpt])`

* `targetObject` {object}
* `constructorOpt` {Function}
* Returns: {void}

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

#### Static method: `prepareStackTrace(err, stackTraces)`

* `err` {Error}
* `stackTraces` {CallSite[]}
* Returns: {any}

***

## Interface: `Argument`

### Properties

| Property | Type |
| ------ | ------ |
| <a id="configs"></a> `configs` | {ArgumentConfig[]} |
| <a id="description"></a> `description?` | {string} |
| <a id="multiple"></a> `multiple` | {boolean} |
| <a id="simpletype"></a> `simpleType` | {SimpleType} |

***

## Interface: `Asset`

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="info"></a> `info` | {AssetInfo} | info about the asset |
| <a id="name"></a> `name` | {string} | the filename of the asset |
| <a id="source"></a> `source` | {Source} | source of the asset |

***

## Interface: `AssetEmittedInfo`

### Properties

| Property | Type |
| ------ | ------ |
| <a id="compilation"></a> `compilation` | {Compilation} |
| <a id="content"></a> `content` | {Buffer} |
| <a id="outputpath"></a> `outputPath` | {string} |
| <a id="source"></a> `source` | {Source} |
| <a id="targetpath"></a> `targetPath` | {string} |

***

## Interface: `Colors`

### Properties

| Property | Type |
| ------ | ------ |
| <a id="bgblack"></a> `bgBlack` | {(value?: any) => string} |
| <a id="bgblackbright"></a> `bgBlackBright` | {(value?: any) => string} |
| <a id="bgblue"></a> `bgBlue` | {(value?: any) => string} |
| <a id="bgbluebright"></a> `bgBlueBright` | {(value?: any) => string} |
| <a id="bgcyan"></a> `bgCyan` | {(value?: any) => string} |
| <a id="bgcyanbright"></a> `bgCyanBright` | {(value?: any) => string} |
| <a id="bggreen"></a> `bgGreen` | {(value?: any) => string} |
| <a id="bggreenbright"></a> `bgGreenBright` | {(value?: any) => string} |
| <a id="bgmagenta"></a> `bgMagenta` | {(value?: any) => string} |
| <a id="bgmagentabright"></a> `bgMagentaBright` | {(value?: any) => string} |
| <a id="bgred"></a> `bgRed` | {(value?: any) => string} |
| <a id="bgredbright"></a> `bgRedBright` | {(value?: any) => string} |
| <a id="bgwhite"></a> `bgWhite` | {(value?: any) => string} |
| <a id="bgwhitebright"></a> `bgWhiteBright` | {(value?: any) => string} |
| <a id="bgyellow"></a> `bgYellow` | {(value?: any) => string} |
| <a id="bgyellowbright"></a> `bgYellowBright` | {(value?: any) => string} |
| <a id="black"></a> `black` | {(value?: any) => string} |
| <a id="blackbright"></a> `blackBright` | {(value?: any) => string} |
| <a id="blue"></a> `blue` | {(value?: any) => string} |
| <a id="bluebright"></a> `blueBright` | {(value?: any) => string} |
| <a id="bold"></a> `bold` | {(value?: any) => string} |
| <a id="cyan"></a> `cyan` | {(value?: any) => string} |
| <a id="cyanbright"></a> `cyanBright` | {(value?: any) => string} |
| <a id="dim"></a> `dim` | {(value?: any) => string} |
| <a id="gray"></a> `gray` | {(value?: any) => string} |
| <a id="green"></a> `green` | {(value?: any) => string} |
| <a id="greenbright"></a> `greenBright` | {(value?: any) => string} |
| <a id="hidden"></a> `hidden` | {(value?: any) => string} |
| <a id="inverse"></a> `inverse` | {(value?: any) => string} |
| <a id="italic"></a> `italic` | {(value?: any) => string} |
| <a id="magenta"></a> `magenta` | {(value?: any) => string} |
| <a id="magentabright"></a> `magentaBright` | {(value?: any) => string} |
| <a id="red"></a> `red` | {(value?: any) => string} |
| <a id="redbright"></a> `redBright` | {(value?: any) => string} |
| <a id="reset"></a> `reset` | {(value?: any) => string} |
| <a id="strikethrough"></a> `strikethrough` | {(value?: any) => string} |
| <a id="underline"></a> `underline` | {(value?: any) => string} |
| <a id="white"></a> `white` | {(value?: any) => string} |
| <a id="whitebright"></a> `whiteBright` | {(value?: any) => string} |
| <a id="yellow"></a> `yellow` | {(value?: any) => string} |
| <a id="yellowbright"></a> `yellowBright` | {(value?: any) => string} |

***

## Interface: `ColorsOptions`

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="usecolor"></a> `useColor?` | {boolean} | force use colors |

***

## Interface: `Configuration`

Options object as provided by the user.

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="amd"></a> `amd?` | {false|{ [index: string]: any }} | Set the value of `require.amd` and `define.amd`. Or disable AMD support. |
| <a id="bail"></a> `bail?` | {boolean} | Report the first error as a hard error instead of tolerating it. |
| <a id="cache"></a> `cache?` | {boolean|FileCacheOptions|MemoryCacheOptions} | Cache generated modules and chunks to improve performance for multiple incremental builds. |
| <a id="context"></a> `context?` | {string} | The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory. |
| <a id="dependencies"></a> `dependencies?` | {string[]} | References to other configurations to depend on. |
| <a id="devtool"></a> `devtool?` | {string|false|{ type: "css"|"javascript"|"all"; use: RawDevTool }[]} | A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map). |
| <a id="dotenv"></a> `dotenv?` | {boolean|DotenvPluginOptions} | Enable and configure the Dotenv plugin to load environment variables from .env files. |
| <a id="entry"></a> `entry?` | {string|string[]|EntryObject|() => string|string[]|EntryObject|Promise<EntryStatic>} | The entry point(s) of the compilation. |
| <a id="experiments"></a> `experiments?` | {Experiments} | Enables/Disables experiments (experimental features with relax SemVer compatibility). |
| <a id="extends"></a> `extends?` | {string|string[]} | Extend configuration from another configuration (only works when using webpack-cli). |
| <a id="externals"></a> `externals?` | {string|RegExp|ExternalItemObjectKnown&ExternalItemObjectUnknown|(data: ExternalItemFunctionData, callback: (err?: Error, result?: string|boolean|string[]|{ [index: string]: any }) => void) => void|(data: ExternalItemFunctionData) => Promise<ExternalItemValue>|ExternalItem[]} | Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`. |
| <a id="externalspresets"></a> `externalsPresets?` | {ExternalsPresets} | Enable presets of externals for specific targets. |
| <a id="externalstype"></a> `externalsType?` | {"asset"|"module"|"css-import"|"css-url"|"global"|"import"|"commonjs"|"jsonp"|"promise"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"} | Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value). |
| <a id="ignorewarnings"></a> `ignoreWarnings?` | {RegExp|{ file: RegExp; message: RegExp; module: RegExp }|(warning: Error, compilation: Compilation) => boolean[]} | Ignore specific warnings. |
| <a id="infrastructurelogging"></a> `infrastructureLogging?` | {InfrastructureLogging} | Options for infrastructure level logging. |
| <a id="loader"></a> `loader?` | {Loader} | Custom values available in the loader context. |
| <a id="mode"></a> `mode?` | {"development"|"none"|"production"} | Enable production optimizations or development hints. |
| <a id="module"></a> `module?` | {ModuleOptions} | Options affecting the normal modules (`NormalModuleFactory`). |
| <a id="name"></a> `name?` | {string} | Name of the configuration. Used when loading multiple configurations. |
| <a id="node"></a> `node?` | {false|NodeOptions} | Include polyfills or mocks for various node stuff. |
| <a id="optimization"></a> `optimization?` | {Optimization} | Enables/Disables integrated optimizations. |
| <a id="output"></a> `output?` | {Output} | Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk. |
| <a id="parallelism"></a> `parallelism?` | {number} | The number of parallel processed modules in the compilation. |
| <a id="performance"></a> `performance?` | {false|PerformanceOptions} | Configuration for web performance recommendations. |
| <a id="plugins"></a> `plugins?` | {false|""|0|WebpackPluginInstance|(this: Compiler, compiler: Compiler) => void[]} | Add additional plugins to the compiler. |
| <a id="profile"></a> `profile?` | {boolean} | Capture timing information for each module. |
| <a id="recordsinputpath"></a> `recordsInputPath?` | {string|false} | Store compiler state to a json file. |
| <a id="recordsoutputpath"></a> `recordsOutputPath?` | {string|false} | Load compiler state from a json file. |
| <a id="recordspath"></a> `recordsPath?` | {string|false} | Store/Load compiler state from/to a json file. This will result in persistent ids of modules and chunks. An absolute path is expected. `recordsPath` is used for `recordsInputPath` and `recordsOutputPath` if they left undefined. |
| <a id="resolve"></a> `resolve?` | {ResolveOptions} | Options for the resolver. |
| <a id="resolveloader"></a> `resolveLoader?` | {ResolveOptions} | Options for the resolver when resolving loaders. |
| <a id="snapshot"></a> `snapshot?` | {SnapshotOptionsWebpackOptions} | Options affecting how file system snapshots are created and validated. |
| <a id="stats"></a> `stats?` | {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions} | Stats options object or preset name. |
| <a id="target"></a> `target?` | {string|false|string[]} | Environment to build for. An array of environments to build for all of them when possible. |
| <a id="validate"></a> `validate?` | {boolean} | Enable validation of webpack configuration. Defaults to true in development mode. In production mode, defaults to true unless futureDefaults is enabled, then defaults to false. |
| <a id="watch"></a> `watch?` | {boolean} | Enter watch mode, which rebuilds on file change. |
| <a id="watchoptions"></a> `watchOptions?` | {WatchOptions} | Options for the watcher. |

***

## Interface: `EntryObject`

Multiple entry bundles are created. The key is the entry name. The value can be a string, an array or an entry description object.

### Indexable

> \[`index`: {string}\]: {string|string[]|EntryDescription}

***

## Interface: `ExternalItemFunctionData`

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="context"></a> `context` | {string} | the directory in which the request is placed |
| <a id="contextinfo"></a> `contextInfo` | {ModuleFactoryCreateDataContextInfo} | contextual information |
| <a id="dependencytype"></a> `dependencyType` | {string} | the category of the referencing dependency |
| <a id="getresolve"></a> `getResolve` | {(options?: ResolveOptions) => (context: string, request: string, callback: (err?: Error, result?: string|false, resolveRequest?: ResolveRequest) => void) => void|(context: string, request: string) => Promise<string>} | get a resolve function with the current resolver options |
| <a id="request"></a> `request` | {string} | the request as written by the user in the require/import expression/statement |

***

## Interface: `ExternalItemObjectKnown`

If an dependency matches exactly a property of the object, the property value is used as dependency.

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="bylayer"></a> `byLayer?` | {{ [index: string]: ExternalItem }|(layer: string) => ExternalItem} | Specify externals depending on the layer. |

***

## Interface: `ExternalItemObjectUnknown`

If an dependency matches exactly a property of the object, the property value is used as dependency.

### Indexable

> \[`index`: {string}\]: {ExternalItemValue}

***

## Interface: `FileCacheOptions`

Options object for persistent file-based caching.

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="allowcollectingmemory"></a> `allowCollectingMemory?` | {boolean} | Allows to collect unused memory allocated during deserialization. This requires copying data into smaller buffers and has a performance cost. |
| <a id="builddependencies"></a> `buildDependencies?` | {{ [index: string]: string[] }} | Dependencies the build depends on (in multiple categories, default categories: 'defaultWebpack'). |
| <a id="cachedirectory"></a> `cacheDirectory?` | {string} | Base directory for the cache (defaults to node_modules/.cache/webpack). |
| <a id="cachelocation"></a> `cacheLocation?` | {string} | Locations for the cache (defaults to cacheDirectory / name). |
| <a id="compression"></a> `compression?` | {false|"gzip"|"brotli"} | Compression type used for the cache files. |
| <a id="hashalgorithm"></a> `hashAlgorithm?` | {string} | Algorithm used for generation the hash (see node.js crypto package). |
| <a id="idletimeout"></a> `idleTimeout?` | {number} | Time in ms after which idle period the cache storing should happen. |
| <a id="idletimeoutafterlargechanges"></a> `idleTimeoutAfterLargeChanges?` | {number} | Time in ms after which idle period the cache storing should happen when larger changes has been detected (cumulative build time > 2 x avg cache store time). |
| <a id="idletimeoutforinitialstore"></a> `idleTimeoutForInitialStore?` | {number} | Time in ms after which idle period the initial cache storing should happen. |
| <a id="immutablepaths"></a> `immutablePaths?` | {string|RegExp[]} | List of paths that are managed by a package manager and contain a version or hash in its path so all files are immutable. |
| <a id="managedpaths"></a> `managedPaths?` | {string|RegExp[]} | List of paths that are managed by a package manager and can be trusted to not be modified otherwise. |
| <a id="maxage"></a> `maxAge?` | {number} | Time for which unused cache entries stay in the filesystem cache at minimum (in milliseconds). |
| <a id="maxmemorygenerations"></a> `maxMemoryGenerations?` | {number} | Number of generations unused cache entries stay in memory cache at minimum (0 = no memory cache used, 1 = may be removed after unused for a single compilation, ..., Infinity: kept forever). Cache entries will be deserialized from disk when removed from memory cache. |
| <a id="memorycacheunaffected"></a> `memoryCacheUnaffected?` | {boolean} | Additionally cache computation of modules that are unchanged and reference only unchanged modules in memory. |
| <a id="name"></a> `name?` | {string} | Name for the cache. Different names will lead to different coexisting caches. |
| <a id="profile"></a> `profile?` | {boolean} | Track and log detailed timing information for individual cache items. |
| <a id="readonly"></a> `readonly?` | {boolean} | Enable/disable readonly mode. |
| <a id="store"></a> `store?` | {"pack"} | When to store data to the filesystem. (pack: Store data when compiler is idle in a single file). |
| <a id="type"></a> `type` | {"filesystem"} | Filesystem caching. |
| <a id="version"></a> `version?` | {string} | Version of the cache data. Different versions won't allow to reuse the cache and override existing content. Update the version when config changed in a way which doesn't allow to reuse cache. This will invalidate the cache. |

***

## Interface: `GeneratorOptionsByModuleTypeKnown`

Specify options for each generator.

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="asset"></a> `asset?` | {AssetGeneratorOptions} | Generator options for asset modules. |
| <a id="assetbytes"></a> `asset/bytes?` | {EmptyGeneratorOptions} | No generator options are supported for this module type. |
| <a id="assetinline"></a> `asset/inline?` | {AssetInlineGeneratorOptions} | Generator options for asset/inline modules. |
| <a id="assetresource"></a> `asset/resource?` | {AssetResourceGeneratorOptions} | Generator options for asset/resource modules. |
| <a id="assetsource"></a> `asset/source?` | {EmptyGeneratorOptions} | No generator options are supported for this module type. |
| <a id="css"></a> `css?` | {CssGeneratorOptions} | Generator options for css modules. |
| <a id="cssauto"></a> `css/auto?` | {CssModuleGeneratorOptions} | Generator options for css/module modules. |
| <a id="cssglobal"></a> `css/global?` | {CssModuleGeneratorOptions} | Generator options for css/module modules. |
| <a id="cssmodule"></a> `css/module?` | {CssModuleGeneratorOptions} | Generator options for css/module modules. |
| <a id="javascript"></a> `javascript?` | {EmptyGeneratorOptions} | No generator options are supported for this module type. |
| <a id="javascriptauto"></a> `javascript/auto?` | {EmptyGeneratorOptions} | No generator options are supported for this module type. |
| <a id="javascriptdynamic"></a> `javascript/dynamic?` | {EmptyGeneratorOptions} | No generator options are supported for this module type. |
| <a id="javascriptesm"></a> `javascript/esm?` | {EmptyGeneratorOptions} | No generator options are supported for this module type. |
| <a id="json"></a> `json?` | {JsonGeneratorOptions} | Generator options for json modules. |

***

## Interface: `InputFileSystem`

### Properties

| Property | Type |
| ------ | ------ |
| <a id="dirname"></a> `dirname?` | {(dirname: string) => string} |
| <a id="join"></a> `join?` | {(path1: string, path2: string) => string} |
| <a id="lstat"></a> `lstat?` | {LStatFs} |
| <a id="lstatsync"></a> `lstatSync?` | {LStatSync} |
| <a id="purge"></a> `purge?` | {(value?: string|string[]|Set<string>) => void} |
| <a id="readdir"></a> `readdir` | {ReaddirFs} |
| <a id="readdirsync"></a> `readdirSync?` | {ReaddirSync} |
| <a id="readfile"></a> `readFile` | {ReadFileFs} |
| <a id="readfilesync"></a> `readFileSync?` | {ReadFileSync} |
| <a id="readjson"></a> `readJson?` | {(pathOrFileDescriptor: PathOrFileDescriptorFs, callback: (err: Error|ErrnoException, result?: JsonObjectFs) => void) => void} |
| <a id="readjsonsync"></a> `readJsonSync?` | {(pathOrFileDescriptor: PathOrFileDescriptorFs) => JsonObjectFs} |
| <a id="readlink"></a> `readlink` | {ReadlinkFs} |
| <a id="readlinksync"></a> `readlinkSync?` | {ReadlinkSync} |
| <a id="realpath"></a> `realpath?` | {RealPathFs} |
| <a id="realpathsync"></a> `realpathSync?` | {RealPathSync} |
| <a id="relative"></a> `relative?` | {(from: string, to: string) => string} |
| <a id="stat"></a> `stat` | {StatFs} |
| <a id="statsync"></a> `statSync?` | {StatSync} |

***

## Interface: `LibraryOptions`

Options for library.

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="amdcontainer"></a> `amdContainer?` | {string} | Add a container for define/require functions in the AMD module. |
| <a id="auxiliarycomment"></a> `auxiliaryComment?` | {string|LibraryCustomUmdCommentObject} | Add a comment in the UMD wrapper. |
| <a id="export"></a> `export?` | {string|string[]} | Specify which export should be exposed as library. |
| <a id="name"></a> `name?` | {string|string[]|LibraryCustomUmdObject} | The name of the library (some types allow unnamed libraries too). |
| <a id="type"></a> `type` | {string} | Type of library (types included by default are 'var', 'module', 'assign', 'assign-properties', 'this', 'window', 'self', 'global', 'commonjs', 'commonjs2', 'commonjs-module', 'commonjs-static', 'amd', 'amd-require', 'umd', 'umd2', 'jsonp', 'system', but others might be added by plugins). |
| <a id="umdnameddefine"></a> `umdNamedDefine?` | {boolean} | If `output.libraryTarget` is set to umd and `output.library` is set, setting this to true will name the AMD module. |

***

## Interface: `LoaderDefinitionFunction(this, content[, sourceMap][, additionalData])`

### Type Parameters

* `OptionsType` = {object}
* `ContextAdditions` = {object}

* `this` {NormalModuleLoaderContext<OptionsType>&LoaderRunnerLoaderContext<OptionsType>&LoaderPluginLoaderContext&HotModuleReplacementPluginLoaderContext&ContextAdditions}
* `content` {string}
* `sourceMap` {string|RawSourceMap}
* `additionalData` {AdditionalData}
* Returns: {string|void|Buffer<ArrayBufferLike>|Promise<string|Buffer<ArrayBufferLike>>}

***

## Interface: `LoaderModule`

### Type Parameters

* `OptionsType` = {object}
* `ContextAdditions` = {object}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="default"></a> `default?` | {RawLoaderDefinitionFunction<OptionsType, ContextAdditions>|LoaderDefinitionFunction<OptionsType, ContextAdditions>} |
| <a id="pitch"></a> `pitch?` | {PitchLoaderDefinitionFunction<OptionsType, ContextAdditions>} |
| <a id="raw"></a> `raw?` | {false} |

***

## Interface: `MemoryCacheOptions`

Options object for in-memory caching.

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="cacheunaffected"></a> `cacheUnaffected?` | {boolean} | Additionally cache computation of modules that are unchanged and reference only unchanged modules. |
| <a id="maxgenerations"></a> `maxGenerations?` | {number} | Number of generations unused cache entries stay in memory cache at minimum (1 = may be removed after unused for a single compilation, ..., Infinity: kept forever). |
| <a id="type"></a> `type` | {"memory"} | In memory caching. |

***

## Interface: `ModuleOptions`

Options affecting the normal modules (`NormalModuleFactory`).

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="defaultrules"></a> `defaultRules?` | {false|""|0|"..."|RuleSetRule[]} | An array of rules applied by default for modules. |
| <a id="exprcontextcritical"></a> `exprContextCritical?` | {boolean} | Enable warnings for full dynamic dependencies. |
| <a id="exprcontextrecursive"></a> ~~`exprContextRecursive?`~~ | {boolean} | Enable recursive directory lookup for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRecursive'. **Deprecated** |
| <a id="exprcontextregexp"></a> ~~`exprContextRegExp?`~~ | {boolean|RegExp} | Sets the default regular expression for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRegExp'. **Deprecated** |
| <a id="exprcontextrequest"></a> ~~`exprContextRequest?`~~ | {string} | Set the default request for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRequest'. **Deprecated** |
| <a id="generator"></a> `generator?` | {GeneratorOptionsByModuleType} | Specify options for each generator. |
| <a id="noparse"></a> `noParse?` | {string|RegExp|(content: string) => boolean|string|RegExp|(content: string) => boolean[]} | Don't parse files matching. It's matched against the full resolved request. |
| <a id="parser"></a> `parser?` | {ParserOptionsByModuleType} | Specify options for each parser. |
| <a id="rules"></a> `rules?` | {false|""|0|"..."|RuleSetRule[]} | An array of rules applied for modules. |
| <a id="strictexportpresence"></a> ~~`strictExportPresence?`~~ | {boolean} | Emit errors instead of warnings when imported names don't exist in imported module. Deprecated: This option has moved to 'module.parser.javascript.strictExportPresence'. **Deprecated** |
| <a id="strictthiscontextonimports"></a> ~~`strictThisContextOnImports?`~~ | {boolean} | Handle the this context correctly according to the spec for namespace objects. Deprecated: This option has moved to 'module.parser.javascript.strictThisContextOnImports'. **Deprecated** |
| <a id="unknowncontextcritical"></a> ~~`unknownContextCritical?`~~ | {boolean} | Enable warnings when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextCritical'. **Deprecated** |
| <a id="unknowncontextrecursive"></a> ~~`unknownContextRecursive?`~~ | {boolean} | Enable recursive directory lookup when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRecursive'. **Deprecated** |
| <a id="unknowncontextregexp"></a> ~~`unknownContextRegExp?`~~ | {boolean|RegExp} | Sets the regular expression when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRegExp'. **Deprecated** |
| <a id="unknowncontextrequest"></a> ~~`unknownContextRequest?`~~ | {string} | Sets the request when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRequest'. **Deprecated** |
| <a id="unsafecache"></a> `unsafeCache?` | {boolean|(module: Module) => boolean} | Cache the resolving of module requests. |
| <a id="wrappedcontextcritical"></a> ~~`wrappedContextCritical?`~~ | {boolean} | Enable warnings for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextCritical'. **Deprecated** |
| <a id="wrappedcontextrecursive"></a> ~~`wrappedContextRecursive?`~~ | {boolean} | Enable recursive directory lookup for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRecursive'. **Deprecated** |
| <a id="wrappedcontextregexp"></a> ~~`wrappedContextRegExp?`~~ | {RegExp} | Set the inner regular expression for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRegExp'. **Deprecated** |

***

## Interface: `MultiCompilerOptions`

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="parallelism"></a> `parallelism?` | {number} | how many Compilers are allows to run at the same time in parallel |

***

## Interface: `ObjectDeserializerContext`

### Properties

| Property | Type |
| ------ | ------ |
| <a id="read"></a> `read` | {() => any} |
| <a id="setcircularreference"></a> `setCircularReference` | {(value: ReferenceableItem) => void} |

***

## Interface: `ObjectSerializerContext`

### Properties

| Property | Type |
| ------ | ------ |
| <a id="rollback"></a> `rollback` | {(snapshot: ObjectSerializerSnapshot) => void} |
| <a id="setcircularreference"></a> `setCircularReference` | {(value: ReferenceableItem) => void} |
| <a id="snapshot"></a> `snapshot` | {() => ObjectSerializerSnapshot} |
| <a id="write"></a> `write` | {(value?: any) => void} |
| <a id="writelazy"></a> `writeLazy?` | {(item?: any) => void} |
| <a id="writeseparate"></a> `writeSeparate?` | {(item: any, obj?: LazyOptions) => LazyFunction<any, any, any, LazyOptions>} |

***

## Interface: `OutputFileSystem`

### Properties

| Property | Type |
| ------ | ------ |
| <a id="createreadstream"></a> `createReadStream?` | {(path: PathLikeFs, options?: "ascii"|"utf8"|"utf-8"|"utf16le"|"utf-16le"|"ucs2"|"ucs-2"|"base64"|"base64url"|"latin1"|"binary"|"hex"|ReadStreamOptions) => ReadableStream} |
| <a id="dirname"></a> `dirname?` | {(dirname: string) => string} |
| <a id="join"></a> `join?` | {(path1: string, path2: string) => string} |
| <a id="lstat"></a> `lstat?` | {LStatFs} |
| <a id="mkdir"></a> `mkdir` | {Mkdir} |
| <a id="readdir"></a> `readdir?` | {ReaddirFs} |
| <a id="readfile"></a> `readFile` | {ReadFileFs} |
| <a id="relative"></a> `relative?` | {(from: string, to: string) => string} |
| <a id="rmdir"></a> `rmdir?` | {(file: PathLikeFs, callback: (err: ErrnoException) => void) => void} |
| <a id="stat"></a> `stat` | {StatFs} |
| <a id="unlink"></a> `unlink?` | {(pathLike: PathLikeFs, callback: (err: ErrnoException) => void) => void} |
| <a id="writefile"></a> `writeFile` | {WriteFile} |

***

## Interface: `ParserOptionsByModuleTypeKnown`

Specify options for each parser.

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="asset"></a> `asset?` | {AssetParserOptions} | Parser options for asset modules. |
| <a id="assetbytes"></a> `asset/bytes?` | {EmptyParserOptions} | No parser options are supported for this module type. |
| <a id="assetinline"></a> `asset/inline?` | {EmptyParserOptions} | No parser options are supported for this module type. |
| <a id="assetresource"></a> `asset/resource?` | {EmptyParserOptions} | No parser options are supported for this module type. |
| <a id="assetsource"></a> `asset/source?` | {EmptyParserOptions} | No parser options are supported for this module type. |
| <a id="css"></a> `css?` | {CssParserOptions} | Parser options for css modules. |
| <a id="cssauto"></a> `css/auto?` | {CssModuleParserOptions} | Parser options for css/module modules. |
| <a id="cssglobal"></a> `css/global?` | {CssModuleParserOptions} | Parser options for css/module modules. |
| <a id="cssmodule"></a> `css/module?` | {CssModuleParserOptions} | Parser options for css/module modules. |
| <a id="javascript"></a> `javascript?` | {JavascriptParserOptions} | Parser options for javascript modules. |
| <a id="javascriptauto"></a> `javascript/auto?` | {JavascriptParserOptions} | Parser options for javascript modules. |
| <a id="javascriptdynamic"></a> `javascript/dynamic?` | {JavascriptParserOptions} | Parser options for javascript modules. |
| <a id="javascriptesm"></a> `javascript/esm?` | {JavascriptParserOptions} | Parser options for javascript modules. |
| <a id="json"></a> `json?` | {JsonParserOptions} | Parser options for JSON modules. |

***

## Interface: `PathData`

### Properties

| Property | Type |
| ------ | ------ |
| <a id="basename"></a> `basename?` | {string} |
| <a id="chunk"></a> `chunk?` | {Chunk|ChunkPathData} |
| <a id="chunkgraph"></a> `chunkGraph?` | {ChunkGraph} |
| <a id="contenthash"></a> `contentHash?` | {string} |
| <a id="contenthashtype"></a> `contentHashType?` | {string} |
| <a id="contenthashwithlength"></a> `contentHashWithLength?` | {(length: number) => string} |
| <a id="filename"></a> `filename?` | {string} |
| <a id="hash"></a> `hash?` | {string} |
| <a id="hashwithlength"></a> `hashWithLength?` | {(length: number) => string} |
| <a id="module"></a> `module?` | {Module|ModulePathData} |
| <a id="nochunkhash"></a> `noChunkHash?` | {boolean} |
| <a id="prepareid"></a> `prepareId?` | {(id: string|number) => string|number} |
| <a id="query"></a> `query?` | {string} |
| <a id="runtime"></a> `runtime?` | {RuntimeSpec} |
| <a id="url"></a> `url?` | {string} |

***

## Interface: `PitchLoaderDefinitionFunction(this, remainingRequest, previousRequest, data)`

### Type Parameters

* `OptionsType` = {object}
* `ContextAdditions` = {object}

* `this` {NormalModuleLoaderContext<OptionsType>&LoaderRunnerLoaderContext<OptionsType>&LoaderPluginLoaderContext&HotModuleReplacementPluginLoaderContext&ContextAdditions}
* `remainingRequest` {string}
* `previousRequest` {string}
* `data` {object}
* Returns: {string|void|Buffer<ArrayBufferLike>|Promise<string|Buffer<ArrayBufferLike>>}

***

## Interface: `Problem`

### Properties

| Property | Type |
| ------ | ------ |
| <a id="argument"></a> `argument` | {string} |
| <a id="expected"></a> `expected?` | {string} |
| <a id="index"></a> `index?` | {number} |
| <a id="path"></a> `path` | {string} |
| <a id="type"></a> `type` | {ProblemType} |
| <a id="value"></a> `value?` | {string|number|boolean|RegExp} |

***

## Interface: `RawLoaderDefinitionFunction(this, content[, sourceMap][, additionalData])`

### Type Parameters

* `OptionsType` = {object}
* `ContextAdditions` = {object}

* `this` {NormalModuleLoaderContext<OptionsType>&LoaderRunnerLoaderContext<OptionsType>&LoaderPluginLoaderContext&HotModuleReplacementPluginLoaderContext&ContextAdditions}
* `content` {Buffer}
* `sourceMap` {string|RawSourceMap}
* `additionalData` {AdditionalData}
* Returns: {string|void|Buffer<ArrayBufferLike>|Promise<string|Buffer<ArrayBufferLike>>}

***

## Interface: `RenderManifestOptions`

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="chunk"></a> `chunk` | {Chunk} | the chunk used to render |
| <a id="chunkgraph"></a> `chunkGraph` | {ChunkGraph} | - |
| <a id="codegenerationresults"></a> `codeGenerationResults` | {CodeGenerationResults} | - |
| <a id="dependencytemplates"></a> `dependencyTemplates` | {DependencyTemplates} | - |
| <a id="fullhash"></a> `fullHash` | {string} | - |
| <a id="hash"></a> `hash` | {string} | - |
| <a id="modulegraph"></a> `moduleGraph` | {ModuleGraph} | - |
| <a id="moduletemplates"></a> `moduleTemplates` | {{ javascript: ModuleTemplate }} | - |
| `moduleTemplates.javascript` | {ModuleTemplate} | - |
| <a id="outputoptions"></a> `outputOptions` | {OutputNormalizedWithDefaults} | - |
| <a id="runtimetemplate"></a> `runtimeTemplate` | {RuntimeTemplate} | - |

***

## Interface: `ResolveData`

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="attributes"></a> `attributes?` | {ImportAttributes} | - |
| <a id="cacheable"></a> `cacheable` | {boolean} | allow to use the unsafe cache |
| <a id="context"></a> `context` | {string} | - |
| <a id="contextdependencies"></a> `contextDependencies` | {LazySet<string>} | - |
| <a id="contextinfo"></a> `contextInfo` | {ModuleFactoryCreateDataContextInfo} | - |
| <a id="createdata"></a> `createData` | {Partial<NormalModuleCreateData&{ settings: ModuleSettings }>} | - |
| <a id="dependencies"></a> `dependencies` | {ModuleDependency[]} | - |
| <a id="dependencytype"></a> `dependencyType` | {string} | - |
| <a id="filedependencies"></a> `fileDependencies` | {LazySet<string>} | - |
| <a id="ignoredmodule"></a> `ignoredModule?` | {Module} | - |
| <a id="missingdependencies"></a> `missingDependencies` | {LazySet<string>} | - |
| <a id="request"></a> `request` | {string} | - |
| <a id="resolveoptions"></a> `resolveOptions?` | {ResolveOptions} | - |

***

## Interface: `ResolveOptions`

Options object for resolving requests.

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="alias"></a> `alias?` | {{ alias: string|false|string[]; name: string; onlyModule: boolean }[]|{ [index: string]: string|false|string[] }} | Redirect module requests. |
| <a id="aliasfields"></a> `aliasFields?` | {string|string[][]} | Fields in the description file (usually package.json) which are used to redirect requests inside the module. |
| <a id="bydependency"></a> `byDependency?` | {{ [index: string]: ResolveOptions }} | Extra resolve options per dependency category. Typical categories are "commonjs", "amd", "esm". |
| <a id="cache"></a> `cache?` | {boolean} | Enable caching of successfully resolved requests (cache entries are revalidated). |
| <a id="cachepredicate"></a> `cachePredicate?` | {(request: ResolveRequest) => boolean} | Predicate function to decide which requests should be cached. |
| <a id="cachewithcontext"></a> `cacheWithContext?` | {boolean} | Include the context information in the cache identifier when caching. |
| <a id="conditionnames"></a> `conditionNames?` | {string[]} | Condition names for exports field entry point. |
| <a id="descriptionfiles"></a> `descriptionFiles?` | {string[]} | Filenames used to find a description file (like a package.json). |
| <a id="enforceextension"></a> `enforceExtension?` | {boolean} | Enforce the resolver to use one of the extensions from the extensions option (User must specify requests without extension). |
| <a id="exportsfields"></a> `exportsFields?` | {string[]} | Field names from the description file (usually package.json) which are used to provide entry points of a package. |
| <a id="extensionalias"></a> `extensionAlias?` | {{ [index: string]: string|string[] }} | An object which maps extension to extension aliases. |
| <a id="extensions"></a> `extensions?` | {string[]} | Extensions added to the request when trying to find the file. |
| <a id="fallback"></a> `fallback?` | {{ alias: string|false|string[]; name: string; onlyModule: boolean }[]|{ [index: string]: string|false|string[] }} | Redirect module requests when normal resolving fails. |
| <a id="filesystem"></a> `fileSystem?` | {InputFileSystem} | Filesystem for the resolver. |
| <a id="fullyspecified"></a> `fullySpecified?` | {boolean} | Treats the request specified by the user as fully specified, meaning no extensions are added and the mainFiles in directories are not resolved (This doesn't affect requests from mainFields, aliasFields or aliases). |
| <a id="importsfields"></a> `importsFields?` | {string[]} | Field names from the description file (usually package.json) which are used to provide internal request of a package (requests starting with # are considered as internal). |
| <a id="mainfields"></a> `mainFields?` | {string|string[][]} | Field names from the description file (package.json) which are used to find the default entry point. |
| <a id="mainfiles"></a> `mainFiles?` | {string[]} | Filenames used to find the default entry point if there is no description file or main field. |
| <a id="modules"></a> `modules?` | {string[]} | Folder names or directory paths where to find modules. |
| <a id="plugins"></a> `plugins?` | {false|""|0|"..."|{ [index: string]: any }|(this: Resolver, arg1: Resolver) => void[]} | Plugins for the resolver. |
| <a id="preferabsolute"></a> `preferAbsolute?` | {boolean} | Prefer to resolve server-relative URLs (starting with '/') as absolute paths before falling back to resolve in 'resolve.roots'. |
| <a id="preferrelative"></a> `preferRelative?` | {boolean} | Prefer to resolve module requests as relative request and fallback to resolving as module. |
| <a id="resolver"></a> `resolver?` | {Resolver} | Custom resolver. |
| <a id="restrictions"></a> `restrictions?` | {string|RegExp[]} | A list of resolve restrictions. Resolve results must fulfill all of these restrictions to resolve successfully. Other resolve paths are taken when restrictions are not met. |
| <a id="roots"></a> `roots?` | {string[]} | A list of directories in which requests that are server-relative URLs (starting with '/') are resolved. |
| <a id="symlinks"></a> `symlinks?` | {boolean} | Enable resolving symlinks to the original location. |
| <a id="tsconfig"></a> `tsconfig?` | {string|boolean|{ configFile: string; references: string }} | TypeScript config for paths mapping. Can be `false` (disabled), `true` (use default `tsconfig.json`), a string path to `tsconfig.json`, or an object with `configFile` and `references` options. |
| <a id="unsafecache"></a> `unsafeCache?` | {boolean|{ [index: string]: any }} | Enable caching of successfully resolved requests (cache entries are not revalidated). |
| <a id="usesyncfilesystemcalls"></a> `useSyncFileSystemCalls?` | {boolean} | Use synchronous filesystem calls for the resolver. |

***

## Interface: `RuleSetRule`

A rule description with conditions and effects for modules.

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="assert"></a> `assert?` | {{ [index: string]: RuleSetConditionOrConditions }} | Match on import assertions of the dependency. |
| <a id="compiler"></a> `compiler?` | {string|RegExp|RuleSetLogicalConditions|(value: string) => boolean|RuleSetCondition[]} | Match the child compiler name. |
| <a id="dependency"></a> `dependency?` | {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|(value: string) => boolean} | Match dependency type. |
| <a id="descriptiondata"></a> `descriptionData?` | {{ [index: string]: RuleSetConditionOrConditions }} | Match values of properties in the description file (usually package.json). |
| <a id="enforce"></a> `enforce?` | {"pre"|"post"} | Enforce this rule as pre or post step. |
| <a id="exclude"></a> `exclude?` | {string|RegExp|RuleSetLogicalConditionsAbsolute|(value: string) => boolean|RuleSetConditionAbsolute[]} | Shortcut for resource.exclude. |
| <a id="extractsourcemap"></a> `extractSourceMap?` | {boolean} | Enable/Disable extracting source map. |
| <a id="generator"></a> `generator?` | {{ [index: string]: any }} | The options for the module generator. |
| <a id="include"></a> `include?` | {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|(value: string) => boolean} | Shortcut for resource.include. |
| <a id="issuer"></a> `issuer?` | {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|(value: string) => boolean} | Match the issuer of the module (The module pointing to this module). |
| <a id="issuerlayer"></a> `issuerLayer?` | {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|(value: string) => boolean} | Match layer of the issuer of this module (The module pointing to this module). |
| <a id="layer"></a> `layer?` | {string} | Specifies the layer in which the module should be placed in. |
| <a id="loader"></a> `loader?` | {string} | Shortcut for use.loader. |
| <a id="mimetype"></a> `mimetype?` | {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|(value: string) => boolean} | Match module mimetype when load from Data URI. |
| <a id="oneof"></a> `oneOf?` | {false|""|0|RuleSetRule[]} | Only execute the first matching rule in this array. |
| <a id="options"></a> `options?` | {string|{ [index: string]: any }} | Shortcut for use.options. |
| <a id="parser"></a> `parser?` | {{ [index: string]: any }} | Options for parsing. |
| <a id="realresource"></a> `realResource?` | {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|(value: string) => boolean} | Match the real resource path of the module. |
| <a id="resolve"></a> `resolve?` | {ResolveOptions} | Options for the resolver. |
| <a id="resource"></a> `resource?` | {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|(value: string) => boolean} | Match the resource path of the module. |
| <a id="resourcefragment"></a> `resourceFragment?` | {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|(value: string) => boolean} | Match the resource fragment of the module. |
| <a id="resourcequery"></a> `resourceQuery?` | {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|(value: string) => boolean} | Match the resource query of the module. |
| <a id="rules"></a> `rules?` | {false|""|0|RuleSetRule[]} | Match and execute these rules when this rule is matched. |
| <a id="scheme"></a> `scheme?` | {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|(value: string) => boolean} | Match module scheme. |
| <a id="sideeffects"></a> `sideEffects?` | {boolean} | Flags a module as with or without side effects. |
| <a id="test"></a> `test?` | {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|(value: string) => boolean} | Shortcut for resource.test. |
| <a id="type"></a> `type?` | {string} | Module type to use for the module. |
| <a id="use"></a> `use?` | {string|RuleSetUseFunction|string|false|0|RuleSetUseFunction|{ ident: string; loader: string; options: string|{ [index: string]: any } }[]|{ ident: string; loader: string; options: string|{ [index: string]: any } }} | Modifiers applied to the module when rule is matched. |
| <a id="with"></a> `with?` | {{ [index: string]: RuleSetConditionOrConditions }} | Match on import attributes of the dependency. |

***

## Interface: `StatsOptions`

Stats options object.

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="all"></a> `all?` | {boolean} | Fallback value for stats options when an option is not defined (has precedence over local webpack defaults). |
| <a id="assets"></a> `assets?` | {boolean} | Add assets information. |
| <a id="assetssort"></a> `assetsSort?` | {string|false} | Sort the assets by that field. |
| <a id="assetsspace"></a> `assetsSpace?` | {number} | Space to display assets (groups will be collapsed to fit this space). |
| <a id="builtat"></a> `builtAt?` | {boolean} | Add built at time information. |
| <a id="cached"></a> ~~`cached?`~~ | {boolean} | Add information about cached (not built) modules (deprecated: use 'cachedModules' instead). **Deprecated** |
| <a id="cachedassets"></a> `cachedAssets?` | {boolean} | Show cached assets (setting this to `false` only shows emitted files). |
| <a id="cachedmodules"></a> `cachedModules?` | {boolean} | Add information about cached (not built) modules. |
| <a id="children"></a> `children?` | {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions|StatsValue[]} | Add children information. |
| <a id="chunkgroupauxiliary"></a> `chunkGroupAuxiliary?` | {boolean} | Display auxiliary assets in chunk groups. |
| <a id="chunkgroupchildren"></a> `chunkGroupChildren?` | {boolean} | Display children of chunk groups. |
| <a id="chunkgroupmaxassets"></a> `chunkGroupMaxAssets?` | {number} | Limit of assets displayed in chunk groups. |
| <a id="chunkgroups"></a> `chunkGroups?` | {boolean} | Display all chunk groups with the corresponding bundles. |
| <a id="chunkmodules"></a> `chunkModules?` | {boolean} | Add built modules information to chunk information. |
| <a id="chunkmodulesspace"></a> `chunkModulesSpace?` | {number} | Space to display chunk modules (groups will be collapsed to fit this space, value is in number of modules/group). |
| <a id="chunkorigins"></a> `chunkOrigins?` | {boolean} | Add the origins of chunks and chunk merging info. |
| <a id="chunkrelations"></a> `chunkRelations?` | {boolean} | Add information about parent, children and sibling chunks to chunk information. |
| <a id="chunks"></a> `chunks?` | {boolean} | Add chunk information. |
| <a id="chunkssort"></a> `chunksSort?` | {string|false} | Sort the chunks by that field. |
| <a id="colors"></a> `colors?` | {boolean|{ bold: string; cyan: string; green: string; ... }} | Enables/Disables colorful output. |
| <a id="context"></a> `context?` | {string} | Context directory for request shortening. |
| <a id="dependentmodules"></a> `dependentModules?` | {boolean} | Show chunk modules that are dependencies of other modules of the chunk. |
| <a id="depth"></a> `depth?` | {boolean} | Add module depth in module graph. |
| <a id="entrypoints"></a> `entrypoints?` | {boolean|"auto"} | Display the entry points with the corresponding bundles. |
| <a id="env"></a> `env?` | {boolean} | Add --env information. |
| <a id="errorcause"></a> `errorCause?` | {boolean|"auto"} | Add cause to errors. |
| <a id="errordetails"></a> `errorDetails?` | {boolean|"auto"} | Add details to errors (like resolving log). |
| <a id="errorerrors"></a> `errorErrors?` | {boolean|"auto"} | Add nested errors to errors (like in AggregateError). |
| <a id="errors"></a> `errors?` | {boolean} | Add errors. |
| <a id="errorscount"></a> `errorsCount?` | {boolean} | Add errors count. |
| <a id="errorsspace"></a> `errorsSpace?` | {number} | Space to display errors (value is in number of lines). |
| <a id="errorstack"></a> `errorStack?` | {boolean} | Add internal stack trace to errors. |
| <a id="exclude"></a> `exclude?` | {string|boolean|RegExp|ModuleFilterItemTypes[]|(name: string, module: StatsModule, type: "module"|"chunk"|"root-of-chunk"|"nested") => boolean} | Please use excludeModules instead. |
| <a id="excludeassets"></a> `excludeAssets?` | {string|RegExp|AssetFilterItemTypes[]|(name: string, asset: StatsAsset) => boolean} | Suppress assets that match the specified filters. Filters can be Strings, RegExps or Functions. |
| <a id="excludemodules"></a> `excludeModules?` | {string|boolean|RegExp|ModuleFilterItemTypes[]|(name: string, module: StatsModule, type: "module"|"chunk"|"root-of-chunk"|"nested") => boolean} | Suppress modules that match the specified filters. Filters can be Strings, RegExps, Booleans or Functions. |
| <a id="groupassetsbychunk"></a> `groupAssetsByChunk?` | {boolean} | Group assets by how their are related to chunks. |
| <a id="groupassetsbyemitstatus"></a> `groupAssetsByEmitStatus?` | {boolean} | Group assets by their status (emitted, compared for emit or cached). |
| <a id="groupassetsbyextension"></a> `groupAssetsByExtension?` | {boolean} | Group assets by their extension. |
| <a id="groupassetsbyinfo"></a> `groupAssetsByInfo?` | {boolean} | Group assets by their asset info (immutable, development, hotModuleReplacement, etc). |
| <a id="groupassetsbypath"></a> `groupAssetsByPath?` | {boolean} | Group assets by their path. |
| <a id="groupmodulesbyattributes"></a> `groupModulesByAttributes?` | {boolean} | Group modules by their attributes (errors, warnings, assets, optional, orphan, or dependent). |
| <a id="groupmodulesbycachestatus"></a> `groupModulesByCacheStatus?` | {boolean} | Group modules by their status (cached or built and cacheable). |
| <a id="groupmodulesbyextension"></a> `groupModulesByExtension?` | {boolean} | Group modules by their extension. |
| <a id="groupmodulesbylayer"></a> `groupModulesByLayer?` | {boolean} | Group modules by their layer. |
| <a id="groupmodulesbypath"></a> `groupModulesByPath?` | {boolean} | Group modules by their path. |
| <a id="groupmodulesbytype"></a> `groupModulesByType?` | {boolean} | Group modules by their type. |
| <a id="groupreasonsbyorigin"></a> `groupReasonsByOrigin?` | {boolean} | Group reasons by their origin module. |
| <a id="hash"></a> `hash?` | {boolean} | Add the hash of the compilation. |
| <a id="ids"></a> `ids?` | {boolean} | Add ids. |
| <a id="logging"></a> `logging?` | {boolean|"error"|"warn"|"info"|"log"|"verbose"|"none"} | Add logging output. |
| <a id="loggingdebug"></a> `loggingDebug?` | {string|boolean|RegExp|FilterItemTypes[]|(value: string) => boolean} | Include debug logging of specified loggers (i. e. for plugins or loaders). Filters can be Strings, RegExps or Functions. |
| <a id="loggingtrace"></a> `loggingTrace?` | {boolean} | Add stack traces to logging output. |
| <a id="moduleassets"></a> `moduleAssets?` | {boolean} | Add information about assets inside modules. |
| <a id="modules"></a> `modules?` | {boolean} | Add built modules information. |
| <a id="modulessort"></a> `modulesSort?` | {string|false} | Sort the modules by that field. |
| <a id="modulesspace"></a> `modulesSpace?` | {number} | Space to display modules (groups will be collapsed to fit this space, value is in number of modules/groups). |
| <a id="moduletrace"></a> `moduleTrace?` | {boolean} | Add dependencies and origin of warnings/errors. |
| <a id="nestedmodules"></a> `nestedModules?` | {boolean} | Add information about modules nested in other modules (like with module concatenation). |
| <a id="nestedmodulesspace"></a> `nestedModulesSpace?` | {number} | Space to display modules nested within other modules (groups will be collapsed to fit this space, value is in number of modules/group). |
| <a id="optimizationbailout"></a> `optimizationBailout?` | {boolean} | Show reasons why optimization bailed out for modules. |
| <a id="orphanmodules"></a> `orphanModules?` | {boolean} | Add information about orphan modules. |
| <a id="outputpath"></a> `outputPath?` | {boolean} | Add output path information. |
| <a id="performance"></a> `performance?` | {boolean} | Add performance hint flags. |
| <a id="preset"></a> `preset?` | {string|boolean} | Preset for the default values. |
| <a id="providedexports"></a> `providedExports?` | {boolean} | Show exports provided by modules. |
| <a id="publicpath"></a> `publicPath?` | {boolean} | Add public path information. |
| <a id="reasons"></a> `reasons?` | {boolean} | Add information about the reasons why modules are included. |
| <a id="reasonsspace"></a> `reasonsSpace?` | {number} | Space to display reasons (groups will be collapsed to fit this space). |
| <a id="relatedassets"></a> `relatedAssets?` | {boolean} | Add information about assets that are related to other assets (like SourceMaps for assets). |
| <a id="runtime"></a> ~~`runtime?`~~ | {boolean} | Add information about runtime modules (deprecated: use 'runtimeModules' instead). **Deprecated** |
| <a id="runtimemodules"></a> `runtimeModules?` | {boolean} | Add information about runtime modules. |
| <a id="source"></a> `source?` | {boolean} | Add the source code of modules. |
| <a id="timings"></a> `timings?` | {boolean} | Add timing information. |
| <a id="usedexports"></a> `usedExports?` | {boolean} | Show exports used by modules. |
| <a id="version"></a> `version?` | {boolean} | Add webpack version information. |
| <a id="warnings"></a> `warnings?` | {boolean} | Add warnings. |
| <a id="warningscount"></a> `warningsCount?` | {boolean} | Add warnings count. |
| <a id="warningsfilter"></a> `warningsFilter?` | {string|RegExp|WarningFilterItemTypes[]|(warning: StatsError, warningString: string) => boolean} | Suppress listing warnings that match the specified filters (they will still be counted). Filters can be Strings, RegExps or Functions. |
| <a id="warningsspace"></a> `warningsSpace?` | {number} | Space to display warnings (value is in number of lines). |

***

## Interface: `WebpackOptionsNormalized`

Normalized webpack options object.

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="amd"></a> `amd?` | {false|{ [index: string]: any }} | Set the value of `require.amd` and `define.amd`. Or disable AMD support. |
| <a id="bail"></a> `bail?` | {boolean} | Report the first error as a hard error instead of tolerating it. |
| <a id="cache"></a> `cache` | {CacheOptionsNormalized} | Cache generated modules and chunks to improve performance for multiple incremental builds. |
| <a id="context"></a> `context?` | {string} | The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory. |
| <a id="dependencies"></a> `dependencies?` | {string[]} | References to other configurations to depend on. |
| <a id="devserver"></a> `devServer?` | {false|{ [index: string]: any }} | Options for the webpack-dev-server. |
| <a id="devtool"></a> `devtool?` | {string|false|{ type: "css"|"javascript"|"all"; use: RawDevTool }[]} | A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map). |
| <a id="dotenv"></a> `dotenv?` | {boolean|DotenvPluginOptions} | Enable and configure the Dotenv plugin to load environment variables from .env files. |
| <a id="entry"></a> `entry` | {EntryNormalized} | The entry point(s) of the compilation. |
| <a id="experiments"></a> `experiments` | {ExperimentsNormalized} | Enables/Disables experiments (experimental features with relax SemVer compatibility). |
| <a id="externals"></a> `externals` | {Externals} | Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`. |
| <a id="externalspresets"></a> `externalsPresets` | {ExternalsPresets} | Enable presets of externals for specific targets. |
| <a id="externalstype"></a> `externalsType?` | {"asset"|"module"|"css-import"|"css-url"|"global"|"import"|"commonjs"|"jsonp"|"promise"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"} | Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value). |
| <a id="ignorewarnings"></a> `ignoreWarnings?` | {(warning: Error, compilation: Compilation) => boolean[]} | Ignore specific warnings. |
| <a id="infrastructurelogging"></a> `infrastructureLogging` | {InfrastructureLogging} | Options for infrastructure level logging. |
| <a id="loader"></a> `loader?` | {Loader} | Custom values available in the loader context. |
| <a id="mode"></a> `mode?` | {"development"|"none"|"production"} | Enable production optimizations or development hints. |
| <a id="module"></a> `module` | {ModuleOptionsNormalized} | Options affecting the normal modules (`NormalModuleFactory`). |
| <a id="name"></a> `name?` | {string} | Name of the configuration. Used when loading multiple configurations. |
| <a id="node"></a> `node` | {Node} | Include polyfills or mocks for various node stuff. |
| <a id="optimization"></a> `optimization` | {OptimizationNormalized} | Enables/Disables integrated optimizations. |
| <a id="output"></a> `output` | {OutputNormalized} | Normalized options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk. |
| <a id="parallelism"></a> `parallelism?` | {number} | The number of parallel processed modules in the compilation. |
| <a id="performance"></a> `performance?` | {false|PerformanceOptions} | Configuration for web performance recommendations. |
| <a id="plugins"></a> `plugins` | {WebpackPluginInstance|(this: Compiler, compiler: Compiler) => void[]} | Add additional plugins to the compiler. |
| <a id="profile"></a> `profile?` | {boolean} | Capture timing information for each module. |
| <a id="recordsinputpath"></a> `recordsInputPath?` | {string|false} | Store compiler state to a json file. |
| <a id="recordsoutputpath"></a> `recordsOutputPath?` | {string|false} | Load compiler state from a json file. |
| <a id="resolve"></a> `resolve` | {ResolveOptions} | Options for the resolver. |
| <a id="resolveloader"></a> `resolveLoader` | {ResolveOptions} | Options for the resolver when resolving loaders. |
| <a id="snapshot"></a> `snapshot` | {SnapshotOptionsWebpackOptions} | Options affecting how file system snapshots are created and validated. |
| <a id="stats"></a> `stats` | {StatsValue} | Stats options object or preset name. |
| <a id="target"></a> `target?` | {string|false|string[]} | Environment to build for. An array of environments to build for all of them when possible. |
| <a id="validate"></a> `validate?` | {boolean} | Enable validation of webpack configuration. Defaults to true in development mode. In production mode, defaults to true unless futureDefaults is enabled, then defaults to false. |
| <a id="watch"></a> `watch?` | {boolean} | Enter watch mode, which rebuilds on file change. |
| <a id="watchoptions"></a> `watchOptions` | {WatchOptions} | Options for the watcher. |

***

## Interface: `WebpackPluginInstance`

Plugin instance.

### Indexable

> \[`index`: {string}\]: {any}

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="apply"></a> `apply` | {(compiler: Compiler) => void} | The run point of the plugin, required method. |

***

## Type: `AssetInfo`

> **AssetInfo** = {KnownAssetInfo&Record<string, any>}

***

## Type: `Entry`

> **Entry** = {string|() => string|EntryObject|string[]|Promise<EntryStatic>|EntryObject|string[]}

***

## Type: `EntryNormalized`

> **EntryNormalized** = {() => Promise<EntryStaticNormalized>|EntryStaticNormalized}

***

## Type: `EntryOptions`

> **EntryOptions** = {{ name: string }&Omit<EntryDescriptionNormalized, "import">}

### Type Declaration

* `name` {string}

***

## Type: `ExternalItem`

> **ExternalItem** = {string|RegExp|ExternalItemObjectKnown&ExternalItemObjectUnknown|(data: ExternalItemFunctionData, callback: (err?: null|Error, result?: string|boolean|string[]|{ [index: string]: any }) => void) => void|(data: ExternalItemFunctionData) => Promise<ExternalItemValue>}

***

## Type: `ExternalItemFunction`

> **ExternalItemFunction** = {(data: ExternalItemFunctionData, callback: (err?: null|Error, result?: string|boolean|string[]|{ [index: string]: any }) => void) => void|(data: ExternalItemFunctionData) => Promise<ExternalItemValue>}

***

## Type: `ExternalItemFunctionCallback`

> **ExternalItemFunctionCallback** = {(data: ExternalItemFunctionData, callback: (err?: null|Error, result?: string|boolean|string[]|{ [index: string]: any }) => void) => void}

* `data` {ExternalItemFunctionData}
* `callback` {(err?: null|Error, result?: string|boolean|string[]|{ [index: string]: any }) => void}
* Returns: {void}

***

## Type: `ExternalItemFunctionDataGetResolve`

> **ExternalItemFunctionDataGetResolve** = {(options?: ResolveOptions) => (context: string, request: string, callback: (err?: null|Error, result?: string|false, resolveRequest?: ResolveRequest) => void) => void|(context: string, request: string) => Promise<string>}

* `options` {ResolveOptions}
* Returns: {(context: string, request: string, callback: (err?: null|Error, result?: string|false, resolveRequest?: ResolveRequest) => void) => void|(context: string, request: string) => Promise<string>}

***

## Type: `ExternalItemFunctionDataGetResolveCallbackResult`

> **ExternalItemFunctionDataGetResolveCallbackResult** = {(context: string, request: string, callback: (err?: null|Error, result?: string|false, resolveRequest?: ResolveRequest) => void) => void}

* `context` {string}
* `request` {string}
* `callback` {(err?: null|Error, result?: string|false, resolveRequest?: ResolveRequest) => void}
* Returns: {void}

***

## Type: `ExternalItemFunctionDataGetResolveResult`

> **ExternalItemFunctionDataGetResolveResult** = {(context: string, request: string) => Promise<string>}

* `context` {string}
* `request` {string}
* Returns: {Promise<string>}

***

## Type: `ExternalItemFunctionPromise`

> **ExternalItemFunctionPromise** = {(data: ExternalItemFunctionData) => Promise<ExternalItemValue>}

* `data` {ExternalItemFunctionData}
* Returns: {Promise<ExternalItemValue>}

***

## Type: `ExternalItemValue`

> **ExternalItemValue** = {string|boolean|string[]|{ [index: string]: any }}

***

## Type: `Externals`

> **Externals** = {string|RegExp|ExternalItemObjectKnown&ExternalItemObjectUnknown|(data: ExternalItemFunctionData, callback: (err?: null|Error, result?: string|boolean|string[]|{ [index: string]: any }) => void) => void|(data: ExternalItemFunctionData) => Promise<ExternalItemValue>|ExternalItem[]}

***

## Type: `LoaderContext`

> **LoaderContext**\<`OptionsType`\> = {NormalModuleLoaderContext<OptionsType>&LoaderRunnerLoaderContext<OptionsType>&LoaderPluginLoaderContext&HotModuleReplacementPluginLoaderContext}

### Type Parameters

* `OptionsType`

***

## Type: `LoaderDefinition`

> **LoaderDefinition**\<`OptionsType`, `ContextAdditions`\> = {LoaderDefinitionFunction<OptionsType, ContextAdditions>&{ pitch: PitchLoaderDefinitionFunction<OptionsType, ContextAdditions>; raw: false }}

### Type Declaration

* `pitch` {PitchLoaderDefinitionFunction<OptionsType, ContextAdditions>}
* `raw` {false}

### Type Parameters

* `OptionsType` = {object}
* `ContextAdditions` = {object}

***

## Type: `MultiConfiguration`

> **MultiConfiguration** = {ReadonlyArray<Configuration>&MultiCompilerOptions}

***

## Type: `ParserState`

> **ParserState** = {ParserStateBase&Record<string, any>}

***

## Type: `RawLoaderDefinition`

> **RawLoaderDefinition**\<`OptionsType`, `ContextAdditions`\> = {RawLoaderDefinitionFunction<OptionsType, ContextAdditions>&{ pitch: PitchLoaderDefinitionFunction<OptionsType, ContextAdditions>; raw: true }}

### Type Declaration

* `pitch` {PitchLoaderDefinitionFunction<OptionsType, ContextAdditions>}
* `raw` {true}

### Type Parameters

* `OptionsType` = {object}
* `ContextAdditions` = {object}

***

## Type: `RenderManifestEntry`

> **RenderManifestEntry** = {RenderManifestEntryTemplated|RenderManifestEntryStatic}

***

## Type: `ResolvePluginInstance`

> **ResolvePluginInstance** = {{ [index: string]: any }|(this: Resolver, arg1: Resolver) => void}

### Union Members

#### Type Literal

{{ [index: string]: any }}

#### Index Signature

\[`index`: {string}\]: {any}

* `apply` {(arg0: Resolver) => void} The run point of the plugin, required method.

***

#### Function

{(this: Resolver, arg1: Resolver) => void}

***

## Type: `RuleSetCondition`

> **RuleSetCondition** = {string|RegExp|(value: string) => boolean|RuleSetLogicalConditions|RuleSetCondition[]}

***

## Type: `RuleSetConditionAbsolute`

> **RuleSetConditionAbsolute** = {string|RegExp|(value: string) => boolean|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]}

***

## Type: `RuleSetUse`

> **RuleSetUse** = {string|undefined|null|string|false|0|RuleSetUseFunction|{ ident: string; loader: string; options: string|{ [index: string]: any } }[]|RuleSetUseFunction|{ ident: string; loader: string; options: string|{ [index: string]: any } }}

### Union Members

{string}

***

{undefined|null|string|false|0|RuleSetUseFunction|{ ident: string; loader: string; options: string|{ [index: string]: any } }[]}

***

{RuleSetUseFunction}

***

#### Type Literal

{{ ident: string; loader: string; options: string|{ [index: string]: any } }}

* `ident` {string} Unique loader options identifier.
* `loader` {string} Loader name.
* `options` {string|{ [index: string]: any }} Loader options.

***

## Type: `RuleSetUseFunction`

> **RuleSetUseFunction** = {(data: EffectData) => string|RuleSetUseFunction|{ ident: string; loader: string; options: string|{ [index: string]: any } }|undefined|null|string|false|0|RuleSetUseFunction|{ ident: string; loader: string; options: string|{ [index: string]: any } }[]}

* `data` {EffectData}
* Returns: {string|RuleSetUseFunction|{ ident: string; loader: string; options: string|{ [index: string]: any } }|undefined|null|string|false|0|RuleSetUseFunction|{ ident: string; loader: string; options: string|{ [index: string]: any } }[]}

***

## Type: `RuleSetUseItem`

> **RuleSetUseItem** = {string|RuleSetUseFunction|{ ident: string; loader: string; options: string|{ [index: string]: any } }}

### Union Members

{string}

***

{RuleSetUseFunction}

***

#### Type Literal

{{ ident: string; loader: string; options: string|{ [index: string]: any } }}

* `ident` {string} Unique loader options identifier.
* `loader` {string} Loader name.
* `options` {string|{ [index: string]: any }} Loader options.

***

## Type: `StatsAsset`

> **StatsAsset** = {KnownStatsAsset&Record<string, any>}

***

## Type: `StatsChunk`

> **StatsChunk** = {KnownStatsChunk&Record<string, any>}

***

## Type: `StatsChunkGroup`

> **StatsChunkGroup** = {KnownStatsChunkGroup&Record<string, any>}

***

## Type: `StatsChunkOrigin`

> **StatsChunkOrigin** = {KnownStatsChunkOrigin&Record<string, any>}

***

## Type: `StatsCompilation`

> **StatsCompilation** = {KnownStatsCompilation&Record<string, any>}

***

## Type: `StatsError`

> **StatsError** = {KnownStatsError&Record<string, any>}

***

## Type: `StatsLogging`

> **StatsLogging** = {KnownStatsLogging&Record<string, any>}

***

## Type: `StatsLoggingEntry`

> **StatsLoggingEntry** = {KnownStatsLoggingEntry&Record<string, any>}

***

## Type: `StatsModule`

> **StatsModule** = {KnownStatsModule&Record<string, any>}

***

## Type: `StatsModuleIssuer`

> **StatsModuleIssuer** = {KnownStatsModuleIssuer&Record<string, any>}

***

## Type: `StatsModuleReason`

> **StatsModuleReason** = {KnownStatsModuleReason&Record<string, any>}

***

## Type: `StatsModuleTraceDependency`

> **StatsModuleTraceDependency** = {KnownStatsModuleTraceDependency&Record<string, any>}

***

## Type: `StatsModuleTraceItem`

> **StatsModuleTraceItem** = {KnownStatsModuleTraceItem&Record<string, any>}

***

## Type: `StatsProfile`

> **StatsProfile** = {KnownStatsProfile&Record<string, any>}

***

## Type: `TemplatePath`

> **TemplatePath** = {string|(pathData: PathData, assetInfo?: AssetInfo) => string}

***

## Type: `WebpackPluginFunction`

> **WebpackPluginFunction** = {(this: Compiler, compiler: Compiler) => void}

* `this` {Compiler}
* `compiler` {Compiler}
* Returns: {void}

***

## `UsageState`

> `const` **UsageState**: {Readonly<{ NoInfo: 2; OnlyPropertiesUsed: 1; Unknown: 3; ... }>}

***

## `validate`

> `const` **validate**: {(configuration: Configuration|MultiConfiguration) => void}

* `configuration` {Configuration|MultiConfiguration}
* Returns: {void}

***

## `validateSchema`

> `const` **validateSchema**: {(schema: Parameters<validateFunction>, options: Parameters<validateFunction>, validationConfiguration?: ValidationErrorConfiguration) => void}

* `schema` {Parameters<validateFunction>}
* `options` {Parameters<validateFunction>}
* `validationConfiguration` {ValidationErrorConfiguration}
* Returns: {void}

***

## `version`

> `const` **version**: {string}

***

## `webpack`

> `const` **webpack**: {_functionWebpack}

***

## `export=(options, callback)`

### Call Signature

* `options` {Configuration}
* `callback` {CallbackWebpackFunction_2<Stats, void>}
* Returns: {Compiler}

### Call Signature

* `options` {Configuration}
* Returns: {Compiler}

### Call Signature

* `options` {MultiConfiguration}
* `callback` {CallbackWebpackFunction_2<MultiStats, void>}
* Returns: {MultiCompiler}

### Call Signature

* `options` {MultiConfiguration}
* Returns: {MultiCompiler}
