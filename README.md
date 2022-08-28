# Clogg

This is an improved console logging tool with new features. It allows chaining, adds new methods

## Installation

Install Clogg with npm

```bash
  npm install -D @sergeysolyanik/clogg
```

## API Reference

#### All console methods return this object for chaining.

```js
import C from "@sergeysolyanik/clogg";

C.log("Hello ")
  .info("World!")
  .dbg(1) // An alias for console.debug()
  .err(new Error("Error!")) // console.error()
  .tab(tabularData, props); // console.table()
// Other methods have the same names
```

### New Methods:

#### Async interval method

```js
C.interval(key, timeout, ...data).interval("clear", 1000);
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `key`     | `string` | **Required**. Name of the method |
| `timeout` | `number` | **Required**. Interval timeout   |
| `...data` | `any`    | **Optional**. Additional data    |

#### Async timeout method

```js
C.timeout(key, timeout).timeout("warn", 1000, "Unused variable");
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `key`     | `string` | **Required**. Name of the method |
| `timeout` | `number` | **Required**. Timeout            |
| `...data` | `any`    | **Optional**. Additional data    |

#### Window alert

```js
C.alert(data).alert("Hello");
```

| Parameter | Type  | Description                   |
| :-------- | :---- | :---------------------------- |
| `...data` | `any` | **Required**. Additional data |

#### Window "confirm" method

```js
C.confirm(message).confirm("JavaScript");
```

| Parameter | Type    | Description           |
| :-------- | :------ | :-------------------- |
| `message` | `string | **Required**. Message |

### New Module:

```js
import Clogger from "@sergeysolyanik/clogg";
// This module logs any data about object
// Clogger.anyMethod(data) is the same, as
// data = console.anyMethod
// or
// data = window.alert
try {
  // ...
  Clogger.log(data);
  Clogger.dbg(data);
  Clogger.info(data);
  Clogger.warn(data);
  Clogger.alert(data); // data = window.alert
} catch (err) {
  Clogger.err(err);
  // err = console.error
}
```
