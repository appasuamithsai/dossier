import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DashBoard from ".";
export default {
  title: "Pages/DashBoard",
  component: DashBoard,
} as ComponentMeta<typeof DashBoard>;

const Template: ComponentStory<typeof DashBoard> = (args) => <DashBoard {...args} />;

export const pageDashboard = Template.bind({});
