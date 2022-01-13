import React, { useContext } from "react";
import { userContext } from "./UseContextCompA";

function UseContextCompB() {
  const user = useContext(userContext);
  console.log(user);
  return <div>this is child component. My name is {user}</div>;
}

export default UseContextCompB;
