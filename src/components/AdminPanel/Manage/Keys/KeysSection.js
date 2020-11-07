/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Nov 05 2020 02:38:45 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";
import Modal from "react-modal";
// custom components
// data
// import { KeysTable } from "./KeysTable";

import { KeysTableSorted } from "./KeysTableSorted";

// css
import styles from "./KeysSection.module.css";
import KeyEditModal from "./KeyEditModal";

Modal.setAppElement("#react_root");

function KeysSection() {
  const [isEditKeyModalOpen, setIsEditKeyModalOpen] = useState(false);
  const [rowData, setRowData] = useState(undefined);

  const handleModalOpen = (data) => {
    setRowData(data);
    setIsEditKeyModalOpen(true);
  };

  return (
    <div className={styles.keys_section_root}>
      <div className={styles.keys_row_container}>
        {/* <KeysTable /> */}
        <KeysTableSorted handleModalOpen={handleModalOpen} />
        {isEditKeyModalOpen && (
          <KeyEditModal
            data={rowData}
            setRowData={setRowData}
            isModalOpen={isEditKeyModalOpen}
            setModalOpen={setIsEditKeyModalOpen}
          />
        )}
      </div>
    </div>
  );
}

export default KeysSection;
