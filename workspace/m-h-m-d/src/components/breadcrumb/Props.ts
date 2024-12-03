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
            { title: "item1", disable: true },
            { title: "item2", disable: false },
            { title: "item3", disable: false }
        ]
    }
}
export const uiProps = {
    modelValue: { type: String, required: false },
    activeClass : { type: String, default: "" },
    onActiveClass : { type: String, default: "" },
    disableClass : { type: String, default: "" },
}