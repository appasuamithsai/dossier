import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../../../theme/theme";
import CloseIcon from "@mui/icons-material/Close";
import LinearProgress from "@mui/material/LinearProgress";
import SnackBar from "../../atoms/SnackBar";
import UploadIcon from "../../../assets/icons/uploadIcon.png";
import Icon from "../../atoms/Icon/index";
export type ImageUploadProgressProp = {
  progress: number;
  imageName: string;
  onClose?: any;
};
const imageNameStyle = {
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "22px",
  color: theme.palette.structural[50],
  fontFamily: "RobotoRegular",
};
const ImageUploadProgress: React.FC<ImageUploadProgressProp> = (props) => {
  return (
    <>
      <SnackBar
        sx={{ width: "412px", height: "64px" }}
        action={
          <Box>
            <CloseIcon
              onClick={props.onClose}
              sx={{ paddingBottom: "5px", paddingRight: "5px" }}
            />
          </Box>
        }
        message={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              src={UploadIcon}
              styles={{
                paddingLeft: "13px",

                paddingBottom: "31px",
              }}
            />
            <Box sx={{ paddingBottom: "16px", paddingLeft: "10px" }}>
              <Box
                sx={{
                  justifyContent: "space-between",
                  display: "flex",
                }}
              >
                <Typography sx={imageNameStyle}>{props.imageName}</Typography>{" "}
                <Typography sx={imageNameStyle}>{"Uploading"}</Typography>
              </Box>

              <LinearProgress
                variant="determinate"
                value={props.progress}
                sx={{ width: "290px", height: "6px", borderRadius: "4px" }}
              />
            </Box>
          </Box>
        }
      ></SnackBar>
    </>
  );
};

export default ImageUploadProgress;
