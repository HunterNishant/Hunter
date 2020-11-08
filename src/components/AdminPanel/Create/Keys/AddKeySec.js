/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Nov 08 2020 17:03:52 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { useEffect, useState } from "react";
import { useInputText } from "../../../../hooks/useGeekofia";
import { createDocs } from "../../../../utils";
import { MdSave } from "react-icons/md";
// import data from "../../Manage/Categories/products.json";
import styles from "./AddKeySec.module.css";

const prepareData = (textData, type) => {
  if (!textData) {
    return [];
  }
  const keysArray = textData.trim().split("\n");

  const keyObjects = keysArray.map((key) => {
    if (key !== "") {
      return {
        key,
        type,
        isActivated: false,
        isSold: false,
      };
    } else {
      return "";
    }
  });

  return keyObjects.filter((obj) => obj !== "");
};

const handleSaveData = async (type, data, resetTextArea, resetType) => {
  window.confirm("Are you sure ?") &&
    (await createDocs(type, data).then(({ status }) => {
      if (status === "ok") {
        window.alert("Keys added!");
        resetTextArea();
        resetType();
      } else {
        window.alert("Keys can't be added!");
      }
    }));
};

export const AddKeySec = () => {
  const [textAreaValue, bindTextAreaValue, resetTextAreaValue] = useInputText(
    ""
  );
  const [type, bindType, resetType] = useInputText("monthly");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(prepareData(textAreaValue, type));
  }, [textAreaValue, type]);

  return (
    <div className={styles.add_key_sec_root}>
      <div className={styles.options_wrapper}>
        <select type="text" {...bindType} defaultValue={type}>
          <option value="monthly">Monthly</option>
          <option value="daily">Daily</option>
          <option value="hourly">Hourly</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>
      <div className={styles.payload_wrapper}>
        <div className={styles.left}>
          <span>Keys</span>
          <textarea {...bindTextAreaValue}>{textAreaValue}</textarea>
        </div>
        <div className={styles.right}>
          <span>Preview</span>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
      <div
        className={styles.fab_save}
        onClick={() =>
          handleSaveData("keys", data, resetTextAreaValue, resetType)
        }
      >
        <MdSave />
      </div>
    </div>
  );
};
