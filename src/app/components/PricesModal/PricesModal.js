import React from "react";
import styles from "./PricesModal.module.css";
import { prices } from "../../../../data/pricesData";
import { PricesModalItem } from "../PricesModalItem/PricesModalItem";
import { Button } from "../ui/button/Button";

export const PricesModal = ({ active, setActive }) => {
  function formSubmit(e) {
    e.preventDefault();
    console.log("Форма отправлена");
  }

  if (!active) {
    return;
  }

  return (
    <div
      className={
        active
          ? [styles.PricesModal, styles.active].join(" ")
          : styles.PricesModal
      }
      onClick={() => setActive((prev) => !prev)}
    >
      <div
        className={styles.PricesModal__body}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.PricesModal__close}
          onClick={() => setActive((prev) => !prev)}
        ></button>
        <div className={styles.PricesModal__preTitle}>горящее предложение</div>
        <div className={styles.PricesModal__titleBlock}>
          <h2 className={styles.PricesModal__Title}>
            Не упусти свой <span>последний шанс</span>
          </h2>
          <div className={styles.PricesModal__postTitle}>
            Мы знаем, как трудно начать.. <span>Поэтому!</span>
          </div>
          <h3 className={styles.PricesModal__postTitleOffer}>
            Дарим скидку для <span>лёгкого старта 🏃‍♂️</span>
          </h3>
        </div>
        <form onSubmit={formSubmit} className={styles.PricesModal__form}>
          <div className={styles.PricesModal__formPreview}>
            Посмотри, что мы для тебя приготовили 🔥
          </div>
          <div className={styles.PricesModal__formItems}>
            {prices.map((p) =>
              p.isDiscount ? <PricesModalItem prices={p} key={p.id} /> : ""
            )}
          </div>
          <div className={styles.PricesModal__formButton}>
            <Button buttonText="Начать тренироваться" modalButton={true} />
          </div>
        </form>
      </div>
    </div>
  );
};
