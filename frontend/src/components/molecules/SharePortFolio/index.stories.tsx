import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SharePortFolio from './index';
import { ThemeProvider } from '@mui/styles';
import theme from '../../../theme/theme';

export default {
  title: 'molecules/SharePortFolio',
  component: SharePortFolio,
} as ComponentMeta<typeof SharePortFolio>;

const Template: ComponentStory<typeof SharePortFolio> = (args) =><ThemeProvider theme={theme}>  <SharePortFolio {...args}  /></ThemeProvider>;

export const primary = Template.bind({});
primary.args = {
  link:'www.dossier.com/peterpareker/finance-portfolio',
  onCopy:()=>console.log("copied"),
  onClose:()=>console.log("closed")
};

