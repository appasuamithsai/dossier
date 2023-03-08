import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DesignFirstPage from ".";
export default {
  title: "Pages/DesignFirstPage",
  component: DesignFirstPage,
} as ComponentMeta<typeof DesignFirstPage>;

const Template: ComponentStory<typeof DesignFirstPage> = (args) => <DesignFirstPage {...args} />;

export const pageDashboard = Template.bind({});
