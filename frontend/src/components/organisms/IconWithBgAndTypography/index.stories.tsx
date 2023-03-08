import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import IconWithBgAndTypography from ".";
import { stakeHolderIcons } from "../../utils/constants";
import { getIconSrc } from "../../utils/mapperFunction";

export default {
  title: "organisms/IconWithBgAndTypography",
  component: IconWithBgAndTypography,
} as ComponentMeta<typeof IconWithBgAndTypography>;

const Template: ComponentStory<typeof IconWithBgAndTypography> = (args) => (
  <>
    <IconWithBgAndTypography {...args}></IconWithBgAndTypography>
  </>
);

export const primary = Template.bind({});

const icon1 = {
  id: 1,
  name: "Brainstorming",
  description: "Brainstorming Sessions with Stakeholders",
  isColored: true,
  position: 1,
};
const icon2 =  {
  id: 1,
  name: "Brainstorming",
  description: "Brainstorming Sessions with Stakeholders",
  isColored: false,
  position: 1,
};
primary.args = {
  icon: icon1,
  iconSrc: getIconSrc(icon1.name),
  emitClick: () => {},
  index: 0,
};

export const secondary = Template.bind({});
secondary.args = {
  icon: icon2,
  iconSrc: getIconSrc(icon2.name),
  emitClick: () => {},
  index: 0,
};
