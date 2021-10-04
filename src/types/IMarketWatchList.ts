import { IMarketWatch } from "./IMarketWatch";
import { IMarketWatchTokenInfo } from "./IMarketWatchTokenInfo";

export interface IMarketWatchList {
  MarketWatchList: IMarketWatch[];
  nSelectedWatchList: number;
  sSelectedWatchList: string;
  bIsBind: boolean;
  bIsError: boolean;
  Symbollistindex: number;
  sRemovedSymbol: string;
  sNewWatchlistSymbol: string;
  bIsNewWatchlist: boolean;
  //SymbolList: IMarketWatchTokenInfo[];
  //SymbolList1: Record<number, IMarketWatchTokenInfo>;
}
