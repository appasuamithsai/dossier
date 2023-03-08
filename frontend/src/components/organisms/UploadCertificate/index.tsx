import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "../../atoms/Button/index";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Autocomplete, TextField, Grid } from "@mui/material";
import { ADD_CERTIFICATE } from "../../utils/constants";
import CLOSE from "../../../assets/images/close2.png";
import UploadMedia from "../../molecules/UploadMedia";
import { CertificateDetails } from "../Certifications";
import theme from "../../../theme/theme";
const certificates = [
  { label: "Project Management Professional (PMP)", img: "project" },
  { label: "Health Care IT Certification", img: "health" },
  { label: "Program Management Professional(PgMP)", img: "program" },
];
export const gridStyle = {
  padding: "2rem",
};
export const root = {
  width: "44rem",
  borderRadius: "10px",
};
export const boxStyle = {
  display: "flex",
  width: "100%",
  height: "3.125rem",
  boxShadow: "0px 2px 4px 0px #0000001F",
};
export const imageBox = {
  marginLeft: "30.75rem",
  marginTop: "0.8125rem",
  marginRight: "2rem",
  cursor: "pointer",
  "&: hover": {
    backgroundColor: theme.palette.structural[300],
  },
};
export const typoStyle = {
  color: theme.palette.grey[500],
  marginLeft: "2rem",
  marginTop: "0.8125rem",
};
export const boxStyleTwo = {
  marginBottom: "0.375rem",
};
export const btnTypo = {
  color: "white",
  textTransform: "none",
  fontWeight: "600",
};
export const btnGridStyle = {
  marginTop: "2.4375rem",
  marginLeft: "33.8125rem",
};

interface UploadCertificateProps {
  onSubmit: (item: any) => void;
  onClose: () => void;
}
const UploadCertificate: React.FC<UploadCertificateProps> = (props) => {
  const [submit, setSubmit] = useState(false);
  const [showUploadOption, setShowUploadOption] = useState(false);
  const [upload, setUpload] = useState(false);
  const [localImage, setlocalImage] = useState<any>();
  const [fileName, setFileName] = useState("");

  const showImage = (e: any) => {
    const formData = new FormData();

    formData.append("multipartFile", e.target.files[0]);
    setFileName(e.target.files[0]);
    setlocalImage(URL.createObjectURL(e.target.files[0]));
    setUpload(true);

    setSubmit(true);
  };
  const clickInput = () => {
    document.getElementById("upload-button")?.click();
  };
  const showOptions = (_e: any) => {
    if (certificate !== "") {
      if (showUploadOption) {
        setShowUploadOption(false);
      } else {
        setShowUploadOption(true);
      }
    }
  };
  const cancelUpload = () => {
    setUpload(false);
    setSubmit(false);
    setlocalImage("");
  };
  const [certificate, setCertificate] = useState("");
  const onValueChange = (_e: any, newValue: string) => {
    setCertificate(newValue);
  };

  return (
    <Grid container sx={root}>
      <Grid item>
        <Box sx={boxStyle}>
          {upload ? (
            <Typography sx={typoStyle}>Edit Cover Page</Typography>
          ) : (
            <Typography sx={typoStyle}>{ADD_CERTIFICATE}</Typography>
          )}
          <Box onClick={props.onClose} sx={imageBox}>
            <img src={CLOSE} alt="close" data-testId="uploadCloseIcon" />
          </Box>
        </Box>
      </Grid>

      <Grid item sx={gridStyle}>
        <Grid container rowSpacing="1rem">
          <Grid item>
            <Box sx={boxStyleTwo}>
              <Typography variant="overline2">
                Name of the Certificate
              </Typography>
            </Box>
            <Autocomplete
              id="select-demo"
              data-testid="certificateChange"
              sx={{ height: "30px", width: "624px", borderRadius: "4px" }}
              options={certificates}
              disableClearable
              onChange={(event, newValue) =>
                onValueChange(event, newValue.label)
              }
              popupIcon={null}
              noOptionsText={"No results found"}
              getOptionLabel={(option) => option.label}
              renderOption={(prop, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...prop}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={require(`../../../assets/images/logos/${option.img.toLowerCase()}.png`)}
                    srcSet={`../../../assets/images/logos/${option.img.toLowerCase()}.png 2x`}
                    alt=""
                  />{" "}
                  <Typography style={{ fontWeight: "normal" }}>
                    {option.label}
                  </Typography>
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  data-testid="textfiledcertificate"
                  placeholder="Finance Portfolio"
                  inputProps={{
                    ...params.inputProps,
                    type: "autoComplete",
                    style: { fontWeight: "normal" },
                  }}
                />
              )}
            />
          </Grid>

          <Grid item>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "22px",
                marginTop: "32px",
                width: "624px",
              }}
              color={theme.palette.text.primary}
            >
              Add or link to external documents, photos, sites, videos, and
              presentations. Learn more about media file types supported
            </Typography>
          </Grid>
          <Grid item>
            {upload ? (
              <Box
                sx={{
                  marginTop: "30px",
                }}
              >
                <img
                  width="124px"
                  height="73px"
                  style={{ borderRadius: "10px" }}
                  src={localImage}
                />
                <CloseIcon
                  data-testid="canceluploadicon"
                  sx={{
                    position: "absolute",
                    paddingLeft: "-1px",
                    "&: hover": {
                      backgroundColor: theme.palette.structural[300],
                    },
                    cursor: "pointer",
                  }}
                  onClick={cancelUpload}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  marginTop: "30px",
                }}
              >
                <IconButton
                  data-testid="showOptionsTest"
                  onClick={(e) => showOptions(e)}
                >
                  <AddIcon
                    sx={{
                      color: "primary.main",
                      border: "1px dashed #4C2CD9",
                      borderRadius: "4px",
                    }}
                  />
                </IconButton>
                <Box
                  data-testid="showImageTest"
                  onClick={() => clickInput()}
                  sx={{ cursor: "pointer" }}
                >
                  {showUploadOption && <UploadMedia />}
                </Box>
              </Box>
            )}
            <Box>
              <input
                accept="image/*"
                type="file"
                id="upload-button"
                data-testid="uploadbuttoninput"
                style={{ display: "none" }}
                onChange={showImage}
              />
            </Box>
          </Grid>
          <Grid item sx={btnGridStyle}>
            <Button
              variant="contained"
              onClick={(_e: any) => {
                const item: CertificateDetails = {
                  id: 0,
                  Image: fileName,
                  name: certificate,
                };
                return props.onSubmit(item);
              }}
              data-testid="UploadSubmitbutton"
              disabled={!submit}
            >
              <Typography variant="button" sx={btnTypo}>
                Submit
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UploadCertificate;
