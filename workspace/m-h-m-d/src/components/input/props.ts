export const InputProps = {
  variant: { type: String as () => keyof typeof InputVariant },
  modelValue: { type: String, required: false },
  InputClass: { type: String, default: '' },
  label: { type: String, default: '' },
  LabelInputClass: { type: String, default: '' },
  icon1: { type: String, default: '' },
  icon2: { type: String, default: '' },
  placeholder: { type: String, default: '' },

}

export const InputVariant = {
  search: 'search',
  default: 'default', 
};
