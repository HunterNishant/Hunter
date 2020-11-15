/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Nov 16 2020 00:23:57 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import { GoVerified } from "react-icons/go";
// loader
import { BarLoader } from "react-spinners";

import styles from "./PaymentStatus.module.css";

export const PaymentStatus = ({
  isProcessing,
  isSuccess,
  isErrored,
  isCancelled,
}) => {
  return (
    <>
      {isProcessing && (
        <div className={styles.msg_processing}>
          <BarLoader color="white" width={200} />
          <p>Processing...</p>
        </div>
      )}
      {isSuccess && (
        <div className={styles.msg_success}>
          <GoVerified size={48} color="green" />
          <p>Check your email for KEY and payment receipt</p>
        </div>
      )}
      {isErrored && (
        <div className={styles.msg_errored}>
          <p>Something went wrong ;(</p>
        </div>
      )}
      {isCancelled && (
        <div className={styles.msg_cancelled}>
          <p>Payment Cancelled ;(</p>
        </div>
      )}
    </>
  );
};
