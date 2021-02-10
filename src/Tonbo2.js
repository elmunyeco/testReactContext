import React from "react";
import { Consumer } from "./Context";

const myFxToContext = (unaVariable) => {
  alert(`unaVariable: ${unaVariable}`)
}

const Tonbo2 = () => (
  <div>
    <Consumer>
      {(context) => (
        <div>
          <button onClick={()=>context.passCallback(myFxToContext)}>Paso Una Callback cualquiera</button>
        </div>
      )}
    </Consumer>
  </div>
);

export default Tonbo2;
