import { createSizeProp } from '../../composables/UseSizeProps'
import { createRoundedProp } from '../../composables/UseRoundedProps'
import { createBorderProp } from '../../composables/UseBorderProps';
import { createBgColorProp, createColorProp } from '../../composables/ColorComposable';

export const paginationProps = {
    pageSize: { type: Number, default: 20 },
    startCountPageShow: { type: Number, default: 2 },
    endCountPageShow: { type: Number, default: 2 },
    insideOfActivePageShow: { type: Number, default: 1 },
    modelValue: { type: Number, default: 1 },
    searchPage: { type: Number, default: 0 },
    enableSearchPage: { type: Boolean, default: false },
};

export const uiProps = {
    ...createColorProp(),
    ...createBgColorProp(),
    ...createRoundedProp(),
    ...createSizeProp(),
    ...createBorderProp(),
    modelValue: { type: Number, required: false },
    searchPage: { type: Number, required: false },
    rtl: { type: Boolean, default: true },
}