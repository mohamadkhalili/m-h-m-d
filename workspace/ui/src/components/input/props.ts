
export const inputProps = {
  readonly: { type: Boolean, default: false },
  isDisabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  rtl: { type: Boolean, default: false },
  icon: { type: String, default: "" },
  submit: { type: String, default: "" },
  

  color: { type: String as () => keyof typeof InputColor, default: 'default' },
  variant: { type: String as () => keyof typeof InputVariant },

  modelValue: { type: String, default: '' },
};


export const InputColor = {
  default: 'bg-default',
  secondary: 'bg-purple',
  primary: 'bg-green',
  error: 'bg-red',
  warning: 'bg-amber',
  transparent: 'bg-transparent',
} as const; 


export const InputVariant = {
  default: 'v-default',
  faded: 'v-faded',
  underline: 'v-underline',
  bordered: 'v-bordered',
  flat: 'v-flat',
  iconic:'v-iconic'
} as const; 
