import { IOrderEntryProps } from "./IOrderEntryProps";

export interface IOrderEntry extends IOrderEntryProps {
  isOrderEntryOpen: boolean;
  isBuy: boolean;
  variety: number;
  productCode: string;
  orderType: string;
  isPriceEnabled: boolean;
  isTriggerPriceEnabled: boolean;
  isValidityOpen: boolean;
  validity: string;
  disclosedQty: number;
  isDisclosedQtyVisible: boolean;
  isIOCVisible: boolean;
  typeofOrder: number;
  on: string;
  vd: string;
}
