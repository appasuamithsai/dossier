import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Stepper from ".";
import { act } from "react-dom/test-utils";

describe("", () => {
  test("snapshot", () => {
    render(<Stepper></Stepper>);
    const stepper = screen.getByTestId("stepper");
    expect(stepper).toBeVisible();
  });
  test("next and back buttons", () => {
    render(<Stepper></Stepper>);
    const next = screen.getByTestId("nextButton");
    fireEvent.click(next);

    const back = screen.getByTestId("backButton");
    fireEvent.click(back);
  });
});
