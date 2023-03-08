import React from "react";
import { ACCOMPLISHMENTS } from "../../utils/constants";
import SlideBackground from "../../utils/templates/SlideBackground";
import { Grid, Box, Typography } from "@mui/material";
import ImageAndName from "../ImageAndName";

interface ImageAndNameSlideContentProps {
  title: string;
  contentArray: Array<{ name: string; outerImage: any; innerImage: any }>;
}

const boxStyle = {
  position: "relative",
  paddingTop: "0.125rem",
  paddingBottom: "0.125rem",
  width: "12.5rem",
  top: "-20px",
  color: "text.primary",
};
const rootStyle = {
  marginLeft: "2rem",
};
const gridStyle = {
  marginTop: "3rem",
};
const ImageAndNameSlideContent: React.FC<ImageAndNameSlideContentProps> = ({
  title,
  contentArray,
}) => {
  const comp = (
    <Box sx={rootStyle}>
      <Box sx={boxStyle}>
        <Typography variant="body1">{title}</Typography>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        sx={gridStyle}
      >
        {contentArray.map((e) => {
          return (
            <Grid item key={e.name}>
              <ImageAndName
                name={e.name}
                outerImage={e.outerImage}
                innerImage={e.innerImage}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
  return <SlideBackground title={ACCOMPLISHMENTS} children={comp} />;
};

export default ImageAndNameSlideContent;
