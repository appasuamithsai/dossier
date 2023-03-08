import { Grid, MobileStepper, Typography } from "@mui/material";
import React, { useState } from "react";
import CreatePortfolioStep, {
  StepProps,
} from "../../molecules/CreatePortfolioStep";
import theme from "../../../theme/theme";
import { makeStyles } from "@mui/styles";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

export interface ProgressbarProps {
  userName: string;
  appDescription: string;
  steps: StepProps[];
  lastActiveStep?: () => void;

}

const classes = makeStyles(() => ({
  stpperGrid: {
    width: "760px",
    height: "484px",
  },
  progressBarGrid: {
    height: "36px",
  },
  stepIndicationGrid: {
    display: "flex",
    justifyContent: "end",
    marginTop: "6px",
  },
  linearProgressBarStyle: {
    borderRadius: "4px",
    height: "7.33px",
    padding: 0,
    backgroundImage: `linear-gradient(${theme.palette.grey[100]},${theme.palette.grey[100]})`,
    backgroundSize: "100% 1.83px ",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 center",
    width: "760px",
    backgroundColor: theme.palette.structural[50],
    "& .css-wp9qpz-MuiLinearProgress-bar1": {
      borderRadius: "4px",
    },
  },
  stepGrid: {
    marginTop: "24px",
  },
  buttonsGrid: {
    height: "36px",
    display: "flex",
    marginTop: "24px",
  },
  buttonTypography: {
    color: theme.palette.primary.main,
  },
}));

const Progressbar: React.FC<ProgressbarProps> = ({
  userName,
  appDescription,
  steps,
  lastActiveStep
}) => {
  const navigate = useNavigate();
  const handleNext = () => {
    if(activeStep===5) navigate("/start-customizing");
    if (activeStep < 5) setActiveStep((pre) => pre + 1);
    if(activeStep===4){
      return lastActiveStep?.();
    }
  };
  const handleBack = () => {
    if (activeStep > 1) setActiveStep((pre) => pre - 1);
  };
  const styles = classes();
  const [activeStep, setActiveStep] = useState(1);
  return (
    <Grid className={styles.stpperGrid} data-testid="progress-bar-grid">
      <Grid className={styles.progressBarGrid}>
        <MobileStepper
          variant="progress"
          backButton={""}
          nextButton={""}
          steps={steps.length + 1}
          position="static"
          activeStep={activeStep}
          sx={{ flexGrow: 1, padding: 0 }}
          LinearProgressProps={{
            className: styles.linearProgressBarStyle,
          }}
        ></MobileStepper>
        <Grid className={styles.stepIndicationGrid}>
          <Typography variant="caption3">
            {activeStep + "/" + steps.length}
          </Typography>
        </Grid>
      </Grid>
      <Grid className={styles.stepGrid}>
        <CreatePortfolioStep
          userName={userName}
          appDescription={appDescription}
          stepDescription={steps[activeStep - 1].stepDescription}
          activeStep={activeStep}
          chips={steps[activeStep - 1].chips}
          lastChipLabel={steps[activeStep - 1].lastChipLabel}
          handleNext={handleNext}
        ></CreatePortfolioStep>
      </Grid>
      <Grid className={styles.buttonsGrid}>
        {activeStep > 1 && (
          <Button
            data-testid="backButton"
            onClick={() => handleBack()}
            startIcon={<ArrowBack />}
            sx={{
              '&:hover': {
                background: "#fff",
                  },
            }}
          >
            <Typography variant="body1" className={styles.buttonTypography}>
              Back
            </Typography>
          </Button>
        )}
        <Button
          data-testid="skipButton"
          onClick={() => handleNext()}
          sx={{ marginLeft: "auto" ,
            '&:hover': {
            background: "#fff",
              },
            }}
        >
          <Typography variant="body1" className={styles.buttonTypography}>
            Skip
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Progressbar;
