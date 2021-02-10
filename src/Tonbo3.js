import React from "react";
import { Consumer } from "./Context";

const Tonbo3 = () => (
  <div>
    <Consumer>
      {(context) => (
        <div>
          <button onClick={()=>context.execPassedCallback()}>Ejecuto Una Callback cualquiera</button>
        </div>
      )}
    </Consumer>
  </div>
);

export default Tonbo3;
