import { IMarketWatch } from "./IMarketWatch";

export interface IMarketWatchList {
  MarketWatchList: IMarketWatch[];
  nSelectedWatchList: number;
  bIsBind: boolean;
}
