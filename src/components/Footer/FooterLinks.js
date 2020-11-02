/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Oct 30 2020 14:45:57 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import {
  FaInstagram,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";

export const SiteLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Store",
    path: "/store",
  },
  {
    title: "Download",
    path: "/download",
  },
];

export const SocialLinks = [
  {
    name: "Discord",
    url: "https://discord.gg/EfUxsY7",
    icon: <FaDiscord size={32} />,
  },
  {
    name: "Telegram",
    url: "https://t.me/hunter_org_in",
    icon: <FaTelegram size={32} />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/hunternishant",
    icon: <FaInstagram size={32} />,
  },
];
