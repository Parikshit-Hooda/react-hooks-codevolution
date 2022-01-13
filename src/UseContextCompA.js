import React from "react";
import UseContextCompB from "./UseContextCompB";
export const userContext = React.createContext();

function UseContextCompA() {
  return (
    <div>
      {/* this is parent compoenent */}
      hello, this is parent component
      <userContext.Provider value={"Sarah"}>
        <UseContextCompB />
      </userContext.Provider>
    </div>
  );
}

export default UseContextCompA;
