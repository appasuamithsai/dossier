import { Grid,Box, Typography } from '@mui/material';
import React from 'react'
import theme from '../../../theme/theme';

interface SkyFlowCardProps{
    image?:string,
    date:string,
    heading:string,
    body:string
}
const gridStyle={
    display:'flex',
    justifyContent:'center'
};
const root={
    width:'12.008rem'
};
const typoStyleDate={
    textTransform:'none',
    color:'white',
    letterSpacing: '0rem',
    position:'absolute',
};
const typoStyleHead={
    textTransform:'none',
    letterSpacing: '0rem',
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "18px",
    color:theme.palette.text.primary
};
const typoStyleBody={
    textTransform:'none',
    letterSpacing: '0rem',
    whiteSpace: 'pre-line',
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "18px",
    color:theme.palette.text.primary
};
const gridStyle1={
    marginLeft:'1.1875rem'
};
const SkyFlowCard: React.FC<SkyFlowCardProps> = (props:SkyFlowCardProps) => {
  return (
    <Grid container direction='column' rowGap='0.625rem' sx={root}>
        <Grid item>
            <Box  alignItems="center" sx={gridStyle}>
                <img src={props.image} alt={props.heading}/>
                <Typography variant='caption' sx={typoStyleDate}>
                    {props.date}
                </Typography>
            </Box>
        </Grid>
        <Grid item sx={gridStyle1}>
            <Typography variant='overline' sx={typoStyleHead}>
                {props.heading}
            </Typography>
        </Grid>
        <Grid item sx={gridStyle1}>
            <Box>
                <Typography variant='overline' sx={typoStyleBody}>
                    {props.body}
                </Typography>
            </Box>
        </Grid>
    </Grid>
  )
};
export default SkyFlowCard;