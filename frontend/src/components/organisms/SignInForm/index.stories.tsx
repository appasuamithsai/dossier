import { ComponentStory, ComponentMeta } from "@storybook/react";
import SignInForm from ".";
import React from "react";

export default {
  title: "Organisms/SignInForm",
  component: SignInForm,
} as ComponentMeta<typeof SignInForm>;

const Template: ComponentStory<typeof SignInForm> = (args) => (
  <SignInForm {...args} />
);

export const primary = Template.bind({});

primary.args={
  onSubmit:()=>console.log("Clicked"),
  firstName:'Peter'
};
