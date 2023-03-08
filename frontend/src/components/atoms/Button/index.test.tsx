import React from 'react';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';

describe('Button Component', () => {
  it('should match snapshot', () => {
    const test1 = jest.fn();
    render(<Button onClick={test1}>Hello</Button>);
    const wrapper = screen.getByText('Hello');
    expect(wrapper).toBeTruthy;
  });
});