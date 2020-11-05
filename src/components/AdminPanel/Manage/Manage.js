/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Nov 04 2020 15:56:10 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";
// custom components
import ManageOption from "./ManageOption";
import CategoriesSection from "./Categories/CategoriesSection";
import KeysSection from "./Keys/KeysSection";
// icons
import { MdClose } from "react-icons/md";
// css
import styles from "./Manage.module.css";

const defaultSection = {
  name: "",
  id: 0,
};

function Manage() {
  const [selectedSection, setSelectedSection] = useState(defaultSection);

  return (
    <div className={styles.manage_root}>
      {selectedSection.id === 0 && (
        <div className={styles.options_menu}>
          <ManageOption
            data={{ id: 1, name: "keys" }}
            clickHandler={setSelectedSection}
          />
          <ManageOption
            data={{
              id: 2,
              name: "categories",
            }}
            clickHandler={setSelectedSection}
          />
        </div>
      )}
      {selectedSection.id !== 0 && (
        <>
          <div className={styles.options_toolbar}>
            <h1 className={styles.options_toolbar_section_name}>
              {selectedSection.name}
            </h1>
            <div className={styles.options_toolbar_close}>
              <MdClose
                size={32}
                onClick={() => setSelectedSection(defaultSection)}
              />
            </div>
          </div>
          {selectedSection.id === 1 && <KeysSection />}
          {selectedSection.id === 2 && <CategoriesSection />}
        </>
      )}
    </div>
  );
}

export default Manage;
