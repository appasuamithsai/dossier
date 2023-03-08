import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Certificates from ".";

export default {
  title: "Organisms/Certifications",
  component: Certificates,
} as ComponentMeta<typeof Certificates>;

const Template: ComponentStory<typeof Certificates> = () => (
  <Certificates ></Certificates>
);

export const primary = Template.bind({});
