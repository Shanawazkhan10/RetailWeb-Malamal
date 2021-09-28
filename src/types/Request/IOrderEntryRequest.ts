export interface IOrderEntryRequest {
  jData: IjData;
  jKey: string;
}

export interface IOrderModifyRequest {
  jData: IModjData;
  jKey: string;
}

export interface IOrderCancelRequest {
  jData: ICanceljData;
  jKey: string;
}

export interface IjData {
  am: string;
  es: string; //Exchange Segment
  pc: string; //Product Code
  pr: string; //price
  ot: string; //Order type
  qt: string; //Quantity
  rt: string; //Retention type
  tk: string; //Token
  tp: string; //Trigger Price
  ts: string; //Trading Symbol
  tt: string; //Transaction Type
  //ig: string;//GuiOrderId (its Madatory, if GUIId check is enabled from Server)
  os: string;
  dq: string;
  mp: string; //Not Provided in api
}

export interface IModjData {
  am: "NO";
  on: string;
  vd: string;
  ot: string;
  tk: string;
  ts: string;
  pr: string;
  tp: string;
  qt: string;
  //es: string;
  os: string;
  dq: string;
}

export interface ICanceljData {
  am: "NO";
  on: string;
  ts: string;
}
