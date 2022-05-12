import { IInputField } from './InputField';

const base: IInputField = {
  type: 'text',
  id: 'username',
  value: '',
  name: 'usr',
  placeholder: 'Username',
};

export const mockInputFieldProps = {
  base,
};
