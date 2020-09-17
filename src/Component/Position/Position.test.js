import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Position from "./Position";

test("should have correct placeholder, text and test id", () => {
  render(<Position />);
  expect(screen.getByPlaceholderText(/X/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Y/i)).toBeInTheDocument();
  expect(screen.getByText(/set position/i)).toBeInTheDocument();
  expect(screen.getByTestId(/select/i)).toBeInTheDocument();
});

test("change select value", () => {
  render(<Position />);
  fireEvent.change(screen.getByTestId(/select/i), {
    target: { value: 2 },
  });
  expect(screen.getByDisplayValue(/West/i)).toBeInTheDocument();
});
