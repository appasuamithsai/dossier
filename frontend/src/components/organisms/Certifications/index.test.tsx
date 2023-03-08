import React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import Certifications from "./index";

describe("Certifications Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<Certifications />);

    expect(wrapper).toBeTruthy;
  });
});
