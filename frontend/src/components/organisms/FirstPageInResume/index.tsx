import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, InputBase, Grid } from "@mui/material";
import theme from "../../../theme/theme";
import Avatar from "../../atoms/Avatar";
import User from "../../../../public/assets/images/user.svg";
import UploadImage from "../../../assets/icons/upload.png";
import LockIcon from "../../../assets/icons/lock-icon.png";
import ThreeDots from "../../../assets/icons/more.png";
import BoxIcon from "../../../assets/icons/Boxplus-icon.png";
import ImageUploadProgress from "../../molecules/ImageUploadProgress";
import ToolBarOption from "../../molecules/ToolBarOptions";
import {
  getFirstpageInResumedetailsById,
  updatePreferencesByUserID,
  updateProfilePhoto,
} from "../../../services/services";
import FontIcon from "../../../assets/icons/font-sizeIcon.png";
import FontAlignment from "../../../assets/icons/alignment.png";
import BoldDropdown from "../../../assets/icons/Bold.png";
import Alignment from "../../../assets/icons/alignmentIcon.png";
import Color from "../../../assets/icons/colorIcon.png";
import { setThemeColour } from "../../utils/mapperFunction";
import { UserContext } from "../../utils/context";
const container = {
  width: "676px",
  height: "379px",
  backgroundColor: theme.palette.structural[50],
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
  marginTop: "10px",
};

const avatarBox = {
  borderRadius: "0%",
  paddingLeft: "10px",
  height: "157px",
  width: "159px",
  boxSizing: "border-box",
};
const textColor = {
  color: theme.palette.structural[50],
};
const designationStyle = {
  color: theme.palette.structural[50],
  marginLeft: "20px",
};
const nameBox = {
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  paddingTop: "37px",
  paddingLeft: "25px",
  paddingRight: "40px",
};
const borderDashed = {
  border: `2px dashed #7E64F3`,
};
const portfolioText = {
  fontWeight: 700,
  fontSize: "50px",
  alignItems: "center",
  display: "flex",
  lineHeight: "56px",

  color: "text.primary",
  width: "310px",
  height: "125px",
};
const secondText = {
  fontWeight: 400,
  fontSize: "12px",
  paddingLeft: "2px",
  marginTop: "10px",
  lineHeight: "18px",

  color: "text.secondary",
  width: "283px",
  height: "60px",
  alignItems: "center",
  display: "flex",
};
const inputBox = {
  alignItems: "center",
  justifyContent: "space-between",
  paddingRight: "80px",
  paddingTop: "38px",
  marginLeft: "73px",
};
const fileUpload = () => {
  document.getElementById("upload-button")?.click();
};
const options = [
  {
    src: UploadImage,
    action: fileUpload,
  },
  {
    src: LockIcon,
  },
  {
    src: ThreeDots,
  },
  {
    src: BoxIcon,
  },
];
const optionsMenu = [
  {
    src: FontIcon,
    imageStyle: {
      height: "28px",
      width: "82px",
    },
  },
  {
    src: FontAlignment,
    imageStyle: {
      height: "28px",
      width: "84px",
    },
  },
  {
    src: BoldDropdown,
    imageStyle: {
      height: "28px",
      width: "62px",
    },
  },
  {
    src: Alignment,
  },
  {
    src: Color,
  },
  {
    src: BoxIcon,
  },
  {
    src: LockIcon,
  },
  {
    src: ThreeDots,
  },
];

