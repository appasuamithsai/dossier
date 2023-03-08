import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import PortfolioTemplateSearch from "./index";

describe("PortfolioTemplateSearch Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<PortfolioTemplateSearch placeholder="Search" />);
    expect(wrapper).toBeTruthy;
    const searchbar = screen.getByTestId("searchbar");
    expect(searchbar).toBeInTheDocument();
    fireEvent.input(searchbar);
    const searchHolder = screen.getByPlaceholderText("Search");
    searchHolder.focus();
    fireEvent.change(searchHolder, { target: { value: "val" } });

  });
});
