import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EducationDetails from ".";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { EDUCATION_DETAILS_SLIDE } from "../../utils/constants";
const serverResponse = rest.get(
  `http://localhost:9191/portfolios/0/portfolio-slides/${EDUCATION_DETAILS_SLIDE}`,
  (req, res, ctx) => {
    return res(
      ctx.json( [
          {
            image:
              "static/media/public/assets/images/university_images/lowa.png",
            collegeName: "University of Iowa",
            degree: "Bachelor of Business Administration",
            startDate: "June 2014",
            endDate: "June 2014",
          },
        ],
      )
    );
  }
);
const server = setupServer(...[serverResponse]);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Test - EducationDetails Organisms", () => {
  const wrapper = render(<EducationDetails />);
  expect(screen.getByTestId("grid1")).toBeInTheDocument;
  expect(wrapper).toBeTruthy();
});

test("Test - EducationDetails Organisms", async () => {
  const wrapper = await render(<EducationDetails />);
  fireEvent.click(screen.getByTestId("card0"));
  fireEvent.click(screen.getByTestId("card0"));
  expect(wrapper).toBeTruthy();
});
test("Test - EducationDetails Organisms", async () => {
  const wrapper = await render(<EducationDetails />);
  fireEvent.click(screen.getByTestId("card0"));
  // fireEvent.click(screen.getByTestId("icon0"));
  expect(wrapper).toBeTruthy();
});
