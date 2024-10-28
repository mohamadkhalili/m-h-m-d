// props.ts
export const buttonColors = {
  default: 'bg-blue',
  secondary: 'bg-purple',
  primary: 'bg-green',
  error: 'bg-red',
  warning: 'bg-amber',
  random:'bg-random'
} as const;

export type ButtonColor = keyof typeof buttonColors;

export const props = {
  color: {
    type: String as () => ButtonColor,
    default: 'default' as ButtonColor,
  },
};
