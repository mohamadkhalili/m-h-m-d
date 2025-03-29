"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var componentsDir = path.join(__dirname, '../m-h-m-d/src/components'); // مسیر کامپوننت‌ها
var docsDir = path.join(__dirname, './docs/api'); // مسیر ذخیره فایل‌های MD
function readFile(filePath) {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, 'utf-8');
    }
    return '';
}
function generateMdForComponent(componentName) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    var emitsPath = path === null || path === void 0 ? void 0 : path.join(componentsDir, componentName, 'Emits.ts');
    var propsPath = path === null || path === void 0 ? void 0 : path.join(componentsDir, componentName, 'Props.ts');
    var slotsPath = path === null || path === void 0 ? void 0 : path.join(componentsDir, componentName, 'Slots.ts');
    var emitsContent = readFile(emitsPath);
    var emitsOutputString = '';
    var emitLines = emitsContent.split(/\r?\n/);
    for (var _i = 0, emitLines_1 = emitLines; _i < emitLines_1.length; _i++) {
        var emit = emitLines_1[_i];
        var cache = emit.split('//');
        var description = cache === null || cache === void 0 ? void 0 : cache[1];
        var title = (_a = cache === null || cache === void 0 ? void 0 : cache[0].split("\"")) === null || _a === void 0 ? void 0 : _a[1];
        if (title) {
            emitsOutputString = emitsOutputString + ('| ' + title + ' | ' + description + ' |' + '\n');
        }
    }
    var propsContent = readFile(propsPath);
    var propsOutputString = '';
    var propsLines = propsContent.split(/\r?\n/);
    for (var _v = 0, propsLines_1 = propsLines; _v < propsLines_1.length; _v++) {
        var prop = propsLines_1[_v];
        var cache = prop.split('//');
        var description = cache === null || cache === void 0 ? void 0 : cache[1];
        var section1 = (_d = (_c = (_b = cache === null || cache === void 0 ? void 0 : cache[0]) === null || _b === void 0 ? void 0 : _b.split("}")) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.split("{");
        var title = (_f = (_e = section1 === null || section1 === void 0 ? void 0 : section1[0]) === null || _e === void 0 ? void 0 : _e.split(":")) === null || _f === void 0 ? void 0 : _f[0];
        var sectionConfig = (_g = section1 === null || section1 === void 0 ? void 0 : section1[1]) === null || _g === void 0 ? void 0 : _g.split(",");
        var typeValue = void 0, defaultValue = void 0;
        if (sectionConfig)
            for (var _w = 0, sectionConfig_1 = sectionConfig; _w < sectionConfig_1.length; _w++) {
                var i = sectionConfig_1[_w];
                if ((_h = i.split("type:")) === null || _h === void 0 ? void 0 : _h[1])
                    typeValue = (_j = i.split("type:")) === null || _j === void 0 ? void 0 : _j[1];
                if ((_k = i.split("default:")) === null || _k === void 0 ? void 0 : _k[1])
                    defaultValue = (_l = i.split("default:")) === null || _l === void 0 ? void 0 : _l[1];
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
                + '\n');
        }
    }
    var slotsContent = readFile(slotsPath);
    var slotsOutputString = '';
    var slotsLines = slotsContent.split(/\r?\n/);
    for (var _x = 0, slotsLines_1 = slotsLines; _x < slotsLines_1.length; _x++) {
        var slot = slotsLines_1[_x];
        var cache = slot.split('//');
        var description = cache === null || cache === void 0 ? void 0 : cache[1];
        var section1 = (_p = (_o = (_m = cache === null || cache === void 0 ? void 0 : cache[0]) === null || _m === void 0 ? void 0 : _m.split(")")) === null || _o === void 0 ? void 0 : _o[0]) === null || _p === void 0 ? void 0 : _p.split("(");
        var title = section1 === null || section1 === void 0 ? void 0 : section1[0];
        var sectionProps = (_u = (_t = (_s = (_r = (_q = section1 === null || section1 === void 0 ? void 0 : section1[1]) === null || _q === void 0 ? void 0 : _q.split("}")) === null || _r === void 0 ? void 0 : _r[0]) === null || _s === void 0 ? void 0 : _s.split("{")) === null || _t === void 0 ? void 0 : _t[1]) === null || _u === void 0 ? void 0 : _u.split(',');
        var props = '';
        if (sectionProps)
            for (var _y = 0, sectionProps_1 = sectionProps; _y < sectionProps_1.length; _y++) {
                var i = sectionProps_1[_y];
                props = props + i.replace(/\s/g, '') + '<br/>';
            }
        if (title && (props === null || props === void 0 ? void 0 : props.length) > 0) {
            slotsOutputString = slotsOutputString + ('| '
                + '<div style="color : #100069FF;font-weight: bold;">' + camelToKebab(title) + '</div>'
                + ' | '
                + '<div style="color : #55CF65FF; text-align: center">' + props + '</div>'
                + ' |'
                + '<div style="color : #505050FF;font-size: 12px">' + description + '</div>'
                + ' |'
                + '\n');
        }
    }
    var mdContent = "# ".concat(componentName, " API Documentation\n\n\n\n## Emits\n\n| name | description |\n| -------- | ------- |\n").concat(emitsOutputString, "\n\n\n## Props\n\n| <div style=\"font-weight: bold;font-size:16px\">name</div> | type | default | description |\n| -------- | ------- | ------- | ------- |\n").concat(propsOutputString, "\n\n\n## Slots\n| <div style=\"font-weight: bold;font-size:16px\">name</div> | props(namne:type) | description |\n| -------- | ------- | ------- |\n").concat(slotsOutputString, "\n");
    var mdFilePath = path.join(docsDir, "".concat(componentName, ".md"));
    fs.writeFileSync(mdFilePath, mdContent, { encoding: 'utf-8' });
}
function generateAllDocs() {
    var components = fs.readdirSync(componentsDir);
    components.forEach(function (component) {
        if (fs.statSync(path.join(componentsDir, component)).isDirectory()) {
            generateMdForComponent(component);
        }
    });
}
var camelToKebab = function (str) { return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(); };
generateAllDocs();
