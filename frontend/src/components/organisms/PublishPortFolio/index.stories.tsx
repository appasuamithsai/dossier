import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import PublishPortfolio from ".";
import { Typography } from "@mui/material";
export default {
  title: "Organisms/PublishPortFolio",
  component: PublishPortfolio,
} as ComponentMeta<typeof PublishPortfolio>;

const Template: ComponentStory<typeof PublishPortfolio> = (args) => (
  <PublishPortfolio {...args} />
);

export const publish = Template.bind({});

