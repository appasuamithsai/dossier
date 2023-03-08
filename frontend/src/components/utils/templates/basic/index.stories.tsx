import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Basic from ".";

export default {
  title: "Templates/Basic",
  component: Basic,
} as ComponentMeta<typeof Basic>;

const Template: ComponentStory<typeof Basic> = (args) => (
  <Basic {...args}></Basic>
);

export const primary = Template.bind({});

primary.args={
  children:"Your Content Here!!!"
}
