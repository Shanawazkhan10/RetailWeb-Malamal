import { IMarketWatchTokenInfo } from "./IMarketWatchTokenInfo";

export interface IMarketWatch {
  mwName: string;
  scrips: string;
  id: number;
  SymbolList: IMarketWatchTokenInfo[];
}

export const initialMarketWatch = {
  mwName: "",
  scrips: "",
  id: 0,
  SymbolList: [],
};
