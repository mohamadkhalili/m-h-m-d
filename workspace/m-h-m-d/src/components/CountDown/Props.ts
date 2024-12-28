export interface CountDownProps {
    initialTime: number;
    autoStart?: boolean;
  }
  
  export const countDownPropsDefaults = {
    autoStart: false,
  };
  
  export const countDownPropsValidation = {
    initialTime: (value: number) => value >= 0,
  };
  