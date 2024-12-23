import * as mdiIcons from "@mdi/js";
import { PropType } from "vue";
export const coreProps = {
    modelValue: { type: Boolean, default: true },
    icon: { type: String as PropType<keyof typeof mdiIcons>, default: "" },
    title: { type: String, default: "" },
    text: { type: String, default: "" },
}

export const uiProps = {
    modelValue: { type: Boolean, required: true },
    icon: { type: String as PropType<keyof typeof mdiIcons>, required: false },
    title: { type: String, required: false },
    text: { type: String, required: false },
}