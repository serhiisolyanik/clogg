/* eslint-disable @typescript-eslint/no-unused-vars */
// This module logs any data by invoking console functions
"use strict";
var Clogger = {
  log: function (data) {
    data = console.log;
    return this;
  },
  info: function (data) {
    data = console.info;
    return this;
  },
  dbg: function (data) {
    data = console.debug;
    return this;
  },
  warn: function (w) {
    w = console.warn;
    return this;
  },
  err: function (e) {
    e = console.error;
    return this;
  },
};
Object.freeze(Clogger);
module.exports = Clogger;
