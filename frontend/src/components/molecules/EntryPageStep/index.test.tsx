import React from "react";
import ImageTypography from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { Box, Typography } from "@mui/material";
import "@testing-library/jest-dom/extend-expect";
import portfolio from "../../../assets/images/portfolio.png";
import customization from "../../../assets/images/customization.svg";
import { EntryPageStepProps } from ".";
const entryStepperImageTypoProps: EntryPageStepProps = {
  src: customization,
  alt: "customization",
  variant: "entryPage",
  text: "Professionals Portfolio Templates  and Themes",
  description: "Get unlimited access to 500+  portfolio templates and themes ",
};

describe("Testing EntryPageStep Snapshot", () => {
  test("Testing snapshot", () => {
    render(<ImageTypography {...entryStepperImageTypoProps} />);
    const EntryStepBox = screen.getByTestId("EntryPageStep");
    expect(EntryStepBox).toBeVisible();
    const StepText = screen.getByTestId("StepText");
    expect(StepText).toBeVisible();
    const STepDesc = screen.getByTestId("StepDescription");
    expect(STepDesc).toBeVisible();
  });
});
