export const drawerProps = {
  isOpen: {
    type: Boolean,
    default: false,
  },
  side: {
    type: String,
    default: 'right',
    validator: (value: string) => ['left', 'right'].includes(value),
  },
};
