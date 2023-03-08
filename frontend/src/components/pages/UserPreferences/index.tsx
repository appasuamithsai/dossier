import { Grid } from "@mui/material";
import React from "react";
import HeaderImage from "../../../assets/images/logos/DossierLogo.png";
import Progressbar from "../../organisms/Progressbar";
const UserPreferences = () => {
  let element = (
    <Progressbar
      userName={"Peter"}
      appDescription={
        "Thanks for signing up with Dossier.In order for us to provide you with the most effective guidance during your portfolio creation, we would appreciate it if you answered the following questions:"
      }
      steps={[
        {
          stepDescription:
            "How many years of  professional experience do you have in total",
          chips: [
            {
              name: "0 -1 years",
              isSelected: false,
            },
            {
              name: "2 -3 years",
              isSelected: true,
            },
            {
              name: "4 -5 years",
              isSelected: false,
            },
            {
              name: "6 - 8 years",
              isSelected: false,
            },
            {
              name: "7- 10 years",
              isSelected: false,
            },
          ],
          activeStep: 1,
          lastChipLabel: "More",
        },
        {
          stepDescription: "What kind of Portfolio do you prefer?",
          chips: [
            {
              name: "Fintech",
              isSelected: true,
            },
            {
              name: "Healthcare",
              isSelected: false,
            },
            {
              name: "Sales ",
              isSelected: false,
            },
            {
              name: "Aeronautical",
              isSelected: false,
            },
            {
              name: "Hospitality",
              isSelected: false,
            },
          ],
          activeStep: 2,
          lastChipLabel: "More",
        },
        {
          stepDescription: "How would you describe your industry? ",
          chips: [
            {
              name: "Fintech",
              isSelected: true,
            },
            {
              name: "Health",
              isSelected: false,
            },
            {
              name: "Sales & CRM ",
              isSelected: false,
            },
            {
              name: "IT",
              isSelected: false,
            },
            {
              name: "Marketing",
              isSelected: false,
            },
          ],
          activeStep: 3,
          lastChipLabel: "Others",
        },
        {
          stepDescription: "How would you describe your designation? ",
          chips: [
            {
              name: "Product Manager",
              isSelected: false,
            },
            {
              name: "Project Manager",
              isSelected: true,
            },
            {
              name: "UI UX Designer",
              isSelected: false,
            },
            {
              name: "Full Stack Developer",
              isSelected: false,
            },
          ],
          activeStep: 4,
          lastChipLabel: "Others",
        },
        {
          stepDescription:
            "Choose the colors you would like your Portfolio to have",
          chips: [
            {
              name: "Blue",
              isSelected: false,
            },
            {
              name: "Red",
              isSelected: false,
            },
            {
              name: "Orange ",
              isSelected: true,
            },
            {
              name: "Pink",
              isSelected: false,
            },
            {
              name: "Black & White",
              isSelected: false,
            },
          ],
          activeStep: 5,
          lastChipLabel: "More",
        },
      ]}
    />
  );
  const elementStyle = {
    marginLeft: "32%",
    marginTop: "5%",
  };
  return (
    <>
      <img src={HeaderImage} alt="Dossier Logo" />
      <Grid sx={elementStyle}>{element}</Grid>
    </>
  );
};
export default UserPreferences;
