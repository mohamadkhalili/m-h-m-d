// props.ts
export interface RadioGroup
 {
    label: string;
    min: number;
    max: number;
    modelValue: number;
    name: string;
    step: number;
    variant?: 'default' | 'inside';
  }