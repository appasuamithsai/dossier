import React, { useContext, useEffect, useState } from "react";
import { Box, InputBase, Grid, Typography } from "@mui/material";
import ImageUploadOptions from "../../molecules/ImageUploadOptions/index";
import LockIcon from "../../../assets/icons/lock-icon.png";
import ThreeDots from "../../../assets/icons/more.png";
import BoxIcon from "../../../assets/icons/Boxplus-icon.png";
import SlideBackground from "../../utils/templates/SlideBackground";
import FontIcon from "../../../assets/icons/font-sizeIcon.png";
import FontAlignment from "../../../assets/icons/alignment.png";
import BoldDropdown from "../../../assets/icons/Bold.png";
import Alignment from "../../../assets/icons/alignmentIcon.png";
import Color from "../../../assets/icons/colorIcon.png";
import { PERSONAL_DETAILS } from "../../utils/constants";
import { getPesronalDetailsSlideData, updateAgeDetails, updateHobbies } from "../../../services/services";
import { UserContext } from "../../utils/context";
import theme from "../../../theme/theme";

const container = {
  marginTop: "1.5rem",
  marginLeft: "2rem",
};

const inputBox = {
  borderRadius: "0%",
  boxSizing: "border-box",
};
const borderDashed = {
  border: `2px dashed #7E64F3`,
  width: "fit-content",
  padding: "0.125rem 0.3125rem 0.0625px 0.3125rem",
};
const boxOneStyle = {
  position: "absolute",
  top: "13.4375rem",
};
const boxTwoStyle = {
  position: "absolute",
  top: "16.25rem",
};
const inputStyle = {
  color:theme.palette.text.primary,
  fontWeight:400,
  fontSize:"16px",
  lineHeight:"24px"
};
export type PersonalDetailsProps = {
  content: string;
};
const PersonalDetails: React.FC<PersonalDetailsProps> = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState(props.content);
  const [visible, setVisible] = useState(false);
  const [showUploadOption1, setShowUploadOption1] = useState(false);
  const [showUploadOption2, setShowUploadOption2] = useState(false);
  const [textEdit, setTextEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const[userName,setUserName]=useState("");
  const[gender,setGender]=useState("");
  const[phoneNumber,setPhoneNumber]=useState("");
  const[designation,setDesignation]=useState("")
  const { userId } = useContext(UserContext);
  useEffect(() => {
    getPesronalDetailsSlideData(userId).then((data) => {
      const firstName = data.profileData.firstName;
      const lastName = data.profileData.lastName;
      setUserName(firstName + " " + lastName);
      setDesignation(data.preferencesData.designation);
      setPhoneNumber(data.profileData.mobileNumber)
      setGender(data.profileData.gender)
      setValue1(`Age - ${data.profileData.age}`);
      setValue2(`${data.Hobbie[0]} - ${data.Hobbie[1]}`);
      setLoading(false);
    });
  }, []);
  const showHoverBoxOnEdit = () => {
    if (textEdit && showUploadOption2) {
      setTextEdit(false);
      setShowUploadOption2(false);
    } else {
      setTextEdit(true);
      setShowUploadOption2(true);
    }
  };
  const showOptions1 = (_e: any) => {
    if (showUploadOption1) {
      setShowUploadOption1(false);
    } else {
      setShowUploadOption1(true);
    }
  };
  const addSection = (_e: any) => {
    setVisible(true);
    setShowUploadOption1(false);
    setShowUploadOption2(true);
    setTextEdit(true);
  };
  const containsValidKeyAndValue = (item: string) => {
    if (
      item.includes("-") &&
      item.split("-")[0].trim() &&
      item.split("-")[1].trim()
    )
      return true;
    return false;
  };
  const onDataChange = async(value: string, isNewVal: boolean, fn: any) => {
    fn(value);
    if (containsValidKeyAndValue(value)) {
      if (isNewVal) {
        updateHobbies(
          [value.split("-")[0].trim(), value.split("-")[1].trim()],
          userId
        );
      } else {
      await  updateAgeDetails(
          value.split("-")[1].trim(),
          userId
        );
      }
    }
  };
  const options = [
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
      action: addSection,
    },
    {
      src: LockIcon,
    },
    {
      src: ThreeDots,
    },
  ];
  const comp = (
    <>
      <Grid container direction="column" rowSpacing="0.75rem" sx={container}>
        <Grid item>
          <Typography variant="subtitle1">{userName}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">{`Designation - ${designation}`}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">{`Mobile number - ${phoneNumber}`}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">{`Gender - ${gender}`}</Typography>
        </Grid>
        <Grid item>
          <Box sx={boxOneStyle}>
            {showUploadOption1 ? (
              <ImageUploadOptions
                options={options}
                data-testid="upload-options"
              />
            ) : (
              <></>
            )}
          </Box>
          {showUploadOption1 ? (
            <Box sx={[inputBox, borderDashed]}>
              <InputBase
                sx={inputStyle}
                data-testid="input1"
                value={value1}
                onClick={(e) => showOptions1(e)}
                onChange={(e: any) => {
                  onDataChange(e.target.value, false, setValue1);
                }}
              />
            </Box>
          ) : (
            <Box sx={inputBox}>
              <InputBase
                sx={inputStyle}
                data-testid="input1"
                value={value1}
                onClick={(e) => showOptions1(e)}
              />
            </Box>
          )}
        </Grid>
        <Grid item>
          <Box sx={boxTwoStyle}>
            {showUploadOption2 ? (
              <ImageUploadOptions
                options={options}
                data-testid="upload-options"
              />
            ) : (
              <></>
            )}
          </Box>
          {visible && (
            <InputBase
              sx={[textEdit?borderDashed:{},inputStyle]}
              onClick={showHoverBoxOnEdit}
              value={value2}
              onChange={(e: any) => {
                textEdit?onDataChange(e.target.value, true, setValue2):console.log("No Change");
              }}
              data-testid="input2"
            />
          )}
        </Grid>
      </Grid>
    </>
  );
  if (loading) {
    return <h1 data-testid="loading">Loading</h1>;
  }
  return <SlideBackground title={PERSONAL_DETAILS} children={comp} />;
};

export default PersonalDetails;
