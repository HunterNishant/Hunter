/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 03 2020 22:36:31 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import styles from "./MenuOptions.module.css";

function MenuOption(props) {
  // eslint-disable-next-line
  const { name, icon, link } = props.data;

  return (
    <div className={styles.menu_option}>
      {icon}
      <p>{name}</p>
    </div>
  );
}

export default MenuOption;
