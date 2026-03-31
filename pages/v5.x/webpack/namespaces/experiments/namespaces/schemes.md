# schemes

## Class: `HttpUriPlugin`

### Constructors

#### `new HttpUriPlugin(options)`

* `options` {HttpUriOptions}
* Returns: {HttpUriPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {HttpUriOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `VirtualUrlPlugin`

### Constructors

#### `new VirtualUrlPlugin(modules[, schemeOrOptions])`

* `modules` {VirtualModules}
* `schemeOrOptions` {string|Omit<VirtualUrlOptions, "modules">}
* Returns: {VirtualUrlPlugin}

### Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="context"></a> `context?` | `public` | {string} |
| <a id="modules"></a> `modules` | `public` | {NormalizedModules} |
| <a id="options"></a> `options` | `public` | {VirtualUrlOptions} |
| <a id="scheme"></a> `scheme` | `public` | {string} |
| <a id="default-scheme"></a> `DEFAULT_SCHEME` | `static` | {string} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### `findVirtualModuleConfigById(id)`

* `id` {string}
* Returns: {VirtualModule}

#### `getCacheVersion(version)`

* `version` {string|true|() => string}
* Returns: {string}

Get the cache version for a given version value
