import React, { useState } from "react";

function HookCounter2() {
  const [count, setCount] = useState(0);

  const changeCount = () => {
    count % 2 === 0
      ? setCount((count) => count + 1)
      : setCount((count) => count - 1);
  };

  return (
    <div>
      <button onClick={changeCount}>Count: {count}</button>
    </div>
  );
}

export default HookCounter2;
