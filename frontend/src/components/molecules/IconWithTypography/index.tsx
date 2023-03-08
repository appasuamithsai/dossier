import { Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme/theme";

export type IconWithTypograhyProps = {
  src: any;
  label: string;
};

const IconWithTypograhy = (props: IconWithTypograhyProps) => {
  return (
    <Grid container style={{ flexDirection: "row", columnGap: "12px" }}>
      <Grid item>
        <img
          src={props.src}
          style={{
            width: "24px",
            height: "24px",
          }}
          data-testid="image"
        />
      </Grid>
      <Grid>
        <Typography
          variant="caption2"
          color={theme.palette.text.secondary}
          style={{
            textTransform: "none",
          }}
        >
          {props.label}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default IconWithTypograhy;
