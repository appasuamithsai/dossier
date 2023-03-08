import React from "react";
import Image, { ImageProps } from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { Box, Typography } from "@mui/material";
import "@testing-library/jest-dom/extend-expect";

import gmailWithBg from "../../../assets/images/logos/gmailWithBg.png";
import gmail from "../../../assets/images/logos/gmail.png";
import customization from "../../../assets/images/customization.svg";
import portfolio from "../../../assets/images/portfolio.png";
import mobileVerification from "../../../assets/images/mobileVerification.png";
import emptyState from "../../../assets/images/emptyState.png";
import memphis from "../../../assets/images/logos/memphis.png";
import setToGo from "../../../assets/images/settogo.png";
import financeTemplate from "../../../assets/images/financeTemplate.png";

const companyLogoProps: ImageProps = {
  src: gmail,
  alt: "gmail",
  variant: "companyLogo",
};

const companyLogoWithBackgroundProps: ImageProps = {
  src: gmailWithBg,
  alt: "gmailWithBg",
  variant: "companyLogoWithBackground",
};

const entryPageImage: ImageProps = {
  src: customization,
  alt: "customization",
  variant: "entryPage",
};

const createPortfolioPageImageProps: ImageProps = {
  src: portfolio,
  alt: "portfolio",
  variant: "createPortfolioPage",
};

const templateImageProps: ImageProps = {
  src: financeTemplate,
  alt: "financeTemplate",
  variant: "template",
};

const collegeLogoProps: ImageProps = {
  src: memphis,
  alt: "memphis",
  variant: "collegeLogo",
};

describe("testing the Image atom snapShot", () => {
  test("companyLogo image render test", () => {
    render(<Image {...companyLogoProps}></Image>);
    const companyLogo = screen.getByTestId(`${companyLogoProps.alt}image`);
    expect(companyLogo).toBeVisible();
  });

  test("companyLogoWithBg image render test", () => {
    render(<Image {...companyLogoWithBackgroundProps}></Image>);
    const companyLogoWithBackground = screen.getByTestId(
      `${companyLogoWithBackgroundProps.alt}image`
    );
    expect(companyLogoWithBackground).toBeVisible();
  });

  test("entryPage image render test", () => {
    render(<Image {...entryPageImage}></Image>);
    const entryPageImageRender = screen.getByTestId(
      `${entryPageImage.alt}image`
    );
    expect(entryPageImageRender).toBeVisible();
  });

  test("creatPortfolioImage render test", () => {
    render(<Image {...createPortfolioPageImageProps}></Image>);
    const creatPortfolioImage = screen.getByTestId(
      `${createPortfolioPageImageProps.alt}image`
    );
    expect(creatPortfolioImage).toBeVisible();
  });

  test("collegeLogo image render test", () => {
    render(<Image {...collegeLogoProps}></Image>);
    const collegeLogo = screen.getByTestId(`${collegeLogoProps.alt}image`);
    expect(collegeLogo).toBeVisible();
  });

  test("template image render test", () => {
    render(<Image {...templateImageProps}></Image>);
    const templateImageRender = screen.getByTestId(
      `${templateImageProps.alt}image`
    );
    expect(templateImageRender).toBeVisible();
  });
});
