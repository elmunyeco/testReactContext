import React, { useState } from "react";
import Context from "./Context";

const Provider = (props) => {
  const [name, setName] = useState("Peron");

  const unaCallback = () => {
    alert(`viva ${name}`);
  };

  return (
    <Context.Provider
      value={{
        name,
        updateName: (name) => setName(name),
        unaCallback: unaCallback
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
