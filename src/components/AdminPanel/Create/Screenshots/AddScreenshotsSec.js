/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Dec 26 2020 16:59:21 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { useEffect, useState } from "react";
import { useInputText } from "../../../../hooks/useGeekofia";
import { createDocs } from "../../../../utils";
import { MdSave } from "react-icons/md";

import styles from "./AddScreenshotSec.module.css";

const prepareData = (textData) => {
  if (!textData) {
    return [];
  }
  const screenshotsArray = textData.trim().split("\n");

  const keyObjects = screenshotsArray.map((url) => {
    if (url.trim() !== "") {
      return {
        url: url.trim(),
      };
    } else {
      return "";
    }
  });

  return keyObjects.filter((obj) => obj !== "");
};

const handleSaveData = async (data, resetTextArea) => {
  window.confirm("Are you sure ?") &&
    (await createDocs("review", data).then(({ status }) => {
      if (status === "ok") {
        window.alert(`${data.length} Screenshots added!`);
        resetTextArea();
      } else {
        window.alert("Screenshots can't be added!");
      }
    }));
};

const AddScreenshotsSec = () => {
  const [textAreaValue, bindTextAreaValue, resetTextAreaValue] = useInputText(
    ""
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(prepareData(textAreaValue));
  }, [textAreaValue]);

  return (
    <div className={styles.add_screenshot_sec_root}>
      <div className={styles.options_wrapper}></div>
      <div className={styles.payload_wrapper}>
        <div className={styles.left}>
          <span>Images</span>
          <textarea {...bindTextAreaValue}>{textAreaValue}</textarea>
        </div>
        <div className={styles.right}>
          <span>Preview</span>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
      <div
        className={styles.fab_save}
        onClick={() => handleSaveData(data, resetTextAreaValue)}
      >
        <MdSave />
      </div>
    </div>
  );
};

export default AddScreenshotsSec;
