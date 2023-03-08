import React, { useContext, useEffect, useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import theme from "../../../theme/theme";
import {
  stakeHolderToolbarIconsSrc,
} from "../../utils/constants";
import { Icon, pushToStakeIcons, sortAccordingToPostion } from "../../utils/mapperFunction";
import { makeStyles } from "@mui/styles";
import { getAllStakeHolderIcons } from "../../../services/services";
import { UserContext } from "../../utils/context";

export interface StakeholderToolBarProps {
  description: string;
  gridMenuOpen: boolean;
  imageGridAnchorEl: null | HTMLElement;
  handleImageGridMenuClose: () => void;
  emitClick: () => void;
}

const classes = makeStyles(() => ({
  menuStyles: {
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
    padding: "0px",
    "& .MuiList-root": {
      padding: "0",
    },
  },
  menuItemStyles: {
    display: "inline-block",
    backgroundColor: theme.palette.structural[300],
    margin: "6px",
    padding: "4px",
    width: "28px",
    height: "28px",
    "&:hover": {
      backgroundColor: theme.palette.structural[300],
    },
  },
}));

const StakeholderToolBar: React.FC<StakeholderToolBarProps> = ({
  gridMenuOpen,
  imageGridAnchorEl,
  description,
  handleImageGridMenuClose,
  emitClick,
}) => {
  const { userId } = useContext(UserContext);

  const [stakeHolderIcons, setStakeHolderIcons] = useState<Icon[]>([]); 
  const [loading, setIsLoading] = useState<boolean>(true);
  const [value,setValue]=useState(0);
  useEffect(() => {
    getAllStakeHolderIcons(userId).then((data) => {
      const stortedData = sortAccordingToPostion(data);
      setStakeHolderIcons(stortedData);
      setIsLoading(false);
    });
  }, [value]);
  const styles = classes();
  if(loading){
    return <h1 data-testid="loading">Loading</h1>;
  }
  return (
    <Menu
      data-testid="stakeholderToolBar"
      BackdropProps={{
        invisible: true,
        style: { boxShadow: "none" },
        title: "stakeholderToolBarBackdrop",
      }}
      // id={`stakeHolderGrid+${index}`}
      // aria-labelledby={`stakeHolderGrid+${index}`}
      anchorEl={imageGridAnchorEl}
      open={gridMenuOpen}
      className={styles.menuStyles}
      onClose={() => handleImageGridMenuClose()}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: 55,
        horizontal: 2,
      }}
      PaperProps={{
        style: {
          boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
        },
      }}
    >
      {stakeHolderToolbarIconsSrc.map((iconSrc, index) => {
        return (
          <MenuItem
            data-testid={`stakeholderToolBarItem${index}`}
            onClick={async (_e:any) => {
              if (index === 1) {
                emitClick();
                const stakeHolderIconValue = stakeHolderIcons.filter(
                  (i) => i.description === description
                );
                await pushToStakeIcons(stakeHolderIconValue[0],stakeHolderIcons,userId);
                setValue(s=>s+1)                
              }
            }}
            key={index}
            className={styles.menuItemStyles}
          >
            <img src={iconSrc} />
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default StakeholderToolBar;
