import { getCurrentInstance } from 'vue';

export function addPrefixToTailwindClasses(classString: string) {
    const instance: any = getCurrentInstance();
    const prefix = instance?.appContext?.config?.globalProperties?.$config?.classPrefix
    const miniClass = deduplicateTailwindClasses(classString)
    return miniClass.split(' ').map(cls => {
        const parts = cls.split(':');
        parts[parts.length - 1] = `${prefix || ''}${parts[parts.length - 1]}`;
        return parts.join(':');
    }).join(' ')
}



interface ClassMapping {
    regex: RegExp;
    properties: string[];
}

const classMappings: ClassMapping[] = [
    // Width
    { regex: /^w-/, properties: ['width'] },
    // Height
    { regex: /^h-/, properties: ['height'] },
    // Size
    { regex: /^size$/, properties: ['width', 'height'] },
    // Text Color
    { regex: /^text-(red|green|blue|yellow|purple|pink|indigo|gray|slate|neutral|stone|amber|lime|emerald|teal|cyan|sky|violet|fuchsia|rose|white|black)(-\d{3}|)$/, properties: ['textColor'] },
    // Text Size
    { regex: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/, properties: ['fontSize'] },
    // Text Align
    { regex: /^text-(left|center|right|justify)$/, properties: ['textAlign'] },
    // Font Weight
    { regex: /^text-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/, properties: ['fontWeight'] },
    // Text Decoration
    { regex: /^text-decoration-(none|underline|line-through|underline line-through)$/, properties: ['textDecoration'] },
    // Line Height
    { regex: /^leading-(none|tight|snug|normal|relaxed|loose)$/, properties: ['lineHeight'] },
    // Letter Spacing
    { regex: /^tracking-(tighter|tight|normal|wide|wider|widest)$/, properties: ['letterSpacing'] },
    // Background Color
    { regex: /^bg-(transparent|red|white|green|blue|yellow|purple|black|pink|indigo|gray|slate|neutral|stone|amber|lime|emerald|teal|cyan|sky|violet|fuchsia|rose)(-\d{3}|)$/, properties: ['backgroundColor'] },
    { regex: /^border-(transparent|red|white|green|blue|yellow|purple|black|pink|indigo|gray|slate|neutral|stone|amber|lime|emerald|teal|cyan|sky|violet|fuchsia|rose)(-\d{3}|)$/, properties: ['borderColor'] },
    // Padding
    { regex: /^p-(\d+|px|sm|md|lg|xl)$/, properties: ['padding'] },
    { regex: /^pt-(\d+|px|sm|md|lg|xl)$/, properties: ['paddingTop'] },
    { regex: /^pr-(\d+|px|sm|md|lg|xl)$/, properties: ['paddingRight'] },
    { regex: /^pb-(\d+|px|sm|md|lg|xl)$/, properties: ['paddingBottom'] },
    { regex: /^pl-(\d+|px|sm|md|lg|xl)$/, properties: ['paddingLeft'] },
    // Margin
    { regex: /^m-(\d+|px|sm|md|lg|xl)$/, properties: ['margin'] },
    { regex: /^mt-(\d+|px|sm|md|lg|xl)$/, properties: ['marginTop'] },
    { regex: /^mr-(\d+|px|sm|md|lg|xl)$/, properties: ['marginRight'] },
    { regex: /^mb-(\d+|px|sm|md|lg|xl)$/, properties: ['marginBottom'] },
    { regex: /^ml-(\d+|px|sm|md|lg|xl)$/, properties: ['marginLeft'] },
    // Border Radius
    { regex: /^rounded$/, properties: ['borderRadius'] },
    { regex: /^rounded-(t|r|b|l|tl|tr|br|bl|none|xl|sm|lg|md|2xl|3xl|full)$/, properties: ['borderTopRadius', 'borderRightRadius', 'borderBottomRadius', 'borderLeftRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'] },
    // Flex
    { regex: /^flex-(\d+|grow|shrink|none)$/, properties: ['flex'] },
    // Grid
    { regex: /^grid-(cols|rows)-\d+$/, properties: ['gridTemplateColumns', 'gridTemplateRows'] },
    // Border
    { regex: /^border(-[trbl]{1,2})?$/, properties: ['borderWidth', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'] },
    // Box Shadow
    { regex: /^shadow(-[a-z]+)?$/, properties: ['boxShadow'] },
];

function getProperties(cls: string): string[] {
    for (const mapping of classMappings) {
        if (mapping.regex.test(cls)) {
            if (mapping.properties.includes('borderTopRadius') || mapping.properties.includes('borderRightRadius') ||
                mapping.properties.includes('borderBottomRadius') || mapping.properties.includes('borderLeftRadius') ||
                mapping.properties.includes('borderTopLeftRadius') || mapping.properties.includes('borderTopRightRadius') ||
                mapping.properties.includes('borderBottomRightRadius') || mapping.properties.includes('borderBottomLeftRadius')) {
                const borderRadiusRegex = /^rounded-([trbl]{1,2})$/;
                const match = cls.match(borderRadiusRegex);
                if (match) {
                    const side = match[1];
                    switch (side) {
                        case 't':
                            return ['borderTopRadius'];
                        case 'r':
                            return ['borderRightRadius'];
                        case 'b':
                            return ['borderBottomRadius'];
                        case 'l':
                            return ['borderLeftRadius'];
                        case 'tl':
                            return ['borderTopLeftRadius'];
                        case 'tr':
                            return ['borderTopRightRadius'];
                        case 'br':
                            return ['borderBottomRightRadius'];
                        case 'bl':
                            return ['borderBottomLeftRadius'];
                        default:
                            return ['borderRadius'];
                    }
                }
            }
            return mapping.properties;
        }
    }
    return [];
}

export function deduplicateTailwindClasses(classString: string): string {
    const classes = classString.trim().split(/\s+/);
    const propertyMap: Map<string, string> = new Map();
    const classToPropertiesMap: Map<string, Set<string>> = new Map();
    classes.forEach(cls => {
        const parts = cls.split(':');
        const baseClass = parts.pop() as string;
        const variants = parts;

        const properties = getProperties(baseClass);

        if (properties.length > 0) {
            const variantKey = variants.join(':');

            properties.forEach(property => {
                const mapKey = variantKey ? `${variantKey}:${property}` : property;

                propertyMap.set(mapKey, cls);

                if (!classToPropertiesMap.has(cls)) {
                    classToPropertiesMap.set(cls, new Set());
                }
                classToPropertiesMap.get(cls)!.add(mapKey);
            });
        } else {
            const mapKey = variants.length > 0 ? `${variants.join(':')}:${baseClass}` : baseClass;
            propertyMap.set(mapKey, cls);
            if (!classToPropertiesMap.has(cls)) {
                classToPropertiesMap.set(cls, new Set());
            }
            classToPropertiesMap.get(cls)!.add(mapKey);
        }
    });

    const classesToKeep = new Set(propertyMap.values());

    return Array.from(classesToKeep).join(' ');
}