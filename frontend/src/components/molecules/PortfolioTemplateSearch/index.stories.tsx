import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import PortfolioTemplateSearch from "./index";

export default {
  title: "Molecules/PortfolioTemplateSearch",
  component: PortfolioTemplateSearch,
} as ComponentMeta<typeof PortfolioTemplateSearch>;

const Template: ComponentStory<typeof PortfolioTemplateSearch> = (args) => (
  <PortfolioTemplateSearch {...args} />
);
export const PortfolioTemplateSearch1 = Template.bind({});

PortfolioTemplateSearch1.args = {
  placeholder: "Search Template",
};
