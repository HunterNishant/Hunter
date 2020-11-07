/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 03 2020 22:33:09 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

// eslint-disable-next-line
import { MdDashboard, MdBuild, MdCreate } from "react-icons/md";
// eslint-disable-next-line
import { RiLogoutBoxLine } from "react-icons/ri";

export const MenuOptions = [
  // {
  //   icon: <MdDashboard />,
  //   link: "/admin/dashboard",
  //   name: "dashboard",
  // },
  {
    icon: <MdBuild />,
    link: "/admin/manage",
    name: "manage",
  },
  {
    icon: <MdCreate />,
    link: "/admin/add",
    name: "add",
  },
];
