import { useAppSelector } from "../../../app/hooks";

const Footer = () => {
  const HoldingList = useAppSelector((state) => state.holding);
  const NetpositionList = useAppSelector((state) => state.netposition);

  function getPositionPandL() {
    var amt = 0;
    NetpositionList.netposition?.map(
      (x) => amt + Number(x.ltp) - Number(x.buyAmt)
    );
    return amt;
  }

  function getHolding() {
    var currentValue = 0;
    // {
    //   HoldingList.holding.holdinglist?.map((holding) => {
    //     if (holding.curval != undefined)
    currentValue =
      HoldingList.holding.currentValue - HoldingList.holding.totalInvestMent;
    //});
    //}

    return currentValue;
  }

  return (
    //DM : sample code to add new design - 09102021
    <div className="footer" style={{ display: "inline-block" }}>
      <div style={{ float: "left", paddingLeft: "30px" }}> Holding</div>
      <div style={{ float: "left", paddingLeft: "30px" }}>{getHolding()}</div>
      <div style={{ float: "left", paddingLeft: "30px" }}> Position</div>
      <div style={{ float: "left", paddingLeft: "30px" }}>
        {getPositionPandL()}
      </div>
    </div>
  );
};

export default Footer;
