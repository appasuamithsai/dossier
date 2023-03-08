import React, { useState } from "react";
import { Grid, styled, Typography, Box } from "@mui/material";
import theme from "../../../theme/theme";
import sidenav1 from "../../../assets/icons/DashboardSideNavImage1.svg";
import sidenav2 from "../../../assets/icons/DashboardSideNavImage2.svg";
import sidenav3 from "../../../assets/icons/DashboardSideNavImage3.svg";
import sidenav4 from "../../../assets/icons/DashboardSideNavImage4.svg";
import sidenav5 from "../../../assets/icons/DashboardSideNavImage5.svg";
import sidenav11 from "../../../assets/icons/DashboardSideNavImage1-1.svg";
import portfolioSelectedImage from "../../../assets/icons/SideNavImagePortfolios.svg";

export interface DashboardSideNavProps {
  pullData: (label: string) => void;
}
const DashboardSideNav = (props: DashboardSideNavProps) => {
  const StyledGrid = styled(Grid)({
    width: "200px",
    height: "704px",
    backgroundColor: theme.palette.structural[50],
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  });

  const disabledStyle = {
    boxSizing: "border-box",
    width: 200,
    height: 30,
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.palette.success.light,
    padding: "4px 2px",
    cursor: "pointer",
    marginBottom: "20px",
  };
  const enabledStyle = {
    boxSizing: "border-box",
    width: 200,
    height: 30,
    display: "flex",
    flexDirection: "row",
    padding: "4px 2px",
    marginBottom: "20px",
  };
  const disabledTypo = {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "22px",
    marginTop: "2px",
  };
  const enabledTypo = {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "22px",
    marginTop: "2px",
    color: theme.palette.primary.main,
  };
  const templateData = [
    {
      id: 0,
      image: sidenav11,
      label: "Workspace",
      status: true,
      selectedImage: sidenav1,
    },
    {
      id: 1,
      image: sidenav2,
      label: "Archive",
      status: false,
      selectedImage: sidenav2,
    },
    {
      id: 2,
      image: sidenav3,
      label: "Portfolios",
      status: true,
      selectedImage: portfolioSelectedImage,
    },
    {
      id: 3,
      image: sidenav4,
      label: "Shared with you",
      status: false,
      selectedImage: sidenav4,
    },
    {
      id: 4,
      image: sidenav5,
      label: "Trash",
      status: false,
      selectedImage: sidenav5,
    },
  ];
  const [id, setId] = useState(0);
  const [data, setData] = useState(templateData);
  const handleClick = (iD: number) => {
    if (data[iD].id === 0) {
      templateData[iD].selectedImage = templateData[iD].image;
      setData(templateData);
    }
    if (data[iD].id === 2) {
      templateData[id].image = templateData[id].selectedImage;
      templateData[iD].image = templateData[iD].selectedImage;
      setData(templateData);
    }

    if (!data[iD].status) {
      templateData[0].image = templateData[0].selectedImage;
      setData(templateData);
    }

    setId(iD);
    props.pullData(templateData[iD].label);
  };
  return (
    <>
      <StyledGrid>
        <Grid sx={{ width: 200, height: 30 }}></Grid>
        {data.map(
          (item: {
            image: any;
            id: number;
            label: string;
            status: boolean;
            selectedImage: any;
          }) => (
            <Box
              sx={item.id === id ? disabledStyle : enabledStyle}
              data-testid="box"
              onClick={
                item.status
                  ? () => {
                      handleClick(item.id);
                    }
                  : () => {
                      console.log("Handled");
                    }
              }
            >
              <img
                src={item.image}
                style={{
                  marginLeft: "24px",
                  marginRight: "8px",
                }}
              ></img>
              <Typography
                style={
                  item.id === id && item.status ? enabledTypo : disabledTypo
                }
              >
                {item.label}
              </Typography>
            </Box>
          )
        )}
      </StyledGrid>
    </>
  );
};
export default DashboardSideNav;
