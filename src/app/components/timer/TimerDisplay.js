import React from "react";
import styles from "./TimerDisplay.module.css";
import { TimerDisplayItem } from "./TimerDisplayItem";

export const TimerDisplay = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.timer}>
      <div className="wrapper">
        <div className={styles.timer__body}>
          <h3 className={styles.timer__title}>Скидка действует:</h3>
          <TimerDisplayItem
            value={minutes}
            type={"Минут"}
            isDanger={minutes == 0 && seconds <= 30 && seconds > 0}
            ended={minutes + seconds === 0}
          />
          <div
            className={
              minutes == 0 && seconds <= 30 && seconds > 0
                ? [styles.timer__delimiter, styles.danger].join(" ")
                : minutes + seconds === 0
                ? [styles.timer__delimiter, styles.ended].join(" ")
                : styles.timer__delimiter
            }
          >
            :
          </div>
          <TimerDisplayItem
            value={seconds}
            type={"Секунд"}
            isDanger={minutes == 0 && seconds <= 30 && seconds > 0}
            ended={minutes + seconds === 0}
          />
        </div>
      </div>
    </div>
  );
};
