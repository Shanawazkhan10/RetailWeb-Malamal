const ModifyBankDetails = () => {
  return (
    <div className="modal-body">
      <span className="close-modal">
        <img src="#" alt="x"></img>
      </span>
      <h1>
        <span>Modify bank account</span>
      </h1>
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
      <div>
        <form className="edit_bank_form">
          <div className="row">
            <div className="six columns">
              <div>
                <div className="edit-bank-fields su-input-group su-static-label">
                  <label className="su-input-label">
                    {" "}
                    Account Number <span>(Required)</span>
                  </label>
                  <input
                    id="bank_account_number_1"
                    type="password"
                    className="edit-bank-input"
                  />
                  <br />
                </div>
              </div>
              <div>
                <div className="edit-bank-fields su-input-group su-static-label">
                  <label className="su-input-label">
                    {" "}
                    Re-enter Account Number <span>(Required)</span>
                  </label>
                  <input
                    id="confirm_bank_account_number_1"
                    type="text"
                    className="edit-bank-input"
                  />
                  <br />
                </div>
              </div>
              <div>
                <div className="edit-bank-fields su-input-group su-static-label">
                  <label className="su-input-label">
                    IFSC <span>(Required)</span>
                  </label>
                  <input
                    id="bank_1_ifsc_code"
                    type="text"
                    className="edit-bank-input"
                  />
                  <br />
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="su-checkbox-group">
            <input
              id="checkbox-57"
              type="checkbox"
              aria-label="I/We hereby declare that the above information provided by me, is true and to the best of my knowledge. I/We undertake to inform Zerodha Broking Ltd. of any discrepancies, changes, or incorrect information that I become aware of, immediately. I/We understand that in case any information provided above is incorrect or misleading, I/We would be held liable for all such consequences/actions taken with respect to the above information. This change will affect the Trading and Demat account that I hold with Zerodha Broking Ltd."
              className="su-checkbox"
              value="true"
            />
            <label className="su-checkbox-label">
              <span className="su-checkbox-box">
                <span className="su-checkbox-tick"></span>
              </span>{" "}
              <span className="su-checkbox-value">
                I/We hereby declare that the above information provided by me,
                is true and to the best of my knowledge.
              </span>
            </label>
          </div>
          <br />
          <button type="submit" className="btn btn-blue">
            Proceed to e-sign{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModifyBankDetails;
