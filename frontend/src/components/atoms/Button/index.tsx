import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from "@mui/material";
import theme from "../../../theme/theme";
export interface ButtonProps extends MuiButtonProps {}
const CustomizedButton = styled(MuiButton)(() => ({
  "&:focusVisible": {
    boxShadow: "none",
  },
  textTransform: "none",
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <CustomizedButton disableRipple {...props}></CustomizedButton>
    </>
  );
};

export default Button;
