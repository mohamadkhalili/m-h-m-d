import { PropType } from 'vue';
import * as mdiIcons from "@mdi/js";
export interface item {
    title: string;
    icon: keyof typeof mdiIcons;
    disable: boolean;
    href: string;
}
export const coreProps = {
    modelValue: { type: Number, default: 1 },
    steps: {
        type: Array as PropType<item[]>,
        default: [
            { title: "tab", icon: "", disable: false, href: "tab" },
            { label: "pagination", icon: "", disable: false, href: "tab"  },
            { label: "modal", icon: "", disable: false, href: "tab" }
        ]
    },
    itemClass : { type: String, default: "" },
}