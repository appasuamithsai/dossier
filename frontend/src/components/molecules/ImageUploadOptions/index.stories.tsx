import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ImageUploadOptions from ".";
import UploadImage from "../../../assets/icons/upload.png";
import LockIcon from "../../../assets/icons/lock-icon.png";
import ThreeDots from "../../../assets/icons/more.png";
import BoxIcon from "../../../assets/icons/Boxplus-icon.png";
import FontIcon from "../../../assets/icons/font-sizeIcon.png";
import FontAlignment from "../../../assets/icons/alignment.png";
import BoldDropdown from "../../../assets/icons/Bold.png";
import Alignment from "../../../assets/icons/alignmentIcon.png";
import Color from "../../../assets/icons/colorIcon.png";

export default {
  title: "Molecules/ImageUploadOptions",
  component: ImageUploadOptions,
} as ComponentMeta<typeof ImageUploadOptions>;

const Template: ComponentStory<typeof ImageUploadOptions> = (args) => (
  <ImageUploadOptions {...args}></ImageUploadOptions>
);

const options = [
  {
    src: UploadImage,
    action: () => console.log("Clicked"),
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

export const primary = Template.bind({});
primary.args = {
  options: options,
};
const options2 = [
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
export const secondary = Template.bind({});
secondary.args = {
  options: options2,
};
