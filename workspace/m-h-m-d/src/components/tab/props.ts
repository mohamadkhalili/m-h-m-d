// props.ts
import { PropType } from 'vue';

export interface Tab {
  label: string;
  value: number | string;
  content?: any;
  disabled?: boolean;
}

export const variants = {
  default: 'default',
  underline: 'underline',
  bordered: 'bordered',
  shadow: 'shadow',
  mirror: 'mirror',
} as const;

export const TabProps = {
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: 1,
  },
  tabs: {
    type: Array as PropType<Tab[]>,
    required: true,
  },
  variant: {
    type: String as PropType<keyof typeof variants>,
    default: 'bordered',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md',
  },
  notActiveColor: {
    type: String,
    default: 'text-gray-700 bg-transparent',
  },
  activeColor: {
    type: String,
    default: 'bg-transparent',
  },
  contentColor: {
    type: String,
    default: ' bg-transparent',
  },
  position: {
    type: String as PropType<'top' | 'bottom' | 'left' | 'right'>,
    default: 'top',
  },
  justify:{
    type:String,
    default:'justify-center'
  }
};
