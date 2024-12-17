export const TabClasses = {
  // Position 
  uiTabTopPositionClass: "flex flex-col",
  uiTabBottomPositionClass: "flex flex-col-reverse",
  uiTabLeftPositionClass: "flex flex-row",
  uiTabRightPositionClass: "flex flex-row-reverse",

  // Justify 
  uiTabJustifyStartClass: "justify-start w-full flex",
  uiTabJustifyCenterClass: "justify-center w-full flex",
  uiTabJustifyEndClass: "justify-end w-full flex",

  // Size 
  uiTabSizeSmallClass: "text-[12px]",
  uiTabSizeMediumClass: "text-md",
  uiTabSizeLargeClass: "text-xl",
  uiTabSizeExtraLargeClass: "text-2xl",

  // Variant 
  uiTabVariantUnderlineClass:
    "relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-500 after:bottom-0 after:left-0 after:transition-transform after:duration-300 hover:after:scale-x-100 border-none",
  uiTabVariantMirrorClass: `
    relative inline-flex items-center justify-center overflow-hidden
    after:content-[''] after:absolute after:w-10 after:h-10
    after:bg-gray-600/30 after:opacity-0
    after:opacity-100 after:scale-100 after:transition-transform after:duration-500 border-none
  `,
  uiTabVariantShadowClass: "relative inline-flex",
  uiTabVariantBorderedClass: `
    relative inline-flex items-center justify-center transition-all duration-200 ease-in-out
  `,
  uiTabVariantDefaultClass:" relative flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out ",

  // Disabled Class
  uiTabDisabledClass: "opacity-50 cursor-not-allowed",

  //default label

  uiTabButtonClass:'py-2 px-4 transition-all  duration-200 ease-in-out cursor-pointer border-[1px] select-none',

  // changing with select new tab effect
   uiTabStylePositionTopClass:' border-b-transparent border-x-transparent  shadow-[inset_0px_2px_0px_0px]' ,
 uiTabStylePositionBottomClass:' border-x-transparent  border-t-0  shadow-[inset_0px_-1px_0px_0px] ',
   uiTabStylePositionLeftClass:'  border-[1px] border-y-transparent border-r-0 shadow-[inset_1px_0px_0px_0px]',
 uiTabStylePositionRightClass:' border-y-transparent  border-l-0 shadow-[inset_-1px_0px_0px_0px]',
};
