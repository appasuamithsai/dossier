import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CreatePortfolioOptions from ".";
import "@testing-library/jest-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Test - FirstPage Organisms", () => {
  const wrapper = render(<CreatePortfolioOptions />);
  expect(wrapper).toBeTruthy();
  const button = screen.getByTestId("button");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  const image1 = screen.getByTestId("image1");
  expect(image1).toBeInTheDocument();
  fireEvent.click(image1);
  const image2 = screen.getByTestId("image2");
  expect(image2).toBeInTheDocument();
  fireEvent.click(image2);
  const image3 = screen.getByTestId("image3");
  expect(image3).toBeInTheDocument();
  const CreatePortfolioCard1 = screen.getAllByTestId("CreatePortfolioCard")[0];
  expect(CreatePortfolioCard1).toBeInTheDocument();
  fireEvent.click(CreatePortfolioCard1);
  const CreatePortfolioCard2 = screen.getAllByTestId("CreatePortfolioCard")[2];
  expect(CreatePortfolioCard2).toBeInTheDocument();
  fireEvent.click(CreatePortfolioCard2);
  const CreatePortfolioCard3 = screen.getAllByTestId("CreatePortfolioCard")[1];
  expect(CreatePortfolioCard3).toBeInTheDocument();
  fireEvent.click(CreatePortfolioCard3);
  fireEvent.click(image3);
  const typo1 = screen.getByText(/Create Portfolio/i);
  expect(typo1).toBeInTheDocument();
  const typo2 = screen.getByText(/How would you like to create?/i);
  expect(typo2).toBeInTheDocument();
  expect(mockedUsedNavigate).toHaveBeenCalledTimes(2);
});
