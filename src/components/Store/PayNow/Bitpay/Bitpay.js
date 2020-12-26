/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Dec 11 2020 16:13:51 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { useState, useEffect } from "react";
import { useInputText } from "geekofia-hooks";
import { nanoid } from "nanoid";
import axios from "axios";
import styles from "./Bitpay.module.css";

// prepare bitpay data
const prepareBitpayData = (
  { name, keysMultiplier, price, quantity, category },
  { email }
) => {
  const totalPrice = price.usd * quantity;

  return {
    price: totalPrice.toFixed(2),
    currency: "USD",
    receipt: `ORD_${nanoid()}`,
    buyer: {
      email,
    },
    product: {
      name,
      price: price.usd.toFixed(2),
      category,
      quantity,
      keysMultiplier,
    },
  };
};

// check valid email
const checkEmail = (email) => {
  // eslint-disable-next-line
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// open invoice url
const initBitpay = async (bitpayData, setIsProcessing) => {
  setIsProcessing(true);
  const {
    data: { invoiceUrl },
  } = await axios
    .post(`${process.env.REACT_APP_BACKEND_PROD}/bitpay/create`, bitpayData)
    .catch((err) => console.log(err));

  window.open(invoiceUrl, "_blank").focus();
};

export const Bitpay = ({ itemData, cancelCallback }) => {
  const [bitpayData, setBitpayData] = useState(null);
  const [email, bindEmail] = useInputText("");
  const [isVaildEmail, setIsValidEmail] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setBitpayData(prepareBitpayData(itemData, { email }));

    setIsValidEmail(checkEmail(email));
  }, [itemData, email]);

  return (
    <div className={styles.bitpay_wrapper}>
      {!isProcessing && (
        <div className={styles.email_wrapper}>
          <p>
            Enter the email in which you want to receive keys after successful
            payment*
          </p>
          <input
            type="email"
            {...bindEmail}
            required
            placeholder="buyer@hunter.org.in"
          />
          <button
            onClick={() => initBitpay(bitpayData, setIsProcessing)}
            disabled={!isVaildEmail}
          >
            Proceed
          </button>
        </div>
      )}

      {isProcessing && (
        <div className={styles.payment_status}>
          <h2>Bitpay payment page will open automatically in a new tab</h2>
          <p className={styles.info}>
            <b>
              Make sure you note down your <code>Order ID</code> &amp;{" "}
              <code>Invoice ID</code> for future reference.
            </b>
            <br />
            It'll take several minutes to process &amp; verify your transaction.
            You can close this modal!
          </p>
        </div>
      )}
    </div>
  );
};
