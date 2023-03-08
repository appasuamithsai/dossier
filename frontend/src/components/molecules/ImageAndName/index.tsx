import { Grid, Box, Typography, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import theme from "../../../theme/theme";

interface ImageAndNameProps {
  name: string;
  outerImage?: string;
  innerImage?: string;
}
const classes = makeStyles(() => ({
  iconButtonStyles: {
    height: "86px",
    width: "86px",
    backgroundColor: theme.palette.structural[300],
    "&:hover": {
      backgroundColor: theme.palette.structural[300],
    },
  },
  imageBoxStyles: {
    height: "44px",
    width: "59px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
  },
}));
const nameTypo = {
  padding: "0.75rem",
  textTransform: "none",
  whiteSpace: "pre-line",
  fontWeight:400,
  fontSize:"12px",
  lineHeight:"18px",
  color:theme.palette.text.primary
};
const gridStyle = {
    display: "flex",
    justifyContent: "center",
};
const typoGrid = {
  marginTop: "0.75rem",
};
const outerBox = {
  display: "flex",
  justifyContent: "center",
};
const innerBox = {
  position: "relative",
};
const ImageAndName: React.FC<ImageAndNameProps> = (
  props: ImageAndNameProps
) => {
  const styles = classes();
  return (
    <Grid container direction="column" rowGap="0.75rem">
      <Grid item sx={gridStyle}>
        <IconButton disableTouchRipple className={styles.iconButtonStyles}>
          <Box
            className={styles.imageBoxStyles}
            sx={{
              backgroundImage: props.outerImage,
            }}
          >
            <img src={props.innerImage} />
          </Box>
        </IconButton>
      </Grid>
      <Grid item sx={typoGrid}>
        <Typography variant="overline" sx={nameTypo}>
          {props.name}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default ImageAndName;
