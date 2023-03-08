import { Grid } from "@mui/material";
import React from "react";
import PortfolioTemplateSearch from "../../molecules/PortfolioTemplateSearch";
import Basic from "../../utils/templates/basic";
import Portfolio from "../../organisms/Portfolio";
import { useNavigate } from "react-router-dom";

const gridStyle = {
  marginTop: "1.5rem",
};
const DesignFirstPage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const comp = (
    <Grid container>
      <Grid item>
        <PortfolioTemplateSearch />
      </Grid>
      <Grid item sx={gridStyle}>
        <Portfolio
          onPublishPortFolio={() => {
            navigate("/dashboard");
          }}
        />
      </Grid>
    </Grid>
  );
  return <Basic children={comp} />;
};
export default DesignFirstPage;
