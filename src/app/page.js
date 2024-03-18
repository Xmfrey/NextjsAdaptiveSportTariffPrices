"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { apiPrices } from "@/services/nav.services";
import { PricesBlock } from "./components/prices-block/PricesBlock";
import { Timer } from "./components/timer/Timer";
import { TimerProvider } from "./useContext/timerContext";

export default function Home() {
  // const [prices, setPrices] = useState([]);

  // async function fetchPrices() {
  //   const prices = await apiPrices.getAll();
  //   setPrices(prices);
  // }

  // useEffect(() => {
  //   fetchPrices();
  // }, []);

  const myTime = 2 * 60 * 1000;
  const msTime = new Date().getTime();
  const dateTimeAfterMyTime = msTime + myTime;

  return (
    <TimerProvider>
      <div>
        <Timer targetDate={dateTimeAfterMyTime} />
        <PricesBlock />
      </div>
    </TimerProvider>
  );
}
