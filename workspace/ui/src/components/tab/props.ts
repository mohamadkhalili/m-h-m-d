// props.ts
export interface TabProps {
    modelValue : number;
    tabs: string[];
    color?: string;
    variant?: string;
    size?: string;
  }
  
  export const TabProps = {
    modelValue: {
      type: Number,
      default: 0
    },
    tabs: {
      type: Array,
      required: true
    },
    color: String,
    variant: String,
    size: String
  };
  