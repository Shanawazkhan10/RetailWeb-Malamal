import { useAppDispatch } from "../../../../app/hooks";
import { NetpositionSummary } from "../../../../types/INetpositionSummary";
import "../../style.css";
const NetPositionSummary = (props: {
  netpositionSummary: NetpositionSummary;
}) => {
  const { netpositionSummary } = props;
  const dispatch = useAppDispatch();
  return (
    <div className="netPosSummary">
      <label className="netPoslbl">
        {" "}
        Invested:{" "}
        <span id="investedCapitalVal" className="netposclsdata">
          {/* {netpositionSummary.Invested} */}
        </span>
      </label>
      <label className="netPoslbl">
        Current:{" "}
        <span id="currentValuationVal" className="netposclsdata">
          {/* {netpositionSummary.Current} */}
        </span>
      </label>
      <label className="netPoslbl">
        P &amp; L: <span id="cumulativePLVal">-33.30</span>
      </label>
      <label className="netPoslbl" id="cumulativePLPerc">
        {/* {netpositionSummary.PL} */}
      </label>
      <label>
        {/* <input type="radio" name="dailyExpiry" value="Daily" checked=""/> */}
        <span>Daily</span>
      </label>
      <label>
        {/* <input type="radio" name="dailyExpiry" value="Expiry"/> */}
        <span>Expiry</span>
      </label>
    </div>
  );
};

export default NetPositionSummary;
