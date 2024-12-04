
export const buttonColors = {
  default: 'bg-blue',
  secondary: 'bg-purple',
  primary: 'bg-green',
  error: 'bg-red',
  warning: 'bg-amber',
  dark:'bg-dark',
} as const;

export const VariantColor = {
  link: 'variant-link',
  faded: 'variant-faded',
  bordered: 'variant-bordered',
  light: 'variant-light',
  ghost: 'variant-ghost',
  shadow:'variant-shadow'
} as const;

export const Round = {
  sm: 'sm-round',
  md: 'md-round',
  lg: 'lg-round',
  full:'full-round'


} as const;
export const size = {
  xs: 'scale-[0.7]',
  sm: 'scale-[0.9]',
  md: 'scale-1',
  lg: 'scale-[1.2]',
  xl:'scale-[1.5]'


} as const;

export type VariantColor = keyof typeof VariantColor;


export const props = {
  buttonClass: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  CleanerEffect: {type: Boolean, default: false },
  variant: { type: String as () => VariantColor, default: 'default' as VariantColor },
};
