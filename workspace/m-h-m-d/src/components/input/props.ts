export const InputProps = {
  variant: { type: String as () => keyof typeof InputVariant },
  modelValue: { type: String, required: false },
  InputClass: { type: String, default: '' },
  label: { type: String, default: '' },
  LabelInputClass: { type: String, default: '' },
}

export const InputVariant = {
  shadow: 'v-shadow',
  faded: 'v-faded',
  underline: 'v-underline',
  bordered: 'v-bordered',
  flat: 'v-flat'
} as const;
