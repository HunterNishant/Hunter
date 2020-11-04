/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 03 2020 20:39:45 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import MenuOption from "./MenuOption";
import { MenuOptions } from "./MenuOptions";
import styles from "./SideNav.module.css";

function SideNav() {
  const [isOpened, setIsOpened] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

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
            MenuOptions.map((option, i) => (
              <Link
                key={i}
                to={option.link}
                onClick={() => setActiveMenu(option.name)}
                className={`${styles.menu_option_min} ${
                  activeMenu === option.name ? `${styles.active}` : ""
                }`}
              >
                {option.icon}
              </Link>
            ))}
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
