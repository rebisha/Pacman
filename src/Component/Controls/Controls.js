import React, { useState } from "react";
// component
import Button from "../Button/Button";
import Position from "../Position/Position";

import "./controls.scss";

const Controls = () => {
  const [direction, setDirection] = useState("East");
  const [isPlaced, setIsPlaced] = useState(false);
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [message, setMessage] = useState("");

  const pacManPosition = (x, y, rotate, direction) => {
    setXPos(x);
    setYPos(y);
    setRotation(rotate);
    setDirection(direction);
  };

  const pacManPlacement = (x, y, rotate, direction) => {
    setMessage("");
    pacManPosition(x, y, rotate, direction);

    const square = document.querySelector(".square");
    const squareStyle = getComputedStyle(square);
    const squareWidth = squareStyle.minWidth;

    const pacMan = document.getElementById("pacman");
    pacMan.style.transform = `translate(${x * parseInt(squareWidth)}px, ${
      y * parseInt(squareWidth)
    }px) rotateZ(${rotate}deg)`;
  };

  const placePacman = () => {
    const pacMan = document.getElementById("pacman");
    pacMan.style.display = "block";
    setIsPlaced(true);
    setMessage("Pacman is placed");

    document.getElementById("place").disabled = true;
  };

  const handleRotate = value => {
    var rotate;

    if (isPlaced) {
      if (value === "right") {
        rotate = rotation + 90;
      } else if (value === "left") {
        rotate = rotation - 90;
      }

      pacManPlacement(xPos, yPos, rotate, direction);
    }
  };

  const handleClick = () => {
    var rotate = rotation;
    const rotationDegree = Math.round(
      ((rotate %= 360) < 0 ? rotate + 360 : rotate) / 90
    );

    if (isPlaced) {
      switch (rotationDegree) {
        case 0:
          const xPosition = xPos + 1;
          if (xPosition > 4) {
            setMessage("Pacman cannot move further");
          } else {
            pacManPlacement(xPosition, yPos, rotate, "East");
          }
          break;
        case 1:
          const yPosition = yPos + 1;
          if (yPosition > 4) {
            setMessage("Pacman cannot move further");
          } else {
            pacManPlacement(xPos, yPosition, rotate, "South");
          }
          break;
        case 2:
          const x = xPos - 1;
          if (x < 0) {
            setMessage("Pacman cannot move further");
          } else {
            pacManPlacement(x, yPos, rotate, "West");
          }
          break;
        case 3:
          const y = yPos - 1;
          if (y < 0) {
            setMessage("Pacman cannot move further");
          } else {
            pacManPlacement(xPos, y, rotate, "North");
          }
          break;
        default:
          pacManPosition(0, 0);
      }
    } else {
      setMessage("Place the pacman first");
    }
  };

  return (
    <div className="controls">
      <div className="controls-button">
        <Button text="place" handleClick={placePacman} />
        <Button text="move" handleClick={handleClick} />
        <Button text="left" handleClick={e => handleRotate(e.target.value)} />
        <Button text="right" handleClick={e => handleRotate(e.target.value)} />
      </div>

      <div className="controls-status">
        {isPlaced ? (
          <>
            <h3 className="controls-text">
              Status: {xPos}, {yPos}, {direction}
            </h3>
            <h5 className="controls-text">{message}</h5>
          </>
        ) : (
          <h5 className="controls-text">{message}</h5>
        )}
      </div>

      <div className="controls-position">
        <Position
          pacManPlacement={pacManPlacement}
          isPlaced={isPlaced}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
};

export default Controls;
