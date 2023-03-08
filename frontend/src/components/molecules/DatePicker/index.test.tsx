/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import ResponsiveDatePickers from './index';

describe('Datepicker Component', () => {
  it('should match snapshot', () => {
   const wrapper= render(<ResponsiveDatePickers label="05/22" id="1" date={new Date()}/>);
    
    expect(wrapper).toBeTruthy;
  });
});
