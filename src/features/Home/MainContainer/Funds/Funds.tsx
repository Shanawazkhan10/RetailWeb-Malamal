import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { FetchMargin } from "../Dashboard/MarginSlice";
import Payment from "./Payment";
import { ShowPayment } from "./PaymentSlice";

const Funds = () => {
  const dispatch = useAppDispatch();
  const payment = useAppSelector((state) => state.payment);
  const userState = useAppSelector((state) => state.user);
  const marginState = useAppSelector((state) => state.margin);

  const options = {
    key: "rzp_live_q8gUCOxfHIbCkb",
    //key: "rzp_test_3ItfhafvOz0Kkx",
    amount: "100", //  = INR 1
    name: "Nuniyo ",
    description: "Deposit Funds",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    handler: function (response: any) {
      alert(response.razorpay_payment_id);
      console.log(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      console.log(response.razorpay_order_id);
      alert(response.razorpay_signature);
      console.log(response.razorpay_signature);
    },
    prefill: {
      name: "Gaurav",
      contact: "9999999999",
      email: "demo@demo.com",
    },
    notes: {
      address: "some address",
    },
    theme: {
      color: "blue",
      hide_topbar: false,
    },
  };

  const openPayModal = () => {
    //var rzp1 = new window.Razorpay(options);
    var rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  };

  useEffect(() => {
    dispatch(FetchMargin(userState.sessionKey));
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="margins">
      <div className="margin-actions text-right">
        <span className="upi-info">Instant, zero-cost fund transfers with</span>
        <button
          type="button"
          className="button-green"
          onClick={() => openPayModal()}
        >
          Add funds
        </button>

        <a target="_blank" className="button button-blue">
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
                    <h1 className="value text-blue">
                      {Number(marginState.marginData.CollateralValue) +
                        Number(marginState.marginData.AuxAdhocMargin) +
                        Number(marginState.marginData.AdhocMargin) +
                        Number(marginState.marginData.RmsCollateral) -
                        Number(marginState.marginData.MarginUsed)}
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td>Used margin</td>
                  <td>
                    <h1>{Number(marginState.marginData.MarginUsed)}</h1>
                  </td>
                </tr>
                <tr className="seperator">
                  <td>Available cash</td>
                  <td>
                    <h1>
                      {Number(marginState.marginData.CollateralValue) +
                        Number(marginState.marginData.AuxAdhocMargin) +
                        Number(marginState.marginData.AdhocMargin) -
                        Number(marginState.marginData.MarginUsed)}
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td>Opening balance</td>
                  <td>
                    {Number(marginState.marginData.CollateralValue) +
                      Number(marginState.marginData.AuxAdhocMargin) +
                      Number(marginState.marginData.AdhocMargin)}
                  </td>
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
                  <td>Collateral (Equity)</td>
                  <td>{marginState.marginData.RmsCollateral}</td>
                </tr>
                <tr>
                  <td>Total collateral</td>
                  <td>{marginState.marginData.RmsCollateral} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
