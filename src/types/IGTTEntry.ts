import { IGTTEntryProps } from "./IGTTEntryProps";

export interface IGTTEntry extends IGTTEntryProps {
    isGTTEntryOpen:boolean;
    isBuy: boolean;
    triggerType:number;
    variety: number;
    productCode: number;
    orderType: number;
    slproductCode: number;
    slorderType: number;
    isPriceEnabled: boolean;
    isTriggerPriceEnabled: boolean;
    isOCOenabled:boolean;
  }
  