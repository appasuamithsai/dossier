import { Grid, styled, Input, InputAdornment, Typography } from "@mui/material";
import React, { useState } from "react";
import theme from "../../../theme/theme";
import SearchBar from "../../../assets/images/search.svg";
import Image1 from "../../../assets/images/PortfolioImage1.svg";
import Image2 from "../../../assets/images/PortfolioImage2.svg";
import Image3 from "../../../assets/images/PortfolioImage3.svg";
import Image4 from "../../../assets/images/PortfolioImage4.png";

export interface PortfolioTemplateSearchProps {
  placeholder?: string;
}

const PortfolioTemplateSearch = ({
  placeholder,
}: PortfolioTemplateSearchProps) => {
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
  ];

  const StyledInput = styled(Input)({
    width: "256px",
    height: "36px",
    borderRadius: "10px",
    border: `1px solid ${theme.palette.grey[300]}`,
    outline: 0,
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.04)",
    padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
    backgroundColor: theme.palette.structural[50],
    marginTop: "20px",
    marginLeft: "20px",
  });

  const StyledTypo = styled(Typography)({
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "18px",
    marginLeft: "26px",
    marginTop: "24px",
  });
  const StyledTypoViewMore = styled(Typography)({
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "18px",
    marginTop: "24px",
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
          zIndex: "100",
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
        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: "37px",
            marginBottom: "9px",
          }}
        >
          <StyledTypo>Showing results for finance</StyledTypo>
          <StyledTypoViewMore
            style={{
              color: theme.palette.primary.main,
            }}
          >
            View More
          </StyledTypoViewMore>
        </Grid>

        {itemData.map((item: { img: any; id: number }, _key = item.id) => (
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "7.5px",
              marginLeft: "20px",
            }}
          >
            <img src={item.img} width={256} height={144} alt="" />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PortfolioTemplateSearch;
