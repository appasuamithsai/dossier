import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LockIcon from "../../../assets/icons/lock-icon.png";
import ThreeDots from "../../../assets/icons/more.png";
import BoxIcon from "../../../assets/icons/Boxplus-icon.png";
import FontIcon from "../../../assets/icons/font-sizeIcon.png";
import FontAlignment from "../../../assets/icons/alignment.png";
import BoldDropdown from "../../../assets/icons/Bold.png";
import Alignment from "../../../assets/icons/alignmentIcon.png";
import Color from "../../../assets/icons/colorIcon.png";
import ToolBarOptions from ".";

describe("", () => {
  test("check content", () => {
    const options = [
      {
        src: FontIcon,
        imageStyle: {
          height: "28px",
          width: "82px",
        },
      },
      {
        src: FontAlignment,
        imageStyle: {
          height: "28px",
          width: "84px",
        },
      },
      {
        src: BoldDropdown,
        imageStyle: {
          height: "28px",
          width: "62px",
        },
        action:()=>{console.log("clicked")}
      },
      {
        src: Alignment,
      },
      {
        src: Color,
      },
      {
        src: BoxIcon,
      },
      {
        src: LockIcon,
      },
      {
        src: ThreeDots,
      },
    ];
    render(<ToolBarOptions 
      imageUploadOptionsProp={{
      options: options
    }} 
    gridMenuOpen={true} 
    imageGridAnchorEl={null} 
    handleImageGridMenuClose={()=>{}} 
    />);
    const boldDropdown = screen.getByAltText("image2");
    fireEvent.click(boldDropdown);
  });
});
