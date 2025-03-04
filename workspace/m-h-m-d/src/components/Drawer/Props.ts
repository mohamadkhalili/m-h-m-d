export const drawerProps = {
    isOpen: {
      type: Boolean,
      required: true,
    },
    side: {
      type: String,
      default: 'right',
      validator: (value: string) => ['left', 'right', 'top', 'bottom'].includes(value),
    },
};
