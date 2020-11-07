/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 31 2020 05:23:29 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

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
      `"${eeDecrypt(localStorage.getItem("user"))}@${eeDecrypt(
        localStorage.getItem("pass")
      )}"`
    ).toString();
    // generate token
    const token = hmacSHA256(date.toString(), cred).toString();
    // generate signature
    const sig = hmacSHA256(token & date.toString(), cred).toString();
    resolve({ sig, timestamp: date });
  });
};
