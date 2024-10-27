import { Teleport } from "vue";

export const coreProps = {
    teleport : { type : String, default : 'body'},
    closeOnOutside : { type : Boolean, default : false},
    modelValue : { type : Boolean, default : false},
}
export const uiProps = {
    modelValue : { type : Boolean, default : false},
}