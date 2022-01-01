import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  const incCount = () => {
    return setCount(count + 1);
  };

  return (
    <div>
      <button onClick={incCount}>Count: {count}</button>
    </div>
  );
}

export default HookCounter;
