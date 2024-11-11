
import { PropType } from 'vue'; 

export interface Tab {
  title: string;
  value: string;
}

export interface TabProps {
  modelValue: string;
  tabs: Tab[]; 
  color?: string;
  variant?: string;
  size?: string;
}

export const TabProps = {
  modelValue: {
    type: String,
    default: 'first', 
  },
  tabs: {
    type: Array as PropType<Tab[]>, 
    required: true,
    default: () => [],  
  },
  color: String,
  variant: String,
  size: String
};
