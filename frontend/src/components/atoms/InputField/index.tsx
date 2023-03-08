import React from 'react';
import { Input } from '@mui/material';

export interface InputFieldProps {
  placeholder?: string;
  name?: string;
  width?: string;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onKeyDown?:any;
  props?:any;
  styles?:any;
}
const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  name,
  width,
  value,
  defaultValue,
  onChange,
  onKeyDown,
  props,
  styles
}) => {
  return (
    <Input
      placeholder={placeholder}
      sx={[{ width: width },styles]}
      defaultValue={defaultValue}
      onChange={onChange}
      name={name}
      value={value}
      onKeyDown={onKeyDown}
      {...props}
    />
  );
};

export default InputField;
