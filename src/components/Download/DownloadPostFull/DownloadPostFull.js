/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Nov 09 2020 15:21:04 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { MdClose } from "react-icons/md";
import Moment from "react-moment";
import styles from "./DownloadPostFull.module.css";

export const DownloadPostFull = ({ selectedPost, close }) => {
  const { title, sub, date, image, description, link, tags } = selectedPost;
  return (
    <div className={styles.download_full_root}>
      <div className={styles.post_wrapper}>
        {/* close button */}
        <span className={styles.close} onClick={() => close()}>
          <MdClose />
        </span>
        {/* title */}
        <h1 className={styles.title}>{title}</h1>
        {/* info bar */}
        <div className={styles.info_bar}>
          {tags && tags.map((tag) => <p className={styles.tag}>{tag}</p>)}
          <p className={styles.date}>
            <Moment format="DD/MM/YYYY HH:MM A">{date}</Moment>
          </p>
        </div>
        {/* sub title */}
        {sub && <h3 className={styles.sub_title}>{sub}</h3>}
        {/* description */}
        <div className={styles.description}>
          {/* image */}
          {image && <img src={image} alt="Screenshot" />}
          {description && description.replace(/\\n/g, "\n")}
        </div>
        {/* download & discuss */}
        <div className={styles.action_group}>
          <a href="https://discord.gg/EfUxsY7" className={styles.a_discuss}>
            Discuss
          </a>
          <a href={link} className={styles.btn_download}>
            Download
          </a>
        </div>
      </div>
    </div>
  );
};
