/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Nov 06 2020 19:24:38 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useInputText, useInputFloat } from "../../../../hooks/useGeekofia";
import { deleteDoc, updateDoc } from "../../../../utils";
// icons
// import { MdClose } from "react-icons/md";
import styles from "./CategoryEditModal.module.css";

// import axios
// call delete end point

function CategoryEditModal(props) {
  const { isModalOpen, setModalOpen, data } = props;

  // custom useInputHook
  const id = data._id;
  // eslint-disable-next-line
  const [name, bindName, resetName] = useInputText(data.name);
  // eslint-disable-next-line
  const [shortDesc, bindShortDesc, resetShortDesc] = useInputText(
    data.shortDesc
  );
  // eslint-disable-next-line
  const [category, bindCategory, resetCategory] = useInputText(data.category);
  const [
    keysMultiplier,
    bindKeysMultiplier,
    // eslint-disable-next-line
    resetKeysMultiplier,
  ] = useInputText(data.keysMultiplier);
  // eslint-disable-next-line
  const [mrpInr, bindMrpInr, resetMrpInr] = useInputFloat(data.mrp.inr);
  // eslint-disable-next-line
  const [mrpUsd, bindMrpUsd, resetMrpUsd] = useInputFloat(data.mrp.usd);
  // eslint-disable-next-line
  const [priceInr, bindPriceInr, resetPriceInr] = useInputFloat(data.price.inr);
  // eslint-disable-next-line
  const [priceUsd, bindPriceUsd, resetPriceUsd] = useInputFloat(data.price.usd);
  // eslint-disable-next-line
  // const [currency, bindCurrency, resetCurrency] = useInputText(data.currency);
  // eslint-disable-next-line
  const [description, bindDescription, resetDescription] = useInputText(
    data.description
  );
  // eslint-disable-next-line
  const [image, bindImage, resetIamge] = useInputText(data.image);
  // eslint-disable-next-line
  const [tag, bindTag, resetTag] = useInputText(data.tag);
  // eslint-disable-next-line
  const [screenshots, bindScreenshots, resetScreenshots] = useInputText(
    data.screenshots ? Array.prototype.join.call(data.screenshots, ", ") : ""
  );
  // eslint-disable-next-line
  const [newData, setNewData] = useState(undefined);

  useEffect(() => {
    setNewData({
      id,
      name,
      shortDesc,
      category,
      keysMultiplier,
      mrp: { inr: mrpInr, usd: mrpUsd },
      price: { inr: priceInr, usd: priceUsd },
      // currency,
      description,
      image,
      tag,
      screenshots: screenshots.split(",").map((t) => t.trim()),
    });
    // eslint-disable-next-line
  }, [
    category,
    // currency,
    description,
    image,
    keysMultiplier,
    mrpInr,
    mrpUsd,
    priceInr,
    priceUsd,
    name,
    shortDesc,
    tag,
    screenshots,
  ]);

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
          <p>Keys Multiplier</p>
          <input type="number" {...bindKeysMultiplier} />
        </div>
        <div>
          <p>MRP</p>
          <input type="number" {...bindMrpInr} placeholder="INR" />
          <input type="number" {...bindMrpUsd} placeholder="USD" />
        </div>
        <div>
          <p>Price</p>
          <input type="number" {...bindPriceInr} placeholder="INR" />
          <input type="number" {...bindPriceUsd} placeholder="USD" />
        </div>
        <div>
          <p>Short Desc</p>
          <input type="text" placeholder={data.shortDesc} {...bindShortDesc} />
        </div>
        <div className={styles.desc_wrapper}>
          <p>Description</p>
          <textarea
            className={styles.desc_txt_area}
            type="text"
            {...bindDescription}
          />
        </div>
        <div>
          <p>Logo</p>
          <input type="text" {...bindImage} />
        </div>
        <div>
          <p>Screenshots</p>
          <input type="text" placeholder={screenshots} {...bindScreenshots} />
        </div>
        <div>
          <p>Tag</p>
          <input type="text" {...bindTag} />
        </div>

        <div className={styles.modal_btn_group}>
          <button
            className={styles.modal_btn_delete}
            onClick={async () =>
              await deleteDoc("category", data._id).then(setModalOpen(false))
            }
          >
            Delete
          </button>
          <button
            className={styles.modal_btn_update}
            onClick={async () =>
              await updateDoc("category", newData).then(setModalOpen(false))
            }
          >
            Update
          </button>
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
