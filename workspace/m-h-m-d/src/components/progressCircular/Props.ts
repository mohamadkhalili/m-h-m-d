export const coreProps = {
    modelValue : { type : Number, default : 50},
    pending : { type : Boolean, default : false},
}
export const uiProps = {
    modelValue : { type : Number, required: false},
    rotate : { type : Number, default: 0},
    showNumberFill : { type : Boolean, default: false},
    progressClass : { type : String, default : ''},
    progressContainerClass : { type : String, default : ''},
    progressFillClass : { type : String, default : ''},
    numberFillClass : { type : String, default : ''},
}