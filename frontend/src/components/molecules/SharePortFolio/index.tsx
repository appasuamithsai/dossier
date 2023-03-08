import { Card, Divider, Grid, Typography, Box } from "@mui/material";
import Button from "../../atoms/Button";
import React from "react";
import CloseIcon from "../../../assets/images/close.png";
import IImage from "../../../assets/images/i.png";
import GmailImage from "../../../assets/images/gmail.png";
import JemoltonImage from "../../../assets/images/jemoltn.png";
import LinkedinImage from "../../../assets/images/linkedbg.png";
import theme from "../../../theme/theme";

interface SharePortFolioProps {
  link: string;
  onClose?: () => void;
  onCopy?: () => void;
}
const cardStyle = {
  width: "31.8rem",
  borderRadius: "0.6rem",
  backgroundColor: "white",
  padding: "2rem",
};
const shareViaStyle = {
  fontWeight: "600",
};
const closeGridStyle = {
  marginLeft: "21rem",
};
const imagesGridStyle = {
  marginTop: "0.75rem",
};
const orGridStyle = {
  marginTop: "1.25rem",
  marginBottom: "1.875rem",
};
const dividerStyle = {
  width: "13.125rem",
  border: "1px solid #D4D2D9",
  height: "0px",
  marginTop: "0.75rem",
};
const orTypoStyle = {
  marginLeft: "0.625rem",
  marginRight: "0.625rem",
  fontWeight: "200",
};
const linkBoxStyle = {
  backgroundColor: `${theme.palette.grey[100]}`,
  borderRadius: "0.3125rem",
  height:'2.25rem',
  width: "100%",
};
const linkTypoStyle = {
  textTransform: "none",
  marginTop: "1rem",
  marginBottom: "0.5625rem",
  marginLeft: "1rem",
  marginRight: "0.25rem",
  paddingLeft: "0.625rem",
  paddingRight: "2.562rem",
  color: `${theme.palette.primary.main}`,
};
const copyTypoStyle = {
  textTransform: "none",
  color: "white",
  fontWeight: "600",
};

const SharePortFolio = (props: SharePortFolioProps) => {
  const handleMail = (e: any) => {
    window.location.href =
      "mailto:dossier@zemosolabs.com?subject=Sharing Portfolio";
    e.preventDefault();
  };
  return (
    <Card sx={cardStyle}>
      <Grid container direction="column" rowSpacing='1.2rem'>
        <Grid item>
          <Grid container sx={{marginLeft:'1rem'}}>
            <Grid item>
              <Typography variant="body1" sx={shareViaStyle}>
                Share portfolio via
              </Typography>
            </Grid>
            <Grid item sx={closeGridStyle}>
              <Box onClick={props.onClose}>
                <img src={CloseIcon} alt="close" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={imagesGridStyle}>
          <Grid container justifyContent="space-evenly" alignItems="center">
            <Grid item>
              <Box>
                <a onClick={handleMail} style={{ cursor: "pointer" }}>
                  <img src={GmailImage} alt="gmail" />
                </a>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <img src={JemoltonImage} alt="jemolton" />
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <img src={LinkedinImage} alt="linkedin" />
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <img src={IImage} alt="iimage" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={orGridStyle}>
          <Grid container justifyContent="space-evenly" alignItems="center">
            <Grid item>
              <Divider sx={dividerStyle} />
            </Grid>
            <Grid item>
              <Typography sx={orTypoStyle}>or</Typography>
            </Grid>
            <Grid item>
              <Divider sx={dividerStyle} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item >
          <Grid container direction="row" sx={linkBoxStyle}>
            <Grid item  sx={{width:"25.5rem",marginTop: "0.4rem",}}>
              <Typography variant="overline" sx={linkTypoStyle}>
                {props.link}
              </Typography>
            </Grid>
            <Grid item>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  variant="contained"
                  sx={{ justifyContent: "flex-end" }}
                  onClick={props.onCopy}
                >
                  <Typography variant="button" sx={copyTypoStyle}>
                    Copy link
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SharePortFolio;
