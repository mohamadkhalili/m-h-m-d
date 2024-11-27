import { PropType } from 'vue';
import * as mdiIcons from "@mdi/js";
export interface Step {
    label: string;
    icon: keyof typeof mdiIcons;
}
export const coreProps = {
    modelValue: { type: Number, default: 1 },
    steps: {
        type: Array as PropType<Step[]>,
        default: [
            { label: "step1", icon: "mdiCheck" },
            { label: "step2", icon: "mdiCheck" },
            { label: "step3", icon: "mdiCheck" }
        ]
    },
    vertical: { type: Boolean, default: false },
    tooltip: { type: Boolean, default: false },
    allowStepClick: { type: Boolean, default: false },
}