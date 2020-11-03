/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 03 2020 23:57:19 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Page404.module.css";

function Page404() {
  return (
    <div className={styles.page_404_root}>
      <div>It looks like you're lost !</div>
      <Link className={styles.btn_home} to="/">
        Go Home
      </Link>
    </div>
  );
}

export default Page404;
