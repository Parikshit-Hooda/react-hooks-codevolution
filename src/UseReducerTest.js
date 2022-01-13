import React, { useReducer } from "react";
//step1, include useReducer

//step2, build the logic for reducer
const initState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initState;
    default:
      return state;
  }
};

function UseReducerTest() {
  const [count, dispatch] = useReducer(reducer, initState);
  //step 3, define useReducer

  return (
    <div>
      <p> Count - {count}</p>
      <button onClick={() => dispatch("inc")}>Inc</button>
      <button onClick={() => dispatch("dec")}>Dec</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default UseReducerTest;
