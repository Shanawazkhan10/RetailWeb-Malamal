import Popup from "reactjs-popup";
import UpdateBankDetails from "./UpdateBankDetails";

const BankDetails = () => {
  return (
    <div className="active profile-info bank">
      <h1>Bank</h1> <br />
      <div className="bank-details">
        <div className="row">
          <div className="four columns">
            <label>
              Account
              <span className="account-flag">Primary</span>
              <div
                className="edit-bank"
                data-balloon="Modify bank account"
                data-balloon-pos="up"
              >
                <span className="icon icon-edit"></span>
              </div>
            </label>
            <p>*1006</p>
          </div>
          <div className="four columns">
            <label>Bank</label> <p>KOTAK MAHINDRA BANK LTD</p>
          </div>
          <div className="four columns">
            <label>Branch</label> <p>MALAD EAST</p>
          </div>
        </div>
        <br />
      </div>
      <p>
        <Popup
          trigger={
            <button
              type="button"
              className="btn btn-blue"
              style={{ color: "blue" }}
            >
              Add bank account
            </button>
          }
          position="center center"
        >
          <div
            className="modal-container"
            style={{
              width: "800px",
              height: "800px",
              color: "#444",
              margin: "0 auto",
              maxWidth: "100%",
              maxHeight: "100vh",
              background: "#fff",
              padding: "20px 40px",
              position: "relative",
              border: "1px solid #ddd",
              boxShadow: "2px 2px 0 #f3f3f3",
              boxSizing: "border-box",
            }}
          >
            <UpdateBankDetails />
          </div>
        </Popup>
      </p>
      <br />
    </div>
  );
};

export default BankDetails;
