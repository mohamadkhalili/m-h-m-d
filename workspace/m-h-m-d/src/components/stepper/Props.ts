import { PropType } from 'vue';
export interface Step {
    label: string;
    number: number;
}
export const coreProps = {
    modelValue: { type: Number, default: 1 },
    steps: {
        type: Array as PropType<Step[]>,
        default: [
            { label: "step1", number: 1 },
            { label: "step2", number: 2 },
            { label: "step3", number: 3 }
        ]
    },
    vertical: { type: Boolean, default: false },
    tooltip: { type: Boolean, default: false },
}