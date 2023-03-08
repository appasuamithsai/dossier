import { IconButton } from "@mui/material";
import React from "react";

export interface IconProp {
  src: string;
  styles?: React.CSSProperties;
  onClick?: any;
}
const Icon: React.FC<IconProp> = (props) => {
  const { src, styles } = props;
  return (
    <>
      <IconButton sx={styles}>
        <img src={src} alt="" />
      </IconButton>
    </>
  );
};
export default Icon;
