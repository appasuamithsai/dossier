import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import MoleculeInfographisc from "./index";

describe("MoleculeInfographisc Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<MoleculeInfographisc placeholder="Search" />);
    expect(wrapper).toBeTruthy;
    const searchbar = screen.getByTestId("searchbar");
    expect(searchbar).toBeInTheDocument();
    fireEvent.input(searchbar);
  });
});
