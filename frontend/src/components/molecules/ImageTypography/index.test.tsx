import React from "react";
import ImageTypography from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { Box, Typography } from "@mui/material";
import "@testing-library/jest-dom/extend-expect";
import portfolio from "../../../assets/images/portfolio.png";
import customization from "../../../assets/images/customization.svg";
import { ImageTypographyProps } from ".";

const onCreatePortfolioPageProps: ImageTypographyProps = {
  src: portfolio,
  alt: "Portfolio",
  variant: "createPortfolioPage",
  text: "Create from existing",
};

describe("Testing ImageTypography Snapshot", () => {
  test("Render Primary", () => {
    render(<ImageTypography {...onCreatePortfolioPageProps}></ImageTypography>);
    const ImageTypoBox = screen.getByTestId("ImageTypographyBox");
    expect(ImageTypoBox).toBeVisible();
  });
});
