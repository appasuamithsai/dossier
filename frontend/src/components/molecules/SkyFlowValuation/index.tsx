import React from "react";
import { ACCOMPLISHMENTS, SKY_FLOW_ARRAY, GRAPH_TEMPLATE } from "../../utils/constants";
import SlideBackground from "../../utils/templates/SlideBackground";
import { Grid, Box, Typography} from "@mui/material";
import SkyFlowCard from "../SkyFlowCard";

const boxStyle={
  paddingTop:'0.125rem',
  paddingBottom:'0.125rem',
  width:'17rem',
  position: "relative",
  top: "-20px",
  color: "text.primary",
  marginLeft:'2rem'
};

const gridStyle={
  marginLeft:'2.8125rem'
}
const SkyFlowValuation: React.FC = () => {
  const comp=(
    <>
      <Box sx={boxStyle}>
        <Typography variant="body1"  >{GRAPH_TEMPLATE.heading}</Typography>
      </Box>
      <Grid container sx={gridStyle}>
          {SKY_FLOW_ARRAY.map(e=>{
            return(
            <Grid item key={e.date}>
              <SkyFlowCard image={e.image} heading={e.heading} body={e.body} date={e.date}/>
            </Grid>
            );
          })}
      </Grid>
    </>
  );
  return (
        <SlideBackground
          title={ACCOMPLISHMENTS}
          children={comp}
        />
  );
};

export default SkyFlowValuation;
