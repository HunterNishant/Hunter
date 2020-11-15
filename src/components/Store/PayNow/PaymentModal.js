/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Nov 15 2020 18:42:55 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { useEffect, useState } from "react";
import Modal from "react-modal";
import { PaymentOption } from "./PaymentOption";
// utils
import { nanoid } from "nanoid";
import { initRazorPayTransaction } from "../../../utils";
// icons
import { MdClose } from "react-icons/md";

// payment vendors
import { vendors } from "./PaymentVendors";
// css
import styles from "./PaymentModal.module.css";
import { PaymentStatus } from "./PaymentStatus";
import { Paypal } from "./Paypal/Paypal";

// prepare data according to user selection
const prepareRazorpayData = ({
  name,
  keysMultiplier,
  mrp,
  price,
  quantity,
  category,
  image,
}) => {
  const totalKeys = keysMultiplier * quantity;
  const amount = price.inr * quantity * 100;
  const receipt = `receipt_${nanoid()}`;

  return {
    amount,
    currency: "INR",
    description: `${quantity}x ${name}`,
    receipt,
    image,
    notes: {
      product_name: name,
      product_price: price.inr,
      product_type: category,
      product_quantity: quantity,
      keys_count: totalKeys,
    },
  };
};

const preparePaypalData = ({
  name,
  keysMultiplier,
  price,
  quantity,
  category,
}) => {
  const totalPrice = price.usd * quantity;
  const receipt = `receipt_${nanoid()}`;

  return [
    {
      description: name,
      amount: {
        currency_code: "USD",
        value: totalPrice.toFixed(2),
        breakdown: {
          item_total: { value: totalPrice.toFixed(2), currency_code: "USD" },
        },
      },
      invoice_id: `${receipt}`,
      items: [
        {
          name,
          unit_amount: {
            currency_code: "USD",
            value: price.usd.toFixed(2),
          },
          quantity,
          description: `${keysMultiplier} ${category} key(s)`,
        },
      ],
    },
  ];
};

export const PaymentModal = ({
  itemData,
  isPaymentModalOpen,
  setIsPaymentModalOpen,
}) => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(
    vendors[0]
  );

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const [paypalData, setPaypalData] = useState(null);

  const successCallback = (status) => {
    if (status) {
      setIsSuccess(true);
      console.log("Payment cancelled");
    }
  };
  const cancelCallback = (status) => {
    if (status) {
      setIsCancelled(true);
      setIsPaymentModalOpen(false);
      console.log("Payment cancelled");
    }
  };
  const errorCallback = (status) => {
    if (status) {
      setIsErrored(true);
      console.log("Something nasty happened ;(");
    }
  };

  useEffect(() => {
    const id = selectedPaymentOption.id;
    if (id !== 0) {
      switch (id) {
        // razorpay
        case 1:
          initRazorPayTransaction(
            prepareRazorpayData(itemData),
            successCallback,
            errorCallback,
            cancelCallback,
            setIsProcessing
          );
          break;
        // paypal
        case 2:
          setPaypalData(preparePaypalData(itemData));
          break;
        // defsult
        default:
          break;
      }
    }
    // eslint-disable-next-line
  }, [selectedPaymentOption]);

  return (
    <Modal
      className={styles.modal}
      overlayClassName={styles.modalOverlay}
      isOpen={isPaymentModalOpen}
    >
      {/* Close Button */}
      <span
        className={styles.close}
        onClick={() => setIsPaymentModalOpen(false)}
      >
        <MdClose />
      </span>

      {/* Ask for razorpay or paypal */}
      {selectedPaymentOption.id === 0 && (
        <PaymentOption options={vendors} setOption={setSelectedPaymentOption} />
      )}

      {/* Payment status */}
      {selectedPaymentOption.id !== 0 && selectedPaymentOption.id !== 2 && (
        <div className={styles.payment_status}>
          <PaymentStatus
            isProcessing={isProcessing}
            isSuccess={!isProcessing && isSuccess}
            isErrored={!isProcessing && isErrored}
            isCancelled={!isProcessing && isCancelled}
          />
        </div>
      )}

      {/* Render paypal option */}
      {selectedPaymentOption.id === 2 && paypalData && (
        <Paypal paypalData={paypalData} cancelCallback={cancelCallback} />
      )}
    </Modal>
  );
};
