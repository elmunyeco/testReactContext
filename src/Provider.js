import React, { useState } from "react";
import MyCtx from "./Context";

const Provider = (props) => {
  const [nombre, setNombre] = useState("")
  const [aCallback, setCallback] = useState({})


  const unaCallback = () => {
    alert(`viva ${nombre}`)
  }

  const passCallback = (fx) => {
    setCallback(fx)
  }

  const execPassedCallback = () => {
    aCallback.fx && aCallback.fx(nombre)
  }

  return (
    <MyCtx.Provider
      value={{
        nombre,
        updateNombre: (nombre) => setNombre(nombre),
        unaCallback: unaCallback,
        passCallback: (fx) => passCallback({fx}),
        execPassedCallback: execPassedCallback,
      }}
    >
      {props.children}
    </MyCtx.Provider>
  );
};

export default Provider
