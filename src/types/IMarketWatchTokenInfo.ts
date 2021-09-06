import { IMarketDepth, InitialMarketDepth } from "./IMarketDepth";

export interface IMarketWatchTokenInfo {
  mwId: number;
  mwName: string;
  scrips: string;
  cmpName: string;
  exSeg: string;
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
  tok: string;
  ltp: string;
  nc: string;
  showMore: boolean;
  trdSym: string;
  cng: string;
}

export const InitialTokenInfo = {
  mwId: 0,
  mwName: "",
  scrips: "",
  cmpName: "",
  exSeg: "",
  seg: "",
  sym: "",
  exEndDt: "",
  marketDepth: InitialMarketDepth,
  op: "",
  c: "",
  h: "",
  lo: "",
  lt1: "",
  ltt: "",
  lcl: "",
  ucl: "",
  ap: "",
  ltq: "",
  v: "",
  showDepth: false,
  tok: "",
  ltp: "",
  nc: "",
  showMore: false,
  trdSym: "",
  cng: "",
};
