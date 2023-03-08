import { Grid } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import StakeholderToolBar from ".";

export default {
  title: "organisms/StakeholderToolBar",
  component: StakeholderToolBar,
} as ComponentMeta<typeof StakeholderToolBar>;

const Template: ComponentStory<typeof StakeholderToolBar> = (args) => (
  <>
    <Grid id="render123"></Grid>
    <StakeholderToolBar {...args}></StakeholderToolBar>
  </>
);

export const primary = Template.bind({});

primary.args = {
  gridMenuOpen: true,
  imageGridAnchorEl: document.getElementById("render123"),
  description: "hello",
  handleImageGridMenuClose: () => {},
  emitClick: () => {},
};
