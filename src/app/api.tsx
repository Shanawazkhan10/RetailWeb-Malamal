import axios from "axios";
import { IContractSearchReq } from "../types/IContractSearchReq";
import { IMarketWatchTokenInfo } from "../types/IMarketWatchTokenInfo";
import { IGetIndicesRequest } from "../types/Indices/IGetIndicesRequest";
import { IRenameWatchlist } from "../types/IRenameWatchlist";
import { ILoginRequest } from "../types/Request/IloginRequest";
import { IOrderEntryRequest } from "../types/Request/IOrderEntryRequest";
import { IUpdateWatchlist } from "../types/WatchList/IUpdateWatchList";
import { IDeleteWatchlist } from "./IDeleteWatchlist";
//import parseLink, { Links } from 'parse-link-header';

// export async function getComments(url: string) {
//   const { data } = await axios.get<Netposition[]>(url);
//   return data;
// }

export const api = axios.create({
  baseURL: "https://uathsauth.hypertrade.in/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const AuthApi = axios.create({
  baseURL: "https://uathsauth.hypertrade.in/",
  headers: { "Content-Type": "application/json" },
});

export const IntApi = axios.create({
  baseURL: "https://uathsint.hypertrade.in/",
  headers: { "Content-Type": "application/json" },
});

export const DiscApi = axios.create({
  baseURL: "https://uathsdiscovery.hypertrade.in/",
  headers: { "Content-Type": "application/json" },
});

