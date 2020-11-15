/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 31 2020 04:22:34 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState, useEffect } from "react";
import axios from "axios";
// components
import ItemCard from "./Item/ItemCard";
import Modal from "react-modal";
// icons
// import { MdViewStream, MdViewWeek } from "react-icons/md";
// import { VscChromeClose } from "react-icons/vsc";
// spinners
import { HashLoader } from "react-spinners";
// css
import styles from "./Store.module.css";
// utils
// import { products } from "./StoreItems"; // no need now
import { loadScript } from "../../utils";
import Navbar from "../Navbar/Navbar";
import { ItemCardFull } from "./Item/ItemCardFull";
import Footer from "../Footer/Footer";
import { PaymentModal } from "./PayNow/PaymentModal";

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
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isProductPageOpen, setIsProductPageOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [paymentData, setPaymentData] = useState(null);

  // const toggleListDirection = () => {
  //   setListVertical(!listVertical);
  // };
  
  useEffect(() => {
    // load razorpay checkout script
    loadScript("https://checkout.razorpay.com/v1/checkout.js")
      // .then((res) => console.log("Razorpay checkout script loaded"))
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
        {!isProductPageOpen && (
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
                  setIsProductPageOpen={setIsProductPageOpen}
                  setSelectedProduct={setSelectedProduct}
                  setPaymentData={setPaymentData}
                  setPaymentModalOpen={setIsPaymentModalOpen}
                />
              ))
            ) : (
              <div className={styles.loader}>
                <HashLoader color="green" />
              </div>
            )}
          </div>
        )}

        {/* Product Full Post */}
        {isProductPageOpen && selectedProduct !== null && (
          <ItemCardFull
            data={selectedProduct}
            setIsProductPageOpen={setIsProductPageOpen}
            setSelectedProduct={setSelectedProduct}
            setPaymentData={setPaymentData}
            setPaymentModalOpen={setIsPaymentModalOpen}
          />
        )}

        {/* hidden by default */}
        {isPaymentModalOpen && paymentData && (
          <PaymentModal
            isPaymentModalOpen={isPaymentModalOpen}
            setIsPaymentModalOpen={setIsPaymentModalOpen}
            itemData={paymentData}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default Store;
