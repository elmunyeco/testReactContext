import React from "react";
import { render } from "react-dom";

import RuthLeaf from "./RuthLeaf";
import Input from "./Input";
import Output from "./Output";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <RuthLeaf style={styles}>
    <Input />
    <Output />
  </RuthLeaf>
);

render(<App />, document.getElementById("root"));
