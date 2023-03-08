import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageUploadProgress from "./index";
export default {
  title: "Molecules/ImageUploadProgress",
  component: ImageUploadProgress,
} as ComponentMeta<typeof ImageUploadProgress>;

const Template: ComponentStory<typeof ImageUploadProgress> = (args) => (
  <ImageUploadProgress {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  progress: 12,
  imageName: "abc",
};
