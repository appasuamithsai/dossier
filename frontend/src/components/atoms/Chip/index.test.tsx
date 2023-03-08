import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./index.stories";

const { Primary } = composeStories(stories);
describe("Chip Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<Primary />);
    expect(wrapper).toBeTruthy;
  });
  it("should match snapshot", () => {
    const test1 = jest.fn();
    const wrapper = render(
      <Primary onClick={test1} label="Test" onDelete={test1} className="abc" />
    );
    expect(wrapper).toBeTruthy;
  });
  it("should match snapshot", () => {
    const test1 = jest.fn();
    const wrapper = render(
      <Primary
        onClick={test1}
        variant="filled"
        size="small"
        label="Test"
        onDelete={test1}
      />
    );
    expect(wrapper).toBeTruthy;
  });
  it("should call method when we click or delete ", () => {
    const test1 = jest.fn();
    const wrapper = render(
      <Primary onClick={test1} label="Test" onDelete={test1} />
    );
    expect(wrapper).toBeTruthy;
    fireEvent.click(wrapper.getByTestId("chip"));
    const deleteIcon: any = wrapper.container.querySelector(
      ".MuiChip-deleteIcon"
    );
    fireEvent.click(deleteIcon);
    expect(test1).toBeCalledTimes(2);
  });
});
