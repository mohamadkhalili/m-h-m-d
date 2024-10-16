import { PropType, computed } from 'vue';

export function createSizeProp(defaultSize: string = 'size-10') {
    return {
        size: {
            type: String,
            default: defaultSize
        }
    };
}
export function useSize(props: { size: string }) {
    const className = computed(() => {
        return `${props.size}`;
    });
    
    return className;
}