export interface IOrderEntryRequest {
  jData: IjData;
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
}