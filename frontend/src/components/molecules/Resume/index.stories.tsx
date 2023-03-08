import { ComponentStory, ComponentMeta } from "@storybook/react";
import Resume from ".";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Grid } from "@mui/material";

export default {
  title: "Molecules/Resume",
  component: Resume,
} as ComponentMeta<typeof Resume>;

const Template: ComponentStory<typeof Resume> = (args) => <Resume {...args} />;

export const resume = Template.bind({});
resume.args = {};
