/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import { ENABLING_QA_ARRAY } from "../../utils/constants";
import "@testing-library/jest-dom";       
import ImageAndNameSlideContent from "./index";

describe("ImageAndNameSlideContent Component", () => {
  it("should match snapshot", () => {
    render(<ImageAndNameSlideContent title="Hello" contentArray={ENABLING_QA_ARRAY} />);
    const wrapper = screen.getByText("Hello");
    expect(wrapper).toBeTruthy;
  });
});
