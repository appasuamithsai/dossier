import { ComponentStory, ComponentMeta } from "@storybook/react";
import Entry from ".";
import React from "react";

export default {
  title: "Organisms/Entry",
  component: Entry,
} as ComponentMeta<typeof Entry>;

const Template: ComponentStory<typeof Entry> = (args) => (
  <Entry {...args} />
);

export const user = Template.bind({});

