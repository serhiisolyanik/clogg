const C = require("../scripts/console.js");

test("Check Object Properties", () => {
  expect(C).toHaveProperty("log");
  expect(C).toHaveProperty("info");
  expect(C).toHaveProperty("dbg");
  expect(C).toHaveProperty("warn");
  expect(C).toHaveProperty("err");
  expect(C).toHaveProperty("tab");
  expect(C).toHaveProperty("assert");
  expect(C).toHaveProperty("dir");
  expect(C).toHaveProperty("dirxml");
  expect(C).toHaveProperty("clear");
  expect(C).toHaveProperty("group");
  expect(C).toHaveProperty("groupCollapsed");
  expect(C).toHaveProperty("groupEnd");
  expect(C).toHaveProperty("count");
  expect(C).toHaveProperty("countReset");
  expect(C).toHaveProperty("time");
  expect(C).toHaveProperty("timeLog");
  expect(C).toHaveProperty("timeStamp");
  expect(C).toHaveProperty("timeEnd");
  expect(C).toHaveProperty("trace");
  expect(C).toHaveProperty("timeout");
  expect(C).toHaveProperty("interval");
});
