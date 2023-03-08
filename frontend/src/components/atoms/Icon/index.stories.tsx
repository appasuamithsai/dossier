import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import Icon, { IconProp } from ".";
import Calender from "../../../../public/assets/images/calender.svg";
export default {
  title: "Atoms/Icon",
  component: Icon,
};
const Template: Story<ComponentProps<typeof Icon>> = (args: IconProp) => (
  <Icon {...args} />
);

export const Help = Template.bind({});
Help.args = {
  src: Calender,
};
