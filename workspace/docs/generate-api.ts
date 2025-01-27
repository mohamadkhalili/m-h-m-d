// generate-api.ts
import fs from 'fs';
import path from 'path';
import { Project, SyntaxKind, VariableDeclaration, InterfaceDeclaration, PropertyAssignment } from 'ts-morph';
import glob from 'glob';
import Handlebars from 'handlebars';
import prettier from 'prettier';

// مقداردهی اولیه پروژه ts-morph
const project = new Project({
    tsConfigFilePath: 'tsconfig.json',
    skipAddingFilesFromTsConfig: true,
});

// مسیرها
const componentsDir = path.resolve(__dirname, 'src/components'); // براساس ساختار شما تنظیم شود
const outputDir = path.resolve(__dirname, 'docs/components');

// اطمینان از وجود دایرکتوری خروجی
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// رابط‌ها برای پراپ‌ها، Emits و Slots
interface Prop {
    name: string;
    type: string;
    default: string;
    description: string;
}

interface Emit {
    name: string;
    description: string;
}

interface Slot {
    name: string;
    description: string;
    props: string;
}

interface ComponentDoc {
    componentName: string;
    props: {
        core: Prop[];
        ui: Prop[];
    };
    emits: {
        core: Emit[];
        ui: Emit[];
    };
    slots: {
        core: Slot[];
        ui: Slot[];
    };
}

