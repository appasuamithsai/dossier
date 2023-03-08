import { ComponentStory, ComponentMeta } from "@storybook/react";
import ExperienceDetalis from ".";
import React from "react";

export default {
  title: "Organisms/ExperienceDetalis",
  component: ExperienceDetalis,
} as ComponentMeta<typeof ExperienceDetalis>;

const Template: ComponentStory<typeof ExperienceDetalis> = (args) => (
  <ExperienceDetalis {...args} />
);

export const user = Template.bind({});

