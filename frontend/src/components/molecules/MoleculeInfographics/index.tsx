import { Grid, Input, InputAdornment, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import theme from "../../../theme/theme";
import SearchBar from "../../../assets/images/searchbar.svg";
import Image1 from "../../../assets/images/InfographicsImage1.svg";
import Image2 from "../../../assets/images/InfographicsImage2.svg";
import Image3 from "../../../assets/images/InfographicsImage3.svg";
import Image4 from "../../../assets/images/InfographicsImage4.svg";
export interface InfographiscProps {
  placeholder?: string;
}

const MoleculeInfographisc = ({ placeholder }: InfographiscProps) => {
  const itemData = [
    {
      id: 0,
      img: Image1,
    },
    {
      id: 1,
      img: Image2,
    },
    {
      id: 2,
      img: Image3,
    },
    {
      id: 3,
      img: Image4,
    },
    {
      id: 5,
      img: Image3,
    },
  ];

  const StyledInput = styled(Input)({
    width: "256px",
    height: "36px",
    borderRadius: "10px",
    border: `1px solid ${theme.palette.grey[300]}`,
    outline: 0,
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.04)",
    backgroundColor: theme.palette.structural[50],
    marginTop: "20px",
    marginLeft: "20px",
  });

  const StyledTypo = styled(Typography)({
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "18px",
    marginLeft: "24px",
    marginTop: "24px",
    marginBottom: "12px",
  });

  const [value, setValue] = useState("");

  const handler = (event: {
    target: {
      value: React.SetStateAction<string>;
      focus: () => void;
    };
  }) => {
    setValue(event.target.value);
    event.target.focus();
  };
  return (
    <>
      <Grid
        style={{
          width: "296px",
          height: "704px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08)",
          backgroundColor: theme.palette.grey[100],
        }}
      >
        <StyledInput
          data-testid="searchbar"
          placeholder={placeholder}
          onChange={handler}
          value={value}
          autoFocus
          startAdornment={
            <InputAdornment position="start">
              <img src={SearchBar} style={{ marginLeft: "12.5px" }}></img>
            </InputAdornment>
          }
          disableUnderline
        />

        <StyledTypo>Search Results</StyledTypo>

        {itemData.map((item: { img: any; id: number }) => (
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
              marginBottom: "16px",
            }}
          >
            <img src={item.img} width={256} height={96} alt="" />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MoleculeInfographisc;
