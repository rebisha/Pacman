import React from "react";
// component
import Controls from "./Component/Controls/Controls";
import Grid from "./Component/Grid/Grid";
import Pacman from "./Component/Pacman/Pacman";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="pacman-wrapper">
        <Grid />
        <Pacman />
      </div>
      <div className="controls-wrapper">
        <Controls />
      </div>
    </div>
  );
};

export default App;
