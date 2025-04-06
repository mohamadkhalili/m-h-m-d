export const coreProps = {
    title: { type: String, default: "title" },
    text: { type: String, default: "title" },
}

export const uiProps = {
    title: { type: String, required: true },
    text: { type: String, required: true },
    activeTitleClass: { type: String, default: "" },
    onActiveTitleClass: { type: String, default: "" },
    activeTextClass: { type: String, default: "" },
    onActiveTextClass: { type: String, default: "" },
}
