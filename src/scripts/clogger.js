/* eslint-disable @typescript-eslint/no-unused-vars */
// This module logs any data by invoking console functions and window methods
"use strict";
var Clogger = {
  // Console methods
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
  // Window methods
  alert: function (data) {
    data = window.alert;
    return this;
  },
};
Object.freeze(Clogger);
exports["default"] = Clogger;
