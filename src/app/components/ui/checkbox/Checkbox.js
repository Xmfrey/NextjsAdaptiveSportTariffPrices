import React from "react";
import styles from "./Checkbox.module.css";
import Link from "next/link";

export const Checkbox = () => {
  return (
    <div className={styles.Checkbox__body}>
      <input
        className={styles.Checkbox__button}
        id="checkbox"
        name="checkbox"
        type="checkbox"
        required
      />
      <label className={styles.Checkbox__label} htmlFor="checkbox">
        Я соглашаюсь с{" "}
        <Link className={styles.Checkbox__link} href="#">
          Правилами сервиса
        </Link>{" "}
        и условиями{" "}
        <Link className={styles.Checkbox__link} href="#">
          Публичной оферты.
        </Link>
      </label>
    </div>
  );
};
