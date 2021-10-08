import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { FetchMargin } from "../Dashboard/MarginSlice";
import Payment from "./Payment";
import { ShowPayment, PaymentOrderIdCancel } from "./PaymentSlice";
import { getsPaymentsOrderIds } from "./PaymentSlice";
const Funds = () => {
  const dispatch = useAppDispatch();
  const payment = useAppSelector((state) => state.payment);
  console.log("payment object", payment.payment);
  const userState = useAppSelector((state) => state.user);
  const marginState = useAppSelector((state) => state.margin);
  const [amount, SetAmount] = useState("0");

  function onPriceChange(e: any) {
    SetAmount(e.target.value);
  }

  const options = {
    key: "rzp_live_q8gUCOxfHIbCkb",
    //key: "rzp_test_3ItfhafvOz0Kkx",
    amount: amount, //  = INR 1
    name: "Nuniyo ",
    description: "Deposit Funds",
    order_id: payment.payment.orderId,
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
    modal: {
      ondismiss: function () {
        console.log("Checkout form closed");
        dispatch(PaymentOrderIdCancel(userState));
      },
    },
  };

  const openPayModal = (e: any) => {
    e.preventDefault();

    //var rzp1 = new window.Razorpay(options);
    var rzp1 = new (window as any).Razorpay(options);
    console.log("razer pay", rzp1);

    rzp1.open();
    dispatch(getsPaymentsOrderIds(userState.sessionKey));
  };

  useEffect(() => {
    dispatch(FetchMargin(userState.sessionKey));
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div className="fund-equityplate fadeIn-element">
          <div className="row slideInDown-element">
            <div className="col-md-12 equitysummarymenu">
              <img src="images/equity.svg" /> <span>Equity</span>
              <div className="float-right">
                <div className="btnalign">
                  <a href="#" className="mx-2">
                    <img
                      src=""
                      style={{
                        width: "15px",
                        height: "15px",
                        background: "rgba(106, 78, 238, 0.2)",
                        borderRadius: "3px",
                      }}
                    />
                    View Statement
                  </a>
                  <a href="#">
                    <img src="images/positions/download.svg" /> Help
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row slideInDown-element">
            <div className="col-md-5 my-4">
              <div className="funds-equity">
                <div id="box1" className="table border-bottom">
                  <div className="table-cell">
                    <h3>Available margin</h3>
                  </div>
                  <div className="table-cell text-right">
                    <span>
                      {Number(marginState.marginData.CollateralValue) +
                        Number(marginState.marginData.AuxAdhocMargin) +
                        Number(marginState.marginData.AdhocMargin) +
                        Number(marginState.marginData.RmsCollateral) -
                        Number(marginState.marginData.MarginUsed)}
                    </span>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">
                      <h3>Used margin</h3>
                    </div>
                    <div className="table-cell text-right">
                      <span>{Number(marginState.marginData.MarginUsed)}</span>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">
                      <h3>Available cash</h3>
                    </div>
                    <div className="table-cell text-right">
                      <span>
                        {Number(marginState.marginData.CollateralValue) +
                          Number(marginState.marginData.AuxAdhocMargin) +
                          Number(marginState.marginData.AdhocMargin) -
                          Number(marginState.marginData.MarginUsed)}
                      </span>
                    </div>
                  </div>
                </div>
                <div id="box2" className="table mt-4 border-bottom">
                  <div className="table-cell">
                    <h6>Opening balance</h6>
                  </div>
                  <div className="table-cell text-right">
                    <h6>
                      {Number(marginState.marginData.CollateralValue) +
                        Number(marginState.marginData.AuxAdhocMargin) +
                        Number(marginState.marginData.AdhocMargin)}
                    </h6>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">
                      <h6>Payin</h6>
                    </div>
                    <div className="table-cell text-right">
                      <h6>0.00</h6>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">
                      <h6>SPAN</h6>
                    </div>
                    <div className="table-cell text-right">
                      <h6>0.00</h6>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">
                      <h6>Delivery margin</h6>
                    </div>
                    <div className="table-cell text-right">
                      <h6>0.00</h6>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">
                      <h6>Exposure</h6>
                    </div>
                    <div className="table-cell text-right">
                      <h6>0.00</h6>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">
                      <h6>Options premium</h6>
                    </div>
                    <div className="table-cell text-right">
                      <h6>0.00</h6>
                    </div>
                  </div>
                </div>
                <div id="box3" className="table mt-4">
                  <div className="table-cell">
                    <h6>Collateral (Liquid funds)</h6>
                  </div>
                  <div className="table-cell text-right">
                    <h6>0.00</h6>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">
                      <h6>Collateral (Equity)</h6>
                    </div>
                    <div className="table-cell text-right">
                      <h6>{marginState.marginData.RmsCollateral}</h6>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">
                      <h6>Total Collateral</h6>
                    </div>
                    <div className="table-cell text-right">
                      <h6>{marginState.marginData.RmsCollateral}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="funds-deposit">
                <div className="text-center">
                  <span className="dfundshead">Deposit funds</span>
                </div>
                <div className="dfundsbox">
                  <p className="text-left">{userState.UserId}</p>
                  <form>
                    <div className="form">
                      <input
                        type="text"
                        id="Amount"
                        className="form__input"
                        data-autocomplete="off"
                        placeholder=" "
                        onChange={(e) => {
                          onPriceChange(e);
                        }}
                      />
                      <label htmlFor="userid" className="form__label">
                        Amount
                      </label>
                      <span className="icon-inside">
                        <i className="far fa-envelope"></i>
                      </span>
                    </div>
                    <div className="form">
                      <input
                        type="password"
                        id="password"
                        className="form__input"
                        placeholder=" "
                      />
                      <label htmlFor="password" className="form__label">
                        Bank Account
                      </label>
                      <span className="icon-inside">
                        <i className="far fa-envelope"></i>
                      </span>
                    </div>
                    <div className="form">
                      <div className="row">
                        <div className="col-md-6 py-0">
                          <button
                            type="submit"
                            className="btn w-100 addfund-btn"
                            onClick={(e) => openPayModal(e)}
                          >
                            <img src="images/add.svg" height="15" /> Add Funds
                          </button>
                        </div>
                        <div className="col-md-6 pl-0">
                          <button
                            type="submit"
                            className="btn w-100 withdfund-btn"
                          >
                            <img src="images/add.svg" height="15" /> Withdraw
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
