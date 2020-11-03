/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Nov 01 2020 00:40:18 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Download.module.css";

function Download() {
  return (
    <>
      <Navbar />
      <div className={styles.download}></div>
      <Footer />
    </>
  );
}

export default Download;
