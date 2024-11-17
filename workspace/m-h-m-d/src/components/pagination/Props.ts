//import for create props we needed
import { createSizeProp } from '../../composables/UseSizeProps'
import { createRoundedProp } from '../../composables/UseRoundedProps'
import { createBorderProp } from '../../composables/UseBorderProps';
import { createBgColorProp, createColorProp } from '../../composables/ColorComposable';

export const paginationProps = {
    pageSize: { type: Number, default: 20 }, //Size of pages
    modelValue: { type: Number, default: 1 }, //the page it is on
    searchPage: { type: Number, default: 0 }, //the page it is on with search page input
    enableSearchPage: { type: Boolean, default: true }, //Whether to create a search page or not
    isEditingSearchPage: { type: Boolean, default: false }, // Whether to display the icon or enter input mode
};

export const uiProps = {
    ...createColorProp(), //Setting text color in active and inactive mode
    ...createBgColorProp(), //Set background color in active and inactive mode
    ...createRoundedProp(), //Set rounded for pages and button
    ...createSizeProp(), //Set size for pages and button
    ...createBorderProp(), //Set border for pages and button
    pageSize: { type: Number, default: 20, required: true }, //Size of pages
    modelValue: { type: Number, required: false }, //the page it is on
    searchPage: { type: Number, required: false }, //the page it is on with search page input
    rtl: { type: Boolean, default: true }, //Placement should be from right to left (if it is false, it will be reversed)
    isEditingSearchPage: { type: Boolean, required: false }, // Whether to display the icon or enter input mode
}