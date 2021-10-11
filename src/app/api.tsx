import axios from "axios";
import { IContractSearchReq } from "../types/IContractSearchReq";
import { IMarketWatchTokenInfo } from "../types/IMarketWatchTokenInfo";
import { IGetIndicesRequest } from "../types/Indices/IGetIndicesRequest";
import { IRenameWatchlist } from "../types/IRenameWatchlist";
import { ILoginRequest } from "../types/Request/IloginRequest";
import {
  IOrderCancelRequest,
  IOrderEntryRequest,
  IOrderModifyRequest,
} from "../types/Request/IOrderEntryRequest";
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

export async function getWatchList(
  cache: boolean,
  sessionkey: string
): Promise<any> {
  var querystring = JSON.stringify({
    cache: cache,
  });

  return await DiscApi.post(
    "https://uathsdiscovery.hypertrade.in/htpl/userwatchlist/getusergroups",
    "",
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

export async function sendModifyOrderRequest(
  OrderModifyRequest: IOrderModifyRequest
): Promise<any> {
  const params = new URLSearchParams();
  params.append("jData", JSON.stringify(OrderModifyRequest.jData));
  params.append("jKey", OrderModifyRequest.jKey);

  return await api
    .post("https://uathsint.hypertrade.in/quick/order/modify", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-access-token": OrderModifyRequest.jKey,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export async function sendCancelOrderRequest(
  orderCancelRequest: IOrderCancelRequest
): Promise<any> {
  const params = new URLSearchParams();
  params.append("jData", JSON.stringify(orderCancelRequest.jData));
  params.append("jKey", orderCancelRequest.jKey);

  return await api
    .post("https://uathsint.hypertrade.in/quick/order/cancel", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-access-token": orderCancelRequest.jKey,
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
        "Content-Type": "application/x-www-form-urlencoded",
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
        "Content-Type": "application/x-www-form-urlencoded",
        "x-access-token": sessionKey,
      },
    })

    .then((response) => response.data)

    .catch((error) => error);
}

export async function getNetposition(sessionKey: string): Promise<any> {
  //const params = new URLSearchParams();
  //params.append("jData", JSON.stringify(scriptInfo));
  const params = new URLSearchParams();
  params.append("jKey", sessionKey);
  params.append("jData", JSON.stringify({ reload: "Y" }));
  return await api

    .post("https://uathsint.hypertrade.in/quick/user/positions", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-access-token": sessionKey,
      },
    })

    .then((response) => response.data)

    .catch((error) => error);
}

export async function getHolding(sessionKey: string): Promise<any> {
  var holdingsReq: any = {
    brkName: "TECXLABS",
    prod: "CNC",
  };
  const params = new URLSearchParams();
  params.append("jKey", sessionKey);
  params.append("jData", JSON.stringify(holdingsReq));
  return await api
    .post("https://uathsint.hypertrade.in/quick/user/holdings", params, {
      headers: {
        "x-access-token": sessionKey,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((response) => response.data)
    .catch((error) => error);
}

export async function getSummaryData(
  SessionKey: string,
  FilterType: string
): Promise<any> {
  const request = {
    exchange_segment: "nse_cm",
    type: FilterType,
    indexname: "nifty50",
    limit: "50",
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

export async function getPaymentOrderId(SessionKey: string): Promise<any> {
  const GetOrderId = {
    accHolder_name: "Sanjay Pawar",
    acc_num: "060101001122",
    amount: 1000,
    bank_name: "ICICI Bank",
    enterprise_id: "99991",
    ex_segment: "EQUITY",
    exchange: "NSE",
    ifsc_code: "ICIC0000602",
    paymentType: "netbanking",
    product: "MIS",
    uid: "SANJAY-99991",
  };

  return await api
    .post(
      "https://uathtrack.hypertrade.in/api/payment/getorderid",
      GetOrderId,
      {
        headers: {
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
