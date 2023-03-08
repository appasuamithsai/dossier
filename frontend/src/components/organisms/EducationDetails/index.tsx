import React, { useContext, useEffect, useState } from "react";
import { Box, Dialog, Grid, IconButton, Typography } from "@mui/material";
import LockIcon from "../../../assets/icons/lock-icon.png";
import ThreeDots from "../../../assets/icons/more.png";
import BoxIcon from "../../../assets/icons/Boxplus-icon.png";
import EditIcon from "../../../assets/icons/edit.png";
import SlideBackground from "../../utils/templates/SlideBackground";
import {
  EDUCATION_ARRAY,
  EDUCATION_DETAILS,
  EDUCATION_DETAILS_SLIDE,
} from "../../utils/constants";
import CircleImage from "../../../assets/images/circle.png";
import AddCertificate from "../AddCertificate";
import { convertDateToMonthAndYear } from "../../utils/mapperFunction";
import { makeStyles } from "@mui/styles";
import theme from "../../../theme/theme";
import ToolBarOption from "../../molecules/ToolBarOptions";
import {
  getSlideContent,
  upDateEducationDetails,
} from "../../../services/services";
import { UserContext } from "../../utils/context";
export interface EducationUniversityDetails {
  id: number;
  image: any;
  collegeName: string;
  degree: string;
  startDate: string;
  endDate: string;
}
const container = {
  marginTop: "0.6875rem",
  marginLeft: "1.75rem",
  width: "fit-content",
};
const gridStyle = {
  "& .css-zcxndt ": {
    display: "flex",
    justifyContent: "center",
  },
};
const borderDashed = {
  border: `2px dashed #7E64F3`,
  padding: "0.375rem",
};
const classes = makeStyles(() => ({
  iconButtonStyles: {
    height: "70px",
    width: "70px",
    backgroundColor: theme.palette.structural[300],
    "&:hover": {
      backgroundColor: theme.palette.structural[300],
    },
  },
  imageBoxStyles: {
    height: "44px",
    width: "59px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
  },
}));
const EducationDetails: React.FC = () => {
  const [education, setEducation] = useState(EDUCATION_ARRAY);
  const [form, setForm] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [s, setS] = useState(0);
  const [currentlyClicked, setCurrentlyClicked] = useState(-1);
  const [onClicked, setOnClicked] = useState(-1);
  let isMounted = true;
  const { userId } = useContext(UserContext);
  useEffect(() => {
    getSlideContent(userId, EDUCATION_DETAILS_SLIDE)
      .then((data) => {
        if (isMounted) {
          setEducation(data);
        }
      })
      .catch(({ response }) => {
        console.warn(response.status + "(user not found)");
      });
    return () => {
      isMounted = false;
    };
  }, [s]);
  function updateEducationDetails(educationDetail: EducationUniversityDetails) {
    upDateEducationDetails(
      educationDetail,
      () => setS(s + 1),
      education,
      userId
    );
  }

  const styles = classes();

  const comp = (
    <>
      <Grid
        container
        direction="column"
        rowGap="1.3125rem"
        sx={container}
        data-testid="grid1"
      >
        {education.map((e: EducationUniversityDetails, index: number) => {
          const open = Boolean(anchorEl);
          const onFormOpen = (ea: React.MouseEvent<HTMLElement>) => {
            setCurrentlyClicked(parseInt(ea.currentTarget.id));
            setOnClicked(parseInt(ea.currentTarget.id));
            setAnchorEl(ea.currentTarget);
          };
          const onFormClose = () => {
            setAnchorEl(null);
            setOnClicked(-1);
          };
          const showForm = (_e: any) => {
            setForm(true);
            setAnchorEl(null);
            setOnClicked(-1);
          };
          const options = [
            {
              src: EditIcon,
              action: showForm,
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
          return (
            <>
              <Dialog data-testId maxWidth={false} open={form}>
                <AddCertificate
                  onSubmit={(item: EducationUniversityDetails) => {
                    const educationDetail = {
                      id: currentlyClicked,
                      image: item.image,
                      collegeName: item.collegeName,
                      degree: item.degree,
                      startDate: convertDateToMonthAndYear(item.startDate),
                      endDate: convertDateToMonthAndYear(item.endDate),
                    };
                    updateEducationDetails(educationDetail);
                    setForm(false);
                  }}
                  setForm={setForm}
                />
              </Dialog>
              <ToolBarOption
                imageUploadOptionsProp={{
                  options: options,
                }}
                gridMenuOpen={open}
                imageGridAnchorEl={anchorEl}
                handleImageGridMenuClose={onFormClose}
              />
              <Grid
                container
                columnSpacing="1rem"
                direction="row"
                onClick={onFormOpen}
                sx={onClicked === index ? borderDashed : {}}
                data-testid={`card${index}`}
                id={`${index}card`}
              >
                <Grid item sx={gridStyle}>
                  <IconButton
                    disableTouchRipple
                    className={styles.iconButtonStyles}
                  >
                    <Box
                      className={styles.imageBoxStyles}
                      sx={{
                        backgroundImage: CircleImage,
                      }}
                    >
                      <img src={e.image} />
                    </Box>
                  </IconButton>
                </Grid>
                <Grid item>
                  <Grid container direction="column" rowSpacing="0.25rem">
                    <Grid item>
                      <Typography
                        variant="body1"
                        sx={{ color: theme.palette.text.primary }}
                      >
                        {e.collegeName}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="overline2"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        {e.degree}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="overline2"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        {e.startDate}-{e.endDate}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );

  return <SlideBackground title={EDUCATION_DETAILS} children={comp} />;
};

export default EducationDetails;
