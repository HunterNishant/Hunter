/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Nov 01 2020 00:40:18 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { DownloadPostFull } from "./DownloadPostFull/DownloadPostFull";
import { BarLoader } from "react-spinners";

import styles from "./Download.module.css";
import { DownloadPost } from "./DownloadPost/DownloadPost";

// fetch latest downloads from database
const getDownloads = async () => {
  const { data: posts } = await axios
    .get(`${process.env.REACT_APP_BACKEND_PROD}/store/downloads`)
    .catch((err) => console.log(err));
  return posts;
};

function Download() {
  const [renderFullPost, setRenderFullPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [downloadPosts, setDownloadPosts] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    getDownloads().then((res) => {
      setDownloadPosts(res);
      setFetching(false);
    });
  }, []);

  const close = () => {
    setRenderFullPost(false);
    setSelectedPost({});
  };

  return (
    <>
      <Navbar />
      <div className={styles.download}>
        {!renderFullPost && downloadPosts.length === 0 && fetching && (
          <div className={styles.loader}>
            <BarLoader color="white" />
            <p>Fetching Data...</p>
          </div>
        )}
        {!renderFullPost && downloadPosts.length === 0 && !fetching && (
          <div className={styles.loader}>
            <p className={styles.empty_data}>No downloads yet</p>
          </div>
        )}
        {/* Posts List */}
        {!renderFullPost && downloadPosts && downloadPosts.length > 0 && (
          <div className={styles.download_posts_list}>
            {downloadPosts
              .slice()
              .reverse()
              .map((post, index) => (
                <DownloadPost
                  data={post}
                  setRenderFullPost={setRenderFullPost}
                  setSelectedPost={setSelectedPost}
                />
              ))}
          </div>
        )}

        {/* Full Page */}
        {renderFullPost && selectedPost !== null && (
          <DownloadPostFull selectedPost={selectedPost} close={close} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default Download;
