export interface CountDownProps {
    time: number;
    autoStart?: boolean;
    format?: 'hh:mm:ss' | 'hh mm ss' | 'hhH mmM ssS' | 'hh hours mm minutes ss seconds'; 
}

export const countDownPropsDefaults = {
    autoStart: false,
    format: 'hh:mm:ss', // Default format
};

export const countDownPropsValidation = {
    time: (value: number) => value >= 0,
};


