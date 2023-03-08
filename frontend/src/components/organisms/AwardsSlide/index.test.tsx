import React from "react";
import { render } from "@testing-library/react";
import AwardsSlide from "./index";
import "@testing-library/jest-dom";

describe("Organism AwardsSlide", () => {
 

  it("should match snapshot", async () => {
    const wrapper = await render(<AwardsSlide />);
    expect(wrapper).toBeTruthy;
  });

});
