/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 31 2020 04:22:51 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { FaMinus, FaPlus } from "react-icons/fa";
// css
import styles from "./ItemCard.module.css";

function ItemCard(props) {
  // imageUrl, name, id, price, mrp
  const { data, initTransaction, handleViewMore } = props;
  const {
    id,
    name,
    category,
    mrp,
    price,
    currency,
    description,
    image,
    tag,
  } = data;
  const [quantity, setQuantity] = useState(0);

  const handleBuyNow = () => {
    const productData = {
      id,
      name,
      amount: price * quantity * 100,
      currency,
      description,
      receipt: `receipt_${nanoid()}`,
      image:
        "https://res.cloudinary.com/chankruze/image/upload/v1604210061/Hunter/hunter.png",
      notes: {
        product_name: name,
        product_duration: name.split(" ").slice(-2).join(" "),
        product_mrp: mrp,
        product_price: price,
        product_discount: mrp - price,
        product_type: category,
        product_quantity: quantity,
        total_price: quantity * price,
        total_discount: (mrp - price) * quantity,
      },
    };
    console.log("Initializing payment...");
    initTransaction(productData);
  };

  useEffect(() => {
    if (tag) {
      setQuantity(1);
    }
  }, [tag]);

  return (
    <div className={styles.card}>
      {tag && (
        <span
          className={styles.card_tag}
          style={{ backgroundColor: `${tag === "hot" ? "red" : "blue"}` }}
        >
          {tag}
        </span>
      )}

      <div className={styles.card_img_wrapper}>
        <img className={styles.card_img_top} src={image} alt="Product Pic" />
      </div>

      <div className={styles.card_body}>
        <p className={styles.card_title}>
          {name}
          {/* {tag && (
            <span
              className={styles.card_title_tag}
              style={{ backgroundColor: `${tag === "hot" ? "red" : "blue"}` }}
            >
              {tag}
            </span>
          )} */}
        </p>
        <p className={styles.card_sub_title}>
          <span className={styles.mrp}>{mrp}</span>
          <span className={styles.price}>{price}</span>
        </p>
        <p className={styles.card_text}>{description}</p>
        <button
          className={styles.card_read_more}
          onClick={() => handleViewMore(true)}
        >
          full description
        </button>
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
