import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputField from '.';

const inputMock = jest.fn();

const Test = () => (
  <InputField
    onChange={inputMock}
    defaultValue={'mock@gmail.com'}
    placeholder={'Enter email id'}
  />
);

test('Input', () => {
  const container = render(<Test />);

  const input = container.getByDisplayValue(
    'mock@gmail.com',
  ) as HTMLInputElement;

  fireEvent.change(input, { target: { value: 'harshitvidhyarthi@gmail.com' } });
  expect(input.value).toBe('harshitvidhyarthi@gmail.com');
  expect(inputMock.mock.calls).toHaveLength(1);
});
