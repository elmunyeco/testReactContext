import React from "react";
import { Consumer } from "./Context";

const Input = () => (
  <div>
    <Consumer>
      {(context) => (
        <div>
          <button onClick={context.unaCallback}>una Callback cualquiera</button>
        </div>
      )}
    </Consumer>
  </div>
);

export default Input;
