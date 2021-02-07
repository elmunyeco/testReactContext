import React from "react";
import { render } from "react-dom";

import Ruth from "./Ruth";
import Input from "./Input";
import Output from "./Output";
import Tonbo from "./Tonbo";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <Ruth style={styles}>
    <Input />
    <hr />
    <Output />
    <hr />
    <Tonbo />
  </Ruth>
);

render(<App />, document.getElementById("root"));
