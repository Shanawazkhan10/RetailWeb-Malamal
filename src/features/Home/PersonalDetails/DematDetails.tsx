import { useAppDispatch } from "../../../app/hooks";
import { myprofileContainer } from "../PersonalDetails/PersonalDetailsSlice";
import backImage from "../../../assets/back reverse.png";

const DematDetails = () => {
  const dispatch = useAppDispatch();
  function OnBack() {
    dispatch(myprofileContainer());
  }

  return (
    <div className="active profile-info demat" style={{ width: "500px" }}>
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
      <h1>Demat</h1>

      <label>
        Demat ID
        <br />
        <br />
        <span className="text-light-grey text-small">
          (For IPO application and CDSL TPIN authorisation)
          <br />
          <br />
        </span>
      </label>
      <h3>1208160035816401</h3>
      <br />
      <br />
      <div className="row" style={{ width: "70px", height: "100px" }}>
        <div
          className="six columns"
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          <label>DP ID</label>
          <br />

          <h3>12081600</h3>
          <br />
        </div>
        <div
          className="six columns"
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          <label>BO ID</label>
          <br />
          <h3>35816401</h3>
        </div>
        <br />
        <br />
      </div>
      <div className="row">
        <div className="six columns">
          <label>Depository Participant (DP)</label>
          <br />
          <h3>Zerodha Broking Limited</h3>
          <br />
        </div>
        <div className="six columns">
          <label>Depository</label>
          <h3>CDSL</h3>
        </div>
      </div>
    </div>
  );
};

export default DematDetails;
