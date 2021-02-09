import React from "react";
import { Consumer } from "./Context";

const Input = () => (
  
    <Consumer>
      {(context) => (
            <form>
              <label htmlFor="Input">Input: </label>
              <input
                label="toronja"
                id="Input"
                type="text"
                placeholder="por ejemplo: Peron"
                value={context.nombre}
                onChange={(e) => context.updateNombre(e.target.value)}
              />
            </form>
      )}
    </Consumer>
  
);

export default Input;
