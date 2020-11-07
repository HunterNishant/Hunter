/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Nov 05 2020 03:05:40 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { useEffect, useState } from "react";
import Modal from "react-modal";
import { fetchData } from "../../../../utils";

import { CategoriesTableSorted } from "./CategoriesTableSorted";
// css
import styles from "./CategoriesSection.module.css";
import CategoryEditModal from "./CategoryEditModal";

Modal.setAppElement("#react_root");

function CategoriesSection() {
  const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false);
  const [rowData, setRowData] = useState(undefined);

  useEffect(() => {
    fetchData("categories").then((categories) => {
      setRowData(categories);
    });
  }, []);

  const handleModalOpen = (data) => {
    setRowData(data);
    setIsEditCategoryModalOpen(true);
  };

  return (
    <div className={styles.categories_section_root}>
      <div className={styles.categories_row_container}>
        {/* <KeysTable /> */}
        {rowData && (
          <CategoriesTableSorted
            handleModalOpen={handleModalOpen}
            tableData={rowData}
          />
        )}

        {isEditCategoryModalOpen && (
          <CategoryEditModal
            data={rowData}
            setRowData={setRowData}
            isModalOpen={isEditCategoryModalOpen}
            setModalOpen={setIsEditCategoryModalOpen}
          />
        )}
      </div>
    </div>
  );
}

export default CategoriesSection;
