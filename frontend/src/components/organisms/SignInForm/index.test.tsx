import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SignInForm from './index';

describe('SignInForm component', () => {

  test('testing onchange for Phone Number', () => {
    render(<SignInForm firstName='tester' onSubmit={test}/>);
    fireEvent.change(screen.getByPlaceholderText('eg. +1 330-617-3324'), {target: {value: '123'}})
    fireEvent.change(screen.getByPlaceholderText('eg. +1 330-617-3324'), {target: {value: ''}})
    fireEvent.change(screen.getByPlaceholderText('eg. +1 330-617-3324'), {target: {value: '1234'}})
    fireEvent.change(screen.getByPlaceholderText('eg. +1 330-617-3324'), {target: {value: '9505985398'}})
  });

  test('testing onchange for Phone Number', () => {
    render(<SignInForm firstName='tester' onSubmit={test}/>);
    fireEvent.change(screen.getByPlaceholderText('eg. +1 330-617-3324'), {target: {value: ''}})
  });
});