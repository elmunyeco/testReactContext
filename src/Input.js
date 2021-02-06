import React from "react";
import { Consumer } from "./Context";
import Output from "./Output";

const Input = () => (
  <div>
    <Consumer>
      {(context) => (
        <div>
          <div>
            <input
              type="text"
              value={context.name}
              onChange={(e) => context.updateName(e.target.value)}
            />
          </div>
          <button onClick={context.unaCallback}>callback</button>
        </div>
      )}
    </Consumer>
  </div>
);

export default Input;
