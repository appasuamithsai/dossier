import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SkyFlowCard from './index';
import SKY_FLOW_IMAGE  from '../../../assets/images/skyflow1.png';

export default {
  title: 'molecules/SkyFlowCard',
  component: SkyFlowCard,
} as ComponentMeta<typeof SkyFlowCard>;

const Template: ComponentStory<typeof SkyFlowCard> = (args) => <SkyFlowCard {...args} />;

export const primary = Template.bind({});
primary.args = {
    date:"2021 - Jul",
    image:SKY_FLOW_IMAGE,
    heading:"Revenue Growth",
    body:"Inroduction to billing\nprepared the SOW\n6 month SOW\n2021 second half = 564k\nAdded resouces, off boarded"
};
