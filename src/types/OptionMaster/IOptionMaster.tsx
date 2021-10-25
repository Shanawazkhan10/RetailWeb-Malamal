// export interface IoptionMater {
//   FUTIDX: {
//     BANKNIFTY: {
//       token: string;
//       expiry: [];
//     };
//     FINNIFTY: {
//       token: string;
//     };
//     NIFTY: {
//       token: string;
//     };
//   };
// }
export interface IoptionMater {
  symbol: string[];
  symbolInfo: IsymbolInfo[];
}
export interface IsymbolInfo {
  OptionSeries: string;
  Expire: Iexpiry[];
  underLineToken: string;
}
export interface Iexpiry {
  expiry: string[];
}
