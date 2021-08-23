import { IMarketDepth } from "./IMarketDepth";

export interface IMarketWatchTokenInfo {
  mwId: number;
  mwName: string;
  scrips: string;
  cmpName: string;
  exch: string;
  seg: string;
  sym: string;
  exEndDt: string;
  marketDepth: IMarketDepth;
  op: string;
  c: string;
  h: string;
  lo: string;
  lt1: string;
  ltt: string;
  lcl: string;
  ucl: string;
  ap: string;
  ltq: string;
  v: string;
  showDepth: boolean;
}
