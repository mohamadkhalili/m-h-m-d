import { createSizeProp } from '../../composables/UseSizeProps'
import { createRoundedProp } from '../../composables/UseRoundedProps'
import { createBgColorProp, createColorProp } from '../../composables/ColorComposable';

export const coreProps = {
    modelValue: { type: Boolean, default: false },
    location: { type: String, default: "top" }
}
export const uiProps = {
    ...createBgColorProp(),
    ...createRoundedProp(),
    ...createSizeProp(),
    modelValue : { type : Boolean, default : false},
}
