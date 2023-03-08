import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import MuiChip from "./index";
export default {
  title: "Atoms/Chip",
  component: MuiChip,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof MuiChip>;

const Template: ComponentStory<typeof MuiChip> = (args) => (
  <MuiChip {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  label: "story",
  variant: "filled",
  size: "small",
};
export const Secondary = Template.bind({});

Secondary.args = {
  label: "story2",
  variant: "outlined",
};
