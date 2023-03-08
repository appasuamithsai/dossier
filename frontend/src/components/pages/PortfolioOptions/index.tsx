import { Grid } from "@mui/material";
import React from "react";
import theme from "../../../theme/theme";
import CreatePortfolioOptions from "../../organisms/CreatePortfolioOptions";

const PortfolioOptions = () => {
  return (
    <Grid
      sx={{
        backgroundColor: theme.palette.structural[400],
        height: "57rem",
      }}
    >
      <CreatePortfolioOptions />
    </Grid>
  );
};

export default PortfolioOptions;
