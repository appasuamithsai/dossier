import { ComponentStory, ComponentMeta } from "@storybook/react";
import SignUpForm from ".";
import React from "react";

export default {
  title: "Organisms/SignUpForm",
  component: SignUpForm,
} as ComponentMeta<typeof SignUpForm>;

const Template: ComponentStory<typeof SignUpForm> = (args) => (
  <SignUpForm {...args} />
);

export const primary = Template.bind({});