export async function PostLoginRequest(LoginData: ILoginRequest): Promise<any> {
  return await api
    .post(
      "https://uathsauth.hypertrade.in/api/login",
      JSON.stringify(LoginData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => response.data)
    .catch((error) => error);
}

export async function PostMPINRequest(LoginData: string): Promise<any> {
  return await api
    .post("https://uathsauth.hypertrade.in/api/mpinlogin", LoginData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data)
    .catch((error) => error);
}

export const getNetpositionData: any = () => {
  const NetPositionData = {
    NetPosition: [
      {
        Symbol: "ACC",
        InstrumentName: "FUT",
        ProductType: "NORMAL",
        NeyQty: "5",
        NetPrice: "88.50",
        MarketPrce: "25041",
        MTMGL: "1002",
        ExchangeName: "nse_cm",
        LastTradedPrice: "101.50",
        Token: 1,
      },
      {
        Symbol: "HDFC",
        InstrumentName: "FUT",
        ProductType: "NORMAL",
        NeyQty: "5",
        NetPrice: "88.50",
        MarketPrce: "25041",
        MTMGL: "1002",
        ExchangeName: "nse_cm",
        LastTradedPrice: "101.50",
        Token: 2,
      },
      {
        Symbol: "AXIS",
        InstrumentName: "FUT",
        ProductType: "NORMAL",
        NeyQty: "5",
        NetPrice: "88.50",
        MarketPrce: "25041",
        MTMGL: "1002",
        ExchangeName: "nse_cm",
        LastTradedPrice: "101.50",
        Token: 3,
      },
      {
        Symbol: "KOTAK",
        InstrumentName: "FUT",
        ProductType: "NORMAL",
        NeyQty: "5",
        NetPrice: "88.50",
        MarketPrce: "25041",
        MTMGL: "1002",
        ExchangeName: "nse_cm",
        LastTradedPrice: "101.50",
        Token: 4,
      },
    ],
  };
  return NetPositionData;
};

export const getHoldingData: any = () => {
  const HoldingData = [
    {
      Symbol: "ACC",
      InstrumentName: "FUT",
      ProductType: "NORMAL",
      NeyQty: "5",
      Avg: "88.50",
      LTP: "25041",
      PL: "1002",
      Chg: "nse_cm",
      Total: "101.50",
      Token: 1,
    },
    {
      Symbol: "ACC",
      InstrumentName: "FUT",
      ProductType: "NORMAL",
      NeyQty: "5",
      Avg: "88.50",
      LTP: "25041",
      PL: "1002",
      Chg: "nse_cm",
      Total: "101.50",
      Token: 2,
    },
    {
      Symbol: "ACC",
      InstrumentName: "FUT",
      ProductType: "NORMAL",
      NeyQty: "5",
      Avg: "88.50",
      LTP: "25041",
      PL: "1002",
      Chg: "nse_cm",
      Total: "101.50",
      Token: 3,
    },
    {
      Symbol: "ACC",
      InstrumentName: "FUT",
      ProductType: "NORMAL",
      NeyQty: "5",
      Avg: "88.50",
      LTP: "25041",
      PL: "1002",
      Chg: "nse_cm",
      Total: "101.50",
      Token: 4,
    },
  ];
  return HoldingData;
};

export const getOrderData: any = () => {
  const OrderData = [
    {
      Symbol: "ACC",
      InstrumentName: "FUT",
      ProductType: "NORMAL",
      Qty: "5",
      AvgPrice: 123,
      Status: "Executed",
      ExchangeName: "nse_cm",
      Token: 1,
      Time: "14:51PM",
    },
    {
      Symbol: "ACC",
      InstrumentName: "FUT",
      ProductType: "NORMAL",
      Qty: "5",
      AvgPrice: 123,
      Status: "Executed",
      ExchangeName: "nse_cm",
      Token: 2,
      Time: "14:51PM",
    },
    {
      Symbol: "ACC",
      InstrumentName: "FUT",
      ProductType: "NORMAL",
      Qty: "5",
      AvgPrice: 123,
      Status: "Executed",
      ExchangeName: "NSE",
      Token: 2,
      Time: "14:51PM",
    },
    {
      Symbol: "ACC",
      InstrumentName: "FUT",
      ProductType: "NORMAL",
      Qty: "5",
      AvgPrice: 123,
      Status: "Executed",
      ExchangeName: "NSE",
      Token: 2,
      Time: "14:51PM",
    },
    {
      Symbol: "ACC",
      InstrumentName: "FUT",
      ProductType: "NORMAL",
      Qty: "5",
      AvgPrice: 123,
      Status: "Executed",
      ExchangeName: "NSE",
      Token: 2,
      Time: "14:51PM",
    },
    {
      Symbol: "ACC",
      InstrumentName: "FUT",
      ProductType: "NORMAL",
      Qty: "5",
      AvgPrice: 123,
      Status: "Executed",
      ExchangeName: "NSE",
      Token: 2,
      Time: "14:51PM",
    },
  ];
  return OrderData;
};

export async function getWatchList(
  cache: boolean,
  sessionkey: string
): Promise<any> {
  var querystring = JSON.stringify({
    cache: cache,
  });

  return await DiscApi.post(
    "https://uathsdiscovery.hypertrade.in/htpl/userwatchlist/getusergroups",
    querystring,
    {
      headers: {
        "api-key": "UzL0HZiHPTc1rNVr",
        "x-access-token": sessionkey,
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.data)
    .catch((error) => error);
}

export async function updateWatchList(
  UpdateReq: IUpdateWatchlist,
  sessionKey: string
): Promise<any> {
  return await api
    .post(
      "https://uathsdiscovery.hypertrade.in/htpl/userwatchlist/updatewatchlist",
      JSON.stringify(UpdateReq),
      {
        headers: {
          "api-key": "UzL0HZiHPTc1rNVr",
          "x-access-token": sessionKey,
        },
      }
    )
    .then((response) => response.data)
    .catch((error) => error);
}

export async function deleteWatchList(
  DelReq: IDeleteWatchlist,
  sessionKey: string
): Promise<any> {
  return await api

    .post(
      "https://uathsdiscovery.hypertrade.in/htpl/userwatchlist/deleteusergroups",
      JSON.stringify(DelReq),
      {
        headers: {
          "api-key": "UzL0HZiHPTc1rNVr",
          "x-access-token": sessionKey,
        },
      }
    )
    .then((response) => response.data)
    .catch((error) => error);
}

export async function renameWatchList(
  RenameReq: IRenameWatchlist,
  sessionKey: string
): Promise<any> {
  return await api
    .post(
      "https://uathsdiscovery.hypertrade.in/htpl/userwatchlist/renamewatchlist",
      JSON.stringify(RenameReq),
      {
        headers: {
          "api-key": "UzL0HZiHPTc1rNVr",
          "x-access-token": sessionKey,
        },
      }
    )
    .then((response) => response.data)
    .catch((error) => error);
}
export async function PostScritInfo(
  scriptInfo: string[],
  sessionKey: string
): Promise<any> {
  const params = new URLSearchParams();
  params.append("jData", JSON.stringify({ scripArr: scriptInfo }));

  // var querystring = JSON.stringify({
  //   scripArr: scriptInfo,
  // });

  //const params = new URLSearchParams();
  //params.append("jData", querystring);

  // var formBody = [];
  // //for (var property in scriptInfo) {
  // var encodedKey = encodeURIComponent("jData");
  // var encodedValue = encodeURIComponent(querystring);
  // formBody.push(encodedKey + "=" + encodedValue);
  //}

  //const params = JSON.stringify({ jData: querystring });
  return await api

    .post("https://uathsint.hypertrade.in/quick/scrip/info", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-access-token": sessionKey,
      },
    })

    .then((response) => response.data)

    .catch((error) => error);
}

export function GetSymbolDetails() {
  const SymbolListData = {
    mwId: 1,
    mwName: "nifty",
    scrips: "bse_cm|16082",
    cmpName: "ACC LIMITED",
    exSeg: "NSE",
    seg: "CASH",
    sym: "ACC",
    exEndDt: "NA",
    op: "656",
    c: "566",
    h: "45.567",
    lo: "67",
    lt1: "78",
    ltt: "78",
    lcl: "78",
    ucl: "78",
    ap: "78",
    ltq: "78",
    v: "45",
    showDepth: false,
  } as IMarketWatchTokenInfo;
  //const SymbolListData = null;
  return SymbolListData;
}

export function GetWatchListSymbolDetails(i: number, scripArr: string) {
  //const dispatch = useAppDispatch();
  let SymbolListData;
  switch (i) {
    case 1:
      SymbolListData = [
        {
          mwId: 1,
          mwName: "nifty",
          scrips: "bse_cm|15083",
          cmpName: "ADANIPORTS",
          exch: "nse_cm",
          seg: "CASH",
          sym: "ADANIPORTS-EQ",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "725",
        },
        {
          mwId: 1,
          mwName: "nifty",
          scrips: "bse_fo|68822",
          cmpName: "BAJAJ Finance LIMITED",
          exch: "nse_cm",
          seg: "CASH",
          sym: "BAJAJ",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 1,
          mwName: "nifty",
          scrips: "bse_fo|68822",
          cmpName: "HDFC LIMITED",
          exch: "nse_cm",
          seg: "CASH",
          sym: "HDFC",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 1,
          mwName: "nifty",
          scrips: "MOTHERSUMI",
          cmpName: "MOTHERSUMI",
          exch: "nse_cm",
          seg: "CASH",
          sym: "MOTHERSUMI",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 1,
          mwName: "nifty",
          scrips: "ADANIPORTS",
          cmpName: "ADANIPORTS",
          exch: "nse_cm",
          seg: "CASH",
          sym: "ADANIPORTS",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 1,
          mwName: "nifty",
          scrips: "FACT",
          cmpName: "FACT",
          exch: "nse_cm",
          seg: "CASH",
          sym: "FACT",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 1,
          mwName: "nifty",
          scrips: "FSC",
          cmpName: "FSC",
          exch: "nse_cm",
          seg: "CASH",
          sym: "FSC",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 1,
          mwName: "nifty",
          scrips: "FEL",
          cmpName: "FEL",
          exch: "nse_cm",
          seg: "CASH",
          sym: "FEL",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
      ];
      break;

    case 2:
      SymbolListData = [
        {
          mwId: 2,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "nse_cm",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 2,
          mwName: "nifty",
          scrips: "RELIANCE",
          cmpName: "RELIANCE",
          exch: "nse_cm",
          seg: "CASH",
          sym: "RELIANCE",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 2,
          mwName: "nifty",
          scrips: "BHARTIARTL",
          cmpName: "BHARTIARTL",
          exch: "nse_cm",
          seg: "CASH",
          sym: "BHARTIARTL",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
      ];
      break;
    case 3:
      SymbolListData = [
        {
          mwId: 3,
          mwName: "nifty",
          scrips: "HINDUNILVR",
          cmpName: "HINDUNILVR",
          exch: "nse_cm",
          seg: "CASH",
          sym: "HINDUNILVR",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 3,
          mwName: "nifty",
          scrips: "INFY",
          cmpName: "INFY",
          exch: "nse_cm",
          seg: "CASH",
          sym: "INFY",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 3,
          mwName: "nifty",
          scrips: "KOTAKBANK",
          cmpName: "KOTAKBANK",
          exch: "nse_cm",
          seg: "CASH",
          sym: "KOTAKBANK",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 3,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "nse_cm",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
      ];
      break;
    case 4:
      SymbolListData = [
        {
          mwId: 4,
          mwName: "nifty",
          scrips: "M&M",
          cmpName: "M&M",
          exch: "nse_cm",
          seg: "CASH",
          sym: "M&M",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 4,
          mwName: "nifty",
          scrips: "MINDTREE",
          cmpName: "MINDTREE",
          exch: "nse_cm",
          seg: "CASH",
          sym: "MINDTREE",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 4,
          mwName: "nifty",
          scrips: "HDFCLIFE",
          cmpName: "HDFCLIFE",
          exch: "nse_cm",
          seg: "CASH",
          sym: "HDFCLIFE",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 4,
          mwName: "nifty",
          scrips: "HINDUNILVR",
          cmpName: "HINDUNILVR",
          exch: "nse_cm",
          seg: "CASH",
          sym: "HINDUNILVR",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 4,
          mwName: "nifty",
          scrips: "INFY",
          cmpName: "INFY",
          exch: "nse_cm",
          seg: "CASH",
          sym: "INFY",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 4,
          mwName: "nifty",
          scrips: "KOTAKBANK",
          cmpName: "KOTAKBANK",
          exch: "nse_cm",
          seg: "CASH",
          sym: "KOTAKBANK",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 4,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "nse_cm",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
      ];
      break;

    case 5:
      SymbolListData = [
        {
          mwId: 5,
          mwName: "nifty",
          scrips: "TCS",
          cmpName: "TCS",
          exch: "nse_cm",
          seg: "CASH",
          sym: "TCS",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 5,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "nse_cm",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 5,
          mwName: "nifty",
          scrips: "BATAINDIA",
          cmpName: "BATAINDIA",
          exch: "nse_cm",
          seg: "CASH",
          sym: "BATAINDIA",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 5,
          mwName: "nifty",
          scrips: "BEL",
          cmpName: "BEL",
          exch: "nse_cm",
          seg: "CASH",
          sym: "BEL",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 5,
          mwName: "nifty",
          scrips: "BML",
          cmpName: "BML",
          exch: "nse_cm",
          seg: "CASH",
          sym: "BML",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 5,
          mwName: "nifty",
          scrips: "BHEL",
          cmpName: "BHEL",
          exch: "nse_cm",
          seg: "CASH",
          sym: "BHEL",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
        {
          mwId: 5,
          mwName: "nifty",
          scrips: "BEML",
          cmpName: "BEML",
          exch: "nse_cm",
          seg: "CASH",
          sym: "BEML",
          exEndDt: "NA",
          op: "656",
          c: "566",
          h: "45.567",
          lo: "67",
          lt1: "78",
          ltt: "78",
          lcl: "78",
          ucl: "78",
          ap: "78",
          ltq: "78",
          v: "45",
          showDepth: false,
          tk: "15083",
          ltp: "78",
        },
      ];
      break;
    default:
      break;
  }
  //dispatch(UpdateSymbolDetails(SymbolListData));
  return SymbolListData;
}

export function AddSymbolToWatchlist(i: number, scripArr: string) {
  //const dispatch = useAppDispatch();

  const SymbolListData = {
    mwId: 1,
    mwName: "nifty",
    scrips: "bse_cm|16082",
    cmpName: "ACC LIMITED",
    exch: "NSE",
    seg: "CASH",
    sym: "ACC",
    exEndDt: "NA",
    op: "656",
    c: "566",
    h: "45.567",
    lo: "67",
    lt1: "78",
    ltt: "78",
    lcl: "78",
    ucl: "78",
    ap: "78",
    ltq: "78",
    v: "45",
    showDepth: false,
  };

  return SymbolListData;
}
export const SubscribeMarketDepth: any = (id: number, index: number) => {
  const DepthData = {
    id: id,
    index: index,
    tk: "11536",
    e: "nse_cm",
    name: "dp",
    bp: "1905.70",
    bp1: "1905.75",
    bp2: "1905.85",
    bp3: "1905.90",
    bp4: "1906.00",
    sp: "1907.00",
    sp1: "1907.50",
    sp2: "1907.90",
    sp3: "1908.00",
    sp4: "1908.50",
    bq: "5212",
    bq1: "2100",
    bq2: "553",
    bq3: "1000",
    bq4: "10543",
    bs: "500",
    bs1: "1200",
    bs2: "1250",
    bs3: "500",
    bs4: "1525",
    bno1: "110",
    bno2: "91",
    bno3: "80",
    bno4: "76",
    bno5: "55",
    sno1: "122",
    sno2: "102",
    sno3: "89",
    sno4: "66",
    sno5: "25",
    mul: "1",
    prec: "2",
    ts: "TCS-EQ",
  };

  return DepthData;
};
// export async function UnsubscribeMarketDepth(data: ISubscribeDepth) {
//   //const url = `https://api.github.com/repos/${org}/${repo}/issues/${number}`
//   //const { data } = await axios.get<Issue>(url)
//   //return data
//   return null;
// }

// export async function getWatchList(): Promise<any> {
//   return await api

//     .post(
//       "https://uathsdiscovery.hypertrade.in/htpl/userwatchlist/getusergroups",
//       JSON.stringify({ cache: false }),
//       {
//         headers: {
//           "Content-Type": "application/json; charset=UTF-8",
//           "x-access-token": localStorage.getItem("sessionKey"),
//           "api-key": "UzL0HZiHPTc1rNVr",
//         },
//       }
//     )

//     .then((response) => response.data)

//     .catch((error) => error);
// }

// export async function updateWatchlist(
//   UpdateReq: IUpdateWatchlist
// ): Promise<any> {
//   return await api

//     .post(
//       "https://uathsdiscovery.hypertrade.in/htpl/userwatchlist/updatewatchlist",
//       JSON.stringify(UpdateReq),
//       {
//         headers: {
//           "Content-Type": "application/json; charset=UTF-8",
//           "x-access-token": localStorage.getItem("sessionKey"),
//           "api-key": " UzL0HZiHPTc1rNVr",
//         },
//       }
//     )

//     .then((response) => response.data)

//     .catch((error) => error);
// }

// export async function renameWatchlist(
//   renameReq: IRenameWatchlist
// ): Promise<any> {
//   return await api

//     .post(
//       "https://uathsdiscovery.hypertrade.in/htpl/userwatchlist/renamewatchlist",
//       JSON.stringify(renameReq),
//       {
//         headers: {
//           "Content-Type": "application/json; charset=UTF-8",
//           "x-access-token": localStorage.getItem("sessionKey"),
//           "api-key": " UzL0HZiHPTc1rNVr",
//         },
//       }
//     )

//     .then((response) => response.data)

//     .catch((error) => error);
// }

export async function deleteWatchlist(DelReq: IDeleteWatchlist): Promise<any> {
  return await api;

  //     .post(
  //       "https://uathsdiscovery.hypertrade.in/htpl/userwatchlist/deleteusergroups",
  //       JSON.stringify(DelReq),
  //       {
  //         headers: {
  //           "Content-Type": "application/json; charset=UTF-8",
  //           "x-access-token": localStorage.getItem("sessionKey"),
  //           "api-key": " UzL0HZiHPTc1rNVr",
  //         },
  //       }
  //     )

  //     .then((response) => response.data)

  //     .catch((error) => error);
}

export async function PredifinedWatchlist() {
  //const url = `https://api.github.com/repos/${org}/${repo}/issues/${number}`
  //const { data } = await axios.get<Issue>(url)
  //return data
  return null;
}

export async function GetScriptInfo() {
  //const url = `https://api.github.com/repos/${org}/${repo}/issues/${number}`
  //const { data } = await axios.get<Issue>(url)
  //return data
  return null;
}

export const ContractSearch: any = (ContractSearchReq: IContractSearchReq) => {
  const DepthData = [
    {
      omexs: "84959_nse_fo",
      omtkn: "84959",
      cnam: "",
      tsym: "TCS20NOV1350CE",
      exseg: "nse_fo",
      uomtkn: "11536",
      expry: "2020-11-26 14:30:00",
      optyp: "CE",
      strikprc: "1350.0",
      stktyp: "option",
      seris: "OPTSTK",
      symdes: "26NOV20 1350.0 CE",
      usym: "TCS",
      wgt: "14",
      last: "",
      pchng: "",
      chng: "",
      time: "",
      vol: "",
    },
    {
      omexs: "84960_nse_fo",
      omtkn: "84960",
      cnam: "",
      tsym: "TCS20NOV1350PE",
      exseg: "nse_fo",
      uomtkn: "11536",
      expry: "2020-11-26 14:30:00",
      optyp: "PE",
      strikprc: "1350.0",
      stktyp: "option",
      seris: "OPTSTK",
      symdes: "26NOV20 1350.0 PE",
      usym: "TCS",
      wgt: "14",
      last: "",
      pchng: "",
      chng: "",
      time: "",
      vol: "",
    },
  ];
  return DepthData;
};
export const getProfileSummary: any = () => {
  const MyData = {
    FullName: "Deep Amit Mehta",
    ClientId: "PF7937",
    CKYCNO: "10095635008625",
    Email: "mdeep859@gmail.com",
    PanNumber: "*554L",
    MobileNumber: "*4140",
    DematNo: "1208160035816401",
    Segments: "NSE,NFO,BSE,MF",
  };
  return MyData;
};

export const getIPODetails: any = () => {
  const IPODetails = {
    InstrumentName: "DUDIGITAL",
    StartDate: "12-08-2021",
    EndDate: "17-08-2021",
    PriceRange: "65-65",
    MinQty: "200",
    Status: "Closed",
    AllotmentFinalizationDate: "20-08-2021",
    RefundInitializationDate: "23-08-2021",
    DematTransferDate: "24-08-2021",
    ListingDate: "25-08-2021",
    MandateEndDate: "01-09-2021",
  };
  return IPODetails;
};

export const getUpcomingIPODetails: any = () => {
  const IPODetails = {
    InstrumentName: "DUDIGITAL",
    StartDate: "12-08-2021",
    EndDate: "17-08-2021",
    PriceRange: "65-65",
    MinQty: "200",
    Status: "Upcoming",
    RHP: "",
  };
  return IPODetails;
};

export const getClosingIPODetails: any = () => {
  const IPODetails = {
    InstrumentName: "DUDIGITAL",
    StartDate: "12-08-2021",
    EndDate: "17-08-2021",
    PriceRange: "65-65",
    MinQty: "200",
    Status: "Closed",
    RHP: "https://www1.nseindia.com/content/equities/IPO_RHP_NUVOCO.pdf",
  };
  return IPODetails;
};

export async function sendOrderEntryRequest(
  orderentryrequest: IOrderEntryRequest
): Promise<any> {
  const params = new URLSearchParams();
  params.append("jData", JSON.stringify(orderentryrequest.jData));
  params.append("jKey", orderentryrequest.jKey);

  return await api
    .post("https://uathsint.hypertrade.in/quick/order/place", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-access-token": orderentryrequest.jKey,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export async function GetOrderBook(sessionKey: string): Promise<any> {
  //const params = new URLSearchParams();
  //params.append("jData", JSON.stringify(scriptInfo));
  return await api

    .post("https://uathsint.hypertrade.in/quick/user/orders", "", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-access-token": sessionKey,
      },
    })

    .then((response) => response.data)

    .catch((error) => error);
}

export async function GetTradeBook(sessionKey: string): Promise<any> {
  //const params = new URLSearchParams();
  //params.append("jData", JSON.stringify(scriptInfo));
  return await api

    .post("https://uathsint.hypertrade.in/quick/user/trades", "", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-access-token": sessionKey,
      },
    })

    .then((response) => response.data)

    .catch((error) => error);
}

export async function getNetposition(sessionKey: string): Promise<any> {
  //const params = new URLSearchParams();
  //params.append("jData", JSON.stringify(scriptInfo));
  return await api

    .post("https://uathsint.hypertrade.in/quick/user/positions", "", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-access-token": sessionKey,
      },
    })

    .then((response) => response.data)

    .catch((error) => error);
}

export async function getHolding(): Promise<any> {
  var holdingsReq: any = {
    brkName: "TECXLABS",
    prod: "CNC",
  };
  const params = new URLSearchParams();
  params.append("jData", JSON.stringify(holdingsReq));
  return await api
    .post("https://uathsint.hypertrade.in/quick/user/holdings", params, {
      headers: {
        "x-access-token": localStorage.getItem("sessionKey"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((response) => response.data)
    .catch((error) => error);
}

export async function getSummaryData(SessionKey: string): Promise<any> {
  const request = {
    exchange_segment: "nse_cm",
    type: "gainer",
    indexname: "nifty50",
    limit: "10",
    day: "1",
  };

  const querystring = JSON.stringify(request);

  return await api
    .post(
      "https://uathsdiscovery.hypertrade.in/htpl/market/getmarketmovers",
      querystring,
      {
        headers: {
          "api-key": "UzL0HZiHPTc1rNVr",
          "Content-Type": "application/json",
          "x-access-token": SessionKey,
        },
      }
    )
    .then((response) => response.data)
    .catch((error) => error);
}

export async function getUserMargin(SessionKey: string): Promise<any> {
  const RequestData = {
    seg: "CASH",
    exch: "NSE",
    prod: "ALL",
  };

  const params = new URLSearchParams();
  params.append("jData", JSON.stringify(RequestData));
  params.append("jKey", SessionKey);

  return await api
    .post("https://uathsint.hypertrade.in/quick/user/limits", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-access-token": SessionKey,
      },
    })
    .then((response) => response.data)
    .catch((error) => error);
}

export async function SearchSymbol(
  ContractSearchReq: IContractSearchReq,
  SessionKey: string
): Promise<any> {
  return await api
    .post(
      "https://uathsdiscovery.hypertrade.in/htpl/search/symbol",
      JSON.stringify(ContractSearchReq),
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "x-access-token": SessionKey,
          "api-key": "UzL0HZiHPTc1rNVr",
        },
      }
    )

    .then((response) => response.data)

    .catch((error) => error);
}

export async function Getallindicesdata(
  getIndeicesRequest: IGetIndicesRequest,
  SessionKey: string
): Promise<any> {
  const params = new URLSearchParams();
  params.append("exchange_segment", getIndeicesRequest.exchange_segment);
  params.append("scrip_token", getIndeicesRequest.scrip_token);
  return await api
    .post(
      "https://uathsdiscovery.hypertrade.in/htpl/market/getallindicesdata",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "x-access-token": SessionKey,
          "api-key": "UzL0HZiHPTc1rNVr",
        },
      }
    )
    .then((response) => response.data)
    .catch((error) => error);
}
