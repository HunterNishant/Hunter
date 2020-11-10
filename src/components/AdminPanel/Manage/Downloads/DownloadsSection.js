/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Nov 09 2020 15:06:04 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { useEffect, useState } from "react";
import Modal from "react-modal";
import { fetchData } from "../../../../utils";

import { DownloadsTableSorted } from "./DownloadsTableSorted";
// css
import styles from "./DownloadsSection.module.css";
import { DownloadEditModal } from "./DownloadEditModal";

Modal.setAppElement("#react_root");

function DownloadsSection() {
  const [isEditDownloadModalOpen, setIsEditDownloadModalOpen] = useState(false);
  const [rowData, setRowData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData("downloads").then((downloads) => {
      setRowData(downloads);
      setIsLoading(false);
    });
  }, []);

  const handleModalOpen = (data) => {
    setRowData(data);
    setIsEditDownloadModalOpen(true);
  };

  return (
    <div className={styles.downloads_section_root}>
      {isLoading && <p>Fetching data from database...</p>}
      <div className={styles.downloads_row_container}>
        {rowData.length !== 0 && (
          <DownloadsTableSorted
            handleModalOpen={handleModalOpen}
            tableData={rowData}
          />
        )}

        {isEditDownloadModalOpen && (
          <DownloadEditModal
            data={rowData}
            setRowData={setRowData}
            isModalOpen={isEditDownloadModalOpen}
            setModalOpen={setIsEditDownloadModalOpen}
          />
        )}
      </div>
    </div>
  );
}

export default DownloadsSection;
