import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Portfolio from ".";
export default {
  title: "Organisms/Portfolio",
  component: Portfolio,
} as ComponentMeta<typeof Portfolio>;

const Template: ComponentStory<typeof Portfolio> = (args) => (
  <Portfolio onPublishPortFolio={() => {}}></Portfolio>
);

export const primary = Template.bind({});
