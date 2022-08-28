const { default: Clogger } = require("../scripts/clogger.js");

test("Check Object Properties", () => {
  expect(Clogger).toHaveProperty("log");
  expect(Clogger).toHaveProperty("info");
  expect(Clogger).toHaveProperty("dbg");
  expect(Clogger).toHaveProperty("warn");
  expect(Clogger).toHaveProperty("err");
  expect(Clogger).toHaveProperty("alert");
});
