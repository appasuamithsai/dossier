import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Image, { ImageProps } from "../../atoms/Image";

export interface ImageTypographyProps extends ImageProps {
  text: string;
}

const classes = makeStyles(() => ({
  mainBox: {
    display: "flex",
    alignItems: "center",
  },

  portfolioVariant: {
    width: "200px",
    height: "204px",
    textAlign: "center",
  },
}));

const ImageTypography: React.FC<ImageTypographyProps> = ({
  text,
  src,
  variant,
  alt,
}) => {
  const styles = classes();
  return (
    <Box className={styles.portfolioVariant} data-testid="ImageTypographyBox">
      <Image variant={variant} src={src} alt={alt} />
      <Typography data-testid="ImageText" variant="body2">
        {text}
      </Typography>
    </Box>
  );
};

export default ImageTypography;
