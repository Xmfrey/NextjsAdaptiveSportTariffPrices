import React from "react";
import styles from "./Button.module.css";

export const Button = ({ buttonText, modalButton = false }) => {
  return (
    <button
      type="submit"
      className={
        modalButton
          ? [styles.Button, styles.ModalButton].join(" ")
          : styles.Button
      }
    >
      {buttonText}
    </button>
  );
};
