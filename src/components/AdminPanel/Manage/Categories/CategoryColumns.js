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
    accessor: "mrp",
  },
  {
    Header: "Price",
    Footer: "Price",
    accessor: "price",
  },
  {
    Header: "Currency",
    Footer: "Currency",
    accessor: "currency",
  },
  {
    Header: "Tag",
    Footer: "Tag",
    accessor: "tag",
  },
  {
    Header: "Count",
    Footer: "Count",
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
