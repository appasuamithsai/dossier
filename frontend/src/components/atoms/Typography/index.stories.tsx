import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  MuiTypography  from '../Typography/index';

export default {
  title: 'Atoms/Typography',
  component: MuiTypography,
} as ComponentMeta<typeof MuiTypography>;

const Template: ComponentStory<typeof MuiTypography> = (args) => (
  <MuiTypography {...args} />
);

export const Title = Template.bind({});


