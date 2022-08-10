// This is an improved console with similar function and new methods
"use strict";
// Import the console interface
import CInt from "../ts-interfaces/console-interface";

const C: CInt = {
  log(...data) {
    console.log(...data);
    return this;
  },

  info(...data) {
    console.info(...data);
    return this;
  },

  dbg(...data) {
    console.debug(...data);
    return this;
  },

  warn(...data) {
    console.warn(...data);
    return this;
  },

  err(...data) {
    console.error(...data);
    return this;
  },

  tab(tabularData, properties?) {
    console.table(tabularData, properties);
    return this;
  },

  assert(condition, ...data) {
    console.assert(condition, ...data);
    return this;
  },

  dir(item, options?) {
    console.dir(item, options);
    return this;
  },

  dirxml(...data) {
    console.dirxml(...data);
    return this;
  },

  clear() {
    console.clear();
    return this;
  },

  group(...data) {
    console.group(...data);
    return this;
  },

  groupCollapsed(...data) {
    console.groupCollapsed(...data);
    return this;
  },

  groupEnd() {
    console.groupEnd();
    return this;
  },

  count(label) {
    console.count(label);
    return this;
  },

  countReset(label) {
    console.countReset(label);
    return this;
  },

  time(label) {
    console.time(label);
    return this;
  },

  timeLog(label, ...data) {
    console.timeLog(label, ...data);
    return this;
  },

  timeStamp(label) {
    console.timeStamp(label);
    return this;
  },

  timeEnd(label) {
    console.timeEnd(label);
    return this;
  },

  trace(...data) {
    console.trace(...data);
    return this;
  },

  // Async timeout console function
  timeout(key, timeout, ...data) {
    if (arguments.length === 0) return this;
    for (const method in this) {
      if (key !== method) continue;
      this.log(
        `Timeout ID ${setTimeout(() => {
          this[key](...data);
        }, timeout)}`
      );
    }
    return this;
  },

  // Async interval console function
  interval(key, timeout, ...data) {
    if (arguments.length === 0) return this;
    for (const method in this) {
      if (key !== method) continue;
      this.log(
        `Interval ID: ${setInterval(() => {
          this[key](...data);
        }, timeout)}`
      );
    }
    return this;
  },
};

Object.freeze(C);

export default C;
