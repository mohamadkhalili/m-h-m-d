// فایل switchClasses.js

export const switchClasses = {
    base: 'relative inline-flex items-center transition-colors duration-300 rounded-full',
    disabled: 'cursor-not-allowed opacity-50',
    pointer: 'cursor-pointer',
    flex: 'flex justify-between items-center',
    sm: 'w-11 h-5',
    md: 'w-14 h-7',
    lg: 'w-16 h-8',
    xl: 'w-20 h-10',
  };
  
  export const toggleClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-7 h-7',
    xl: 'w-8 h-8',
    base: 'rounded-full transition-transform duration-300 transform bg-white',
    disabled: 'opacity-60',
    active: 'active:scale-95',
  };
  
  export const getTranslateValue = {
    sm: 'translateX(155%)',
    md: 'translateX(160%)',
    lg: 'translateX(110%)',
    xl: 'translateX(130%)',
    default: 'translateX(100%)',
  };
  