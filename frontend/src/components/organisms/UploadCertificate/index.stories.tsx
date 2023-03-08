import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import UploadCertificateForm from "."; 
import { Typography } from "@mui/material";
export default {
  title: "Organisms/UploadCertificateform",
  component: UploadCertificateForm,
} as ComponentMeta<typeof UploadCertificateForm>;

const Template: ComponentStory<typeof UploadCertificateForm> = (args) => (
  <UploadCertificateForm {...args} />
);

export const uplodform = Template.bind({});

