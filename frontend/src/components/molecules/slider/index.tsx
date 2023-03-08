import { Grid, Box, Button, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import Vector from "../../../assets/images/button.svg";
import BackButton from "../../../assets/images/ButtonBack.svg";
import AddIcon from "@mui/icons-material/Add";
import theme from "../../../theme/theme";
export type ItemDataType = {
  id: number;
  img: any;
  title: string;
};
interface SliderProps {
  itemData: ItemDataType[];
  addSlideMethod?: any;
  handleClick?: (id: number) => void;
}

const MainGrid = styled(Grid)({
  width: "70.625rem",
  height: "9.375rem",
  boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.12)",
});

const MainBox = styled(Box)({
  width: 1150,
  height: 250,
  display: "flex",
  flexDirection: "row",
  marginLeft: "1.5rem",
  marginTop: "1rem",
  columnGap: "0.75rem",
  zIndex: 100,
  position: "absolute",
});

const InnerGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

const StyledButton = styled(Button)({
  marginLeft: "54.1rem",
  position: "fixed",
  borderRadius: "0.625rem",
  height: "5.625rem",
  width: "3.875rem",
  backgroundColor: theme.palette.success.light,
  "&:hover": {
    backgroundColor: theme.palette.success.light,
  },
});
const textTypo = {
  fontStyle: "normal",
  fontSize: "14px",
  fontWeight: "400",
  color: "#5A5766",
};
const Slider = (props: SliderProps) => {
  const handleClick = (id: number) => {
    setID(id);
    return props.handleClick?.(id);
  };
  const handleUpClick = () => {
    if (props.itemData.length >= iter + 10) {
      setIter(iter + 5);
    } else {
      setIter(props.itemData.length - 5);
    }
  };
  const handleDownClick = () => {
    if (iter % 5 === 0) setIter(iter - 5);
    else {
      setIter(iter - (iter % 5));
    }
  };
  const [iD, setID] = useState(0);

  const [iter, setIter] = useState(0);
  return (
    <MainGrid>
      <MainBox>
        <>
          {iter > 0 ? (
            <img
              src={BackButton}
              width={62}
              height={62}
              alt=""
              style={{ marginTop: ".875rem", zIndex: 100, position: "fixed" }}
              onClick={() => handleDownClick()}
              data-testid="testImage1"
            />
          ) : (
            <></>
          )}
          {props.itemData
            .slice(iter, iter + 5)
            .map((item: { title: string; img: any; id: number }) => (
              <InnerGrid key={item.id}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignContent="center"
                >
                  <Grid item>
                    <Box
                      borderRadius="10px"
                      boxSizing="border-box"
                      border={item.id === iD ? "4px solid #9986F0" : ""}
                    >
                      <img
                       id={`sliderImage${item.id}`}
                       data-testid={`sliderImage${item.id}`}
                       style={{borderRadius:"10px"}}
                        src={item.img}
                        alt="Image"
                        width="160px"
                        height="90px"
                        onClick={() => handleClick(item.id)}
                      />
                    </Box>
                  </Grid>
                  <Grid item display="flex" justifyContent="center">
                    <Typography sx={textTypo}>{item.title}</Typography>
                  </Grid>
                </Grid>
              </InnerGrid>
            ))}

          {iter + 5 < props.itemData.length ? (
            <img
            id="rightArrow"
              src={Vector}
              width={62}
              height={62}
              alt=""
              onClick={() => handleUpClick()}
              style={{
                marginTop: "0.875rem",
                marginLeft: "53.375rem",
                position: "fixed",
              }}
              data-testid="testImage"
            />
          ) : (
            <>
              <StyledButton  onClick={props.addSlideMethod}>
                <AddIcon data-testid="onAddButton"/>
              </StyledButton>
            </>
          )}
        </>
      </MainBox>
    </MainGrid>
  );
};

export default Slider;
