import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Progressbar, { ProgressbarProps } from ".";
import { userName, appDescription, steps } from "../../utils/constants";
import { rest } from "msw";
import { setupServer } from "msw/lib/node";

const props: ProgressbarProps = {
  userName: userName,
  steps: steps,
  appDescription: appDescription,
};

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("", () => {
  test("snapshot", () => {
    render(<Progressbar {...props}></Progressbar>);
    const progressBarGrid = screen.getByTestId("progress-bar-grid");
    expect(progressBarGrid).toBeVisible();
  });
  test("next and back buttons", () => {
    render(<Progressbar {...props}></Progressbar>);
    const next = screen.getByTestId("nextButton");
    fireEvent.click(next);
    const skip = screen.getByTestId("skipButton");
    fireEvent.click(skip);

    const back = screen.getByTestId("backButton");
    fireEvent.click(back);
    let element = screen.getByTestId("nextButton");
    fireEvent.click(element);
    fireEvent.click(element);
    fireEvent.click(element);
  });
});
