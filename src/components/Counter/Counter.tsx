import React, { useState, useEffect } from "react";
import "./Counter.css";

export function Counter() {
  const [counter, setCounter] = useState(0);
  const [counterCount, setCounterCount] = useState("counter-blue");

  const plusCount = () => {
    setCounter(counter + 1);
  };

  const minusCount = () => {
    setCounter(counter - 1);
  };

    useEffect(() => {
    if (counter % 2 === 0) {
      setCounterCount("counter-red");
    } else {
      setCounterCount("counter-blue");
    }
  }, [counter]);

  return (
    <>
      <div className={`${counterCount} counter`}>{counter}</div>
      <div className="buttons">
        <button onClick={plusCount}>+</button>
        <button onClick={minusCount}>-</button>
      </div>
    </>
  )
}