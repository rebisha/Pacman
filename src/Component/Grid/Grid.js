import React from "react";
// component
import Row from "../Row/Row";

import "./grid.scss";

const Grid = () => {
  return (
    <div className="grid">
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
};

export default Grid;
