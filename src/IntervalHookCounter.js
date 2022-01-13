import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const tickInterval = setInterval(tick, 1000);
    //tickInterval()
    return () => {
      clearInterval(tickInterval);
    };
  }, [count]);

  return <div>{count}</div>;
}

export default IntervalHookCounter;
