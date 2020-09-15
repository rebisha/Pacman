import React from "react";
// component
import Grid from "./Component/Grid/Grid";
import Pacman from "./Component/Pacman/Pacman";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Grid />
      <Pacman />
    </div>
  );
};

export default App;
