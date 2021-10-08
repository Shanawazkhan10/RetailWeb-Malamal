export interface IIndicesList {
  IndicesList: indiceItem[];
  isError: boolean;
  code: Number;
}

export interface indiceItem {
  date: string;
  tovr: string;
  mrtnval: string;
  exseg: string;
  dtime: string;
  cname: string;
  vol2: string;
  tym: string;
  vol1: string;
  sixmrtnval: string;
  threemrtnval: string;
  advance: string;
  high: string;
  vol: string;
  mavol: string;
  threemrtn: string;
  low: string;
  decline: number;
  threemavol: string;
  sixmavol: string;
  yavol: string;
  yrtnval: string;
  netchg: string;
  yrhi: string;
  wrtn: string;
  chg: string;
  yrlo: string;
  last: string;
  tsym: string;
  wrtbval: string;
  neutral: number;
  cls: string;
  yrtn: string;
  mrtn: string;
  wavol: string;
  sixmtrn: string;
  omtkn: string;
  open: string;
}
