import { IMarketDepth } from "../IMarketDepth";
import { IIndices } from "./IIndices";
import { IScriptUpdate } from "./IScriptUpdate";

export interface ISocketData {
  IsShow: false;
  Script: IScriptUpdate;
  Depth: IMarketDepth;
  Indices: IIndices;
}
