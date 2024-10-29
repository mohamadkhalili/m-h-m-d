export const props = {
    Readonly: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
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
  