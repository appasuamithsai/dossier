import React from "react";
import AutoCompleteDropdown from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DEGREE_ARRAY, UNIVERSITY_ARRAY } from "../../utils/constants";

const props1 = {
  label: "Search University Here",
  item_array: UNIVERSITY_ARRAY,
};

const props2 = {
  label: "Eg:Bachelor's",
  item_array: DEGREE_ARRAY,
};

describe("testing the autocomplete", () => {
  test("to test the snap shot", () => {
    render(<AutoCompleteDropdown {...props1}></AutoCompleteDropdown>);
    const Dropdown = screen.getByTestId(`autocomplete-${props1.label}`);
    expect(Dropdown).toBeVisible();
    const textfield = screen.getByTitle("Open");
    fireEvent.click(textfield);
    const options = screen.getAllByTestId("options");
    expect(options).toBeTruthy();
  });
  test("to test the snap shot", () => {
    render(<AutoCompleteDropdown {...props2}></AutoCompleteDropdown>);
    const Dropdown = screen.getByTestId(`autocomplete-${props2.label}`);
    expect(Dropdown).toBeVisible();
    
  });
});
