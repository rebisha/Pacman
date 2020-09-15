import React from "react";
// component
import Square from "../Square/Square";

import "./row.scss";

const Row = () => {
  return (
    <div className="row">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
};

export default Row;
