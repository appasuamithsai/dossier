import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MoleculeInfographisc from ".";

export default {
  title: "Molecules/MoleculeInfographisc",
  component: MoleculeInfographisc,
} as ComponentMeta<typeof MoleculeInfographisc>;

const Template: ComponentStory<typeof MoleculeInfographisc> = (args) => (
  <MoleculeInfographisc {...args} />
);

export const primary = Template.bind({});
primary.args = {
  placeholder: "Search Template",
};
