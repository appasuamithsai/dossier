import { Grid } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ChangeIconMenu from ".";

export default {
  title: "organisms/ChangeIconMenu",
  component: ChangeIconMenu,
} as ComponentMeta<typeof ChangeIconMenu>;

const Template: ComponentStory<typeof ChangeIconMenu> = (args) => (
  <>
    <Grid id="render123"></Grid>
    <ChangeIconMenu {...args}></ChangeIconMenu>
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
  handleChangeIconMenuClose: () => {},
  emitClick: () => {},
  iconListMenuOpen: true,
  iconListAnchorEl: document.getElementById("render123"),
};
