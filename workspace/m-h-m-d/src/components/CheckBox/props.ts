import { PropType } from 'vue';

export const CheckBoxProps = {
  modelValue: {
    type: Boolean,
    required: true,
  },
  color: {
    type: String ,
    default: '',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  radius: {
    type: String as PropType<'sm' | 'md' | 'lg'| 'full'| 'none'>,
    default: 'md',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  lineThrough: {
    type: Boolean,
    default: false,
  },
};
