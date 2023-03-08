import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import UploadMedia from ".";
export default {
    title: "Molecules/UploadMedia",
    component: UploadMedia,
  } as ComponentMeta<typeof UploadMedia>;
  
  const Template: ComponentStory<typeof UploadMedia> = () => (
    <UploadMedia></UploadMedia>
  );
  
  export const UploadImage = Template.bind({});
  