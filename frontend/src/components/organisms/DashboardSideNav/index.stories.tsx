import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import DashboardSideNav from ".";

export default {
  title: "Organisms/DashboardSideNav",
  component: DashboardSideNav,
} as ComponentMeta<typeof DashboardSideNav>;

const Template: ComponentStory<typeof DashboardSideNav> = (args) => (
  <DashboardSideNav {...args} />
);

export const DashboardSideNav1 = Template.bind({});

DashboardSideNav1.args = {
  pullData: (label: string) => {
    console.log(label);
  },
};
