import { Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";

export type CustomizePortfolioProp = {
  buttonText: string;
  src: any;
  text: string;
  onClick?: any;
};
const buttonText = {
  fontFamily: "'Roboto'",
  alignItems: "center",
  justifyContent: "center",
  margin: "2px",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "14px",
  width: "196px",
  height: "44px",
  lineHeight: "18px",
  color: "text.divider",
  "&: hover": {
    backgroundColor: "primary.main",
  },
  "&:focusVisible": {
    boxShadow: "none",
  },
  textTransform: "none",
};
const CustomizePortfolio: React.FC<CustomizePortfolioProp> = (props) => {
  return (
    <Box>
      <img src={props.src} alt="" />

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ marginTop: "25px", marginBottom: "8px" }}
      >
        {props.text}
      </Typography>
      <Link to="/create-portfolio" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={buttonText}
          color="primary"
          onClick={props.onClick}
          data-testid="CustomizePortfolio"
        >
          {props.buttonText}
        </Button>
      </Link>
    </Box>
  );
};

export default CustomizePortfolio;
