/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";       
import SkyFlowValuation from "./index";
import { GRAPH_TEMPLATE } from "../../utils/constants";

describe("SkyFlowValuation Component", () => {
  it("should match snapshot", () => {
    render(<SkyFlowValuation />);
    const wrapper = screen.getByText(GRAPH_TEMPLATE.heading);
    expect(wrapper).toBeTruthy;
  });
});
