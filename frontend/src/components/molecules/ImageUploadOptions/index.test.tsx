import React from "react";
import { describe, it } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import UploadImage from "../../../assets/icons/upload.png";
import LockIcon from "../../../assets/icons/lock-icon.png";
import ThreeDots from "../../../assets/icons/more.png";
import BoxIcon from "../../../assets/icons/Boxplus-icon.png";
import "@testing-library/jest-dom";
import ImageUploadOptions from "./index";

describe("ImageUploadOptions  Component", () => {
  const test1 = jest.fn();
  const options = [
    {
      src: UploadImage,
      action: test1,
    },
    {
      src: LockIcon,
    },
    {
      src: ThreeDots,
    },
    {
      src: BoxIcon,
    },
  ];
  it("should match snapshot", () => {
    const wrapper = render(<ImageUploadOptions options={options} />);

    expect(wrapper).toBeTruthy;
  });
  it("when click on upload button should call the function", () => {
    render(<ImageUploadOptions options={options} />);
    const uploadButton = screen.getByTestId("icon0");
    fireEvent.click(uploadButton);
    expect(test1).toBeCalledTimes(1);
  });
});
