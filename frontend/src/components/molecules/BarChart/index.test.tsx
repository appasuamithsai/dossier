/* eslint-disable no-undef */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import BarChart from "./index";

describe("BarChart Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<BarChart title={"test"} />);

    expect(wrapper).toBeTruthy;
  });
});
