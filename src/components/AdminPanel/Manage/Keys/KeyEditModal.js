/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Nov 06 2020 19:24:38 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import {
  useInputText,
  useInputCheckBox,
  useInputInt,
} from "../../../../hooks/useGeekofia";
import axios from "axios";
import { generateSig } from "../../../../utils"
// icons
// import { MdClose } from "react-icons/md";
import styles from "./KeyEditModal.module.css";

// import axios
// call delete end point
const deleteKey = (keyId) => {
const localStorage = window.localStorage;

  const config = {
    headers: { "x-hunter-signature": generateSig(localStorage.getItem('user'), localStorage.getItem('user')) },
  };

  // axios.
}

function KeyEditModal(props) {
  const { isModalOpen, setModalOpen, data } = props;

  // custom useInputHook
  // eslint-disable-next-line
  const [duration, bindDuration, resetDuration] = useInputInt(data.duration);
  // eslint-disable-next-line
  const [key, bindKey, resetKey] = useInputText(data.key);
  // eslint-disable-next-line
  // const [type, bindType, resetType] = useInputText(data.type);
  // eslint-disable-next-line
  const [isSold, bindIsSold, resetIsSold] = useInputCheckBox(data.isSold);
  // eslint-disable-next-line
  const [isActivated, bindIsActivated, resetActivated] = useInputCheckBox(
    data.isActivated
  );
  // eslint-disable-next-line
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    setNewData({
      key,
      isSold,
      isActivated,
      duration,
    });
    console.log(newData);
    // eslint-disable-next-line
  }, [duration, isActivated, isSold, key]);

  return (
    <Modal
      className={styles.modal}
      overlayClassName={styles.modalOverlay}
      isOpen={isModalOpen}
    >
      {/* Close Button */}
      {/* <span className={styles.close} onClick={() => setModalOpen(false)}>
        <MdClose />
      </span> */}

      {/* Data */}
      <div className={styles.modal_title}>Editing {data.key}</div>
      <div className={styles.modal_body}>
        <div>
          <p>Key</p>
          <input type="text" placeholder={data.key} {...bindKey} />
        </div>
        <div>
          <p>Sold</p>
          <input type="checkbox" {...bindIsSold} />
        </div>
        <div>
          <p>Activated</p>
          <input type="checkbox" {...bindIsActivated} />
        </div>
        {/* <div>
          <p>Type</p>
          <select type="text" {...bindType}>
            <option value="monthly">Monthly</option>
            <option value="daily">Daily</option>
            <option value="hourly">Hourly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div> */}
        <div>
          <p>Duration</p>
          <input type="number" placeholder={data.duration} {...bindDuration} />
        </div>

        <div className={styles.modal_btn_group}>
          <button className={styles.modal_btn_delete}>Delete</button>
          <button className={styles.modal_btn_update}>Update</button>
          <button
            className={styles.modal_btn_cancel}
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default KeyEditModal;
