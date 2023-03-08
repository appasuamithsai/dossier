import { Button, Chip, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect, useContext } from "react";
import {
  updatePreferencesDataByUserID,
} from "../../../services/services";
import theme from "../../../theme/theme";
import { UserContext } from "../../utils/context";

export interface CreatePortfolioStepProps extends StepProps {
  userName: string;
  appDescription: string;
  handleNext?: () => void;
}

export interface StepProps {
  stepDescription: string;
  chips: { name: string; isSelected: boolean }[];
  lastChipLabel: string;
  activeStep: number;
}

const classes = makeStyles({
  rootGrid: {
    width: "760px",
    height: "364px",
    backgroundColor: theme.palette.structural[50],
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "20px",
    paddingBottom: "24px",
    borderRadius: "10px",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
  },
  horizontalLineStyles: {
    marginTop: "20px",
  },
  stepDescStyles: {
    marginTop: "20px",
  },
  appDescStyles: {
    marginTop: "4px",
  },
  chipGrid: {
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "flex-start",
    listStyle: "none",
    padding: 0,
  },
  chipStyles: {
    borderRadius: "31px",
    border: `1px solid ${theme.palette.grey[200]} `,
  },
  buttonStyles: {
    color: `${theme.palette.structural[50]}`,
    bottom: "0",
    marginLeft: "295px",
    marginTop: "99px",
    width: "130px",
    height: "36px",
    textTransform: "none",
    padding: "8px 24px 8px 24px",
    "&:hover": {
      backgroundColor: `${theme.palette.primary.main}`,
    },
  },
  typoStyle: {
    color: `${theme.components?.MuiChip?.styleOverrides?.outlined}`,
  },
});

const CreatePortfolioStep: React.FC<CreatePortfolioStepProps> = ({
  userName,
  appDescription,
  stepDescription,
  activeStep,
  chips,
  lastChipLabel,
  handleNext,
}) => {
  const [chipVariant, setchipVariant] = useState("");
  const { userId } = useContext(UserContext);

  const handleChipClick = async (name: any) => {
    let attribute: any = "";
    chips.forEach(async (tempChip) => {
      if (tempChip.name === chipVariant) {
        tempChip.isSelected = false;
      }
      if (tempChip.name === name) {
        tempChip.isSelected = true;

        switch (activeStep) {
          case 1:
            attribute = "experience";
            break;
          case 2:
            attribute = "portfolioType";
            break;
          case 3:
            attribute = "industry";
            break;
          case 4:
            attribute = "designation";
            break;
          case 5:
            attribute = "color";
            break;
          default:
            attribute = "hello";
            break;
        }

        setchipVariant(name);
    

        await updatePreferencesDataByUserID(attribute, name, userId);

      }
    });
  };

  useEffect(() => {
    handleChipClick(chipVariant);
  }, [chipVariant]);

  const styles = classes();
  let isDisabled = true;
  for (const element of chips) {
    if (element.isSelected === true) {
      isDisabled = false;
      break;
    }
  }
  return (
    <Grid className={styles.rootGrid} data-testid="CreatePortfolioStep">
      <Typography variant="subtitle1" sx={{ color: "#5A5766" }}>
        Hey {userName},
      </Typography>
      <Typography variant="caption2" color="#817E8C">
        {appDescription}
      </Typography>
      <hr className=""></hr>
      <Typography variant="subtitle2">{stepDescription}</Typography>
      <Grid component="ul" className={styles.chipGrid}>
        {chips.map((chip, index) => {
          return (
            <Chip
              key={index}
              className={styles.chipStyles}
              sx={{ marginRight: "12px", fontStyle: "Roboto" }}
              label={chip.name}
              variant={chip.name === chipVariant ? "filled" : "outlined"}
              onClick={() => handleChipClick(chip.name)}
            ></Chip>
          );
        })}
        <Chip
          className={styles.chipStyles}
          label={lastChipLabel}
          variant="outlined"
        ></Chip>
      </Grid>
      <Button
        data-testid="nextButton"
        variant="contained"
        className={styles.buttonStyles}
        disableTouchRipple
        disabled={isDisabled}
        onClick={() => {
          if (handleNext != null) handleNext();
        }}
      >
        Next
      </Button>
    </Grid>
  );
};

export default CreatePortfolioStep;
