import React from "react";
import { Consumer } from "./Context";
import Output from "./Output";

const Input = () => (
  <div>
    <Consumer>
      {(context) => (
        <div>
          <div>
            <form>
              <label for="input">Input: </label>
              <input
                id="input"
                type="text"
                placeholder="por ejemplo: Peron"
                value={context.nombre}
                onChange={(e) => context.updateNombre(e.target.value)}
              />
            </form>
          </div>
        </div>
      )}
    </Consumer>
  </div>
);

export default Input;
