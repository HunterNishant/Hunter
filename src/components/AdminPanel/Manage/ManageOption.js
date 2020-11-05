/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Nov 05 2020 01:51:09 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";

// icons
import { CgChevronRight } from "react-icons/cg";
import styles from "./ManageOption.module.css";

function ManageOption(props) {
  const { clickHandler } = props;
  const { id, name } = props.data;

  return (
    <div
      className={styles.manage_option_root}
      onClick={() => clickHandler({ name, id })}
    >
      <h1 className={styles.option_title}>{name}</h1>
      <div className={styles.option_sub_title}>
        Add, update, delete <b>{name}</b>
      </div>
      <div className={styles.option_action_group}>
        <CgChevronRight />
      </div>
    </div>
  );
}

export default ManageOption;
