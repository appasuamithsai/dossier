import { ComponentStory, ComponentMeta } from "@storybook/react";
import SocialOrEmailPassword from ".";
import React from "react";

export default {
  title: "Molecules/SocialOrEmailPassword",
  component: SocialOrEmailPassword,
} as ComponentMeta<typeof SocialOrEmailPassword>;

const Template: ComponentStory<typeof SocialOrEmailPassword> = () => (
  <SocialOrEmailPassword  />
);

export const primary = Template.bind({});
