

export const paginationProps = {
    pageSize: { type: Number, default: 20 }, //Size of pages
    modelValue: { type: Number, default: 1 }, //the page it is on
    searchPage: { type: Number, default: 0 }, //the page it is on with search page input
    enableSearchPage: { type: Boolean, default: true }, //Whether to create a search page or not
    isEditingSearchPage: { type: Boolean, default: false }, // Whether to display the icon or enter input mode
};

export const uiProps = {
    activeClass: { type: String, default: '' }, //test test activeClass
    onActiveClass: { type: String, default: '' }, //test test onActiveClass
    buttonClass: { type: String, default: '' }, //test test buttonClass
    separatorClass: { type: String, default: '' }, //test test separatorClass
    pageSize: { type: Number, default: 20, required: false }, //Size of pages
    modelValue: { type: Number, required: false }, //the page it is on
    searchPage: { type: Number, required: false }, //the page it is on with search page input
    rtl: { type: Boolean, default: true }, //Placement should be from right to left (if it is false, it will be reversed)
    isEditingSearchPage: { type: Boolean, required: false }, // Whether to display the icon or enter input mode
}