import { useEffect, useState } from "react";

export const useTimer = (targetDate) => {
  const [countDown, setCountDown] = useState(0);
  const countDownDate = new Date(targetDate).getTime();

  useEffect(() => {
    setCountDown(countDownDate - new Date().getTime());
    const interval = setInterval(() => {
      countDown > 0
        ? setCountDown(countDownDate - new Date().getTime())
        : clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate, countDown]);

  if (countDown <= 0) {
    return getReturnValues(0);
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

  if (!countDown) {
    return [(days = 0), (hours = 0), (minutes = 0), (seconds = 0)];
  } else {
    return [days, hours, minutes, seconds];
  }
};
