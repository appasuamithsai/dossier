import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomizePortfolio from "./index";
import CustomizePortfolioImage from "../../../assets/images/customize-portfolio.png";

export default {
  title: "Molecules/CustomizePortfolio",
  component: CustomizePortfolio,
} as ComponentMeta<typeof CustomizePortfolio>;

const Template: ComponentStory<typeof CustomizePortfolio> = (args) => (
  <CustomizePortfolio {...args} />
);

export const CustomizePortfolioCard = Template.bind({});

CustomizePortfolioCard.args = {
  src: CustomizePortfolioImage,
  text: "Create a portfolio to your board",
  buttonText: "Create Portfolio",
};
