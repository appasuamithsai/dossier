import { Box, Grid, IconButton, Typography } from '@mui/material';
import React from 'react'
import UploadImage from "../../../assets/icons/upload.png";
import AddLink from "../../../assets/icons/addLink.png";

const mediaUpload = {
    height: "80px",
    width: "160px",
    borderRadius: "10px",
    padding: "12px",
  
  };
  const mediaTypo = {
    fontSize: "13px",
    fontWeight: 500,
    fontStyle:"normal",
   color:" #5A5766",
  };
  
  
const UploadMedia:React.FC = () => {
    return (
      <Box boxShadow="0px 0px 4px rgba(0, 0, 0, 0.12)" sx={mediaUpload}>
        <Grid container  direction="column">
          <Grid item>
            <Grid container  direction="row" >
              <Grid item>
                <IconButton >
                  <img data-testid="uploadmediabutton" src={UploadImage}></img>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton sx={{justifyContent:"center"}} >
                  <Typography variant="caption3" sx={mediaTypo}>Upload Media</Typography>
                </IconButton>{" "} 
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container  columnSpacing="12px"  direction="row">
              <Grid item>
                <IconButton>
                  <img src={AddLink}></img>
                </IconButton>
              </Grid>
              <Grid item>
                <Box >
                  <Typography variant="caption3" sx={mediaTypo}>Add Link</Typography>
                </Box>{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
export default UploadMedia
