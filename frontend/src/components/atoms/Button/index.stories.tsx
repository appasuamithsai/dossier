import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./index";
import GoogleImage from "../../../assets/images/google.png";
import LinkedinImage from "../../../assets/images/linkedin.png";
import { Box } from "@mui/material";
import theme from "../../../theme/theme";

export default {
  title: "atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const styles = {
  width: "10.937rem",
  height: "2.5rem",
  color: `${theme.palette.text.secondary}`,
  fontWeight: "400",
  size: "1rem",
  lineHeight: "1.5rem",
  boxShadow: "0px 4px 8px 0px #E9E8ED80",
  padding: "0.5rem",
  "&:hover": {
    boxShadow: "none",
    backgroundColor: "transparent",
  },
};
const boxStyle = {
  padding: "0.125rem",
  marginTop: "0.25rem",
  marginRight: "0.625rem",
};
const typoStyle = {
  textTransform: "none",
  color: "white",
  fontWeight: "600",
};
const buttonText = {
  color: "white",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "18px",
  borderRadius: "4px",
  width: "130px",
  height: "36px",
};
const previewButtonText = {
  color: "#4C2CD9",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "18px",
  borderRadius: "4px",
  width: "130px",
  height: "36px",
  "&:hover": {
    background: "none",
  },
};
const DraftButtonText = {
  color: "#4C2CD9",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "18px",
  borderRadius: "4px",
  width: "130px",
  height: "36px",
  "&:hover": {
    background: "none",
  },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Google = Template.bind({});
export const LinkedIn = Template.bind({});
export const contained = Template.bind({});
export const text = Template.bind({});
export const outlined = Template.bind({});
Google.args = {
  variant: "text",
  children: "Google",
  startIcon: (
    <Box sx={boxStyle}>
      <img src={GoogleImage} alt="Google" />
    </Box>
  ),
  sx: { ...styles },
};
LinkedIn.args = {
  variant: "text",
  children: "Linkedin",
  startIcon: (
    <Box sx={boxStyle}>
      <img src={LinkedinImage} alt="LinkedIn" />
    </Box>
  ),
  sx: { ...styles },
};
contained.args = {
  variant: "contained",
  sx: { ...buttonText },
  children: "Publish",
};
text.args = {
  variant: "text",
  sx: { ...previewButtonText },
  children: "Preview",
};
outlined.args = {
  variant: "outlined",
  sx: { ...DraftButtonText },
  children: "Save As Draft",
};
