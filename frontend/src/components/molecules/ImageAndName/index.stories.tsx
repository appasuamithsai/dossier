import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ImageAndName from './index';
import DailyScrumImage  from '../../../assets/images/dailyscrum.png';
import CIRCLE_IMAGE  from '../../../assets/images/circle.png';

export default {
  title: 'molecules/ImageAndName',
  component: ImageAndName,
} as ComponentMeta<typeof ImageAndName>;

const Template: ComponentStory<typeof ImageAndName> = (args) => <ImageAndName {...args} />;

export const primary = Template.bind({});

primary.args = {
    name:"Daily Scrum",
    outerImage:CIRCLE_IMAGE,
    innerImage:DailyScrumImage
};
