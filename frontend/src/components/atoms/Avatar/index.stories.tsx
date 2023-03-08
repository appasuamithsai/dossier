import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from ".";
import React from "react";
import User from "../../../../public/assets/images/user.svg";
import Test from "../../../assets/images/logos/test.png";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const small = Template.bind({});
small.args = {
  variant: "rounded",
  src: User,
};

export const medium = Template.bind({});
medium.args = {
  variant: "circular",
  src: User,
};

export const large = Template.bind({});
large.args = {
  variant: "square",
  src: Test,
};
