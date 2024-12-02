export interface stepperSlots {
    progress( props : { }): any,
    progressBar( props : { }): any,
    step(props: { index: number, step: object, currentStep: number, status: string }): any, 
}