import React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import IconWithBgAndTypography from "./index";
const icon1 = {
    id: 1,
    name: "Brainstorming",
    description: "Brainstorming Sessions with Stakeholders",
    isColored: true,
    position: 1,
  };
describe("IconWithBgAndTypography Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<IconWithBgAndTypography icon={icon1} iconSrc="BrainStorming" index={1} emitClick={jest.fn()}/>);

    expect(wrapper).toBeTruthy;
  });
});
