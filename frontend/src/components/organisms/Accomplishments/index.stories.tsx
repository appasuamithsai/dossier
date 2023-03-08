import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Accomplishments from ".";

export default {
  title: "organisms/Accomplishments",
  component: Accomplishments,
} as ComponentMeta<typeof Accomplishments>;

const Template: ComponentStory<typeof Accomplishments> = (args) => (
  <>
    <Accomplishments {...args}></Accomplishments>
  </>
);

export const primary = Template.bind({});
