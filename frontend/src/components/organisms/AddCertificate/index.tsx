import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import AutoCompleteDropdown from "../../molecules/AutoCompleteDropdown";
import ResponsiveDatePickers from "../../molecules/DatePicker";
import {
  ADD_CERTIFICATE,
  UNIVERSITY_ARRAY,
  DEGREE_ARRAY,
  FIELD_OF_STUDY,
} from "../../utils/constants";
import CLOSE from "../../../assets/images/close2.png";
import Button from "../../atoms/Button";
import { EducationUniversityDetails } from "../EducationDetails";
import { getImageSrc } from "../../utils/mapperFunction";
import theme from "../../../theme/theme";
interface AddCertificateProps {
  onSubmit: (item: EducationUniversityDetails) => void;
  setForm: (item: boolean) => void;
}
const gridStyle = {
  padding: "2rem",
};
const root = {
  width: "43rem",
  borderRadius: "10px",
  backgroundColor: "white",
};
const boxStyle = {
  display: "flex",
  width: "100%",
  height: "3.125rem",
  boxShadow: "0px 2px 4px 0px #0000001F",
};
const imageBox = {
  marginLeft: "30.75rem",
  marginTop: "0.8125rem",
  marginRight: "2rem",
  cursor: "pointer",
};
const typoStyle = {
  color: theme.palette.text.secondary,
  letterSpacing: "normal",
  marginLeft: "2rem",
  marginTop: "0.8125rem",
};
const boxStyleTwo = {
  marginBottom: "0.375rem",
};
const btnTypo = {
  color: "white",
  textTransform: "none",
  fontWeight: "600",
};
const btnGridStyle = {
  marginTop: "2.4375rem",
  marginLeft: "33.8125rem",
};
const fontColor = {
  color: theme.palette.text.secondary,
};
const AddCertificate: React.FC<AddCertificateProps> = (AddCertificateProps) => {
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [submit, setSubmit] = useState(false);
  const checkAll = () => {
    if (
      university != "" &&
      degree != "" &&
      fieldOfStudy != "" &&
      startDate != "" &&
      endDate != ""
    ) {
      setSubmit(true);
    }
  };
  const onUnviersityChange = (_e: any, newValue: string) => {
    setUniversity(newValue);
    checkAll();
  };
  const onDegreeChange = (_e: any, newValue: any) => {
    setDegree(newValue);
    checkAll();
  };
  const onFieldOfStudyChange = (_e: any, newValue: any) => {
    setFieldOfStudy(newValue);
    checkAll();
  };
  return (
    <Grid container sx={root}>
      <Grid item>
        <Box sx={boxStyle}>
          <Typography sx={typoStyle}>{ADD_CERTIFICATE}</Typography>
          <Box
            sx={imageBox}
            onClick={(_e: any) => {
              AddCertificateProps.setForm(false);
            }}
          >
            <img src={CLOSE} alt="close" />
          </Box>
        </Box>
      </Grid>
      <Grid item sx={gridStyle}>
        <Grid container rowSpacing="1rem">
          <Grid item>
            <Box sx={boxStyleTwo}>
              <Typography variant="overline2" sx={{ color: fontColor }}>
                Name of the University
              </Typography>
            </Box>
            <AutoCompleteDropdown
              onChange={onUnviersityChange}
              label="Search University Here"
              data-testid="unviersityChange"
              item_array={UNIVERSITY_ARRAY}
            />
          </Grid>
          <Grid item>
            <Box sx={boxStyleTwo}>
              <Typography variant="overline2" sx={{ color: fontColor }}>
                Degree
              </Typography>
            </Box>
            <AutoCompleteDropdown
              onChange={onDegreeChange}
              label="Eg:Bachelor's"
              data-testid="degreeChange"
              item_array={DEGREE_ARRAY}
            />
          </Grid>
          <Grid item>
            <Box sx={boxStyleTwo}>
              <Typography variant="overline2" sx={{ color: fontColor }}>
                Field of study
              </Typography>
            </Box>
            <AutoCompleteDropdown
              onChange={onFieldOfStudyChange}
              label="Eg: Pharmaueticals"
              data-testid="fieldOfStudyChange"
              item_array={FIELD_OF_STUDY}
            />
          </Grid>
          <Grid item>
            <Grid container columnGap="1.25rem">
              <Grid item>
                <Box sx={boxStyleTwo}>
                  <Typography variant="overline2" sx={{ color: fontColor }}>
                    Start year
                  </Typography>
                </Box>
                <ResponsiveDatePickers
                  setChanged={setStartDate}
                  date={new Date()}
                  label="MM/YYYY"
                  checkAll={checkAll}
                />
              </Grid>
              <Grid item>
                <Box sx={boxStyleTwo}>
                  <Typography variant="overline2" sx={{ color: fontColor }}>
                    End year
                  </Typography>
                </Box>
                <ResponsiveDatePickers
                  setChanged={setEndDate}
                  date={new Date()}
                  label="MM/YYYY"
                  checkAll={checkAll}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={btnGridStyle}>
            <Button
              variant="contained"
              onClick={(_e: any) => {
                const item: EducationUniversityDetails = {
                  id: 0,
                  image: getImageSrc(university),
                  collegeName: university,
                  degree: degree,
                  startDate: startDate,
                  endDate: endDate,
                };
                return AddCertificateProps.onSubmit(item);
              }}
              data-testid="button"
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

export default AddCertificate;
