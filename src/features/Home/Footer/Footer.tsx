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
    <div className="row fadeIn-element">
      <div className="col-md-12">
        <div className="footer-bottom">
          <div className="footer-logo">
            <div className="name-logo">
              <img src="images/footer/sensibull.svg" />
              <h6>Sensibull</h6>
            </div>
            <div className="name-logo">
              <img src="images/footer/smallcase.svg" />
              <h6>Smallcase</h6>
            </div>
            <div className="name-logo">
              <img src="images/footer/vested.svg" />
              <h6>Vested</h6>
            </div>
            <div className="name-logo">
              <img src="images/footer/streak.svg" />
              <h6>Streak</h6>
            </div>
            <div className="name-logo">
              <img src="images/footer/smart-store.svg" />
              <h6>Smart Store</h6>
            </div>
          </div>
          <div className="footer-content">
            <div className="fname border-right">
              <h6 className="color-grey">Holdings M2M</h6>
              <h6>{getHolding()}</h6>
            </div>
            <div className="fname">
              <h6 className="color-grey">Positions M2M</h6>
              <h6> {getPositionPandL()}</h6>
            </div>
            <div className="d-inline-block">
              <a href="#">
                <img src="images/footer/alert.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
