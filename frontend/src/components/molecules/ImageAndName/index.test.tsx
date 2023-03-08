import React from 'react';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageAndName from './index';
import DailyScrumImage  from '../../../assets/images/dailyscrum.png';
import CircleImage  from '../../../assets/images/dailyscrum.png';

describe('ImageAndName Component', () => {
  it('should match snapshot', () => {
    render(<ImageAndName outerImage={CircleImage} innerImage={DailyScrumImage} name="Daily Scrum" />);
    const wrapper = screen.getByText('Daily Scrum');
    expect(wrapper).toBeTruthy;
  });
});