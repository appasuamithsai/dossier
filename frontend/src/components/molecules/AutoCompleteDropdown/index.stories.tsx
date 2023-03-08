import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AutoCompleteDropdown from ".";
import { ListItemSecondaryAction } from "@mui/material";
import { DEGREE_ARRAY, UNIVERSITY_ARRAY } from "../../utils/constants";
export default {
  title: "Molecules/AutoComplete Dropdown",
  component: AutoCompleteDropdown,
} as ComponentMeta<typeof AutoCompleteDropdown>;

const Template: ComponentStory<typeof AutoCompleteDropdown> = (args) => (
  <AutoCompleteDropdown {...args} />
);

export const primary = Template.bind({});
export const secondary = Template.bind({});

primary.args = {
  label: "Eg:Bachelor's",
  item_array: DEGREE_ARRAY,
};

secondary.args = {
  label: "Search University Here",
  item_array: UNIVERSITY_ARRAY,
};
