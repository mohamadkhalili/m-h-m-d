import { PropType } from 'vue';
import * as mdiIcons from "@mdi/js";
export interface item {
    title: string;
    disable: boolean;
}
export const coreProps = {
    modelValue: { type: String, default: "" },
    items: {
        type: Array as PropType<item[]>,
        default: [
            { title: "tab", disable: false },
            { title: "pagination", disable: true },
            { title: "modal", disable: false }
        ]
    }
}
export const uiProps = {
    modelValue: { type: String, required: false },
    itemClass : { type: String, required: false },
}