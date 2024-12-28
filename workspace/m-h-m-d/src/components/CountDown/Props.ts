export interface CountDownProps {
    time: number;
    autoStart?: boolean;
  }
  
  export const countDownPropsDefaults = {
    autoStart: false,
    
  };
  
  export const countDownPropsValidation = {
    time: (value: number) => value >= 0,
  };
  