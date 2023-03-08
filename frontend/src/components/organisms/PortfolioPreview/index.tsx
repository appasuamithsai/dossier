import React from "react";
import { Grid } from "@mui/material";
import FirstPageInResume from "../FirstPageInResume";
import Graph from "../../molecules/Graph";
import ImageAndNameSlideContent from "../../molecules/ImageAndNameSlideContent";
import SkyFlowValuation from "../../molecules/SkyFlowValuation";
import {
  ENABLING_QA,
  ENABLING_QA_ARRAY,
  RISK_MANAGEMENT,
  RISK_MGMT_ARRAY,
  SPRINT_MANAGEMENT,
  SPRINT_ARRAY,
} from "../../utils/constants";
import Accomplishments from "../Accomplishments";
import Certifications from "../Certifications";
import EducationDetails from "../EducationDetails";
import ExperienceDetalis from "../ExperienceDetails";
import PersonalDetails from "../PersonalDetails";

export const DATA_ARRAY = [
  <FirstPageInResume
    userName="Peter Parker"
    designation="Project Manager"
    heading="FINTECH PORTFOLIO"
    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum "
  />,
  <PersonalDetails content="Hobbies - Cricket" />,
  <EducationDetails />,
  <ExperienceDetalis />,
  <Certifications />,
  <ImageAndNameSlideContent
    title={ENABLING_QA}
    contentArray={ENABLING_QA_ARRAY}
  />,
  <ImageAndNameSlideContent
    title={RISK_MANAGEMENT}
    contentArray={RISK_MGMT_ARRAY}
  />,
  <ImageAndNameSlideContent
    title={SPRINT_MANAGEMENT}
    contentArray={SPRINT_ARRAY}
  />,
  <Accomplishments />,
  <Graph />,
  <SkyFlowValuation />,
];
const root = {
  width: "880px",
};
interface PortfolioProps {
  onClose?: () => void;
  contentArray: any;
}

const PortfolioPreview: React.FC<PortfolioProps> = (props) => {
  return (
    <Grid container sx={root}>
      <Grid item>
        {props.contentArray.map((e: any) => {
          return <img width="880px" height="440px" src={e.img} />;
        })}
      </Grid>
    </Grid>
  );
};

export default PortfolioPreview;
