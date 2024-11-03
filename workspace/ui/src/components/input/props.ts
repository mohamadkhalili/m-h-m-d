export const inputProps = {
  Readonly: {type: Boolean,default: false,},
  isDisabled: {type: Boolean,default: false,},
  title: {type : String, default: ""},
  RTL: {type: Boolean,default: false,},
  color: { type: String as () => keyof typeof InputColor, default: 'default' },
  modelValue: {type: String, default:''}
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
