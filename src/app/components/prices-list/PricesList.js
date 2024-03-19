import React from "react";
import styles from "./PricesList.module.css";
import { PricesItem } from "../prices-item/PricesItem";
import { prices } from "../../../../data/pricesData";
import { useTimerContext } from "@/useContext/timerContext";

export const PricesList = () => {
  const { endTimer, setEndTimer } = useTimerContext();

  return (
    <div className={styles.PricesList}>
      <div className={styles.PricesList__body}>
        {endTimer
          ? prices.map((p) =>
              p.isEndless ? <PricesItem prices={p} key={p.id} /> : ""
            )
          : prices.map((p) =>
              p.isPopular ? <PricesItem prices={p} key={p.id} /> : ""
            )}
      </div>
    </div>
  );
};
