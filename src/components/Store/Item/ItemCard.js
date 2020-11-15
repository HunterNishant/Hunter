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
  // eslint-disable-next-line
  const {
    data,
    initTransaction,
    setIsProductPageOpen,
    setSelectedProduct,
  } = props;
  const {
    id,
    name,
    shortDesc,
    category,
    keysMultiplier,
    mrp: baseMrp,
    price: basePrice,
    currency,
    image,
    tag,
  } = data;

  const [mrp, setMrp] = useState(baseMrp);
  const [price, setPrice] = useState(basePrice);
  const [keysCount, setKeysCount] = useState(keysMultiplier);
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = () => {
    const productData = {
      id,
      name,
      amount: price * 100,
      currency,
      description: name,
      receipt: `receipt_${nanoid()}`,
      image:
        "https://res.cloudinary.com/chankruze/image/upload/v1604210061/Hunter/hunter.png",
      notes: {
        product_name: name,
        product_mrp: baseMrp,
        product_price: basePrice,
        product_discount: baseMrp - basePrice,
        product_type: category,
        product_quantity: quantity,
        keys_count: keysCount,
        total_price: price,
        total_discount: mrp - price,
      },
    };
    console.log("Initializing payment...");
    initTransaction(productData);
  };

  useEffect(() => {
    setMrp(baseMrp * quantity);
    setPrice(basePrice * quantity);
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
          <span className={styles.mrp}>{mrp}</span>
          <span className={styles.price}>{price}</span>
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
