// RangeSlider.ts
export const sliderClasses = {
    base: {
        default: ' appearance-none w-full h-2 bg-transparent cursor-pointer relative z-10 ',
        inside: 'appearance-none w-full h-3 bg-transparent cursor-pointer relative z-10 left-0  ' 
      },
    trackBackground: {
      default: ' absolute top-1/2 left-0 w-full h-2 rounded transform -translate-y-1/2',
      inside: 'absolute top-1/2 left-0 w-full h-8 rounded-r-full transform -translate-y-1/2'
    },
    trackFilled: {
        default: ' absolute top-1/2 left-0 h-2 rounded transform -translate-y-1/2',
        inside: 'absolute top-1/2 left-0 h-8 rounded-r-full transform -translate-y-1/2'
      },
    thumb: ' appearance-none w-4 h-4 border-2 shadow-md rounded-full relative -top-2'
  };