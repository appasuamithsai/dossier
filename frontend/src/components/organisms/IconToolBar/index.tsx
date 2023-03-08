import { Menu, MenuItem, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import theme from "../../../theme/theme";
import moreIcon from "../../../assets/icons/more1.svg";
import colorIcon from "../../../assets/icons/color.svg";
import ChangeIconMenu from "../ChangeIconMenu";
import { makeStyles } from "@mui/styles";
import { Icon } from "../../utils/mapperFunction";
import { updateIconColor } from "../../../services/services";
import { UserContext } from "../../utils/context";
export interface IconToolBarProps {
  icon: Icon;
  index: number;
  emitClick: () => void;
  imageMenuOpen: boolean;
  imageAnchorEl: null | HTMLElement;
  handleImageMenuClose: () => void;
  setImageClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const classes = makeStyles(() => ({
  menuStyles: {
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
    padding: "0px",
    "& .MuiList-root": {
      padding: "0",
    },
  },
  changeIconStyle: {
    display: "inline-block",
    backgroundColor: theme.palette.structural[300],
    margin: "6px",
    padding: "4px",
    "&:hover": {
      backgroundColor: theme.palette.structural[300],
    },
  },
  menuItemIconStyle: {
    display: "inline-block",
    backgroundColor: theme.palette.structural[300],
    margin: "6px",
    padding: "4px",
    width: "28px",
    height: "28px",
    ":hover": {
      backgroundColor: theme.palette.structural[300],
    },
  },
}));

const IconToolBar: React.FC<IconToolBarProps> = ({
  index,
  icon,
  imageAnchorEl,
  imageMenuOpen,
  handleImageMenuClose,
  setImageClicked,
  emitClick,
}) => {
  const { userId } = useContext(UserContext);
  const [iconListAnchorEl, setIconListAnchorEl] =
    useState<null | HTMLElement>(null);
  const iconListMenuOpen = Boolean(iconListAnchorEl);
  const handleChangeIconClick = (event: React.MouseEvent<HTMLElement>) => {
    setIconListAnchorEl(event.currentTarget);
  };
  const handleChangeIconMenuClose = () => {
    setIconListAnchorEl(null);
  };
  const getFilter = () => {
    if (!icon.isColored) {
      return `invert(68%) sepia(54%) saturate(3920%) hue-rotate(211deg) brightness(95%) contrast(99%)`;
    } else {
      return "";
    }
  };
  const styles = classes();
  return (
    <>
      <Menu
        id="imageMenu"
        data-testid="iconToolBar"
        className={styles.menuStyles}
        open={imageMenuOpen}
        anchorEl={imageAnchorEl}
        onClose={() => {
          handleImageMenuClose();
          setImageClicked(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: 55,
          horizontal: "left",
        }}
        BackdropProps={{
          invisible: true,
          style: { boxShadow: "none" },
          title: "iconToolBarBackdrop",
        }}
        PaperProps={{
          style: {
            boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
          },
        }}
      >
        <MenuItem
          data-testid="iconToolBarItem0"
          onClick={(e) => {
            handleChangeIconClick(e);
          }}
          className={styles.changeIconStyle}
        >
          <Typography variant="caption2">Change Icon</Typography>
        </MenuItem>
        <MenuItem
          data-testid="iconToolBarItem1"
          onClick={() => {
            emitClick();
            updateIconColor(icon,userId);
          }}
          key={index}
          className={styles.menuItemIconStyle}
        >
          <img
            style={{
              filter: getFilter(),
            }}
            src={colorIcon}
          />
        </MenuItem>
        <MenuItem
          data-testid="iconToolBarItem2"
          key={index}
          className={styles.menuItemIconStyle}
        >
          <img src={moreIcon} />
        </MenuItem>
      </Menu>
      <ChangeIconMenu
        icon={icon}
        iconListMenuOpen={iconListMenuOpen}
        iconListAnchorEl={iconListAnchorEl}
        handleChangeIconMenuClose={handleChangeIconMenuClose}
        emitClick={emitClick}
      ></ChangeIconMenu>
    </>
  );
};

export default IconToolBar;
