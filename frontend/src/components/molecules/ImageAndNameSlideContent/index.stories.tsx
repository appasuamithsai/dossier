import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ImageAndNameSlideContent from "./index";
import { ENABLING_QA_ARRAY, ENABLING_QA, SPRINT_ARRAY,SPRINT_MANAGEMENT, RISK_MANAGEMENT, RISK_MGMT_ARRAY } from "../../utils/constants";

export default {
  title: "Molecules/ImageAndNameSlideContent",
  component: ImageAndNameSlideContent,
} as ComponentMeta<typeof ImageAndNameSlideContent>;

const Template: ComponentStory<typeof ImageAndNameSlideContent> = (args) => (<ImageAndNameSlideContent {...args} />);

export const enablingaqa = Template.bind({});
export const riskmgmt = Template.bind({});
export const sprintmgmt = Template.bind({});
enablingaqa.args={
      title:ENABLING_QA,
      contentArray:ENABLING_QA_ARRAY
};
riskmgmt.args={
      title:RISK_MANAGEMENT,
      contentArray:RISK_MGMT_ARRAY
};
sprintmgmt.args={
      title:SPRINT_MANAGEMENT,
      contentArray:SPRINT_ARRAY
}