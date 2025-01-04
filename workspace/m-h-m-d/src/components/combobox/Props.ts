import { PropType } from "vue"

export const coreProps = {
    modelValue: { type: [String, Array] as PropType<string| string[]> },
    items : { type : Array as PropType<string[]>},
    multiple : { type : Boolean, default: false},
    label : { type : String, default : ''},
    enableChip : {type: Boolean, default : false},
}
export const uiProps = {
    modelValue: { type: [String, Array] as PropType<string| string[]> },
    label : { type : String, required : false},
    multiple : { type : Boolean, required : false},
    items : { type : Array as PropType<string[]>},
    enableChip : {type: Boolean, required : false},
}