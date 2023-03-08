import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import theme from "../../../theme/theme";
import Steps from "../../../assets/images/steps.png";
import ThreeDots from "../../../assets/icons/more.png";
import BoxIcon from "../../../assets/icons/Boxplus-icon.png";
import {
  EXPERIENCE_DETAILS,
  EXPERIENCE_DETAILS_SLIDE,
} from "../../utils/constants";
import FontIcon from "../../../assets/icons/font-sizeIcon.png";
import FontAlignment from "../../../assets/icons/alignment.png";
import BoldDropdown from "../../../assets/icons/Bold.png";
import Alignment from "../../../assets/icons/alignmentIcon.png";
import DeleteIcon from "../../../assets/icons/deleteIcon.png";
import VectorIcon from "../../../assets/icons/Vector.png";
import Refresh from "../../../assets/icons/Refresh.png";
import Color from "../../../assets/icons/colorIcon.png";
import SlideBackground from "../../utils/templates/SlideBackground";
import ToolBarOption from "../../molecules/ToolBarOptions";
import {
  getSlideContent,
} from "../../../services/services";
import { InfographyDeleteContext, UserContext } from "../../utils/context";
const imgBox = {
  borderRadius: "0%",
  paddingLeft: "0.625rem",
  paddingRight: "0.625rem",
  paddingTop: "1.375rem",
  paddingBottom: "1.375rem",
  boxSizing: "border-box",
};
const borderDashed = {
  border: `2px dashed #7E64F3`,
};
const contentTypo = {
  fontFamily: "Roboto",
  fontSize: "7px",
  fontWeight: 500,
  lineHeight: "12px",
  letterSpacing: "0em",
  textAlign: "left",
  color: `${theme.palette.text.disabled}`,
};
const gridStyleOne = {
  width: "36.3124rem",
  height: "4.75rem",
  marginTop: "2.5rem",
  marginLeft: "3.3125rem",
  marginRight: "2.5rem",
  marginBottom: "0.625rem",
};
const contentStyle = {
  whiteSpace: "pre-line",
  marginTop: "10px",
};
const ExperienceDetalis: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { visible, setVisible } = useContext(InfographyDeleteContext);
  const open = Boolean(anchorEl);
  const [experience, setExperience] = useState([]);
  const { userId } = useContext(UserContext);
  useEffect(() => {
    getSlideContent(userId, EXPERIENCE_DETAILS_SLIDE)
      .then((data: any) => {
        setExperience(data);
        setLoading(false);
      })
      .catch((err) => err);
  }, []);
  const onGridOpen = (ea: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(ea.currentTarget);
  };
  const onGridClose = () => {
    setAnchorEl(null);
  };
  const makeItInvisble = (_e: any) => {
    if (open) {
      setAnchorEl(null);
      setVisible(true);
    }
  };
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
      src: BoxIcon,
    },
    {
      src: VectorIcon,
    },
    {
      src: Refresh,
    },
    {
      src: Color,
    },
    {
      src: DeleteIcon,
      action: makeItInvisble,
    },

    {
      src: ThreeDots,
    },
  ];
  if (loading) {
    return <h2 data-testid="loading">loading</h2>;
  }
  const comp = (
    <>
      <Grid container direction="column">
        <Grid item>
          <Box sx={gridStyleOne}>
            <Box sx={{ display: visible ? "none" : "block" }}>
              <ToolBarOption
                imageUploadOptionsProp={{
                  options: optionsMenu,
                }}
                gridMenuOpen={open}
                imageGridAnchorEl={anchorEl}
                handleImageGridMenuClose={onGridClose}
              />
              {open ? (
                <Box sx={[imgBox, borderDashed]} onClick={() => onGridClose()}>
                  <img data-testid="steps" src={Steps} />
                </Box>
              ) : (
                <Box sx={imgBox} onClick={onGridOpen}>
                  <img data-testid="steps" src={Steps} />
                </Box>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            sx={contentStyle}
          >
            {experience.map((e) => {
              return (
                <Grid item key={e} data-testid="experience">
                  <Typography sx={contentTypo}>{e}</Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
  return <SlideBackground title={EXPERIENCE_DETAILS} children={comp} />;
};
export default ExperienceDetalis;
