import { ComponentStory, ComponentMeta } from "@storybook/react";
import OtpForm from ".";
import React from "react";

export default {
  title: "Organisms/OtpForm",
  component: OtpForm,
} as ComponentMeta<typeof OtpForm>;

const Template: ComponentStory<typeof OtpForm> = (args) => (
  <OtpForm {...args} />
);

export const primary = Template.bind({});

primary.args={
  onSubmit:()=>console.log("Clicked"),
  firstName:'Peter'
};
