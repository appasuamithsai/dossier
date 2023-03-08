import { ComponentStory, ComponentMeta } from "@storybook/react";
import Popup from ".";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Grid } from "@mui/material";

export default {
  title: "Molecules/Popup",
  component: Popup,
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = (args) => (
  <>
    <Grid id="render123" />
    <Popup {...args} />
  </>
);

export const popup = Template.bind({});

popup.args = {
  open: true,
  anchorEl: document.getElementById("render123"),
  handleOnClose: () => {},
};
