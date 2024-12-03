import type { PropType } from 'vue';

export const loaderProps = {
  variant: {
    type: String as PropType<'default' | 'spinner' | 'dots' | 'circle'>,
    default: 'default',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  color: {
    type: String,
    default: 'text-blue-500',
  },
  isVisible: {
    type: Boolean,
    default: true,
  },
};
