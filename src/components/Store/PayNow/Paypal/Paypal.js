/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Nov 16 2020 00:49:37 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { useState, useEffect, useRef } from "react";
import { loadScript } from "../../../../utils";
import { GoVerified } from "react-icons/go";
import styles from "./Paypal.module.css";

export const Paypal = ({ paypalData, cancelCallback }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [isApproved, setIsApproved] = useState(false);

  let paypalRef = useRef();

  useEffect(() => {
    // load razorpay checkout script
    loadScript(
      `https://www.paypal.com/sdk/js?client-id=${process.env.REACT_APP_SB_CLIENT_ID}`
    )
      .then((res) => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: paypalData,
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              if (order.status === "COMPLETED") setIsApproved(true);
            },
            onError: (err) => {
              setErrorMsg(err);
              console.error(err);
            },
            onCancel: (data) => {
              cancelCallback(true);
            },
          })
          .render(paypalRef.current);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [paypalData]);

  if (errorMsg) return <div>Uh oh, an error occurred! {errorMsg.message}</div>;

  return (
    <div className={styles.paypal_btn_wrapper}>
      <div
        ref={paypalRef}
        style={{ display: `${isApproved ? "none" : "block"}` }}
      ></div>

      {isApproved && (
        <div className={styles.msg_success}>
          <GoVerified size={48} color="green" />
          <p>It'll take several minutes (6-10 mins) to verify your payment.</p>
          <p>Check your email for KEY and payment receipt</p>
        </div>
      )}
    </div>
  );
};
