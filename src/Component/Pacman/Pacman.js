import React from "react";

import Logo from "./Pacman.png";
import "./pacman.scss";

const Pacman = () => {
  return <img className="pacman" src={Logo} alt="pacman" />;
};

export default Pacman;
