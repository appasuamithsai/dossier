import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import AddSlide from "./index";
describe("AddSlideForm Component", () => {
  it("should match snapshot", () => {
    const test1 = jest.fn();
    const test2 = jest.fn();
    render(<AddSlide onAdd={test1} onClose={test2} />);
    const wrapper = screen.getByText("Add Slide");
    expect(wrapper).toBeTruthy;
  });

  it("should trigger Category onChange with selected option", async () => {
    const test1 = jest.fn();
    const test2 = jest.fn();
    const screen1 = render(<AddSlide onAdd={test1} onClose={test2} />);
    let element = screen1.queryByTestId("selectawards");
    expect(element).not.toBeInTheDocument;
    const autocomplete = screen1.getByPlaceholderText("Select Category");
    autocomplete.focus();
    fireEvent.change(autocomplete, { target: { value: "award" } });
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete, { key: "Enter" });
    expect(autocomplete).toHaveValue("Awards");
    element = screen.getByText("Select Your Awards");
    expect(element).toBeInTheDocument;

    element = screen1.getByText("Outstanding Project Manager Award");
    fireEvent.click(element);
    fireEvent.click(element);
    element = screen1.getByText("PMI Rising Leader Award");
    fireEvent.click(element);
    element = screen1.getByTestId("addSlidebutton");
  });
  it("should test branch ", () => {
    const test1 = jest.fn();
    const test2 = jest.fn();
    const screen1 = render(<AddSlide onAdd={test1} onClose={test2} />);
    const autocomplete = screen1.getByPlaceholderText("Select Category");
    autocomplete.focus();
    fireEvent.change(autocomplete, { target: { value: "accom" } });
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete, { key: "Enter" });
    expect(autocomplete).toHaveValue("Accomplishments");
  });
});
