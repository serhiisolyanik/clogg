// This is the Clogger interface
interface ClogInt {
  [index: string]: typeof Function.prototype;
  // Console methods
  log(obj: unknown): ClogInt;
  info(info: unknown): ClogInt;
  dbg(data: unknown): ClogInt;
  warn(w: unknown): ClogInt;
  err(e: unknown): ClogInt;
  // Window methods
  alert(data: unknown): ClogInt;
}

export default ClogInt;
