/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 31 2020 04:22:34 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import { loadScript } from "../../utils";
import styles from "./Store.module.css";

import { products } from "./StoreItems";

const initTransaction = async (props) => {
  console.log("[Store] Init Transaction ");
  const { amount, currency, receipt, name, description, logo } = props;

  console.log(process.env.REACT_APP_RAZPAY_ORDER_URL);
  console.log(process.env.REACT_APP_RAZPAY_CHECK_URL);
  console.log(process.env.REACT_APP_RAZPAY_KEY);

  await axios
    .post(process.env.REACT_APP_RAZPAY_ORDER_URL, {
      amount,
      currency,
      receipt,
    })
    .then((res) => {
      console.log(res.data);

      const options = {
        key: process.env.REACT_APP_RAZPAY_KEY,
        currency: res.data.currency,
        amount: res.data.amount,
        order_id: res.data.id,
        name,
        description,
        image: logo,
        handler: async (response) => {
          console.log("Checking payment");
          const data = {
            orderCreationId: res.data.id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          await axios
            .post(process.env.REACT_APP_RAZPAY_CHECK_URL, data)
            .then((res) => {
              console.log(res.data);
              alert(res.data.msg);
            })
            .catch((err) => {
              console.log(err);
              alert("You're too smart to trick me!");
            });
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    })
    .catch((error) => console.log(error));
};

function Store() {
  const [listVertical, setListVertical] = useState(false);

  const toggleListDirection = () => {
    setListVertical(!listVertical);
  };

  useEffect(() => {
    // load razorpay checkout script
    loadScript("https://checkout.razorpay.com/v1/checkout.js")
      .then((res) => console.log("Razorpay checkout script loaded"))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.store_root}>
      <div className={styles.filter_wrapper}>
        <button onClick={toggleListDirection}>Toggle List Direction</button>
      </div>
      <div
        className={`${styles.products_wrapper} ${
          listVertical ? `${styles.list_vertical}` : `${styles.list_horizontal}`
        }`}
      >
        {products &&
          products.map((data, index) => (
            <ItemCard
              key={index}
              data={data}
              initTransaction={initTransaction}
            />
          ))}
        {/* {products &&
          products.map((data, index) => (
            <ItemCard key={index} details={data} />
          ))} */}
      </div>
    </div>
  );
}

export default Store;
