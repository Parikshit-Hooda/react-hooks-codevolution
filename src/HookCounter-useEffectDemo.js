import React, { useState, useEffect } from "react";

function HookCounteruseEffectDemo() {
  const [count, setCount] = useState(0);
  const [consoleLogCount, setconsoleLogCount] = useState(0);

  useEffect(() => {
    console.log(`clicked ${count} times`);
    // document.title = `clicked ${count} times`;
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
      <button onClick={() => setconsoleLogCount(consoleLogCount + 1)}>
        Clicked {consoleLogCount} times
      </button>
    </div>
  );
}

export default HookCounteruseEffectDemo;
