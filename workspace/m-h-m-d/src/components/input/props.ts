export const InputProps = {
  variant: { type: String as () => keyof typeof InputVariant },
  modelValue: { type: String, required: false },
  InputClass: { type: String, default: '' },
  label: { type: String, default: '' },
  LabelInputClass: { type: String, default: '' },
  prefix: { type: String, default: '' },
  suffix: { type: String, default: '' },
  placeholder: { type: String, default: '' },

}

export const InputVariant = {
  default: 'default', 
};
