// This is the console interface
"use strict";

interface CInt {
  [index: string]: typeof Function.prototype;
  log(...data: unknown[]): CInt;
  info(...data: unknown[]): CInt;
  dbg(...data: unknown[]): CInt;
  warn(...data: unknown[]): CInt;
  err(...data: unknown[]): CInt;
  tab(tabularData: unknown, properties?: string[] | undefined): CInt;
  assert(condition: boolean, ...data: unknown[]): CInt;
  dir(item: unknown, options?: unknown): CInt;
  dirxml(...data: unknown[]): CInt;
  clear(): CInt;
  group(...data: unknown[]): CInt;
  groupCollapsed(...data: unknown[]): CInt;
  groupEnd(): CInt;
  count(label: string | undefined): CInt;
  countReset(label: string | undefined): CInt;
  time(label: string | undefined): CInt;
  timeLog(label: string | undefined, ...data: unknown[]): CInt;
  timeStamp(label: string | undefined): CInt;
  timeEnd(label: string | undefined): CInt;
  trace(...data: unknown[]): CInt;
  // Async timeout console function
  timeout(key: string, timeout: number, ...data: unknown[]): CInt;
  // Async interval console function
  interval(key: string, timeout: number, ...data: unknown[]): CInt;
}

export default CInt;
