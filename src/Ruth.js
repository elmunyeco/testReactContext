import React, { useState } from "react";
import MyCtx from "./Context";

const Provider = (props) => {
  const [nombre, setNombre] = useState("");

  const unaCallback = () => {
    alert(`viva ${nombre}`);
  };

  return (
    <MyCtx.Provider
      value={{
        nombre,
        updateNombre: (nombre) => setNombre(nombre),
        unaCallback: unaCallback
      }}
    >
      {props.children}
    </MyCtx.Provider>
  );
};

export default Provider;
