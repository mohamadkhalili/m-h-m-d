import { PropType, computed } from 'vue';

export function createBorderProp(defaultStyle: string = '') {
    return {
        borderStyle: {
            type: String,
            default: defaultStyle
        }
    };
}
export function useBorder(props: { borderStyle: string }) {
    const class_name = computed(() => {
        return `${props.borderStyle}`;
    });
    
    return class_name;
}