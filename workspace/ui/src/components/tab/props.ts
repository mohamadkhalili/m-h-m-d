import { PropType } from 'vue';

export interface Tab {
  label: string;
  value: string;
  content: string;
}
export const TabColors = {
  activeDefault: 'bg-blue-700 text-white', 
  activePrimary: 'bg-green-700 text-white', 
  activeSecondary: 'bg-purple-700 text-white',
  activeError: 'bg-red-600 text-white',
  activeWarning: 'bg-amber-400 text-white',
  activeDark: 'bg-gray-800 text-white'

} as const;



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
  color: {
    type: String as PropType<keyof typeof TabColors>,
    default: 'default',  
  },
  isDisabled: {
    type: Boolean,
    default: false,
  }
};
