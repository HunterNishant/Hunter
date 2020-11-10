/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Nov 08 2020 17:03:52 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import { useInputText, useInputFloat } from "../../../../hooks/useGeekofia";
import { createDocs } from "../../../../utils";
import ItemCard from "../../../Store/ItemCard";
import styles from "./AddCategorySec.module.css";

const handleCreateCategory = async (type, data, close) => {
  await createDocs(type, data).then(({ status }) => {
    if (status === "ok") {
      window.alert("Category added!");
      close({
        name: "",
        id: 0,
      });
    } else {
      window.alert("Category can't be added!");
    }
  });
};

export const AddCategorySec = ({ close }) => {
  // eslint-disable-next-line
  const [name, bindName, resetName] = useInputText("Monthly Bundle: Pack of 3");
  // eslint-disable-next-line
  const [type, bindType, resetType] = useInputText("monthly");

  const [
    keysMultiplier,
    bindKeysMultiplier,
    // eslint-disable-next-line
    resetKeysMultiplier,
  ] = useInputText(3);
  // eslint-disable-next-line
  const [mrp, bindMrp, resetMrp] = useInputFloat(keysMultiplier * 1800);
  // eslint-disable-next-line
  const [price, bindPrice, resetPrice] = useInputFloat(keysMultiplier * 1600);
  // eslint-disable-next-line
  const [currency, bindCurrency, resetCurrency] = useInputText("INR");
  // eslint-disable-next-line
  const [description, bindDescription, resetDescription] = useInputText(
    "Discount Deals. Genuine Steals."
  );
  // eslint-disable-next-line
  const [image, bindImage, resetImage] = useInputText(
    "https://res.cloudinary.com/chankruze/image/upload/v1604210061/Hunter/hunter.png"
  );
  // eslint-disable-next-line
  const [tag, bindTag, resetTag] = useInputText("Bundle");

  return (
    <div className={styles.add_category_sec_root}>
      <div className={styles.left}>
        {/* <h1>Add a new Product</h1> */}
        <div className={styles.add_category_div}>
          <p className={styles.add_category_p}>Title</p>
          <div className={styles.add_category_input_wrapper}>
            <input type="text" {...bindName} />
          </div>
        </div>
        <div className={styles.add_category_div}>
          <p className={styles.add_category_p}>Duration</p>
          <div className={styles.add_category_input_wrapper}>
            <input
              type="text"
              {...bindType}
              placeholder="monthly, weekly etc."
            />
          </div>
        </div>
        <div className={styles.add_category_div}>
          <p className={styles.add_category_p}>Keys Quantity</p>
          <div className={styles.add_category_input_wrapper}>
            <input type="number" {...bindKeysMultiplier} placeholder="3" />
          </div>
        </div>
        <div className={styles.add_category_div}>
          <p className={styles.add_category_p}>MRP</p>
          <div className={styles.add_category_input_wrapper}>
            <input type="number" {...bindMrp} placeholder="2100" />
          </div>
        </div>
        <div className={styles.add_category_div}>
          <p className={styles.add_category_p}>Price</p>
          <div className={styles.add_category_input_wrapper}>
            <input type="number" {...bindPrice} placeholder="1800" />
          </div>
        </div>
        <div className={styles.add_category_div}>
          <p className={styles.add_category_p}>Image</p>
          <div className={styles.add_category_input_wrapper}>
            <input
              type="text"
              {...bindImage}
              placeholder="https://res.cloudinary.com/chankruze/image/upload/v1604513114/Hunter/sx.png"
            />
          </div>
        </div>
        <div className={styles.add_category_div}>
          <p className={`${styles.add_category_p} ${styles.description}`}>
            Short Description
          </p>
          <div
            className={`${styles.add_category_input_wrapper} ${styles.textarea_wrapper}`}
          >
            <textarea {...bindDescription} />
          </div>
        </div>
        <div className={styles.add_category_div}>
          <p className={styles.add_category_p}>Currency</p>
          <div className={styles.add_category_input_wrapper}>
            <input type="text" {...bindCurrency} />
          </div>
        </div>

        <div className={styles.add_category_div}>
          <p className={styles.add_category_p}>Tag</p>
          <div className={styles.add_category_input_wrapper}>
            <input type="text" {...bindTag} />
          </div>
        </div>
        <div className={styles.add_category_div}>
          <div className={styles.add_category_btn_group}>
            <button className={styles.btn_danger} onClick={() => close()}>
              Cancel
            </button>
            <button
              onClick={() =>
                handleCreateCategory(
                  "category",
                  {
                    name,
                    category: type,
                    keysMultiplier,
                    mrp,
                    price,
                    currency,
                    description,
                    image,
                    tag,
                  },
                  close
                )
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <span className={styles.span_preview}>Preview</span>
        <ItemCard
          data={{
            name,
            category: type,
            mrp,
            price,
            currency,
            description,
            image,
            tag,
            count: 0,
          }}
          initTransaction={null}
          handleViewMore={null}
        />
        <p style={{ color: "red" }}>CAUTION: Don't click on Buy Now</p>
      </div>
    </div>
  );
};
