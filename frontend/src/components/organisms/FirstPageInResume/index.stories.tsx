import { ComponentStory, ComponentMeta } from "@storybook/react";
import FirstPageInResume from ".";
import React from "react";

export default {
  title: "Organisms/FirstPageInResume",
  component: FirstPageInResume,
} as ComponentMeta<typeof FirstPageInResume>;

const Template: ComponentStory<typeof FirstPageInResume> = (args) => (
  <FirstPageInResume {...args} />
);

export const user = Template.bind({});
user.args = {
  userName: "Peter Parker",
  designation: "Project Manager",
  heading: "FINTECH PORTFOLIO",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum ",
};
