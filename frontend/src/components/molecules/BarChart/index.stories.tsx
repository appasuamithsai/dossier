import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BarChart from "./index";
export default {
  title: "Molecules/Bar Chart",
  component: BarChart,
} as ComponentMeta<typeof BarChart>;

const Template: ComponentStory<typeof BarChart> = (args) => (
  <BarChart {...args} />
);

export const template = Template.bind({});
template.args = {
  title: "hello",
};
