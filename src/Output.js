import React from "react";
import { Consumer } from "./Context";

const Output = () => (
  <Consumer>{(context) => <div>Output : {context.name}</div>}</Consumer>
);

export default Output;
