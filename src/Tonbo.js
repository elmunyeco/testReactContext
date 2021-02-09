import React from "react";
import { Consumer } from "./Context";

const myFxToContext = (unaVariable) => {
  alert(`unaVariable: ${unaVariable}`)
}

const Tonbo = () => (
  <div>
    <Consumer>
      {(context) => (
        <div>
          {/*           <button onClick={context.unaCallback}>una Callback cualquiera</button> */}
          <button onClick={()=>context.anotherCallback(myFxToContext)}>una Callback cualquiera</button>
        </div>
      )}
    </Consumer>
  </div>
);

export default Tonbo;
