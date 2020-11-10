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
        <span className={styles.close} onClick={() => close()}>
          <MdClose />
        </span>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.info_bar}>
          {tags && tags.map((tag) => <p className={styles.tag}>{tag}</p>)}
          <p className={styles.date}>
            <Moment format="DD/MM/YYYY HH:MM A">{date}</Moment>
          </p>
        </div>
        <h3 className={styles.sub_title}>{sub}</h3>
        <div className={styles.description}>
          {image && <img src={image} alt="Screenshot" />}

          <p>{description}</p>
        </div>

        <div className={styles.action_group}>
          <a href="https://discord.gg/EfUxsY7" className={styles.a_discuss}>Discuss</a>
          <a href={link} className={styles.btn_download}>
            Download
          </a>
        </div>
      </div>
    </div>
  );
};
