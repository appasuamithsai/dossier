import { Box, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import placeHolder from "../../../assets/icons/placeholder.svg";
import theme from "../../../theme/theme";
import StakeholderToolBar from "../StakeholderToolBar";
import IconToolBar from "../IconToolBar";
import { makeStyles } from "@mui/styles";
import { Icon } from "../../utils/mapperFunction";
export interface IconWithBgAndTypographyProps {
  icon: Icon;
  iconSrc: string;
  index: number;
  emitClick: () => void;
}

const classes = makeStyles(() => ({
  mainGridStyles: {
    width: "131px",
    height: "134px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconButtonStyles: {
    height: "86px",
    width: "86px",
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
  typographyBox: {
    height: "36px",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  typographyStyle: {
    textAlign: "center",
  },
}));

const IconWithBgAndTypography: React.FC<IconWithBgAndTypographyProps> = ({
  icon,
  iconSrc,
  index,
  emitClick,
}) => {
  const styles = classes();
  const [isImageClicked, setImageClicked] = useState(false);
  const [isRootClicked, setRootClicked] = useState(false);
  const [imageGridAnchorEl, setImageGridAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [imageAnchorEl, setImageAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const gridMenuOpen = Boolean(imageGridAnchorEl);
  const imageMenuOpen = Boolean(imageAnchorEl);
  const { isColored, description } = { ...icon };

  const handleImageGridClick = (event: React.MouseEvent<HTMLElement>) => {
    setImageGridAnchorEl(event.currentTarget);
  };
  const handleImageGridMenuClose = () => {
    setImageGridAnchorEl(null);
    setRootClicked(false);
  };

  const handleImageClick = (event: React.MouseEvent<HTMLElement>) => {
    setImageAnchorEl(event.currentTarget);
  };
  const handleImageMenuClose = () => {
    setImageAnchorEl(null);
  };

  const getImageBackground = () => {
    if (isImageClicked) {
      return `url(${placeHolder})`;
    } else {
      return "";
    }
  };
  const getRootBackground = () => {
    if (isRootClicked) {
      return `3px dashed ${theme.palette.primary.contrastText}`;
    } else {
      return "";
    }
  };
  const getFilter = () => {
    if (isColored) {
      return `invert(68%) sepia(54%) saturate(3920%) hue-rotate(211deg) brightness(95%) contrast(99%)`;
    } else {
      return "";
    }
  };

  return (
    <>
      <Grid
        id={`stakeHolderGrid+${index}`}
        data-testid={`iconWithBgAndTypography${index}`}
        aria-controls={gridMenuOpen ? `stakeHolderGrid+${index}` : undefined}
        aria-haspopup="true"
        aria-expanded={gridMenuOpen ? "true" : undefined}
        onClick={(e) => {
          handleImageGridClick(e);
          setRootClicked((prev) => !prev);
          setImageClicked(false);
        }}
        border={getRootBackground()}
        className={styles.mainGridStyles}
      >
        <IconButton disableTouchRipple className={styles.iconButtonStyles}>
          <Box
            data-testid={`iconWithBgAndTypographyBox${index}`}
            onClick={(e) => {
              e.stopPropagation();
              setImageClicked((prev) => !prev);
              handleImageClick(e);
              setRootClicked(false);
              emitClick();
            }}
            className={styles.imageBoxStyles}
            sx={{
              backgroundImage: getImageBackground(),
            }}
          >
            <img
              style={{
                filter: getFilter(),
              }}
              src={iconSrc}
            />
          </Box>
        </IconButton>
        <Box className={styles.typographyBox}>
          <Typography variant="overline2" className={styles.typographyStyle}>
            {description}
          </Typography>
        </Box>
      </Grid>
      <StakeholderToolBar
        description={description}
        emitClick={emitClick}
        gridMenuOpen={gridMenuOpen}
        handleImageGridMenuClose={handleImageGridMenuClose}
        imageGridAnchorEl={imageGridAnchorEl}
      />
      <IconToolBar
        icon={icon}
        index={index}
        emitClick={emitClick}
        imageMenuOpen={imageMenuOpen}
        imageAnchorEl={imageAnchorEl}
        handleImageMenuClose={handleImageMenuClose}
        setImageClicked={setImageClicked}
      />
    </>
  );
};

export default IconWithBgAndTypography;
