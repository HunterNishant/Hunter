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
// import { MdViewStream, MdViewWeek } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
// spinners
import { HashLoader } from "react-spinners";
// css
import modalStyles from "../common/ModalCommon.module.css";
import styles from "./Store.module.css";
// utils
// import { products } from "./StoreItems"; // no need now
import { loadScript } from "../../utils";
import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

// Init Transaction
const initTransaction = async (props) => {
  const { amount, currency, receipt, notes, description, image } = props;

  await axios
    .post(`${process.env.REACT_APP_BACKEND_PROD}/order`, {
      amount,
      currency,
      receipt,
      notes,
    })
    .then((res) => {
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
            .post(`${process.env.REACT_APP_BACKEND_PROD}/check`, data)
            .then((res) => {
              console.log("Payment verified: OK");
              alert("Check your email for KEY and payment receipt");
            })
            .catch((err) => {
              console.log(err);
              alert("You're too smart to trick me!");
            });
        },
        modal: {
          ondismiss: () => {
            console.log("Payment form closed");
          },
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    })
    .catch((error) => console.log(error));
};

// fetch latest products from database
const getProducts = async () => {
  const { data: products } = await axios
    .get(`${process.env.REACT_APP_BACKEND_PROD}/store/categories`)
    .catch((err) => console.log(err));
  return products;
};

Modal.setAppElement("#react_root");

function Store() {
  // eslint-disable-next-line
  const [listVertical, setListVertical] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [products, setProducts] = useState([]);

  // const toggleListDirection = () => {
  //   setListVertical(!listVertical);
  // };

  useEffect(() => {
    // load razorpay checkout script
    loadScript("https://checkout.razorpay.com/v1/checkout.js")
      .then((res) => console.log("Razorpay checkout script loaded"))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.store_root}>
        {/* Filter Section */}
        {/* <div className={styles.filter_wrapper}>
        <button
          onClick={toggleListDirection}
          className={styles.btn_list_direction}
        >
          {!listVertical ? <MdViewStream /> : <MdViewWeek />}
        </button>
      </div> */}
        {/* Product Listing */}
        <div
          className={`${styles.products_wrapper} ${
            listVertical
              ? `${styles.list_vertical}`
              : `${styles.list_horizontal}`
          }`}
        >
          {products.length > 0 ? (
            products.map((data, index) => (
              <ItemCard
                key={index}
                data={data}
                initTransaction={initTransaction}
                handleViewMore={setIsProductModalOpen}
              />
            ))
          ) : (
            <div className={styles.loader}>
              <HashLoader color="green" />
            </div>
          )}
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
      {/* <Footer /> */}
    </>
  );
}

export default Store;
