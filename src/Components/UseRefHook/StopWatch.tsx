import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const intervalRef = useRef(0);
  const handleStart = () => {
    setStartTime(Date.now());
    //setNow(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setNow(Date.now());
    }, 100);
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
  };
  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
    console.log("krishna kumar", secondsPassed.toFixed(0));
  }
  return (
    <div>
      {" "}
      <h1>Time passed: {secondsPassed.toFixed(0)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default StopWatch;
