/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 31 2020 05:23:29 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import axios from "axios";

export const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const initRazorpay = async (props) => {
  const {
    amount,
    currency,
    receipt,
    checkout_api_url,
    razpay_order_url,
    name,
    description,
    logo,
  } = props;

  // load checkout script
  const res = await loadScript(checkout_api_url);

  if (!res) {
    alert("Razorpay SDK failed to load.");
    return;
  }

  await axios
    .post(razpay_order_url, {
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
        handler: (response) => {
          const {
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
          } = response;

          console.log({
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
          });
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    })
    .catch((error) => console.log(error));
  //   const data = await fetch(razpay_order_url, {
  //     method: "POST",
  //   }).then((t) => t.json());
};
