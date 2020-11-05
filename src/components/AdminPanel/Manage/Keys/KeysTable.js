/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Nov 05 2020 06:58:59 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./KeyColumns";
import keys from "./keys.json";

import styles from "./KeysTable.module.css";

export const KeysTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => keys, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table className={styles.table} {...getTableProps()}>
      <thead className={styles.thead}>
        {headerGroups.map((group) => (
          <tr className={styles.tr_header} {...group.getHeaderGroupProps}>
            {group.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className={styles.tbody} {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr className={styles.tr} {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCell}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot className={styles.tfoot}>
        {footerGroups.map((footerGroup) => (
          <tr {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map((column) => (
              <td {...column.getFooterProps}>{column.render("Footer")}</td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
};
