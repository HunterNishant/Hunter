/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 31 2020 04:22:34 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
// components
import ItemCard from "./ItemCard";
// icons
import { MdViewStream, MdViewWeek } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
// css
import modalStyles from "../common/ModalCommon.module.css";
import styles from "./Store.module.css";
// utils
import { products } from "./StoreItems";
import { loadScript } from "../../utils";

// Init Transaction
const initTransaction = async (props) => {
  const { amount, currency, receipt, notes, description, image } = props;

  await axios
    .post(process.env.REACT_APP_RAZPAY_ORDER_URL, {
      amount,
      currency,
      receipt,
      notes,
    })
    .then((res) => {
      console.log(res.data);

      const options = {
        key: process.env.REACT_APP_RAZPAY_KEY,
        currency: res.data.currency,
        amount: res.data.amount,
        order_id: res.data.id,
        description,
        image,
        handler: async (response) => {
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
        modal: {
          ondismiss: () => {
            alert("Payment form closed");
          },
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    })
    .catch((error) => console.log(error));
};

Modal.setAppElement("#react_root");

function Store() {
  const [listVertical, setListVertical] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

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
        <button
          onClick={toggleListDirection}
          className={styles.btn_list_direction}
        >
          {!listVertical ? <MdViewStream /> : <MdViewWeek />}
        </button>
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
              handleViewMore={setIsProductModalOpen}
            />
          ))}
        {/* {products &&
          products.map((data, index) => (
            <ItemCard key={index} details={data} />
          ))} */}
      </div>
      <Modal
        className={modalStyles.modal}
        overlayClassName={modalStyles.modalOverlay}
        isOpen={isProductModalOpen}
      >
        {/* Close Button */}
        <span
          className={modalStyles.close}
          onClick={() => setIsProductModalOpen(false)}
        >
          <VscChromeClose />
        </span>
      </Modal>
    </div>
  );
}

export default Store;
