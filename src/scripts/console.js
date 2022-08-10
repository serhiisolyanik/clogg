/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-this-alias */
// This is an improved console with similar function and new methods that can be chained
"use strict";
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
var C = {
  log: function () {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }
    console.log.apply(console, data);
    return this;
  },
  info: function () {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }
    console.info.apply(console, data);
    return this;
  },
  dbg: function () {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }
    console.debug.apply(console, data);
    return this;
  },
  warn: function () {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }
    console.warn.apply(console, data);
    return this;
  },
  err: function () {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }
    console.error.apply(console, data);
    return this;
  },
  tab: function (tabularData, properties) {
    console.table(tabularData, properties);
    return this;
  },
  assert: function (condition) {
    var data = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      data[_i - 1] = arguments[_i];
    }
    console.assert.apply(console, __spreadArray([condition], data, false));
    return this;
  },
  dir: function (item, options) {
    console.dir(item, options);
    return this;
  },
  dirxml: function () {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }
    console.dirxml.apply(console, data);
    return this;
  },
  clear: function () {
    console.clear();
    return this;
  },
  group: function () {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }
    console.group.apply(console, data);
    return this;
  },
  groupCollapsed: function () {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }
    console.groupCollapsed.apply(console, data);
    return this;
  },
  groupEnd: function () {
    console.groupEnd();
    return this;
  },
  count: function (label) {
    console.count(label);
    return this;
  },
  countReset: function (label) {
    console.countReset(label);
    return this;
  },
  time: function (label) {
    console.time(label);
    return this;
  },
  timeLog: function (label) {
    var data = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      data[_i - 1] = arguments[_i];
    }
    console.timeLog.apply(console, __spreadArray([label], data, false));
    return this;
  },
  timeStamp: function (label) {
    console.timeStamp(label);
    return this;
  },
  timeEnd: function (label) {
    console.timeEnd(label);
    return this;
  },
  trace: function () {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }
    console.trace.apply(console, data);
    return this;
  },
  // Async timeout console function
  timeout: function (key, timeout, ...data) {
    var _this = this;
    if (!data) {
      let data = [];
    }
    for (var _i = 2; _i < arguments.length; _i++) {
      data[_i - 2] = arguments[_i];
    }
    if (arguments.length === 0) return this;
    for (var method in this) {
      if (key !== method) continue;
      this.log(
        "Timeout ID ".concat(
          setTimeout(function () {
            _this[key].apply(_this, data);
          }, timeout)
        )
      );
    }
    return this;
  },
  // Async interval console function
  interval: function (key, timeout, ...data) {
    var _this = this;
    if (!data) {
      let data = [];
    }
    for (var _i = 2; _i < arguments.length; _i++) {
      data[_i - 2] = arguments[_i];
    }
    if (arguments.length === 0) return this;
    for (var method in this) {
      if (key !== method) continue;
      this.log(
        "Interval ID: ".concat(
          setInterval(function () {
            _this[key].apply(_this, data);
          }, timeout)
        )
      );
    }
    return this;
  },
};
Object.freeze(C);
module.exports = C;
