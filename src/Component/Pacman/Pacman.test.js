import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Pacman from "./Pacman";

test("image should have alt text", () => {
  render(<Pacman />);
  expect(screen.getByAltText(/pacman/i)).toBeInTheDocument();
});
