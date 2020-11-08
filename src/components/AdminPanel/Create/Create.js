/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Nov 06 2020 05:07:57 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";
// custom components
import { CreateOption } from "./CreateOption";
import { AddKeySec } from "./Keys/AddKeySec";
import { AddCategorySec } from "./Categories/AddCategorySec";
// icons
import { MdClose } from "react-icons/md";
// css
import styles from "./Create.module.css";

const defaultSection = {
  name: "",
  id: 0,
};

function Create() {
  const [selectedSection, setSelectedSection] = useState(defaultSection);

  return (
    <div className={styles.create_root}>
      {selectedSection.id === 0 && (
        <div className={styles.options_menu}>
          <CreateOption
            data={{ id: 1, name: "keys" }}
            clickHandler={setSelectedSection}
          />
          <CreateOption
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
          {selectedSection.id === 1 && <AddKeySec />}
          {selectedSection.id === 2 && (
            <AddCategorySec close={setSelectedSection} />
          )}
        </>
      )}
    </div>
  );
}

export default Create;
