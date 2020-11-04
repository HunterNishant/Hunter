/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 03 2020 23:17:02 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(username);
    console.log(password);
  };

  return (
    <div className={styles.admin_login_root}>
      <div className={styles.login_box}>
        <div>
          <p>username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <p>password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
