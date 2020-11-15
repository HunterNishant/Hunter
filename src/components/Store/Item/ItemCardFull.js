/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Nov 13 2020 21:27:27 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useEffect, useState } from "react";
import { ImageView } from "./ImageView";
import { FaMinus, FaPlus } from "react-icons/fa";
// css
import styles from "./ItemCardFull.module.css";
import { MdArrowBack } from "react-icons/md";

export const ItemCardFull = (props) => {
  // eslint-disable-next-line
  const {
    data,
    setIsProductPageOpen,
    setSelectedProduct,
    setPaymentData,
    setPaymentModalOpen,
  } = props;
  const {
    name,
    category,
    keysMultiplier,
    mrp,
    price,
    description,
    image,
    screenshots,
  } = data;

  // razor pay
  const [rpzMrp, setRpzMrp] = useState(mrp.inr);
  const [rpzPrice, setRpzPrice] = useState(price.inr);
  // common
  const [keysCount, setKeysCount] = useState(keysMultiplier);
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = () => {
    const paymentData = {
      quantity,
      keysMultiplier,
      price,
      name,
      category,
      image,
    };
    setPaymentData(paymentData);
    setPaymentModalOpen(true);
  };

  useEffect(() => {
    // razor pay
    setRpzMrp(mrp.inr * quantity);
    setRpzPrice(price.inr * quantity);
    // common
    setKeysCount(keysMultiplier * quantity);
    // eslint-disable-next-line
  }, [quantity]);

  // eslint-disable-next-line
  const closeFullPost = () => {
    setIsProductPageOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div
      className={`${styles.item_card_full_root} ${
        keysMultiplier > 1 && `${styles.bundle}`
      }`}
    >
      <div className={styles.left}>
        {/* Name */}
        <p className={styles.item_title}>{name}</p>
        {/* Mrp / Price */}
        <p className={styles.item_sub_title}>
          <span className={styles.mrp}>{rpzMrp}</span>
          <span className={styles.price}>{rpzPrice}</span>
        </p>
        {/* Keys Count */}
        <p className={styles.item_total_keys}>
          Total Keys:{" "}
          <span>
            {keysMultiplier} x {quantity} = {keysCount}
          </span>
        </p>
        {/* Description */}
        <p className={styles.item_text}>{description}</p>

        {/* action bar */}
        <div className={styles.action_bar}>
          {/* close product page */}
          <button className={styles.btn_close} onClick={closeFullPost}>
            <MdArrowBack size={24} />
            <span>back</span>
          </button>
          {/* buying group */}
          <div className={styles.action_buy_group}>
            <div className={styles.item_quantity_wrapper}>
              <button
                className={styles.btn_quantity}
                onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
              >
                <FaMinus />
              </button>
              <input
                className={styles.input_quantity}
                type="number"
                readOnly
                value={quantity}
              />
              <button
                className={styles.btn_quantity}
                onClick={() => setQuantity(quantity + 1)}
              >
                <FaPlus />
              </button>
            </div>
            <button
              onClick={handleBuyNow}
              className={styles.btn_buy_now}
              disabled={quantity === 0 ? true : false}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <ImageView screenshots={screenshots} />
      </div>
    </div>
  );
};
