//props/ts
import { PropType } from 'vue';

export const variants = {
  default: 'default',
  rounded: 'rounded',
  shadow: 'shadow',
  flat: 'flat',
} as const;

export const SwitchProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as PropType<keyof typeof variants>,
    default: 'default',
  },
  activeColor: {
    type: String,
    default: 'bg-blue-500',
  },
  inactiveColor: {
    type: String,
    default: 'bg-gray-300',
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
