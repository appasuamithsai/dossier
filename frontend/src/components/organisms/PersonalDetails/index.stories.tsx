import { ComponentStory, ComponentMeta } from "@storybook/react";
import PersonalDetails from ".";
import React from "react";

export default {
  title: "Organisms/PersonalDetails",
  component: PersonalDetails,
} as ComponentMeta<typeof PersonalDetails>;

const Template: ComponentStory<typeof PersonalDetails> = (args) => (
  <PersonalDetails {...args} />
);

export const user = Template.bind({});
user.args = {
  content: "Age - 35",
};
