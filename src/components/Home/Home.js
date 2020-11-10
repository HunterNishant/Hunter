/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Oct 30 2020 18:55:27 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
// import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.home}>Home</div>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
