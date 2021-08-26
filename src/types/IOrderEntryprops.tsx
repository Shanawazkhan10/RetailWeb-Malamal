export interface IOrderEntryprops {
  isOrderEntryOpen: boolean;
  isBuy: boolean;
  variety: number;
  productCode: number;
  orderType: number;
  isPriceEnabled: boolean;
  isTriggerPriceEnabled: boolean;
  price:number;
  triggerprice:number;
  qty:number;
  isValidityOpen:boolean;
  validity:number;
  disclosedQty:number;
  isDisclosedQtyVisible:boolean;
  isIOCVisible:boolean;
}
