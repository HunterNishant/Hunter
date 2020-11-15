/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Oct 30 2020 18:55:27 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import ReactPlayer from "react-player/youtube";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { About } from "./About";
import Navbar from "../Navbar/Navbar";
// icons
import { MdStoreMallDirectory } from "react-icons/md";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.home_root}>
        <div className={styles.header_video_container}>
          <ReactPlayer
            className={styles.header_video}
            url="https://www.youtube.com/embed/CLbhbJrWd9I"
            width="1920px"
            height="1080px"
            loop={1}
            muted={true}
            playing={true}
            autoplay={1}
            disablekb={1}
            volume={0}
            modestbranding={1}
            playIcon={0}
            controls={0}
          />
          <Link to="/store" className={styles.btn_go_store}>
            <span>
              <MdStoreMallDirectory />
            </span>
            <span className={styles.btn_text}>Visit Store </span>
          </Link>
        </div>

        {/* <div className={styles.screenshots_wrapper}>
          <ImageGallery items={screenshots} />
        </div> */}

        <About />
      </div>
      <Footer />
    </>
  );
}

export default Home;
