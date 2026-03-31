# optimize

## Namespaces

- [InnerGraph](namespaces/InnerGraph.md)

## Class: `AggressiveMergingPlugin`

### Constructors

#### `new AggressiveMergingPlugin([options])`

* `options` {AggressiveMergingPluginOptions}
* Returns: {AggressiveMergingPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {AggressiveMergingPluginOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `AggressiveSplittingPlugin`

### Constructors

#### `new AggressiveSplittingPlugin([options])`

* `options` {AggressiveSplittingPluginOptions}
* Returns: {AggressiveSplittingPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {AggressiveSplittingPluginOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `wasChunkRecorded(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

***

## Class: `LimitChunkCountPlugin`

### Constructors

#### `new LimitChunkCountPlugin([options])`

* `options` {LimitChunkCountPluginOptions}
* Returns: {LimitChunkCountPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {LimitChunkCountPluginOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

***

## Class: `MergeDuplicateChunksPlugin`

### Constructors

#### `new MergeDuplicateChunksPlugin([options])`

* `options` {MergeDuplicateChunksPluginOptions}
* Returns: {MergeDuplicateChunksPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {MergeDuplicateChunksPluginOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

***

## Class: `MinChunkSizePlugin`

### Constructors

#### `new MinChunkSizePlugin(options)`

* `options` {MinChunkSizePluginOptions}
* Returns: {MinChunkSizePlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {MinChunkSizePluginOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `ModuleConcatenationPlugin`

### Constructors

#### `new ModuleConcatenationPlugin()`

* Returns: {ModuleConcatenationPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `RealContentHashPlugin`

### Constructors

#### `new RealContentHashPlugin(__namedParameters)`

* `__namedParameters` {RealContentHashPluginOptions}
* Returns: {RealContentHashPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {CompilationHooksRealContentHashPlugin}

***

## Class: `RuntimeChunkPlugin`

### Constructors

#### `new RuntimeChunkPlugin([options])`

* `options` {{ name: (entrypoint: { name: string }) => string }}
* Returns: {RuntimeChunkPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {{ name: string|(entrypoint: { name: string }) => string }} |
| `options.name` | {string|(entrypoint: { name: string }) => string} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `SideEffectsFlagPlugin`

### Constructors

#### `new SideEffectsFlagPlugin([analyseSource])`

* `analyseSource` {boolean}
* Returns: {SideEffectsFlagPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `moduleHasSideEffects(moduleName, flagValue, cache)`

* `moduleName` {string}
* `flagValue` {SideEffectsFlagValue}
* `cache` {Map<string, RegExp>}
* Returns: {boolean}

***

## Class: `SplitChunksPlugin`

### Constructors

#### `new SplitChunksPlugin([options])`

* `options` {OptimizationSplitChunksOptions}
* Returns: {SplitChunksPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {SplitChunksOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin
