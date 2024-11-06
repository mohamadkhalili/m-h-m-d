export const inputProps = {
  readonly: {type: Boolean,default: false,},
  isDisabled: {type: Boolean,default: false,},
  title: {type : String, default: ""},
  rtl: {type: Boolean,default: false,},
  modelValue: {type: String, default:''}
};
export const uiProps = {
  readonly: {type: Boolean,required : false},
  isDisabled: {type: Boolean,required : false},
  title: {type : String, required : false},
  rtl: {type: Boolean,required : false},
  color: { type: String as () => keyof typeof InputColor, default: 'default' },
  variant: { type: String as () => keyof typeof InputVariant },
  size: { type: String as () => keyof typeof InputSize ,default:'md'},
  modelValue: {type: String, required : false}
}
export const InputColor = {
  default: 'bg-default',
  secondary: 'bg-purple',
  primary: 'bg-green',
  error: 'bg-red',
  warning: 'bg-amber',
  gradient: 'bg-gradient',
  link: 'bg-link',
} as const;
export const InputVariant = {
  shadow: 'v-shadow',
  faded: 'v-faded',
  underline: 'v-underline',
  bordered: 'v-bordered',
  flat: 'v-flat',
  search:'v-search'
} as const; 
export const InputSize={
  sm:`size-sm`,
  md:`size-md`,
  lg:`size-lg`,
  xl:`size-xl`,
}
