"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { apiPrices } from "@/services/nav.services";
import { PricesBlock } from "./components/prices-block/PricesBlock";
import { Timer } from "./components/timer/Timer";
import { TimerProvider } from "@/useContext/timerContext";

export default function Home() {
  const [myTime, setMyTime] = useState(0);
  // const [prices, setPrices] = useState([]);

  // async function fetchPrices() {
  //   const prices = await apiPrices.getAll();
  //   setPrices(prices);
  // }

  // useEffect(() => {
  //   fetchPrices();
  // }, []);

  useEffect(() => {
    setMyTime(new Date().getTime() + 2 * 60 * 1000);
  }, []);

  return (
    <TimerProvider>
      <div>
        <Timer targetDate={myTime} suppressHydrationWarning />
        <PricesBlock />
      </div>
    </TimerProvider>
  );
}
