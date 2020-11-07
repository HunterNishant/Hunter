/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Nov 06 2020 00:29:20 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
// icons
import { MdFilterList, MdDelete } from "react-icons/md";
// css
import styles from "./FilterBar.module.css";

export const FilterBar = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  // debounce event listener
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 2000);

  return (
    <div className={styles.filter_bar_root}>
      <div className={styles.column_filter_wrapper}>
        <MdFilterList size={32} />
      </div>
      <div className={styles.global_filter_wrapper}>
        <input
          className={styles.global_filter_input}
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder="Search"
        />
        <div className={styles.row_buttons_section}>
          <MdDelete size={32} />
        </div>
      </div>
    </div>
  );
};
