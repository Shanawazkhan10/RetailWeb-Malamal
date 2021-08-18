import { $CombinedState } from "@reduxjs/toolkit";

const UpdateSegment = (props: any) => {
  var newSegments: Array<string> = props.addsegments;

  alert(newSegments);

  return (
    <div className="modal-body">
      <h1>
        <span>Confirm</span>{" "}
      </h1>{" "}
      <br />
      <form className="edit_bank_form" style={{ display: "block" }}>
        <br />
        <div className="row" style={{ display: "block" }}>
          <div className="five columns" style={{ width: "35%", float: "left" }}>
            <div className="manage-segment-head">
              <h3>
                <strong> Activate </strong>
              </h3>
              <ul className="ActivateSegments">
                {newSegments.map((li) => (
                  <li style={{ display: "list-item", paddingBottom: "2px" }}>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="seven columns"
            style={{ width: "56%", float: "left" }}
          >
            <div className="edit-bank-fields su-input-group su-static-label">
              <div>
                <label data-for="gross_income" className="su-input-label">
                  Gross income
                </label>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <select
                  id="gross_income"
                  className="edit-bank-input"
                  style={{
                    width: "250px",
                    padding: "7px 15px",
                    paddingRight: "20px",
                    appearance: "none",
                    WebkitAppearance: "none",
                    border: "1px solid #e1e1e1",
                    color: "#666",
                    borderRadius: "3px",
                    fontSize: ".875rem",
                    background: "url(/static/images/arrow-down.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "99% 10px",
                    backgroundSize: "20px",
                    backgroundClip: "#fff",
                  }}
                >
                  <option
                    data-disabled="disabled"
                    data-selected="selected"
                    value=""
                  >
                    Select income range
                  </option>
                  <option value="1">Below ₹ 1 Lac</option>
                  <option value="2">₹ 1 Lac to ₹ 5 Lacs</option>
                  <option value="3">₹ 5 Lacs to ₹ 10 Lacs</option>
                  <option value="4">₹ 10 Lacs to ₹ 25 Lacs</option>
                  <option value="5">₹ 25 Lacs to ₹ 1 Crore</option>
                  <option value="6">Above ₹ 1 Crore</option>
                </select>
              </div>
            </div>
            <br />
            <div className="edit-bank-fields su-input-group su-static-label">
              <div className="segment-file-container">
                <label data-for="income_proof" className="su-input-label">
                  Income Proof
                </label>
                <span>&nbsp; &nbsp;&nbsp;</span>
                <input
                  type="file"
                  id="income_proof"
                  className="edit-bank-input"
                />
                <br />
                <br />
                <span className="text-grey text-small">
                  Supported format: PDF
                </span>
                <span id="segment_file_error" className="text-small"></span>
              </div>
            </div>

            <div className="edit-bank-fields su-input-group su-static-label">
              <div className="su-checkbox-group">
                <input
                  type="checkbox"
                  title="Segment"
                  placeholder="Segment"
                  value="chksegement"
                  style={{ width: "13px" }}
                  defaultChecked={true}
                />
                <br />
                <br />
                <span></span>

                <span className="su-checkbox-value">
                  I understand that trading in derivatives (futures &amp;
                  options) is inherently risky, and may result in loss of
                  capital. I confirm I have gone through &amp; understood the
                  &nbsp;
                  <a target="#" href="">
                    Risk Disclosure Documents
                  </a>{" "}
                  explaining this.
                </span>
              </div>
              <br />
            </div>
          </div>
        </div>
        <br />
        <div className="text-center">
          <button
            data-disabled="disabled"
            type="submit"
            v-if="true"
            className="btn btn-blue"
            style={{ color: "blue" }}
          >
            Continue{" "}
          </button>
        </div>
      </form>{" "}
    </div>
  );
};

export default UpdateSegment;
