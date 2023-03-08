import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconWithTypograhy from ".";
import image1 from "../../../assets/icons/OptionsImg1.svg";

export default {
  title: "Molecules/IconWithTypograhy",
  component: IconWithTypograhy,
} as ComponentMeta<typeof IconWithTypograhy>;

const Template: ComponentStory<typeof IconWithTypograhy> = (args) => (
  <IconWithTypograhy {...args} />
);

export const IconWithTypograhySample = Template.bind({});
IconWithTypograhySample.args = {
  src: image1,
  label: "Copy link",
};
