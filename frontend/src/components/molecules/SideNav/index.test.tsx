import React from "react";
import { describe, it } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import SideNav from "./index";

describe("SideNav Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<SideNav />);

    expect(wrapper).toBeTruthy;
    const uploadButton = screen.getAllByTestId("box")[0];
    fireEvent.click(uploadButton);
    const uploadButton1 = screen.getAllByTestId("box")[4];
    fireEvent.click(uploadButton1);
  });
});
