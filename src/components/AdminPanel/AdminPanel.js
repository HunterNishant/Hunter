/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 03 2020 20:43:53 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useEffect, useState } from "react";
import IdleTimer from "react-idle-timer";
import Login from "./Login/Login";
import Manage from "./Manage/Manage";
import styles from "./AdminPanel.module.css";
import SideNav from "./SideNav/SideNav";
import { Create } from "./Create/Create";
import { generateSig, requestAuth } from "../../utils";

function AdminPanel() {
  // eslint-disable-next-line
  const [isAuthenticated, setIsAuthenticated] = useState(false); // this blocks routes
  const [activeMenu, setActiveMenu] = useState("manage"); // this blocks routes

  useEffect(() => {
    const localStorage = window.localStorage;

    if (localStorage.getItem("_getu") && localStorage.getItem("_getk")) {
      generateSig().then(({ sig, timestamp }) => {
        requestAuth(timestamp, sig).then(({ auth }) => {
          if (auth === "success") {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        });
      });
    } else {
      setIsAuthenticated(false);
    }
  }, [isAuthenticated]);

  const idleTimerRef = React.useRef(null);
  const sessionTimeoutRef = React.useRef(null);

  const logOut = () => {
    setIsAuthenticated(false);
    window.localStorage.clear();
    console.log("Admin logged out");
    clearTimeout(sessionTimeoutRef.current);
  };

  const onIdleHandler = () => {
    console.log("User is idle");
    sessionTimeoutRef.current = setTimeout(logOut, 5000);
  };

  return (
    <div className={styles.AdminPanel}>
      {!isAuthenticated && <Login setIsAuthenticated={setIsAuthenticated} />}
      {isAuthenticated && (
        <>
          <IdleTimer
            ref={idleTimerRef}
            timeout={300000} // ms
            onIdle={onIdleHandler}
          />
          <SideNav activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

          {activeMenu === "manage" && <Manage />}
          {activeMenu === "add" && <Create />}
        </>
      )}
    </div>
  );
}

export default AdminPanel;
