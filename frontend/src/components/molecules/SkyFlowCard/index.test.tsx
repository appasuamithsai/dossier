import React from 'react';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkyFlowCard from './index';
import SKY_FLOW_IMAGE  from '../../../assets/images/skyflow1.png';

describe('SkyFlowCard Component', () => {
  it('should match snapshot', () => {
    render(<SkyFlowCard image={SKY_FLOW_IMAGE} heading="Revenue" body="this is temporary" date="25 feb" />);
    const wrapper = screen.getByText("Revenue");
    expect(wrapper).toBeTruthy;
  });
});