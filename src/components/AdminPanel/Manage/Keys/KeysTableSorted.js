/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Nov 05 2020 14:12:48 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useRowSelect,
} from "react-table";
import { COLUMNS } from "./KeyColumns";
import keys from "./keys.json";
import { FilterBar } from "../FilterBar";

import styles from "./KeysTable.module.css";
import { CheckBox } from "../CheckBox";

export const KeysTableSorted = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => keys, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <CheckBox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <CheckBox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const { globalFilter } = state;

  console.log(selectedFlatRows);

  return (
    <>
      <FilterBar filter={globalFilter} setFilter={setGlobalFilter} />
      <table className={styles.table} {...getTableProps()}>
        <thead className={styles.thead}>
          {headerGroups.map((group) => (
            <tr className={styles.tr_header} {...group.getHeaderGroupProps}>
              {group.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                  </span>
                </th>
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
        {/* <tfoot className={styles.tfoot}>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
    </>
  );
};
