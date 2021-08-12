import axios from "axios";
import { UpdateSymbolDetails } from "../features/Home/MainContainer/MarketWatch/MarketWatchSlice";
import { useAppDispatch } from "./hooks";
//import parseLink, { Links } from 'parse-link-header';

// export async function getComments(url: string) {
//   const { data } = await axios.get<Netposition[]>(url);
//   return data;
// }

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

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
        ExchangeName: "NSE",
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
        ExchangeName: "NSE",
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
        ExchangeName: "NSE",
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
        ExchangeName: "NSE",
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
      Chg: "NSE",
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
      Chg: "NSE",
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
      Chg: "NSE",
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
      Chg: "NSE",
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
      ExchangeName: "NSE",
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
      ExchangeName: "NSE",
      Token: 1,
      Time: "14:51PM",
    },
  ];
  return getOrderData;
};

export const getWatchList: any = () => {
  const WatchListData = [
    {
      mwName: "nifty",
      scrips: "bse_cm|16082,bse_fo|68822,bse_cm|16082,bse_fo|68822",
      id: 1,
      SymbolList: null,
    },
    {
      mwName: "nifty1",
      scrips: "nse_cm|15083,nse_fo|58824",
      id: 2,
      SymbolList: null,
    },
    {
      mwName: "nifty2",
      scrips: "bse_cm|16082,bse_fo|68822,bse_cm|16082,bse_fo|68822",
      id: 3,
      SymbolList: null,
    },
    {
      mwName: "nifty3",
      scrips: "nse_cm|15083",
      id: 4,
      SymbolList: null,
    },
    {
      mwName: "nifty4",
      scrips:
        "nse_cm|15083,nse_fo|58824,bse_cm|16082,bse_fo|68822,bse_cm|16082,bse_fo|68822",
      id: 5,
      SymbolList: null,
    },
  ];
  return WatchListData;
};

export function GetWatchListSymbolDetails(i: number, scripArr: string) {
  //const dispatch = useAppDispatch();
  let SymbolListData;
  switch (i) {
    case 1:
      SymbolListData = [
        {
          mwId: 1,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
        {
          mwId: 2,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
        {
          mwId: 3,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
        {
          mwId: 4,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
        {
          mwId: 5,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
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
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
        {
          mwId: 2,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
        {
          mwId: 2,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
      ];
      break;
    case 3:
      SymbolListData = [
        {
          mwId: 3,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
      ];
      break;
    case 1:
      SymbolListData = [
        {
          mwId: 3,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
        {
          mwId: 3,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
        {
          mwId: 3,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
        {
          mwId: 3,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
      ];
      break;
    case 4:
      SymbolListData = [
        {
          mwId: 4,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
        {
          mwId: 4,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
        {
          mwId: 4,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
      ];
      break;

    case 3:
      SymbolListData = [
        {
          mwId: 5,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
        {
          mwId: 5,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
        {
          mwId: 5,
          mwName: "nifty",
          scrips: "ACC",
          cmpName: "ACC LIMITED",
          exch: "NSE",
          seg: "CASH",
          sym: "ACC",
          exEndDt: "NA",
        },
      ];
      break;
    default:
      break;
  }
  //dispatch(UpdateSymbolDetails(SymbolListData));
  return SymbolListData;
}
