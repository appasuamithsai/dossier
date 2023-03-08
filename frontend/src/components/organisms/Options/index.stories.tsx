import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Options from ".";
import image1 from "../../../assets/icons/OptionsImg1.svg";
import image2 from "../../../assets/icons/OptionsImg2.svg";
import image3 from "../../../assets/icons/OptionsImg3.svg";
import image4 from "../../../assets/icons/OptionsImg4.svg";
import image5 from "../../../assets/icons/OptionsImg5.svg";
import image6 from "../../../assets/icons/OptionsImg6.svg";

export default {
  title: "Organisms/Options",
  component: Options,
} as ComponentMeta<typeof Options>;

const Template: ComponentStory<typeof Options> = (args) => (
  <Options {...args} />
);

const data = [
  {
    label: "Copy link",
    src: image1,
    action: "",
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
export const OptionsSample = Template.bind({});
OptionsSample.args = {
  data: data,
};
