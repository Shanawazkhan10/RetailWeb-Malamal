import "../../style.css";

const MarketWatch = () => {
  return (
    <div className="mw_headnew">
      <h1>
        <span>market Watch</span>
        <button id="mw_sort" title="Sort Market Watch">
          SORT
        </button>
      </h1>
      <div className="mw_opt">
        <button id="btnEditMode" title="Edit">
          Edit
        </button>
        <button id="btnCancelMode" title="Close" style={{ display: "none" }}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MarketWatch;
