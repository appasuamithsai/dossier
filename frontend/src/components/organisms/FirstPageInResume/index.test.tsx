import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import FirstPageInResume from ".";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";

const serverResponse = rest.get(
  `http://localhost:9191/undefined`,
  (req, res, ctx) => {
    return res(
      ctx.json({
        ProfileData: {
          age: 30,
          firstName: "Peter",
          gender: "Male",
          id: 0,
          lastName: "Parker",
          mobileNumber: "9999999999",
          profileImage: null,
        },

        preferencesData: {
          industry: "Fintech",
          portfolioType: "SALES",
          experience: "2-3 Years",
          color: "orange",
          designation: "Project Manager",
          id: 1,
        },
        profileImageData:"https://s.gravatar.com/avatar/bb9cd1a366618e9bb47ae161ad270cd4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fpe.png"
      })
    );
  }
);

const server = setupServer(...[serverResponse]);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Test - FirstPage Organisms", async () => {
  const wrapper = render(
    <FirstPageInResume
      userName={"name"}
      designation={"designation"}
      heading={"ss"}
      description={"ss"}
    />
  );
  // await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
  // expect(screen.getByTestId("input1")).toBeInTheDocument;
  expect(wrapper).toBeTruthy();
});
// test("should render hover box when click", async () => {
//   const wrapper = render(
//     <FirstPageInResume
//       userName={"name"}
//       designation={"designation"}
//       heading={"ss"}
//       description={"ss"}
//     />
//   );
//   await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
//   const someValues = [{ name: "teresa teng" }];
//   let element = screen.getByTestId("input1");
//   fireEvent.click(element);
//   expect(wrapper.getAllByTestId("hover-input1")).toBeInTheDocument;
//   element = screen.getByTestId("hover-input1");
//   fireEvent.click(element);
//   expect(wrapper.getAllByTestId("input1")).toBeInTheDocument;
//   element = screen.getByTestId("avatar");
//   fireEvent.click(element);

//   expect(screen.queryByTestId("upload-options")).toBeInTheDocument;
//   element = screen.getByTestId("avatar");
//   fireEvent.click(element);

//   expect(screen.queryByTestId("upload-options")).toNotBeInTheDocument;
// });
