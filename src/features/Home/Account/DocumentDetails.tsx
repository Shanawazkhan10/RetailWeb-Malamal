const DocumentDetails = () => {
  return (
    <div>
      <select
        className="cmbDocument"
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
        <option value="" data-disabled="disabled" data-selected="selected">
          Select document
        </option>
        <option value="pan_copy">PAN copy</option>
        <option value="identity_proof">Identity proof</option>
        <option value="signature_proof">Signature proof</option>
        <option value="photo">Photo</option>
        <option value="bank_statement">Bank statement</option>
        <option value="zerodha_cmr_copy">Zerodha CMR copy</option>
        <option value="equity_application_form">Equity application form</option>
      </select>{" "}
      <br />
      <br />
      <button
        type="button"
        className="btn btn-blue"
        style={{ color: "blue  " }}
      >
        E-mail to me
      </button>
      <br />
      <br />
      <p className="text-grey">
        <span className="icon icon-info"></span> Selected document will be sent
        to your registered e-mail.
      </p>
    </div>
  );
};

export default DocumentDetails;
