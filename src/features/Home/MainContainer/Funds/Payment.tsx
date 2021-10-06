import React, { useEffect } from "react";
import { useAppSelector } from "../../../../app/hooks";

const Payment = () => {
  const payment = useAppSelector((state) => state.payment.payment);
  const options = {
    key: "rzp_live_q8gUCOxfHIbCkb",
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
  // const rzp1 = new (window as any).Razorpay(options);
  // rzp1.on("payment.failed", function (response: any) {
  //   alert(response.error.code);
  //   alert(response.error.description);
  //   alert(response.error.source);
  //   alert(response.error.step);
  //   alert(response.error.reason);
  //   alert(response.error.metadata.order_id);
  //   alert(response.error.metadata.payment_id);
  // });

  const openPayModal = () => {
    //var rzp1 = new window.Razorpay(options);
    var rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return payment.bShow ? (
    <>
      <button onClick={openPayModal}>Pay with Razorpay</button>
    </>
  ) : (
    <></>
  );
};

export default Payment;
