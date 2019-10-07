// Test away
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "../dashboard/Dashboard";

test("Dashboard renders", () => {
  render(<Dashboard />);
});

describe("Dashboard Testing", () => {
  test("Gate defaults to unlocked", () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/unlocked/i));
  });

  test("Gate defaults to open", () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/open/i));
  });
});

describe("Async Controls Testing", () => {
  test("Close toggles", () => {
    const { getByText, queryByText } = render(<Dashboard />);
    expect(queryByText(/closed/i)).toBeNull();
    fireEvent.click(getByText(/close gate/i));
    expect(getByText(/closed/i));
  });

  test("Close toggles", () => {
    const { getByText, queryByText } = render(<Dashboard />);
    expect(queryByText(/open/i));
    fireEvent.click(getByText(/close gate/i));
    expect(getByText(/closed/i));
  });

  test("Unlocked toggles", () => {
    const { getByText, queryByText } = render(<Dashboard />);
    expect(queryByText(/unlocked/i));
    fireEvent.click(getByText(/lock gate/i));
    expect(getByText(/locked/i));
  });
});
