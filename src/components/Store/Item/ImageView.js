/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Nov 14 2020 01:00:13 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";
import { MdZoomOutMap } from "react-icons/md";
import styles from "./ImageView.module.css";

export const ImageView = (props) => {
  const { screenshots } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(
    screenshots[currentImageIndex]
  );

  const thumbClickHandler = (image, index) => {
    setCurrentImageIndex(index);
    setCurrentImage(image);
  };

  return (
    <div className={styles.image_view_root}>
      <div className={styles.current_image_wrapper}>
        <img
          className={styles.current_image}
          src={currentImage}
          alt={`Screenshot ${currentImageIndex}`}
        />
        <a
          href={currentImage}
          target="_blank"
          rel="noreferrer"
          className={styles.btn_full_screen}
        >
          <MdZoomOutMap size={32} />
        </a>
      </div>
      {screenshots && screenshots.length > 0 && (
        <div className={styles.thumb_row}>
          {screenshots.map((image, i) => (
            <img
              className={styles.thumb_image}
              src={image}
              alt={`Screenshot ${i}`}
              onClick={() => thumbClickHandler(image, i)}
            ></img>
          ))}
        </div>
      )}
    </div>
  );
};
