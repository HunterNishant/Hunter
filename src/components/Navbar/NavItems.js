/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Oct 30 2020 13:51:33 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

// eslint-disable-next-line
import { MdStore, MdShoppingCart, MdInfo, MdFileDownload } from "react-icons/md";

export const NavItems = [
  //   {
  //     title: "Home",
  //     path: "/",
  //   },
  // {
  //   title: "Discord",
  //   path: "/discord",
  //   icon: <RiDiscordFill size={24}/>,
  // },
  {
    title: "Store",
    path: "/store",
    icon: <MdStore size={24}/>,
  },
  {
    title: "Download",
    path: "/download",
    icon: <MdFileDownload size={24}/>,
  },

  // {
  //   title: "Cart",
  //   path: "/cart",
  //   icon: <MdShoppingCart size={24}/>,
  // },
  // {
  //   title: "About",
  //   path: "/about",
  //   icon: <MdInfo size={24}/>,
  // },
];

