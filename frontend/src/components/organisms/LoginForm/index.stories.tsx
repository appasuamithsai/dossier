import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoginForm from ".";
import React from "react";

export default {
  title: "Organisms/LoginForm",
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const primary = Template.bind({});
