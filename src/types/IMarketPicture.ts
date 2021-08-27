import { IMarketDepth } from "./IMarketDepth";
import { IMarketWatchTokenInfo } from "./IMarketWatchTokenInfo";

export interface IMarketPicture {
  IsShow: boolean;
  Type: number;
  script: string;
  TokenInfo: IMarketWatchTokenInfo;
  Depth: IMarketDepth;
}
