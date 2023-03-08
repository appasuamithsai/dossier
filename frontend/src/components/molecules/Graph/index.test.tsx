/* eslint-disable no-undef */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Graph from "./index";

describe("Graph Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<Graph />);

    expect(wrapper).toBeTruthy;
  });
});
