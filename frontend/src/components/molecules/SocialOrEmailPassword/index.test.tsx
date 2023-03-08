import React from "react";
import { render } from "@testing-library/react";
import SocialOrEmailPassword from "./index";

describe("SocialOrEmailPassword component", () => {
  test("testing render", () => {
    const wrapper = render(<SocialOrEmailPassword />);
    expect(wrapper).toBeTruthy;
  });
});
