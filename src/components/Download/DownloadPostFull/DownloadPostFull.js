/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Nov 09 2020 15:21:04 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { MdClose } from "react-icons/md";
import Moment from "react-moment";
import ReactPlayer from "react-player";
import styles from "./DownloadPostFull.module.css";

export const DownloadPostFull = ({ selectedPost, close }) => {
  const {
    title,
    sub,
    date,
    // images,
    description,
    // extLinks,
    downloadLink,
    // ytLinks,
    tags,
  } = selectedPost;
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
        <div className={styles.description_wrapper}>
          {/* images */}
          {/* {images && (
            <div className={styles.screenshots_wrapper}>
              {images.map((img, i) => (
                <img key={i} src={img} alt={`Screenshot ${i}`} />
              ))}
            </div>
          )} */}

          {/* descriptions */}
          {description && (
            <div className={styles.description}>
              {description.split(" ").map((word) => {
                const urlRegex = /(https?:\/\/[^\s]+)/g;
                const imgRegex = /\.(?:jpe?g|gif|png)$/i;
                if (word.match(urlRegex)) {
                  if (word.includes("youtu"))
                    return (
                      <ReactPlayer
                        url={word}
                        height={280}
                        width={480}
                        style={{
                          marginTop: "1rem",
                          marginBottom: "1rem",
                          alignSelf: "center",
                          padding: "0.5rem",
                        }}
                      />
                    );

                  if (word.match(imgRegex))
                    return <img src={word} alt={word} />;

                  return <a href={word}>{word}</a>;
                } else {
                  return `${word}${" "}`;
                }
              })}
            </div>
          )}

          {/* links */}
          {/* {extLinks && (
            <div className={styles.ext_links_wrapper}>
              <h3>Links</h3>
              {extLinks.map((extLink, i) => (
                <a href={extLink.link} target="_blank" rel="noreferrer">
                  {extLink.title}
                </a>
              ))}
            </div>
          )} */}

          {/* YT videos */}
          {/* {ytLinks && (
            <div className={styles.yt_videos_wrapper}>
              <h3>Videos</h3>
              {ytLinks.map((ytLink, i) => (
                <ReactPlayer url={ytLink} height={250} width={350} />
              ))}
            </div>
          )} */}
        </div>
        {/* download & discuss */}
        <div className={styles.action_group}>
          <a href="https://discord.gg/EfUxsY7" className={styles.a_discuss}>
            Discuss
          </a>
          <a href={downloadLink} className={styles.btn_download}>
            Download
          </a>
        </div>
      </div>
    </div>
  );
};
