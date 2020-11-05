/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Nov 05 2020 02:38:45 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
// custom components
// data
// import { KeysTable } from "./KeysTable";
import { KeysTableSorted } from "./KeysTableSorted";
// css
import styles from "./KeysSection.module.css";

function KeysSection() {
  return (
    <div className={styles.keys_section_root}>
      <div className={styles.keys_row_container}>
        {/* <KeysTable /> */}
        <KeysTableSorted />
      </div>
    </div>
  );
}

export default KeysSection;
