import React from "react";
import { Checkbox as MuiCheckbox, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

interface CheckboxProps {
  label: string;
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <FormControlLabel
      control={<MuiCheckbox size="small" />}
      label={
        <Typography
          color="#5A5766"
          fontSize="14px"
          fontWeight={400}
          lineHeight="22px"
        >
          {props.label}
        </Typography>
      }
    />
  );
};
export default Checkbox;
