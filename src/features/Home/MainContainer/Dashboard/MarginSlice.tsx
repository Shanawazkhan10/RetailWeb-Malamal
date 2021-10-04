import { createSlice } from "@reduxjs/toolkit";
import { getUserMargin } from "../../../../app/api";
import { AppThunk } from "../../../../store/store";
import { IMargin } from "../../../../types/IMargin";

const InitialMarginState: IMargin = {
  AddMrgnMisPrsnt: "",
  AddMrgnNrmlPrsnt: "",
  AddPreExpMrgnMisPrsnt: "",
  AddPreExpMrgnNrmlPrsnt: "",
  AdhocLimitMult: "",
  AdhocMargin: "",
  AmountUtilizedPrsnt: "",
  AmtUntilizedPrsnt: "",
  BoardLotLimit: "",
  BrokeragePrsnt: "",
  CashRlsMtomPrsnt: "",
  CashUnRlsMtomPrsnt: "",
  Category: "",
  CdsSpreadBenefit: "",
  CncMrgnVarPrsnt: "",
  CncSellcrdPresent: "",
  Collateral: "",
  CollateralValue: "",
  CollateralValueMult: "",
  ComExpsrMrgnMisPrsnt: "",
  ComExpsrMrgnNrmlPrsnt: "",
  ComRlsMtomPrsnt: "",
  ComSpanMrgnMisPrsnt: "",
  ComSpanMrgnNrmlPrsnt: "",
  ComUnRlsMtomPrsnt: "",
  CurExpMrgnMisPrsnt: "",
  CurExpMrgnNrmlPrsnt: "",
  CurPremiumMisPrsnt: "",
  CurPremiumNrmlPrsnt: "",
  CurRlsMtomPrsnt: "",
  CurSpanMrgnMisPrsnt: "",
  CurSpanMrgnNrmlPrsnt: "",
  CurUnRlsMtomPrsnt: "",
  DaneLimit: "",
  DeliveryMarginPresent: "",
  DeliveryMrgnMisPrsnt: "",
  DeliveryMrgnNrmlPrsnt: "",
  ExposureMarginPrsnt: "",
  FoExpMrgnMisPrsnt: "",
  FoExpMrgnNrmlPrsnt: "",
  FoPremiumMisPrsnt: "",
  FoPremiumNrmlPrsnt: "",
  FoRlsMtomPrsnt: "",
  FoSpanrgnMisPrsnt: "",
  FoSpanrgnNrmlPrsnt: "",
  FoUnRlsMtomPrsnt: "",
  MarginScripBasketPrsnt: "",
  MarginUsed: "",
  MarginUsedPrsnt: "",
  MarginVarPrsnt: "",
  MarginWarningPrcntPrsnt: "",
  MrgnScrpBsktCncPrsnt: "",
  MrgnScrpBsktMisPrsnt: "",
  MrgnScrpBsktNrmlPrsnt: "",
  MrgnVarMisPrsnt: "",
  MrgnVarNrmlPrsnt: "",
  MtomSquareOffWarningPrcntPrsnt: "",
  MtomWarningPrcntPrsnt: "",
  NationalCashMult: "",
  Net: "",
  NfospreadBenefit: "",
  NotionalCash: "",
  PremiumPrsnt: "",
  RealizedMtomPrsnt: "",
  RmsCollateral: "",
  RmsCollateralMult: "",
  RmsPayInAmt: "",
  RmsPayOutAmt: "",
  SpanMarginPrsnt: "",
  SpecialMarginPrsnt: "",
  SplMrgnMisPrsnt: "",
  SplMrgnNrmlPrsnt: "",
  TenderMrgnMisPrsnt: "",
  TenderMrgnNrmlPrsnt: "",
  UnrealizedMtomPrsnt: "",
  AuxRmsCollateral: "",
  AuxAdhocMargin: "",
  AuxNotionalCash: "",
  stCode: 0,
  stat: "",
};

const MarginSlice = createSlice({
  name: "margin",
  initialState: {
    marginData: InitialMarginState,
  },
  reducers: {
    OnTopGainers: (state, action) => {
      state.marginData = action.payload;
    },
  },
});

export default MarginSlice.reducer;
export const { OnTopGainers } = MarginSlice.actions;

export const FetchMargin =
  (SessionKey: string): AppThunk =>
  async (dispatch) => {
    try {
      const MarginData = await getUserMargin(SessionKey);
      dispatch(OnTopGainers(MarginData));
    } catch (err) {
      //dispatch(onMarketWatchFailure(err.toString()));
    }
  };
