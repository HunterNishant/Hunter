/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 31 2020 04:22:34 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";
// import ItemCard from "./ItemCard";
import ItemDiv from "./ItemDiv";
import styles from "./Store.module.css";

import { products } from "./StoreItems";

function Store() {
  const [listVertical, setListVertical] = useState(true);

  const toggleListDirection = () => {
    setListVertical(!listVertical);
  };

  return (
    <div className={styles.store_root}>
      <div className={styles.filter_wrapper}>
        <button onClick={toggleListDirection}>Toggle List Direction</button>
      </div>
      <div
        className={`${styles.products_wrapper} ${
          listVertical ? `${styles.list_vertical}` : `${styles.list_horizontal}`
        }`}
      >
        {products &&
          products.map((data, index) => <ItemDiv key={index} details={data} />)}
        {/* {products &&
          products.map((data, index) => (
            <ItemCard key={index} details={data} />
          ))} */}
      </div>
    </div>
  );
}

export default Store;
