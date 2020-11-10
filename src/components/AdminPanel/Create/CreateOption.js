/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Nov 08 2020 17:05:25 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import { CgChevronRight } from "react-icons/cg";
import styles from "./CreateOption.module.css";

export const CreateOption = (props) => {
  const { clickHandler } = props;
  const { id, name, sub } = props.data;

  return (
    <div
      className={styles.manage_option_root}
      onClick={() => clickHandler({ name, id, sub })}
    >
      <h1 className={styles.option_title}>{name}</h1>
      <div className={styles.option_sub_title}>
        {sub} <b>{name}</b>
      </div>
      <div className={styles.option_action_group}>
        <CgChevronRight />
      </div>
    </div>
  );
};
