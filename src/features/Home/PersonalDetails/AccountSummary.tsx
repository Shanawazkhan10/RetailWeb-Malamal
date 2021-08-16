import CSS from "csstype";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import AccountDetails from "../Account/AccountDetails";
import {
  AccountDetailsContainer,
  BankContainer,
  SegmentContainer,
  DematDetailsContainer,
  DocumentContainer,
} from "../Account/AccountSummaryDetailsSlice";
import BankDetails from "../Account/BankDetails";
import SegmentDetails from "../Account/SegmentDetails";
import { MouseEvent } from "react";
import backImage from "../../../assets/back reverse.png";
import { myprofileContainer } from "../MainContainer/mainContainerSlice";
import {
  profileContainer,
  OnProfileSummarySuccess,
} from "./PersonalDetailsSlice";
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import { getProfileSummary } from "../../../app/api";
import DematDetails from "../Account/DematDetails";
import DocumentDetails from "../Account/DocumentDetails";

// font-weight: "300"; color: "rgb(156, 39, 176)""; line-height: "26px"}}

const profileListStyle: CSS.Properties = {
  padding: "20px 10px",
  textAlign: "center",
  borderBottom: "1px solid #808080	",
  borderTop: "1px solid #808080	",
  borderRight: "1px solid #808080",
  borderLeft: "1px solid #808080",
};

/* The slider */
const sliderStyle: CSS.Properties = {
  position: "absolute",
  cursor: "pointer",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "#ccc",
  WebkitTransition: "0.4s",
  transition: "0.4s",
};

const sliderBeforeStyle: CSS.Properties = {
  position: "absolute",
  cursor: "pointer",
  height: "2px",
  width: "2px",
  left: "4px",
  bottom: "4px",
  backgroundColor: "white",
  WebkitTransition: "0.4s",
  transition: "0.4s",
};

const AccountSummary = () => {
  const dispatch = useAppDispatch();

  const UserDetails = useAppSelector(
    (state: RootState) => state.personalContainer
  );

  useEffect(() => {
    dispatch(OnProfileSummarySuccess(getProfileSummary()));
  }, []);

  const middleName = UserDetails.userDetailsState.FullName.split(" ")[1]; //Logo

  var firstchar = UserDetails.userDetailsState.FullName.charAt(0);
  var secondchar = middleName.charAt(0);
  var logoname = firstchar + secondchar;

  const AccountContainer = useAppSelector((state) => state.accountContainer);

  const OnPersonalClick = (event: MouseEvent<HTMLDivElement>) => {
    dispatch(AccountDetailsContainer());
  };

  const OnBankClick = (event: MouseEvent<HTMLDivElement>) => {
    dispatch(BankContainer());
  };

  const OnDematClick = (event: MouseEvent<HTMLDivElement>) => {
    dispatch(DematDetailsContainer());
  };

  const OnSegmentClick = (event: MouseEvent<HTMLDivElement>) => {
    dispatch(SegmentContainer());
  };

  const OnDocumentClick = (event: MouseEvent<HTMLDivElement>) => {
    dispatch(DocumentContainer());
  };

  const OnCommodityClick = (event: MouseEvent<HTMLDivElement>) => {
    dispatch(BankContainer());
  };

  function OnBack() {
    dispatch(myprofileContainer());
    dispatch(profileContainer());
  }

  function renderDetailContainer() {
    switch (AccountContainer.rightContainer) {
      case 0:
        return <AccountDetails></AccountDetails>;
      case 1:
        return <BankDetails></BankDetails>;
      case 2:
        return <SegmentDetails></SegmentDetails>;
      case 3:
        return <DematDetails></DematDetails>;
      case 4:
        return <DocumentDetails></DocumentDetails>;
      default:
        return <AccountDetails></AccountDetails>;
    }
  }

  return (
    <div
      className="page-container profile-content"
      style={{ width: "1100px", height: "1500px", marginLeft: "20px" }}
    >
      <h1>Account</h1>
      <span
        className="back"
        style={{
          position: "relative",
          display: "inline-block",
          marginTop: "30px",
          marginLeft: "500px",
        }}
      >
        <a
          href="#"
          onClick={OnBack}
          className="back"
          style={{ marginTop: "30px" }}
        >
          <img src={backImage} style={{}}></img>
        </a>
      </span>
      <br />
      <br />
      <div className="section">
        <div className="row">
          <div className="four columns profile-avatar-container">
            <div id="avatar-22" className="profile-avatar">
              <div
                className="avatar"
                style={{
                  width: "75px",
                  height: "75px",
                  borderRadius: "50%",
                  textAlign: "center",
                  verticalAlign: "middle",
                  backgroundColor: "rgba(156,39,176,0.1)",
                  fontSize: "15px",
                  fontWeight: 300,
                  color: "rgb(156,39,176)",
                  lineHeight: "75px",
                  float: "left",
                  clear: "none",
                  marginRight: "30px",
                }}
              >
                <span>{logoname.toUpperCase()}</span>
              </div>
            </div>
            <div
              id="profile-name"
              className="two columns"
              style={{
                float: "left",
                clear: "none",
                marginRight: "30px",
                marginTop: "15px",
              }}
            >
              <label>Name</label>
              <span></span>
              <h3 style={{ marginTop: "2px" }}>
                {UserDetails.userDetailsState.FullName}
              </h3>
            </div>

            <div
              id="profile_client_id"
              className="two columns"
              style={{
                float: "left",
                clear: "none",
                marginRight: "30px",
                marginTop: "15px",
              }}
            >
              <label>Client ID</label>
              <span></span>
              <h3 style={{ marginTop: "2px" }}>
                {UserDetails.userDetailsState.ClientId}
              </h3>
            </div>
            <span></span>
            <div
              className="two columns"
              style={{ float: "left", clear: "none", marginTop: "15px" }}
            >
              <label>CKYC no.</label>
              <h3 style={{ marginTop: "2px" }}>
                {UserDetails.userDetailsState.CKYCNO}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div id="profile_basic" style={{ marginTop: "100px" }}>
        <div className="row profile-container">
          <div
            id="mobile-side-nav"
            className="four columns"
            style={{ width: "155px", float: "left" }}
          >
            <div
              className="active profile-list personal"
              style={profileListStyle}
              onClick={OnPersonalClick}
            >
              Personal
            </div>

            <div
              className="profile-list bank"
              style={profileListStyle}
              onClick={OnBankClick}
            >
              Bank
            </div>
            <div
              className="profile-list demat"
              style={profileListStyle}
              onClick={OnDematClick}
            >
              Demat
            </div>
            <div
              className="profile-list segment-activation"
              style={profileListStyle}
              onClick={OnSegmentClick}
            >
              Segments
            </div>
            <div
              className="profile-list documents"
              style={profileListStyle}
              onClick={OnDocumentClick}
            >
              Documents
            </div>
          </div>
        </div>
        <div className="eight columns" style={{ marginLeft: "180px" }}>
          {renderDetailContainer()}
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
