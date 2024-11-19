import { Teleport } from "vue";
import { createBgColorProp, createColorProp } from "../../composables/ColorComposable";

export const coreProps = {
    modalClass : { type : String, default : ''},
    outsideClass : { type : String, default : ''},
    teleport : { type : String, default : 'body'},
    closeOnOutside : { type : Boolean, default : false},
    modelValue : { type : Boolean, default : false},
}
export const uiProps = {
    modelValue : { type : Boolean, default : false},
}