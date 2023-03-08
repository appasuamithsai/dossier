import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ImageTypography from ".";
import portfolio from "../../../assets/images/portfolio.png";

export default {
  title: "Molecules/ImageTypography",
  component: ImageTypography,
} as ComponentMeta<typeof ImageTypography>;

const Template: ComponentStory<typeof ImageTypography> = (args) => (
  <ImageTypography {...args}></ImageTypography>
);

export const Primary = Template.bind({});
Primary.args = {
  src: portfolio,
  alt: "Portfolio",
  variant: "createPortfolioPage",
  text: "Create from existing",
};
