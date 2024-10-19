import { ref, computed } from 'vue';

export function createColorProp(defaultActiveColor: string = 'text-white', defaultOnActiveColor: string = 'text-black') {
    return {
        activeTextColor: {
            type: String,
            default: defaultActiveColor
        },
        textColor: {
            type: String,
            default: defaultOnActiveColor
        }
    };
}

export function createBgColorProp(defaultBgActiveColor: string = 'bg-slate-950', defaultBgOnActiveColor: string = 'bg-slate-200') {
    return {
        activeColor: {
            type: String,
            default: defaultBgActiveColor
        },
        color: {
            type: String,
            default: defaultBgOnActiveColor
        }
    };
}

export function useColorClassName(props: { activeTextColor: string; textColor: string }) {
    const className = computed(() => {
        return {
            active: `${props.activeTextColor}`,
            onActive: `${props.textColor}`
        };
    })

    return className;
}

export function useBgColorClassName(props: { activeColor: string; color: string }) {
    const className = computed(() => {
        return {
            active: `${props.activeColor}`,
            onActive: `${props.color}`
        };
    });

    return className;
}
