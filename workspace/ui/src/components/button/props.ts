
export const buttonColors = {
  default: 'bg-blue',
  secondary: 'bg-purple',
  primary: 'bg-green',
  error: 'bg-red',
  warning: 'bg-amber',
  gradient:'bg-gradient',
  link:'bg-link'
} as const;

export type ButtonColor = keyof typeof buttonColors;

export const props = {
  color: {
    type: String as () => ButtonColor,
    default: 'default' as ButtonColor,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
};
