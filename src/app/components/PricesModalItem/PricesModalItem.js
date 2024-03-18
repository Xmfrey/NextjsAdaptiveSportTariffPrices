import React from "react";
import styles from "./PricesModalItem.module.css";

export const PricesModalItem = ({ prices }) => {
  return (
    <div className={styles.PricesModalItem}>
      <label htmlFor={prices?.id} className={styles.PricesModalItem__label}>
        <input
          className={styles.PricesModalItem__radio}
          type="radio"
          id={prices?.id}
          name="price"
          value={prices?.price}
          required
        />
        <div className={styles.PricesModalItem__customRadio}></div>
        <div className={styles.PricesModalItem__body}>
          <div className={styles.PricesModalItem__name}>{prices?.name}</div>

          <div className={styles.PricesModalItem__oldPrice}>
            {prices.oldprice}₽
          </div>

          <div className={styles.PricesModalItem__divideLine}></div>

          <div className={styles.PricesModalItem__priceWrapper}>
            <h2 className={styles.PricesModalItem__price}>
              {prices?.price}₽
              <span className={styles.PricesModalItem__percents}>
                {prices.percents}
              </span>
            </h2>
          </div>
        </div>
      </label>
    </div>
  );
};
