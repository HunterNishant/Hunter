/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Nov 15 2020 22:14:07 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import styles from "./PaymentOption.module.css";

const bgColors = ["#5a73ff", "#209748", "#ec8714", "#663399"];

export const PaymentOption = ({ options, setOption }) => {
  return (
    <div className={styles.payment_option_root}>
      <p className={styles.payment_option_header}>Choose a payment option</p>
      {options &&
        options.map((option, i) => (
          <>
            {option.id !== 0 && (
              <div key={i} className={styles.option_wrapper}>
                <button
                  className={`${styles.option_button} ${option.name}`}
                  style={{
                    background: `${
                      bgColors[Math.floor(Math.random() * bgColors.length)]
                    }`,
                  }}
                  onClick={() => setOption(option)}
                >
                  <span className={styles.option_icon}></span>
                  <span className={styles.option_name}>{option.name}</span>
                </button>
              </div>
            )}
          </>
        ))}
    </div>
  );
};
