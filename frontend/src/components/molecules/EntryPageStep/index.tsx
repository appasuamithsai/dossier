import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import theme from "../../../theme/theme";
import Image, { ImageProps } from "../../atoms/Image";

export interface EntryPageStepProps extends ImageProps {
  text: string;
  description: string;
}

const classes = makeStyles(() => ({
  textBox: {
    width: "31rem",
    height: "8.5rem",
  },
  imageBox: {
    textAlign: "center",
    height: "25rem",
    width: "25rem",
    verticalAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const typoStyle = {
  color: theme.palette.text.secondary,
};
const EntryPageStep: React.FC<EntryPageStepProps> = ({
  text,
  description,
  src,
  variant,
  alt,
}) => {
  function getMarginTop() {
    if (alt === "customization") {
      return "24px";
    } else {
      return "48px";
    }
  }
  const styles = classes();
  return (
    <Box className={styles.textBox} data-testid="EntryPageStep">
      <Box>
        <Typography variant="title" sx={typoStyle} data-testid="StepText">
          {text}
        </Typography>
        <Typography variant="body2" sx={typoStyle} data-testid="StepDescription">
          {description}
        </Typography>
      </Box>
      <Box className={styles.imageBox} sx={{ marginTop: getMarginTop }}>
        <Image
          style={{ margin: "auto" }}
          variant={variant}
          src={src}
          alt={alt}
        />
      </Box>
    </Box>
  );
};

export default EntryPageStep;
