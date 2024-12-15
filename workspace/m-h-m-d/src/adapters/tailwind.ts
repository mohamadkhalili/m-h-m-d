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


function deduplicateTailwindClasses(classString) {
    // تعریف نقشه کلاس‌ها به ویژگی‌ها و زیر ویژگی‌ها
    const classMapping = [
        // Width
        { regex: /^w-/, properties: ['width'] },
        // Height
        { regex: /^h-/, properties: ['height'] },
        // Size (فرض بر این است که 'size' کلاس سفارشی است که هم width و هم height را تنظیم می‌کند)
        { regex: /^size$/, properties: ['width', 'height'] },
        // Text Color
        { regex: /^text-(red|green|blue|yellow|purple|pink|indigo|gray|neutral|stone|amber|lime|emerald|teal|cyan|sky|violet|fuchsia|rose)-\d{3}$/, properties: ['textColor'] },
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
        { regex: /^bg-(red|green|blue|yellow|purple|pink|indigo|gray|neutral|stone|amber|lime|emerald|teal|cyan|sky|violet|fuchsia|rose)-\d{3}$/, properties: ['backgroundColor'] },
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
        { regex: /^rounded-(t|r|b|l|tl|tr|br|bl)$/, properties: ['borderTopRadius', 'borderRightRadius', 'borderBottomRadius', 'borderLeftRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'] }, // زیر ویژگی‌های متفاوت
        // Flex
        { regex: /^flex-(\d+|grow|shrink|none)$/, properties: ['flex'] },
        // Grid
        { regex: /^grid-(cols|rows)-\d+$/, properties: ['gridTemplateColumns', 'gridTemplateRows'] },
        // Border
        { regex: /^border(-[trbl]{1,2})?$/, properties: ['borderWidth', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'] },
        // Box Shadow
        { regex: /^shadow(-[a-z]+)?$/, properties: ['boxShadow'] },
        // اضافه کردن کلاس‌های دیگر به صورت مشابه
    ];

    // تابع برای یافتن ویژگی‌های مربوط به یک کلاس
    function getProperties(cls) {
        for (const mapping of classMapping) {
            if (mapping.regex.test(cls)) {
                return mapping.properties;
            }
        }
        return [];
    }

    const classes = classString.split(/\s+/);
    const propertyMap = {}; // نگهداری آخرین کلاس برای هر ویژگی
    const classToPropertiesMap = {}; // نگهداری ویژگی‌هایی که هر کلاس تنظیم می‌کند

    classes.forEach(cls => {
        // تقسیم کلاس بر اساس حالت‌ها مانند hover:, md:, lg: و غیره
        const parts = cls.split(':');
        const baseClass = parts.pop();
        const variants = parts; // مثلاً ['hover', 'md']

        // یافتن ویژگی‌هایی که این کلاس تنظیم می‌کند
        const properties = getProperties(baseClass);

        if (properties.length > 0) {
            // ایجاد یک کلید منحصر به فرد برای حالت‌ها
            const variantKey = variants.join(':'); // مثلاً "hover", "md:hover"

            properties.forEach(property => {
                const mapKey = variantKey ? `${variantKey}:${property}` : property;

                // انتساب کلاس به ویژگی در نقشه
                propertyMap[mapKey] = cls;

                // نگهداری اینکه این کلاس چه ویژگی‌هایی را تنظیم کرده است
                if (!classToPropertiesMap[cls]) {
                    classToPropertiesMap[cls] = new Set();
                }
                classToPropertiesMap[cls].add(mapKey);
            });
        } else {
            // اگر کلاس با هیچ ویژگی مشخصی مطابقت نداشت، آن را به صورت جداگانه نگه داریم
            const mapKey = variants.length > 0 ? `${variants.join(':')}:${baseClass}` : baseClass;
            propertyMap[mapKey] = cls;
            if (!classToPropertiesMap[cls]) {
                classToPropertiesMap[cls] = new Set();
            }
            classToPropertiesMap[cls].add(mapKey);
        }
    });

    // تعیین کلاس‌هایی که باید نگهداری شوند (کلاس‌هایی که آخرین بار یک ویژگی را تنظیم کرده‌اند)
    const classesToKeep = new Set(Object.values(propertyMap));

    // بازگرداندن کلاس‌ها بدون تکرار
    return Array.from(classesToKeep).join(' ');
}