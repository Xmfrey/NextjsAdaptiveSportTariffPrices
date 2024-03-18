"use client";
import React, { useEffect, useState } from "react";
import { useTimer } from "@/app/hooks/useTimer";
import { PricesModal } from "../PricesModal/PricesModal";
import { useTimerContext } from "@/app/useContext/timerContext";
import { TimerDisplay } from "./TimerDisplay";

export const Timer = ({ targetDate }) => {
  const { endTimer, setEndTimer } = useTimerContext();
  const [days, hours, minutes, seconds] = useTimer(targetDate);
  const [modal, setModal] = useState(true);

  useEffect(() => {
    if (days + hours + minutes + seconds === 0) {
      setEndTimer(true);
    }
  }, [days, hours, minutes, seconds]);

  return (
    <>
      <TimerDisplay minutes={minutes} seconds={seconds} />
      {days + hours + minutes + seconds === 0 ? (
        <PricesModal active={modal} setActive={setModal} />
      ) : (
        ""
      )}
    </>
  );
};
