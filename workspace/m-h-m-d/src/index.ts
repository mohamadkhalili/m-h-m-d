// src/index.ts
import { App } from 'vue';
import pagination from './components/pagination/Ui.vue';
import modal from './components/modal/Ui.vue';
import Button from './components/button/Ui.vue';
import input from './components/input/Ui.vue';
import menu from './components/menu/Ui.vue';
import tab from './components/tab/Ui.vue';
import ChatBubble from './components/ChatBubble/Ui.vue';
import list from './components/list/Ui.vue'
import MainBtn from './components/button/Core.vue';
import mainInput from './components/input/Core.vue';
import { tooltip } from './directives/TooltipDirective';
import  clickOutside  from './directives/clickOutSide'

const components = [
    { name: 'pagination', ...pagination },
    { name: 'modal', ...modal },
    { name: 'Button', ...Button },
    { name: 'input', ...input },
    { name: 'menu', ...menu },
    { name: 'tab', ...tab },
    { name: 'ChatBubble', ...ChatBubble },
    { name: 'list', ...list}
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


export { pagination, modal, Button, input, menu, tab, list,ChatBubble }
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
