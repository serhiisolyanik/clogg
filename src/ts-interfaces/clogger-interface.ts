// This is the Clogger interface
interface ClogInt {
  log(obj: unknown): ClogInt;
  info(info: unknown): ClogInt;
  dbg(data: unknown): ClogInt;
  warn(w: unknown): ClogInt;
  err(e: unknown): ClogInt;
}

export default ClogInt;
