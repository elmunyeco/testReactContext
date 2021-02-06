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
                value={context.name}
                onChange={(e) => context.updateName(e.target.value)}
              />
            </form>
          </div>
          <p />
          <button onClick={context.unaCallback}>una Callback cualquiera</button>
        </div>
      )}
    </Consumer>
  </div>
);

export default Input;
