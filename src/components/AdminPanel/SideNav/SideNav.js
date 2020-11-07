/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 03 2020 20:39:45 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { MenuOptions } from "./MenuOptions";
import styles from "./SideNav.module.css";

function SideNav(props) {
  const { activeMenu, setActiveMenu } = props;

  return (
    <div className={styles.sidenav_root}>
      <div className={styles.menu_options_min}>
        {MenuOptions &&
          MenuOptions.map((option, i) => (
            <div
              key={i}
              onClick={() => setActiveMenu(option.name)}
              className={`${styles.menu_option_min} ${
                activeMenu === option.name ? `${styles.active}` : ""
              }`}
            >
              {option.icon}
            </div>
          ))}
      </div>
    </div>
  );
}

export default SideNav;
