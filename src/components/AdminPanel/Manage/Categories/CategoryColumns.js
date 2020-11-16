/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Nov 05 2020 06:59:44 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import Moment from "react-moment";

export const COLUMNS = [
  {
    Header: "Name",
    Footer: "Name",
    accessor: "name",
  },
  {
    Header: "Category",
    Footer: "Category",
    accessor: "category",
  },
  {
    Header: "MRP",
    Footer: "MRP",
    columns: [
      {
        Header: "INR",
        Footer: "INR",
        accessor: "mrp.inr",
      },
      {
        Header: "USD",
        Footer: "USD",
        accessor: "mrp.usd",
      },
    ],
  },
  {
    Header: "Price",
    Footer: "Price",
    columns: [
      {
        Header: "INR",
        Footer: "INR",
        accessor: "price.inr",
      },
      {
        Header: "USD",
        Footer: "USD",
        accessor: "price.usd",
      },
    ],
  },
  // {
  //   Header: "Currency",
  //   Footer: "Currency",
  //   accessor: "currency",
  // },
  {
    Header: "Category",
    Footer: "Category",
    accessor: "tag",
  },
  {
    Header: "Keys",
    Footer: "Keys",
    accessor: "count",
  },
  {
    Header: "Updated On",
    Footer: "Updated On",
    accessor: "dateUpdated",
    Cell: ({ value }) => {
      return <Moment format="MM-DD-YYYY HH:mm">{value}</Moment>;
    },
  },
];
