import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import EntryPageStep from ".";
import customization from "../../../assets/images/customization.svg";

export default {
  title: "Molecules/EntryPageStep",
  component: EntryPageStep,
} as ComponentMeta<typeof EntryPageStep>;

const Template: ComponentStory<typeof EntryPageStep> = (args) => (
  <EntryPageStep {...args}></EntryPageStep>
);

export const Primary = Template.bind({});

Primary.args = {
  src: customization,
  alt: "customization",
  variant: "entryPage",
  text: "Professionals Portfolio Templates  and Themes",
  description: "Get unlimited access to 500+  portfolio templates and themes ",
};