// تابع کمکی برای تجزیه پراپ‌ها
function parseProps(filePath: string): Prop[] {
    const sourceFile = project.addSourceFileAtPath(filePath);
    const props: Prop[] = [];

    const propsDeclarations = sourceFile.getVariableDeclarations();
    propsDeclarations.forEach((decl: VariableDeclaration) => {
        const varName = decl.getName();
        const initializer = decl.getInitializer();

        if (initializer && initializer.getKind() === SyntaxKind.ObjectLiteralExpression) {
            const properties = initializer.asKindOrThrow(SyntaxKind.ObjectLiteralExpression).getProperties();

            properties.forEach(prop => {
                if (prop.getKind() === SyntaxKind.PropertyAssignment) {
                    const propAssignment = prop.asKindOrThrow(SyntaxKind.PropertyAssignment);
                    const propName = propAssignment.getName().replace(/['"`]/g, '');
                    const propValue = propAssignment.getInitializer();

                    let type = 'Unknown';
                    let defaultValue = '—';
                    let description = '—';

                    if (propValue && propValue.getKind() === SyntaxKind.ObjectLiteralExpression) {
                        const objLiteral = propValue.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
                        const typeProperty = objLiteral.getProperty('type');
                        if (typeProperty && typeProperty.getKind() === SyntaxKind.PropertyAssignment) {
                            const typeInit = typeProperty.asKindOrThrow(SyntaxKind.PropertyAssignment).getInitializer();
                            type = typeInit ? typeInit.getText().replace(/Number|String|Boolean|Object|Array/g, match => match.toLowerCase()) : 'Unknown';
                        }

                        const defaultProperty = objLiteral.getProperty('default');
                        if (defaultProperty && defaultProperty.getKind() === SyntaxKind.PropertyAssignment) {
                            const defaultInit = defaultProperty.asKindOrThrow(SyntaxKind.PropertyAssignment).getInitializer();
                            defaultValue = defaultInit ? defaultInit.getText() : '—';
                        }

                        // استخراج توضیحات از کامنت‌ها
                        const jsDocs = propAssignment.getJsDocs();
                        if (jsDocs.length > 0) {
                            const comment = jsDocs[0].getComment();
                            if (typeof comment === 'string') {
                                description = comment;
                            }
                        }
                    }

                    props.push({
                        name: propName,
                        type,
                        default: defaultValue,
                        description,
                    });
                }
            });
        }
    });

    project.removeSourceFile(sourceFile);
    return props;
}

// تابع کمکی برای تجزیه Emits
function parseEmits(filePath: string): Emit[] {
    const sourceFile = project.addSourceFileAtPath(filePath);
    const emits: Emit[] = [];

    const emitsDeclaration = sourceFile.getVariableDeclaration('baseEmits');
    if (emitsDeclaration) {
        const initializer = emitsDeclaration.getInitializer();
        if (initializer && initializer.getKind() === SyntaxKind.ArrayLiteralExpression) {
            const elements = initializer.asKindOrThrow(SyntaxKind.ArrayLiteralExpression).getElements();
            elements.forEach(elem => {
                const emitName = elem.getText().replace(/['"`]/g, '');
                // استخراج توضیحات از کامنت‌ها
                const jsDocs = elem.getJsDocs();
                let description = '—';
                if (jsDocs.length > 0) {
                    const comment = jsDocs[0].getComment();
                    if (typeof comment === 'string') {
                        description = comment;
                    }
                }
                emits.push({
                    name: emitName,
                    description,
                });
            });
        }
    }

    project.removeSourceFile(sourceFile);
    return emits;
}

// تابع کمکی برای تجزیه Slots
function parseSlots(filePath: string): Slot[] {
    const sourceFile = project.addSourceFileAtPath(filePath);
    const slots: Slot[] = [];

    // فرض بر این است که Slots.ts رابط‌هایی مانند coreSlots و uiSlots صادر می‌کند
    const interfaces: InterfaceDeclaration[] = sourceFile.getInterfaces();
    interfaces.forEach(interfaceDecl => {
        const methods = interfaceDecl.getMethods();
        methods.forEach(method => {
            const slotName = method.getName();
            const params = method.getParameters()[0];
            let props = '—';
            if (params) {
                const paramType = params.getType().getText();
                props = `{ ${paramType} }`;
            }

            // استخراج توضیحات از کامنت‌ها
            const jsDocs = method.getJsDocs();
            let description = '—';
            if (jsDocs.length > 0) {
                const comment = jsDocs[0].getComment();
                if (typeof comment === 'string') {
                    description = comment;
                }
            }

            slots.push({
                name: slotName,
                description,
                props,
            });
        });
    });

    project.removeSourceFile(sourceFile);
    return slots;
}

// تابع برای پردازش یک کامپوننت خاص
function processComponent(componentName: string): ComponentDoc | null {
    const componentDir = path.join(componentsDir, componentName);
    const propsPath = path.join(componentDir, 'Props.ts');
    const emitsPath = path.join(componentDir, 'Emits.ts');
    const slotsPath = path.join(componentDir, 'Slots.ts');

    // بررسی وجود فایل‌ها
    if (!fs.existsSync(propsPath) || !fs.existsSync(emitsPath) || !fs.existsSync(slotsPath)) {
        console.warn(`فایل‌های مورد نیاز برای کامپوننت ${componentName} یافت نشدند.`);
        return null;
    }

    // تجزیه پراپ‌ها
    const allProps = parseProps(propsPath);
    const corePropNames = ['pageSize', 'modelValue', 'searchPage', 'enableSearchPage', 'isEditingSearchPage'];
    const uiPropNames = ['activeClass', 'onActiveClass', 'buttonClass', 'separatorClass', 'rtl'];

    const coreProps = allProps.filter(prop => corePropNames.includes(prop.name));
    const uiProps = allProps.filter(prop => uiPropNames.includes(prop.name));

    // تجزیه Emits
    const emits = parseEmits(emitsPath);

    // تجزیه Slots
    const slots = parseSlots(slotsPath);

    // جدا کردن Core و UI Slots
    const coreSlots = slots.filter(slot => ['superPrev', 'prev', 'default', 'next', 'superNext', 'searchPage'].includes(slot.name));
    const uiSlots = coreSlots.map(slot => {
        // اضافه کردن ویژگی‌های اضافی برای UI slots
        let additionalProps = '';
        if (['superPrev', 'prev', 'next', 'superNext'].includes(slot.name)) {
            additionalProps = ', rtl: boolean';
        }
        return {
            ...slot,
            props: slot.props.replace('} }', `${additionalProps} }`),
        };
    });

    // ساختاربندی داده‌ها
    const data: ComponentDoc = {
        componentName,
        props: {
            core: coreProps,
            ui: uiProps,
        },
        emits: {
            core: emits,
            ui: [], // فرض بر این است که Emits مخصوص به UI وجود ندارد
        },
        slots: {
            core: coreSlots,
            ui: uiSlots,
        },
    };

    return data;
}

// تابع برای تولید Markdown با استفاده از Handlebars
function generateMarkdown(data: ComponentDoc): string {
    const templateSource = `
# {{componentName}} Component

_A versatile {{componentName.toLowerCase()}} component._

## Props

### Core

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
{{#each props.core}}
| \`{{name}}\` | {{type}} | \`{{default}}\` | {{description}} |
{{/each}}

### UI

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
{{#each props.ui}}
| \`{{name}}\` | {{type}} | \`{{default}}\` | {{description}} |
{{/each}}

## Emits

### Core

| Event Name | Description |
|------------|-------------|
{{#each emits.core}}
| \`{{name}}\` | {{description}} |
{{/each}}

### UI

{{#if emits.ui.length}}
| Event Name | Description |
|------------|-------------|
{{#each emits.ui}}
| \`{{name}}\` | {{description}} |
{{/each}}
{{else}}
_No additional emits for UI. All emits are handled in the Core section._
{{/if}}

## Slots

### Core

| Slot Name | Description | Props |
|-----------|-------------|-------|
{{#each slots.core}}
| \`{{name}}\` | {{description}} | \`{{props}}\` |
{{/each}}

### UI

| Slot Name | Description | Props |
|-----------|-------------|-------|
{{#each slots.ui}}
| \`{{name}}\` | {{description}} | \`{{props}}\` |
{{/each}}
    `;

    const template = Handlebars.compile(templateSource);
    return template(data);
}

// تابع برای تولید فایل index.md
function generateIndex(components: string[]): void {
    const indexTemplateSource = `
# Components

{{#each components}}
- [{{this}}](/components/{{this}})
{{/each}}
    `;

    const indexTemplate = Handlebars.compile(indexTemplateSource);
    const indexContent = indexTemplate({ components });
    const formattedIndex = prettier.format(indexContent, { parser: 'markdown' });
    fs.writeFileSync(path.join(outputDir, 'index.md'), formattedIndex, 'utf8');
    console.log('فایل index.md تولید شد.');
}

// تابع اصلی برای تولید مستندات برای همه کامپوننت‌ها
function generateDocs(): void {
    // دریافت همه دایرکتوری‌های کامپوننت
    const componentDirs = glob.sync(`${componentsDir}/*/`).map(dir => path.basename(dir));

    const allComponentDocs: string[] = [];

    componentDirs.forEach(componentName => {
        const data = processComponent(componentName);
        if (!data) return;

        const markdownContent = generateMarkdown(data);
        const formattedContent = prettier.format(markdownContent, { parser: 'markdown' });

        // نوشتن در فایل
        const outputPath = path.join(outputDir, `${componentName}.md`);
        fs.writeFileSync(outputPath, formattedContent, 'utf8');
        console.log(`مستندات برای کامپوننت ${componentName} تولید شد.`);
        allComponentDocs.push(componentName);
    });

    // تولید index.md
    generateIndex(allComponentDocs);
}

// اجرای تولید مستندات
generateDocs();
