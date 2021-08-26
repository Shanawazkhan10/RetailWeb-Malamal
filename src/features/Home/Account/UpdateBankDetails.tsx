import CSS from "csstype";

const InputProperties: CSS.Properties = {
  border: "1px solid #e3e3e3",
  borderRadius: "3px",
  padding: "10px 15px",
  color: "white",
  width: "50%",
  boxSizing: "border-box",
  fontSize: ".875rem",
  lineHeight: "1.25rem",
};

const CheckBoxPropeties: CSS.Properties = {
  display: "inline-block",
  width: "15px",
  height: "15px",
  minWidth: "15px",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  border: "1px solid",
  boxSizing: "border-box",
  borderRadius: "2px",
  top: "3px",
};

const UpdateBankDetails = () => {
  return (
    <div className="modal-body">
      <h1>
        <span>Modify bank account</span>
      </h1>
      <br />
      <div className="notice text-box yellow">
        <ul>
          <li>
            <span>
              Please map your own bank account to your trading account. You
              cannot link a third party bank account to your trading account.
            </span>
          </li>
          <li>
            <span>
              If modifying primary bank account, post successful verification,
              your existing primary bank will be unmapped.
            </span>
          </li>
          <li>
            <span>
              Charge of ₹25 + 18% GST will be levied for account modification.
            </span>
          </li>
        </ul>
      </div>
      <br />
      <div>
        <form className="edit_bank_form">
          <div className="row">
            <div className="six columns">
              <div>
                <div className="edit-bank-fields su-input-group su-static-label">
                  <label
                    data-for="bank_account_number_1"
                    className="su-input-label"
                  >
                    Account Number <span>(Required)</span>
                  </label>
                  <br />
                  <input
                    id="bank_account_number_1"
                    type="password"
                    data-
                    data-required="required"
                    className="edit-bank-input"
                    style={InputProperties}
                  />
                  <br />
                </div>
              </div>
              <div>
                <div className="edit-bank-fields su-input-group su-static-label">
                  <label
                    data-for="confirm_bank_account_number_1"
                    className="su-input-label"
                  >
                    Re-enter Account Number <span>(Required)</span>
                  </label>
                  <br />
                  <input
                    id="confirm_bank_account_number_1"
                    type="text"
                    data-required="required"
                    className="edit-bank-input"
                    style={InputProperties}
                  />
                  <br />
                </div>
              </div>
              <div>
                <div className="edit-bank-fields su-input-group su-static-label">
                  <label data-for="bank_1_ifsc_code" className="su-input-label">
                    IFSC <span>(Required)</span>
                  </label>
                  <br />
                  <input
                    data-maxlength="11"
                    data-minlength="6"
                    id="bank_1_ifsc_code"
                    type="text"
                    data-required="required"
                    className="edit-bank-input"
                    style={InputProperties}
                  />
                  <br />
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <br />
          <div className="su-checkbox-group">
            <input
              id="checkbox-39"
              type="checkbox"
              data-label="Set as primary"
              className="su-checkbox"
              value="false"
              style={CheckBoxPropeties}
            />
            <span></span>
            <br />
            <br />
            <label data-for="checkbox-39" className="su-checkbox-label">
              <span className="su-checkbox-box">
                <span className="su-checkbox-tick"></span>
              </span>
              <span className="su-checkbox-value">Set as primary</span>
            </label>
          </div>
          <br />
          <div className="su-checkbox-group">
            <input
              id="checkbox-40"
              type="checkbox"
              data-label="I/We hereby declare that the above information provided by me, is true and to the best of my knowledge. I/We undertake to inform Zerodha Broking Ltd. of any discrepancies, changes, or incorrect information that I become aware of, immediately. I/We understand that in case any information provided above is incorrect or misleading, I/We would be held liable for all such consequences/actions taken with respect to the above information. This change will affect the Trading and Demat account that I hold with Zerodha Broking Ltd."
              className="su-checkbox"
              value="false"
            />
            <label data-for="checkbox-40" className="su-checkbox-label">
              <span className="su-checkbox-box">
                <span className="su-checkbox-tick"></span>
              </span>
              <span className="su-checkbox-value">
                I/We hereby declare that the above information provided by me,
                is true and to the best of my knowledge. I/We undertake to
                inform Zerodha Broking Ltd. of any discrepancies, changes, or
                incorrect information that I become aware of, immediately. I/We
                understand that in case any information provided above is
                incorrect or misleading, I/We would be held liable for all such
                consequences/actions taken with respect to the above
                information. This change will affect the Trading and Demat
                account that I hold with Zerodha Broking Ltd.
              </span>
            </label>
          </div>
          <br />
          <div
            className="bank-secondary-edit"
            style={{ display: "inline-block" }}
          >
            <label>Receive OTP on</label>
            <div className="su-radio-group">
              <div className="su-radio-wrap" style={{ float: "left" }}>
                <input
                  id="radio-42"
                  type="radio"
                  data-label="E-mail"
                  className="su-radio"
                  value="email"
                />
                <span></span>
                <label data-for="radio-42" className="su-radio-label">
                  E-mail
                </label>
              </div>
              <div className="su-radio-wrap" style={{ float: "left" }}>
                <input
                  id="radio-43"
                  type="radio"
                  data-label="Mobile"
                  className="su-radio"
                  value="mobile"
                />
                <span></span>
                <label data-for="radio-43" className="su-radio-label">
                  Mobile
                </label>
              </div>
            </div>
            <br />
            <br />
            <br />
            <button
              data-disabled="disabled"
              type="submit"
              className="btn btn-blue"
              style={{ color: "blue" }}
            >
              Send OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBankDetails;
