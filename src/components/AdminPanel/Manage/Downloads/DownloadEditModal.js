/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 10 2020 23:01:38 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useInputText } from "../../../../hooks/useGeekofia";
import { deleteDoc, updateDoc } from "../../../../utils";
// icons
// import { MdClose } from "react-icons/md";
import styles from "./DownloadEditModal.module.css";

// import axios
// call delete end point

export const DownloadEditModal = (props) => {
  const { isModalOpen, setModalOpen, data } = props;
  // custom useInputHook
  const id = data._id;
  // eslint-disable-next-line
  const [title, bindTitle, resetTitle] = useInputText(data.title);
  // eslint-disable-next-line
  const [sub, bindSub, resetDownload] = useInputText(data.sub);
  // eslint-disable-next-line
  const [image, bindImage, resetImage] = useInputText(data.image);
  // eslint-disable-next-line
  const [description, bindDescription, resetDescription] = useInputText(
    data.description
  );
  // eslint-disable-next-line
  const [tags, bindTags, resetTags] = useInputText(Array.prototype.join.call(data.tags, ", "));
  // eslint-disable-next-line
  const [newData, setNewData] = useState(undefined);

  useEffect(() => {
    setNewData({
      id,
      title,
      sub,
      image,
      description,
      tags: tags.split(",").map((t) => t.trim()),
    });
    // eslint-disable-next-line
  }, [id, title, sub, image, description, tags]);

  console.log(newData);

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
      <div className={styles.modal_title}>Editing {data.id}</div>
      <div className={styles.modal_body}>
        <div>
          <p>Title</p>
          <input type="text" placeholder={data.title} {...bindTitle} />
        </div>
        <div>
          <p>Sub</p>
          <input type="text" placeholder={data.sub} {...bindSub} />
        </div>
        <div>
          <p>Image</p>
          <input type="text" placeholder={data.image} {...bindImage} />
        </div>
        <div className={styles.desc_wrapper}>
          <p>Description</p>
          <textarea
            placeholder={data.description}
            {...bindDescription}
          />
        </div>
        <div>
          <p>Tags</p>
          <input type="text" placeholder={tags} {...bindTags} />
        </div>

        <div className={styles.modal_btn_group}>
          <button
            className={styles.modal_btn_delete}
            onClick={async () =>
              await deleteDoc("sub", data._id).then(setModalOpen(false))
            }
          >
            Delete
          </button>
          <button
            className={styles.modal_btn_update}
            onClick={async () =>
              await updateDoc("download", newData).then(setModalOpen(false))
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
};
