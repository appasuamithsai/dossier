import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Slider from "./index";
import image1 from "../../../assets/images/Slider1.png";
import image2 from "../../../assets/images/SliderImg2.svg";
import image3 from "../../../assets/images/SliderImg3.svg";
import image5 from "../../../assets/images/SliderImg5.svg";
import image6 from "../../../assets/images/SliderImage6.svg";

export const itemData = [
  {
    id: 0,
    img: image1,
    title:"1.Cover"
  },
  {
    id: 1,
    img: image2,
    title:"2.Personal Details"

  },
  {
    id: 2,
    img: image6,
    title:"3.Education Details"

  },
  {
    id: 3,
    img: image3,
    title:"4.Experience Details"

  },
  {
    id: 4,
    img: image5,
    title:"5.Certifications"

  },
  {
    id: 5,
    img: image1,
    title:"6"
  },
  {
    id: 6,
    img: image2,
    title:"7"

  },
  {
    id: 7,
    img: image6,
    title:"8"

  },
  {
    id: 8,
    img: image3,
    title:"9"

  },
  {
    id: 9,
    img: image5,
    title:"10"

  },
];
export const itemData2 = [
  {
    id: 0,
    img: image1,
    title:"1.Cover"
  },
  {
    id: 1,
    img: image2,
    title:"2.Personal Details"

  },
  {
    id: 2,
    img: image6,
    title:"3.Education Details"

  },
  {
    id: 3,
    img: image3,
    title:"4.Experience Details"

  },
  {
    id: 4,
    img: image5,
    title:"5.Certifications"

  },
  {
    id: 5,
    img: image1,
    title:"6"
  },
]
describe("Slider Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<Slider itemData={itemData} />);
    expect(wrapper).toBeTruthy;
    let element=screen.getByTestId("sliderImage0")
    fireEvent.click(element);

    const img = screen.getByTestId("testImage");
    expect(img).toBeInTheDocument();
    fireEvent.click(img);
    const img1 = screen.getByTestId("testImage1");
    expect(img1).toBeInTheDocument();
    fireEvent.click(img1);
    element = screen.getByTestId("testImage");
    fireEvent.click(element);
    fireEvent.click(element);
     element=screen.getByTestId("onAddButton")
     fireEvent.click(element);
      element = screen.getByTestId("testImage1");
     fireEvent.click(element);
 
  });
  it("should match snapshot2", () => {
    const wrapper = render(<Slider itemData={itemData2} />);
    expect(wrapper).toBeTruthy;
    
    const img = screen.getByTestId("testImage");
    expect(img).toBeInTheDocument();
    fireEvent.click(img);
    const img1 = screen.getByTestId("testImage1");
    expect(img1).toBeInTheDocument();
    fireEvent.click(img1);
  });
});
