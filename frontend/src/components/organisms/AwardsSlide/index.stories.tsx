import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AwardsData from "./index";
export default {
  title: "organisms/AwardsData",
  component: AwardsData,
} as ComponentMeta<typeof AwardsData>;

const Template: ComponentStory<typeof AwardsData> = (args) => <AwardsData {...args} />;

export const pageAwardsData = Template.bind({});
