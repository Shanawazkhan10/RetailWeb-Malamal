import { IOrderEntryProps } from "./IOrderEntryProps";

export interface IOrderEntry extends IOrderEntryProps {
  isOrderEntryOpen: boolean;
  isBuy: boolean;
  variety: number;
  productCode: number;
  orderType: number;
  isPriceEnabled: boolean;
  isTriggerPriceEnabled: boolean;  
  isValidityOpen:boolean;
  validity:number;
  disclosedQty:number;
  isDisclosedQtyVisible:boolean;
  isIOCVisible:boolean;
}
