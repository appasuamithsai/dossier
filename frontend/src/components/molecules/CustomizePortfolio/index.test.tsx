import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomizePortfolio from "./index";
import AutoFillWithResumeImage from "../../../assets/images/autofillwithresume.png";
import { MemoryRouter } from "react-router-dom";

describe("Customize Component", () => {
  it("should match snapshot", () => {
    const test1 = jest.fn();
    const wrapper = render(
      <MemoryRouter>
        <CustomizePortfolio
          onClick={test1}
          text="manullay with template"
          src={AutoFillWithResumeImage}
          buttonText="manullay with template"
        />
      </MemoryRouter>
    );

    expect(wrapper).toBeTruthy;
    fireEvent.click(screen.getByTestId("CustomizePortfolio"));
    expect(test1).toBeCalledTimes(1);
  });
});
