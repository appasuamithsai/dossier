/* eslint-disable no-undef */
import React from 'react';
import {fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SharePortFolio from './index';

describe('Button Component', () => {
  it('should match snapshot', () => {
    const test1 = jest.fn();
    const test2 = jest.fn();
    render(<SharePortFolio onClose={test1} link="www.dossier.com/peterpareker/finance-portfolio" onCopy={test2}/>);
    const wrapper = screen.getByText('www.dossier.com/peterpareker/finance-portfolio');
    expect(wrapper).toBeTruthy;
  });
  it('onclick for close button ', () => {
    const test1 = jest.fn();
    const test2 = jest.fn();
    render(<SharePortFolio onClose={test1} link="www.dossier.com/peterpareker/finance-portfolio" onCopy={test2}/>);
    fireEvent.click(screen.getByAltText('close'));
  });
  it('on click for copy button', () => {
    const test1 = jest.fn();
    const test2 = jest.fn();
    render(<SharePortFolio onClose={test1} link="www.dossier.com/peterpareker/finance-portfolio" onCopy={test2}/>);
    fireEvent.click(screen.getByText('Copy link'));
  });
});