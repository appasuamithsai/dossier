import React from "react";
import { Avatar as IAvatar, AvatarProps } from "@mui/material";

interface IAvatarProps extends AvatarProps {
  variant: "circular" | "rounded" | "square";
  src?: any;
}

const Avatar = (props: IAvatarProps) => {
  return (
    <>
      <IAvatar {...props} variant={props.variant} src={props.src} />
    </>
  );
};

export default Avatar;
