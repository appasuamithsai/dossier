import { Grid } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ToolBarOptions from ".";
import LockIcon from "../../../assets/icons/lock-icon.png";
import ThreeDots from "../../../assets/icons/more.png";
import BoxIcon from "../../../assets/icons/Boxplus-icon.png";
import FontIcon from "../../../assets/icons/font-sizeIcon.png";
import FontAlignment from "../../../assets/icons/alignment.png";
import BoldDropdown from "../../../assets/icons/Bold.png";
import Alignment from "../../../assets/icons/alignmentIcon.png";
import Color from "../../../assets/icons/colorIcon.png";
import UploadImage from "../../../assets/icons/upload.png";
export default {
  title: "molecules/ToolBarOptions",
  component: ToolBarOptions,
} as ComponentMeta<typeof ToolBarOptions>;

const Template: ComponentStory<typeof ToolBarOptions> = (args) => (
  <>
    <Grid id="render123"></Grid>
    <ToolBarOptions {...args}></ToolBarOptions>
  </>
);

const options1 = [
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
const options2 = [
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
export const secondary = Template.bind({});
primary.args = {
  imageUploadOptionsProp:{options:options2},
  gridMenuOpen: true,
  imageGridAnchorEl: document.getElementById("render123"),
  handleImageGridMenuClose: () => {},
};
secondary.args = {
  imageUploadOptionsProp:{options:options1},
  gridMenuOpen: true,
  imageGridAnchorEl: document.getElementById("render123"),
  handleImageGridMenuClose: () => {},
};
