/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Nov 09 2020 15:11:12 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import styles from "./DownloadPost.module.css";
import Moment from "react-moment";

export const DownloadPost = ({ data, setRenderFullPost, setSelectedPost }) => {
  const { title, date, tags } = data;

  const showFullPost = () => {
    setRenderFullPost(true);
    setSelectedPost(data);
  };

  return (
    <div className={styles.download_post_root} onClick={showFullPost}>
      {/* Left */}
      <div className={styles.left}>
        {/* <GiNinjaHead className={styles.logo} /> */}
        <img
          className={styles.logo}
          src="https://res.cloudinary.com/chankruze/image/upload/v1604210061/Hunter/hunter.png"
          alt=""
        />
      </div>
      {/* Mid */}
      <div className={styles.mid}>
        <p className={styles.title}>{title}</p>
        {/* <p className={styles.sub_title}>{sub}</p> */}
      </div>
      {/* Right */}
      <div className={styles.right}>
        <div className={styles.tag_wrapper}>
          {tags && tags.map((tag) => <span>{tag}</span>)}
        </div>
        <div className={styles.date_wrapper}>
          <Moment format="MM-DD-YYYY HH:mm A">{date}</Moment>
        </div>
      </div>
    </div>
  );
};
