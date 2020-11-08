/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 31 2020 05:23:29 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import axios from "axios";
const CryptoJS = require("crypto-js"),
  sha256 = require("crypto-js/sha256"),
  hmacSHA256 = require("crypto-js/hmac-sha256");

export const loadScript = async (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const eeEncrypt = (text) => {
  return CryptoJS.AES.encrypt(
    text,
    process.env.REACT_APP_HUNTER_KEY_SECRET
  ).toString();
};

export const eeDecrypt = (cipher) => {
  return CryptoJS.AES.decrypt(
    cipher,
    process.env.REACT_APP_HUNTER_KEY_SECRET
  ).toString(CryptoJS.enc.Utf8);
};

export const generateSig = async () => {
  return new Promise((resolve) => {
    const date = Date.now();
    const localStorage = window.localStorage;
    // decode user, pass & gen cred hash
    const cred = sha256(
      `"${eeDecrypt(localStorage.getItem("_getu"))}@${eeDecrypt(
        localStorage.getItem("_getk")
      )}"`
    ).toString();
    // generate token
    const token = hmacSHA256(date.toString(), cred).toString();
    // generate signature
    const sig = hmacSHA256(token & date.toString(), cred).toString();
    resolve({ sig, timestamp: date });
  });
};

export const requestAuth = async (timestamp, sig) => {
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
    localStorage.clear();
    return { auth: "failed" };
  }
};

export const geekofiaAuth = async (user, pass) => {
  const localStorage = window.localStorage;
  localStorage.setItem("_getu", eeEncrypt(user));
  localStorage.setItem("_getk", eeEncrypt(pass));
  // console.log(generateSig());

  const { sig, timestamp } = await generateSig();
  const { auth } = await requestAuth(timestamp, sig);
  return auth;
};

// call api for data
export const fetchData = async (type) => {
  const { sig, timestamp } = await generateSig();

  const config = {
    headers: { "x-hunter-signature": sig },
  };

  const { data: response } = await axios
    .post(
      `${process.env.REACT_APP_BACKEND_PROD}/admin/fetch/${type}`,
      { timestamp },
      config
    )
    .catch((err) => console.log(err));

  return response || [];
};

// delete one item
export const deleteDoc = async (type, id) => {
  const { sig, timestamp } = await generateSig();

  const config = {
    headers: { "X-Hunter-Signature": sig },
  };

  const { data: response } = await axios
    .post(
      `${process.env.REACT_APP_BACKEND_PROD}/admin/delete/${type}`,
      { timestamp, id },
      config
    )
    .catch((err) => console.log(err));

  return response || { status: "failed" };
};

// bulk delete
export const deleteDocMany = async (type, ids) => {
  const { sig, timestamp } = await generateSig();

  const config = {
    headers: { "x-hunter-signature": sig },
  };

  const { data: response } = await axios
    .post(
      `${process.env.REACT_APP_BACKEND_PROD}/admin/delete/${type}`,
      { timestamp, ids },
      config
    )
    .catch((err) => console.log(err));

  return response || { status: "failed" };
};

// update one item
export const updateDoc = async (type, data) => {
  const { sig, timestamp } = await generateSig();

  const config = {
    headers: { "x-hunter-signature": sig },
  };

  const { data: response } = await axios
    .post(
      `${process.env.REACT_APP_BACKEND_PROD}/admin/update/${type}`,
      { timestamp, data },
      config
    )
    .catch((err) => console.log(err));

  return response || { status: "failed" };
};

// create & save bulk
export const createDocs = async (type, data) => {
  const { sig, timestamp } = await generateSig();

  const config = {
    headers: { "x-hunter-signature": sig },
  };

  const { data: response } = await axios
    .post(
      `${process.env.REACT_APP_BACKEND_PROD}/admin/create/${type}`,
      { timestamp, data },
      config
    )
    .catch((err) => console.log(err));

  return response || { status: "failed" };
};
