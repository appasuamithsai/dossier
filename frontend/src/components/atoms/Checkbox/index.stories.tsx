import React from "react";
import Checkbox from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "atoms/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);
export const checkbox = Template.bind({});
checkbox.args = {
  label: "PDF",
};
