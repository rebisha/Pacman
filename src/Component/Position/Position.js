import React, { useState } from "react";
// component
import Button from "../Button/Button";

import "./position.scss";

const compass = [
  {
    id: 0,
    direction: "East",
  },
  {
    id: 1,
    direction: "South",
  },
  {
    id: 2,
    direction: "West",
  },
  {
    id: 3,
    direction: "North",
  },
];

const Position = ({ pacManPlacement, isPlaced, setMessage }) => {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [direction, setDirection] = useState("East");
  const [rotate, setRotate] = useState(0);

  const handleXChange = e => {
    setXPosition(parseInt(e.target.value));
  };

  const handleYChange = e => {
    setYPosition(parseInt(e.target.value));
  };

  const handleChange = e => {
    setRotate(e.target.value * 90);
    setDirection(e.target.children[e.target.value].text);
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
      pacManPlacement(xPosition, yPosition, rotate, direction);
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

      <select onChange={handleChange} className="position-select">
        {compass.map(item => (
          <option key={item.id} value={item.id}>
            {item.direction}
          </option>
        ))}
      </select>
      <Button text="set position" handleClick={setPosition} />
    </div>
  );
};

export default Position;
