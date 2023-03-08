import { ComponentStory, ComponentMeta } from "@storybook/react";
import PublishedResume from ".";
import React from "react";
import PortfolioImage from "../../../../public/assets/images/PortfolioImage1.svg";

export default {
  title: "Organisms/PublishedResume",
  component: PublishedResume,
} as ComponentMeta<typeof PublishedResume>;

const Template: ComponentStory<typeof PublishedResume> = (args) => (
  <PublishedResume />
);
const data = [
  {
    id: 1,
    img: PortfolioImage,
    title: "Fintech Portfolio.pdf",
    edited: "Edited 45 mins ago",
  },
  {
    id: 2,
    img: PortfolioImage,
    title: "Fintech Portfolio.jpeg",
    edited: "Edited 45 mins ago",
  },
];
export const PublishedResumeSample = Template.bind({});
PublishedResumeSample.args = {
  data: data,
};
