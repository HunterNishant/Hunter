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
import { generateSig } from "../../../../utils";
// icons
// import { MdClose } from "react-icons/md";
import styles from "./CategoryEditModal.module.css";

// import axios
// call delete end point
const deleteCategory = (categoryId) => {
  const localStorage = window.localStorage;

  const config = {
    headers: {
      "x-hunter-signature": generateSig(
        localStorage.getItem("user"),
        localStorage.getItem("user")
      ),
    },
  };

  // axios.
};
// call update end point

// const typeOptions = [
//   { value: "monthly", label: "Monthly" },
//   { value: "hourly", label: "Hourly" },
//   { value: "daily", label: "Daily" },
//   { value: "weekly", label: "Weekly" },
// ];

function CategoryEditModal(props) {
  const { isModalOpen, setModalOpen, data } = props;

  // custom useInputHook
  // eslint-disable-next-line
  const [name, bindName, resetName] = useInputText(data.name);
  // eslint-disable-next-line
  const [category, bindCategory, resetCategory] = useInputText(data.category);
  // eslint-disable-next-line
  const [mrp, bindMrp, resetMrp] = useInputInt(data.mrp);
  // eslint-disable-next-line
  const [price, bindPrice, resetType] = useInputInt(data.price);
  // eslint-disable-next-line
  const [currency, bindCurrency, resetCurrency] = useInputText(data.currency);
  // eslint-disable-next-line
  const [description, bindDescription, resetDescription] = useInputText(
    data.description
  );
  // eslint-disable-next-line
  const [image, bindImage, resetIamge] = useInputText(data.image);
  // eslint-disable-next-line
  const [tag, bindTag, resetTag] = useInputText(data.tag);
  // eslint-disable-next-line
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    setNewData({
      name,
      category,
      mrp,
      price,
      currency,
      description,
      image,
      tag,
    });
    console.log(newData);
    // eslint-disable-next-line
  }, [category, currency, description, image, mrp, name, price, tag]);

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
      <div className={styles.modal_title}>Editing {data.category}</div>
      <div className={styles.modal_body}>
        <div>
          <p>Name</p>
          <input type="text" placeholder={data.name} {...bindName} />
        </div>
        <div>
          <p>Category</p>
          <input type="text" placeholder={data.category} {...bindCategory} />
        </div>
        <div>
          <p>MRP</p>
          <input type="number" {...bindMrp} />
        </div>
        <div>
          <p>Price</p>
          <input type="number" {...bindPrice} />
        </div>
        <div>
          <p>Currency</p>
          <input type="text" {...bindCurrency} />
        </div>
        <div>
          <p>Description</p>
          <input type="text" {...bindDescription} />
        </div>
        <div>
          <p>Logo</p>
          <input type="text" {...bindImage} />
        </div>
        <div>
          <p>Tag</p>
          <input type="text" {...bindTag} />
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

export default CategoryEditModal;
