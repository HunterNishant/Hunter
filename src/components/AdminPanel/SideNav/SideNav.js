/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 03 2020 20:39:45 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import MenuOption from "./MenuOption";
import { MenuOptions } from "./MenuOptions";
import styles from "./SideNav.module.css";

function SideNav() {
  const [isOpened, setIsOpened] = useState(false);

  const toggleIsOpened = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={styles.sidenav_root}>
      <div className={styles.menu_btn} onClick={toggleIsOpened}>
        {isOpened ? <MdClose size={32} /> : <MdMenu size={32} />}
      </div>

      {!isOpened && (
        <div className={styles.menu_options_min}>
          {MenuOptions &&
            MenuOptions.map((option, i) => <div key={i}>{option.icon}</div>)}
        </div>
      )}

      {isOpened && (
        <div className={styles.menu_options_full}>
          {MenuOptions &&
            MenuOptions.map((option, i) => (
              <MenuOption key={i} data={option} />
            ))}
        </div>
      )}
    </div>
  );
}

export default SideNav;
