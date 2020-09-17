import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("button should have text", () => {
  const text = "move";

  render(<Button text={text} />);
  expect(screen.getByText(text)).toBeInTheDocument();
});

test("button should be clickable", () => {
  render(<Button text="place" />);
  fireEvent.click(screen.getByText(/place/i));
});
