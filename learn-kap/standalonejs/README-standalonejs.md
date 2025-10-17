# Kap standalone JS library

This module implements a minimal library that allows Javascript code to load the Kap engine and run code.

## Building

To build the library, run the following from the root of the Kap source tree:

```sh
./gradlew standalonejs:jsBrowserProductionWebpack
```

Once the build has completed, the generated JS file can be found here:
`./standalonejs/build/kotlin-webpack/js/productionExecutable/standalonejs.js`

The library can be loaded by adding the following code to the HTML page:

```html

<script src="standalonejs.js"></script>
```

In addition to the JS library, the Kap standard library has to be available on the webserver in the directory
`/standard-lib`. The standard library files are located in the following directory: `array/standard-lib`. Simply copy
this directory to the webserver root.

## Creating a Kap engine

Before an engine can be created, the standard library files needs to be downloaded. An attempt to synchronously create
an engine before this is done will lead to errors once it's trying to access these files.

To wait for the files to be downloaded and then create an engine, use the function `createEngine()`. This function will
return a promise that calls the handler function once all initial work is done.

```js
standalonejs.com.dhsdevelopments.kap.standalonejs.createEngine().then(function (engine) {
    // the engine is available here
}) 
```

If it is known that the library files have already been downloaded, it is possible to create an engine synchronously:

```js
var engine = new standalonejs.com.dhsdevelopments.kap.standalonejs.EngineJsWrapper(); 
```

## Closing a Kap engine instance

Once an engine is no longer needed, use the `.close()` method to stop it.

## Evaluate expression

The simplest way to evaluate an expression is by using `.parseAndEval()`:

```js
var result = engine.parseAndEval("1 + 2 + 3");
```

## Reading data from a Kap object

The return value from `.parseAndEval()` is of type `JsKapValue` and has the following methods:

### Getting information about a value

`type()`: Return the type of the value.

`dimensions()`: Return an array of numbers indicating the dimensions of the result.

`formatted()`: Return the value formatted as a string.

`isComplex()`: Returns true if the value is a complex number.

`isReal()`: Returns true if the value is a non-complex number.

`isChar()`: Returns true if the value is a character.

`isStringValue()`: Returns true if the value is a 1-dimensional array where all elements are characters.

### Reading values from an array

`valueAt(index)`: Return the array element at `index`. The index is in row-major order.

### Value conversions

`asBigInt()`: If the argument is a real, return the integer part as a bigint.

`asDouble()`: If the argument is a real, convert it to a JS number.

`asRational()`: If the argument is a real, return the numerator and denominator as a 2-element array containing 2
bigints.

`asChar()`: If the argument is a character, return it as a string. Note that Kap stores full characters, while a JS
character is 16-bit. This means that the returned string may be 2 characters long.

`asString()`: Return the value as a string. If the value is not a valid string, `null` is returned.

## Value types

The method `.type()` returns an enum value of type `JsKapValueType`. This enum has the following members:

- `INTEGER`
- `BIGINT`
- `DOUBLE`
- `COMPLEX`
- `RATIONAL`
- `CHAR`
- `INTERNAL`
- `ARRAY`
