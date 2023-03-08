import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import AddCertificate from ".";

export default {
  title: "organisms/AddCertificate",
  component: AddCertificate,
} as ComponentMeta<typeof AddCertificate>;

const Template: ComponentStory<typeof AddCertificate> = (args) => (
  <AddCertificate {...args} ></AddCertificate>
);

export const primary = Template.bind({});

primary.args={
    onSubmit:()=>console.log("Clicked!!"),
}

