/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 03 2020 23:17:02 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";
import axios from "axios";
import { eeEncrypt, generateSig } from "../../../utils";

import styles from "./Login.module.css";

const geekofiaAuth = async (user, pass) => {
  const localStorage = window.localStorage;
  localStorage.setItem("user", eeEncrypt(user));
  localStorage.setItem("pass", eeEncrypt(pass));
  // console.log(generateSig());

  const { sig, timestamp } = await generateSig();

  // call auth url
  const config = {
    headers: { "x-hunter-signature": sig },
  };

  const { data: auth } = await axios
    .post(
      `${process.env.REACT_APP_BACKEND_PROD}/admin/auth`,
      { timestamp },
      config
    )
    .catch((err) => {
      if (err.response.status === 401) {
        // console.log("You're not authorized");
        localStorage.clear();
        return { auth: "failed" };
      }
    });

  if (auth) {
    if (auth.status === 69) {
      return { auth: "success" };
    } else {
      // console.log("You're not authorized");
      localStorage.clear();
      return { auth: "failed" };
    }
  } else {
    return { auth: "failed" };
  }
};

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { auth } = await geekofiaAuth(username, password);
    console.log(auth);
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
