import React, { Dispatch, SetStateAction } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Options from ".";
import image1 from "../../../assets/icons/OptionsImg1.svg";
import image2 from "../../../assets/icons/OptionsImg2.svg";
import image3 from "../../../assets/icons/OptionsImg3.svg";
import image4 from "../../../assets/icons/OptionsImg4.svg";
import image5 from "../../../assets/icons/OptionsImg5.svg";
import image6 from "../../../assets/icons/OptionsImg6.svg";

const data = [
  {
    label: "Copy link",
    src: image1,
  },
  {
    label: "Edit link",
    src: image2,
  },
  {
    label: "Share Resume",
    src: image3,
  },
  {
    label: "Edit Resume",
    src: image4,
  },
  {
    label: "Download Resume",
    src: image5,
  },
  {
    label: "Duplicate Resume",
    src: image6,
  },
];

describe("Testing Options ", () => {
  test(" Render Options", () => {
    render(<Options pullData={() => {}} data={data} />);
    const buttonOne = screen.getByText("Copy link");
    expect(buttonOne).toBeVisible();
    fireEvent.click(buttonOne);
    const buttonTwo = screen.getByText("Edit link");
    expect(buttonTwo).toBeVisible();
    const buttonThree = screen.getByText("Share Resume");
    expect(buttonThree).toBeVisible();
    const buttonFour = screen.getByText("Download Resume");
    expect(buttonFour).toBeVisible();
    const buttonFive = screen.getByText("Edit Resume");
    expect(buttonFive).toBeVisible();
    const buttonSix = screen.getByText("Duplicate Resume");
    expect(buttonSix).toBeVisible();
  });
});
