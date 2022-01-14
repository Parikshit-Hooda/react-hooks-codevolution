import React, { useReducer, useState } from "react";
//step 1, import useReducer

//step 2, write logic
let currVal = 1;
const reducer = (state, action) => {
  switch (action) {
    case "reset":
      return 1;
    case "multiply":
      currVal = document.getElementById("ip").value;
      console.log("state " + state);
      const res = state + currVal;
      console.log("res " + res);
      //currVal = res;
      return res;

    default:
      return state;
  }
};

function UseReducer1() {
  //const [cv, setcv] = useState(1)
  //const result = 0;
  const [newVal, dispatch] = useReducer(reducer, currVal);

  return (
    <div>
      {/* hello */}
      <div id="res">{newVal}</div>
      <input type="text" placeholder="new value" id="ip"></input>
      <button onClick={() => dispatch("multiply")}>Combine</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default UseReducer1;
