export const InputProps = {
  variant: { type: String as () => keyof typeof InputVariant },
  modelValue: { type: String, required: false },
  InputClass: { type: String, default: '' },
  label: { type: String, default: '' },
  LabelInputClass: { type: String, default: '' },
}

export const InputVariant = {
  search: 'search',
  underline: 'underline',
  highlight: 'highlight',
  express: 'express',
  defaultNew: 'default-new', 
};
