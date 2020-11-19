/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Nov 09 2020 13:20:45 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState, useEffect } from "react";
import { useInputText } from "../../../../hooks/useGeekofia";
import { createDocs } from "../../../../utils";
import { DownloadPostFull } from "../../../Download/DownloadPostFull/DownloadPostFull";
import styles from "./AddDownloadSec.module.css";

const handleCreateDownloadPost = async (type, data, close) => {
  await createDocs(type, data).then(({ status }) => {
    if (status === "ok") {
      window.alert("Download Post added!");
      close();
    } else {
      window.alert("Download Post can't be added!");
    }
  });
};

export const AddDownloadSec = ({ close }) => {
  // eslint-disable-next-line
  const [title, bindTitle, resetTitle] = useInputText("Download Title");
  // eslint-disable-next-line
  const [sub, bindSub, resetSub] = useInputText(
    "This update is important, download it now!"
  );
  // eslint-disable-next-line
  const [description, bindDescription, resetDescription] = useInputText(
    "Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus."
  );
  // eslint-disable-next-line
  const [downloadLink, bindDownloadLink, resetDownloadLink] = useInputText(
    "https://cdn.discordapp.com/attachments/747790760673411113/773837946548781066/Brutal_SXAntiban.rar"
  );
  // eslint-disable-next-line
  const [tags, bindTags, resetTags] = useInputText("new");
  // eslint-disable-next-line
  const [newData, setNewData] = useState({});

  useEffect(() => {
    setNewData({
      title,
      sub,
      downloadLink,
      description,
      tags: tags.split(",").map((t) => t.trim()),
    });
    // eslint-disable-next-line
  }, [title, sub, downloadLink, description, tags]);

  return (
    <div className={styles.add_download_sec_root}>
      <div className={styles.left}>
        <div className={styles.add_download_div}>
          <p className={styles.add_download_p}>Title</p>
          <div className={styles.add_download_input_wrapper}>
            <input type="text" {...bindTitle} />
          </div>
        </div>
        <div className={styles.add_download_div}>
          <p className={styles.add_download_p}>Sub Title</p>
          <div className={styles.add_download_input_wrapper}>
            <input type="text" {...bindSub} />
          </div>
        </div>
        <div className={styles.add_download_div}>
          <p className={`${styles.add_download_p} ${styles.description}`}>
            Description
          </p>
          <div
            className={`${styles.add_download_input_wrapper} ${styles.textarea_wrapper}`}
          >
            <textarea {...bindDescription} />
          </div>
        </div>
        {/* <div className={styles.add_download_div}>
          <p className={styles.add_download_p}>Image URL</p>
          <div className={styles.add_download_input_wrapper}>
            <input type="text" {...bindImage} />
          </div>
        </div> */}
        <div className={styles.add_download_div}>
          <p className={styles.add_download_p}>Download Link</p>
          <div className={styles.add_download_input_wrapper}>
            <input type="text" {...bindDownloadLink} />
          </div>
        </div>
        <div className={styles.add_download_div}>
          <p className={styles.add_download_p}>Tag</p>
          <div className={styles.add_download_input_wrapper}>
            <input type="text" {...bindTags} />
          </div>
        </div>

        <DownloadPostFull selectedPost={newData} />

        <div className={styles.add_download_div}>
          <div className={styles.add_download_btn_group}>
            <button className={styles.btn_danger} onClick={() => close()}>
              Cancel
            </button>
            <button
              onClick={() =>
                handleCreateDownloadPost("download", newData, close)
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
