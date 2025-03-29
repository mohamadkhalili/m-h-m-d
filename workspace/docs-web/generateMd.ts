import * as fs from 'fs';
import * as path from 'path';

const componentsDir = path.join(__dirname, '../m-h-m-d/src/components');
const docsDir = path.join(__dirname, './docs/api');

function readFile(filePath: string): string {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, 'utf-8');
    }
    return '';
}

function generateMdForComponent(componentName: string) {
    const emitsPath = path?.join(componentsDir, componentName, 'Emits.ts');

    const propsPath = path?.join(componentsDir, componentName, 'Props.ts');
    const slotsPath = path?.join(componentsDir, componentName, 'Slots.ts');

    const emitsContent = readFile(emitsPath);
    let emitsOutputString = ''
    const emitLines = emitsContent.split(/\r?\n/)
    for (let emit of emitLines) {
        let cache = emit.split('//')
        let description = cache?.[1]
        let title = cache?.[0].split("\"")?.[1]
        if (title) {
            emitsOutputString = emitsOutputString + ('| ' + title + ' | ' + description + ' |' + '\n')
        }
    }

    const propsContent = readFile(propsPath);
    let propsOutputString = ''
    const propsLines = propsContent.split(/\r?\n/)
    for (let prop of propsLines) {
        let cache = prop.split('//')
        let description = cache?.[1]
        let section1 = cache?.[0]?.split("}")?.[0]?.split("{")
        let title = section1?.[0]?.split(":")?.[0]
        let sectionConfig = section1?.[1]?.split(",")
        let typeValue, defaultValue
        if (sectionConfig)
            for (let i of sectionConfig) {
                if (i.split("type:")?.[1])
                    typeValue = i.split("type:")?.[1]
                if (i.split("default:")?.[1])
                    defaultValue = i.split("default:")?.[1]
            }
        if (title && typeValue) {
            propsOutputString = propsOutputString + ('| '
                + '<div style="color : #100069FF;font-weight: bold;">' + camelToKebab(title) + '</div>'
                + ' | '
                + '<div style="color : #55CF65FF; text-align: center">' + typeValue + '</div>'
                + ' |'
                + '<div style="color : #241891FF; text-align: center">' + defaultValue + '</div>'
                + ' | '
                + '<div style="color : #505050FF;font-size: 12px">' + description + '</div>'
                + ' |'
                + '\n')
        }
    }


    const slotsContent = readFile(slotsPath);
    let slotsOutputString = ''
    const slotsLines = slotsContent.split(/\r?\n/)
    for (let slot of slotsLines) {
        let cache = slot.split('//')
        let description = cache?.[1]
        let section1 = cache?.[0]?.split(")")?.[0]?.split("(")
        let title = section1?.[0]
        let sectionProps = section1?.[1]?.split("}")?.[0]?.split("{")?.[1]?.split(',')
        let props = ''
        if (sectionProps)
            for (let i of sectionProps) {
                props = props + i.replace(/\s/g, '') + '<br/>'
            }
        if (title && props?.length > 0) {
            slotsOutputString = slotsOutputString + ('| '
                + '<div style="color : #100069FF;font-weight: bold;">' + camelToKebab(title) + '</div>'
                + ' | '
                + '<div style="color : #55CF65FF; text-align: center">' + props + '</div>'
                + ' |'
                + '<div style="color : #505050FF;font-size: 12px">' + description + '</div>'
                + ' |'
                + '\n')
        }
    }


    const mdContent = `# ${componentName} API Documentation



## Emits

| name | description |
| -------- | ------- |
${emitsOutputString}


## Props

| <div style="font-weight: bold;font-size:16px">name</div> | type | default | description |
| -------- | ------- | ------- | ------- |
${propsOutputString}


## Slots
| <div style="font-weight: bold;font-size:16px">name</div> | props(namne:type) | description |
| -------- | ------- | ------- |
${slotsOutputString}
`;

    const mdFilePath = path.join(docsDir, `${componentName}.md`);

    fs.writeFileSync(mdFilePath, mdContent, { encoding: 'utf-8' });
}

function generateAllDocs() {
    const components = fs.readdirSync(componentsDir);
    components.forEach(component => {
        if (fs.statSync(path.join(componentsDir, component)).isDirectory()) {
            generateMdForComponent(component);
        }
    });
}

const camelToKebab = str => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

generateAllDocs();

