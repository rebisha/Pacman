import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Controls from "./Controls";

test("should have correct button text", () => {
  render(<Controls />);

  expect(screen.getByText(/place/i)).toBeInTheDocument();
  expect(screen.getByText(/move/i)).toBeInTheDocument();
  expect(screen.getByText(/left/i)).toBeInTheDocument();
  expect(screen.getByText(/right/i)).toBeInTheDocument();
  expect(screen.getByText(/set position/i)).toBeInTheDocument();
});

test("clicking on the set position button", () => {
  render(<Controls />);
  fireEvent.click(screen.getByText(/set position/i));
  expect(screen.getByText("Place the pacman first")).toBeInTheDocument();
});
