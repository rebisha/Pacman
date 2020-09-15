import React from "react";
// component
import Button from "../Button/Button";

import "./controls.scss";

const Controls = () => {
  return (
    <div className="controls">
      <Button text="place" />
      <Button text="move" />
      <Button text="left" />
      <Button text="right" />
    </div>
  );
};

export default Controls;
