import { Menu, MenuItem } from "@mui/material";
import React, { useContext } from "react";
import theme from "../../../theme/theme";
import searchBar from "../../../assets/icons/searchbar.svg";
import { dropDownIconGroups } from "../../utils/constants";
import { makeStyles } from "@mui/styles";
import { updateNewIconChange } from "../../../services/services";
import { Icon } from "../../utils/mapperFunction";
import { UserContext } from "../../utils/context";

export interface ChangeIconMenuProps {
  icon: Icon;
  iconListMenuOpen: boolean;
  iconListAnchorEl: null | HTMLElement;
  handleChangeIconMenuClose: () => void;
  emitClick: () => void;
}

const classes = makeStyles(() => ({
  menuPaperStyles: {
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
    marginTop: "10px",
    overflow: "visible",
    mt: 1.5,
    padding: "0px",
    "& .MuiList-root": {
      padding: "0px",
    },
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
  searchBarStyles: {
    padding: "0",
    marginTop: "8px",
    marginLeft: "10px",
    boxShadow: "none",
    "& .MuiMenuItem-root": {
      padding: "0",
    },
    "&:hover": {
      background: theme.palette.structural[50],
    },
  },
  iconGroupStyles: {
    padding: "10px",
    "&:hover": {
      background: theme.palette.structural[50],
    },
  },
}));

const ChangeIconMenu: React.FC<ChangeIconMenuProps> = ({
  icon,
  iconListMenuOpen,
  iconListAnchorEl,
  handleChangeIconMenuClose,
  emitClick,
}) => {
  const styles = classes();
  const { userId } = useContext(UserContext);

  return (
    <Menu
      id="iconListMenu"
      data-testid="changeIconMenu"
      open={iconListMenuOpen}
      anchorEl={iconListAnchorEl}
      onClose={() => {
        handleChangeIconMenuClose();
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: -55,
        horizontal: 5,
      }}
      BackdropProps={{
        invisible: true,
        style: { boxShadow: "none" },
        title: "changeIconMenuBackdrop",
      }}
      classes={{ paper: styles.menuPaperStyles }}
      PaperProps={{
        style: {
          boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
        },
      }}
    >
      <MenuItem disableRipple className={styles.searchBarStyles}>
        <img src={searchBar}></img>
      </MenuItem>
      {dropDownIconGroups.map((groupSrc, index) => {
        return (
          <MenuItem
            data-testid={`changeIconMenuItem${index}`}
            onClick={() => {
              if (index === 0) {
                emitClick();
                icon.name = "award";
                icon.description = "Received Appreciations";
                updateNewIconChange(icon,userId);
              }
            }}
            disableTouchRipple
            className={styles.iconGroupStyles}
          >
            <img src={groupSrc} />
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default ChangeIconMenu;
