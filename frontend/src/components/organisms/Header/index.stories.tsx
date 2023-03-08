import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from ".";

export default {
  title: "Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const header = Template.bind({});
header.args = {};
