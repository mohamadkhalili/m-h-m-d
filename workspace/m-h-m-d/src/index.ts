// src/index.ts
import { App } from 'vue';
import pagination from './components/pagination/Ui.vue';
import modal from './components/modal/Ui.vue';
import Button from './components/button/Ui.vue';
import input from './components/input/Ui.vue';
import menu from './components/menu/Ui.vue';
import tab from './components/tab/Ui.vue';
import ChatBubble from './components/ChatBubble/Ui.vue';
import Switch from './components/Switch/Ui.vue';
import Breadcrumb from './components/breadcrumb/Ui.vue'
import CheckBox from './components/CheckBox/Ui.vue';
import Card from './components/Card/Ui.vue';
import Divider from './components/Divider/Ui.vue';
import list from './components/list/Ui.vue'
import { tooltip } from './directives/TooltipDirective';
import  clickOutside  from './directives/clickOutSide';
import  stepper  from './components/stepper/Core.vue';
const components = [
    { name: 'pagination', ...pagination },
    { name: 'modal', ...modal },
    { name: 'Button', ...Button },
    { name: 'input', ...input },
    { name: 'menu', ...menu },
    { name: 'tab', ...tab },
    { name: 'ChatBubble', ...ChatBubble },
    { name: 'Card', ...Card },
    { name: 'Switch', ...Switch },
    { name: 'CheckBox', ...CheckBox },
    { name: 'Divider', ...Divider },
    { name: 'list', ...list},
    { name: 'stepper', ...stepper},
    { name: 'breadcrumb', ...Breadcrumb},
]

const directives = {
    tooltip,
    clickOutside,
}

const install = (app: App) => {
    components.forEach(component => {
        app.component(component.name, component);
    });
    Object.entries(directives).forEach(([name, directive]) => {
        app.directive(name, directive);
    });

}




export { pagination, modal, Button, input, menu, tab, list,ChatBubble,Divider, stepper ,Card, Switch, CheckBox, Breadcrumb}
export { tooltip }

export default {
    install
}

// export default {
//     install(app: App) {
//         app.directive('tooltipl', tooltip);
//         app.component('Main', pagination);
//         app.component('MainBtn', MainBtn);
//         app.component('MainInput', mainInput)

//     },
// };
