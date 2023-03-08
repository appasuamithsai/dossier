import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Progressbar from ".";
import { userName, appDescription, steps } from "../../utils/constants";

export default {
  title: "Organisms/Progressbar",
  component: Progressbar,
} as ComponentMeta<typeof Progressbar>;

const Template: ComponentStory<typeof Progressbar> = (args) => (
  <Progressbar {...args} />
);

export const primary = Template.bind({});

primary.args = {
  userName: userName,
  steps: steps,
  appDescription: appDescription,
};
