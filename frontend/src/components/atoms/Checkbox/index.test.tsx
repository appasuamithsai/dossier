import Checkbox from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

const props = {
  label: "save",
};

test("Renders an Chexkbox", () => {
  render(<Checkbox {...props} />);

  const checkboxElement = screen.getByLabelText("save");
  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
});
