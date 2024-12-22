// emits.ts
export const emits = {
  'update:modelValue': (value: number) => {
    return typeof value === 'number';
  }
};
