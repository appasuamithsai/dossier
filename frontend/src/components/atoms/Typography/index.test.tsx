/* eslint-disable no-undef */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Typography from "./index";

describe("Typography Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<Typography />);

    expect(wrapper).toBeTruthy;
  });
});
