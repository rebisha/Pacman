import React from "react";

import "./button.scss";

const Button = ({ handleClick, text }) => {
  return (
    <button
      id={text}
      data-testid={text}
      className="btn"
      onClick={handleClick}
      value={text}
    >
      {text}
    </button>
  );
};

export default Button;
