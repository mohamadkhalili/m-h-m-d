import { PropType } from 'vue';
import { createBgColorProp, createColorProp } from '../../composables/ColorComposable';

export interface Tab {
  label: string;
  value: string;
  content: string;
}
export const TabColors = {
  activeDefault: 'bg-sky-600 ', 
  activePrimary: 'bg-emerald-600 ', 
  activeSecondary: 'bg-purple-700 ',
  activeError: 'bg-red-600 ',
  activeWarning: 'bg-amber-400 ',
  activeDark: 'bg-gray-800 '

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
  // color: {
  //   type: String as PropType<keyof typeof TabColors>,
  //   default: 'default',  
  // },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  ...createColorProp(),
  ...createBgColorProp()

};
