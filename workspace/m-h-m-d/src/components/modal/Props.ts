import { Teleport } from "vue";
import { createBgColorProp, createColorProp } from "../../composables/ColorComposable";

export const coreProps = {
    teleport : { type : String, default : 'body'},
    closeOnOutside : { type : Boolean, default : false},
    modelValue : { type : Boolean, default : false},
}
export const uiProps = {
    ...createColorProp(),
    ...createBgColorProp(),
    modelValue : { type : Boolean, default : false},
}