import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ResponsiveDatePickers from ".";
export default {
  title: "Molecules/Date Picker",
  component: ResponsiveDatePickers,
} as ComponentMeta<typeof ResponsiveDatePickers>;

const Template: ComponentStory<typeof ResponsiveDatePickers> = (args) => (
  <ResponsiveDatePickers {...args} />
);

export const datePicker = Template.bind({});
datePicker.args = {
  label: "Date of Birth",
  date: new Date(),
};
