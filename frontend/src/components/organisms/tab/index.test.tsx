import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BasicTabs from "./index";
import AutoFillWithResumeImage from "../../../assets/images/autofillwithresume.png";
import { Typography } from "@mui/material";

describe("Tab Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(
      <BasicTabs
        tabNames={["a", "b"]}
        tabValues={[<Typography>a</Typography>, <Typography>b</Typography>]}
      />,
    );

    expect(wrapper).toBeTruthy;
    let element = screen.getAllByTestId("tab")[1];
    fireEvent.click(element);
    element = screen.getAllByTestId("tab-panel")[1];
    expect(element).toHaveTextContent("b");
  });
});
