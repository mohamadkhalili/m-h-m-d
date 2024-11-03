export const inputProps = {
  Readonly: {type: Boolean,default: false,},
  isDisabled: {type: Boolean,default: false,},
  RTL: {type: Boolean,default: false,},
  color: {type: String,default: 'default',},
  modelValue: {type: String}
};
export const InputColor = {
  default: 'bg-default',
  secondary: 'bg-purple',
  primary: 'bg-green',
  error: 'bg-red',
  warning: 'bg-amber',
  gradient: 'bg-gradient',
  link: 'bg-link',
} as const;
