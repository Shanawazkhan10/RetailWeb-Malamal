import { IMarketWatch } from "./IMarketWatch";

export interface IMarketWatchList {
  MarketWatchList: IMarketWatch[];
  nSelectedWatchList: number;
  sSelectedWatchList: string;
  bIsBind: boolean;
  bIsError: boolean;
}
