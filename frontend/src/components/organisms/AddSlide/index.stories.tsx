import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AddSlide from "./index";
export default {
  title: "Organisms/AddSlide",
  component: AddSlide,
} as ComponentMeta<typeof AddSlide>;

const Template: ComponentStory<typeof AddSlide> = (args) => <AddSlide {...args} />;

export const pageAddSlide = Template.bind({});
