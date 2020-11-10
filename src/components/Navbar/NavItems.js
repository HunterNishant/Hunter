/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Oct 30 2020 13:51:33 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

// eslint-disable-next-line
import {
  MdStore,
  // MdShoppingCart,
  // MdInfo,
  MdFileDownload,
} from "react-icons/md";
// import { FaTelegram, FaDiscord } from "react-icons/fa";

export const NavItems = [
  {
    title: "Discord",
    path: "https://discord.gg/EfUxsY7",
    // icon: <FaDiscord size={24} />,
  },
  {
    title: "Telegram",
    path: "https://t.me/hunter_org_in",
    // icon: <FaTelegram size={24} />,
  },
  // {
  //   title: "Instagram",
  //   path: "https://instagram.com/hunternishant",
  //   // icon: <FaInstagram size={32} />,
  // },
  {
    title: "Store",
    path: "/store",
    icon: <MdStore size={24} />,
  },
  {
    title: "Download",
    path: "/download",
    icon: <MdFileDownload size={24} />,
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
