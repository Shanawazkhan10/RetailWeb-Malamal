export interface IHolding {
  bseTrdSym: string;
  btstHld: string;
  buyQty: string;
  colUpdQty: string;
  colQty: string;
  colTp: string;
  cncBrkg: string;
  ex1: string;
  ex2: string;
  ex3: string;
  exSeg1: string;
  exSeg2: string;
  exSeg3: string;
  hldUpdQty: string;
  hldQty: string;
  ltBse: string;
  ltMcxsxcm: string;
  ltNse: string;
  mcxsxcmTrdSym: string;
  nseTrdSym: string;
  prod: string;
  prc:string;
  scripCode: string;
  series: string;
  series1: string;
  t1Qty: string;
  tok1: string;
  tok2: string;
  tok3: string;
  tgtProd: string;
  usdQty: string;
  whdColQty: string;
  whdHldQty: string;
  isin: string;
}

export interface IHoldingSate{
  holdinglist:IHolding[],
  totalInvestMent:number,  
  currentValue:number,
  daysPandL:number,
  daysPandLPercent:number,
  totalPandL:number,
  totalPandLPercent:number,
}
