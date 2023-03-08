import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CreatePortfolioStep from ".";
import { ListItemSecondaryAction } from "@mui/material";
export default {
  title: "Molecules/Create Portfolio Step",
  component: CreatePortfolioStep,
} as ComponentMeta<typeof CreatePortfolioStep>;

const Template: ComponentStory<typeof CreatePortfolioStep> = (args) => (
  <CreatePortfolioStep {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  userName: "Peter",
  appDescription:
    "Thanks for signing up with Dossier.In order for us to provide you with the most effective guidance during your portfolio creation, we would appreciate it if you answered the following questions:",
  stepDescription:
    "How many years of  professional experience do you have in total?",
  chips: [
    { name: "0 -1 years", isSelected: false },
    { name: "2 - 3 years", isSelected: false },
    { name: "4 - 5 years", isSelected: false },
    { name: "6 - 8 years", isSelected: false },
    { name: "7 - 10 years", isSelected: false },
  ],
  lastChipLabel: "More",
  activeStep: 1,
};
