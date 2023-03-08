import React from 'react';
import {fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreatePortfolioCard from './index';
import AutoFillWithResumeImage  from '../../../assets/images/autofillwithresume.png';

describe('CreatePortfolioCard Component', () => {
  it('should match snapshot', () => {
    const test1 = jest.fn();
    render(<CreatePortfolioCard handle={test1} name="manullay with template" image={AutoFillWithResumeImage} />);
    const wrapper = screen.getByAltText('manullay with template');
    expect(wrapper).toBeInTheDocument();
  });
  it('click on the card ', () => {
    const test1 = jest.fn();
    const {getByTestId}=render(<CreatePortfolioCard handle={test1} name="manullay with template" image={AutoFillWithResumeImage} />);
    fireEvent.click(getByTestId("CreatePortfolioCard"));
  });
});