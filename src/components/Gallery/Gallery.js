/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Dec 25 2020 10:31:34 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { useState, useEffect } from "react";
import axios from "axios";
import Image, { Shimmer } from "react-shimmer";
import Navbar from "../Navbar/Navbar";
import ImageFullModal from "./ImageFullModal";

import { SyncLoader } from "react-spinners";

import styles from "./Gallery.module.css";

// fetch latest images from database
const getScreenshots = async () => {
  const { data: reviews } = await axios
    .get(`${process.env.REACT_APP_BACKEND_PROD}/store/gallery`)
    .catch((err) => console.log(err));
  return reviews;
};

const Gallery = () => {
  const [imageFullModal, setImageFullModal] = useState({
    isOpen: false,
    data: null,
  });
  const [images, setImages] = useState(null);

  useEffect(() => {
    getScreenshots().then((res) => setImages(res));
  }, []);

  return (
    <>
      {/* Navbar */}
      {!imageFullModal.isOpen && imageFullModal.data === null && <Navbar />}
      {/* Gallery Root */}

      <div className={styles.gallery_root}>
        {/* Section Heading */}
        <h1 className={styles.section_heading}>
          <span>{images !== null && images.length}</span> Customer Reviews
        </h1>
        {images === null && (
          <div>
            <SyncLoader color="#fff" margin="5" />
          </div>
        )}

        {/* Image Wrapper */}
        {images !== null && (
          <div className={styles.images_wrapper}>
            {images.map(({ url }, index) => (
              <div
                key={index}
                className={styles.image_wrapper}
                onClick={() =>
                  setImageFullModal({
                    isOpen: true,
                    data: { url, index },
                  })
                }
              >
                {/* <img src={url} alt={`Client Review ${index}`} /> */}
                <Image
                  src={url}
                  alt={`Client Review ${index}`}
                  fallback={<Shimmer width={300} height={200} />}
                />
              </div>
            ))}
          </div>
        )}

        {/* Full Screenshot */}
        {imageFullModal.isOpen && imageFullModal.data !== null && (
          <ImageFullModal
            modalData={imageFullModal.data}
            isModalOpen={imageFullModal.isOpen}
            setIsModalOpen={setImageFullModal}
          />
        )}
      </div>
    </>
  );
};

export default Gallery;
