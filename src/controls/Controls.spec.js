import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "../controls/Controls";
import Dashboard from "../dashboard/Dashboard";
import "jest-dom/extend-expect";

test("Buttons render", () => {
  render(<Controls />);
});

describe("State of controls change", () => {
  test("'Close Gate' button changes to 'Open Gate'", () => {
    const { getByText, queryByText } = render(<Controls />);
    fireEvent.click(getByText(/close gate/i));
    expect(queryByText(/open gate/i));
  });
  test("'Lock Gate' button changes to 'Unlock Gate'", () => {
    const { getByText, queryByText } = render(<Controls />);
    fireEvent.click(getByText(/close gate/i));
    fireEvent.click(getByText(/lock gate/i));
    expect(queryByText(/unlock gate/i));
  });
});

describe("Check for disabled buttons", () => {
  test("'Lock Gate' is disabled on first render", () => {
    const { getByText, queryByText } = render(<Controls />);
    expect(queryByText(/lock gate/i)).toBeDisabled();
  });
  test("'Open Gate' is disabled when gate is locked and closed", () => {
    const { getByText, queryByText } = render(<Dashboard />);
    fireEvent.click(getByText(/close gate/i));
    fireEvent.click(getByText(/lock gate/i));
    expect(queryByText(/open gate/i)).toBeDisabled();
  });
});
