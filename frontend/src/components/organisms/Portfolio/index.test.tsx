import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Portfolio from "./index";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/lib/node";
const serverResponse = rest.get(
  `http://localhost:9001/undefined`,
  (req, res, ctx) => {
    return res(
      ctx.json(
        [
          {
              "id": 0,
              "img": "https://i.ibb.co/G5ZFdVC/screen1.png",
              "title": "1.Cover"
          },
          {
              "id": 1,
              "img": "https://i.ibb.co/ZHfJ6bd/Screen-2.png",
              "title": "2.Personal Details"
          },
          {
              "id": 2,
              "img": "https://i.ibb.co/nMdmNPR/Screen-3.png",
              "title": "3.Education Details"
          },
          {
              "id": 3,
              "img": "https://i.ibb.co/8Xr3QLQ/Screen-4.png",
              "title": "4.Experience Details"
          },
          {
              "id": 4,
              "img": "https://i.ibb.co/mRzPBPv/Screen-5.png",
              "title": "5.Certifications"
          },
          {
              "id": 5,
              "img": "https://i.ibb.co/RHHwhpC/Screen-6.png",
              "title": "6.1 Accomplishments"
          },
          {
              "id": 6,
              "img": "https://i.ibb.co/nwxhhFN/Screen-7.png",
              "title": "6.2 Accomplishments"
          },
          {
              "id": 7,
              "img": "https://i.ibb.co/8Xt64bc/Screen-8.png",
              "title": "6.3 Accomplishments"
          },
          {
              "id": 8,
              "img": "https://i.ibb.co/41K0bn3/Screen-9.png",
              "title": "6.4 Accomplishments"
          },
          {
              "id": 9,
              "img": "https://i.ibb.co/BcxdGjH/Screen-10.png",
              "title": "6.5 Accomplishments"
          },
          {
              "id": 10,
              "img": "https://i.ibb.co/1Tymxcj/Screen-11.png",
              "title": " 6.6 Accomplishments"
          }
      ]
      )
    );
  }
);
const serverResponse2 = rest.put(
  `http://localhost:9001/undefined`,
  (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({})
    );
  }
);

const server = setupServer(...[serverResponse,serverResponse2]);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Organism Portfolio", () => {
  const test1 = jest.fn();

  it("should match snapshot", () => {

    const wrapper = render(<Portfolio onPublishPortFolio={test1} />);
    expect(wrapper).toBeTruthy;
  });
  it("should open publish portfolio", () => {
    const wrapper = render(<Portfolio onPublishPortFolio={test1}/>);
    let element = wrapper.getByTestId("publish-button");
    fireEvent.click(element);
    element = wrapper.getByTestId("customized-dialog-title");
    const checkbox = wrapper.getByTestId("checkboxitem");
    fireEvent.click(checkbox);

    const publish = wrapper.getByTestId("dialogpublish");
  });
  it("should test preview", () => {
    const wrapper = render(<Portfolio onPublishPortFolio={test1}/>);
    expect(wrapper).toBeTruthy;
    let element = wrapper.getByTestId("previewtestbutton");
    fireEvent.click(element);
    element = wrapper.getByTestId("previewcloseicon");
    fireEvent.click(element);
  });
  it("Test - Portfolio Organisms", async () => {
    const wrapper = render(<Portfolio onPublishPortFolio={test1}/>);
     let element = wrapper.getByTestId("previewtestbutton");
      fireEvent.click(element);
      element = wrapper.getByTestId("previewcloseicon");
      fireEvent.click(element);
      element = wrapper.getByTestId("publish-button");
      fireEvent.click(element);
      element = wrapper.getByTestId("customized-dialog-title");
      const checkbox = wrapper.getByTestId("checkboxitem");
      fireEvent.click(checkbox);

      const publish = wrapper.getByTestId("dialogpublish");
    
  });
  it("Test - Portfolio Organisms", async () => {
    const wrapper = render(<Portfolio onPublishPortFolio={test1}/>);
    let  element = wrapper.getByTestId("onAddButton");
      fireEvent.click(element);
      const autocomplete = wrapper.getByPlaceholderText("Select Category");
      autocomplete.focus();
      fireEvent.change(autocomplete, { target: { value: "award" } });
      fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
      fireEvent.keyDown(autocomplete, { key: "Enter" });
      expect(autocomplete).toHaveValue("Awards");
      element = wrapper.getByText("Select Your Awards");
      expect(element).toBeInTheDocument;

      element = wrapper.getByText("Outstanding Project Manager Award");
      fireEvent.click(element);
      element = wrapper.getByText("PMI Rising Leader Award");
      fireEvent.click(element);
      element = wrapper.getByTestId("addSlidebutton");
      fireEvent.click(element)
  });
});
