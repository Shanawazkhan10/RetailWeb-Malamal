//const MainContainer = (props: IWatchListProps) => {
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import MarketPicture from "./MarketPicture/MarketPicture";
import MarketWatchListContainer from "./MarketWatch/MarketWatchListContainer";
import MarketWatchPortfolio from "./MarketWatch/MarketWatchPortfolio";
import RightContainer from "./RightContainer";
import SmartSearch from "./SmartSearch/SmartSearch";
import HeaderIndices from "./../Header/HeaderIndices";

const MainContainer = (props: any) => {
  const MenuClick = props;

  const personalContainer = useAppSelector((state) => state.personalContainer);

  const dispatch = useAppDispatch();
  function renderRightContainer() {
    // if (mainContainer.IsPersonal) {
    //   switch (personalContainer.initialState.rightContainer) {
    //     case 0:
    //       return (
    //         <div className="col-md-6 col-lg-8 col-xl-9">
    //           <ProfileSummary></ProfileSummary>
    //         </div>
    //       );
    //     case 1:
    //       return (
    //         <div className="col-md-6 col-lg-8 col-xl-9">
    //           <AccountSummary></AccountSummary>
    //         </div>
    //       );
    //     case 2:
    //       return (
    //         <div className="col-md-6 col-lg-8 col-xl-9">
    //           <PasswordSecurity></PasswordSecurity>
    //         </div>
    //       );
    //     case 3:
    //       return (
    //         <div className="col-md-6 col-lg-8 col-xl-9">
    //           <DematDetails></DematDetails>
    //         </div>
    //       );
    //     case 4:
    //       return (
    //         <div className="col-md-6 col-lg-8 col-xl-9">
    //           <UpdateMobileEmail></UpdateMobileEmail>
    //         </div>
    //       );
    //     default:
    //       return (
    //         <div className="col-md-6 col-lg-8 col-xl-9">
    //           <ProfileSummary></ProfileSummary>
    //         </div>
    //       );
    //   }
    // }
  }

  useEffect(() => {
    window.addEventListener("beforeunload", onWindowCLose);
  }, []);

  function onWindowCLose() {
    //alert("Window closing");
    //dispatch(loggedout());
  }
  return (
    <div id="mainbox">
      <div className="row">
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="plate-2 fadeIn-element">
            <HeaderIndices></HeaderIndices>
            <div className="b-listing">
              {/* <MarketWatch></MarketWatch> */}
              <SmartSearch Type={1}></SmartSearch>
              <MarketWatchListContainer></MarketWatchListContainer>
              <MarketWatchPortfolio nWatchList={1}></MarketWatchPortfolio>
            </div>
          </div>
        </div>
        <RightContainer></RightContainer>
        <MarketPicture></MarketPicture>
      </div>
    </div>
  );
};

export default MainContainer;
