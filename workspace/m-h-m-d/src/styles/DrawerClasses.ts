export const drawerClasses = {
    base: 'fixed shadow-xl border-[1px] transition-transform z-50',
    openRight: 'top-0 right-0 h-full w-[400px] transform translate-x-0',
    closedRight: 'top-0 right-0 h-full w-[400px] transform translate-x-full',
    openLeft: 'top-0 left-0 h-full w-[400px] transform translate-x-0',
    closedLeft: 'top-0 left-0 h-full w-[400px] transform -translate-x-full',
    openTop: 'top-0 left-0 w-full h-[300px] transform translate-y-0',
    closedTop: 'top-0 left-0 w-full h-[300px] transform -translate-y-full',
    openBottom: 'bottom-0 left-0 w-full h-[300px] transform translate-y-0',
    closedBottom: 'bottom-0 left-0 w-full h-[300px] transform translate-y-full',
};
