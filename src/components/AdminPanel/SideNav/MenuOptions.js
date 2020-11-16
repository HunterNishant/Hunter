/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 03 2020 22:33:09 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { MdAddCircleOutline, MdEdit } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";

export const MenuOptions = [
  // {
  //   icon: <MdDashboard />,
  //   link: "/admin/dashboard",
  //   name: "dashboard",
  // },
  {
    icon: <MdEdit />,
    link: "/admin/manage",
    name: "manage",
  },
  {
    icon: <MdAddCircleOutline />,
    link: "/admin/create",
    name: "create",
  },
  {
    icon: <RiLogoutBoxRLine />,
    link: "/admin/logout",
    name: "logout",
  },
];
