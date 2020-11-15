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
  const [rowData, setRowData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData("categories").then((categories) => {
      setRowData(categories);
      setIsLoading(false);
    });
  }, []);

  const handleModalOpen = (data) => {
    setRowData(data);
    setIsEditCategoryModalOpen(true);
  };

  return (
    <div className={styles.categories_section_root}>
      {isLoading && <p>Fetching data from database...</p>}
      {!isLoading && rowData.length === 0 && (
        <p className={styles.empty_data}>No categories found</p>
      )}
      <div className={styles.categories_row_container}>
        {rowData.length !== 0 && (
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
