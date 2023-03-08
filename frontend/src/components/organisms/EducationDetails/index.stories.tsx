import { ComponentStory, ComponentMeta } from "@storybook/react";
import EducationDetails from ".";
import React from "react";

export default {
  title: "Organisms/EducationDetails",
  component: EducationDetails,
} as ComponentMeta<typeof EducationDetails>;

const Template: ComponentStory<typeof EducationDetails> = (args) => (
  <EducationDetails {...args} />
);

export const user = Template.bind({});

