export interface INetPosition {
  actId: String;
  brdLtQty: Number;
  cfBuyAmt: String;
  cfSellAmt: String;
  cfBuyQty: string;
  cfSellQty: String;
  exSeg: string;
  buyAmt: string;
  sellAmt: String;
  flBuyQty: String;
  flSellQty: String;
  optTp: String;
  prod: String;
  series: String;
  stkPrc: String;
  tok: string;
  trdSym: string;
  type: String;
  sym: String;
  ltp: string;
  AvgPrice: number;
  PnL: number;
  NetQty: number;
  Change: number;
}

export interface INetpositionSate {
  netpositionList: INetPosition[];
  currentValue: number;
}
