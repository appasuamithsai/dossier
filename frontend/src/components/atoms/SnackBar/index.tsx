import React from "react";
import SnackbarContent, {
  SnackbarContentProps,
} from "@mui/material/SnackbarContent";

export interface SnackBarProp extends SnackbarContentProps {}

const SnackBar: React.FC<SnackBarProp> = (props) => {
  return <SnackbarContent {...props} />;
};

export default SnackBar;