export type FirstPageInResumeProps = {
  userName: string;
  designation: string;
  heading: string;
  description: string;
};
const FirstPageInResume: React.FC<FirstPageInResumeProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const [fileName, setFileName] = useState("");
  const [userImage, setUserImage] = useState<any>(User);
  const [progress, setProgress] = React.useState(0);
  const [anchorEl1, setAnchorEl1] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [textEdit, setTextEdit] = useState(false);
  const [heading, setHeading] = useState("");
  const [bgcolor, setColor] = useState("");
  const [fullName, setFullName] = useState("");
  const [designation, setDesignation] = useState("");
  const { userId } = useContext(UserContext);
  useEffect(() => {
    getFirstpageInResumedetailsById(userId).then((data) => {
      const firstName = data.ProfileData.firstName;
      const lastName = data.ProfileData.lastName;
      setFullName(firstName + " " + lastName);
      setDesignation(data.preferencesData.designation);
      const title = data.preferencesData.portfolioType + ` Portfolio`;
      setHeading(title.toUpperCase());
      setUserImage(data.profileImageData);
      setColor(setThemeColour(data.preferencesData.color));
      setLoading(false);
    });
  }, []);
  const imageBox = {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "27px",
    paddingLeft: "28px",
    paddingRight: "28px",

    background: `${bgcolor}`,
  };

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const getBase64 = (file: any, cb: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };
  const showHoverBoxOnEdit = (ea: React.MouseEvent<HTMLElement>) => {
    if (textEdit) {
      setTextEdit(false);
      setAnchorEl2(null);
    } else {
      setTextEdit(true);
      setAnchorEl2(ea.currentTarget);
    }
  };
  const onOptionsOpen1 = (ea: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(ea.currentTarget);
  };
  const onOptionsClose1 = () => {
    setAnchorEl1(null);
  };
  const onOptionsClose2 = () => {
    setAnchorEl2(null);
  };
  const submitFile = async (e: any) => {
    const formData = new FormData();
    formData.append("multipartFile", e.target.files[0]);
    setFileName(e.target.files[0].name);
    getBase64(e.target.files[0], async (result: any) => { 
      await updateProfilePhoto(result, userId);
    });
    setShowSnackBar(true);
    setUserImage(URL.createObjectURL(e.target.files[0]));
  };
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setShowSnackBar(false);
          return 0;
        }
        const diff = 2 * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const cancelUpload = () => {
    setUserImage(User);
    setFileName("User.png");
    setShowSnackBar(false);
  };
  if (loading) {
    return <h1 data-testid="loading">Loading</h1>;
  }
  return (
    <>
      <Grid container sx={container}>
        <Grid item xs={4} sx={imageBox}>
          <ToolBarOption
            imageUploadOptionsProp={{
              options: options,
            }}
            gridMenuOpen={open1}
            imageGridAnchorEl={anchorEl1}
            handleImageGridMenuClose={onOptionsClose1}
          />
          {open1 ? (
            <Box
              sx={[avatarBox, borderDashed]}
              onClick={(_e) => onOptionsClose1()}
            >
              <Avatar variant="circular" data-testid="avatar" src={userImage} />
            </Box>
          ) : (
            <Box sx={avatarBox} onClick={onOptionsOpen1}>
              <Avatar variant="circular" data-testid="avatar" src={userImage} />
            </Box>
          )}
          <Box>
            <input
              accept="image/*"
              type="file"
              id="upload-button"
              data-testid="upload-button"
              style={{ display: "none" }}
              onChange={submitFile}
            />
          </Box>

          <Box sx={nameBox}>
            <Typography variant="caption2" sx={textColor}>
              {fullName}
            </Typography>
            <Typography variant="caption2" sx={designationStyle}>
              {designation}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <ToolBarOption
            imageUploadOptionsProp={{
              options: optionsMenu,
            }}
            gridMenuOpen={open2}
            imageGridAnchorEl={anchorEl2}
            handleImageGridMenuClose={onOptionsClose2}
          />
          <Box sx={inputBox}>
            {textEdit ? (
              <InputBase
                multiline
                sx={[portfolioText, borderDashed]}
                onClick={(e: React.MouseEvent<HTMLElement>) =>
                  showHoverBoxOnEdit(e)
                }
                value={heading}
                onChange={async(e: any) => {
                  setHeading(e.target.value);
                 await updatePreferencesByUserID("portfolioType",e.target.value,userId)

                }}
                data-testid="hover-input1"
              />
            ) : (
              <InputBase
                multiline
                sx={portfolioText}
                onClick={(e: React.MouseEvent<HTMLElement>) =>
                  showHoverBoxOnEdit(e)
                }
                value={heading}
                data-testid="input1"
              />
            )}
            <InputBase
              multiline
              data-testid="input2"
              sx={secondText}
              value={props.description}
            />
          </Box>
          {showSnackBar ? (
            <ImageUploadProgress
              data-testid="progress-bar"
              imageName={fileName}
              progress={progress}
              onClose={cancelUpload}
            />
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default FirstPageInResume;
