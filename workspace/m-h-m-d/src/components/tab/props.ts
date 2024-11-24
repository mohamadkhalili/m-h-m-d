import { PropType } from 'vue';

export interface Tab {
  label: string;
  value: number;
  content: string;
}

export const variant = {
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
    type: String as PropType<keyof typeof variant>,
    default: 'default',
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
    type: String,
  },
  activeTextColor: {
    type: String,
    default: 'text-blue-500',
  },
  textColor: {
    type: String,
    default: 'text-black',
  },
  activeColor: {
    type: String,
    default: 'bg-gray-950',
  },
  color: {
    type: String,
    default: 'bg-slate-200',
  },
  position: {
    type: String,
    default: 'top',
  },
};
