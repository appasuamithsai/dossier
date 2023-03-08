import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import EditLinkModal from ".";

export default {
  title: "Molecules/EditLinkModal",
  component: EditLinkModal,
} as ComponentMeta<typeof EditLinkModal>;

const Template: ComponentStory<typeof EditLinkModal> = (args) => (
  <EditLinkModal {...args} />
);

export const primary = Template.bind({});

primary.args = {
  link: "www.dossier.com/peterpareker/finance-portfolio",
};
