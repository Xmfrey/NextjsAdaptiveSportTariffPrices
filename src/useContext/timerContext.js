import React, { useContext, useState, createContext } from "react";

const TimerContext = createContext();

export const useTimerContext = () => {
  return useContext(TimerContext);
};

export const TimerProvider = ({ children }) => {
  const [endTimer, setEndTimer] = useState(false);

  return (
    <TimerContext.Provider value={{ endTimer, setEndTimer }}>
      {children}
    </TimerContext.Provider>
  );
};
