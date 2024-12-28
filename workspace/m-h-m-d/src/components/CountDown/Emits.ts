export type CountDownEmits = {
    (event: 'update:time', time: number): void;
    (event: 'finish'): void;
  };
  