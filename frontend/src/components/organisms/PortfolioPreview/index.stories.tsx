import PortfolioPreview from ".";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dialog, Grid } from "@mui/material";
import CloseIcon from "../../../assets/images/close 4.svg";
import theme from "../../../theme/theme";
import { DATA_ARRAY } from ".";
export default {
  title: "Organisms/PortfolioPreview",
  component: PortfolioPreview,
} as ComponentMeta<typeof PortfolioPreview>;

const Template: ComponentStory<typeof PortfolioPreview> = () => (
  <Dialog scroll="body" maxWidth={false} open={true}>
    <Grid container>
      <Grid item width="42.25rem">
        <PortfolioPreview contentArray={DATA_ARRAY} />
      </Grid>
      <Grid item>
        <img
          src={CloseIcon}
          style={{
            position: "fixed",
            paddingLeft: "-1px",
            cursor: "pointer",
          }}
        />
      </Grid>
    </Grid>
  </Dialog>
);
const Template2: ComponentStory<typeof PortfolioPreview> = () => (
  <PortfolioPreview contentArray={DATA_ARRAY} />
);

export const primary = Template.bind({});
export const secondary = Template2.bind({});
