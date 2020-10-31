/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 31 2020 04:23:28 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import { nanoid } from "nanoid";
import styles from "./ItemDiv.module.css";

import { initRazorpay } from "../../utils";

const handleBuyNow = (price, currency, name, description) => {
  const receipt = nanoid().toString();

  // checkout_api_url = https://checkout.razorpay.com/v1/checkout.js
  // razpay_order_url = https://razpay.herokuapp.com/order
  // logo = "https://sdsds.png"
  // name
  // description
  initRazorpay({
    checkout_api_url: "https://checkout.razorpay.com/v1/checkout.js",
    razpay_order_url: "https://razpay.herokuapp.com/order",
    amount: price * 100,
    currency,
    receipt,
    logo: "",
    name,
    description,
  });
};

function ItemDiv(props) {
  const { id, name, mrp, price, currency, description, image } = props.details;

  return (
    <div className={styles.item_div_wrapper}>
      <img className={styles.image} src={image} alt="Product Logo" />
      <div className={styles.item_data_wrapper}>
        <div className={styles.name}>{name}</div>
        <div className={styles.id}>{id}</div>
        <div className={styles.price_wrapper}>
          <span>{mrp}</span>
          <span>{price}</span>
        </div>
        <div className={styles.description}>{description}</div>
        <button
          onClick={() => handleBuyNow(price, currency, name, description)}
        >
          Buy now
        </button>
      </div>
    </div>
  );
}

export default ItemDiv;
