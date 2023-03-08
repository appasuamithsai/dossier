import { Button, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import theme from "../../../theme/theme";
import BackIcon from "../../../assets/icons/arrow left.svg";
import CreatePortfolioCard from "../../molecules/CreatePortfolioCard";
import AutoFillWithResumeImage from "../../../assets/icons/autofillwithresume.png";
import ExistingPortFolioImage from "../../../assets/images/existingportfolio.png";
import ManuallyWithTemplateImage from "../../../assets/images/manuallywithtemplate.png";
import { CREATE_PORTFOLIO1, CREATE_PORTFOLIO2 } from "../../utils/constants";
import Header from "../Header";

const CreatePortfolioOptions = () => {
  let navigate = useNavigate();
  const MainGrid = styled(Grid)({
    backgroundColor: theme.palette.structural[400],
    display: "flex",
    flexDirection: "column",
  });
  const TypoGrid = styled(Grid)({
    marginLeft: "43.875rem",
    marginTop: "8.25rem",
    flexDirection: "column",
  });
  const ContainerGrid = styled(Grid)({
    marginLeft: "23.6875rem",
    display: "flex",
    flexDirection: "row",
    columnGap: "1.5rem",
    marginTop: "1.5rem",
  });
  const InnerGrid = styled(Grid)({
    backgroundColor: theme.palette.structural[50],
    borderRadius: "4px",
    cursor: "pointer",
    ":hover": {
      border: "2px solid #4C2CD9",
    },
  });
  const headerStyle = {
    height: "4rem",
    border: " 1px solid #D4D2D9",
  };
  const handleBack = () => {
    history.back();
  };
  const handleAutofillResume = () => {
    navigate("/autofill-resume");
  };
  const handleManuallyWithTemplate = () => {
    navigate("/manually-with-template");
  };
  return (
    <>
      <MainGrid container>
        <Grid item sx={headerStyle}>
          <Header />
        </Grid>
        <Grid
          item
          style={{
            marginTop: "3.8125rem",
            marginLeft: "18.3125rem",
          }}
        >
          <Button
            data-testid="button"
            variant="text"
            startIcon={<img src={BackIcon} />}
            sx={{
              ":hover": {
                backgroundColor: theme.palette.structural[400],
              },
            }}
            onClick={handleBack}
          >
            <Typography
              variant="body1"
              color={theme.palette.primary.main}
              style={{ textTransform: "none" }}
            >
              Back
            </Typography>
          </Button>
        </Grid>
        <TypoGrid item alignItems="center">
          <Typography variant="title" color={theme.palette.text.primary}>
            {CREATE_PORTFOLIO1}
          </Typography>
          <Typography variant="body2" color={theme.palette.text.disabled}>
            {CREATE_PORTFOLIO2}
          </Typography>
        </TypoGrid>

        <Grid item container>
          <ContainerGrid item>
            <InnerGrid item width={272} height={240} data-testid="image1">
              <CreatePortfolioCard
                image={AutoFillWithResumeImage}
                name="AutoFillWithResumeImage"
                handle={handleAutofillResume}
              />
            </InnerGrid>

            <InnerGrid item width={272} height={240} data-testid="image2">
              <CreatePortfolioCard
                image={ExistingPortFolioImage}
                name="Existing Portfolio"
                handle={() => {
                  console.log("Handled");
                }}
              />
            </InnerGrid>

            <InnerGrid item width={272} height={240} data-testid="image3">
              <CreatePortfolioCard
                image={ManuallyWithTemplateImage}
                name="Manually with Template"
                handle={handleManuallyWithTemplate}
              />
            </InnerGrid>
          </ContainerGrid>
        </Grid>
      </MainGrid>
    </>
  );
};

export default CreatePortfolioOptions;
