/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Nov 05 2020 06:59:44 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import Moment from "react-moment";

export const COLUMNS = [
  {
    Header: "Key",
    Footer: "Key",
    accessor: "key",
  },
  {
    Header: "Type",
    Footer: "Type",
    accessor: "type",
  },
  {
    Header: "Validity",
    Footer: "Validity",
    accessor: "duration",
  },
  {
    Header: "Sold",
    Footer: "Sold",
    accessor: "isSold",
    Cell: ({ value }) => {
      return value ? "yes" : "no";
    },
  },
  {
    Header: "Activated",
    Footer: "Activated",
    accessor: "isActivated",
    Cell: ({ value }) => {
      return value ? "activated" : "nope";
    },
  },
  {
    Header: "Adding Date",
    Footer: "Adding Date",
    accessor: "dateAdded",
    Cell: ({ value }) => {
      return <Moment format="MM-DD-YYYY HH:mm">{value}</Moment>;
    },
  },
  {
    Header: "Selling Date",
    Footer: "Selling Date",
    accessor: "dateSold",
    Cell: ({ value }) => {
      return <Moment format="MM-DD-YYYY HH:mm">{value}</Moment>;
    },
  },
];
