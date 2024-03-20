import { useEffect, useState } from "react";

export const useTimer = (targetDate) => {
  const [end, setEnd] = useState(false);
  const [countDown, setCountDown] = useState(0);
  const [countDownDate, setCountDownDate] = useState(0);

  useEffect(() => {
    setCountDownDate(new Date(targetDate).getTime());
    setCountDown(countDownDate - new Date().getTime());
    const interval = setInterval(() => {
      if (countDown > 2000) {
        setCountDown(countDownDate - new Date().getTime());
      } else {
        setEnd((prev) => !prev);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown]);

  if (countDown === 0) {
    return getReturnValues(0);
  } else if (end) {
    return getReturnValues(1);
  } else {
    return getReturnValues(countDown);
  }
};

const getReturnValues = (countDown) => {
  let days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  if (countDown === 0) {
    return [(days = 0), (hours = 0), (minutes = 2), (seconds = 0)];
  } else if (countDown === 1) {
    return [(days = 0), (hours = 0), (minutes = 0), (seconds = 0)];
  } else {
    return [days, hours, minutes, seconds];
  }
};
