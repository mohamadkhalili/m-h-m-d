export const CheckboxClasses = {
    // کلاس‌های عمومی برای چک‌باکس
    container: 'flex items-center space-x-3 select-none',
    disabled: 'opacity-50 cursor-not-allowed',
    enabled: 'cursor-pointer',
    checkboxBase: 'flex justify-center items-center border transition-all duration-200',
    checked: 'bg-slate-700 text-white border-slate-700',
    unchecked: 'bg-white border-gray-300',
    hover: 'hover:border-slate-400',
    fontBold: 'font-bold',
    labelBase: 'text-sm',
    lineThrough: 'line-through',
  
    // اندازه‌های چک‌باکس
    size: {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
    },
  
    // شعاع‌های گوشه
    radius: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
      none: 'rounded-none',
    },
  
    // اندازه‌های متن
    fontSize: {
      sm: 'text-xs',
      lg: 'text-xl',
    },
  };
  