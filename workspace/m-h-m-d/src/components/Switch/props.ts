import { PropType } from 'vue';

export const SwitchProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  label1: {
    type: String,
    default: '',
  },
  label2: {
    type: String,
    default: '',
  },
  activeColor: {
    type: String,
    default: 'bg-slate-700',
  },
  inactiveColor: {
    type: String,
    default: 'bg-gray-400',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
};
