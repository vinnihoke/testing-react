// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "../dashboard/Dashboard";
import "jest-dom/extend-expect";

describe("State of gate has appropriate classes", () => {
  test("locked has class red-led", () => {
    const { getByText, queryByText } = render(<Dashboard />);
    fireEvent.click(getByText(/close gate/i));
    expect(queryByText(/closed/i)).toHaveClass("red-led");
  });
  test("locked has class red-led", () => {
    const { getByText, queryByText } = render(<Dashboard />);
    fireEvent.click(getByText(/close gate/i));
    fireEvent.click(getByText(/lock gate/i));
    expect(queryByText(/locked/i)).toHaveClass("red-led");
  });
  test("open has class green-led", () => {
    const { getByText, queryByText } = render(<Dashboard />);
    expect(queryByText(/open/i)).toHaveClass("green-led");
  });
  test("unlocked has class green-led", () => {
    const { getByText, queryByText } = render(<Dashboard />);
    expect(queryByText(/unlocked/i)).toHaveClass("green-led");
  });
});
