// Test away!

// Test away!
import React from "react";
import { render } from "@testing-library/react";
import Controls from "./Controls";
test("Render without crashing", () => {
  render(<Controls />);
});
describe("Provide Buttons to Toggle Closed and Locked States", () => {
  const { getByText } = render(<Controls />);
  expect(getByText(/close gate/i));
});
