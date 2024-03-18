"use client";
import React from "react";
import styles from "./PricesBlock.module.css";
import Image from "next/image";
import { PricesList } from "./../prices-list/PricesList";
import { Checkbox } from "../ui/checkbox/Checkbox";
import { Button } from "../ui/button/Button";

export const PricesBlock = () => {
  function formSubmit(e) {
    e.preventDefault();
    console.log("Форма отправлена");
  }

  return (
    <div className={styles.PricesBlock}>
      <div className="wrapper">
        <div className={styles.PricesBlock__body}>
          <h2 className={styles.PricesBlock__title}>
            Выберите подходящий тарифный план
          </h2>
          <div className={styles.PricesBlock__content}>
            <div className={styles.PricesBlock__imageWrapper}>
              <Image
                src="/man.png"
                alt="Man"
                width={434}
                height={715}
                priority
              />
            </div>
            <form onSubmit={formSubmit} className={styles.PricesBlock__form}>
              <div className={styles.PricesBlock__items}>
                <PricesList />
              </div>
              <p className={styles.PricesBlock__itemsDesc}>
                Следуя плану на 3 месяца, люди получают в 2 раза лучший
                результат, чем за 1 месяц
              </p>
              <div className={styles.PricesBlock__checkbox}>
                <Checkbox />
              </div>
              <div className={styles.PricesBlock__button}>
                <Button buttonText={"Купить"} />
              </div>
              <p className={styles.PricesBlock__warning}>
                Нажимая «Купить», Пользователь соглашается на автоматическое
                списание денежных средств по истечению купленного периода.
                Дальнейшие списания по тарифам участвующим в акции
                осуществляются по полной стоимости согласно оферте.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
