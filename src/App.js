import React from "react";
// component
import Controls from "./Component/Controls/Controls";
import Grid from "./Component/Grid/Grid";
import Pacman from "./Component/Pacman/Pacman";

import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <div className="app-pacman">
        <Grid />
        <Pacman />
      </div>
      <div className="app-controls">
        <Controls />
      </div>
    </div>
  );
};

export default App;
