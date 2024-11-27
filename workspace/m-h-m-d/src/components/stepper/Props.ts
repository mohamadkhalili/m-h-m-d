import { PropType } from 'vue';
import * as mdiIcons from "@mdi/js";
export interface Step {
    label: string;
    number: number;
    icon: keyof typeof mdiIcons;
}
export const coreProps = {
    modelValue: { type: Number, default: 1 },
    steps: {
        type: Array as PropType<Step[]>,
        default: [
            { label: "step1", number: 1, icon:"mdiCheck" },
            { label: "step2", number: 2, icon:"mdiCloudCheckVariantOutline"},
            { label: "step3", number: 3, icon:"mdiCheckDecagramOutline" }
        ]
    },
    vertical: { type: Boolean, default: false },
    tooltip: { type: Boolean, default: false },
}