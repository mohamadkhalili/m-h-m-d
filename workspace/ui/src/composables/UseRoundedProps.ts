import { PropType, computed } from 'vue';

export function createRoundedProp(defaultSize: string = 'rounded-full') {
    return {
        borderRadiusSize: {
            type: String,
            default: defaultSize
        }
    };
}
export function useRounded(props: { borderRadiusSize: string }) {
    const className = computed(() => {
        return `${props.borderRadiusSize}`;
    });
    return className;
}