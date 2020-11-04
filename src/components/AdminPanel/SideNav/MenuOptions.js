/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 03 2020 22:33:09 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { RiEditLine, RiDashboard3Line } from "react-icons/ri";

export const MenuOptions = [
  {
    icon: <RiDashboard3Line />,
    link: "/admin/dashboard",
    name: "dashboard",
  },
  {
    icon: <RiEditLine />,
    link: "/admin/manage",
    name: "manage",
  },
  // {
  //   icon: <RiLogoutBoxRLine />,
  //   link: "/logout",
  //   name: "logout",
  // },
];
