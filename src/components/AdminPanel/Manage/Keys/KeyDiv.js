/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Nov 05 2020 03:26:23 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import styles from "./KeyDiv.module.css";

function KeyDiv(props) {
  const {
    key,
    type,
    duration,
    isSold,
    isActivated,
    dateAdded,
    dateSold,
  } = props.data;

  return (
    <div className={styles.key_div_root}>
      <p>{key}</p>
      <p>{type}</p>
      <p>{duration}</p>
      <p>{isSold ? "true" : "false"}</p>
      <p>{isActivated ? "true" : "false"}</p>
      <p>{dateAdded}</p>
      <p>{dateSold}</p>
    </div>
  );
}

export default KeyDiv;
