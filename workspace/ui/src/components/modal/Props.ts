import { Teleport } from "vue";

export const coreProps = {
    teleport : { type : Teleport},
    closeOnOutside : { type : Boolean, default : false},
    modelValue : { type : Boolean, default : false},
}