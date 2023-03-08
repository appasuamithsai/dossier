import React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import Accomplishments from "./index";

describe("Accomplishments Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<Accomplishments />);

    expect(wrapper).toBeTruthy;
  });
});
