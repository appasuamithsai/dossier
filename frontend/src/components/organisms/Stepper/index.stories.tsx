import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Stepper from "./index";
import { Typography } from "@mui/material";
export default {
  title: "Organisms/Stepper",
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => (
  <Stepper {...args} />
);

export const primary = Template.bind({});
