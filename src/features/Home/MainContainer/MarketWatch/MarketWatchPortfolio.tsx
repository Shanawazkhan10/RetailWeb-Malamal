import "../../style.css";

const MarketWatchPortfolio = () => {
  return (
    <div className="mw_head" id="mw_head">
      <ul id="ulTab" className="scroll_tabs_container">
        <div
          className="scroll_tab_left_button"
          style={{
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "26px",
            cursor: "pointer",
            display: "none",
          }}
        ></div>
        <div
          className="scroll_tab_inner"
          style={{
            margin: "0px",
            overflow: "hidden",
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
          }}
        >
          <span
            className="scroll_tab_left_finisher"
            style={{ display: "inline-block" }}
          >
            &nbsp;
          </span>
          <li
            id="65"
            className="tab_selected scroll_tab_first"
            style={{ display: "inline-block", zoom: "1" }}
          >
            <a href="" id="tabItemAnchorText">
              W1GSH
            </a>
          </li>
          <li
            id="66"
            style={{ display: "inline-block", zoom: "1" }}
            className=""
          >
            <a href="" id="tabItemAnchorText">
              W2
            </a>
          </li>
          <li
            id="67"
            style={{ display: "inline-block", zoom: "1" }}
            className=""
          >
            <a href="" id="tabItemAnchorText">
              W3
            </a>
          </li>
          <li
            id="68"
            style={{ display: "inline-block", zoom: "1" }}
            className=""
          >
            <a href="" id="tabItemAnchorText">
              W4_NSECD
            </a>
          </li>
          <li
            id="69"
            className="scroll_tab_last"
            style={{ display: "inline-block", zoom: "1" }}
          >
            <a href="" id="tabItemAnchorText">
              W5
            </a>
          </li>
          <span
            className="scroll_tab_right_finisher"
            style={{ display: "inline-block" }}
          >
            &nbsp;
          </span>
        </div>
        <div
          className="scroll_tab_right_button"
          style={{
            position: "absolute",
            right: "0px",
            top: "0px",
            width: "26px",
            cursor: "pointer",
            display: "none",
          }}
        ></div>
      </ul>
    </div>
  );
};

export default MarketWatchPortfolio;
