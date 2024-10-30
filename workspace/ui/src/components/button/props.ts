
export const buttonColors = {
  default: 'bg-blue',
  secondary: 'bg-purple',
  primary: 'bg-green',
  error: 'bg-red',
  warning: 'bg-amber',
  gradient:'bg-gradient',
} as const;

export const VariantColor = {
  link: 'variant-link',
  faded: 'variant-faded',
  bordered: 'variant-bordered',
  light: 'variant-light',
  ghost: 'variant-ghost',
  shadow:'variant-shadow'
} as const;



export type ButtonColor = keyof typeof buttonColors;
export type VariantColor = keyof typeof VariantColor;


export const props = {
  color: {
    type: String as () => ButtonColor,
    default: 'default' as ButtonColor,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  NoCleaner: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as () => VariantColor,
    default: 'default' as VariantColor,
  },
};
