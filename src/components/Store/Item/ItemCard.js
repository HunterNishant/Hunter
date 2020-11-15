/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 31 2020 04:22:51 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
// css
import styles from "./ItemCard.module.css";

function ItemCard(props) {
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
    shortDesc,
    image,
    tag,
  } = data;

  // razor pay
  const [rpzMrp, setRpzMrp] = useState(mrp.inr);
  const [rpzPrice, setRpzPrice] = useState(price.inr);
  // common
  const [keysCount, setKeysCount] = useState(keysMultiplier);
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = async () => {
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
  const handleFullPost = () => {
    setIsProductPageOpen(true);
    setSelectedProduct(data);
  };

  return (
    <div
      className={`${styles.card} ${keysMultiplier > 1 && `${styles.bundle}`}`}
    >
      {tag && (
        <span
          className={styles.card_tag}
          style={{
            backgroundColor: `${
              tag === "hot" || tag === "bundle" ? "white" : "blue"
            }`,
            color: `${tag === "bundle" && "#000"}`,
          }}
        >
          {tag}
        </span>
      )}

      <div className={styles.card_img_wrapper}>
        <img className={styles.card_img_top} src={image} alt="Product Pic" />
      </div>

      <div className={styles.card_body}>
        {/* Name */}
        <p className={styles.card_title}>{name}</p>
        {/* Mrp / Price */}
        <p className={styles.card_sub_title}>
          <span className={styles.mrp}>{rpzMrp}</span>
          <span className={styles.price}>{rpzPrice}</span>
        </p>

        {/* Duration Type */}
        {/* <p>{category}</p> */}
        {/* Keys Count */}
        <p className={styles.card_total_keys}>
          Total Keys: <span>{keysCount}</span>
        </p>
        {/* Short Description */}
        {shortDesc && <p className={styles.card_text}>{shortDesc}</p>}

        {/* Description Page Full */}
        <button
          className={styles.card_read_more}
          onClick={() => handleFullPost()}
        >
          Read More
        </button>
        {/* Action Group */}
        <div className={styles.card_action_group}>
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
            className={styles.card_button}
            disabled={quantity === 0 ? true : false}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
