import { ref, computed } from 'vue';

export function createColorProp(defaultActiveColor: string = 'text-white', defaultOnActiveColor: string = 'text-black'){
    return {
        activeTextColor: {
            type: String,
            default: defaultActiveColor
        },
        onActiveTextColor: {
            type: String,
            default: defaultOnActiveColor
        }
    };
}

export function createBgColorProp(defaultBgActiveColor: string = 'bg-slate-950', defaultBgOnActiveColor: string = 'bg-slate-200'){
    return {
        BgActiveColor: {
            type: String,
            default: defaultBgActiveColor
        },
        BgOnActiveColor: {
            type: String,
            default: defaultBgOnActiveColor
        }
    };
}

export function useColorClassName(props: {activeTextColor: string; onActiveTextColor: string}) {
    const className = computed(() => {
        return {
            active: `${props.activeTextColor}`,
            onActive: `${props.onActiveTextColor}`
        };
    })
    
    return className;
}

export function useBgColorClassName(props: { BgActiveColor: string; BgOnActiveColor: string }) {
    const className = computed(() => {
      return {
        active: `${props.BgActiveColor}`,
        onActive: `${props.BgOnActiveColor}`
      };
    });
  
    return className;
}
