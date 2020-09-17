import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("clicking the place button", () => {
  render(<App />);

  fireEvent.click(screen.getByTestId(/place/i));
  expect(screen.getByText("Pacman is placed")).toBeInTheDocument();
});

test("disable the place button", () => {
  render(<App />);

  fireEvent.click(screen.getByTestId(/place/i));
  expect(screen.getByTestId(/place/i)).toHaveAttribute("disabled");
});

test("set position of pacman from the input field", () => {
  render(<App />);

  fireEvent.click(screen.getByTestId(/place/i));

  fireEvent.change(screen.getByPlaceholderText(/X/i), { target: { value: 2 } });
  fireEvent.change(screen.getByPlaceholderText(/Y/i), {
    target: { value: 3 },
  });
  fireEvent.change(screen.getByTestId(/select/i), {
    target: { value: 3 },
  });

  fireEvent.click(screen.getByTestId(/set position/i));

  expect(screen.getByText("Status: 2, 3, North")).toBeInTheDocument();
});

test("clicking on the move button", () => {
  render(<App />);
  fireEvent.click(screen.getByTestId(/move/i));
  expect(screen.getByText("Place the pacman first")).toBeInTheDocument();
});

test("move the pacman", () => {
  render(<App />);
  fireEvent.click(screen.getByTestId(/place/i));
  expect(screen.getByText("Status: 0, 0, East")).toBeInTheDocument();

  fireEvent.click(screen.getByTestId(/move/i));
  fireEvent.click(screen.getByTestId(/move/i));
  expect(screen.getByText("Status: 2, 0, East")).toBeInTheDocument();
});

test("rotate pacman to the left", () => {
  render(<App />);
  fireEvent.click(screen.getByTestId(/place/i));
  expect(screen.getByText("Pacman is placed")).toBeInTheDocument();

  fireEvent.click(screen.getByTestId(/move/i));
  fireEvent.click(screen.getByTestId(/left/i));
  fireEvent.click(screen.getByTestId(/left/i));
  fireEvent.click(screen.getByTestId(/move/i));

  expect(screen.getByText("Status: 0, 0, West")).toBeInTheDocument();
});

test("rotate pacman to the right", () => {
  render(<App />);
  fireEvent.click(screen.getByTestId(/place/i));

  fireEvent.change(screen.getByPlaceholderText(/X/i), {
    target: { value: 3 },
  });
  fireEvent.change(screen.getByPlaceholderText(/Y/i), {
    target: { value: 3 },
  });
  fireEvent.change(screen.getByTestId(/select/i), {
    target: { value: 2 },
  });
  fireEvent.click(screen.getByTestId(/set position/i));
  expect(screen.getByText("Status: 3, 3, West")).toBeInTheDocument();

  fireEvent.click(screen.getByTestId(/right/i));
  fireEvent.click(screen.getByTestId(/move/i));
  expect(screen.getByText("Status: 3, 2, North")).toBeInTheDocument();
});

test("show error when value of x and y is less than 0 and greater than 4", () => {
  render(<App />);
  fireEvent.click(screen.getByTestId(/place/i));

  fireEvent.change(screen.getByPlaceholderText(/X/i), {
    target: { value: -1 },
  });
  fireEvent.change(screen.getByPlaceholderText(/Y/i), {
    target: { value: 3 },
  });
  fireEvent.change(screen.getByTestId(/select/i), {
    target: { value: 2 },
  });
  fireEvent.click(screen.getByTestId(/set position/i));
  expect(
    screen.getByText(
      "The value of X and Y should be greater than or equal to 0 and less than or equal to 4"
    )
  ).toBeInTheDocument();
});

test("show error when value of x and y is less than 0 and greater than 4", () => {
  const { debug } = render(<App />);
  fireEvent.click(screen.getByTestId(/place/i));

  fireEvent.change(screen.getByPlaceholderText(/X/i), {
    target: { value: 1 },
  });
  fireEvent.change(screen.getByPlaceholderText(/Y/i), {
    target: { value: 5 },
  });
  fireEvent.click(screen.getByTestId(/set position/i));
  debug();
  expect(
    screen.getByText(
      "The value of X and Y should be greater than or equal to 0 and less than or equal to 4"
    )
  ).toBeInTheDocument();
});

test("remove the error by having proper values for x and y", () => {
  render(<App />);
  fireEvent.click(screen.getByTestId(/place/i));

  fireEvent.change(screen.getByPlaceholderText(/X/i), {
    target: { value: 1 },
  });
  fireEvent.change(screen.getByPlaceholderText(/Y/i), {
    target: { value: 5 },
  });
  fireEvent.click(screen.getByTestId(/set position/i));
  expect(
    screen.getByText(
      "The value of X and Y should be greater than or equal to 0 and less than or equal to 4"
    )
  ).toBeInTheDocument();

  fireEvent.change(screen.getByPlaceholderText(/Y/i), {
    target: { value: 4 },
  });
  fireEvent.change(screen.getByTestId(/select/i), {
    target: { value: 1 },
  });
  fireEvent.click(screen.getByTestId(/set position/i));
  expect(screen.getByText("Status: 1, 4, South")).toBeInTheDocument();
});

test("show error when pacman tries to go beyond the grid", () => {
  render(<App />);
  fireEvent.click(screen.getByTestId(/place/i));

  fireEvent.change(screen.getByPlaceholderText(/X/i), {
    target: { value: 4 },
  });
  fireEvent.change(screen.getByPlaceholderText(/Y/i), {
    target: { value: 4 },
  });
  fireEvent.click(screen.getByTestId(/set position/i));
  expect(screen.getByText("Status: 4, 4, East")).toBeInTheDocument();

  fireEvent.click(screen.getByTestId(/move/i));
  expect(screen.getByText("Pacman cannot move further")).toBeInTheDocument();
});

test("remove the cannot go further error", () => {
  render(<App />);
  fireEvent.click(screen.getByTestId(/place/i));

  fireEvent.change(screen.getByPlaceholderText(/X/i), {
    target: { value: 4 },
  });
  fireEvent.change(screen.getByPlaceholderText(/Y/i), {
    target: { value: 4 },
  });
  fireEvent.click(screen.getByTestId(/set position/i));
  expect(screen.getByText("Status: 4, 4, East")).toBeInTheDocument();

  fireEvent.click(screen.getByTestId(/move/i));
  expect(screen.getByText("Pacman cannot move further")).toBeInTheDocument();

  fireEvent.click(screen.getByTestId(/left/i));
  fireEvent.click(screen.getByTestId(/move/i));
  fireEvent.click(screen.getByTestId(/move/i));
  expect(screen.getByText("Status: 4, 2, North")).toBeInTheDocument();
});
