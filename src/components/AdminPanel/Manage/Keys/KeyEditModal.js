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
} from "../../../../hooks/useGeekofia";

import { deleteDoc, updateDoc } from "../../../../utils";
// icons
import styles from "./KeyEditModal.module.css";

function KeyEditModal(props) {
  const { isModalOpen, setModalOpen, data } = props;

  // custom useInputHook
  const id = data._id;
  // eslint-disable-next-line
  const [key, bindKey, resetKey] = useInputText(data.key);
  // eslint-disable-next-line
  const [type, bindType, resetType] = useInputText(data.type);
  // eslint-disable-next-line
  const [isSold, bindIsSold, resetIsSold] = useInputCheckBox(data.isSold);
  // eslint-disable-next-line
  const [isActivated, bindIsActivated, resetActivated] = useInputCheckBox(
    data.isActivated
  );
  // eslint-disable-next-line
  const [newData, setNewData] = useState({});

  useEffect(() => {
    setNewData({
      id,
      key,
      type,
      isSold,
      isActivated,
    });
    // eslint-disable-next-line
  }, [duration, isActivated, isSold, key, type]);

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
        <div>
          <p>Type</p>
          <select type="text" {...bindType}>
            <option value="hourly">Hourly</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Weekly</option>
          </select>
        </div>
        {/* <div>
          <p>Duration</p>
          <input type="number" placeholder={data.duration} {...bindDuration} />
        </div> */}

        <div className={styles.modal_btn_group}>
          {/* Delete Button */}
          <button
            className={styles.modal_btn_delete}
            onClick={async () =>
              await deleteDoc("key", data._id).then(setModalOpen(false))
            }
          >
            Delete
          </button>

          {/* Update Button */}
          <button
            className={styles.modal_btn_update}
            onClick={() => updateDoc("key", newData).then(setModalOpen(false))}
          >
            Update
          </button>

          {/* Cancel Button */}
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
