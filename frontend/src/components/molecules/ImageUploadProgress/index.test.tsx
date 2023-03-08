/* eslint-disable no-undef */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import ImageUploadProgress from "./index";

describe("ImageUploadProgress Component", () => {
  it("should match snapshot", () => {
    const test1 = jest.fn();
    const wrapper = render(
      <ImageUploadProgress progress={1} imageName={"a"} onClose={test1} />,
    );

    expect(wrapper).toBeTruthy;
  });
});
