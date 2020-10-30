/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Oct 30 2020 18:55:27 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useEffect } from "react";
import styles from "./Home.module.css";

function Home() {
  //   useEffect(() => {
  //     const form = document.createElement("form");
  //     const script = document.createElement("script");

  //     script.src = "https://checkout.razorpay.com/v1/payment-button.js";
  //     script.async = true;
  //     script.ATTRIBUTE_NODE =
  //     script."data-payment_button_id" = "pl_Fv6CvezI8GTPrI";

  //     form.appendChild(script);
  //     document.body.appendChild(form);

  //     return () => {
  //       document.body.removeChild(form);
  //     };
  //   }, []);

  useEffect(() => {
    const script = (
      <script
        async
        src="https://checkout.razorpay.com/v1/payment-button.js"
        data-payment_button_id="pl_FvAerMbJjPk3lc"
      ></script>
    );
    document.getElementById("donate").appendChild(script);
  }, []);

  return (
    <form id="donate" className={styles.home}>
      {/* <button id="pl_FvAerMbJjPk3lc">Test</button> */}
    </form>
  );
}

export default Home;
