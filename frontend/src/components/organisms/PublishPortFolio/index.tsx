import React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Button from "../../atoms/Button/index";
import { Box, Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";

const buttonText = {
  color: "white",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "18px",
};
const cancelText = {
  color: "#4C2CD9",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "18px",
};

const publishButtonStyle = {
  borderRadius: "4px",
  width: "82px",
  height: "36px",
};
const publishButtonStyle1 = {
  borderRadius: "4px",
  width: "136px",
  height: "36px",
};

const useStyles = makeStyles(() => ({
  label: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "22px",
    fontWeight: 400,
    color: "#5A5766",
  },
}));
const BootstrapDialog = styled(Dialog)(() => ({
  "& .MuiDialog-root": {
    alignItems: "center",
    justifyContent: "center",
  },
  "& .MuiDialog-container": {
    borderRadius: "10px",
  },
  "& .MuiDialog-paper": {
    backgroundColor: "white",
    borderRadius: "10px",
    height: "288px",
    minWidth: "510px",
  },
}));
export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: any;
}

export const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle {...other} sx={{padding:"0px",top:"32px",left:"35px",position:"absolute"}}>
      <Grid container direction="row">
        <Grid item> {children}</Grid>
        <Grid item sx={{ paddingLeft: "8rem" }}>
            <CloseIcon
              onClick={onClose}
              data-testid="closeIcon"
              sx={{
                cursor: "pointer",
                color: (theme) => theme.palette.grey[500],
              }}
            />
        </Grid>
      </Grid>
    </DialogTitle>
  );
};
export interface PublishPortFolioProps {
  onPublish?: (checked: any) => void;
}
const PublishPortfolio: React.FC<PublishPortFolioProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlePublish = () => {
    setOpen(false);
    return props.onPublish?.(state);
  };
  const [state, setState] = React.useState({
    pdf: false,
    jpeg: false,
    png: false,
    doc: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { pdf, jpeg, png, doc } = state;
  const classes = useStyles();

  return (
    <>
      <Button
        data-testid="publish-button"
        variant="contained"
        sx={[buttonText, publishButtonStyle1]}
        onClick={handleClickOpen}
      >
        Publish
      </Button>

      <BootstrapDialog aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          data-testid="customized-dialog-title"
        >
          <Typography
            sx={{
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "bold",
              color: "#2C2937",
            }}
          >
            How do you want to save your portfolio?
          </Typography>
        </BootstrapDialogTitle>

        <DialogContent sx={{ overflow: "hidden",paddingTop:"0px",marginTop:"45px" }}>
          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormGroup>
                <FormControlLabel
                  classes={{ label: classes.label }}
                  control={
                    <Checkbox
                      checked={pdf}
                      onChange={handleChange}
                      name="pdf"
                      data-testid="checkboxitem"
                    />
                  }
                  label="PDF"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  control={
                    <Checkbox
                      checked={jpeg}
                      onChange={handleChange}
                      name="jpeg"
                    />
                  }
                  label="JPEG"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  control={
                    <Checkbox
                      checked={png}
                      onChange={handleChange}
                      name="png"
                    />
                  }
                  label="PNG"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  control={
                    <Checkbox
                      checked={doc}
                      onChange={handleChange}
                      name="doc"
                    />
                  }
                  label="DOC"
                />
              </FormGroup>
            </FormControl>
          </Box>{" "}
        </DialogContent>
        <DialogActions sx={{marginBottom:"18px",marginRight:"20px"}}>
          <Button
            variant="outlined"
            sx={[cancelText, publishButtonStyle]}
            onClick={handleClose}
            data-testid="cancelbutton"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={[buttonText, publishButtonStyle]}
            onClick={handlePublish}
            data-testid="dialogpublish"
          >
            Publish
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default PublishPortfolio;
