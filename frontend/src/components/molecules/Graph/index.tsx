import React from "react";
import BarChart from "../BarChart/index";
import { GRAPH_TEMPLATE, ACCOMPLISHMENTS } from "../../utils/constants";
import SlideBackground from "../../utils/templates/SlideBackground";
const Graph: React.FC = () => {
  return (
    <SlideBackground
      title={ACCOMPLISHMENTS}
      children={<BarChart title={GRAPH_TEMPLATE.heading} />}
    />
  );
};

export default Graph;
