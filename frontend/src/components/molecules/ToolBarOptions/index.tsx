import React from "react";
import { Menu, MenuItem } from "@mui/material";
import theme from "../../../theme/theme";
import { makeStyles } from "@mui/styles";
import { ImageUploadOptionsProp } from "../ImageUploadOptions";

export interface StakeholderToolBarProps {
  imageUploadOptionsProp: ImageUploadOptionsProp;
  gridMenuOpen: boolean;
  imageGridAnchorEl: null | HTMLElement;
  handleImageGridMenuClose: () => void;
}

const classes = makeStyles(() => ({
  menuStyles: {
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
    padding: "0px",
    "& .MuiList-root": {
      padding: "0",
      height:'45px'
    },
  },
  menuItemStyles: {
    display: "inline-block",
    backgroundColor: theme.palette.structural[300],
    margin: "6px",
    padding: "3px",
    height: "28px",
    "&:hover": {
      backgroundColor: theme.palette.structural[300],
    },
  },
}));
const imageStyle = {
  height: "18px",
  width: "18px",
};
const ToolBarOption: React.FC<StakeholderToolBarProps> = ({
  imageUploadOptionsProp,
  gridMenuOpen,
  imageGridAnchorEl,
  handleImageGridMenuClose,
}) => {
  const styles = classes();
  return (
    <Menu
      data-testid="toolBarOptions"
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
      {imageUploadOptionsProp.options.map((option, index) => {
        return (
          <MenuItem
            key={index}
            className={styles.menuItemStyles}
            onClick={e=>option.action(e)}
            data-testid={"icon"+index}
          >
            {option.imageStyle !== undefined ? (
                <img src={option.src} {...option.imageStyle} alt={`image${index}`}/>
              ) : (
                <img src={option.src} {...imageStyle} alt={`image${index}`}/>
              )
            }
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default ToolBarOption;
