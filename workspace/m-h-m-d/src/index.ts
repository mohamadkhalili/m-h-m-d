// src/index.ts
import { App } from 'vue';
import pagination from './components/pagination/Ui.vue';
import '../../styles/index';
import MainBtn from './components/button/Core.vue';
import mainInput from './components/input/Core.vue';

import { tooltip } from './directives/TooltipDirective';

const components = [{ name: 'pagination', ...pagination } /*, other components */];

const install = (app: App) => {
    components.forEach(component => {
        app.component(component.name, component);
    });
};


export { pagination };


export default {
    install
};

// export default {
//     install(app: App) {
//         app.directive('tooltipl', tooltip);
//         app.component('Main', pagination);
//         app.component('MainBtn', MainBtn);
//         app.component('MainInput', mainInput)

//     },
// };
