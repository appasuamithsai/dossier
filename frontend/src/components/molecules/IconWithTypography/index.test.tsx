import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import IconWithTypograhy from ".";
import image1 from "../../../assets/icons/link 2.svg";

describe("Testing Options ", () => {
  test(" Render Options", () => {
    render(<IconWithTypograhy src={image1} label="Copy link" />);
    const buttonOne = screen.getByText("Copy link");
    expect(buttonOne).toBeVisible();
  });
});
