import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CreatePortfolioCard from './index';
import AutoFillWithResumeImage  from '../../../assets/images/autofillwithresume.png';
import ExistingPortFolioImage  from '../../../assets/images/existingportfolio.png';
import ManuallyWithTemplateImage  from '../../../assets/images/manuallywithtemplate.png';

export default {
  title: 'molecules/CreatePortfolioCard',
  component: CreatePortfolioCard,
} as ComponentMeta<typeof CreatePortfolioCard>;

const Template: ComponentStory<typeof CreatePortfolioCard> = (args) => <CreatePortfolioCard {...args} />;

export const AutoFillWithResume = Template.bind({});
export const ExistingPortFolio = Template.bind({});
export const ManuallyWithTemplate = Template.bind({});

AutoFillWithResume.args = {
   image:AutoFillWithResumeImage,
   name:'AutoFillWithResumeImage'
};
ExistingPortFolio.args = {
    image:ExistingPortFolioImage,
    name:'ExistingPortFolioImage'
};
ManuallyWithTemplate.args = {
    image:ManuallyWithTemplateImage,
    name:'ManuallyWithTemplateImage'
};