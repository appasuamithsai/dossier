import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoginPage from ".";
import React from "react";

export default {
  title: "Pages/LoginPage",
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = (args) => (
  <LoginPage {...args} />
);

export const user = Template.bind({});


