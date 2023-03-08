import { Box, Typography } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Graph from ".";

export default {
  title: "Molecules/Graph",
  component: Graph,
} as ComponentMeta<typeof Graph>;

const Template: ComponentStory<typeof Graph> = (args) => (
  <Graph {...args}></Graph>
);

export const primary = Template.bind({});
