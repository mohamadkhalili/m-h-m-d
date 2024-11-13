import { createSizeProp } from '../../composables/UseSizeProps'
import { createRoundedProp } from '../../composables/UseRoundedProps'
import { createBorderProp } from '../../composables/UseBorderProps';
import { createBgColorProp, createColorProp } from '../../composables/ColorComposable';

export const coreProps = {
    modelValue: { type: Boolean, default: false },
    location: { type: String, default: "top" }
}
export const uiProps = {
    ...createColorProp(),
    ...createBgColorProp(),
    ...createRoundedProp(),
    ...createSizeProp(),
    ...createBorderProp(),
    modelValue: { type: Boolean, required: false }
}
