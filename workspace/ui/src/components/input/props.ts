
export const inputProps = {
  readonly: { type: Boolean, default: false },
  isDisabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  rtl: { type: Boolean, default: false },
  submit: { type: String, default: "" },
  

  color: { type: String as () => keyof typeof InputColor, default: 'default' },
  variant: { type: String as () => keyof typeof InputVariant },
  size: { type: String as () => keyof typeof InputSize ,default:'md'},

  modelValue: { type: String, default: '' },
};


export const InputSize={
  sm:`size-sm`,
  md:`size-md`,
  lg:`size-lg`,
  xl:`size-xl`,


}

export const InputColor = {
  default: 'bg-default',
  secondary: 'bg-purple',
  primary: 'bg-green',
  error: 'bg-red',
  warning: 'bg-amber',
  transparent: 'bg-transparent',
} as const; 


export const InputVariant = {
  shadow: 'v-shadow',
  faded: 'v-faded',
  underline: 'v-underline',
  bordered: 'v-bordered',
  flat: 'v-flat',
  search:'v-search'
} as const; 
