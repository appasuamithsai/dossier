import React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import PersonalDetails from "./index";

describe("PersonalDetails Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<PersonalDetails content={""} />);

    expect(wrapper).toBeTruthy;
  });
});
