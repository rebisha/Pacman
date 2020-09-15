import React, { useState } from "react";
// component
import Button from "../Button/Button";

import "./controls.scss";

const Controls = ({ message, setMessage }) => {
  const [isPlaced, setIsPlaced] = useState(false);

  const placePacman = () => {
    const pacMan = document.getElementById("pacman");
    pacMan.style.display = "block";
    setIsPlaced(true);
    setMessage("Pacman is placed");

    document.getElementById("place").disabled = true;
  };

  return (
    <div className="controls">
      <div className="controls-button">
        <Button text="place" handleClick={placePacman} />
        <Button text="move" />
        <Button text="left" />
        <Button text="right" />
      </div>

      <div className="controls-status">
        {isPlaced ? <h3>{message}</h3> : ""}
      </div>
    </div>
  );
};

export default Controls;
