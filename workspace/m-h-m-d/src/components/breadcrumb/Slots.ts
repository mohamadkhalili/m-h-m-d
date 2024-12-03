export interface coreSlots {
    item(props: { title: string, disable: boolean, end: boolean }): any
}
export interface uiSlots {
    item(props: { title: string, disable: boolean, end: boolean }): any
    separator(props: { }): any
}