import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputField from '.';

export default {
  title: 'Atoms/InputField',
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);
const printingEnteredText = (e: { target: { value: any } }) => {
  console.log(e.target.value);
};
export const InputFieldBar = Template.bind({});
InputFieldBar.args = {
  placeholder: 'eg: harshit-vid@gmail.com',
  onChange: printingEnteredText,
};
