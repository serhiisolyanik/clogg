/* eslint-disable @typescript-eslint/no-unused-vars */
// This module logs any data by invoking console functions
"use strict";
// Import the Clogger interface
import ClogInt from "../ts-interfaces/clogger-interface";

const Clogger: ClogInt = {
  log(data) {
    data = console.log;
    return this;
  },

  info(data) {
    data = console.info;
    return this;
  },

  dbg(data) {
    data = console.debug;
    return this;
  },

  warn(w) {
    w = console.warn;
    return this;
  },

  err(e) {
    e = console.error;
    return this;
  },
};

Object.freeze(Clogger);

export default Clogger;
