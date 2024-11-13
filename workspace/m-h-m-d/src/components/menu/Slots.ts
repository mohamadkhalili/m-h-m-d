export interface coreSlots {
    menu(): any
}
export interface uiSlots {
    menu(): any,
    item(props: { index: number, isActive: boolean, item: string, vertical: boolean, tooltip: boolean }): any
}