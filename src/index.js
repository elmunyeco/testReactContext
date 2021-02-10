import React from "react";
import { render } from "react-dom";

import Provider from "./Provider";
import Input from "./Input";
import Output from "./Output";
import Tonbo from "./Tonbo";
import Tonbo2 from "./Tonbo2";
import Tonbo3 from "./Tonbo3";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

/* a ver si sincroniza */

const App = () => (
  <Provider style={styles}>
    <Input />
    <hr />
    <Output />
    <hr />
    <Tonbo />
    <hr />
    <Tonbo2 />
    <hr />
    <Tonbo3 />
  </Provider>
);

render(<App />, document.getElementById("root"));
