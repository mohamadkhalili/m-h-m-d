export const emits = (event: string, value: number) => {
  return event === 'update:value';
};
