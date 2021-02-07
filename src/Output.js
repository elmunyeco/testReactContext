import React from "react";
import { Consumer } from "./Context";

const Output = () => (
  <Consumer>{(context) => <div>Output : {context.nombre}</div>}</Consumer>
);

export default Output;
