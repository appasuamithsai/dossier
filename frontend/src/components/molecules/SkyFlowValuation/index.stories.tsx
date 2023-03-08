import { ThemeProvider } from "@mui/styles";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SkyFlowValuation from "./index";
import theme from "../../../theme/theme";
export default {
  title: "Molecules/SkyFlowValuation",
  component: SkyFlowValuation,
} as ComponentMeta<typeof SkyFlowValuation>;

const Template: ComponentStory<typeof SkyFlowValuation> = (args) => (<ThemeProvider theme={theme}><SkyFlowValuation {...args}></SkyFlowValuation></ThemeProvider>);

export const primary = Template.bind({});
