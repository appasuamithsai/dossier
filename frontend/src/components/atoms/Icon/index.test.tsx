import { describe, it } from "@jest/globals";

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Icon from ".";
import Calender from "../../../../public/assets/images/calender.svg";
describe("Icons placeholder test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(<Icon src={Calender} />);
    expect(container).toMatchSnapshot();
  });
});
