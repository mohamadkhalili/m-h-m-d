export interface paginationSlots {
    superPrev(props: { disabled: boolean }): any, //The slot for the button that goes to the start page
    prev(props: { disabled: boolean }): any, //Slot for the button that goes to the prev page
    default(props: { isCurrentPage: boolean, isActive: boolean, page: number }): any, //Slot for making all pages
    next(props: { disabled: boolean }): any, //Slot for the button that goes to the next page
    superNext(props: { disabled: boolean }): any, //The slot for the button that goes to the end page
    searchPageInput(props: { enabled: boolean }): any, //A slot for making input to enter the page number that you want to go to
    searchPageBtn(props: { enabled: boolean }): any //A slot for making a button to enter the page number that you want to go to
}

export interface uiSlots {
    superPrev(props: { disabled: boolean, rtl: boolean }): any, //The slot for the button that goes to the start page
    prev(props: { disabled: boolean, rtl: boolean }): any, //Slot for the button that goes to the prev page
    default(props: { isCurrentPage: boolean, isActive: boolean }): any, //Slot for making all pages
    next(props: { disabled: boolean, rtl: boolean }): any, //Slot for the button that goes to the next page
    superNext(props: { disabled: boolean, rtl: boolean }): any, //The slot for the button that goes to the end page
    searchPageInput(props: { enabled: boolean }): any, //The slot for making input to enter the page number that you want to go to
    searchPageBtn(props: { enabled: boolean }): any //The slot for making a button to enter the page number that you want to go to
} //Here the rtl is sent to set the icons on the buttons correctly


