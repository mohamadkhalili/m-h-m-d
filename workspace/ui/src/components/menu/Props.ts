export const coreProps = {
    modelValue : { type : String},
    items : { type : Array as () => string[] },
    icons : { type : Array as () => string[], required : false },
    vertical : { type : Boolean, default : false },
    tooltip : {type : Boolean, default: false}
}