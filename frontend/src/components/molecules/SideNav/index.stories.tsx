import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SideNav from ".";

export default {
  title: "Molecules/SideNav",
  component: SideNav,
} as ComponentMeta<typeof SideNav>;

const Template: ComponentStory<typeof SideNav> = () => <SideNav />;

export const sideNav1 = Template.bind({});
