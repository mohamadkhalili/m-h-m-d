export interface coreSlots {
    input(): any,
    item(props: { isActive: boolean, item: string }): any
}
export interface uiSlots {
    alert(): any,
    icon(): any,
    title(): any,
    text(): any
}