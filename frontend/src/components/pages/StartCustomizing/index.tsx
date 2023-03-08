import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderImage from "../../../assets/images/DossierHeader.svg";
import StartCustomizingRocket from "../../../assets/images/StartCustomizingRocket.svg";
import theme from "../../../theme/theme";
import Button from "../../atoms/Button";
import { startCustomizing } from "../../utils/constants";

const MainGrid = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  columnGap: "6px",
  marginTop: "21px",
  marginLeft: "24px",
});

const HeaderTypography = styled(Grid)({
  color: "#4C2CD9",
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "20px",
  letterSpacing: "0.0.1rem",
  fontWeightHigh: true,
});

const GridItem = styled(Grid)({
  marginLeft: "700px",
  marginTop: "150px",
  display: "flex",
  flexDirection: "column",
});

const ButtonCustomize = styled(Button)({
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "18px",
  borderRadius: "4px",
  width: "200px",
  height: "44px",
  marginLeft: "34px",
  marginTop: "24px",
});

const sxStyles = {
  typo1: { marginLeft: "90px" },
  typo2: { marginLeft: "44px" },
  typo3: { color: "white", textTransform: "none" },
};
const StartCustomizing = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/first-page");
  };
  return (
    <Grid>
      <MainGrid item>
        <img src={HeaderImage} style={{ width: "18px", height: "18px" }} />
        <HeaderTypography>{startCustomizing.title}</HeaderTypography>
      </MainGrid>
      <GridItem item>
        <img
          src={StartCustomizingRocket}
          style={{ width: "268px", height: "268px" }}
        />

        <Grid>
          <Typography
            variant="subtitle1"
            color={theme.palette.text.secondary}
            sx={sxStyles.typo1}
          >
            {startCustomizing.name}
          </Typography>
          <Typography
            variant="subtitle2"
            color={theme.palette.text.secondary}
            sx={sxStyles.typo2}
          >
            {startCustomizing.label}
          </Typography>
          <ButtonCustomize variant="contained" onClick={handleClick}>
            <Typography sx={sxStyles.typo3} variant="button">
              {startCustomizing.button}
            </Typography>
          </ButtonCustomize>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default StartCustomizing;
