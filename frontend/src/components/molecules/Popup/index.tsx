import { Menu, MenuItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import { userMenu } from "../../utils/constants";
import { webAuth } from "../../../services/webAuth";
import { UserContext } from "../../utils/context";
export interface PopupProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  handleOnClose: () => void;
}

const classes = makeStyles(() => ({
  dialoguBoxStyles: {
    backgroundColor: "transparent",
    padding: "0",
    boxShadow: "none",
    position: "fixed",
    marginLeft: "5px",
    width: "120px",
    minHeight: "0",
  },
  listItemIconSyles: {
    padding: "0",
    height: "14px",
    minWidth: "14px",
    marginRight: "8px",
  },
  listItemStyles: {
    height: "18px",
    padding: "0",
  },
  dialogueContentStyles: {
    margin: "12px",
    padding: "0",
    marginBottom: "0px",
  },
}));

const Popup: React.FC<PopupProps> = ({ open, anchorEl, handleOnClose }) => {
  const { setUserId } = useContext(UserContext);
  const logoutUser = (_e: any, index: number) => {
    if (index === 2) {
      webAuth.logout({
        returnTo: process.env.APP_URL,
        clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      });
      setUserId(null);
    }
  };
  return (
    <Menu
      sx={{
        ".MuiList-root": {
          padding: "0",
        },
      }}
      data-testid="popup"
      open={open}
      anchorEl={anchorEl}
      onClose={handleOnClose}
      anchorOrigin={{
        horizontal: "center",
        vertical: "bottom",
      }}
      transformOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
      BackdropProps={{
        title: "backdrop",
        invisible: true,
      }}
      PaperProps={{
        style: {
          boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
          borderRadius: "6px 0 6px 6px",
          margin: "0",
          padding: "6px",
          height: "102px",
          width: "113px",
        },
      }}
    >
      {userMenu.map((icon, index) => {
        return (
          <MenuItem
            disableRipple
            disableTouchRipple
            key={`popupMenuItem${index}`}
            sx={{
              padding: "6px",
            }}
            onClick={(e: any) => logoutUser(e, index)}
          >
            <img style={{ marginRight: "8px" }} src={icon.src}></img>
            <Typography variant="overline2">{icon.name}</Typography>
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default Popup;
