import { ComponentStory, ComponentMeta } from "@storybook/react";
import CreatePortfolioOptions from ".";
import React from "react";

export default {
  title: "Organisms/CreatePortfolioOptions",
  component: CreatePortfolioOptions,
} as ComponentMeta<typeof CreatePortfolioOptions>;

const Template: ComponentStory<typeof CreatePortfolioOptions> = () => (
  <CreatePortfolioOptions />
);
export const CreatePortfolioOptionsSample = Template.bind({});
