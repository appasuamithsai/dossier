import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { Component } from "react";
import Image from ".";
import gmail from "../../../assets/images/logos/gmail.png";
import customization from "../../../assets/images/customization.svg";
import publish from "../../../assets/images/publish.svg";
import sharing from "../../../assets/images/sharing.svg";
import portfolio from "../../../assets/images/portfolio.png";
import mobileVerification from "../../../assets/images/mobileVerification.png";
import emptyState from "../../../assets/images/emptyState.png";
import memphis from "../../../assets/images/logos/memphis.png";
import setToGo from "../../../assets/images/settogo.png";
import financeTemplate from "../../../assets/images/financeTemplate.png";

export default {
  title: "atoms/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => (
  <Image {...args}></Image>
);

export const companyLogo = Template.bind({});
export const companyLogoWithBackground = Template.bind({});
export const entryPage = Template.bind({});
export const createPortfolioPageImage = Template.bind({});
export const collegeLogo = Template.bind({});
export const templateVariant = Template.bind({});

companyLogo.args = {
  src: gmail,
  alt: "gmail",
  variant: "companyLogo",
};
companyLogoWithBackground.args = {
  src: gmail,
  alt: "gmailWithBg",
  variant: "companyLogoWithBackground",
};

entryPage.args = {
  src: customization,
  alt: "customization",
  variant: "entryPage",
};

createPortfolioPageImage.args = {
  src: portfolio,
  alt: "portfolio",
  variant: "createPortfolioPage",
};
collegeLogo.args = {
  src: memphis,
  alt: "memphis",
  variant: "collegeLogo",
};

templateVariant.args = {
  src: financeTemplate,
  alt: "financeTemplate",
  variant: "template",
};
