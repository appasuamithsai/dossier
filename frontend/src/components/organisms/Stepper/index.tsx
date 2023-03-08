import * as React from "react";
import { Grid, MobileStepper, useTheme, IconButton } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EntryPageStep from "../../molecules/EntryPageStep";
import customization from "../../../assets/images/customization.svg";
import publish from "../../../assets/images/publish.svg";
import sharing from "../../../assets/images/sharing.svg";
import logo from "../../../assets/images/logos/logoDossierLogo.png";
import theme from "../../../theme/theme";
import { makeStyles } from "@mui/styles";

export interface StepperProps {}
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const steps = [
  {
    text: "Professional Portfolio Templates  and Themes",
    desc: "Get unlimited access to 500+  portfolio templates and themes ",
    src: customization,
    alt: "customization",
  },
  {
    text: "Publish Your Portfolio",
    desc: "Dossier allows you to publish, save, preview, and save your portfolio to numerous industry standard formats",
    src: publish,
    alt: "publish",
  },
  {
    text: "Portfolio sharing at a button click",
    desc: "It's now easier than ever to share your portfolios with your professional network",
    src: sharing,
    alt: "sharing",
  },
];

const classes = makeStyles({
  rootGrid: {
    width: "671px",
    height: "100vh",
    flexGrow: 1,
    backgroundColor: theme.palette.structural[400],
  },
  stepGrid: {
    paddingLeft: "100px",
    paddingTop: "56px",
    paddingRight: "75px",
  },
  mobileStepperStyles: {
    width: "112px",
    height: "24px",
    position: "fixed",
    top: "664px",
    bottom: "80px",
    left: "279px",
    right: "280",
    backgroundColor: "inherit",
  },
  buttons: {
    "&:disabled": {
      color: theme.palette.primary.main,
    },
  },
});
const roleStyles: any = {
  "& .css-114p2tk-MuiMobileStepper-dot": {
    backgroundColor: "unset",
    border: `0.5px solid ${theme.palette.grey[300]}`,
  },
  "& .css-1yjr3of-MuiMobileStepper-dot": {
    border: `0.5px solid ${theme.palette.primary.contrastText}`,
  },
};
const Stepper: React.FC<StepperProps> = () => {
  const theme2 = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  const styles = classes();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Grid data-testid="stepper" className={styles.rootGrid}>
      <AutoPlaySwipeableViews
        axis={theme2.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        data-testid="autoSwipe"
      >
        {steps.map((step, index) => (
          <div key={step.alt} style={{ height: "100vh" }}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Grid className={styles.stepGrid}>
                <img src={logo} alt={"logo"}></img>
                <EntryPageStep
                  text={step.text}
                  description={step.desc}
                  variant={"entryPage"}
                  src={step.src}
                  alt={step.alt}
                ></EntryPageStep>
              </Grid>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        className={styles.mobileStepperStyles}
        sx={roleStyles}
        activeStep={activeStep}
        nextButton={
          <IconButton
            data-testid="nextButton"
            size="small"
            onClick={handleNext}
            color="primary"
            className={styles.buttons}
            disabled={activeStep === 2}
          >
            {theme2.direction === "rtl" ? (
              <ArrowBackIcon />
            ) : (
              <ArrowForwardIcon />
            )}
          </IconButton>
        }
        backButton={
          <IconButton
            size="small"
            data-testid="backButton"
            onClick={handleBack}
            color="primary"
            className={styles.buttons}
            disabled={activeStep === 0}
          >
            {theme2.direction === "rtl" ? (
              <ArrowForwardIcon />
            ) : (
              <ArrowBackIcon />
            )}
          </IconButton>
        }
      />
    </Grid>
  );
};

export default Stepper;
