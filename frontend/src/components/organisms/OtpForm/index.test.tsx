import React from "react";
import { render } from "@testing-library/react";
import OtpForm from "./index";

describe("OtpForm component", () => {
  test("testing onchange for OTP", () => {
    const wrapper = render(<OtpForm firstName="tester" onSubmit={test} />);
    expect(wrapper).toBeTruthy();
  });
});
