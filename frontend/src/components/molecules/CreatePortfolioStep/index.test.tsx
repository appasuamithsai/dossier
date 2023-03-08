import React from "react";
import CreatePortfolioStep, { CreatePortfolioStepProps } from ".";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Box, Typography } from "@mui/material";
import "@testing-library/jest-dom/extend-expect";
import { rest } from "msw";
import { setupServer } from "msw/node";

const serverResponse = rest.get(
  `http://localhost:3003/users/undefined`,
  (req, res, ctx) => {
    return res(
      ctx.json(
        {
          id: 1,
          userName: "Peter Parker",
          gender: "Male",
          age: "100",
          newvalue: ["Hobbies", "Cricket"],
          experience: [
            {
              id: 2,
              description:
                "Designed , developed, and maintained MSSBU;s internal web Designed , developed, and maintained MSSBU;s internal web Designed , developed, and maintained MSSBU;s internal web Designed , developed, and maintained MSSBU;s internal web",
            },
          ],
          education: [
            {
              image: "../src/assets/images/university1.png",
              collegeName: "California Institute of Technology",
              degree: "Master of Sciences in Software Systems",
              startDate: "2010",
              endDate: "2012",
            },
            {
              image: "../src/assets/images/university2.png",
              collegeName: "University of Pennsylvania",
              degree: "Bachelor of Sciences in Software Systems",
              startDate: "2006",
              endDate: "2010",
            },
          ],
          resumes: [
            {
              id: 1,
              img: "../src/assets/images/PortfolioImage1.svg",
              title: "Fintech Portfolio.pdf",
              edited: "Edited 45 mins ago",
            },
            {
              id: 2,
              img: "../src/assets/images/PortfolioImage1.svg",
              title: "Fintech Portfolio.jpeg",
              edited: "Edited 45 mins ago",
            },
          ],
          certification: [
            {
              id: 2,
              certification_name: "",
            },
          ],
          otp: 7900,
        },
      )
    );
  }
);
const serverResponse2 = rest.put(
  `http://localhost:3003/users/undefined`,
  (req, res, ctx) => {
    return res(ctx.json({}),ctx.status(201));
  }
);

const server = setupServer(...[serverResponse,serverResponse2]);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const props: CreatePortfolioStepProps = {
  userName: "Peter",
  appDescription:
    "Thanks for signing up with Dossier.In order for us to provide you with the most effective guidance during your portfolio creation, we would appreciate it if you answered the following questions:",
  stepDescription:
    "How many years of  professional experience do you have in total?",
  chips: [
    { name: "0 -1 years", isSelected: false },
    { name: "2 - 3 years", isSelected: true },
  ],
  activeStep:1,
  lastChipLabel: "More",
};

describe("test the snapshot of component", () => {
  test("test the render and empty handle next", () => {
    render(<CreatePortfolioStep {...props}></CreatePortfolioStep>);
    const step = screen.getByTestId("CreatePortfolioStep");
    expect(step).toBeInTheDocument();
    const nextButton = screen.getByTestId("nextButton");
    fireEvent.click(nextButton);
  });
  test("test click next", () => {
    const mockFn = jest.fn();
    render(
      <CreatePortfolioStep
        {...props}
        handleNext={() => mockFn()}
      ></CreatePortfolioStep>
    );
    const nextButton = screen.getByTestId("nextButton");
    fireEvent.click(nextButton);
  });
});
