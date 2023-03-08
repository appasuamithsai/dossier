import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Button from "../../atoms/Button";
import GoogleImage from "../../../assets/images/google.png";
import LinkedinImage from "../../../assets/images/linkedin.png";
import theme from "../../../theme/theme";
import { OR } from "../../utils/constants";

const orGridStyle = {
  marginTop: "1.625rem",
  marginBottom: "2.5rem",
};
const flexStyle = {
  display: "flex",
};
const dividerStyle = {
  width: "10.875rem",
  border: "1px solid #D4D2D9",
  height: "0px",
  marginTop: "0.75rem",
};
const orTypoStyle = {
  marginLeft: "0.625rem",
  marginRight: "0.625rem",
  fontWeight: "200",
};
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
const typoColorStyle = {
  color: theme.palette.text.secondary,
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "18px",
};
const SocialOrEmailPassword: React.FC = () => {
  return (
    <Grid container direction="column" rowSpacing="1.375rem">
      <Grid item>
        <Grid container columnSpacing="1.4375rem">
          <Grid item>
            <Button
              variant="text"
              children="Google"
              startIcon={
                <Box sx={boxStyle}>
                  <img src={GoogleImage} alt="Google" />
                </Box>
              }
              sx={styles}
            />
          </Grid>
          <Grid item>
            <Button
              variant="text"
              children="Linkedin"
              startIcon={
                <Box sx={boxStyle}>
                  <img src={LinkedinImage} alt="Linkedin" />
                </Box>
              }
              sx={styles}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={orGridStyle}>
        <Box sx={flexStyle}>
          <Divider sx={dividerStyle} />
          <Typography sx={[orTypoStyle, typoColorStyle]}>{OR}</Typography>
          <Divider sx={dividerStyle} />
        </Box>
      </Grid>
    </Grid>
  );
};
export default SocialOrEmailPassword;
