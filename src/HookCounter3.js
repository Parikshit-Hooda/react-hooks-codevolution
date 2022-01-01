import React, { useState } from "react";

function HookCounter3() {
  const phFN = "first name",
    phLN = "last name";
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        placeholder={phFN}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        placeholder={phLN}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <p>first name: {name.firstName}</p>
      <p>last name: {name.lastName}</p>
    </div>
  );
}

export default HookCounter3;
