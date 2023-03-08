import React from "react";
import { describe, it } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import DashboardSideNav from "./index";

describe("DashboardSideNav Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(
      <DashboardSideNav pullData={(label: string) => {}} />
    );
    expect(wrapper).toBeTruthy;
    const uploadButton = screen.getAllByTestId("box")[0];
    fireEvent.click(uploadButton);
    const uploadButton1 = screen.getAllByTestId("box")[2];
    fireEvent.click(uploadButton1);
    const uploadButton2 = screen.getAllByTestId("box")[1];
    fireEvent.click(uploadButton2);
    const uploadButton3 = screen.getAllByTestId("box")[3];
    fireEvent.click(uploadButton3);
  });
});
