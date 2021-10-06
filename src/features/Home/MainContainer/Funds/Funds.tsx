import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import Payment from "./Payment";
import { ShowPayment } from "./PaymentSlice";

const Funds = () => {
  const payment = useAppSelector((state) => state.payment);
  const dispatch = useAppDispatch();
  function AddFund() {
    dispatch(ShowPayment(true));
  }
  return (
    <div className="margins">
      <Payment></Payment>
      <div className="margin-actions text-right">
        <span className="upi-info">Instant, zero-cost fund transfers with</span>
        <button
          type="button"
          className="button-green"
          onClick={() => AddFund()}
        >
          Add funds
        </button>
        <a
          target="_blank"
          href="https://console.zerodha.com/funds/overview/"
          className="button button-blue"
        >
          Withdraw
        </a>
      </div>
      <div className="row">
        <div className="six columns">
          <h3 className="title">
            <span className="icon icon-pie-chart"></span>
            <span className="name">equity</span>
          </h3>
          <div className="data-table">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <div>Available margin</div>
                  </td>
                  <td>
                    <h1 className="value text-blue">0</h1>
                  </td>
                </tr>
                <tr>
                  <td>Used margin</td>
                  <td>
                    <h1>0</h1>
                  </td>
                </tr>
                <tr className="seperator">
                  <td>Available cash</td>
                  <td>
                    <h1>0</h1>
                  </td>
                </tr>
                <tr>
                  <td>Opening balance</td> <td>0</td>
                </tr>
                <tr>
                  <td>Payin</td> <td>0.00</td>
                </tr>
                <tr>
                  <td>SPAN</td> <td>0.00</td>
                </tr>
                <tr>
                  <td>Delivery margin</td> <td>0.00</td>
                </tr>
                <tr>
                  <td>Exposure</td> <td>0.00</td>
                </tr>
                <tr className="seperator">
                  <td>Options premium</td> <td>0.00</td>
                </tr>
                <tr>
                  <td>Collateral (Liquid funds)</td> <td>0.00</td>
                </tr>
                <tr>
                  <td>Collateral (Equity)</td> <td>0.00</td>
                </tr>
                <tr>
                  <td>Total collateral</td> <td>0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="six columns">
          <h3 className="title">
            <span className="icon icon-droplet"></span>
            <span className="name">commodity</span>
          </h3>
          <div className="empty-state">
            <div>
              <p>You don't have a commodity account</p>
            </div>
            <a
              target="_blank"
              href="https://console.zerodha.com/account/segment-activation"
              className="button button-blue"
            >
              Activate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
