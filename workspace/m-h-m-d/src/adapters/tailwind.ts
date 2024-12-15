import { getCurrentInstance } from 'vue';

export function addPrefixToTailwindClasses(classString: string) {
    const { appContext }: any = getCurrentInstance();
    const prefix = appContext.config.globalProperties.$config?.classPrefix
    return classString.split(' ').map(cls => {
        const parts = cls.split(':');
        parts[parts.length - 1] = `${prefix || ''}${parts[parts.length - 1]}`;
        return parts.join(':');
    }).join(' ')
}
