import React, { useState } from "react";
// component
import Button from "../Button/Button";

import "./position.scss";

const Position = ({ rotation, pacManPlacement, isPlaced, setMessage }) => {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);

  const handleXChange = e => {
    setXPosition(parseInt(e.target.value));
  };

  const handleYChange = e => {
    setYPosition(parseInt(e.target.value));
  };

  const setPosition = () => {
    if (!isPlaced) {
      setMessage("Place the pacman first");
    } else if (
      xPosition < 0 ||
      xPosition > 4 ||
      yPosition < 0 ||
      yPosition > 4
    ) {
      setMessage(
        "The value of X and Y should be greater than or equal to 0 and less than or equal to 4"
      );
    } else {
      pacManPlacement(xPosition, yPosition, rotation);
    }
  };

  return (
    <div className="position">
      <input
        className="position-input"
        type="number"
        placeholder="X"
        onChange={handleXChange}
      />
      <input
        className="position-input"
        type="number"
        placeholder="Y"
        onChange={handleYChange}
      />
      <Button text="set position" handleClick={setPosition} />
    </div>
  );
};

export default Position;
