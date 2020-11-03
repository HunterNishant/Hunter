/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 03 2020 23:17:02 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import styles from "./Login.module.css";

function Login() {
  const handleLogin = () => {
    console.log("Workin");
  };

  return (
    <div className={styles.admin_login_root}>
      <div className={styles.login_box}>
        <div>
          <p>username</p>
          <input type="text" />
        </div>
        <div>
          <p>password</p>
          <input type="password" />
        </div>
        <div>
          <button className={styles.btn_login} onClick={handleLogin}>
            login
          </button>
        </div>
      </div>
      <div className={styles.footer}>made with ❤ by chankruze</div>
    </div>
  );
}

export default Login;
