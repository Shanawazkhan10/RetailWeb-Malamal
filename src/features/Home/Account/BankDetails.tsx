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
        <button type="button" className="btn btn-blue">
          Add bank account
        </button>
      </p>
      <br />
    </div>
  );
};

export default BankDetails;
