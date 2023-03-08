import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Slider from ".";
import image1 from "../../../assets/images/Slider1.png";
import image2 from "../../../assets/images/SliderImg2.svg";
import image3 from "../../../assets/images/SliderImg3.svg";
import image4 from "../../../assets/images/SliderImg4.png";
import image5 from "../../../assets/images/SliderImg5.svg";
import image8 from "../../../assets/images/SliderImg6.1.png";
import image9 from "../../../assets/images/SliderImg6.2.png";
import image10 from "../../../assets/images/SliderImg6.3.png";
import image11 from "../../../assets/images/SliderImg6.4.png";
import image12 from "../../../assets/images/SliderImg6.5.png";
import image13 from "../../../assets/images/SliderImg6.6.png";

export default {
  title: "Molecules/Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

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
    img: image3,
    title:"3.Education Details"

  },
  {
    id: 3,
    img: image4,
    title:"4.Experience Details"

  },
  {
    id: 4,
    img: image5,
    title:"5.Certifications"

  },

  {
    id: 5,
    img: image8,
    title:"6.1 Accomplishments"

  },
  {
    id: 6,
    img: image9,
    title:"6.1 Accomplishments"

  },
  {
    id: 7,
    img: image10,
    title:"6.1 Accomplishments"

  },
  {
    id: 8,
    img: image11,
    title:"6.1 Accomplishments"

  },
  {
    id: 9,
    img: image12,
    title:"6.1 Accomplishments"

  },
  {
    id: 10,
    img: image13,
    title:"6.1 Accomplishments"

  },
];

export const slider1 = Template.bind({});
slider1.args = {
  itemData: itemData,
};
