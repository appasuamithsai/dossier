import React, { Dispatch, SetStateAction } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Header from ".";
import "@testing-library/jest-dom";

const dispact: Dispatch<SetStateAction<boolean>> = () => console.log("true");
describe("Testing header ", () => {
  test(" Render and open close of popup", () => {
    render(<Header></Header>);
    const header = screen.getByTestId("header");
    expect(header).toBeVisible();
    const avatar = screen.getByTestId("avatar");
    fireEvent.click(avatar);
    const popup = screen.getByTestId("popup");
    expect(popup).toBeVisible();
    const backdrop = screen.getByTitle("backdrop");
    fireEvent.click(backdrop);
  });
});
