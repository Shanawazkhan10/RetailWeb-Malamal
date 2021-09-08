import axios from "axios";
import { UpdateSymbolDetails } from "../features/Home/MainContainer/MarketWatch/MarketWatchSlice";
import { loggedInSuccess } from "../features/Login/userSlice";
import { ILogin } from "../types/ILogin";
import { IContractSearchReq } from "../types/IContractSearchReq";
import { IMarketWatchTokenInfo } from "../types/IMarketWatchTokenInfo";
import { IRemoveFromWatch } from "../types/IRemoveFromWatch";
import { IRenameWatchlist } from "../types/IRenameWatchlist";
import { IOrderEntryRequest } from "../types/Request/IOrderEntryRequest";
import { useAppSelector } from "./hooks";
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

export async function PostLoginRequest(LoginData: string): Promise<any> {
  return await api
    .post("https://uathsauth.hypertrade.in/api/login", LoginData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
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
      "https://uathsdiscovery.hypertrade.in/htpl/userwatchlist/getusergroups",
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
      "https://uathsdiscovery.hypertrade.in/htpl/userwatchlist/getusergroups",
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
      "https://uathsdiscovery.hypertrade.in/htpl/userwatchlist/getusergroups",
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

// export async function DeleteWatchlist(DelReq: IDeleteWatchlist): Promise<any> {
//   return await api

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
// }

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
    .catch((error) => {
      throw error;
    });
}

export async function SearchSymbol(
  ContractSearchReq: IContractSearchReq
): Promise<any> {
  return await api
    .post(
      "https://uathsdiscovery.hypertrade.in/htpl/search/symbol",
      JSON.stringify(ContractSearchReq),
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "x-access-token": localStorage.getItem("sessionKey"),
          "api-key": "UzL0HZiHPTc1rNVr",
        },
      }
    )

    .then((response) => response.data)

    .catch((error) => error);
}
