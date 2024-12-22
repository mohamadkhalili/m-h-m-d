export const sliderClasses = {
  base: 'appearance-none w-full h-2 bg-transparent cursor-pointer relative z-10',
  trackBackground: 'absolute top-1/2 left-0 w-full h-1 bg-gray-300 rounded transform -translate-y-1/2',
  trackFilled: 'absolute top-1/2 left-0 h-1 bg-blue-500 rounded transform -translate-y-1/2',
  thumb: 'appearance-none w-4 h-4  border-2 border-white shadow-md rounded-full relative -top-2',
  variants: {
    dark: {
      trackBackground: 'bg-gray-200',
      trackFilled: 'bg-gray-700',
      thumb: 'bg-gray-300 border-gray-700'
    },
    light: {
      trackBackground: 'bg-blue-300',
      trackFilled: 'bg-blue-500',
      thumb: 'bg-gray-500 border-gray-500'
    }
  }
};
