import React from "react";
import { Consumer } from "./Context";

const Tonbo = () => (
  <div>
    <Consumer>
      {(context) => (
        <div>
          <button onClick={context.unaCallback}>Hago algo con el valor de input</button>
        </div>
      )}
    </Consumer>
  </div>
);

export default Tonbo;
