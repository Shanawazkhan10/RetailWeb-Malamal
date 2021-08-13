import ProfiePhoto from "./ProflePhoto";
import { useAppDispatch } from "../../../app/hooks";
import { dashboardContainer } from "../MainContainer/mainContainerSlice";
import {
  DematDetailsContainer,
  accountmanageContainer,
} from "./PersonalDetailsSlice";
import backImage from "../../../assets/back reverse.png";

const ProfileSummaryOld = () => {
  const dispatch = useAppDispatch();
  function onDematClick() {
    dispatch(DematDetailsContainer());
  }
  function OnBack() {
    dispatch(dashboardContainer());
  }

  function OnManage() {
    dispatch(accountmanageContainer());
  }

  return (
    <div className="oth-sidebar-rght">
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
      <ProfiePhoto></ProfiePhoto>
      <div
        className="AccountContainer"
        style={{ width: "835px", height: "280px", display: "inline-flex" }}
      >
        <section
          className="leftSection"
          style={{ width: "500px", height: "750px" }}
        >
          <div className="seven columns" style={{ width: "120px" }}>
            <a
              href="#"
              onClick={OnManage}
              className="manage"
              style={{
                marginLeft: "300px",
                marginBottom: "10px",
                display: "inline-block",
                color: "orange",
              }}
            >
              Manage
            </a>
            <h3
              className="page-title small section-header"
              style={{
                fontSize: "20px",
                marginBottom: "10px",
                display: "inline-block",
              }}
            >
              Account
            </h3>
          </div>

          <div className="profile-main" style={{ height: "500px" }}>
            <div className="row">
              <div
                className="five columns label"
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "80px",
                  height: "20px",
                  fontSize: "15px",
                  marginBottom: 10,
                }}
              >
                E-mail :
                <div
                  className="seven columns value"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    marginBottom: 10,
                  }}
                ></div>
              </div>
              <div
                className="seven columns value"
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "80px",
                  height: "20px",
                  fontSize: "15px",
                  marginBottom: 10,
                }}
              >
                mdeep859@gmail.com
              </div>
            </div>
            <div className="row">
              <div
                className="five columns label"
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "80px",
                  height: "20px",
                  fontSize: "15px",
                  marginBottom: 10,
                }}
              >
                PAN :
              </div>
              <div
                className="seven columns value"
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "80px",
                  height: "20px",
                  fontSize: "15px",
                  marginBottom: 10,
                }}
              >
                *554L
              </div>
            </div>
            <div className="row">
              <div
                className="five columns label"
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "80px",
                  height: "20px",
                  fontSize: "15px",
                  marginBottom: 10,
                }}
              >
                Phone :
              </div>
              <div
                className="seven columns value"
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "80px",
                  height: "20px",
                  fontSize: "15px",
                  marginBottom: 10,
                }}
              >
                *4140
              </div>
            </div>
            <div className="row">
              <div
                className="five columns label"
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "100px",
                  height: "20px",
                  fontSize: "15px",
                  marginBottom: 10,
                }}
              >
                Demat (BO) :{" "}
              </div>
              <div
                className="seven columns value"
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "100px",
                  height: "20px",
                  fontSize: "15px",
                  marginBottom: 10,
                }}
              >
                <span className="value dp-ids-list">
                  <span className="value">
                    <a href="#" onClick={onDematClick} className="value">
                      1208160035816401
                    </a>
                  </span>
                </span>
              </div>
            </div>
            <div className="row" style={{ width: "250px" }}>
              <div
                className="five columns label"
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "100px",
                  height: "20px",
                  fontSize: "15px",
                  marginBottom: 10,
                }}
              >
                Segments :
              </div>
              <div
                className="seven columns value"
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "150px",
                  height: "20px",
                  fontSize: "15px",
                  marginBottom: 10,
                }}
              >
                <a
                  target="_blank"
                  href="https://console.zerodha.com/account/segment-activation"
                >
                  NSE, NFO, BSE, MF
                </a>
              </div>
            </div>{" "}
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* <div className="row">
              <div
                className="seven columns"
                style={{
                  marginBottom: "10px",
                  fontSize: "30px",
                  width: "150px",
                }}
              >
                <h3
                  className="page-title small section-header"
                  style={{ fontSize: "20px" }}
                >
                  Settings
                </h3>
              </div>
            </div> */}
            {/* <div className="row" style={{ width: "600px" }}>
              <div
                className="five columns label"
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "150px",
                  fontSize: "15px",
                }}
              >
                Theme
              </div>
              <div
                className="seven columns value"
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "250px",
                  height: "27px",
                  fontSize: "15px",
                  marginBottom: 10,
                }}
              >
                <div
                  className="su-radio-group"
                  style={{
                    width: "250px",
                    height: "50px",
                  }}
                >
                  <div className="su-radio-wrap checked">
                    <input
                      type="radio"
                      title="Default"
                      value="default"
                      data-label="Default"
                    />
                    <span></span>Default
                  </div>
                  <br />

                  <div className="su-radio-wrap">
                    <input
                      id="radio-137"
                      type="radio"
                      title="Dark"
                      value="dark"
                    />
                    <span></span>Dark
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="row" style={{ marginTop: "30px" }}>
              <div
                className="five columns label"
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "160px",
                  height: "20px",
                  fontSize: "15px",
                  marginBottom: 10,
                }}
              >
                Instant order updates :
              </div>
              <div className="wrg-toggle">
                <div className="wrg-toggle-container">
                  <div className="wrg-toggle-check"></div>
                  <div className="wrg-toggle-uncheck"></div>
                </div>
                <div className="wrg-toggle-circle"></div>
              </div>
            </div> */}
          </div>
        </section>
        <section className="rightSection" style={{ width: "400px" }}>
          <div
            className="seven columns"
            style={{ marginBottom: "10px", fontSize: "30px", width: "150px" }}
          >
            <h3
              className="page-title small section-header"
              style={{ fontSize: "20px" }}
            >
              Bank accounts
            </h3>
          </div>
          <p className="row">
            <span className="value">
              *1006{" "}
              <span className="text-light text-xxsmall">
                KOTAK MAHINDRA BANK LTD{" "}
              </span>
            </span>
          </p>
          <div
            className="seven columns"
            style={{
              marginBottom: "10px",
              fontSize: "18px",
              color: "blue",
              width: "150px",
            }}
          >
            Add Bank
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileSummaryOld;
