import type { PropType } from 'vue';

export const loaderProps = {
  variant: {
    type: String as PropType<'default' | 'spinner' | 'dots' | 'circle'>,
    default: 'default',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md',
  },
  color: {
    type: String as PropType<'primary' | 'secondary' | 'warning' | 'error' | 'default'  | 'dark' | 'light' >,
    default: 'default',
  },
  isVisible: {
    type: Boolean,
    default: true,
  },
};
