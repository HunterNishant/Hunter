/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 31 2020 04:22:51 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";
import { nanoid } from "nanoid";
import { FaMinus, FaPlus } from "react-icons/fa";
// css
import styles from "./ItemCard.module.css";

function ItemCard(props) {
  // imageUrl, name, id, price, mrp
  const { data, initTransaction } = props;
  const { id, name, mrp, price, currency, description, image } = data;
  const [quantity, setQuantity] = useState(0);

  const handleBuyNow = () => {
    if (quantity > 0) {
      const productData = {
        id,
        name,
        mrp,
        amount: price * 100,
        currency,
        receipt: `${nanoid()}`,
      };

      console.log("[ItemCard] Init payment ");

      initTransaction(productData);
    }
  };

  return (
    <div className={styles.card}>
      <img className={styles.card_img_top} src={image} alt="Product Pic" />
      <div className={styles.card_body}>
        <p className={styles.card_title}>{name}</p>
        <p className={styles.card_sub_title}>
          <p className={styles.mrp}>{mrp}</p>
          <p className={styles.price}>{price}</p>
        </p>
        <p className={styles.card_text}>{description}</p>
        <div className={styles.card_action_group}>
          <div className={styles.item_quantity_wrapper}>
            <button
              className={styles.btn_quantity}
              onClick={() => setQuantity(quantity - 1 > -1 ? quantity - 1 : 0)}
            >
              <FaMinus />
            </button>
            <input
              className={styles.input_quantity}
              type="number"
              value={quantity}
            />
            <button
              className={styles.btn_quantity}
              onClick={() => setQuantity(quantity + 1)}
            >
              <FaPlus />
            </button>
          </div>
          <button onClick={handleBuyNow} className={styles.card_button}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
