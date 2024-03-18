"use client";
import React, { useEffect, useState } from "react";
import styles from "./PricesItem.module.css";

export const PricesItem = ({ prices }) => {
  const [width, setWidth] = useState(0);
  const SCREEN = 650;

  useEffect(() => {
    if (!width) {
      setWidth(window.innerWidth);
    }
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.PricesItem}>
      <label htmlFor={prices?.id} className={styles.PricesItem__label}>
        <input
          className={styles.PricesItem__radio}
          type="radio"
          id={prices?.id}
          name="price"
          value={prices?.price}
          required
        />
        <div className={styles.PricesItem__body}>
          <div className={styles.PricesItem__name}>{prices?.name}</div>
          <div className={styles.PricesItem__priceWrapper}>
            <h2 className={styles.PricesItem__price}>{prices?.price}₽</h2>
            {prices?.oldprice ? (
              <div className={styles.PricesItem__discount}>
                {prices.oldprice}₽
              </div>
            ) : (
              ""
            )}
          </div>
          {prices?.desc && !prices?.addDesc ? (
            <div className={styles.PricesItem__description}>{prices.desc}</div>
          ) : prices?.addDesc && width > SCREEN ? (
            <div className={styles.PricesItem__description}>{prices.desc}</div>
          ) : (
            ""
          )}
          {prices?.addDesc && width <= SCREEN ? (
            <div className={styles.PricesItem__description}>
              {prices.addDesc}
            </div>
          ) : (
            ""
          )}
          {prices?.percents ? (
            <div className={styles.PricesItem__percents}>{prices.percents}</div>
          ) : (
            ""
          )}
        </div>
      </label>
    </div>
  );
};
