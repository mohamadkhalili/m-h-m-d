export interface coreSlots {
    item(props: { index: number, isActive: boolean, item: string }): any
}
export interface uiSlots {
    list(): any,
    item(props: { index: number, isActive: boolean, item: string, vertical: boolean, tooltip: boolean }): any
}