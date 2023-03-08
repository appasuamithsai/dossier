import {
  Grid,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import LogoName from "../../../assets/icons/logoDossierLogo.png";
import notificationIcon from "../../../assets/icons/notification.svg";
import helpIcon from "../../../assets/icons/help.svg";
import Avatar from "../../atoms/Avatar";
import User from "../../../../public/assets/images/user.svg";
import Popup from "../../molecules/Popup";

const classes = makeStyles(() => ({
  rootGrid: {
    height: "4rem",
    display: "flex",
    justifyContent: "space-between",
  },
  imageStyles: {
    marginTop: "21px",
    marginLeft: "24px",
  },
  iconStyles: {
    marginRight: "16px",
    marginTop: "20px",
    width: "24px",
    height: "24px",
  },
  avatarStyle: {
    padding: "4px",
    marginTop: "10px",
    marginRight: "14px",
  },
}));

const Header: React.FC = () => {
  const styles = classes();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleOnClickAvatar = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setAnchorEl(e.currentTarget);
  };
  const handleOnClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Grid className={styles.rootGrid} data-testid="header">
        <Grid>
          <img className={styles.imageStyles} src={LogoName}></img>
        </Grid>
        <Grid sx={{ display: "flex" }}>
          <img
            className={styles.iconStyles}
            src={notificationIcon}
            alt="notificationIcon"
          ></img>
          <img
            className={styles.iconStyles}
            src={helpIcon}
            alt="helpIcon"
          ></img>

          <Avatar
            data-testid="avatar"
            onClick={(e) => {
              handleOnClickAvatar(e);
            }}
            className={styles.avatarStyle}
            src={User}
            variant="rounded"
          ></Avatar>
        </Grid>
      </Grid>

      <Paper>
        <Popup
          anchorEl={anchorEl}
          handleOnClose={handleOnClose}
          open={open}
        ></Popup>
      </Paper>
    </>
  );
};

export default Header;
