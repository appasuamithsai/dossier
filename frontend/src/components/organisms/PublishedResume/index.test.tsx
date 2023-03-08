import React from "react";
import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import PublishedResume from ".";
import "@testing-library/jest-dom";
import PortfolioImage from "../../../assets/images/PortfolioImage1.svg";
import { MemoryRouter } from "react-router-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";

const serverResponse = rest.get(
  `http://localhost:9191/users/undefined`,
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

const serverResponse1 = rest.get(
  `http://localhost:9191/portfolios/undefined`,
  (req, res, ctx) => {
    return res(
      ctx.json([{
        "id": 0,
        "portfolioName":"Fintech Portfolio"
      }]));
  }
);
const serverResponse2 = rest.get(
  `http://localhost:9191/portfolios/0/extensions`,
  (req, res, ctx) => {
    return res(
      ctx.json({
        "extensions": "[\"jpeg\"]"
      }
      )
    );
  }
);
const server = setupServer(...[serverResponse,serverResponse1,serverResponse2]);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
test("Test - PublishedResume Organisms", async () => {
  const wrapper = render( <MemoryRouter><PublishedResume /></MemoryRouter>);
  await waitForElementToBeRemoved(screen.getByTestId("loading"));
  expect(wrapper).toBeTruthy();
  const imageElement = screen.getAllByTestId("image")[0];
  fireEvent.click(imageElement);
  expect(imageElement).not.toBeInTheDocument;
});
