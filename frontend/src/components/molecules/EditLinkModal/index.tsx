import React, { useState } from "react";
import { Grid, Icon, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CloseIcon from "../../../assets/icons/closeIcon.svg";
import theme from "../../../theme/theme";
import Button from "../../atoms/Button";

export interface EditLinkModalProps {
  link: string;
  onUpdate?: () => void;
  onClose?: any;
  pullDataEditLinkModel?: any;
}

const classes = makeStyles(() => ({
  modalStyles: {
    width: "31.875rem",
    height: "17rem",
    padding: "2rem",
    borderRadius: "0.625rem",
    backgroundColor: theme.palette.structural[50],
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
  },
  textGridStyles: {
    width: "26.875rem",
    height: "2.25rem",
    marginTop: "0.75rem",
    padding: "0",
    paddingLeft: "1rem",
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.grey[100]}`,
    backgroundColor: theme.palette.grey[100],
    borderRadius: "0.375rem",
    "&:focus": {
      outline: "none",
      border: `1px solid ${theme.palette.grey[100]}`,
    },
  },
  headerStyles: {
    display: "flex",
    justifyContent: "space-between",
  },
  descText: { marginTop: "2rem", color: "#5A5766" },
  iconGrid: {
    width: "1.25rem",
    height: "1.25rem",
    padding: "0",
  },
  editLinkGrid: {
    width: "9.125rem",
    height: "1.5rem",
  },
  closeIconStyle: {
    width: "1.25rem",
    height: "1.25rem",
  },
  buttonGrid: { display: "flex", justifyContent: "end", marginTop: "3.125rem" },
  button: {
    color: "white",
    width: "10.6875rem",
    height: "2.25rem",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const EditLinkModal: React.FC<EditLinkModalProps> = ({
  link,
  onClose,
  pullDataEditLinkModel,
}) => {
  const [value, setValue] = useState<string>(link);
  const styles = classes();
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    localStorage.setItem("Link", value);
  };
  const onClickUpdate = () => {
    setValue(localStorage.getItem("Link")!);
    pullDataEditLinkModel(value);
  };
  return (
    <Grid className={styles.modalStyles} data-testid="EditLinkModal">
      <Grid className={styles.headerStyles} data-testid="header">
        <Grid className={styles.editLinkGrid}>
          <Typography variant="body1"> Edit Link</Typography>
        </Grid>
        <Grid className={styles.iconGrid}>
          <Icon>
            <img
              className={styles.closeIconStyle}
              src={CloseIcon}
              onClick={onClose}
              data-testid="closeEditLink"
            />
          </Icon>
        </Grid>
      </Grid>
      <Typography
        variant="overline"
        display={"inline-block"}
        className={styles.descText}
        textTransform="none"
        data-testid="Description"
      >
        Make changes to the link based on your preference.
      </Typography>
      <input
        data-testid="TextInputField"
        className={styles.textGridStyles}
        type={"text"}
        defaultValue={link}
        onChange={(e) => onChangeHandler(e)}
      ></input>
      <Grid className={styles.buttonGrid}>
        <Button
          data-testid="updateButton"
          variant="contained"
          className={styles.button}
          onClick={onClickUpdate}
        >
          Update & copy Link
        </Button>
      </Grid>
    </Grid>
  );
};

export default EditLinkModal;
