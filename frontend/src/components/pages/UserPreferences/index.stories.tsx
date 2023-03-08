import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserPreferences from "./index";
export default {
  title: "Pages/UserPreferences",
  component: UserPreferences,
} as ComponentMeta<typeof UserPreferences>;

const Template: ComponentStory<typeof UserPreferences> = (args) => (
  <UserPreferences />
);

export const pageUserPreferences = Template.bind({});
