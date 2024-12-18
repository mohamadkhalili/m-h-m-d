import { PropType } from 'vue';

export const CheckBoxProps = {
  modelValue: {
    type: Boolean,
    required: true,
  },
  color: {
    type: String ,
    default: 'bg-blue-500 text-white border-blue-500',
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
  lineThrough: {
    type: Boolean,
    default: false,
  },
};
