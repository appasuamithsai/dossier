import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
import ExperienceDetalis from ".";
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { EXPERIENCE_DETAILS_SLIDE } from "../../utils/constants";

const serverResponse = rest.get(
  `http://localhost:9191/portfolios/undefined`,
  (req, res, ctx) => {
    return res(
      ctx.json([{
        "id": 0,
      }]));
  }
);
const serverResponse1 = rest.get(
  `http://localhost:9191/portfolios/0/portfolio-slides/${EXPERIENCE_DETAILS_SLIDE}`,
  (req, res, ctx) => {
    return res(
      ctx.json(
        ["python 1year"],
      )
    );
  }
);
const server = setupServer(...[serverResponse, serverResponse1]);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
test("Test - Experience Detail Organisms", async () => {
  const wrapper = render(<ExperienceDetalis />);
  await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
  expect(screen.getByTestId("steps")).toBeInTheDocument;
  expect(wrapper).toBeTruthy();
});

test("Test - Experience Detail Organisms", async () => {
  const wrapper = render(<ExperienceDetalis />);
  await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
  fireEvent.click(screen.getByTestId("steps"));
});
test("Test data being fetched", async () => {
  const wrapper = render(<ExperienceDetalis />);
  await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
  expect(screen.getByText("python 1year")).toBeInTheDocument();
});
