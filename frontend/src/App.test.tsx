/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App  Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<App />);

    expect(wrapper).toBeTruthy;
  });
});
