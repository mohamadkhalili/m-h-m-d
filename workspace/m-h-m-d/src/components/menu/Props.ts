import { createSizeProp } from '../../composables/UseSizeProps'
import { createRoundedProp } from '../../composables/UseRoundedProps'
import { createBgColorProp, createColorProp } from '../../composables/ColorComposable';

export const coreProps = {
    modelValue: { type: Boolean, default: false },
    location: { type: String, default: "top" }
}
export const uiProps = {
    ...createBgColorProp(),
    rounded : {type : String, default : "rounded-lg"},
    size : {type : String, default : "w-28 h-20"},
    modelValue : { type : Boolean, default : false},
    closeOutside : { type : Boolean, default : false},
}
