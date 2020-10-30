/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Oct 30 2020 14:43:35 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import { Link } from "react-router-dom";

import { SiteLinks, SocialLinks } from "./FooterLinks";
import { GoVerified } from "react-icons/go";
import { HiOutlineLink } from "react-icons/hi";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <footer className={styles.footer}>
        <div className={styles.left}>
          <h2 className={styles.sec_title}>
            Hunter <GoVerified size={16} />
          </h2>
          <p>
            Lorem ips facere veritatis quam voluptatibus odit asperiores fugiat
            nulla repudiandae qui?
          </p>
          <ul className={styles.ul_horizontal}>
            {SocialLinks.map((link, index) => (
              <li key={index} className={styles.li}>
                <a href={link.url}>{link.icon}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.mid}>
          <h2 className={styles.sec_title}>
            Links
          </h2>
          <ul>
            {SiteLinks.map((link, index) => (
              <li key={index} className={styles.li}>
                <Link to={link.path}>
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className={styles.right}>
          <h2 className={styles.sec_title}>Social</h2>
          <ul>
            {SocialLinks.map((link, index) => (
              <li key={index} className={styles.li}>
                <a href={link.url}>{link.icon}</a>
              </li>
            ))}
          </ul>
        </div> */}
      </footer>
      <div className={styles.credits}>
        <p>Copyright &copy; Hunter YT</p>
        <p>Developed with ❤ by chankruze</p>
      </div>
    </div>
  );
}

export default Footer;
