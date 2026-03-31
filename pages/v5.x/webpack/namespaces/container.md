# container

## Class: `ContainerPlugin`

### Constructors

#### `new ContainerPlugin(options)`

* `options` {ContainerPluginOptions}
* Returns: {ContainerPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {ContainerPluginOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `ContainerReferencePlugin`

### Constructors

#### `new ContainerReferencePlugin(options)`

* `options` {ContainerReferencePluginOptions}
* Returns: {ContainerReferencePlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {ContainerReferencePluginOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `ModuleFederationPlugin`

### Constructors

#### `new ModuleFederationPlugin(options)`

* `options` {ModuleFederationPluginOptions}
* Returns: {ModuleFederationPlugin}

### Properties

| Property | Type |
| ------ | ------ |
| <a id="options"></a> `options` | {ModuleFederationPluginOptions} |

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {CompilationHooksModuleFederationPlugin}

Get the compilation hooks associated with this plugin.

***

## `scope`

> `const` **scope**: {<T>(scope: string, options: ContainerOptionsFormat<T>) => Record<string, string|string[]|T>}

* `T`
* `scope` {string}
* `options` {ContainerOptionsFormat<T>}
* Returns: {Record<string, string|string[]|T>}
