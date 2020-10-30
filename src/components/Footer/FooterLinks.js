/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Oct 30 2020 14:45:57 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import {
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaYoutube,
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
    title: "Cart",
    path: "/cart",
  },
  {
    title: "About",
    path: "/about",
  },
];

export const SocialLinks = [
  {
    name: "Youtube",
    url: "https://youtube.com/xyz",
    icon: <FaYoutube size={32} />,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/xyz",
    icon: <FaFacebook size={32} />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/xyz",
    icon: <FaInstagram size={32} />,
  },
  {
    name: "Discord",
    url: "https://example.com",
    icon: <FaDiscord size={32} />,
  },
  {
    name: "Telegram",
    url: "https://t.me/channel_name",
    icon: <FaTelegram size={32} />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/xyz",
    icon: <FaTwitter size={32} />,
  },
  {
    name: "Twitch",
    url: "https://twitch.com/xyz",
    icon: <FaTwitch size={32} />,
  },
];
