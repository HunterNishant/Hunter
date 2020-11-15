/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Nov 05 2020 02:38:45 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { useEffect, useState } from "react";
import Modal from "react-modal";
import { KeysTableSorted } from "./KeysTableSorted";

// css
import styles from "./KeysSection.module.css";
import KeyEditModal from "./KeyEditModal";
import { fetchData } from "../../../../utils";

Modal.setAppElement("#react_root");

function KeysSection() {
  const [isEditKeyModalOpen, setIsEditKeyModalOpen] = useState(false);
  const [rowData, setRowData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData("keys").then((keys) => {
      setRowData(keys);
      setIsLoading(false);
    });
  }, []);

  const handleModalOpen = (data) => {
    setRowData(data);
    setIsEditKeyModalOpen(true);
  };

  return (
    <div className={styles.keys_section_root}>
      {isLoading && <p>Fetching data from database...</p>}
      {!isLoading && rowData.length === 0 && (
        <p className={styles.empty_data}>No keys found</p>
      )}
      <div className={styles.keys_row_container}>
        {rowData.length !== 0 && (
          <KeysTableSorted
            handleModalOpen={handleModalOpen}
            tableData={rowData}
          />
        )}

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
