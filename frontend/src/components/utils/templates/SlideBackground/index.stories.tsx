import { Box, Typography } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SlideBackground from ".";

export default {
  title: "Templates/Slide Background",
  component: SlideBackground,
} as ComponentMeta<typeof SlideBackground>;

const Template: ComponentStory<typeof SlideBackground> = (args) => (
  <SlideBackground {...args}></SlideBackground>
);

export const primary = Template.bind({});

primary.args = {
  title: "EDUCATION",
  children: (
    <Box position={"relative"} top={"20px"} left={"20px"}>
      <Typography>Here goes the body of the slide</Typography>
    </Box>
  ),
};
