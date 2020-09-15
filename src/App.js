import React, { useState } from "react";
// component
import Controls from "./Component/Controls/Controls";
import Grid from "./Component/Grid/Grid";
import Pacman from "./Component/Pacman/Pacman";

import "./App.css";

const App = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <div className="pacman-wrapper">
        <Grid />
        <Pacman />
      </div>
      <div className="controls-wrapper">
        <Controls message={message} setMessage={setMessage} />
      </div>
    </div>
  );
};

export default App;
