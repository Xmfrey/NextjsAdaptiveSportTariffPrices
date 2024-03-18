import React from "react";
import styles from "./TimerDisplayItem.module.css";

export const TimerDisplayItem = ({ value, type, isDanger, ended }) => {
  return (
    <div
      className={
        isDanger
          ? [styles.countdown, styles.danger].join(" ")
          : ended
          ? [styles.countdown, styles.ended].join(" ")
          : styles.countdown
      }
    >
      <div className={styles.timer__value}>
        {value < 10 ? `0${value}` : value}
      </div>
      <div className={styles.timer__field}>{type}</div>
    </div>
  );
};
