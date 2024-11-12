import { PropType } from 'vue';

export interface Tab {
  label: string;
  value: string;
  content: string;
}

export const TabProps = {
  modelValue: {
    type: String,
    default: 'one',
  },
  tabs: {
    type: Array as PropType<Tab[]>,
    required: true,
    default: () => [],
  },
};

export const TabEmits = {
  'update:modelValue': (value: string) => true,
};
