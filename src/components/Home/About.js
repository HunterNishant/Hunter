/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Nov 13 2020 15:57:53 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { FaTools } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { GoVerified } from "react-icons/go";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.about_root}>
      <div className={styles.left}>
        <p className={styles.section_title}>Pay - Download - Run</p>
        <p className={styles.section_heading}>Why SX VIP is the Best</p>
        <p className={styles.section_text}>
          <span className={styles.icon_wrapper}>
            <GoVerified size={64} />
          </span>
          <span>
            "Hunter" organization is providing cheat service to more then 200k+
            users. We're proud to announce that our ban rate is still 0.1% with
            this huge userbase! Because our tool is the safest of all kind.
          </span>
        </p>
        <p className={styles.section_text}>
          <span className={styles.icon_wrapper}>
            <FaTools size={64} />
          </span>
          <span>
            We have our developers world wide, working very hard everday to make
            it more secure & user-friendly. Others selling cheat tools at double
            price then us and still get ban! On recent update we also have
            bypass inbuilt in our cheat tool, you no longer need to buy bypass
            separately and no extra steps needed to activate bypass.
          </span>
        </p>
        <p className={styles.section_text}>
          <span className={styles.icon_wrapper}>
            <GiReceiveMoney size={64} />
          </span>
          <span>
            The price is low because we care about your money and we want
            everyone to use our service without spending much. All of this are
            personally mange by "Hunter" who is well known in community for his
            good service. You should join his discord server for better support
            with voice chat.
          </span>
        </p>
      </div>
      {/* <div className={styles.right}></div> */}
    </div>
  );
};
