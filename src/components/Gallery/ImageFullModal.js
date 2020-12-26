/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Dec 26 2020 12:51:42 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import Modal from "react-modal";

import styles from "./ImageFullModal.module.css";

import { VscChromeClose } from "react-icons/vsc";

const ImageFullModal = ({
  modalData: { url, index },
  isModalOpen,
  setIsModalOpen,
}) => {
  return (
    <Modal
      className={styles.modal}
      overlayClassName={styles.modal_overlay}
      isOpen={isModalOpen}
      contentLabel="Screenshot Modal"
    >
      {/* Close Button */}
      <span
        className={styles.close}
        onClick={() => setIsModalOpen({ isOpen: false, data: null })}
      >
        <VscChromeClose />
      </span>
      <div className={styles.image_wrapper}>
        <img src={url} alt={`screenshot ${index}`} />
      </div>
    </Modal>
  );
};

export default ImageFullModal;
