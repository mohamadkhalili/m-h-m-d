// CarouselClasses.ts

export const carouselClasses = {
    // Arrows
    arrowBase: 'absolute top-1/2 transform -translate-y-1/2 scale-150 transition-all duration-300 rounded-full hover:scale-[1.7]',
    leftArrow: 'left-4 pr-2',
    rightArrow: 'right-4 pl-2',
  
    // Dots Navigation
    dotBase: 'w-2.5 h-2.5 rounded-full bg-gray-400 opacity-80 mx-1 cursor-pointer',
    dotActive: 'bg-gray-800 opacity-100',
  
    // Number Navigation
    numberBase: 'absolute z-10 bottom-7 left-1/2 transform -translate-x-1/2',
  
    // Lines Navigation
    lineBase: 'w-8 h-1 bg-gray-500 mx-1 cursor-pointer',
    lineActive: 'bg-stone-100',
  
    // Common Classes
    container: 'relative w-full overflow-hidden',
    imageContainer: 'flex-none w-full',
    flexContainer: 'flex transition-transform duration-300',
    centerContent: 'flex justify-center',
    centerAbsolute: 'absolute z-10 bottom-10 left-1/2 transform -translate-x-1/2'
  };
  