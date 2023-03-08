import React from "react";
import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import Entry from ".";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { act } from "react-dom/test-utils";

const serverResponse = rest.get(
  `http://localhost:9001/undefined`,
  (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          userName: "Peter Parker",
          firstName: "Peter",
          lastName: "Parker",
          mail: "peterparker@gmail.com",
          phoneNumber: "990831699",
          gender: "M",
          age: 35,
          designation: "Project Manager",
          slideScreens: [
            "FirstPageInResume",
            "PersonalDetails",
            "EducationDetails",
            "ExperienceDetalis",
            "Certifications",
            "ImageAndNameSlideContent1",
            "ImageAndNameSlideContent2",
            "ImageAndNameSlideContent3",
            "Accomplishmnets",
            "Graph",
            "SkyFlowValuation",
            "Awards",
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
          otp: "7900",
          awardsData: [
            "PMI Eric Jenett Person of the Year Award",
            "Outstanding Project Manager Award",
            "PMI Rising Leader Award",
          ],
        },
      ])
    );
  }
);
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
var mock = new MockAdapter(axios);
const serverResponse1 = rest.put(
  `http://localhost:3003/users/1`,
  (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          userName: "Peter Parker",
          firstName: "Peter",
          lastName: "Parker",
          mail: "peterparker@gmail.com",
          phoneNumber: "123456789",
          gender: "M",
          age: 35,
          designation: "Project Manager",
          slideScreens: [
            "FirstPageInResume",
            "PersonalDetails",
            "EducationDetails",
            "ExperienceDetalis",
            "Certifications",
            "ImageAndNameSlideContent1",
            "ImageAndNameSlideContent2",
            "ImageAndNameSlideContent3",
            "Accomplishmnets",
            "Graph",
            "SkyFlowValuation",
            "Awards",
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
          otp: "7900",
          awardsData: [
            "PMI Eric Jenett Person of the Year Award",
            "Outstanding Project Manager Award",
            "PMI Rising Leader Award",
          ],
        },
      ])
    );
  }
);
const serverResponse3 = rest.post(
  "http://localhost:3003/users",
  (req, res, ctx) => {
    return res(ctx.json({ id: "1" }), ctx.status(200));
  }
);
const serverResponse4 = rest.post(
  "http://localhost:3003/education",
  (req, res, ctx) => {
    return res(ctx.json({ id: "1" }), ctx.status(200));
  }
);
const serverResponse5 = rest.post(
  "http://localhost:3003/portfolios",
  (req, res, ctx) => {
    return res(ctx.json({ id: "1" }), ctx.status(200));
  }
);
const server = setupServer(
  ...[
    serverResponse,
    serverResponse1,
    serverResponse3,
    serverResponse4,
    serverResponse5,
  ]
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe("Page DashBoard", () => {
  test("Test - Entry Organisms", () => {
    const wrapper = render(
      <MemoryRouter>
        <Entry />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();
  });

  test("Test - Entry Organisms", async () => {
    const wrapper = render(
      <MemoryRouter>
        <Entry />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByPlaceholderText("eg. Peter"), {
      target: { value: "pe" },
    });
    fireEvent.change(screen.getByPlaceholderText("eg. Peter"), {
      target: { value: "peter" },
    });
    fireEvent.change(screen.getByPlaceholderText("eg. Parker"), {
      target: { value: "par" },
    });
    fireEvent.change(screen.getByPlaceholderText("eg. Parker"), {
      target: { value: "parker" },
    });
    fireEvent.change(screen.getByPlaceholderText("eg. peterparker@gmail.com"), {
      target: { value: "peter@gmail.in" },
    });
    fireEvent.change(screen.getByPlaceholderText("eg. peterparker@gmail.com"), {
      target: { value: "peter@gmail.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("eg. peter@1234"), {
      target: { value: "peter@1" },
    });
    fireEvent.change(screen.getByPlaceholderText("eg. peter@1234"), {
      target: { value: "peter@12" },
    });
    fireEvent.change(screen.getByPlaceholderText("eg. peter@1234"), {
      target: { value: "peter@123" },
    });
    fireEvent.change(screen.getByPlaceholderText("eg. peter@1234"), {
      target: { value: "peter@1234" },
    });
    expect(wrapper).toBeTruthy();
  });
});
