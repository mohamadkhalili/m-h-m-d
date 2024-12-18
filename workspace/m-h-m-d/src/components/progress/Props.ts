export const coreProps = {
    modelValue : { type : Number, default : 50},
    pending : { type : Boolean, default : false},
}
export const uiProps = {
    modelValue : { type : Number, required: false},
    progressClass : { type : String, default : ''},
    progressFillClass : { type : String, default : ''},
    pending : { type : Boolean, required : false},
}