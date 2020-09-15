import React, { useState } from "react";
// component
import Button from "../Button/Button";

import "./controls.scss";

const Controls = ({ message, setMessage }) => {
  const [isPlaced, setIsPlaced] = useState(false);
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [rotation, setRotation] = useState(0);

  const pacManPosition = (x, y, rotate) => {
    setXPos(x);
    setYPos(y);
    setRotation(rotate);
  };

  const pacManPlacement = (x, y, rotate) => {
    setMessage("");
    pacManPosition(x, y, rotate);

    const pacMan = document.getElementById("pacman");
    pacMan.style.transform = `translate(${x * 100}px, ${
      y * 100
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

      setRotation(rotate);
      pacManPlacement(xPos, yPos, rotate);
    }
  };

  const handleClick = () => {
    var rotate = rotation;
    const rotationDegree = Math.round(
      ((rotate %= 360) < 0 ? rotate + 360 : rotate) / 90
    );

    switch (rotationDegree) {
      case 0:
        const xPosition = xPos + 1;
        if (xPosition > 4) {
          setMessage("Pacman cannot move further");
          return false;
        } else {
          pacManPlacement(xPosition, yPos, rotate);
        }
        break;
      case 1:
        const yPosition = yPos + 1;
        if (yPosition > 4) {
          setMessage("Pacman cannot move further");
          return false;
        } else {
          pacManPlacement(xPos, yPosition, rotate);
        }
        break;
      case 2:
        const x = xPos - 1;
        if (x < 0) {
          setMessage("Pacman cannot move further");
          return false;
        } else {
          pacManPlacement(x, yPos, rotate);
        }
        break;
      case 3:
        const y = yPos - 1;
        if (y < 0) {
          setMessage("Pacman cannot move further");
          return false;
        } else {
          pacManPlacement(xPos, y, rotate);
        }
        break;
      default:
        pacManPosition(0, 0);
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
        {isPlaced ? <h3>{message}</h3> : ""}
      </div>
    </div>
  );
};

export default Controls;
