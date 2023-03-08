import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import SnackBar from "./index";
export default {
  title: "Atoms/SnackBar",
  component: SnackBar,
} as ComponentMeta<typeof SnackBar>;

const Template: ComponentStory<typeof SnackBar> = (args) => (
  <SnackBar {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  message: "story",
};
