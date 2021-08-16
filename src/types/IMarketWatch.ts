import { IMarketWatchTokenInfo } from "./IMarketWatchTokenInfo";

export interface IMarketWatch {
  mwName: string;
  scrips: string;
  id: number;
  SymbolList: IMarketWatchTokenInfo[];
}
