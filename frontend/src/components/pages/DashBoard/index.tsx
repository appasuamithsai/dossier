import React, { useContext, useEffect, useState } from "react";
import Header from "../../organisms/Header/index";
import { DashboardSideNav1 } from "../../organisms/DashboardSideNav/index.stories";
import BasicTabs from "../../organisms/tab/index";
import CustomizePortfolioCard from "../../molecules/CustomizePortfolio/index";
import CustomizePortfolioImage from "../../../assets/images/customize-portfolio.png";
import { CREATE_PORTFOLIO1, CREATE_PORTFOLIO3 } from "../../utils/constants";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { getUserUsingAccessToken } from "../../../services/services";
import PublishedResume from "../../organisms/PublishedResume";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../utils/context";
const header = {
  height: "64px",
  border: " 1px solid #D4D2D9",
};
const sideNav = {
  width: "200px",
  height: "768px",
  left: 0,
  top: "64px",
};
const portfolio = {
  position: "absolute",
  left: "50%",
  bottom: "0%",
  top: "30.31%",
};
const DashBoard: React.FunctionComponent = () => {
  const { userId, setUserId } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  let location: any = useLocation();
  const [tab, seTab] = useState("Workspace");
  useEffect(() => {
    if (!userId) {
      getUserUsingAccessToken(location, setUserId);
    }
    setLoading(false);
  }, []);
  if (loading) {
    return <h1 data-testid="loading">Loading</h1>;
  }
  const handleDashBoard = (label: string) => {
    seTab(label);
  };
  return (
    <div>
      <Box sx={header}>
        <Header />
      </Box>
      <Grid container columnSpacing="80px" direction="row">
        <Grid item>
          <Box sx={sideNav}>
            <DashboardSideNav1
              pullData={(label: string) => handleDashBoard(label)}
            />
          </Box>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          {tab === "Portfolios" ? (
            <PublishedResume />
          ) : (
            <BasicTabs
              tabNames={["Portfolios", "Templates", "Drafts"]}
              tabValues={[
                <Box sx={portfolio}>
                  <CustomizePortfolioCard
                    src={CustomizePortfolioImage}
                    text={CREATE_PORTFOLIO3}
                    buttonText={CREATE_PORTFOLIO1}
                  />
                </Box>,
              ]}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};
export default DashBoard;
