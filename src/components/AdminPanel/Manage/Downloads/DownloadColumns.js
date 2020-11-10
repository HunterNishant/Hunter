/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 10 2020 23:02:17 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import Moment from "react-moment";

export const COLUMNS = [
  {
    Header: "Title",
    Footer: "Title",
    accessor: "title",
  },
  {
    Header: "Updated On",
    Footer: "Updated On",
    accessor: "date",
    Cell: ({ value }) => {
      return <Moment format="MM-DD-YYYY HH:mm">{value}</Moment>;
    },
  },
];
