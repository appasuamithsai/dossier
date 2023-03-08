import { Grid } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import IconToolBar from ".";

export default {
  title: "organisms/IconToolBar",
  component: IconToolBar,
} as ComponentMeta<typeof IconToolBar>;

const Template: ComponentStory<typeof IconToolBar> = (args) => (
  <>
    <Grid id="render123"></Grid>
    <IconToolBar {...args}></IconToolBar>
  </>
);

export const primary = Template.bind({});

primary.args = {
  icon:  {
    id: 1,
    name: "Brainstorming",
    description: "Brainstorming Sessions with Stakeholders",
    isColored: true,
    position: 1,
  },
  emitClick: () => {},
  handleImageMenuClose: () => {},
  imageAnchorEl: document.getElementById("render123"),
  index: 1,
  setImageClicked: () => {},
  imageMenuOpen: true,
};
