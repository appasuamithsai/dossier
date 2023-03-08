import React, { useState } from "react";
import { Grid, styled, Typography, Box } from "@mui/material";
import theme from "../../../theme/theme";
import sidenav1 from "../../../assets/icons/sidenav1.svg";
import sidenav2 from "../../../assets/icons/sidenav2.svg";
import sidenav3 from "../../../assets/icons/sidenav3.svg";
import sidenav4 from "../../../assets/icons/sidenav4.svg";
import sidenav5 from "../../../assets/icons/sidenav5.svg";
import sidenav6 from "../../../assets/icons/sidenav6.svg";
import sidenavbw1 from "../../../assets/icons/sidenavbw1.svg";

const SideNav = () => {
  const StyledGrid = styled(Grid)({
    width: "100px",
    height: "704px",
    backgroundColor: theme.palette.structural[50],
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.18)",
  });

  const templateData = [
    {
      id: 0,
      image: sidenav1,
      label: "Templates",
      status: true,
      selectedImage: sidenav4,
    },
    {
      id: 1,
      image: sidenav2,
      label: "Themes",
      status: false,
      selectedImage: sidenav2,
    },
    {
      id: 2,
      image: sidenav3,
      label: "Typography",
      status: false,
      selectedImage: sidenav3,
    },
    {
      id: 3,
      image: sidenav4,
      label: "Elements",
      status: false,
      selectedImage: sidenav4,
    },
    {
      id: 4,
      image: sidenav5,
      label: "Infographics",
      status: true,
      selectedImage: sidenavbw1,
    },
    {
      id: 5,
      image: sidenav6,
      label: "Upload",
      status: false,
      selectedImage: sidenav6,
    },
  ];

  const [id, setId] = useState(0);
  const [data, setData] = useState(templateData);
  const handleClick = (iD: number) => {
    if (templateData[iD].label === "Templates") {
      templateData[id].selectedImage = templateData[id].image;
    }
    if (templateData[iD].label === "Infographics") {
      templateData[iD].image = templateData[iD].selectedImage;
      templateData[id].image = templateData[id].selectedImage;
    }
    setData(templateData);
    setId(iD);
  };

  const disabled = {
    width: 100,
    height: 54,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.success.light,
    padding: "6px 2px",
    ":hover": {
      cursor: "pointer",
    },

    marginBottom: "20px",
  };
  const enabled = {
    width: 100,
    height: 54,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.structural[50],
    padding: "6px 2px",
    marginBottom: "20px",
  };
  const disbaledTypo = {
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
  };
  const enabledTypo = {
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    color: theme.palette.primary.main,
  };
  return (
    <>
      <StyledGrid>
        <Grid sx={{ width: 100, height: 24 }}></Grid>
        {data.map(
          (item: {
            image: any;
            id: number;
            label: string;
            status: boolean;
          }) => (
            <Box
              sx={item.id === id ? disabled : enabled}
              data-testid="box"
              onClick={
                item.status
                  ? () => {
                      handleClick(item.id);
                    }
                  : () => {
                      console.log("");
                    }
              }
            >
              <img
                src={item.image}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></img>
              <Typography style={item.id === id ? enabledTypo : disbaledTypo}>
                {item.label}
              </Typography>
            </Box>
          )
        )}
      </StyledGrid>
    </>
  );
};

export default SideNav;
